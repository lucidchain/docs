---
tags:
  - lucid-chain
  - api
  - synchronization
  - service-chain
  - data-sync
  - development
  - endpoints
keywords:
  - Lucid Chain synchronization routes
  - sync service chain
  - Redmine synchronization
  - iTop synchronization
  - service chain comparison
  - sync endpoints
  - Redmine API
  - iTop API
  - service chain synchronization
  - data synchronization API
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Synchronization Routes

import Alert from '@site/src/components/Alert.js';

In this section you will learn about synchronization endpoints.

<Alert>
Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding.  
</Alert>

<Alert>
Please take into account that service chain type state is not supported in ITop yet, and service chain type faceted is not fully supported on Redmine. We are sorry for that but in future versions this will be fixed.
</Alert>

## POST `/sync/comparationInfo`

This route compares the new version of the current service chain imported in your tool and generates a comparison report. It compares the actual chain with an uploaded chain to identify differences, potential synchronization, and generates a mermaid diagram if there are no errors.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

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

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
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

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
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
