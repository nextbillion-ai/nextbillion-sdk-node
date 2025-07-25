# Fleetify

## Routes

Types:

- <code><a href="./src/resources/fleetify/routes/routes.ts">Routing</a></code>
- <code><a href="./src/resources/fleetify/routes/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/fleetify/routes/routes.ts">RouteRedispatchResponse</a></code>

Methods:

- <code title="post /fleetify/routes">client.fleetify.routes.<a href="./src/resources/fleetify/routes/routes.ts">create</a>({ ...params }) -> RouteCreateResponse</code>
- <code title="post /fleetify/routes/{routeID}/redispatch">client.fleetify.routes.<a href="./src/resources/fleetify/routes/routes.ts">redispatch</a>(routeID, { ...params }) -> RouteRedispatchResponse</code>

### Steps

Types:

- <code><a href="./src/resources/fleetify/routes/steps.ts">DocumentSubmission</a></code>
- <code><a href="./src/resources/fleetify/routes/steps.ts">RouteStepCompletionMode</a></code>
- <code><a href="./src/resources/fleetify/routes/steps.ts">RouteStepGeofenceConfig</a></code>
- <code><a href="./src/resources/fleetify/routes/steps.ts">RouteStepsRequest</a></code>
- <code><a href="./src/resources/fleetify/routes/steps.ts">RouteStepsResponse</a></code>
- <code><a href="./src/resources/fleetify/routes/steps.ts">StepCreateResponse</a></code>
- <code><a href="./src/resources/fleetify/routes/steps.ts">StepUpdateResponse</a></code>
- <code><a href="./src/resources/fleetify/routes/steps.ts">StepDeleteResponse</a></code>

Methods:

- <code title="post /fleetify/routes/{routeID}/steps">client.fleetify.routes.steps.<a href="./src/resources/fleetify/routes/steps.ts">create</a>(routeID, { ...params }) -> StepCreateResponse</code>
- <code title="put /fleetify/routes/{routeID}/steps/{stepID}">client.fleetify.routes.steps.<a href="./src/resources/fleetify/routes/steps.ts">update</a>(stepID, { ...params }) -> StepUpdateResponse</code>
- <code title="delete /fleetify/routes/{routeID}/steps/{stepID}">client.fleetify.routes.steps.<a href="./src/resources/fleetify/routes/steps.ts">delete</a>(stepID, { ...params }) -> StepDeleteResponse</code>
- <code title="patch /fleetify/routes/{routeID}/steps/{stepID}">client.fleetify.routes.steps.<a href="./src/resources/fleetify/routes/steps.ts">complete</a>(stepID, { ...params }) -> void</code>

## DocumentTemplates

Types:

- <code><a href="./src/resources/fleetify/document-templates.ts">DocumentTemplateContentRequest</a></code>
- <code><a href="./src/resources/fleetify/document-templates.ts">DocumentTemplateContentResponse</a></code>
- <code><a href="./src/resources/fleetify/document-templates.ts">DocumentTemplateCreateResponse</a></code>
- <code><a href="./src/resources/fleetify/document-templates.ts">DocumentTemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/fleetify/document-templates.ts">DocumentTemplateUpdateResponse</a></code>
- <code><a href="./src/resources/fleetify/document-templates.ts">DocumentTemplateListResponse</a></code>
- <code><a href="./src/resources/fleetify/document-templates.ts">DocumentTemplateDeleteResponse</a></code>

Methods:

- <code title="post /fleetify/document_templates">client.fleetify.documentTemplates.<a href="./src/resources/fleetify/document-templates.ts">create</a>({ ...params }) -> DocumentTemplateCreateResponse</code>
- <code title="get /fleetify/document_templates/{id}">client.fleetify.documentTemplates.<a href="./src/resources/fleetify/document-templates.ts">retrieve</a>(id, { ...params }) -> DocumentTemplateRetrieveResponse</code>
- <code title="put /fleetify/document_templates/{id}">client.fleetify.documentTemplates.<a href="./src/resources/fleetify/document-templates.ts">update</a>(id, { ...params }) -> DocumentTemplateUpdateResponse</code>
- <code title="get /fleetify/document_templates">client.fleetify.documentTemplates.<a href="./src/resources/fleetify/document-templates.ts">list</a>({ ...params }) -> DocumentTemplateListResponse</code>
- <code title="delete /fleetify/document_templates/{id}">client.fleetify.documentTemplates.<a href="./src/resources/fleetify/document-templates.ts">delete</a>(id, { ...params }) -> DocumentTemplateDeleteResponse</code>

