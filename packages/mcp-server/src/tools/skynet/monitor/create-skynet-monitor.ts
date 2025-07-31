// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.monitor',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/skynet/monitor',
  operationId: 'monitor',
};

export const tool: Tool = {
  name: 'create_skynet_monitor',
  description: 'Create a Monitor',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      tags: {
        type: 'array',
        description:
          "Use this parameter to add tags to the monitor. tags can be used for filtering monitors in the *Get Monitor List* operation. They can also be used for easy identification of monitors.\n\nPlease note that valid tags are strings, consisting of alphanumeric characters (A-Z, a-z, 0-9) along with the underscore ('_') and hyphen ('-') symbols.",
        items: {
          type: 'string',
        },
      },
      type: {
        type: 'string',
        description:
          'Specify the type of activity the monitor would detect.\n\nThe monitor will be able to detect the specified type of activity and create events for eligible asset. A monitor can detect following types of asset activity:\n\n- enter: The monitor will create an event when a linked asset enters into the specified geofence.\n\n- exit: The monitor will create an event when a linked asset exits the specified geofence.\n\n- enter_and_exit: The monitor will create an event when a linked asset either enters or exits the specified geofence.\n\n- speeding: The monitor will create an event when a linked asset exceeds a given speed limit.\n\n- idle: The monitor will create an event when a linked asset exhibits idle activity.\n\nPlease note that assets and geofences can be linked to a monitor using the match_filter and geofence_config attributes respectively.',
        enum: ['enter', 'exit', 'enter_and_exit', 'speeding', 'idle'],
      },
      cluster: {
        type: 'string',
        description: 'the cluster of the region you want to use',
        enum: ['america'],
      },
      custom_id: {
        type: 'string',
        description:
          'Set a unique ID for the new monitor. If not provided, an ID will be automatically generated in UUID format. A valid custom_id can contain letters, numbers, "-", & "_" only.\n\nPlease note that the ID of an monitor can not be changed once it is created.',
      },
      description: {
        type: 'string',
        description: 'Add a description for your monitor using this parameter.',
      },
      geofence_config: {
        type: 'object',
        description:
          "Geofences are geographic boundaries surrounding an area of interest. geofence_config is used to specify the geofences for creating enter or exit type of events based on the asset's location. When an asset associated with the monitor enters the given geofence, an enter type event is created, whereas when the asset moves out of the geofence an exit type event is created.\n\nPlease note that this object is mandatory when the monitor type belongs to one of enter, exit or enter_and_exit.",
        properties: {
          geofence_ids: {
            type: 'array',
            description:
              'An array of strings to collect the geofence IDs that should be linked to the monitor. Please note geofence_ids are mandatory when using the geofence_config attribute.',
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
          "**Deprecated. Please use the geofence_config to specify the geofence_ids for this monitor.**\n\nAn array of strings to collect the geofence IDs that should be linked to the monitor. Geofences are geographic boundaries that can be used to trigger events based on an asset's location.",
        items: {
          type: 'string',
        },
      },
      idle_config: {
        type: 'object',
        description:
          "idle_config is used to set up constraints for creating idle events. When an asset associated with the monitor has not moved a given distance within a given time, the Live Tracking API can create events to denote such instances. Please note that this object is mandatory when the monitor type is idle.\n\nLet's look at the properties of this object.",
        properties: {
          distance_tolerance: {
            type: 'number',
            description:
              'Use this parameter to configure a distance threshold that will be used to determine if the asset was idle or not. If the asset moves by a distance less than the value of this parameter within a certain time period, the monitor would create an idle event against the asset. The distance_tolerance should be provided in meters.\n\nUsers can set an appropriate value for this parameter, along with appropriate time_tolerance value, to avoid triggering idle events when the asset is crossing a busy intersection or waiting at the traffic lights.',
          },
          time_tolerance: {
            type: 'integer',
            description:
              'Use this parameter to configure a time duration for which the monitor would track the distance covered by an asset before triggering an idle event. The time_tolerance should be provided in milliseconds.\n\nIf the distance covered by the asset during a time_tolerance is less than that specified in distance_tolerance the asset will be assumed to be idle.\n\nPlease observe that this attribute along with distance_tolerance parameter can be used to control the "sensitivity" of the monitor with respect to idle alerts. If the distance_tolerance is set a high value, then setting time_tolerance to a low value may result in a situation where asset is always judged as idle. On the contrary, it might never be judged as idle if distance_tolerance is set to a low value but time_tolerance is set to a high value.\n\nIt is recommended to use these properties with appropriate values to trigger genuine idle events. The appropriate values might depend on the traffic conditions, nature of operations that the asset is involved in, type of asset and other factors.',
          },
        },
        required: ['distance_tolerance'],
      },
      match_filter: {
        type: 'object',
        description: 'This object is used to identify the asset(s) on which the monitor would be applied.',
        properties: {
          include_all_of_attributes: {
            type: 'object',
            description:
              'A string type dictionary object to specify the attributes. Only the assets having all of the attributes added to this parameter will be linked to this monitor. Once an asset is linked to a monitor, the monitor will be able to create events for that asset whenever an activity specified in type is detected. Multiple attributes should be separated by a comma ,.\n\nPlease note that this parameter can not be used in conjunction with include_any_of_attributes. Also, the maximum number of key:value pairs that this parameter can take is 100 and the overall size of the match_filter object should not exceed 65kb.',
          },
          include_any_of_attributes: {
            type: 'object',
            description:
              'A string type dictionary object to specify the attributes. The assets having at least one of the attributes added to this parameter will be linked to this monitor. Once an asset is linked to a monitor, the monitor will be able to create events for that asset whenever an activity specified in type is detected. Multiple attributes should be separated by a comma ,.\n\nPlease note that this parameter can not be used in conjunction with include_all_of_attributes. Also, the maximum number of key:value pairs that this parameter can take is 100 and the overall size of the match_filter object should not exceed 65kb.',
          },
        },
      },
      meta_data: {
        $ref: '#/$defs/metadata',
      },
      name: {
        type: 'string',
        description:
          'Name of the monitor. Use this field to assign a meaningful, custom name to the monitor being created.',
      },
      speeding_config: {
        type: 'object',
        description:
          "speeding_config is used to set up constraints for creating over-speed events. When an asset associated with a monitor is traveling at a speed above the given limits, the Live Tracking API can create events to denote such instances. There is also an option to set up a tolerance before creating an event. Please note that this object is mandatory when type=speeding.\n\nLet's look at the properties of this object.",
        properties: {
          customer_speed_limit: {
            type: 'integer',
            description:
              "Use this parameter to establish the speed limit that will allow the monitor to create events, depending on the time_tolerance value, when an asset's tracked speed exceeds it. The speed limit should be specified in meters per second.\n\nPlease note that customer_speed_limit is mandatory when use_admin_speed_limit is false. However, when use_admin_speed_limit is true, customer_speed_limit is ineffective.",
          },
          time_tolerance: {
            type: 'integer',
            description:
              'Use this parameter to configure a time tolerance before triggering an event. Adding a tolerance would make the Tracking service wait for the specified time before triggering the event. Consequently, an event is triggered only when the time for which the asset has been over-speeding continuously, exceeds the configured tolerance time. The unit for this parameter is milliseconds.\n\nIt can be seen that this attribute is used to control the "sensitivity" of the monitor with respect to speed alerts. Higher the value of time_tolerance the less sensitive the monitor would be to instances of over-speeding. Conversely, if \'time_tolerance\' is set to 0, the monitor will be extremely sensitive and will create an event as soon as tracking information with a speed value greater than the specified limit is received.',
          },
          use_admin_speed_limit: {
            type: 'boolean',
            description:
              "A boolean attribute to indicate which speed limit values should be used by the monitor. When use_admin_speed_limit is true, the administrative speed limit of the road on which the asset is located, will be used to generate events when the asset’s tracked speed exceeds it. Whereas, when use_admin_speed_limit is false, the customer_speed_limit specified will be used to generate events when the asset's tracked speed exceeds it.\n\nPlease note that if use_admin_speed_limit is false, customer_speed_limit is mandatory, however, when use_admin_speed_limit is true then customer_speed_limit is ineffective.",
          },
        },
      },
    },
    required: ['key', 'tags', 'type'],
    $defs: {
      metadata: {
        type: 'object',
        description: 'Any valid json object data. Can be used to save customized data. Max size is 65kb.',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.skynet.monitor.create(body));
};

export default { metadata, tool, handler };
