---
tags:
  - lucid-chain
  - api
  - dangerous-operations
  - development
  - endpoints
keywords:
  - Lucid Chain purge routes
  - purge database
  - Redmine purge
  - iTop purge
  - database clearing
  - dangerous purge operation
  - Lucid Chain API usage
  - purge endpoints
  - redmine database
  - itop database
  - API purge operations
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Purge Routes

import Alert from '@site/src/components/Alert.js';

In this section you will learn about purge endpoints. Please be really cautious because database purgations are really dangerous operations. It will remove all data in your database.

<Alert>
Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding.  
</Alert>

## POST `/purge/:target`

This route purges the database of the targeted tool (`itop` or `redmine`) based on the data provided in the request body.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Path Parameters

| Name    | Type   | Required/Optional | Description |
|---------|--------|----------|-------------|
| `target` | `string` | **Required** | The target database to purge. Allowed values: `"itop"`, `"redmine"` |

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