# Skynet

Types:

- <code><a href="./src/resources/skynet/skynet.ts">SkynetSubscribeResponse</a></code>

Methods:

- <code title="post /skynet/subscribe">client.skynet.<a href="./src/resources/skynet/skynet.ts">subscribe</a>({ ...params }) -> SkynetSubscribeResponse</code>

## Asset

Types:

- <code><a href="./src/resources/skynet/asset/asset.ts">MetaData</a></code>
- <code><a href="./src/resources/skynet/asset/asset.ts">SimpleResp</a></code>
- <code><a href="./src/resources/skynet/asset/asset.ts">AssetCreateResponse</a></code>
- <code><a href="./src/resources/skynet/asset/asset.ts">AssetRetrieveResponse</a></code>
- <code><a href="./src/resources/skynet/asset/asset.ts">AssetListResponse</a></code>

Methods:

- <code title="post /skynet/asset">client.skynet.asset.<a href="./src/resources/skynet/asset/asset.ts">create</a>({ ...params }) -> AssetCreateResponse</code>
- <code title="get /skynet/asset/{id}">client.skynet.asset.<a href="./src/resources/skynet/asset/asset.ts">retrieve</a>(id, { ...params }) -> AssetRetrieveResponse</code>
- <code title="put /skynet/asset/{id}">client.skynet.asset.<a href="./src/resources/skynet/asset/asset.ts">update</a>(id, { ...params }) -> SimpleResp</code>
- <code title="get /skynet/asset/list">client.skynet.asset.<a href="./src/resources/skynet/asset/asset.ts">list</a>({ ...params }) -> AssetListResponse</code>
- <code title="delete /skynet/asset/{id}">client.skynet.asset.<a href="./src/resources/skynet/asset/asset.ts">delete</a>(id, { ...params }) -> SimpleResp</code>
- <code title="post /skynet/asset/{id}/track">client.skynet.asset.<a href="./src/resources/skynet/asset/asset.ts">track</a>(id, { ...params }) -> SimpleResp</code>
- <code title="put /skynet/asset/{id}/attributes">client.skynet.asset.<a href="./src/resources/skynet/asset/asset.ts">updateAttributes</a>(id, { ...params }) -> SimpleResp</code>

### Event

Types:

- <code><a href="./src/resources/skynet/asset/event.ts">EventListResponse</a></code>

Methods:

- <code title="get /skynet/asset/{id}/event/list">client.skynet.asset.event.<a href="./src/resources/skynet/asset/event.ts">list</a>(id, { ...params }) -> EventListResponse</code>

### Location

Types:

- <code><a href="./src/resources/skynet/asset/location.ts">TrackLocation</a></code>
- <code><a href="./src/resources/skynet/asset/location.ts">LocationListResponse</a></code>
- <code><a href="./src/resources/skynet/asset/location.ts">LocationGetLastResponse</a></code>

Methods:

- <code title="get /skynet/asset/{id}/location/list">client.skynet.asset.location.<a href="./src/resources/skynet/asset/location.ts">list</a>(id, { ...params }) -> LocationListResponse</code>
- <code title="get /skynet/asset/{id}/location/last">client.skynet.asset.location.<a href="./src/resources/skynet/asset/location.ts">getLast</a>(id, { ...params }) -> LocationGetLastResponse</code>

## Monitor

Types:

- <code><a href="./src/resources/skynet/monitor.ts">Metadata</a></code>
- <code><a href="./src/resources/skynet/monitor.ts">Monitor</a></code>
- <code><a href="./src/resources/skynet/monitor.ts">Pagination</a></code>
- <code><a href="./src/resources/skynet/monitor.ts">MonitorCreateResponse</a></code>
- <code><a href="./src/resources/skynet/monitor.ts">MonitorRetrieveResponse</a></code>
- <code><a href="./src/resources/skynet/monitor.ts">MonitorListResponse</a></code>

Methods:

