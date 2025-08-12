# from django.db import models

# # Create your models here.
# class Products(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100)
#     description = models.TextField()
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     image= models.URLField(blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)
    
    
#     def __str__(self):
#         return self.name

# class UserRegistration(models.Model):
#     first_name = models.CharField(max_length=50)
#     middle_name = models.CharField(max_length=50, blank=True, null=True)
#     last_name = models.CharField(max_length=50)
#     username = models.CharField(max_length=150, unique=True)
#     email = models.EmailField(unique=True)
#     phone = models.CharField(max_length=15, unique=True)
#     dob = models.DateField()
#     GENDER_CHOICES = [
#         ('male', 'Male'),
#         ('female', 'Female'),
#     ]
#     gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
#     password = models.CharField(max_length=128)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"{self.first_name} {self.last_name}"

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.
class Products(models.Model):
    """
    A simple model for storing product information.
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

class UserRegistrationManager(BaseUserManager):
    """
    Custom user manager for the UserRegistration model.
    This is required when using AbstractBaseUser and handles the creation
    of both regular users and superusers.
    """
    def create_user(self, email, password=None, **extra_fields):
        """
        Creates and saves a regular user with the given email and password.
        The password is automatically hashed by set_password().
        """
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """
        Creates and saves a superuser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class UserRegistration(AbstractBaseUser, PermissionsMixin):
    """
    This is the corrected Custom User Model. It inherits from AbstractBaseUser
    and PermissionsMixin to integrate with Django's authentication system.
    This allows it to handle secure passwords and permissions correctly.
    """
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    dob = models.DateField()
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    
    # These are required fields for a custom user model
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    
    # These fields are added to resolve the SystemCheckError
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='userregistration_set',
        blank=True,
        help_text='The groups this user belongs to.',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='userregistration_set',
        blank=True,
        help_text='Specific permissions for this user.',
    )
    
    # This is the most crucial part! It tells Django that the 'email' field
    # is the unique identifier for a user during the authentication process.
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'username', 'phone', 'dob', 'gender']

    objects = UserRegistrationManager()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
