// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_fleetify_routes from './fleetify/routes/create-fleetify-routes';
import redispatch_fleetify_routes from './fleetify/routes/redispatch-fleetify-routes';
import create_routes_fleetify_steps from './fleetify/routes/steps/create-routes-fleetify-steps';
import update_routes_fleetify_steps from './fleetify/routes/steps/update-routes-fleetify-steps';
import delete_routes_fleetify_steps from './fleetify/routes/steps/delete-routes-fleetify-steps';
import complete_routes_fleetify_steps from './fleetify/routes/steps/complete-routes-fleetify-steps';
import create_fleetify_document_templates from './fleetify/document-templates/create-fleetify-document-templates';
import retrieve_fleetify_document_templates from './fleetify/document-templates/retrieve-fleetify-document-templates';
import update_fleetify_document_templates from './fleetify/document-templates/update-fleetify-document-templates';
import list_fleetify_document_templates from './fleetify/document-templates/list-fleetify-document-templates';
import delete_fleetify_document_templates from './fleetify/document-templates/delete-fleetify-document-templates';
import subscribe_skynet from './skynet/subscribe-skynet';
import create_skynet_asset from './skynet/asset/create-skynet-asset';
import retrieve_skynet_asset from './skynet/asset/retrieve-skynet-asset';
import update_skynet_asset from './skynet/asset/update-skynet-asset';
import delete_skynet_asset from './skynet/asset/delete-skynet-asset';
import retrieve_list_skynet_asset from './skynet/asset/retrieve-list-skynet-asset';
import track_skynet_asset from './skynet/asset/track-skynet-asset';
import update_attributes_skynet_asset from './skynet/asset/update-attributes-skynet-asset';
import retrieve_list_asset_skynet_event from './skynet/asset/event/retrieve-list-asset-skynet-event';
import retrieve_last_asset_skynet_location from './skynet/asset/location/retrieve-last-asset-skynet-location';
import retrieve_list_asset_skynet_location from './skynet/asset/location/retrieve-list-asset-skynet-location';
import create_skynet_monitor from './skynet/monitor/create-skynet-monitor';
import retrieve_skynet_monitor from './skynet/monitor/retrieve-skynet-monitor';
import update_skynet_monitor from './skynet/monitor/update-skynet-monitor';
import delete_skynet_monitor from './skynet/monitor/delete-skynet-monitor';
import retrieve_list_skynet_monitor from './skynet/monitor/retrieve-list-skynet-monitor';
import retrieve_skynet_trip from './skynet/trip/retrieve-skynet-trip';
import update_skynet_trip from './skynet/trip/update-skynet-trip';
import delete_skynet_trip from './skynet/trip/delete-skynet-trip';
import end_skynet_trip from './skynet/trip/end-skynet-trip';
import retrieve_summary_skynet_trip from './skynet/trip/retrieve-summary-skynet-trip';
import start_skynet_trip from './skynet/trip/start-skynet-trip';
import delete_namespaced_apikeys_skynet_namespaced_apikeys from './skynet/namespaced-apikeys/delete-namespaced-apikeys-skynet-namespaced-apikeys';
import namespaced_apikeys_skynet_namespaced_apikeys from './skynet/namespaced-apikeys/namespaced-apikeys-skynet-namespaced-apikeys';
import create_skynet_config from './skynet/config/create-skynet-config';
import list_skynet_config from './skynet/config/list-skynet-config';
import testwebhook_skynet_config from './skynet/config/testwebhook-skynet-config';
import retrieve_around_skynet_search from './skynet/search/retrieve-around-skynet-search';
import retrieve_bound_skynet_search from './skynet/search/retrieve-bound-skynet-search';
import create_search_skynet_polygon from './skynet/search/polygon/create-search-skynet-polygon';
import list_search_skynet_polygon from './skynet/search/polygon/list-search-skynet-polygon';
import bind_skynet_skynet_asset from './skynet/skynet_/asset/bind-skynet-skynet-asset';
import retrieve_geocode from './geocode/retrieve-geocode';
import batch_create_geocode from './geocode/batch-create-geocode';
import structured_retrieve_geocode from './geocode/structured-retrieve-geocode';
import compute_optimization from './optimization/compute-optimization';
import re_optimize_optimization from './optimization/re-optimize-optimization';
import assign_optimization_driver_assignment from './optimization/driver-assignment/assign-optimization-driver-assignment';
import get_result_optimization_v2 from './optimization/v2/get-result-optimization-v2';
import submit_optimization_v2 from './optimization/v2/submit-optimization-v2';
import create_geofence from './geofence/create-geofence';
import retrieve_geofence from './geofence/retrieve-geofence';
import update_geofence from './geofence/update-geofence';
import list_geofence from './geofence/list-geofence';
import delete_geofence from './geofence/delete-geofence';
import contains_geofence from './geofence/contains-geofence';
import preview_geofence_console from './geofence/console/preview-geofence-console';
import search_geofence_console from './geofence/console/search-geofence-console';
import create_geofence_batch from './geofence/batch/create-geofence-batch';
import list_geofence_batch from './geofence/batch/list-geofence-batch';
import delete_geofence_batch from './geofence/batch/delete-geofence-batch';
import list_discover from './discover/list-discover';
import search_browse from './browse/search-browse';
import create_distance_matrix_mdm from './mdm/create-distance-matrix-mdm';
import get_distance_matrix_status_mdm from './mdm/get-distance-matrix-status-mdm';
import compute_isochrone from './isochrone/compute-isochrone';
import create_restrictions from './restrictions/create-restrictions';
import retrieve_restrictions from './restrictions/retrieve-restrictions';
import update_restrictions from './restrictions/update-restrictions';
import list_restrictions from './restrictions/list-restrictions';
import delete_restrictions from './restrictions/delete-restrictions';
import list_by_bbox_restrictions from './restrictions/list-by-bbox-restrictions';
import set_state_restrictions from './restrictions/set-state-restrictions';
import list_restrictions_items from './restrictions-items/list-restrictions-items';
import create_distancematrix_json from './distancematrix/json/create-distancematrix-json';
import retrieve_distancematrix_json from './distancematrix/json/retrieve-distancematrix-json';
import suggest_autocomplete from './autocomplete/suggest-autocomplete';
import retrieve_route_navigation from './navigation/retrieve-route-navigation';
import create_segment_map from './map/create-segment-map';
import suggest_autosuggest from './autosuggest/suggest-autosuggest';
import compute_route_directions from './directions/compute-route-directions';
import create_batch from './batch/create-batch';
import retrieve_batch from './batch/retrieve-batch';
import search_multigeocode from './multigeocode/search-multigeocode';
import create_multigeocode_place from './multigeocode/place/create-multigeocode-place';
import retrieve_multigeocode_place from './multigeocode/place/retrieve-multigeocode-place';
import update_multigeocode_place from './multigeocode/place/update-multigeocode-place';
import delete_multigeocode_place from './multigeocode/place/delete-multigeocode-place';
import retrieve_revgeocode from './revgeocode/retrieve-revgeocode';
import create_route_report from './route-report/create-route-report';
import snap_snap_to_roads from './snap-to-roads/snap-snap-to-roads';
import retrieve_coordinates_postalcode from './postalcode/retrieve-coordinates-postalcode';
import list_areas from './areas/list-areas';
import retrieve_lookup from './lookup/retrieve-lookup';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_fleetify_routes);
addEndpoint(redispatch_fleetify_routes);
addEndpoint(create_routes_fleetify_steps);
addEndpoint(update_routes_fleetify_steps);
addEndpoint(delete_routes_fleetify_steps);
addEndpoint(complete_routes_fleetify_steps);
addEndpoint(create_fleetify_document_templates);
addEndpoint(retrieve_fleetify_document_templates);
addEndpoint(update_fleetify_document_templates);
addEndpoint(list_fleetify_document_templates);
addEndpoint(delete_fleetify_document_templates);
addEndpoint(subscribe_skynet);
addEndpoint(create_skynet_asset);
addEndpoint(retrieve_skynet_asset);
addEndpoint(update_skynet_asset);
addEndpoint(delete_skynet_asset);
addEndpoint(retrieve_list_skynet_asset);
addEndpoint(track_skynet_asset);
addEndpoint(update_attributes_skynet_asset);
addEndpoint(retrieve_list_asset_skynet_event);
addEndpoint(retrieve_last_asset_skynet_location);
addEndpoint(retrieve_list_asset_skynet_location);
addEndpoint(create_skynet_monitor);
addEndpoint(retrieve_skynet_monitor);
addEndpoint(update_skynet_monitor);
addEndpoint(delete_skynet_monitor);
addEndpoint(retrieve_list_skynet_monitor);
addEndpoint(retrieve_skynet_trip);
addEndpoint(update_skynet_trip);
addEndpoint(delete_skynet_trip);
addEndpoint(end_skynet_trip);
addEndpoint(retrieve_summary_skynet_trip);
addEndpoint(start_skynet_trip);
addEndpoint(delete_namespaced_apikeys_skynet_namespaced_apikeys);
addEndpoint(namespaced_apikeys_skynet_namespaced_apikeys);
addEndpoint(create_skynet_config);
addEndpoint(list_skynet_config);
addEndpoint(testwebhook_skynet_config);
addEndpoint(retrieve_around_skynet_search);
addEndpoint(retrieve_bound_skynet_search);
addEndpoint(create_search_skynet_polygon);
addEndpoint(list_search_skynet_polygon);
addEndpoint(bind_skynet_skynet_asset);
addEndpoint(retrieve_geocode);
addEndpoint(batch_create_geocode);
addEndpoint(structured_retrieve_geocode);
addEndpoint(compute_optimization);
addEndpoint(re_optimize_optimization);
addEndpoint(assign_optimization_driver_assignment);
addEndpoint(get_result_optimization_v2);
addEndpoint(submit_optimization_v2);
addEndpoint(create_geofence);
addEndpoint(retrieve_geofence);
addEndpoint(update_geofence);
addEndpoint(list_geofence);
addEndpoint(delete_geofence);
addEndpoint(contains_geofence);
addEndpoint(preview_geofence_console);
addEndpoint(search_geofence_console);
addEndpoint(create_geofence_batch);
addEndpoint(list_geofence_batch);
addEndpoint(delete_geofence_batch);
addEndpoint(list_discover);
addEndpoint(search_browse);
addEndpoint(create_distance_matrix_mdm);
addEndpoint(get_distance_matrix_status_mdm);
addEndpoint(compute_isochrone);
addEndpoint(create_restrictions);
addEndpoint(retrieve_restrictions);
addEndpoint(update_restrictions);
addEndpoint(list_restrictions);
addEndpoint(delete_restrictions);
addEndpoint(list_by_bbox_restrictions);
addEndpoint(set_state_restrictions);
addEndpoint(list_restrictions_items);
addEndpoint(create_distancematrix_json);
addEndpoint(retrieve_distancematrix_json);
addEndpoint(suggest_autocomplete);
addEndpoint(retrieve_route_navigation);
addEndpoint(create_segment_map);
addEndpoint(suggest_autosuggest);
addEndpoint(compute_route_directions);
addEndpoint(create_batch);
addEndpoint(retrieve_batch);
addEndpoint(search_multigeocode);
addEndpoint(create_multigeocode_place);
addEndpoint(retrieve_multigeocode_place);
addEndpoint(update_multigeocode_place);
addEndpoint(delete_multigeocode_place);
addEndpoint(retrieve_revgeocode);
addEndpoint(create_route_report);
addEndpoint(snap_snap_to_roads);
addEndpoint(retrieve_coordinates_postalcode);
addEndpoint(list_areas);
addEndpoint(retrieve_lookup);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
