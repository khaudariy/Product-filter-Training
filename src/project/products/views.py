from rest_framework import generics
from .models import Category,Product
from .serializers import ProductSerializer,CategorySerializer

class ProductListView(generics.ListAPIView):
    queryset =Product.objects.all()
    serializer_class = ProductSerializer


class CategoryListView(generics.ListAPIView):
    queryset =Category.objects.all()
    serializer_class = CategorySerializer
