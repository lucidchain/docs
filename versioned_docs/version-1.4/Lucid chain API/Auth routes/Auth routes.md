---
tags:
  - lucid-chain
  - api
  - sla
  - authentication
  - account management
  - auth
  - endpoints
keywords:
  - Lucid Chain authentication routes
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Auth Routes

import Alert from '@site/src/components/Alert.js';

In this section you will learn about authentication endpoints. Here you will find every route related to account management and authentication.

<Alert>
Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding.  
</Alert>

## POST `/api/register`

This route allows for registering a new user by providing a username and password. The password is hashed, and a JWT token is generated. We can decide if we want our token to expire or not with `expiresToken` property.

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Required:** `lucidchainUser`, `lucidchainPassword`
  - **Properties:**
    - `lucidchainUser` (string): The username for the new user.  
        *Example:* `"john_doe"`
    - `lucidchainPassword` (string): The password for the new user.  
        *Example:* `"securePassword123"`
    - `expiresToken` (boolean): Whether the JWT token should expire (true = expires in 2 hours, false = does not expire).  
        *Example:* `true`

### Responses

#### ✅ 201 - User successfully created

- **Content-Type:** `application/json`
- **Description:** The user has been successfully created, and a token is returned.  
- **Example:**

  ```json
  {
    "message": "User successfully created.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

#### ❌ 409 - User already exists

- **Content-Type:** `application/json`
- **Description:**  The username already exists in the system.
- **Example:**

  ```json
    {
    "message": "This user already exists."
    }
  ```

#### ❌ 422 - Missing required fields

- **Content-Type:** `application/json`
- **Description:**  The request is missing the required fields `lucidchainUser` or `lucidchainPassword`.
- **Example:**

  ```json
    {
    "message": "You need to specify a username and password."
    }
  ```

#### ❌ 500 - Internal Server Error

- **Content-Type:** `application/json`
- **Description:**  There was an error while creating the user.
- **Example:**

  ```json
    {
    "message": "There was an error while creating the user"
    }
  ```

## POST `/api/login`

This route authenticates a user by verifying their username and password. If successful, a JWT token is generated. If the token is set to expire, a new token is created.

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Required:** `lucidchainUser`, `lucidchainPassword`
  - **Properties:**
    - `lucidchainUser` (string): The username for the user.  
        *Example:* `"john_doe"`
    - `lucidchainPassword` (string): The password for the user.  
        *Example:* `"securePassword123"`

### Responses

#### ✅ 200 - Login successful

- **Content-Type:** `application/json`
- **Description:** The login is successful, and a token is returned.  
- **Example:**
  
  ```json
  {
    "message": "Login successful.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

#### ❌ 401 - Invalid credentials

- **Content-Type:** `application/json`
- **Description:**  The provided username or password is incorrect.
- **Example:**

  ```json
    {
    "message": "Invalid credentials."
    }
  ```

#### ❌ 404 - User not found

- **Content-Type:** `application/json`
- **Description:**  The provided username does not exist in the database.
- **Example:**

  ```json
    {
    "message": "User not found."
    }
  ```

#### ❌ 422 - Missing username or password

- **Content-Type:** `application/json`
- **Description:**  The request is missing the required fields `lucidchainUser` or `lucidchainPassword`.
- **Example:**

  ```json
    {
    "message": "You need to specify your username and password."
    }
  ```

#### ❌ 500 - Internal Server Error

- **Content-Type:** `application/json`
- **Description:**  There was an error during the authentication process.
- **Example:**

  ```json
    {
    "message": "There was an error during the authentication process."
    }
  ```

## POST `/api/deleteAccount`

This route deletes the account of the currently authenticated user. A valid JWT token is required for authentication.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Responses

#### ✅ 200 - Account successfully deleted

- **Content-Type:** `application/json`
- **Description:** The user account has been successfully deleted.  
- **Example:**

  ```json
  {
    "message": "Account successfully deleted"
  }
  ```

#### ❌ 500 - Internal Server Error

- **Content-Type:** `application/json`
- **Description:**  There was an error during account deletion.
- **Example:**

  ```json
    {
    "message": "There was an error during account deletion: ..."
    }
  ```

## POST `/api/updateProfile`

This route allows an authenticated user to update their username and/or password. A valid JWT token is required for authentication.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Request Body

- **Content-Type**: `application/json`
- **Required Fields**:
  - `newUsername` (optional): The new username to update.
  - `newPassword` (optional): The new password to update.

- **Example Request Body**:
  ```json
  {
    "newUsername": "new_john_doe",
    "newPassword": "newSecurePassword123"
  }
  ```

### Responses

#### ✅ 200 - Profile updated successfully

- **Content-Type:** `application/json`
- **Description:** The user's profile was successfully updated.
- **Example:**
  ```json
  {
    "message": "Profile updated successfully.",
    "updatedUser": {
      "username": "new_john_doe"
    }
  }
  ```

#### ❌ 400 - No fields provided for update

- **Content-Type:** `application/json`
- **Description:** The request did not provide a new username or password to update.
- **Example:**
  ```json
  {
    "message": "You must provide a new username or password to update."
  }
  ```

#### ❌ 409 - The new username is already taken

- **Content-Type:** `application/json`
- **Description:** The requested username is already in use by another user.
- **Example:**
  ```json
  {
    "message": "That username is already taken."
  }
  ```

#### ❌ 500 - Server error during profile update

- **Content-Type:** `application/json`
- **Description:** An error occurred while attempting to update the user's profile.
- **Example:**

  ```json
  {
    "message": "There was an error updating your profile."
  }
  ```