- <code title="post /skynet/monitor">client.skynet.monitor.<a href="./src/resources/skynet/monitor.ts">create</a>({ ...params }) -> MonitorCreateResponse</code>
- <code title="get /skynet/monitor/{id}">client.skynet.monitor.<a href="./src/resources/skynet/monitor.ts">retrieve</a>(id, { ...params }) -> MonitorRetrieveResponse</code>
- <code title="put /skynet/monitor/{id}">client.skynet.monitor.<a href="./src/resources/skynet/monitor.ts">update</a>(id, { ...params }) -> SimpleResp</code>
- <code title="get /skynet/monitor/list">client.skynet.monitor.<a href="./src/resources/skynet/monitor.ts">list</a>({ ...params }) -> MonitorListResponse</code>
- <code title="delete /skynet/monitor/{id}">client.skynet.monitor.<a href="./src/resources/skynet/monitor.ts">delete</a>(id, { ...params }) -> SimpleResp</code>

## Trip

Types:

- <code><a href="./src/resources/skynet/trip.ts">Asset</a></code>
- <code><a href="./src/resources/skynet/trip.ts">TripStop</a></code>
- <code><a href="./src/resources/skynet/trip.ts">TripRetrieveResponse</a></code>
- <code><a href="./src/resources/skynet/trip.ts">TripGetSummaryResponse</a></code>
- <code><a href="./src/resources/skynet/trip.ts">TripStartResponse</a></code>

Methods:

- <code title="get /skynet/trip/{id}">client.skynet.trip.<a href="./src/resources/skynet/trip.ts">retrieve</a>(id, { ...params }) -> TripRetrieveResponse</code>
- <code title="put /skynet/trip/{id}">client.skynet.trip.<a href="./src/resources/skynet/trip.ts">update</a>(id, { ...params }) -> SimpleResp</code>
- <code title="delete /skynet/trip/{id}">client.skynet.trip.<a href="./src/resources/skynet/trip.ts">delete</a>(id, { ...params }) -> SimpleResp</code>
- <code title="post /skynet/trip/end">client.skynet.trip.<a href="./src/resources/skynet/trip.ts">end</a>({ ...params }) -> SimpleResp</code>
- <code title="get /skynet/trip/{id}/summary">client.skynet.trip.<a href="./src/resources/skynet/trip.ts">getSummary</a>(id, { ...params }) -> TripGetSummaryResponse</code>
- <code title="post /skynet/trip/start">client.skynet.trip.<a href="./src/resources/skynet/trip.ts">start</a>({ ...params }) -> TripStartResponse</code>

## NamespacedApikeys

Types:

- <code><a href="./src/resources/skynet/namespaced-apikeys.ts">NamespacedApikeyCreateResponse</a></code>
- <code><a href="./src/resources/skynet/namespaced-apikeys.ts">NamespacedApikeyDeleteResponse</a></code>

Methods:

- <code title="post /skynet/namespaced-apikeys">client.skynet.namespacedApikeys.<a href="./src/resources/skynet/namespaced-apikeys.ts">create</a>({ ...params }) -> NamespacedApikeyCreateResponse</code>
- <code title="delete /skynet/namespaced-apikeys">client.skynet.namespacedApikeys.<a href="./src/resources/skynet/namespaced-apikeys.ts">delete</a>({ ...params }) -> NamespacedApikeyDeleteResponse</code>

## Config

Types:

- <code><a href="./src/resources/skynet/config.ts">ConfigRetrieveResponse</a></code>
- <code><a href="./src/resources/skynet/config.ts">ConfigTestWebhookResponse</a></code>

Methods:

- <code title="get /skynet/config">client.skynet.config.<a href="./src/resources/skynet/config.ts">retrieve</a>({ ...params }) -> ConfigRetrieveResponse</code>
- <code title="put /skynet/config">client.skynet.config.<a href="./src/resources/skynet/config.ts">update</a>({ ...params }) -> SimpleResp</code>
- <code title="post /skynet/config/testwebhook">client.skynet.config.<a href="./src/resources/skynet/config.ts">testWebhook</a>({ ...params }) -> ConfigTestWebhookResponse</code>

## Search

Types:

- <code><a href="./src/resources/skynet/search/search.ts">SearchResponse</a></code>

