---
tags:
  - lucid-chain
  - api
  - endpoints
  - service-chain
  - restrictions
  - api-documentation
  - development
keywords:
  - Lucid Chain documentation
  - API documentation routes
  - README retrieval
  - service chain constraints
  - Lucid Chain API endpoints
  - backend README
  - retrieve README HTML
  - API readme routes
  - Lucid Chain API usage
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Documentation routes

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';

In this section you are going to learn about Lucid chain documentation endpoints.

<Disclaimer>
These endpoints described here are ***NOT*** part of this docusaurus project. They are routes in Lucid chain repository that retrieve information related to Lucid chain's documentation.
</Disclaimer>

<Alert>
Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding.  
</Alert>

## GET `/about`

This route retrieve the entire backend`s README file as HTML. It Rrads the entire README file and returns its content as an HTML response.

### Responses

#### ✅ 200 - Successfully retrieved the README file content as HTML

- **Content-Type:** `text/html`
- **Schema:**
  - **Type:** `string`
  - **Description:** The HTML content of the README file.

#### ❌ 500 - Error reading the README file

- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Description:** Error message when the file cannot be read.
  - **Example:** `"Error reading the file: ..."`

## GET `/info/restrictions`

This route retrieves service chain constraints section from backend's README file. It reads the README file, extracts the section titled "Service Chain Constraints," and returns it as HTML.

### Responses

#### ✅ 200 - Successfully retrieved the service chain constraints section as HTML

- **Content-Type:** `text/html`
- **Schema:**
  - **Type:** `string`
  - **Description:** The HTML content of the "Service Chain Constraints" section from the README file.
  - **Example:**

    ```html
    <h2>Service Chain Constraints</h2>
    <p>Details about constraints...</p>
    ```

#### ❌ 500 - Error reading the README file

- **Content-Type:** `text/plain`
- **Schema:**
  - **Type:** `string`
  - **Description:** Error message when the file cannot be read.
  - **Example:** `"Error reading the file: ..."`
