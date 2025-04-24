---
tags:
  - lucid-chain
  - api
  - sla
  - service-metrics
  - sla-metrics
  - development
  - endpoints
keywords:
  - Lucid Chain metrics routes
  - SLA metrics
  - global SLA metrics
  - organization-specific SLA metrics
  - service-specific SLA metrics
  - Redmine SLA metrics
  - ITop SLA metrics
  - service metrics filters
  - API metrics retrieval
  - Lucid Chain API usage
  - TTO
  - TTR
  - Problematic open issues
  - SLA compliance
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Metrics Routes

import Alert from '@site/src/components/Alert.js';

In this section you will learn about metrics endpoints. This is by far the most complex part of the API so read carefully. Take into account that Lucid chain's API is meant to be used by the frontend, so if you are having too much trouble use it instead.

<Alert>
Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding.  
</Alert>

## POST `/api/sla-metrics/:target/global`

Retrieves global SLA metrics for the targeted tool. It can be ITop or Redmine. It fetches global metrics for the specified target using the provided filters and service type.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Path Parameters

| Name    | Type   | Required/Optional | Description |
|---------|--------|----------|-------------|
| `target` | `string` | **Required** | The target system from which to export. Allowed values: `"itop"`, `"redmine"` |

### Request Body

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

### Responses

#### ✅ 200 - Global SLA metrics retrieved successfully

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `metrics` (`object`): An object with all the metric details for the target.
      - **Type:** `object`

#### ❌ 500 - Error encountered while retrieving global SLA metrics

- **Content-Type:** `text/plain`
- **Example:**  `"Error getting global metrics from {target} with service_type {serviceType}: ..."`

## POST `/api/sla-metrics/:target/metrics/orgs/:teamId`

This route retrieves the SLA metrics of the targeted tool specified organization team.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Path Parameters

| Name     | Type   | Required/Optional | Description |
|----------|--------|----------|-------------|
| `target` | `string` | **Required** | The target system from which to export. Allowed values: `"itop"`, `"redmine"` |
| `teamId` | `string` | **Required** | The ID of the organization (team) for which to retrieve metrics. |

### Request Body

- **Required:** `true`
- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `service_type` (`string`): The type of service chain to export.  
      **Allowed values:** `faceted`, `state`

### Responses

#### ✅ 200 - Organization-specific SLA metrics retrieved successfully

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `metrics` (`object`): An object with all the metric details for the target specified organization team.
      - **Type:** `object`

#### ❌ 500 - Error encountered while retrieving organization-specific SLA metrics

- **Content-Type:** `text/plain`
- **Example:** `"Error retrieving metrics for organization {teamId} from {target}: ..."`

## POST `/api/sla-metrics/:target/metrics/services/:serviceId`

Retrieves service-specific SLA metrics for the specified serice of your targeted tool appliying given filters.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Path Parameters

| Name       | Type   | Required/Optional | Description |
|------------|--------|----------|-------------|
| `target`   | `string` | **Required** | The target system from which to export. Allowed values: `"itop"`, `"redmine"` |
| `serviceId` | `string` | **Required** | The ID of the service for which to retrieve metrics. |

### Request Body

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
    - `service_type` (`string`): The type of service chain to export.  
      **Allowed values:** `faceted`, `state`
    - `serviceName` (`string`): The service name.

### Responses

#### ✅ 200 - Service-specific SLA metrics retrieved successfully

- **Content-Type:** `application/json`
- **Schema:**
  - **Type:** `object`
  - **Properties:**
    - `metrics` (`array`): An object with all the metric details for the target specified service.
      - **Type:** `object`

#### ❌ 400 - Bad request, missing or invalid parameters

- **Content-Type:** `text/plain`
- **Example:** `"Please select a target to get the metrics from."`

#### ❌ 500 - Error encountered while retrieving service-specific SLA metrics

- **Content-Type:** `text/plain`
- **Example:** `"Error getting metrics: ..."`

## GET `/api/sla-metrics/:target/:service_type/issuesPassingSLA`

This route retrieves the list of issues that have passed their SLA compliance (both TTO and TTR) for a specified target system and service chain type. It supports optional date filtering via query parameters.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Path Parameters

