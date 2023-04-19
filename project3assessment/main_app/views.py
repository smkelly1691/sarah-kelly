from django.shortcuts import render
from .models import Item
from django.views.generic.edit import CreateView, DeleteView
from django.views.generic import ListView

# Create your views here.
def index(request):
    items = Item.objects.all()
    print(items)
    return render(request, 'index.html', {'items': items})
    
class ItemCreate(CreateView):
    model = Item
    fields = '__all__'
    success_url = '/'
    
class ItemDelete(DeleteView):
    model = Item
    success_url = '/index.html'