from django.db import models
import datetime

# Create your models here.

class Customer(models.Model):
	firstname = models.CharField(max_length=40)
	lastname = models.CharField(max_length=40)

class ServiceItem(models.Model):
	"""docstring for ServiceItem"""
	def __init__(self):
		super(ServiceItem, self).__init__()
		
class Order(models.Model):
	"""docstring for Order"""
	customer = models.ForeignKey(Customer)
	thedate = models.DateField(default=datetime.datetime.now)

	def __init__(self):
		super(Order, self).__init__()

class ItemDetail(models.Model):
	"""docstring for ItemDetail"""
	order = models.ForeignKey(Order)
	serviceitem = models.ForeignKey(ServiceItem)
	quanlity = models.IntegerField(default=1)
	price = models.FloatField(default=0)

	def __init__(self):
		super(ItemDetail, self).__init__()
		
		