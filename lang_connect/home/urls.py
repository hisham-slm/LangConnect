from . import views
from django.urls import path

app_name = 'home'

urlpatterns = [
    path('',views.home,name='home'),
    path('play',views.play,name='play_string'),
    path('translate', views.translate, name='translate'),
    path('read_out',views.read_out, name='read_out'),

]