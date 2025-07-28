# Nextbillion SDK TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export NEXTBILLION_SDK_API_KEY="My API Key"
npx -y @nbai/sdk-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "nbai_sdk_api": {
      "command": "npx",
      "args": ["-y", "@nbai/sdk-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "NEXTBILLION_SDK_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@nbai/sdk-mcp/server";

// import a specific tool
import createFleetifyRoutes from "@nbai/sdk-mcp/tools/fleetify/routes/create-fleetify-routes";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createFleetifyRoutes, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `fleetify.routes`:

- `create_fleetify_routes` (`write`): Dispatch a new route
- `redispatch_fleetify_routes` (`write`): Re-dispatch route

### Resource `fleetify.routes.steps`:

- `create_routes_fleetify_steps` (`write`): Insert a new step
- `update_routes_fleetify_steps` (`write`): Update a step
- `delete_routes_fleetify_steps` (`write`): Delete a step
- `complete_routes_fleetify_steps` (`write`): Complete a route step with document submission, or update the document of a completed route step.

  When all steps are completed, the encapsulating route’s status will change to `completed` automatically.

  Either `Session Token` must be provided to authenticate the request.

### Resource `fleetify.document_templates`:

- `create_fleetify_document_templates` (`write`): Create Document template
- `retrieve_fleetify_document_templates` (`read`): Retrieve template by ID
- `update_fleetify_document_templates` (`write`): Update a document template
- `list_fleetify_document_templates` (`read`): Get all document templates
- `delete_fleetify_document_templates` (`write`): Delete a document template

### Resource `skynet`:

- `subscribe_skynet` (`write`): POST Action

### Resource `skynet.asset`:

- `create_skynet_asset` (`write`): Create an Asset
- `retrieve_skynet_asset` (`read`): Get an Asset
- `update_skynet_asset` (`write`): Update an Asset
- `list_skynet_asset` (`read`): Get Asset List
- `delete_skynet_asset` (`write`): Delete an Asset
- `bind_skynet_asset` (`write`): Bind asset to device
- `track_skynet_asset` (`write`): Upload track info
- `update_attributes_skynet_asset` (`write`): Update asset attributes. (add)

### Resource `skynet.asset.event`:

- `list_asset_skynet_event` (`read`): Event History of an Asset

### Resource `skynet.asset.location`:

- `list_asset_skynet_location` (`read`): Track locations of an asset
- `get_last_asset_skynet_location` (`read`): Track the last location of an asset

### Resource `skynet.monitor`:

- `create_skynet_monitor` (`write`): Create a Monitor
- `retrieve_skynet_monitor` (`read`): Get a Monitor
- `update_skynet_monitor` (`write`): Update a Monitor
- `list_skynet_monitor` (`read`): Get Monitor List
- `delete_skynet_monitor` (`write`): Delete a Monitor

### Resource `skynet.trip`:

- `retrieve_skynet_trip` (`read`): Retrieves detailed information about a specific trip.
- `update_skynet_trip` (`write`): Updates the data of a specified trip with the provided data.
- `delete_skynet_trip` (`write`): Deletes a specified trip from the system.
- `end_skynet_trip` (`write`): End a trip
- `get_summary_skynet_trip` (`read`): Get summary of an ended trip
- `start_skynet_trip` (`write`): Add a new trip to the system with the provided data.

### Resource `skynet.namespaced_apikeys`:

- `create_skynet_namespaced_apikeys` (`write`): Create namespace under a parent key
- `delete_skynet_namespaced_apikeys` (`write`): Delete namespace under a parent key

### Resource `skynet.config`:

- `retrieve_skynet_config` (`read`): Get webhook configuration
- `update_skynet_config` (`write`): Update webhook configuration
- `test_webhook_skynet_config` (`write`): Test webhook configurations

### Resource `skynet.search`:

- `around_skynet_search` (`read`): Around Search
- `bound_skynet_search` (`read`): Bound Search

### Resource `skynet.search.polygon`:

- `create_search_skynet_polygon` (`write`): Polygon Search
- `get_search_skynet_polygon` (`read`): Polygon Search

### Resource `geocode`:

- `retrieve_geocode` (`read`): Geocode
- `batch_create_geocode` (`write`): Batch Geocode
- `structured_retrieve_geocode` (`read`): Structured Geocode

### Resource `optimization`:

- `compute_optimization` (`read`): Nextbillion.ai Optimization API computes and returns an optimized route between an origin and destination which have multiple stop points in between. With NextBillion.ai's Route Optimization API you get.

  Optimized routing between way points

  Highly accurate ETAs with customized routes

  Roundtrip optimization with customized destinations

  A list of all parameters is specified in the next section.

- `re_optimize_optimization` (`write`): Re-optimization

### Resource `optimization.driver_assignment`:

- `assign_optimization_driver_assignment` (`write`): Assigns available drivers (vehicles) to open orders based on specified criteria and constraints.

### Resource `optimization.v2`:

- `retrieve_result_optimization_v2` (`read`): Flexible GET
- `submit_optimization_v2` (`write`): Flexible POST

### Resource `geofence`:

- `create_geofence` (`write`): Create a geofence
- `retrieve_geofence` (`read`): Get a Geofence
- `update_geofence` (`write`): Update a Geofence
- `list_geofence` (`read`): Get Geofence List
- `delete_geofence` (`write`): Delete a Geofence
- `contains_geofence` (`read`): Geofence Contains

### Resource `geofence.console`:

- `preview_geofence_console` (`write`): preview geofence geojson
- `search_geofence_console` (`read`): Console Geofence Search API

### Resource `geofence.batch`:

- `create_geofence_batch` (`write`): Batch Creation of Geofence
- `list_geofence_batch` (`read`): Batch Query of Geofence
- `delete_geofence_batch` (`write`): Delete Batch Geofence

### Resource `discover`:

- `retrieve_discover` (`read`): Discover matching places

### Resource `browse`:

- `search_browse` (`read`): Browse a search area using a free text query

### Resource `mdm`:

- `create_distance_matrix_mdm` (`write`): Create a massive distance matrix task
- `get_distance_matrix_status_mdm` (`read`): Get massive distance matrix task status

### Resource `isochrone`:

- `compute_isochrone` (`read`): The NextBillion.ai Isochrone API computes areas that are reachable within a specified amount of time from a location, and returns the reachable regions as contours of polygons or lines that you can display on a map.

### Resource `restrictions`:

- `create_restrictions` (`write`): Create a new restriction
- `retrieve_restrictions` (`read`): Get a restriction by id
- `update_restrictions` (`write`): Update a restriction
- `list_restrictions` (`read`): Get the paginated list of restrictions
- `delete_restrictions` (`write`): Delete a restriction by ID
- `list_by_bbox_restrictions` (`read`): Get restrictions by bbox
- `set_state_restrictions` (`write`): Set the state of a restriction by ID

### Resource `restrictions_items`:

- `list_restrictions_items` (`read`): Get restriction items by bbox

### Resource `distance_matrix.json`:

- `create_distance_matrix_json` (`write`): asfd
- `retrieve_distance_matrix_json` (`read`): Nextbillion.ai Distance Matrix API computes distances and ETAs between a set of origins and destinations — could be for one-to-many or many-to-many scenarios. The API call returns a matrix of ETAs and distances for each origin and destination pair. For example, If the set is Origins {A,B} and Destinations {C,D,E} we can get the following set of results with distance (meters) and time (seconds) for each.
  The GET method can only handle up to 100 locations (1 location is either 1 origin or 1 destination).

### Resource `autocomplete`:

- `suggest_autocomplete` (`read`): Autocomplete

### Resource `navigation`:

- `retrieve_route_navigation` (`read`): Nextbillion.ai’s Navigation API is a service that computes a route between 2 places, and also returns detailed turn by turn instructions for the route.

  The Navigation API can be used as an input into your Navigation app. Alternatively, you can directly use Nextbillion.ai’s Navigation SDK for a complete turn by turn navigation experience.

### Resource `map`:

- `create_segment_map` (`write`): Road Segments

### Resource `autosuggest`:

- `suggest_autosuggest` (`read`): Autosuggest

### Resource `directions`:

- `compute_route_directions` (`write`): Directions API is a service that computes a route with given coordinates.

### Resource `batch`:

- `create_batch` (`write`): Create Batch Routing
- `retrieve_batch` (`read`): Get Batch Result

### Resource `multigeocode`:

- `search_multigeocode` (`write`): The method enables searching for known places from multiple data sources

  Use this method to find known places in default or your own custom (proprietary) dataset and get a combined search result. It accepts free-form, partially correct or even incomplete search texts. Results would be ranked based on the search score of a place.

### Resource `multigeocode.place`:

- `create_multigeocode_place` (`write`): The "Add Place" method allows users to create custom places

  Add place method provides the flexibility to create custom places in a way that suits your business needs. The newly created place and its attributes can be added to custom (proprietary) dataset - to the effect of building your own places dataset (s) - or, to a default dataset. Overcome inaccurate ‘POI’ details from default search provider by creating custom, highly accurate ‘POIs’.

- `retrieve_multigeocode_place` (`read`): Use this method to get the details of previously created custom places using its NextBillion ID.
- `update_multigeocode_place` (`write`): The "Update Place" method allows businesses to update the attributes of an existing place.

  This method allows you to update the attributes of custom places. In effect, updating a place replaces the current information in search results with the updated information associated with the specific docID. Use this method to enhance the accuracy/usability of your search results with respect to the default dataset to suit your business needs.

  If you want to prioritize a particular result in your search results, update the ‘score’ of that specific place.  
  Alternatively, you can block places which are no longer needed by setting their status: ‘disable’.

- `delete_multigeocode_place` (`write`): The "Delete Place" method enables businesses to delete a previously created place

  Use this method to delete a previously created place. Please note that the place associated with the specified docID only would be deleted. As a result, once a place is deleted, the search API can still return valid results from the default datasets or others, if present.

### Resource `revgeocode`:

- `retrieve_revgeocode` (`read`): Reverse Geocode

### Resource `route_report`:

- `create_route_report` (`write`): Route Report

### Resource `snap_to_roads`:

- `snap_snap_to_roads` (`read`): Nextbillion.ai Snap To Roads API takes a series of locations along a route, and returns the new locations on this route that are snapped to the best-matched roads where the trip took place. You can set various parameters, such as timestamps or radius, to optimize the result.

### Resource `postalcode`:

- `retrieve_coordinates_postalcode` (`write`): Retrieve coordinates by postal code

### Resource `lookup`:

- `by_id_lookup` (`read`): Lookup By ID

### Resource `areas`:

- `list_areas` (`read`): Get available areas
