// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.asset',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/skynet/asset/list',
  operationId: 'list-ot_NQQcG',
};

export const tool: Tool = {
  name: 'list_skynet_asset',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Asset List\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'A data object containing the list of assets.',\n      properties: {\n        list: {\n          type: 'array',\n          description: 'An array of objects, with each object representing one asset.',\n          items: {\n            $ref: '#/$defs/asset_details'\n          }\n        },\n        page: {\n          $ref: '#/$defs/pagination'\n        }\n      }\n    },\n    message: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  },\n  $defs: {\n    asset_details: {\n      type: 'object',\n      description: 'An object with details of the asset properties.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'ID of the asset. This is the same ID that was generated/provided at the time of creating the asset.'\n        },\n        attributes: {\n          type: 'object',\n          description: 'A string dictionary object containing attributes of the asset. These attributes were associated with the asset at the time of creating or updating it.\\n\\nattributes can be added to an asset using the *Update Asset Attributes* method.'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'A UNIX epoch timestamp in seconds representing the time at which the asset was created.'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the asset. The value would be the same as that provided for the description parameter at the time of creating or updating the asset.'\n        },\n        device_id: {\n          type: 'string',\n          description: 'ID of the device that is linked to this asset. Please note that there can be multiple device_id linked to a single asset.  An empty response is returned if no devices are linked to the asset.\\n\\nUser can link a device to an asset using the *Bind Asset to Device* method.'\n        },\n        latest_location: {\n          type: 'object',\n          description: 'An object with details of the last tracked location of the asset.',\n          properties: {\n            accuracy: {\n              type: 'number',\n              description: 'If available, this property returns the accuracy of the GPS information received at the last tracked location. It is represented as an estimated horizontal accuracy radius, in meters, at the 68th percentile confidence level.'\n            },\n            altitude: {\n              type: 'number',\n              description: 'If available in the GPS information, this property returns the altitude of the asset at the last tracked location. It is represented as height, in meters, above the WGS84 reference ellipsoid.'\n            },\n            bearing: {\n              type: 'number',\n              description: 'If available in the GPS information, this property returns the heading of the asset calculated from true north in clockwise direction at the last tracked location. Please note that the bearing is not affected by the device orientation.\\n\\nThe bearing will always be in the range of [0, 360).'\n            },\n            location: {\n              type: 'object',\n              description: 'An object with the coordinates of the last tracked location.',\n              properties: {\n                lat: {\n                  type: 'number',\n                  description: 'Latitude of the tracked location of the asset.'\n                },\n                lon: {\n                  type: 'number',\n                  description: 'Longitude of the tracked location of the asset.'\n                }\n              }\n            },\n            speed: {\n              type: 'number',\n              description: 'If available in the GPS information, this property returns the speed of the asset, in meters per second, at the last tracked location.'\n            },\n            timestamp: {\n              type: 'integer',\n              description: 'A UNIX epoch timestamp in milliseconds, representing the time at which the location was tracked.'\n            }\n          }\n        },\n        meta_data: {\n          $ref: '#/$defs/meta_data'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the asset. The value would be the same as that provided for the name parameter at the time of creating or updating the asset.'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the asset. It will be \"active\" when the asset is in use or available for use, and it will be \"deleted\" in case the asset has been deleted.'\n        },\n        tags: {\n          type: 'array',\n          description: '**This parameter will be deprecated soon! Please move existing tags to attributes parameter.**\\n\\nTags of the asset.  These were associated with the asset when it was created or updated. tags can be used for filtering assets in operations like *Get Asset List* and asset **Search** methods. They can also be used for monitoring of assets using **Monitor** methods after linking tags and asset.',\n          items: {\n            type: 'string'\n          }\n        },\n        tracked_at: {\n          type: 'integer',\n          description: 'A UNIX epoch timestamp in seconds representing the last time when the asset was tracked.'\n        },\n        updated_at: {\n          type: 'integer',\n          description: 'A UNIX epoch timestamp in seconds representing the time at which the asset was last updated.'\n        }\n      }\n    },\n    meta_data: {\n      type: 'object',\n      description: 'Any valid json object data. Can be used to save customized data. Max size is 65kb.'\n    },\n    pagination: {\n      type: 'object',\n      description: 'An object with pagination details of the search results. Use this object to implement pagination in your application.',\n      properties: {\n        hasmore: {\n          type: 'boolean',\n          description: 'A boolean value indicating whether there are more items available beyond the current page.'\n        },\n        page: {\n          type: 'integer',\n          description: 'An integer value indicating the current page number (starting at 0).'\n        },\n        size: {\n          type: 'integer',\n          description: 'An integer value indicating the maximum number of items retrieved per page.'\n        },\n        total: {\n          type: 'integer',\n          description: 'An integer value indicating the total number of items available in the data set. This parameter can be used to calculate the total number of pages available.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      cluster: {
        type: 'string',
        description: 'the cluster of the region you want to use',
        enum: ['america'],
      },
      include_all_of_attributes: {
        type: 'string',
        description:
          'Use this parameter to filter the assets by their attributes. Only the assets having all the attributes added to this parameter, will be returned in the response. Multiple attributes can be separated using pipes (|).\n\nPlease note the attributes are case sensitive. Also, this parameter can not be used in conjunction with include_any_of_attributes parameter.',
      },
      include_any_of_attributes: {
        type: 'string',
        description:
          'Use this parameter to filter the assets by their attributes. Assets having at least one of the attributes added to this parameter, will be returned in the response. Multiple attributes can be separated using pipes (|).\n\nPlease note the attributes are case sensitive. Also, this parameter can not be used in conjunction with include_all_of_attributes parameter.',
      },
      pn: {
        type: 'integer',
        description:
          'Denotes page number. Use this along with the ps parameter to implement pagination for your searched results. This parameter does not have a maximum limit but would return an empty response in case a higher value is provided when the result-set itself is smaller.',
      },
      ps: {
        type: 'integer',
        description:
          'Denotes number of search results per page. Use this along with the pn parameter to implement pagination for your searched results.',
      },
      sort: {
        type: 'string',
        description:
          'Provide a single field to sort the results by. Only updated_at or created_at fields can be selected for ordering the results.\n\nBy default, the result is sorted by created_at field in the descending order. Allowed values for specifying the order are asc for ascending order and desc for descending order.',
      },
      tags: {
        type: 'string',
        description:
          '**This parameter will be deprecated soon! Please use the include_all_of_attributes or include_any_of_attributes parameters to provide labels or markers for the assets to be retrieved.**\n\ntags can be used to filter the assets. Only those assets which have all the tags provided, will be included in the result. In case multiple tags need to be specified, use , to separate them.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.skynet.asset.list(body)));
};

export default { metadata, tool, handler };
