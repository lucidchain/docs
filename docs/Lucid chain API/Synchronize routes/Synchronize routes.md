# Synchronization Routes

In this section you will learn about synchronization endpoints.

## POST `/sync/comparationInfo`

This route compares the new version of the current service chain imported in your tool and generates a comparison report. It compares the actual chain with an uploaded chain to identify differences, potential synchronization, and generates a mermaid diagram if there are no errors.

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `actualChain` (`object`): The current service chain in json format.
    - `uploadedChain` (`object`): The uploaded service chain in json formar for comparison.

### Responses

#### ✅ 200 - Comparison completed successfully

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `differences` (`object`): An object with the differences between the current and the uploaded chain.
    - `errors` (`array`): List of validation errors encountered during the comparison.  
      **Example:** `[]`
    - `fusionedChainData` (`object`): The merged/fusioned chain data after comparison.
    - `canSync` (`boolean`): Indicates whether the chains can be synchronized or not.  
      **Example:** `true`
    - `mermaidDiagram` (`string`): The generated mermaid diagram based on the fusioned chain.  
      **Example:** `"mermaid graph TD; A[Service: Incident] --> B[Status: Closed];"`

#### ❌ 500 - Error during the comparison process

- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** `"There was an error comparating info: Internal Server Error."`

## POST `/sync/redmine`

This route synchronizes the provided service chain data to Redmine using the specified service type.

### Request Body

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

### Responses

#### ✅ 200 - Synchronization to Redmine was successful

- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** `"Success"`

#### ❌ 500 - Error during synchronization to Redmine

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`): The error message.  
      **Example:** `"There was an error while synchronizing in Redmine: Invalid credentials"`

## POST `/sync/iTop`

This route synchronizes the provided service chain data to ITop using the specified service type.

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `server` (`string`): The iTop server address.  
      **Example:** `"iTop.example.com"`
    - `port` (`integer`): The port of the iTop server.  
      **Example:** `8080`
    - `api_path` (`string`): The API path of the iTop server.  
      **Example:** `"/iTop/api"`
    - `username` (`string`): The username for iTop authentication.  
      **Example:** `"admin"`
    - `password` (`string`): The password for iTop authentication.  
      **Example:** `"password123"`
    - `uploadedChain` (`object`): The chain data to be synchronized to iTop.
    - `serviceType` (`string`): The type of service chain to synchronize.  
      **Allowed values:** `faceted`, `state`

### Responses

#### ✅ 200 - Synchronization to iTop was successful

- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Example:** `"Success"`

#### ❌ 500 - Error during synchronization to iTop

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `message` (`string`): The error message.  
      **Example:** `"There was an error while synchronizing in iTop: Invalid credentials."`
