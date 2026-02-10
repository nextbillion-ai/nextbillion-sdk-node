import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.fleetify.routes.create',
    fullyQualifiedName: 'fleetify.routes.create',
    httpMethod: 'post',
    httpPath: '/fleetify/routes',
  },
  {
    clientCallName: 'client.fleetify.routes.redispatch',
    fullyQualifiedName: 'fleetify.routes.redispatch',
    httpMethod: 'post',
    httpPath: '/fleetify/routes/{routeID}/redispatch',
  },
  {
    clientCallName: 'client.fleetify.routes.steps.create',
    fullyQualifiedName: 'fleetify.routes.steps.create',
    httpMethod: 'post',
    httpPath: '/fleetify/routes/{routeID}/steps',
  },
  {
    clientCallName: 'client.fleetify.routes.steps.update',
    fullyQualifiedName: 'fleetify.routes.steps.update',
    httpMethod: 'put',
    httpPath: '/fleetify/routes/{routeID}/steps/{stepID}',
  },
  {
    clientCallName: 'client.fleetify.routes.steps.delete',
    fullyQualifiedName: 'fleetify.routes.steps.delete',
    httpMethod: 'delete',
    httpPath: '/fleetify/routes/{routeID}/steps/{stepID}',
  },
  {
    clientCallName: 'client.fleetify.routes.steps.complete',
    fullyQualifiedName: 'fleetify.routes.steps.complete',
    httpMethod: 'patch',
    httpPath: '/fleetify/routes/{routeID}/steps/{stepID}',
  },
  {
    clientCallName: 'client.fleetify.documentTemplates.create',
    fullyQualifiedName: 'fleetify.documentTemplates.create',
    httpMethod: 'post',
    httpPath: '/fleetify/document_templates',
  },
  {
    clientCallName: 'client.fleetify.documentTemplates.retrieve',
    fullyQualifiedName: 'fleetify.documentTemplates.retrieve',
    httpMethod: 'get',
    httpPath: '/fleetify/document_templates/{id}',
  },
  {
    clientCallName: 'client.fleetify.documentTemplates.update',
    fullyQualifiedName: 'fleetify.documentTemplates.update',
    httpMethod: 'put',
    httpPath: '/fleetify/document_templates/{id}',
  },
  {
    clientCallName: 'client.fleetify.documentTemplates.list',
    fullyQualifiedName: 'fleetify.documentTemplates.list',
    httpMethod: 'get',
    httpPath: '/fleetify/document_templates',
  },
  {
    clientCallName: 'client.fleetify.documentTemplates.delete',
    fullyQualifiedName: 'fleetify.documentTemplates.delete',
    httpMethod: 'delete',
    httpPath: '/fleetify/document_templates/{id}',
  },
  {
    clientCallName: 'client.skynet.subscribe',
    fullyQualifiedName: 'skynet.subscribe',
    httpMethod: 'post',
    httpPath: '/skynet/subscribe',
  },
  {
    clientCallName: 'client.skynet.asset.create',
    fullyQualifiedName: 'skynet.asset.create',
    httpMethod: 'post',
    httpPath: '/skynet/asset',
  },
  {
    clientCallName: 'client.skynet.asset.retrieve',
    fullyQualifiedName: 'skynet.asset.retrieve',
    httpMethod: 'get',
    httpPath: '/skynet/asset/{id}',
  },
  {
    clientCallName: 'client.skynet.asset.update',
    fullyQualifiedName: 'skynet.asset.update',
    httpMethod: 'put',
    httpPath: '/skynet/asset/{id}',
  },
  {
    clientCallName: 'client.skynet.asset.list',
    fullyQualifiedName: 'skynet.asset.list',
    httpMethod: 'get',
    httpPath: '/skynet/asset/list',
  },
  {
    clientCallName: 'client.skynet.asset.delete',
    fullyQualifiedName: 'skynet.asset.delete',
    httpMethod: 'delete',
    httpPath: '/skynet/asset/{id}',
  },
  {
    clientCallName: 'client.skynet.asset.bind',
    fullyQualifiedName: 'skynet.asset.bind',
    httpMethod: 'post',
    httpPath: '/skynet/asset/{id}/bind',
  },
  {
    clientCallName: 'client.skynet.asset.track',
    fullyQualifiedName: 'skynet.asset.track',
    httpMethod: 'post',
    httpPath: '/skynet/asset/{id}/track',
  },
  {
    clientCallName: 'client.skynet.asset.updateAttributes',
    fullyQualifiedName: 'skynet.asset.updateAttributes',
    httpMethod: 'put',
    httpPath: '/skynet/asset/{id}/attributes',
  },
  {
    clientCallName: 'client.skynet.asset.event.list',
    fullyQualifiedName: 'skynet.asset.event.list',
    httpMethod: 'get',
    httpPath: '/skynet/asset/{id}/event/list',
  },
  {
    clientCallName: 'client.skynet.asset.location.list',
    fullyQualifiedName: 'skynet.asset.location.list',
    httpMethod: 'get',
    httpPath: '/skynet/asset/{id}/location/list',
  },
  {
    clientCallName: 'client.skynet.asset.location.getLast',
    fullyQualifiedName: 'skynet.asset.location.getLast',
    httpMethod: 'get',
    httpPath: '/skynet/asset/{id}/location/last',
  },
  {
    clientCallName: 'client.skynet.monitor.create',
    fullyQualifiedName: 'skynet.monitor.create',
    httpMethod: 'post',
    httpPath: '/skynet/monitor',
  },
  {
    clientCallName: 'client.skynet.monitor.retrieve',
    fullyQualifiedName: 'skynet.monitor.retrieve',
    httpMethod: 'get',
    httpPath: '/skynet/monitor/{id}',
  },
  {
    clientCallName: 'client.skynet.monitor.update',
    fullyQualifiedName: 'skynet.monitor.update',
    httpMethod: 'put',
    httpPath: '/skynet/monitor/{id}',
  },
  {
    clientCallName: 'client.skynet.monitor.list',
    fullyQualifiedName: 'skynet.monitor.list',
    httpMethod: 'get',
    httpPath: '/skynet/monitor/list',
  },
  {
    clientCallName: 'client.skynet.monitor.delete',
    fullyQualifiedName: 'skynet.monitor.delete',
    httpMethod: 'delete',
    httpPath: '/skynet/monitor/{id}',
  },
  {
    clientCallName: 'client.skynet.trip.retrieve',
    fullyQualifiedName: 'skynet.trip.retrieve',
    httpMethod: 'get',
    httpPath: '/skynet/trip/{id}',
  },
  {
    clientCallName: 'client.skynet.trip.update',
    fullyQualifiedName: 'skynet.trip.update',
    httpMethod: 'put',
    httpPath: '/skynet/trip/{id}',
  },
  {
    clientCallName: 'client.skynet.trip.delete',
    fullyQualifiedName: 'skynet.trip.delete',
    httpMethod: 'delete',
    httpPath: '/skynet/trip/{id}',
  },
  {
    clientCallName: 'client.skynet.trip.end',
    fullyQualifiedName: 'skynet.trip.end',
    httpMethod: 'post',
    httpPath: '/skynet/trip/end',
  },
  {
    clientCallName: 'client.skynet.trip.getSummary',
    fullyQualifiedName: 'skynet.trip.getSummary',
    httpMethod: 'get',
    httpPath: '/skynet/trip/{id}/summary',
  },
  {
    clientCallName: 'client.skynet.trip.start',
    fullyQualifiedName: 'skynet.trip.start',
    httpMethod: 'post',
    httpPath: '/skynet/trip/start',
  },
  {
    clientCallName: 'client.skynet.namespacedApikeys.create',
    fullyQualifiedName: 'skynet.namespacedApikeys.create',
    httpMethod: 'post',
    httpPath: '/skynet/namespaced-apikeys',
  },
  {
    clientCallName: 'client.skynet.namespacedApikeys.delete',
    fullyQualifiedName: 'skynet.namespacedApikeys.delete',
    httpMethod: 'delete',
    httpPath: '/skynet/namespaced-apikeys',
  },
  {
    clientCallName: 'client.skynet.config.retrieve',
    fullyQualifiedName: 'skynet.config.retrieve',
    httpMethod: 'get',
    httpPath: '/skynet/config',
  },
  {
    clientCallName: 'client.skynet.config.update',
    fullyQualifiedName: 'skynet.config.update',
    httpMethod: 'put',
    httpPath: '/skynet/config',
  },
  {
    clientCallName: 'client.skynet.config.testWebhook',
    fullyQualifiedName: 'skynet.config.testWebhook',
    httpMethod: 'post',
    httpPath: '/skynet/config/testwebhook',
  },
  {
    clientCallName: 'client.skynet.search.around',
    fullyQualifiedName: 'skynet.search.around',
    httpMethod: 'get',
    httpPath: '/skynet/search/around',
  },
  {
    clientCallName: 'client.skynet.search.bound',
    fullyQualifiedName: 'skynet.search.bound',
    httpMethod: 'get',
    httpPath: '/skynet/search/bound',
  },
  {
    clientCallName: 'client.skynet.search.polygon.create',
    fullyQualifiedName: 'skynet.search.polygon.create',
    httpMethod: 'post',
    httpPath: '/skynet/search/polygon',
  },
  {
    clientCallName: 'client.skynet.search.polygon.get',
    fullyQualifiedName: 'skynet.search.polygon.get',
    httpMethod: 'get',
    httpPath: '/skynet/search/polygon',
  },
  {
    clientCallName: 'client.geocode.retrieve',
    fullyQualifiedName: 'geocode.retrieve',
    httpMethod: 'get',
    httpPath: '/geocode',
  },
  {
    clientCallName: 'client.geocode.batchCreate',
    fullyQualifiedName: 'geocode.batchCreate',
    httpMethod: 'post',
    httpPath: '/geocode/batch',
  },
  {
    clientCallName: 'client.geocode.structuredRetrieve',
    fullyQualifiedName: 'geocode.structuredRetrieve',
    httpMethod: 'get',
    httpPath: '/geocode/structured',
  },
  {
    clientCallName: 'client.optimization.compute',
    fullyQualifiedName: 'optimization.compute',
    httpMethod: 'get',
    httpPath: '/optimization/json',
  },
  {
    clientCallName: 'client.optimization.reOptimize',
    fullyQualifiedName: 'optimization.reOptimize',
    httpMethod: 'post',
    httpPath: '/optimization/re_optimization',
  },
  {
    clientCallName: 'client.optimization.driverAssignment.assign',
    fullyQualifiedName: 'optimization.driverAssignment.assign',
    httpMethod: 'post',
    httpPath: '/optimization/driver-assignment/v1',
  },
  {
    clientCallName: 'client.optimization.v2.retrieveResult',
    fullyQualifiedName: 'optimization.v2.retrieveResult',
    httpMethod: 'get',
    httpPath: '/optimization/v2/result',
  },
  {
    clientCallName: 'client.optimization.v2.submit',
    fullyQualifiedName: 'optimization.v2.submit',
    httpMethod: 'post',
    httpPath: '/optimization/v2',
  },
  {
    clientCallName: 'client.geofence.create',
    fullyQualifiedName: 'geofence.create',
    httpMethod: 'post',
    httpPath: '/geofence',
  },
  {
    clientCallName: 'client.geofence.retrieve',
    fullyQualifiedName: 'geofence.retrieve',
    httpMethod: 'get',
    httpPath: '/geofence/{id}',
  },
  {
    clientCallName: 'client.geofence.update',
    fullyQualifiedName: 'geofence.update',
    httpMethod: 'put',
    httpPath: '/geofence/{id}',
  },
  {
    clientCallName: 'client.geofence.list',
    fullyQualifiedName: 'geofence.list',
    httpMethod: 'get',
    httpPath: '/geofence/list',
  },
  {
    clientCallName: 'client.geofence.delete',
    fullyQualifiedName: 'geofence.delete',
    httpMethod: 'delete',
    httpPath: '/geofence/{id}',
  },
  {
    clientCallName: 'client.geofence.contains',
    fullyQualifiedName: 'geofence.contains',
    httpMethod: 'get',
    httpPath: '/geofence/contain',
  },
  {
    clientCallName: 'client.geofence.console.preview',
    fullyQualifiedName: 'geofence.console.preview',
    httpMethod: 'post',
    httpPath: '/geofence/console/preview',
  },
  {
    clientCallName: 'client.geofence.console.search',
    fullyQualifiedName: 'geofence.console.search',
    httpMethod: 'get',
    httpPath: '/geofence/console/search',
  },
  {
    clientCallName: 'client.geofence.batch.create',
    fullyQualifiedName: 'geofence.batch.create',
    httpMethod: 'post',
    httpPath: '/geofence/batch',
  },
  {
    clientCallName: 'client.geofence.batch.list',
    fullyQualifiedName: 'geofence.batch.list',
    httpMethod: 'get',
    httpPath: '/geofence/batch',
  },
  {
    clientCallName: 'client.geofence.batch.delete',
    fullyQualifiedName: 'geofence.batch.delete',
    httpMethod: 'delete',
    httpPath: '/geofence/batch',
  },
  {
    clientCallName: 'client.discover.retrieve',
    fullyQualifiedName: 'discover.retrieve',
    httpMethod: 'get',
    httpPath: '/discover',
  },
  {
    clientCallName: 'client.browse.search',
    fullyQualifiedName: 'browse.search',
    httpMethod: 'get',
    httpPath: '/browse',
  },
  {
    clientCallName: 'client.mdm.createDistanceMatrix',
    fullyQualifiedName: 'mdm.createDistanceMatrix',
    httpMethod: 'post',
    httpPath: '/mdm/create',
  },
  {
    clientCallName: 'client.mdm.getDistanceMatrixStatus',
    fullyQualifiedName: 'mdm.getDistanceMatrixStatus',
    httpMethod: 'get',
    httpPath: '/mdm/status',
  },
  {
    clientCallName: 'client.isochrone.compute',
    fullyQualifiedName: 'isochrone.compute',
    httpMethod: 'get',
    httpPath: '/isochrone/json',
  },
  {
    clientCallName: 'client.restrictions.create',
    fullyQualifiedName: 'restrictions.create',
    httpMethod: 'post',
    httpPath: '/restrictions/{restriction_type}',
  },
  {
    clientCallName: 'client.restrictions.retrieve',
    fullyQualifiedName: 'restrictions.retrieve',
    httpMethod: 'get',
    httpPath: '/restrictions/{id}',
  },
  {
    clientCallName: 'client.restrictions.update',
    fullyQualifiedName: 'restrictions.update',
    httpMethod: 'patch',
    httpPath: '/restrictions/{id}',
  },
  {
    clientCallName: 'client.restrictions.list',
    fullyQualifiedName: 'restrictions.list',
    httpMethod: 'get',
    httpPath: '/restrictions/list',
  },
  {
    clientCallName: 'client.restrictions.delete',
    fullyQualifiedName: 'restrictions.delete',
    httpMethod: 'delete',
    httpPath: '/restrictions/{id}',
  },
  {
    clientCallName: 'client.restrictions.listByBbox',
    fullyQualifiedName: 'restrictions.listByBbox',
    httpMethod: 'get',
    httpPath: '/restrictions',
  },
  {
    clientCallName: 'client.restrictions.setState',
    fullyQualifiedName: 'restrictions.setState',
    httpMethod: 'put',
    httpPath: '/restrictions/{id}/state',
  },
  {
    clientCallName: 'client.restrictionsItems.list',
    fullyQualifiedName: 'restrictionsItems.list',
    httpMethod: 'get',
    httpPath: '/restrictions_items',
  },
  {
    clientCallName: 'client.distanceMatrix.json.create',
    fullyQualifiedName: 'distanceMatrix.json.create',
    httpMethod: 'post',
    httpPath: '/distancematrix/json',
  },
  {
    clientCallName: 'client.distanceMatrix.json.retrieve',
    fullyQualifiedName: 'distanceMatrix.json.retrieve',
    httpMethod: 'get',
    httpPath: '/distancematrix/json',
  },
  {
    clientCallName: 'client.autocomplete.suggest',
    fullyQualifiedName: 'autocomplete.suggest',
    httpMethod: 'get',
    httpPath: '/autocomplete',
  },
  {
    clientCallName: 'client.navigation.retrieveRoute',
    fullyQualifiedName: 'navigation.retrieveRoute',
    httpMethod: 'get',
    httpPath: '/navigation/json',
  },
  {
    clientCallName: 'client.map.createSegment',
    fullyQualifiedName: 'map.createSegment',
    httpMethod: 'post',
    httpPath: '/map/segments',
  },
  {
    clientCallName: 'client.autosuggest.suggest',
    fullyQualifiedName: 'autosuggest.suggest',
    httpMethod: 'get',
    httpPath: '/autosuggest',
  },
  {
    clientCallName: 'client.directions.computeRoute',
    fullyQualifiedName: 'directions.computeRoute',
    httpMethod: 'post',
    httpPath: '/directions/json',
  },
  {
    clientCallName: 'client.batch.create',
    fullyQualifiedName: 'batch.create',
    httpMethod: 'post',
    httpPath: '/batch',
  },
  {
    clientCallName: 'client.batch.retrieve',
    fullyQualifiedName: 'batch.retrieve',
    httpMethod: 'get',
    httpPath: '/batch',
  },
  {
    clientCallName: 'client.multigeocode.search',
    fullyQualifiedName: 'multigeocode.search',
    httpMethod: 'post',
    httpPath: '/multigeocode/search',
  },
  {
    clientCallName: 'client.multigeocode.place.create',
    fullyQualifiedName: 'multigeocode.place.create',
    httpMethod: 'post',
    httpPath: '/multigeocode/place',
  },
  {
    clientCallName: 'client.multigeocode.place.retrieve',
    fullyQualifiedName: 'multigeocode.place.retrieve',
    httpMethod: 'get',
    httpPath: '/multigeocode/place/{docId}',
  },
  {
    clientCallName: 'client.multigeocode.place.update',
    fullyQualifiedName: 'multigeocode.place.update',
    httpMethod: 'put',
    httpPath: '/multigeocode/place/{docId}',
  },
  {
    clientCallName: 'client.multigeocode.place.delete',
    fullyQualifiedName: 'multigeocode.place.delete',
    httpMethod: 'delete',
    httpPath: '/multigeocode/place/{docId}',
  },
  {
    clientCallName: 'client.revgeocode.retrieve',
    fullyQualifiedName: 'revgeocode.retrieve',
    httpMethod: 'get',
    httpPath: '/revgeocode',
  },
  {
    clientCallName: 'client.routeReport.create',
    fullyQualifiedName: 'routeReport.create',
    httpMethod: 'post',
    httpPath: '/route_report',
  },
  {
    clientCallName: 'client.snapToRoads.snap',
    fullyQualifiedName: 'snapToRoads.snap',
    httpMethod: 'get',
    httpPath: '/snapToRoads/json',
  },
  {
    clientCallName: 'client.postalcode.retrieveCoordinates',
    fullyQualifiedName: 'postalcode.retrieveCoordinates',
    httpMethod: 'post',
    httpPath: '/postalcode',
  },
  {
    clientCallName: 'client.lookup.byID',
    fullyQualifiedName: 'lookup.byID',
    httpMethod: 'get',
    httpPath: '/lookup',
  },
  {
    clientCallName: 'client.areas.list',
    fullyQualifiedName: 'areas.list',
    httpMethod: 'get',
    httpPath: '/areas',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
