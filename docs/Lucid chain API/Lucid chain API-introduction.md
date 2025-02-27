---
sidebar_position: 1
---

# Lucid chain API

In this section you are going to learn about Luicd chain API and how to use it. In case you do not know, it is possible to use Lucid Chain without its frontend. Of course this has some limitations and it is a bit annoying since Lucid Chain UI is designed to make easier its API's use.

## Open API Specifications

Lucid Chain includes an Open API specification route made with ***Swagger*** that contains all the information about the endopoints. It is available at ***/api-docs*** route.

# API Documentation

## GET /info/restrictions

### Tags:
- Documentation

### Summary:
Retrieve service chain constraints from the README file.

### Description:
Reads the README file, extracts the section titled **"Service Chain Constraints,"** and returns it as HTML.

### Responses:

#### 200 - Successfully retrieved the service chain constraints section as HTML.
- **Content-Type:** `text/html`
- **Schema:**
  - **Type:** `string`
  - **Description:** The HTML content of the *"Service Chain Constraints"* section from the README file.
  - **Example:**
    ```html
    <h2>Service Chain Constraints</h2>
    <p>Details about constraints...</p>
    ```

#### 500 - Error reading the README file.
- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Description:** Error message when the file cannot be read.
  - **Example:**
    ```
    Error reading the file: [error details]
    ```
# API Documentation

## GET /about

### Tags:
- Documentation

### Summary:
Retrieve the entire README file as HTML.

### Description:
Reads the entire README file and returns its content as HTML.

### Responses:

#### 200 - Successfully retrieved the README file content as HTML.
- **Content-Type:** `text/html`
- **Schema:**
  - **Type:** `string`
  - **Description:** The HTML content of the README file.

#### 500 - Error reading the README file.
- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Description:** Error message when the file cannot be read.
  - **Example:**
    ```
    Error reading the file: [error details]
    ```

# API Documentation

## POST /config

### Tags:
- Configuration

### Summary:
Configure the server with specific settings.

### Description:
Set up the configuration for a server, including optional Redmine database settings if the target is Redmine.

### Request Body:
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

### Query Parameters:
- `target` (string, required): The target system to configure.  
  *Allowed values:* `"itop"`, `"redmine"`

### Responses:

#### 200 - Configuration set successfully.
- **Content-Type:** `text/plain`
- **Example:**


#### 500 - Server error.
- **Content-Type:** `application/json`
- **Schema:**
- **Type:** `object`
- **Properties:**
  - `message` (string): Error message.  
    *Example:* `"Internal server error"`

# API Documentation

## POST ``/export/{target}/getChain``

### Tags:
- Export

### Summary:
Export data from a target and generate a mermaid diagram.

### Description:
Exports data from a specified target (`itop` or `redmine`) and generates a mermaid diagram along with the exported data.

### Path Parameters:
| Name   | Type   | Required | Description |
|--------|--------|----------|-------------|
| `target` | `string` | ✅ | The target system from which to export. Allowed values: `"itop"`, `"redmine"` |

### Request Body:
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

### Responses:

#### ✅ 200 - Successful export operation with mermaid diagram and chain content.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `target` (`string`): The target system used for export.  
      **Example:** `"itop"`
    - `mermaidDiagram` (`string`): The generated mermaid diagram in string format.  
      **Example:** `"graph TD; A-->B; B-->C;"`
    - `chainContent` (`object`): The content of the exported chain in JSON format.

#### ❌ 404 - Invalid target or no target provided.
- **Content-Type:** `text/plain`
- **Example:**  
  ```
  Error: No target selected
  ```

#### ❌ 500 - Server error during the export process.
- **Content-Type:** `text/plain`
- **Example:**  
  ```
  Error exporting on target: itop
  ```

---

## POST /export/itop

### Tags:
- Export

### Summary:
Export data from iTop.

### Description:
Exports data from iTop and returns the result as a YAML file.

### Request Body:
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

### Responses:

#### ✅ 200 - Successful export from iTop, returns a YAML file.
- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Format:** `binary`
  - **Description:** YAML file containing the exported service chain data.

#### ❌ 500 - Server error during export from iTop.
- **Content-Type:** `text/plain`
- **Example:**  
  ```
  Error exporting from iTop: ...
  ```

---

## POST /export/redmine

### Tags:
- Export

### Summary:
Export data from Redmine.

### Description:
Exports data from Redmine and returns the result as a YAML file.

### Request Body:
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

### Responses:

#### ✅ 200 - Successful export from Redmine, returns a YAML file.
- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Format:** `binary`
  - **Description:** YAML file containing the exported service chain data.

#### ❌ 500 - Server error during export from Redmine.
- **Content-Type:** `text/plain`
- **Example:**  
  ```
  Error exporting from Redmine: ...
  ```

# API Documentation

## POST /import/upload

### Tags:
- Import

### Summary:
Upload a file for importing a service chain and generating a mermaid diagram.

