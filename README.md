# hux-assessment-backend

Backend API for Contact Management System
This repository contains the backend RESTful API for a Contact Management System. The API is built using Node.js, Express.js, JSON Web Token (JWT) for authentication, and MySQL for database management.

Features
User authentication: Register, login, and logout functionality with JWT authentication.
Contact management: Create, retrieve, update, and delete contacts.
Data validation: Ensure data integrity and correctness through validation mechanisms with Yup.
Unit testing: Comprehensive unit tests for the create and update API endpoints.
Database management: Utilize MySQL for storing user and contact information securely.
Technologies Used
Node.js
Express.js
Yup
JSON Web Token (JWT)
MySQL
Installation
Clone the repository:
bash
Copy code
git clone <repository-url>
Install dependencies:
bash
Copy code
cd backend-api
npm install
Set up the MySQL database:
Create a new MySQL database for the application.
Update the database connection configuration in config/db.config.js with your database credentials.
.env file has the environment variables.
Start the server:
Run npm install to install packages and dependencies
bash
Copy code
npm start
API Endpoints
POST /api/v1/signup: Register a new user.
POST /api/v1/signin: Log in an existing user.
POST /api/v1/signout: Log out the current user.
POST /api/v1/contacts: Create a new contact.
GET /api/v1/contacts: Retrieve all contacts.
GET /api/v1/contacts/:id: Retrieve a single contact by ID.
PUT /api/v1/contacts/:id: Update a contact by ID.
DELETE /api/v1/contacts/:id: Delete a contact by ID.
Testing
To run the unit tests, use the following command:
npm test
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

License
This project is licensed under the Open Source License.

