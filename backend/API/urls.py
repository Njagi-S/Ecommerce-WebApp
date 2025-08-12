from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from . import views
from .views import ProductViewSet, UserRegistrationViewSet, MyTokenObtainPairView


router=DefaultRouter()


router.register('products',ProductViewSet, basename='products')
router.register('register', UserRegistrationViewSet, basename='register')

urlpatterns = [
    path('',include(router.urls)),
    
    # Manual paths for your custom views that are NOT ViewSets
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]