### Description:
Uploads a file, processes its content, and generates a mermaid diagram. Returns the file content, import information, and any validation errors.

### Request Body:
- **Required:** `true`
- **Content-Type:** `multipart/form-data`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `file` (`string`, `binary`): The file to be uploaded for import.

### Responses:

#### ✅ 200 - File uploaded and processed successfully.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `mermaidDiagram` (`string`): The generated mermaid diagram.  
      **Example:**  
      ```
      graph TD;
        A-->B;
      ```
    - `fileContent` (`string`): The content of the uploaded file in JSON format.  
      **Example:** `{"key": "value", "data": {...}}`
    - `importInfo` (`string`): Information about the imported data.
    - `errors` (`array` of `string`): List of validation errors encountered during the import process.  
      **Example:** `[]`

#### ❌ 400 - No file uploaded or invalid file.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`): Error message when no file is uploaded.  
      **Example:** `"Please upload a file"`

#### ❌ 500 - Server error during file processing.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`): Error message when an internal server error occurs.  
      **Example:** `"There was an error during the upload."`

# API Documentation

## POST /import/itop

### Tags:
- Import

### Summary:
Import data to iTop.

### Description:
Imports data to iTop from a JSON payload. Returns success or errors encountered during the import.

### Request Body:
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
    - `username` (`string`): The username for authenticating with iTop.  
      **Example:** `"admin"`
    - `password` (`string`): The password for authenticating with iTop.  
      **Example:** `"password123"`
    - `fileContent` (`object`): The data to be imported into iTop.

### Responses:

#### ✅ 200 - Data imported successfully to iTop.
- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** `"Success"`

#### ❌ 500 - Error encountered during import to iTop.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `error` (`string`): Error message.  
      **Example:** `"Error importing on iTop: Invalid credentials."`

# API Documentation

## POST ``/sla-metrics/{target}/global``

### Tags:
- SLA Metrics

### Summary:
Retrieves global SLA metrics.

### Description:
Fetches global metrics for the specified target using the provided filters and service type.

### Parameters:
- `target` (`string`, **required**): The target system from which to export (either `itop` or `redmine`).

### Request Body:
- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `service_type` (`string`): The type of service chain to export.  
      **Allowed values:** `faceted`, `state`
    - `filters` (`object`): Filters to narrow down the metrics.  
      **Properties:**
      - `start_date` (`string`, `date`): Filters issues created after the specified date.
      - `end_date` (`string`, `date`): Filters issues created before the specified date.
      - `tto_threshold` (`number`): Filters issues with a TTO over the specified value.
      - `ttr_threshold` (`number`): Filters issues with a TTR over the specified value.

### Responses:

#### ✅ 200 - Global SLA metrics retrieved successfully.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `metrics` (`array`): List of metric details for the target.
      - **Type:** `object`

#### ❌ 500 - Error encountered while retrieving global SLA metrics.
- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** `"Error getting global metrics from {target} with service_type {serviceType}: Error details."`


# API Documentation

## POST ``/sla-metrics/{target}/metrics/orgs/{teamId}``

### Tags:
- SLA Metrics

### Summary:
Retrieves organization-specific SLA metrics.

### Description:
Fetches SLA metrics for a specific organization based on the provided target and configuration.

### Parameters:
- `target` (`string`, **required**): The target system from which to export (either `itop` or `redmine`).
- `teamId` (`string`, **required**): The ID of the organization (team) for which to retrieve metrics.

### Request Body:
- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `config` (`object`): Configuration parameters for connecting to the Redmine system.  
      **Properties:**
      - `server` (`string`): The server address of the Redmine system.  
        **Example:** `"localhost"`
      - `port` (`integer`): The port of the Redmine system.  
        **Example:** `8080`
      - `api_path` (`string`): The API path of the Redmine system.  
        **Example:** `"/webservices/rest.php"`
      - `username` (`string`): The username for authenticating with Redmine.  
        **Example:** `"admin"`
      - `password` (`string`): The password for authenticating with Redmine.  
        **Example:** `"password123"`
    - `service_type` (`string`): The type of service chain to export.  
      **Allowed values:** `faceted`, `state`

### Responses:

#### ✅ 200 - Organization-specific SLA metrics retrieved successfully.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `metrics` (`array`): List of metric details for the specified organization.
      - **Type:** `object`

#### ❌ 500 - Error encountered while retrieving organization-specific SLA metrics.
- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** `"Error retrieving metrics for organization {teamId} from {target}: Error details."`

# API Documentation

## POST ``/sla-metrics/{target}/metrics/services/{serviceId}``

### Tags:
- SLA Metrics

### Summary:
Retrieves service-specific SLA metrics.

### Description:
Fetches SLA metrics for a specific service based on the provided target and filters.

### Parameters:
- `target` (`string`, **required**): The target system from which to export (either `itop` or `redmine`).
- `serviceId` (`string`, **required**): The ID of the service for which to retrieve metrics.

