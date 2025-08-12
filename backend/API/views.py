from django.shortcuts import render
from .models import Products, UserRegistration
from .serializer import productSerializer, UserRegistrationSerializer, MyTokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import viewsets

# Create your views here.
# @api_view(['GET'])  
# def product_list(request):
#     products = Products.objects.all()
#     serilizer= productSerializer(products, many=True)
#     return Response(serilizer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = productSerializer

class UserRegistrationViewSet(viewsets.ModelViewSet):
    queryset = UserRegistration.objects.all()
    serializer_class = UserRegistrationSerializer
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer