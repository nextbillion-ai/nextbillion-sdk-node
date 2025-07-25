// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'skynet.monitor',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/skynet/monitor/{id}',
  operationId: '{id}-QejJn9Lr',
};

export const tool: Tool = {
  name: 'update_skynet_monitor',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a Monitor",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      description: {
        type: 'string',
        description: 'Use this parameter to update the `description` of the `monitor`.',
      },
      geofence_config: {
        type: 'object',
        description:
          "`geofence_config` is used to update the set of geofences linked to the `monitor` for creating `enter` or `exit` type of events based on the asset's location. Please note that this object is mandatory when the monitor `type` belongs to one of `enter`, `exit` or `enter_and_exit`.",
        properties: {
          geofence_ids: {
            type: 'array',
            description:
              'Use this array to update the geofence IDs that should be linked to the `monitor`. Please note `geofence_ids` are mandatory when using the `geofence_config` attribute.',
            items: {
              type: 'string',
            },
          },
        },
        required: ['geofence_ids'],
      },
      geofence_ids: {
        type: 'array',
        description:
          "Use this parameter to update the geofences linked to the `monitor` by providing the geofence `id` as `,` separated strings. Geofences are geographic boundaries that can be used to trigger events based on an asset's location.",
        items: {
          type: 'string',
        },
      },
      idle_config: {
        type: 'object',
        description:
          '`idle_config` is used to update the constraints for creating idle events. When an asset associated with the `monitor` has not moved a given distance within a given time, the Live Tracking API can create events to denote such instances.\n\nPlease note that this object is mandatory when the monitor `type` is `idle`.',
        properties: {
          distance_tolerance: {
            type: 'number',
            description:
              'Use this parameter to update the distance threshold that will be used to determine if the asset was idle or not. When the asset, within `time_tolerance` duration, moves less than the value for this parameter, the `monitor` creates an idle event against the `asset`. The `distance_tolerance` should be provided in meters.\n\nPlease note `distance_tolerance` is mandatory when `idle_config` attribute is used.',
          },
          time_tolerance: {
            type: 'integer',
            description:
              'Use this parameter to update the time duration for which the `monitor` would track the distance covered by an asset before triggering an idle event. The `time_tolerance` should be provided in milliseconds.\n\nIf the distance covered by the asset during a `time_tolerance` is less than that specified in `distance_tolerance` the asset will be assumed to be idle.\n\nThis attribute along with `distance_tolerance` parameter can be used to control the "sensitivity" of the `monitor` with respect to idle alerts. It is recommended to use these properties with appropriate values to trigger genuine idle events. The appropriate values might depend on the traffic conditions, nature of operations that the asset is involved in, type of asset and other factors.',
          },
        },
        required: ['distance_tolerance'],
      },
      match_filter: {
        type: 'object',
        description:
          'Use this object to update the `attributes` of the `monitor`. Please note that using this property will overwrite the existing `attributes` that the monitor might be using currently to match any asset(s).',
        properties: {
          include_all_of_attributes: {
            type: 'object',
            description:
              'A string type dictionary object to specify the `attributes`. Only the assets having all of the `attributes` added to this parameter will be linked to this `monitor`. Once an `asset` is linked to a `monitor`, the `monitor` will be able to create events for that `asset` whenever an activity specified in `type` is detected. Multiple attributes should be separated by a comma `,`.\n\nPlease note that this parameter can not be used in conjunction with `include_any_of_attributes`. Also, the maximum number of `key`:`value` pairs that this parameter can take is 100 and the overall size of the `match_filter` object should not exceed 65kb.',
          },
          include_any_of_attributes: {
            type: 'object',
            description:
              'A string type dictionary object to specify the `attributes`. The assets having at least one of the `attributes` added to this parameter will be linked to this `monitor`. Once an `asset` is linked to a `monitor`, the `monitor` will be able to create events for that `asset` whenever an activity specified in `type` is detected. Multiple attributes should be separated by a comma `,`.\n\nPlease note that this parameter can not be used in conjunction with `include_all_of_attributes`. Also, the maximum number of `key`:`value` pairs that this parameter can take is 100 and the overall size of the `match_filter` object should not exceed 65kb.',
          },
        },
      },
      meta_data: {
        $ref: '#/$defs/metadata',
      },
      name: {
        type: 'string',
        description:
          'Use this parameter to update the `name` of the `monitor`. Users can add meaningful names to the monitors like "warehouse_exit", "depot_entry" etc.',
      },
      speeding_config: {
        type: 'object',
        description:
          '`speeding_config` is used to update the tolerance values for creating over-speed events. When an asset associated with a `monitor` is traveling at a speed above the given limits, Live Tracking API creates events to indicate such instances.\n\nPlease note that this object is mandatory when the monitor `type` is `speeding`.',
        properties: {
          customer_speed_limit: {
            type: 'string',
            description:
              'Use this parameter to update the speed limit value that the `monitor` will use to create events, depending on the `time_tolerance` value. The speed limit should be specified in meters per second.\n\nPlease note that `customer_speed_limit` is mandatory when `use_admin_speed_limit` is false. However, when `use_admin_speed_limit` is true, `customer_speed_limit` is ineffective.',
          },
          time_tolerance: {
            type: 'integer',
            description:
              'Use this parameter to update the time tolerance before triggering an event. Adding a tolerance would make the Tracking service wait for the specified time before triggering the event. Consequently, an event is triggered only when the time for which the asset has been over-speeding continuously, exceeds the configured tolerance time. The unit for this parameter is milliseconds.\n\nIt can be seen that this attribute is used to control the "sensitivity" of the `monitor` with respect to speed alerts. Higher the value of `time_tolerance` the less sensitive the `monitor` would be to instances of over-speeding. Conversely, if \'time_tolerance\' is set to 0, the `monitor` will be extremely sensitive and will create an event as soon as tracking information with a speed value greater than the specified limit is received.',
          },
          use_admin_speed_limit: {
            type: 'boolean',
            description:
              "Use this attribute to update which speed limit values will be used by the `monitor`. When `use_admin_speed_limit` is true, the administrative speed limit of the road on which the asset is located, is used to generate events when the asset’s tracked speed exceeds it. Whereas, when `use_admin_speed_limit` is false, the `customer_speed_limit` specified will be used to generate events when the asset's tracked speed exceeds it.\n\nPlease note that if `use_admin_speed_limit` is false, `customer_speed_limit` is mandatory, otherwise when `use_admin_speed_limit` is true then `customer_speed_limit` is ineffective.",
          },
        },
      },
      tags: {
        type: 'array',
        description:
          "Use this parameter to update the `tags` of the `monitor`. `tags` can be used for filtering monitors in the *Get Monitor List* operation. They can also be used for easy identification of monitors. Using this parameter overwrites the existing `tags` of the monitor.\n\nPlease note that valid `tags` are strings, consisting of alphanumeric characters (A-Z, a-z, 0-9) along with the underscore ('_') and hyphen ('-') symbols.",
        items: {
          type: 'string',
        },
      },
      type: {
        type: 'string',
        description:
          'Use this parameter to update the `type` of the `monitor`. The `monitor` will be able to detect the specified `type` of activity and create events for eligible `asset`. A `monitor` can detect following types of asset activity:\n\n- `enter`: The `monitor` will create an event when a linked `asset` enters into the specified geofence.\n\n- `exit`: The `monitor` will create an event when a linked `asset` exits the specified geofence.\n\n- `enter_and_exit`: The `monitor` will create an event when a linked `asset` either enters or exits the specified geofence.\n\n- `speeding`: The `monitor` will create an event when a linked `asset` exceeds a given speed limit.\n\n- `idle`: The `monitor` will create an event when a linked `asset` exhibits idle activity.\n\nPlease note that `assets` and geofences can be linked to a `monitor` using the `match_filter` and `geofence_config` attributes respectively.',
        enum: ['`enter`', '`exit`', '`enter_and_exit`', '`speeding`', '`idle`'],
      },
    },
    required: ['id', 'key'],
    $defs: {
      metadata: {
        type: 'object',
        description: 'Any valid json object data. Can be used to save customized data. Max size is 65kb.',
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.skynet.monitor.update(id, body));
};

export default { metadata, tool, handler };
