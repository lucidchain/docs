# Metrics Routes

In this section you will learn about metrics endpoints. This is by far the most complex part of the API so read carefully. Take into account that Lucid chain's API is meant to be used by the frontend, so if you are having too much trouble use it instead.

## POST `/sla-metrics/:target/global`

Retrieves global SLA metrics for the targeted tool. It can be ITop or Redmine. It fetches global metrics for the specified target using the provided filters and service type.

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

## POST `/sla-metrics/:target/metrics/orgs/:teamId`

This route retrieves the SLA metrics of the targeted tool specified organization team.

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
    - `config` (`object`): Configuration parameters for connecting to the target system.  
      **Properties:**
      - `server` (`string`): The server address of the system.  
        **Example:** `"localhost"`
      - `port` (`integer`): The port of the system.  
        **Example:** `8080`
      - `api_path` (`string`): The API path of the system.  
        **Example:** `"/webservices/rest.php"`
      - `username` (`string`): The username for authentication.  
        **Example:** `"admin"`
      - `password` (`string`): The password for authentication.  
        **Example:** `"password123"`
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

## POST `/sla-metrics/:target/metrics/services/:serviceId`

Retrieves service-specific SLA metrics for the specified serice of your targeted tool appliying given filters.

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
    - `config` (`object`): Configuration parameters for connecting to the target system.  
      **Properties:**
      - `server` (`string`): The server address of the target system.  
        **Example:** `"localhost"`
      - `port` (`integer`): The port of the target system.  
        **Example:** `8080`
      - `api_path` (`string`): The API path of the target system.  
        **Example:** `"/webservices/rest.php"`
      - `username` (`string`): The username for authentication.  
        **Example:** `"admin"`
      - `password` (`string`): The password for authentication.  
        **Example:** `"password123"`
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
