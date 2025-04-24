---
tags:
  - lucid-chain
  - api
  - service-chain
  - endpoints
  - mermaid-diagram
  - yaml
  - development
keywords:
  - Lucid Chain export routes
  - service chain exportation
  - export data from Redmine
  - export data from ITop
  - mermaid diagram export
  - YAML export
  - SCModel export
  - API export routes
  - Lucid Chain API usage
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Export routes

import Alert from '@site/src/components/Alert.js';

In this section, you will discover all the endpoints related to service chain exportation.

<Alert>
Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding.  
</Alert>

## POST `/export/:target/getChain`

This route exports data from a target and generates a mermaid diagram that represents your service chain in the targeted tool. Target can be ITop or Redmine.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Path Parameters

| Name   | Type   | Required/Optional | Description |
|--------|--------|----------|-------------|
| `target` | `string` | **Required** | The target system from which to export. Allowed values: `"itop"`, `"redmine"` |

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `anonimized` (`boolean`): Indicates if the exported data should be anonymized.  
      **Example:** `true`
    - `service_type` (`string`): The type of service chain to export.  
      **Allowed values:** `"faceted"`, `"state"`

### Responses

#### ✅ 200 - Successful export operation with mermaid diagram and chain content

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `target` (`string`): The target system used for export.  
      **Example:** `"itop"`
    - `mermaidDiagram` (`string`): The generated mermaid diagram in string format.  
      **Example:** `"graph TD; A-->B; B-->C;"`
    - `chainContent` (`object`): The content of the exported chain in JSON format.

#### ❌ 404 - Invalid target or no target provided

- **Content-Type:** `text/plain`
- **Example:**  `"Error: No target selected"`

#### ❌ 500 - Server error during the export process

- **Content-Type:** `text/plain`
- **Example:**  `"Error exporting on target: itop"`

## POST `/export/itop`

Exports your service chain data from iTop and returns the result as a YAML file following SCModel.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `anonimized` (`boolean`): Indicates if the exported data should be anonymized.  
      **Example:** `true`
    - `service_type` (`string`): The type of service chain to export from iTop.  
      **Allowed values:** `"faceted"`, `"state"`

### Responses

#### ✅ 200 - Successful export from iTop, returns a YAML file

- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Format:** `binary`
  - **Description:** YAML file containing the exported service chain data.

#### ❌ 500 - Server error during export from iTop

- **Content-Type:** `text/plain`
- **Example:**  `"Error exporting from iTop: ..."`

## POST `/export/redmine`

Exports your service chain data from Redmine and returns the result as a YAML file following SCModel.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `anonimized` (`boolean`): Indicates if the exported data should be anonymized.  
      **Example:** `true`
    - `service_type` (`string`): The type of service chain to export from Redmine.  
      **Allowed values:** `"faceted"`, `"state"`

### Responses

#### ✅ 200 - Successful export from Redmine, returns a YAML file

- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Format:** `binary`
  - **Description:** YAML file containing the exported service chain data.

#### ❌ 500 - Server error during export from Redmine

- **Content-Type:** `text/plain`
- **Example:**  `"Error exporting from Redmine: ..."`
