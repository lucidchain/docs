# Purge Routes

import Alert from '@site/src/components/Alert.js';

In this section you will learn about purge endpoints. Please be really cautious because database purgations are really dangerous operations. It will remove all data in your database.

<Alert>
Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding.  
</Alert>

## POST `/purge/:target`

This route purges the database of the targeted tool (`itop` or `redmine`) based on the data provided in the request body.

### Path Parameters

| Name    | Type   | Required/Optional | Description |
|---------|--------|----------|-------------|
| `target` | `string` | **Required** | The target database to purge. Allowed values: `"itop"`, `"redmine"` |

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `server` (`string`): The server address of the target system.  
      **Example:** "localhost"
    - `port` (`integer`): The port of the target system.  
      **Example:** `8080`
    - `api_path` (`string`): The API path of the target system.  
      **Example:** `"/api/v1"`
    - `username` (`string`): The username for authenticating with the target system.  
      **Example:** `"admin"`
    - `password` (`string`): The password for authenticating with the target system.  
      **Example:** `"password123"`

### Responses

#### ✅ 200 - The specified target database was successfully purged

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`):  
      **Example:** `"Database from iTop successfully purged"`

#### ❌ 400 - Invalid or missing target in the request

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`):  
      **Example:** `"Error: Please select a valid target to export from"`

#### ❌ 404 - No target selected or invalid target provided

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`):  
      **Example:** `"Error: No target selected"`

#### ❌ 500 - Internal server error during the purge operation

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`):  
      **Example:** `"Error purging database on iTop: ..."`
