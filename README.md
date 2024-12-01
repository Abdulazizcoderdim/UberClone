# UberClone Backend API Documentation

This repository contains the backend API for the UberClone application.

## API Endpoints

### User Management

#### Register New User

Endpoint for registering a new user in the system.

##### Endpoint

```
POST /api/users/register
```

##### Description

This endpoint allows new users to register in the system. It creates a new user account with the provided information and returns an authentication token along with the user details.

##### Request Body

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

##### Required Fields

- `fullname.firstname`: User's first name
- `fullname.lastname`: User's last name
- `email`: Valid email address
- `password`: User's password

##### Response

###### Success Response (201 Created)

```json
{
  "token": "JWT_TOKEN_STRING",
  "user": {
    "firstname": "string",
    "lastname": "string",
    "email": "string"
    // other user details
  }
}
```

###### Error Responses

- **400 Bad Request**: When validation fails
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

##### Example

```bash
curl -X POST \
  http://localhost:3000/api/users/register \
  -H 'Content-Type: application/json' \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securepassword123"
  }'
```