| Name           | Type   | Required/Optional | Description |
|----------------|--------|-------------------|-------------|
| `target`       | string | **Required**      | The target system to retrieve SLA metrics from. Allowed values: `"itop"`, `"redmine"` |
| `service_type` | string | **Required**      | The type of service chain being analyzed. Allowed values: `"faceted"`, `"state"` |

### Query Parameters

| Name    | Type   | Required/Optional | Description |
|---------|--------|-------------------|-------------|
| `from`  | string | Optional          | Start date filter in ISO format (e.g., `"2024-01-01"`) |
| `to`    | string | Optional          | End date filter in ISO format (e.g., `"2024-12-31"`) |

### Responses

#### ✅ 200 - Issues passing SLA returned successfully

- **Content-Type:** `application/json`  
- **Description:** A list with all issues that passed both TTO and TTR SLAs.  
- **Example:**
  ```json
  [
    {
      "id": 123,
      "title": "Sample Issue",
      "tto_passed": true,
      "ttr_passed": true
    },
    {
      "id": 124,
      "title": "Another Issue",
      "tto_passed": true,
      "ttr_passed": true
    }
  ]
  ```

#### ❌ 404 - Missing or invalid parameters

- **Content-Type:** `text/plain`
- **Example:** `"Please select a target to get the metrics from."`

#### ❌ 500 - Error encountered while retrieving issues

- **Content-Type:** `text/plain`
- **Example:** `"Error getting metrics: ..."`

## GET `/api/sla-metrics/:target/:service_type/issuesPassingTTO`

This route retrieves the list of issues that have passed TTO for a specified target system and service chain type. It supports optional date filtering via query parameters.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Path Parameters

| Name           | Type   | Required/Optional | Description |
|----------------|--------|-------------------|-------------|
| `target`       | string | **Required**      | The target system to retrieve SLA metrics from. Allowed values: `"itop"`, `"redmine"` |
| `service_type` | string | **Required**      | The type of service chain being analyzed. Allowed values: `"faceted"`, `"state"` |

### Query Parameters

| Name    | Type   | Required/Optional | Description |
|---------|--------|-------------------|-------------|
| `from`  | string | Optional          | Start date filter in ISO format (e.g., `"2024-01-01"`) |
| `to`    | string | Optional          | End date filter in ISO format (e.g., `"2024-12-31"`) |

### Responses

#### ✅ 200 - Issues passing TTO returned successfully

- **Content-Type:** `application/json`  
- **Description:** A list with all issues that passed TTO.  
- **Example:**
  ```json
  [
    {
      "id": 123,
      "title": "Sample Issue",
      "tto_passed": true,
      "ttr_passed": true
    },
    {
      "id": 124,
      "title": "Another Issue",
      "tto_passed": true,
      "ttr_passed": true
    }
  ]
  ```

#### ❌ 404 - Missing or invalid parameters

- **Content-Type:** `text/plain`
- **Example:** `"Please select a target to get the metrics from."`

#### ❌ 500 - Error encountered while retrieving issues

- **Content-Type:** `text/plain`
- **Example:** `"Error getting metrics: ..."`


## GET `/api/sla-metrics/:target/:service_type/issuesPassingTTR`

This route retrieves the list of issues that have passed TTR for a specified target system and service chain type. It supports optional date filtering via query parameters.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Path Parameters

| Name           | Type   | Required/Optional | Description |
|----------------|--------|-------------------|-------------|
| `target`       | string | **Required**      | The target system to retrieve SLA metrics from. Allowed values: `"itop"`, `"redmine"` |
| `service_type` | string | **Required**      | The type of service chain being analyzed. Allowed values: `"faceted"`, `"state"` |

### Query Parameters

| Name    | Type   | Required/Optional | Description |
|---------|--------|-------------------|-------------|
| `from`  | string | Optional          | Start date filter in ISO format (e.g., `"2024-01-01"`) |
| `to`    | string | Optional          | End date filter in ISO format (e.g., `"2024-12-31"`) |

### Responses

