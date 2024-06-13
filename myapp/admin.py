from django.contrib import admin
from .models import Book, User, AdminUser, LibraryTransaction
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('name', 'author', 'availability_status')
    search_fields = ('name', 'author')  # Adjust if needed
    list_filter = ('availability_status',)  # Adjust if needed

class UserAdmin(BaseUserAdmin):
    list_display = ('username', 'email', 'contact_number', 'is_staff', 'is_active')
    search_fields = ('username', 'email', 'contact_number')

admin.site.register(User, UserAdmin)

@admin.register(AdminUser)
class AdminUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'name', 'email', 'contact_number')
    search_fields = ('username', 'name', 'email', 'contact_number')  # Adjust if needed

@admin.register(LibraryTransaction)
class LibraryTransactionAdmin(admin.ModelAdmin):
    list_display = ('user', 'book', 'due_date', 'transaction_type')
    search_fields = ('user__username', 'book__name')  # Adjust if needed
    list_filter = ('transaction_type',)  # Adjust if needed