Methods:

- <code title="get /skynet/search/around">client.skynet.search.<a href="./src/resources/skynet/search/search.ts">around</a>({ ...params }) -> SearchResponse</code>
- <code title="get /skynet/search/bound">client.skynet.search.<a href="./src/resources/skynet/search/search.ts">bound</a>({ ...params }) -> SearchResponse</code>

### Polygon

Methods:

- <code title="post /skynet/search/polygon">client.skynet.search.polygon.<a href="./src/resources/skynet/search/polygon.ts">create</a>({ ...params }) -> SearchResponse</code>
- <code title="get /skynet/search/polygon">client.skynet.search.polygon.<a href="./src/resources/skynet/search/polygon.ts">get</a>({ ...params }) -> SearchResponse</code>

## Skynet

### Asset

Methods:

- <code title="post /skynet/skynet/asset/{id}/bind">client.skynet.skynet.asset.<a href="./src/resources/skynet/skynet_/asset.ts">bind</a>(id, { ...params }) -> SimpleResp</code>

# Geocode

Types:

- <code><a href="./src/resources/geocode.ts">Access</a></code>
- <code><a href="./src/resources/geocode.ts">Address</a></code>
- <code><a href="./src/resources/geocode.ts">Categories</a></code>
- <code><a href="./src/resources/geocode.ts">ContactObject</a></code>
- <code><a href="./src/resources/geocode.ts">Contacts</a></code>
- <code><a href="./src/resources/geocode.ts">MapView</a></code>
- <code><a href="./src/resources/geocode.ts">Position</a></code>
- <code><a href="./src/resources/geocode.ts">GeocodeRetrieveResponse</a></code>
- <code><a href="./src/resources/geocode.ts">GeocodeBatchCreateResponse</a></code>
- <code><a href="./src/resources/geocode.ts">GeocodeStructuredRetrieveResponse</a></code>

Methods:

- <code title="get /geocode">client.geocode.<a href="./src/resources/geocode.ts">retrieve</a>({ ...params }) -> GeocodeRetrieveResponse</code>
- <code title="post /geocode/batch">client.geocode.<a href="./src/resources/geocode.ts">batchCreate</a>([ ...body ]) -> GeocodeBatchCreateResponse</code>
- <code title="get /geocode/structured">client.geocode.<a href="./src/resources/geocode.ts">structuredRetrieve</a>({ ...params }) -> GeocodeStructuredRetrieveResponse</code>

# Optimization

Types:

- <code><a href="./src/resources/optimization/optimization.ts">PostResponse</a></code>
- <code><a href="./src/resources/optimization/optimization.ts">OptimizationComputeResponse</a></code>

Methods:

- <code title="get /optimization/json">client.optimization.<a href="./src/resources/optimization/optimization.ts">compute</a>({ ...params }) -> OptimizationComputeResponse</code>
- <code title="post /optimization/re_optimization">client.optimization.<a href="./src/resources/optimization/optimization.ts">reOptimize</a>({ ...params }) -> PostResponse</code>

## DriverAssignment

Types:

- <code><a href="./src/resources/optimization/driver-assignment.ts">Location</a></code>
- <code><a href="./src/resources/optimization/driver-assignment.ts">Vehicle</a></code>
- <code><a href="./src/resources/optimization/driver-assignment.ts">DriverAssignmentAssignResponse</a></code>

Methods:

- <code title="post /optimization/driver-assignment/v1">client.optimization.driverAssignment.<a href="./src/resources/optimization/driver-assignment.ts">assign</a>({ ...params }) -> DriverAssignmentAssignResponse</code>

## V2

Types:

- <code><a href="./src/resources/optimization/v2.ts">Job</a></code>
- <code><a href="./src/resources/optimization/v2.ts">Shipment</a></code>
- <code><a href="./src/resources/optimization/v2.ts">V2RetrieveResultResponse</a></code>

Methods:

- <code title="post /optimization/v2">client.optimization.v2.<a href="./src/resources/optimization/v2.ts">createRequest</a>({ ...params }) -> PostResponse</code>
- <code title="get /optimization/v2/result">client.optimization.v2.<a href="./src/resources/optimization/v2.ts">retrieveResult</a>({ ...params }) -> V2RetrieveResultResponse</code>

