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

```

## User Profile

### Endpoint

```
GET /api/users/profile
```

### Description

This endpoint retrieves the profile information of the currently authenticated user.

### Authentication

Requires a valid JWT token in the request header or cookies.

### Response

#### Success Response (200 OK)

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "_id": "string"
}
```

#### Error Response

- **401 Unauthorized**: When no token is provided or token is invalid

## User Logout

### Endpoint

```
GET /api/users/logout
```

### Description

This endpoint logs out the currently authenticated user by invalidating their token. The token is added to a blacklist and will no longer be valid for authentication.

### Authentication

Requires a valid JWT token in the request header or cookies.

### Response

#### Success Response (200 OK)

```json
{
  "message": "Logout successful"
}
```

#### Error Response

- **401 Unauthorized**: When no token is provided or token is invalid

## Captain Routes

### Register Captain

- **Endpoint:** `/api/captains/register`
- **Description:** Register a new captain in the system.
- **Request Body:**

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "integer",
    "vehicleType": "string"
  }
}
```

### Required Fields

- `fullname.firstname`: Captain's first name
- `fullname.lastname`: Captain's last name
- `email`: Valid email address
- `password`: Captain's password
- `vehicle.color`: Vehicle color
- `vehicle.plate`: Vehicle plate
- `vehicle.capacity`: Vehicle capacity
- `vehicle.vehicleType`: Vehicle type
