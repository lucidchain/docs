# Documentation routes

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';

In this section you are going to learn about Lucid chain documentation endpoints.

<Disclaimer>
These endpoints described here are ***NOT*** part of this docusaurus project. They are routes in Lucid chain repository that retrieve information related to Lucid chain's documentation.
</Disclaimer>

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
