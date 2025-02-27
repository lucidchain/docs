# Export routes

In this section, you will discover all the endpoints related to service chain exportation.

## POST `/export/:target/getChain`

This route exports data from a target and generates a mermaid diagram that represents your service chain in the targeted tool. Target can be ITop or Redmine.

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
    - `server` (`string`): The server address of the target system.  
      **Example:** `"localhost"`
    - `port` (`integer`): The port of the target system.  
      **Example:** `8080`
    - `api_path` (`string`): The API path of the target system.  
      **Example:** `"/api/v1"`
    - `username` (`string`): The username for authentication.  
      **Example:** `"admin"`
    - `password` (`string`): The password for authentication.  
      **Example:** `"password123"`
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

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `server` (`string`): The server address of the iTop system.  
      **Example:** `"localhost"`
    - `port` (`integer`): The port of the iTop system.  
      **Example:** `8080`
    - `api_path` (`string`): The API path of the iTop system.  
      **Example:** `"/webservices/rest.php"`
    - `username` (`string`): The username for authentication.  
      **Example:** `"admin"`
    - `password` (`string`): The password for authentication.  
      **Example:** `"password123"`
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

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `server` (`string`): The server address of the Redmine system.  
      **Example:** `"localhost"`
    - `port` (`integer`): The port of the Redmine system.  
      **Example:** `8080`
    - `api_path` (`string`): The API path of the Redmine system.  
      **Example:** `"/webservices/rest.php"`
    - `username` (`string`): The username for authentication.  
      **Example:** `"admin"`
    - `password` (`string`): The password for authentication.  
      **Example:** `"password123"`
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
