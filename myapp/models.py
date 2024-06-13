from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    contact_number = models.CharField(max_length=20)
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',
        blank=True,
        help_text=('The groups this user belongs to. A user will get all permissions '
                   'granted to each of their groups.'),
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='user',
    )

    def __str__(self):
        return self.username

class Book(models.Model):
    name = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    availability_status = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class AdminUser(models.Model):
    username = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=20)

    def __str__(self):
        return self.username

class LibraryTransaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    due_date = models.DateField()
    transaction_type = models.CharField(max_length=20, choices=[('borrowed', 'Borrowed'), ('returned', 'Returned')])

    def __str__(self):
        return f"{self.user.username} - {self.book.name} - {self.transaction_type}"
