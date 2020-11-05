from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CustomerLocationViewSet,
    MapLocationViewSet,
    TaskerLocationViewSet,
    TaskLocationViewSet,
)

router = DefaultRouter()
router.register("customerlocation", CustomerLocationViewSet)
router.register("tasklocation", TaskLocationViewSet)
router.register("maplocation", MapLocationViewSet)
router.register("taskerlocation", TaskerLocationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