### Request Body:
- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `filters` (`object`): Filters to narrow down the service metrics.
      **Properties:**
      - `start_date` (`string`, `date`): Filters metrics created after the specified date.
      - `end_date` (`string`, `date`): Filters metrics created before the specified date.
      - `tto_threshold` (`number`): Filters metrics with a TTO over the specified value.
      - `ttr_threshold` (`number`): Filters metrics with a TTR over the specified value.
    - `config` (`object`): Configuration parameters for connecting to the target system.
      **Properties:**
      - `server` (`string`): The server address of the target system.  
        **Example:** "localhost"
      - `port` (`integer`): The port of the target system.  
        **Example:** `8080`
      - `api_path` (`string`): The API path of the target system.  
        **Example:** `"/webservices/rest.php"`
      - `username` (`string`): The username for authenticating with the target system.  
        **Example:** `"admin"`
      - `password` (`string`): The password for authenticating with the target system.  
        **Example:** `"password123"`
    - `service_type` (`string`): The type of service chain to export.  
      **Allowed values:** `faceted`, `state`
    - `serviceName` (`string`): The service name.

### Responses:

#### ✅ 200 - Service-specific SLA metrics retrieved successfully.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `metrics` (`array`): List of metric details for the specified service.
      - **Type:** `object`

#### ❌ 400 - Bad request, missing or invalid parameters.
- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** "Please select a target to get the metrics from"

#### ❌ 500 - Error encountered while retrieving service-specific SLA metrics.
- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** "Error getting metrics: Error details."

# API Documentation

## POST ``/purge/{target}``

### Tags:
- Purge

### Summary:
Purge a specified database (itop or redmine).

### Description:
Purges the database of the specified target ('itop' or 'redmine') based on the data provided in the request body.

### Parameters:
- `target` (`string`, **required**): The target database to purge. Can be either `itop` or `redmine`.

### Request Body:
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
      **Example:** "admin"
    - `password` (`string`): The password for authenticating with the target system.  
      **Example:** "password123"

### Responses:

#### ✅ 200 - The specified target database was successfully purged.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`):  
      **Example:** "Database from itop successfully purged"

#### ❌ 400 - Invalid or missing target in the request.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`):  
      **Example:** "Error: Please select a valid target to export from"

#### ❌ 404 - No target selected or invalid target provided.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`):  
      **Example:** "Error: No target selected"

#### ❌ 500 - Internal server error during the purge operation.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`):  
      **Example:** "Error purging database on itop: < error details>"

# API Documentation

## POST /sync/comparationInfo

### Tags:
- Synchronization

### Summary:
Compare two chains and generate a comparison report.

### Description:
Compare the actual chain with an uploaded chain to identify differences, potential sync, and generate a mermaid diagram if there are no errors.

### Request Body:
- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `actualChain` (`object`): The current service chain.
    - `uploadedChain` (`object`): The uploaded service chain for comparison.

### Responses:

#### ✅ 200 - Comparison completed successfully.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `differences` (`object`): An object with the differences between the actual and uploaded chain.
    - `errors` (`array`): List of validation errors encountered during the comparison.  
      **Example:** `[]`
    - `fusionedChainData` (`object`): The merged/fusioned chain data after comparison.
    - `canSync` (`boolean`): Indicates whether the chains can be synchronized or not.  
      **Example:** `true`
    - `mermaidDiagram` (`string`): The generated mermaid diagram based on the fusioned chain.  
      **Example:**  
      ```
      graph TD;
      A[Service: Incident] --> B[Status: Closed];
      ```

#### ❌ 500 - Error during the comparison process.
- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** "There was an error comparating info: Internal Server Error."

# API Documentation

## POST /sync/redmine

### Tags:
- Synchronization

### Summary:
Synchronize data to Redmine.

### Description:
Synchronize the provided service chain data to Redmine using the specified service type.

### Request Body:
- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `server` (`string`): The Redmine server address.  
      **Example:** `"redmine.example.com"`
    - `port` (`integer`): The port of the Redmine server.  
      **Example:** `8080`
    - `api_path` (`string`): The API path of the Redmine server.  
      **Example:** `"/redmine/api"`
    - `username` (`string`): The username for Redmine authentication.  
      **Example:** `"admin"`
    - `password` (`string`): The password for Redmine authentication.  
      **Example:** `"password123"`
    - `uploadedChain` (`object`): The chain data to be synchronized to Redmine.
    - `serviceType` (`string`): The type of service chain to synchronize.  
      **Allowed values:** `faceted`, `state`

### Responses:

#### ✅ 200 - Synchronization to Redmine was successful.
- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** `"Success"`

#### ❌ 500 - Error during synchronization to Redmine.
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`): The error message.  
      **Example:** `"There was an error while synchronizing in Redmine: Invalid credentials."`