from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    BusinessPhotoViewSet,
    TaskerAvailabilityViewSet,
    TaskerSkillViewSet,
    TimeslotViewSet,
)

router = DefaultRouter()
router.register("timeslot", TimeslotViewSet)
router.register("businessphoto", BusinessPhotoViewSet)
router.register("taskeravailability", TaskerAvailabilityViewSet)
router.register("taskerskill", TaskerSkillViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
