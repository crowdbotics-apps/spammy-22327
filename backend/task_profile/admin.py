from django.contrib import admin
from .models import CustomerProfile, InviteCode, Notification, TaskerProfile

admin.site.register(TaskerProfile)
admin.site.register(InviteCode)
admin.site.register(CustomerProfile)
admin.site.register(Notification)

# Register your models here.