# Geofence

Types:

- <code><a href="./src/resources/geofence/geofence.ts">Geofence</a></code>
- <code><a href="./src/resources/geofence/geofence.ts">GeofenceEntityCreate</a></code>
- <code><a href="./src/resources/geofence/geofence.ts">GeofenceCreateResponse</a></code>
- <code><a href="./src/resources/geofence/geofence.ts">GeofenceRetrieveResponse</a></code>
- <code><a href="./src/resources/geofence/geofence.ts">GeofenceListResponse</a></code>
- <code><a href="./src/resources/geofence/geofence.ts">GeofenceContainsResponse</a></code>

Methods:

- <code title="post /geofence">client.geofence.<a href="./src/resources/geofence/geofence.ts">create</a>({ ...params }) -> GeofenceCreateResponse</code>
- <code title="get /geofence/{id}">client.geofence.<a href="./src/resources/geofence/geofence.ts">retrieve</a>(id, { ...params }) -> GeofenceRetrieveResponse</code>
- <code title="put /geofence/{id}">client.geofence.<a href="./src/resources/geofence/geofence.ts">update</a>(id, { ...params }) -> SimpleResp</code>
- <code title="get /geofence/list">client.geofence.<a href="./src/resources/geofence/geofence.ts">list</a>({ ...params }) -> GeofenceListResponse</code>
- <code title="delete /geofence/{id}">client.geofence.<a href="./src/resources/geofence/geofence.ts">delete</a>(id, { ...params }) -> SimpleResp</code>
- <code title="get /geofence/contain">client.geofence.<a href="./src/resources/geofence/geofence.ts">contains</a>({ ...params }) -> GeofenceContainsResponse</code>

## Console

Types:

- <code><a href="./src/resources/geofence/console.ts">PolygonGeojson</a></code>
- <code><a href="./src/resources/geofence/console.ts">ConsolePreviewResponse</a></code>
- <code><a href="./src/resources/geofence/console.ts">ConsoleSearchResponse</a></code>

Methods:

- <code title="post /geofence/console/preview">client.geofence.console.<a href="./src/resources/geofence/console.ts">preview</a>({ ...params }) -> ConsolePreviewResponse</code>
- <code title="get /geofence/console/search">client.geofence.console.<a href="./src/resources/geofence/console.ts">search</a>({ ...params }) -> ConsoleSearchResponse</code>

## Batch

Types:

- <code><a href="./src/resources/geofence/batch.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/geofence/batch.ts">BatchQueryResponse</a></code>

Methods:

- <code title="post /geofence/batch">client.geofence.batch.<a href="./src/resources/geofence/batch.ts">create</a>({ ...params }) -> BatchCreateResponse</code>
- <code title="delete /geofence/batch">client.geofence.batch.<a href="./src/resources/geofence/batch.ts">delete</a>({ ...params }) -> SimpleResp</code>
- <code title="get /geofence/batch">client.geofence.batch.<a href="./src/resources/geofence/batch.ts">query</a>({ ...params }) -> BatchQueryResponse</code>

# Discover

Types:

- <code><a href="./src/resources/discover.ts">DiscoverRetrieveResponse</a></code>

Methods:

- <code title="get /discover">client.discover.<a href="./src/resources/discover.ts">retrieve</a>({ ...params }) -> DiscoverRetrieveResponse</code>

# Browse

Types:

- <code><a href="./src/resources/browse.ts">BrowseSearchResponse</a></code>

Methods:

- <code title="get /browse">client.browse.<a href="./src/resources/browse.ts">search</a>({ ...params }) -> BrowseSearchResponse</code>

# Mdm

Types:

- <code><a href="./src/resources/mdm.ts">MdmCreateDistanceMatrixResponse</a></code>
- <code><a href="./src/resources/mdm.ts">MdmGetDistanceMatrixStatusResponse</a></code>

Methods:

- <code title="post /mdm/create">client.mdm.<a href="./src/resources/mdm.ts">createDistanceMatrix</a>({ ...params }) -> MdmCreateDistanceMatrixResponse</code>
- <code title="get /mdm/status">client.mdm.<a href="./src/resources/mdm.ts">getDistanceMatrixStatus</a>({ ...params }) -> MdmGetDistanceMatrixStatusResponse</code>

