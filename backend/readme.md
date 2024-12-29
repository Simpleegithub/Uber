# Travel App API Documentation

## User Registration Endpoint

### POST `/api/user/register`
Creates a new user account.

**Request Body:**
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john@example.com",
  "password": "password123"
}


Validation Rules:

firstName: Minimum 3 characters
lastName: Minimum 3 characters
email: Must be unique
password: Will be hashed before storage
Success Response:

Status: 201


{
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com"
  },
  "token": "jwt_token_string"
}


Error Response:

Status: 500

{
  "error": "Error message"
}

Notes:

Password is automatically hashed using bcrypt
JWT token is generated with 1 day expiration
Email must be unique in the system