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

## POST `/config`

This route allows you to configure your ITop and your Redmine. It sets configuration and checks credentials in order to make other operations. You can also include Redmine database credentials in it.

### Query Parameters

| Name    | Type   | Required/Optional | Description |
|---------|--------|----------|-------------|
| `target` | `string` | **Required** | The target system to configure. Allowed values: `"itop"`, `"redmine"` |

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `server` (string): The server address.  
        *Example:* `"localhost"`
    - `port` (integer): The server port.  
        *Example:* `8080`
    - `api_path` (string): The API path.  
        *Example:* `"/api"`
    - `username` (string): The username for authentication.  
        *Example:* `"admin"`
    - `password` (string): The password for authentication.  
        *Example:* `"password123"`
    - `db_host` (string): The Redmine database host. Required if the target is 'redmine'.  
        *Example:* `"localhost"`
    - `db_port` (integer): The Redmine database port. Required if the target is 'redmine'.  
        *Example:* `5432`
    - `db_user` (string): The Redmine database username. Required if the target is 'redmine'.  
        *Example:* `"dbuser"`
    - `db_password` (string): The Redmine database password. Required if the target is 'redmine'.  
        *Example:* `"dbpassword123"`
    - `database` (string): The Redmine database name. Required if the target is 'redmine'.  
        *Example:* `"redmine_db"`

### Responses

#### ✅ 200 - Configuration set successfully

- **Content-Type:** `text/plain`
- **Example:** `"OK"`

#### ❌ 500 - Server error

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`):  
      **Example:** `"Internal server error"`