# Isochrone

Types:

- <code><a href="./src/resources/isochrone.ts">IsochroneComputeResponse</a></code>

Methods:

- <code title="get /isochrone/json">client.isochrone.<a href="./src/resources/isochrone.ts">compute</a>({ ...params }) -> IsochroneComputeResponse</code>

# Restrictions

Types:

- <code><a href="./src/resources/restrictions.ts">RichGroupDtoRequest</a></code>
- <code><a href="./src/resources/restrictions.ts">RichGroupDtoResponse</a></code>
- <code><a href="./src/resources/restrictions.ts">RestrictionListResponse</a></code>
- <code><a href="./src/resources/restrictions.ts">RestrictionDeleteResponse</a></code>
- <code><a href="./src/resources/restrictions.ts">RestrictionListPaginatedResponse</a></code>

Methods:

- <code title="post /restrictions/{restriction_type}">client.restrictions.<a href="./src/resources/restrictions.ts">create</a>(restrictionType, { ...params }) -> RichGroupDtoResponse</code>
- <code title="get /restrictions/{id}">client.restrictions.<a href="./src/resources/restrictions.ts">retrieve</a>(id, { ...params }) -> RichGroupDtoResponse</code>
- <code title="patch /restrictions/{id}">client.restrictions.<a href="./src/resources/restrictions.ts">update</a>(id, { ...params }) -> RichGroupDtoResponse</code>
- <code title="get /restrictions">client.restrictions.<a href="./src/resources/restrictions.ts">list</a>({ ...params }) -> RestrictionListResponse</code>
- <code title="delete /restrictions/{id}">client.restrictions.<a href="./src/resources/restrictions.ts">delete</a>(id, { ...params }) -> RestrictionDeleteResponse</code>
- <code title="get /restrictions/list">client.restrictions.<a href="./src/resources/restrictions.ts">listPaginated</a>({ ...params }) -> RestrictionListPaginatedResponse</code>
- <code title="put /restrictions/{id}/state">client.restrictions.<a href="./src/resources/restrictions.ts">setState</a>(id, { ...params }) -> RichGroupDtoResponse</code>

# RestrictionsItems

Types:

- <code><a href="./src/resources/restrictions-items.ts">RestrictionsItemListResponse</a></code>

Methods:

- <code title="get /restrictions_items">client.restrictionsItems.<a href="./src/resources/restrictions-items.ts">list</a>({ ...params }) -> RestrictionsItemListResponse</code>

# Distancematrix

## Json

Types:

- <code><a href="./src/resources/distancematrix/json.ts">JsonRetrieveResponse</a></code>

Methods:

- <code title="post /distancematrix/json">client.distancematrix.json.<a href="./src/resources/distancematrix/json.ts">create</a>() -> void</code>
- <code title="get /distancematrix/json">client.distancematrix.json.<a href="./src/resources/distancematrix/json.ts">retrieve</a>({ ...params }) -> JsonRetrieveResponse</code>

# Autocomplete

Types:

- <code><a href="./src/resources/autocomplete.ts">AutocompleteSuggestResponse</a></code>

Methods:

- <code title="get /autocomplete">client.autocomplete.<a href="./src/resources/autocomplete.ts">suggest</a>({ ...params }) -> AutocompleteSuggestResponse</code>

# Navigation

Types:

- <code><a href="./src/resources/navigation.ts">NavigationRetrieveRouteResponse</a></code>

Methods:

- <code title="get /navigation/json">client.navigation.<a href="./src/resources/navigation.ts">retrieveRoute</a>({ ...params }) -> NavigationRetrieveRouteResponse</code>

# Map

Methods:

- <code title="post /map/segments">client.map.<a href="./src/resources/map.ts">createSegment</a>() -> void</code>

# Autosuggest

Types:

- <code><a href="./src/resources/autosuggest.ts">AutosuggestSuggestResponse</a></code>

Methods:

- <code title="get /autosuggest">client.autosuggest.<a href="./src/resources/autosuggest.ts">suggest</a>({ ...params }) -> AutosuggestSuggestResponse</code>

# Directions

Types:

- <code><a href="./src/resources/directions.ts">DirectionComputeRouteResponse</a></code>

