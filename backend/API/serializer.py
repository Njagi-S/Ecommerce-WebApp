import re
from rest_framework import serializers
from django.core.validators import RegexValidator
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Products, UserRegistration # Import both models

class productSerializer(serializers.ModelSerializer):
    """
    Serializer for the Products model.
    It exposes all fields of the Products model for API operations.
    """
    class Meta:
        model = Products
        fields = '__all__'


##### User registration logic #####
# Custom validator for names (letters, spaces, apostrophes)
def validate_name_characters(value):
    """
    Validates that a name string contains only letters, spaces, and apostrophes.
    This helps prevent invalid characters from being stored in name fields.
    """
    if not re.match(r"^[a-zA-Z ']+$", value):
        raise serializers.ValidationError("Name can only contain letters, spaces, and apostrophes.")

# Custom validator for password strength
# This function enforces a robust password policy.
def validate_password_strength(value):
    """
    Enforces a password strength policy including length,
    case, digits, and special characters.
    """
    if len(value) < 8 or len(value) > 16:
        raise serializers.ValidationError("Password must be between 8 and 16 characters long.")
    if not re.search(r"[A-Z]", value):
        raise serializers.ValidationError("Password must contain at least one uppercase letter.")
    if not re.search(r"[a-z]", value):
        raise serializers.ValidationError("Password must contain at least one lowercase letter.")
    if not re.search(r"\d", value):
        raise serializers.ValidationError("Password must contain at least one digit.")
    if not re.search(r"[!@#$%^&*()_+={}[\]:;<>,.?~\\-]", value):
        raise serializers.ValidationError("Password must contain at least one special character.")

# Custom validator for username
def validate_username_chars(value):
    """
    Validates that the username contains only letters, numbers, and underscores.
    """
    if not re.match(r"^[a-zA-Z0-9_]+$", value):
        raise serializers.ValidationError("Username can only contain letters, numbers, and underscores.")

class UserRegistrationSerializer(serializers.ModelSerializer):
    """
    Serializer for handling user registration.
    It includes custom validation rules for various fields.
    """
    password = serializers.CharField(
        write_only=True,
        validators=[validate_password_strength]
    )
    confirm_password = serializers.CharField(write_only=True)
    
    phone = serializers.CharField(
        max_length=15, 
        validators=[
            RegexValidator(
                regex=r"^\+?[0-9()\-\s]{6,15}$",
                message="Enter a valid international phone number format."
            )
        ]
    )
    
    first_name = serializers.CharField(validators=[validate_name_characters])
    middle_name = serializers.CharField(required=False, validators=[validate_name_characters])
    last_name = serializers.CharField(validators=[validate_name_characters])
    
    username = serializers.CharField(max_length=8, validators=[validate_username_chars])
    
    email = serializers.EmailField()
    class Meta:
        model = UserRegistration
        fields = (
            'first_name', 'middle_name', 'last_name', 'username',
            'email', 'phone', 'dob', 'gender', 'password', 'confirm_password'
        )

    def to_internal_value(self, data):
        """
        Overrides the default method to process the data before validation.
        It capitalizes names and converts the username to lowercase.
        """
        # Create a mutable copy of the data
        data_mut = data.copy()
        
        # Capitalize each word for name fields
        for field in ['first_name', 'middle_name', 'last_name']:
            if data_mut.get(field):
                data_mut[field] = data_mut[field].title()
        
        # Convert username to lowercase
        if data_mut.get('username'):
            data_mut['username'] = data_mut['username'].lower()
        
        return super().to_internal_value(data_mut)

    def validate(self, data):
        """
        Custom validation to ensure password and confirm_password match.
        """
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        
        # Remove confirm_password as it is not part of the model fields
        del data['confirm_password']
        return data

    def create(self, validated_data):
        """
        Creates and saves a new user. This is the corrected method.
        It hashes the password using make_password() and then creates the user
        instance with the hashed password.
        """
        # Hash the password first before creating the user object
        validated_data['password'] = make_password(validated_data['password'])
        
        # Now create and return the user object with the hashed password
        return UserRegistration.objects.create(**validated_data)
    
####### Login ############
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    A custom serializer to handle user authentication and JWT token generation.
    It overrides the default behavior to use 'email' as the username field
    for login, which is necessary for a custom user model.
    """
    # This specifies that the 'username' field in the token request
    # should be matched against the 'email' field in your UserRegistration model.
    username_field = 'email'
