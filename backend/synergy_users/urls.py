from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('users/', views.UsersList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view(),
         name='synergyuser-detail'),
    path('groups/', views.GroupsList.as_view()),
    path('groups/<int:pk>/', views.GroupDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)