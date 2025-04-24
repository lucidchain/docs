---
tags:
  - lucid-chain
  - api
  - configuration
  - endpoints
  - setup
  - integration
  - development
keywords:
  - Lucid Chain configuration
  - API configuration
  - Redmine setup
  - iTop configuration
  - integration endpoints
  - configuration API routes
  - Lucid Chain endpoints
  - API documentation
  - Redmine API integration
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Configuration routes

import Alert from '@site/src/components/Alert.js';

In this section you are going to discover all the endpoints related with configuration.

<Alert>
Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding.  
</Alert>

## POST `/api/configure/:target`

This route stores or updates the configuration details for a given target system (`redmine` or `itop`) for the authenticated user. It includes connection settings and, for Redmine, optional database credentials.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Path Parameters

| Name     | Type    | Required/Optional | Description |
|----------|---------|-------------------|-------------|
| `target` | `string`  | **Required**      | The target system to configure. Allowed values: `"itop"`, `"redmine"` |

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `redmineConfig` (object): Configuration for Redmine.  
      *Example:*
      ```json
      {
        "server": "localhost",
        "port": 3000,
        "api_path": "/redmine",
        "username": "admin",
        "password": "redminePass",
        "dbhost": "localhost",
        "dbport": 5432,
        "dbuser": "postgres",
        "dbpassword": "postgresPass",
        "dbname": "redmine"
      }
      ```
    - `itopConfig` (object): Configuration for iTop.  
      *Example:*
      ```json
      {
        "server": "localhost",
        "port": 8080,
        "api_path": "/webservices/rest.php",
        "username": "admin",
        "password": "itopPass"
      }
      ```

### Responses

#### ✅ 200 - Configuration updated successfully

- **Content-Type:** `text/plain`  
- **Example:** `"Configuration updated successfully"`

#### ❌ 500 - Server error during configuration update

- **Content-Type:** `text/plain`  
- **Example:** `"There was an error updating configuration: ..."`

## POST `/api/config`

This route validates the stored credentials for the specified target (`itop` or `redmine`). It checks whether the saved configuration is sufficient to perform all Lucid Chain operations for that target.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Query Parameters

| Name     | Type    | Required/Optional | Description |
|----------|---------|-------------------|-------------|
| `target` | string  | **Required**      | The target system to validate credentials against. Allowed values: `"itop"`, `"redmine"` |

### Request Body

- **Required:** `false`
- No body is required for this request.

### Responses

#### ✅ 200 - Credentials validated successfully

- **Content-Type:** `text/plain`  
- **Example:** `"OK"`

#### ❌ 500 - Server error during credential validation

- **Content-Type:** `text/plain`  
- **Example:** `"There was an error checking credentials: ..."`
