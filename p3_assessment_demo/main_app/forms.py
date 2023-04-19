from django.db import models
from django.forms import ModelForm
from .models import Widget

class WidgetForm(ModelForm):
    class Meta:
        model = Widget
        fields = '__all__'