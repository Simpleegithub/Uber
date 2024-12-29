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




## User Authentication Endpoints

### POST `/api/user/login`
Authenticates a user and returns a JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}


Success Response:

Status: 200

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

Error Responses:

User Not Found
Status: 404

{
  "message": "User not found"
}

Invalid Password
Status: 401

Server Error
Status: 500

{
  "error": "Error message"
}

Notes:

Email and password are required fields
Password is compared with hashed password stored in database
Successful login returns a JWT token valid for 1 day


# Travel App API Documentation

## Protected User Endpoints

### GET `/api/user/profile`
Retrieves the authenticated user's profile information.

**Headers Required:**
```json
{
  "Cookie": "token=jwt_token_string"
}
Success Response:

Status: 200

{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john@example.com",
  "_id": "user_id"
}

Error Responses:

Unauthorized
Status: 401

{
  "message": "Unauthorized - No token provided"
}

Server Error
Status: 500

{
  "error": "Error message"
}

GET /api/user/logout
Logs out the current user by clearing the authentication token.

Success Response:

Status: 200

{
  "message": "Logout Successful"
}

Error Response:

Status: 500

{
  "error": "Error message"
}

Notes:

Profile route requires authentication via JWT token in cookie
Logout route clears the httpOnly cookie containing the JWT token
All protected routes use AuthUser middleware for verification