Methods:

- <code title="post /directions/json">client.directions.<a href="./src/resources/directions.ts">computeRoute</a>({ ...params }) -> DirectionComputeRouteResponse</code>

# Batch

Types:

- <code><a href="./src/resources/batch.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/batch.ts">BatchRetrieveResponse</a></code>

Methods:

- <code title="post /batch">client.batch.<a href="./src/resources/batch.ts">create</a>({ ...params }) -> BatchCreateResponse</code>
- <code title="get /batch">client.batch.<a href="./src/resources/batch.ts">retrieve</a>({ ...params }) -> BatchRetrieveResponse</code>

# Multigeocode

Types:

- <code><a href="./src/resources/multigeocode/multigeocode.ts">MultigeocodeSearchResponse</a></code>

Methods:

- <code title="post /multigeocode/search">client.multigeocode.<a href="./src/resources/multigeocode/multigeocode.ts">search</a>({ ...params }) -> MultigeocodeSearchResponse</code>

## Place

Types:

- <code><a href="./src/resources/multigeocode/place.ts">PlaceItem</a></code>
- <code><a href="./src/resources/multigeocode/place.ts">PlaceCreateResponse</a></code>
- <code><a href="./src/resources/multigeocode/place.ts">PlaceRetrieveResponse</a></code>
- <code><a href="./src/resources/multigeocode/place.ts">PlaceUpdateResponse</a></code>
- <code><a href="./src/resources/multigeocode/place.ts">PlaceDeleteResponse</a></code>

Methods:

- <code title="post /multigeocode/place">client.multigeocode.place.<a href="./src/resources/multigeocode/place.ts">create</a>({ ...params }) -> PlaceCreateResponse</code>
- <code title="get /multigeocode/place/{docId}">client.multigeocode.place.<a href="./src/resources/multigeocode/place.ts">retrieve</a>(docID, { ...params }) -> PlaceRetrieveResponse</code>
- <code title="put /multigeocode/place/{docId}">client.multigeocode.place.<a href="./src/resources/multigeocode/place.ts">update</a>(docID, { ...params }) -> PlaceUpdateResponse</code>
- <code title="delete /multigeocode/place/{docId}">client.multigeocode.place.<a href="./src/resources/multigeocode/place.ts">delete</a>(docID, { ...params }) -> PlaceDeleteResponse</code>

# Revgeocode

Types:

- <code><a href="./src/resources/revgeocode.ts">RevgeocodeRetrieveResponse</a></code>

Methods:

- <code title="get /revgeocode">client.revgeocode.<a href="./src/resources/revgeocode.ts">retrieve</a>({ ...params }) -> RevgeocodeRetrieveResponse</code>

# RouteReport

Types:

- <code><a href="./src/resources/route-report.ts">RouteReportCreateResponse</a></code>

Methods:

- <code title="post /route_report">client.routeReport.<a href="./src/resources/route-report.ts">create</a>({ ...params }) -> RouteReportCreateResponse</code>

# SnapToRoads

Types:

- <code><a href="./src/resources/snap-to-roads.ts">SnapToRoadSnapResponse</a></code>

Methods:

- <code title="get /snapToRoads/json">client.snapToRoads.<a href="./src/resources/snap-to-roads.ts">snap</a>({ ...params }) -> SnapToRoadSnapResponse</code>

# Postalcode

Types:

- <code><a href="./src/resources/postalcode.ts">PostalcodeRetrieveCoordinatesResponse</a></code>

Methods:

- <code title="post /postalcode">client.postalcode.<a href="./src/resources/postalcode.ts">retrieveCoordinates</a>({ ...params }) -> PostalcodeRetrieveCoordinatesResponse</code>

# Areas

Types:

- <code><a href="./src/resources/areas.ts">AreaListResponse</a></code>

Methods:

- <code title="get /areas">client.areas.<a href="./src/resources/areas.ts">list</a>({ ...params }) -> AreaListResponse</code>

# Lookup

Types:

- <code><a href="./src/resources/lookup.ts">LookupByIDResponse</a></code>

Methods:

- <code title="get /lookup">client.lookup.<a href="./src/resources/lookup.ts">byID</a>({ ...params }) -> LookupByIDResponse</code>
