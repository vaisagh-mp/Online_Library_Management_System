# Library Management System

This is a library management system project built using Django and React.

## Project Structure

The project is structured as follows:

### Backend (Django)

- **Models**:
  - User (Custom User model inheriting from AbstractUser)
  - AdminUser
  - Book
  - LibraryTransaction

- **Serializers**:
  - UserSerializer
  - AdminUserSerializer
  - BookSerializer
  - LibraryTransactionSerializer
  - UserRegistrationSerializer

- **Views**:
  - UserRegistrationAPIView
  - BookViewSet
  - UserViewSet
  - AdminUserViewSet
  - LibraryTransactionViewSet

- **URLs**:
  - API endpoints for books, users, admin users, transactions, authentication, and registration.

### Frontend (React)

- **Components**:
  - Admin: AddBook, RemoveBook, IssueBook, ReturnBook
  - User: BrowseCatalog, TransactionHistory
  - Auth: Login, Register
  - Common: Header, Footer

- **Services**:
  - authService: Handles authentication-related API calls.
  - bookService: Handles book-related API calls.
  - transactionService: Handles transaction-related API calls.

- **App.js**: Main component rendering different sections based on user roles.
- **index.js**: Entry point for React application.

## Setup Instructions

1. **Backend Setup**:
   - Install Python and Django.
   - Create and activate a virtual environment.
   - Install required Python packages (`requirements.txt`).
   - Run migrations and start the Django development server.

2. **Frontend Setup**:
   - Install Node.js and npm.
   - Navigate to the `frontend` directory.
   - Install required npm packages (`package.json`).
   - Start the React development server.

3. **Database Configuration**:
   - Configure database settings in Django (`settings.py`).
   - Migrate models to create database tables.

4. **Environment Variables**:
   - Set up environment variables for Django secret key, database credentials, etc.

5. **Running the Project**:
   - Start both backend and frontend servers.
   - Access the application through the specified URLs.

     
## Credits
- Libraries and frameworks used:
  - Django
  - React
  - Django REST Framework
  - React Router
  - Axios
