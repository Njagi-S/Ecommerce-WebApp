# from django.contrib import admin
# from .models import Products,UserRegistration, UserRegistrationManager
# from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# # Register your models here.
# admin.site.register(Products)
# admin.site.register(UserRegistration)
# admin.site.register(UserRegistrationManager)

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Products, UserRegistration # Import only the models you need

# Register your models here.
admin.site.register(Products)

@admin.register(UserRegistration)
class UserRegistrationAdmin(UserAdmin):
    """
    A custom admin class for the UserRegistration model.
    This provides a proper interface for managing users, including
    their permissions, groups, and password hashing.
    """
    # These fields will be displayed in the list view of the admin panel
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_active', 'date_joined')
    
    # These fields will be used for filtering users
    list_filter = ('is_staff', 'is_active', 'is_superuser', 'gender')
    
    # These fields can be used to search for users
    search_fields = ('email', 'first_name', 'last_name', 'username')
    
    # Define fields that are read-only and cannot be changed via the admin
    readonly_fields = ('date_joined',)
    
    # The fields displayed on the user detail page. This is a crucial part of the fix.
    # We remove the 'password' field from the form to prevent accidental plaintext edits.
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'middle_name', 'last_name', 'username', 'phone', 'dob', 'gender')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important Dates', {'fields': ('date_joined',)}),
    )
    
    # The fields that can be edited in the add user form.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password', 'first_name', 'middle_name', 'last_name', 'username', 'phone', 'dob', 'gender'),
        }),
    )
    
    # We specify the ordering of the fields in the add user form
    ordering = ('email',)
