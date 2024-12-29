API Endpoints
User Routes
POST /api/user/register: Register a new user
Body:


{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john@example.com",
  "password": "password123"
}

Project Structure

backend/
├── Controllers/
│   └── UserController.js
├── Models/
│   └── UserModel.js
├── Routes/
│   └── UserRoute.js
├── db/
│   └── db.js
├── .env
├── package.json
└── server.js

Data Models
User Model
fullName
firstName (String, required, min length: 3)
lastName (String, required, min length: 3)
email (String, required, unique)
password (String, required)
socketId (String)