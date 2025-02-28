# Import Routes

import Alert from '@site/src/components/Alert.js';

In this section, you will discover all the endpoints related to service chain importation.

<Alert>
Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding.  
</Alert>

<Alert>
Please take into account that service chain type state is not supported in ITop yet, and service chain type faceted is not fully supported on Redmine. We are sorry for that but in future versions this will be fixed.
</Alert>

## POST `/import/upload`

This route is used when uploading a file for importing a service chain and generating a mermaid diagram. It also validates it following SCModel. Returns the file content, import information, and any validation errors.

### Request Body

- **Required:** `true`
- **Content-Type:** `multipart/form-data`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `file` (`string`, `binary`): The file to be uploaded for import.

### Responses

#### ✅ 200 - File uploaded and processed successfully

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `mermaidDiagram` (`string`): The generated mermaid diagram.  
      **Example:** `"mermaid graph TD; A-->B;"`

    - `fileContent` (`string`): The content of the uploaded file in JSON format.  
      **Example:** `{"key": "value", "data": {...}}`
    - `importInfo` (`string`): Information about the imported data.
    - `errors` (`array` of `string`): List of validation errors encountered during the import process.  
      **Example:** `[]`

#### ❌ 400 - No file uploaded or invalid file

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`): Error message when no file is uploaded.  
      **Example:** `"Please upload a file"`

#### ❌ 500 - Server error during file processing

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`): Error message when an internal server error occurs.  
      **Example:** `"There was an error during the upload."`

## POST `/import/itop`

This route allows you to import service chains into ITop. It imports data to ITop from a JSON payload. Returns success or errors encountered during the importation.

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
    - `username` (`string`): The username for authenticating with iTop.  
      **Example:** `"admin"`
    - `password` (`string`): The password for authenticating with iTop.  
      **Example:** `"password123"`
    - `fileContent` (`object`): The data to be imported into iTop.

### Responses

#### ✅ 200 - Data imported successfully to iTop

- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** `"Success"`

#### ❌ 500 - Error encountered during import to iTop

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `error` (`string`): Error message.  
      **Example:** `"Error importing on iTop: Invalid credentials."`

## POST `/import/redmine`

This route allows you to import service chains into Redmine. It imports data to Redmine from a JSON payload. Returns success or errors encountered during the importation.

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
    - `username` (`string`): The username for authenticating with Redmine.  
      **Example:** `"admin"`
    - `password` (`string`): The password for authenticating with Redmine.  
      **Example:** `"password123"`
    - `fileContent` (`object`): The data to be imported into Redmine.

### Responses

#### ✅ 200 - Data imported successfully to Redmine

- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** `"Success"`

#### ❌ 500 - Error encountered during import to Redmine

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `error` (`string`): Error message.  
      **Example:** `"Error importing on Redmine: Invalid credentials."`