#### ✅ 200 - Issues passing TTR returned successfully

- **Content-Type:** `application/json`  
- **Description:** A list with all issues that passed TTO.  
- **Example:**
  ```json
  [
    {
      "id": 123,
      "title": "Sample Issue",
      "tto_passed": true,
      "ttr_passed": true
    },
    {
      "id": 124,
      "title": "Another Issue",
      "tto_passed": true,
      "ttr_passed": true
    }
  ]
  ```

#### ❌ 404 - Missing or invalid parameters

- **Content-Type:** `text/plain`
- **Example:** `"Please select a target to get the metrics from."`

#### ❌ 500 - Error encountered while retrieving issues

- **Content-Type:** `text/plain`
- **Example:** `"Error getting metrics: ..."`

## GET `/api/sla-metrics/:target/:service_type/issues`

This route retrieves **all issues** that are part of the service chain defined by the given `target` system and `service_type`. It supports optional date filters via query parameters.

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Path Parameters

| Name           | Type   | Required/Optional | Description |
|----------------|--------|-------------------|-------------|
| `target`       | string | **Required**      | The system from which to retrieve issues. Allowed values: `"itop"`, `"redmine"` |
| `service_type` | string | **Required**      | The type of service chain being analyzed. Allowed values: `"faceted"`, `"state"` |

### Query Parameters

| Name    | Type   | Required/Optional | Description |
|---------|--------|-------------------|-------------|
| `from`  | string | Optional          | Start date filter in ISO format (e.g., `"2024-01-01"`) |
| `to`    | string | Optional          | End date filter in ISO format (e.g., `"2024-12-31"`) |

### Responses

#### ✅ 200 - All issues returned successfully

- **Content-Type:** `application/json`  
- **Description:** A list of all issues in the service chain for the selected system and type.  
- **Example:**
  ```json
  [
    {
      "id": 1,
      "title": "Login page bug",
      "status": "Resolved"
    },
    {
      "id": 2,
      "title": "Database latency issue",
      "status": "Open"
    }
  ]

#### ❌ 404 - Missing or invalid parameters

- **Content-Type:** `text/plain`
- **Example:** `"Please select a target to get the metrics from."`

#### ❌ 500 - Error encountered while retrieving issues

- **Content-Type:** `text/plain`
- **Example:** `"Error getting metrics: ..."`


## GET `/api/sla-metrics/:target/:service_type/problematicOpenIssues`

This route retrieves all **problematic open issues** that are part of the service chain defined by the given `target` system and `service_type`. It supports optional date filters via query parameters. ***Problematic open issues are the ones that do not pass TTO or TTR and are not closed yet.***

### Security

- **Authorization**: `Bearer Token`
- **Required**: Yes

### Path Parameters

| Name           | Type   | Required/Optional | Description |
|----------------|--------|-------------------|-------------|
| `target`       | string | **Required**      | The system from which to retrieve issues. Allowed values: `"itop"`, `"redmine"` |
| `service_type` | string | **Required**      | The type of service chain being analyzed. Allowed values: `"faceted"`, `"state"` |

### Query Parameters

| Name    | Type   | Required/Optional | Description |
|---------|--------|-------------------|-------------|
| `from`  | string | Optional          | Start date filter in ISO format (e.g., `"2024-01-01"`) |
| `to`    | string | Optional          | End date filter in ISO format (e.g., `"2024-12-31"`) |

### Responses

#### ✅ 200 - All problematic open issues returned successfully

- **Content-Type:** `application/json`  
- **Description:** A list of all issues in the service chain for the selected system and type.  
- **Example:**
  ```json
  [
    {
      "id": 1,
      "title": "Login page bug",
      "status": "Resolved"
    },
    {
      "id": 2,
      "title": "Database latency issue",
      "status": "Open"
    }
  ]

#### ❌ 404 - Missing or invalid parameters

- **Content-Type:** `text/plain`
- **Example:** `"Please select a target to get the metrics from."`

#### ❌ 500 - Error encountered while retrieving problematic open issues

- **Content-Type:** `text/plain`
- **Example:** `"Error getting metrics: ..."`
