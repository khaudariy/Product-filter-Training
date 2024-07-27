from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        self.name
class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    category = models.ForeignKey(Category,related_name='product_category',on_delete=models.SET_NULL,null=True)
    def __str__(self):
        self.name

# Create your models here.
