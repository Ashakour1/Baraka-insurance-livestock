from django.urls import path
from .views import RegisterUser , GroupsView


urlpatterns = [
    path("register/", RegisterUser.as_view(), name="register"),
    path("groups/", GroupsView.as_view(), name="groups"),

]

