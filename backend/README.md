# API Documentation

## User Registration

Endpoint for registering a new user in the system.

### Endpoint

```
POST /api/users/register
```

### Description

This endpoint allows new users to register in the system. It creates a new user account with the provided information and returns an authentication token along with the user details.

### Request Body

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

### Required Fields

- `fullname.firstname`: User's first name
- `fullname.lastname`: User's last name
- `email`: Valid email address
- `password`: User's password

### Response

#### Success Response (201 Created)

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

#### Error Responses

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

### Example

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

## User Login

Endpoint for authenticating existing users.

### Endpoint

```
POST /api/users/login
```

### Description

This endpoint authenticates existing users by validating their email and password. Upon successful authentication, it returns a JWT token and user details.

### Request Body

```json
{
  "email": "string",
  "password": "string"
}
```

### Required Fields

- `email`: Registered email address
- `password`: User's password

### Response

#### Success Response (200 OK)

```json
{
  "token": "JWT_TOKEN_STRING",
  "user": {
    "firstname": "string",
    "lastname": "string",
    "email": "string"
    // other user details (password excluded)
  }
}
```

#### Error Responses

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

- **401 Unauthorized**: When credentials are invalid
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Example

```bash
curl -X POST \
  http://localhost:3000/api/users/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "john.doe@example.com",
    "password": "securepassword123"
  }'
