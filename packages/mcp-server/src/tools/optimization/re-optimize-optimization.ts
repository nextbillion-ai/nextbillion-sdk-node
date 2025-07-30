// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'optimization',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/optimization/re_optimization',
  operationId: 're_optimization',
};

export const tool: Tool = {
  name: 're_optimize_optimization',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRe-optimization",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      existing_request_id: {
        type: 'string',
        description: 'Specify the unique request ID that needs to be re-optimized.',
      },
      job_changes: {
        type: 'object',
        description:
          'This section gathers information on modifications to the number of jobs or their individual requirements for re-optimization. Any job from the original solution not specified here will be re-planned without alteration during the re-optimization process.',
        properties: {
          add: {
            type: 'array',
            description:
              'An array of objects to collect the details of the new jobs to be added during re-optimization. Each object represents one job. Please make sure the IDs provided for new jobs are unique with respect to the IDs of the jobs in the original request.',
            items: {
              $ref: '#/$defs/job',
            },
          },
          modify: {
            type: 'array',
            description:
              'An array of objects to collect the modified details of existing jobs used in the original request. Each object represents one job. Please make sure all the job IDs provided here are same as the ones in the original request.',
            items: {
              $ref: '#/$defs/job',
            },
          },
          remove: {
            type: 'array',
            description:
              'An array of job IDs to be removed when during re-optimization. All job IDs provided must have been part of the original request.',
            items: {
              type: 'string',
            },
          },
        },
      },
      locations: {
        type: 'array',
        description:
          'Provide the list of locations to be used during re-optimization process. Please note that\n\n*   Providing the location input overwrites the list of locations used in the original request.\n    \n*   The location\\_indexes associated with all tasks and vehicles (both from the original and new re-optimization input requests) will follow the updated list of locations.\n    \n\nAs a best practice:\n\n1.  Don\'t provide the locations input when re-optimizing, if the original set contains all the required location coordinates.\n    \n2.  If any new location coordinates are required for re-optimization, copy the full, original location list and update it in the following manner before adding it to the re-optimization input:\n    \n    1.  Ensure to not update the indexes of locations which just need to be "modified".\n        \n    2.  Add new location coordinates towards the end of the list.',
        items: {
          type: 'string',
        },
      },
      shipment_changes: {
        type: 'object',
        description:
          'This section gathers information on modifications to the number of shipments or their individual requirements for re-optimization. Any shipment from the original solution not specified here will be re-planned without alteration during the re-optimization process.',
        properties: {
          add: {
            type: 'array',
            description:
              'An array of objects to collect the details of the new shipments to be added during re-optimization. Each object represents one shipment. Please make sure the IDs provided for new shipments are unique with respect to the IDs of the shipments in the original request.',
            items: {
              $ref: '#/$defs/shipment',
            },
          },
          modify: {
            type: 'array',
            description:
              'An array of objects to collect the modified details of existing shipments used in the original request. Each object represents one shipment. Please make sure all the shipment IDs provided here are same as the ones in the original request.',
            items: {
              $ref: '#/$defs/shipment',
            },
          },
          remove: {
            type: 'array',
            description:
              'An array of shipment IDs to be removed when during re-optimization. All shipment IDs provided must have been part of the original request.',
            items: {
              type: 'string',
            },
          },
        },
      },
      vehicle_changes: {
        type: 'object',
        description:
          'This section gathers information on modifications to the number of vehicles or individual vehicle configurations for re-optimizing an existing solution. Any vehicle from the original solution not specified here will be reused without alteration during the re-optimization process.',
        properties: {
          add: {
            type: 'array',
            description:
              'An array of objects to collect the details of the new vehicles to be added for re-optimization. Each object represents one vehicle. Please make sure the IDs provided for new vehicles are unique with respect to the IDs of the vehicles in the original request.',
            items: {
              $ref: '#/$defs/vehicle',
            },
          },
          modify: {
            $ref: '#/$defs/vehicle',
          },
          remove: {
            type: 'array',
            description:
              'An array of vehicle IDs to be removed when during re-optimization. All vehicle IDs provided must have been part of the original request.',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
    required: ['key', 'existing_request_id'],
    $defs: {
      job: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Provide an unique ID for the job. The IDs are case-sensitive.',
          },
          location_index: {
            type: 'integer',
            description:
              'An integer denoting the index (in the location array) of the location coordinates where the job needs to be performed. The valid range of values is \\[0, length of location array).\n\nPlease note the location_index is mandatory when using the jobs object.',
          },
          delivery: {
            type: 'array',
            description:
              'In case the job involves a delivery step, use this attribute to describe delivery quantity. This attribute supports multidimensional quantities, to support delivering quantities of different units/dimensions. It is recommended to keep the dimensions of quantity for pickup/delivery consistent when defining them in jobs and vehicles (in capacity attribute).\n\nPlease note that the quantity of delivery will be added to the assigned vehicle’s initial load.\n\nIn case depots are being added, the delivery configured here can be fulfilled by vehicles starting from specific depots. Refer to depot_ids and vehicles.start_depot_ids to know more.',
            items: {
              type: 'integer',
            },
          },
          depot_ids: {
            type: 'array',
            description:
              'Specify the depots which can be used to fulfil this job. In case of a pickup job, the assigned vehicle will deliver the goods to the depot specified here, at the end of its trip. Conversely, in case of delivery jobs, the vehicle will load the goods from the depot specified here, before starting the trip.\n\n**Note:**\n\n*   If multiple IDs are provided for this field then any of the given depots can be used to fulfil the job.\n    \n*   If this field is not provided then the given job can be fulfilled by any vehicle (subject to other constraints configured in the input).\n    \n*   If the job does not have any delivery or pick-up step configured then depots configuration will not have any impact on the given job.',
            items: {
              type: 'string',
            },
          },
          description: {
            type: 'string',
            description: 'Add a custom description for the job.',
          },
          follow_lifo_order: {
            type: 'boolean',
            description:
              'Specify whether the job route should follow LIFO (last in, first out). Use this parameter when pickup or delivery jobs are involved and the loading or unloading sequence of cargo is important. The default is false.',
          },
          incompatible_load_types: {
            type: 'array',
            description:
              'Use this parameter to specify the type of loads which are incompatible with the job’s load type. Once this property is configured, the job can only be serviced by a vehicle which has not serviced any other task with an incompatible load_types . Add multiple load types to indicate all the types which are incompatible for this job. The incompatible load type considerations are ignored for the first task of the route.\n\nFor example, an input value of \\[“groceries”, “food”\\] means that current job’s load is incompatible with both groceries and food type of loads. Consequently, the optimizer will not assign this job to a vehicle which has served any task with load_types as either groceries or food.\n\nNote:\n\n*   This parameter is effective only when a pickup / delivery is configured for the job.\n    \n*   If the job is part of any relations then, configured incompatible_load_types might be ignored.',
            items: {
              type: 'string',
            },
          },
          joint_order: {
            type: 'integer',
            description:
              'Specify a joint order group ID that this job is associated with. Tasks having the same joint order group ID are treated as a single unit: either all tasks in the group are assigned, or none are. Users can add tasks of both jobs and shipments types to a single joint order group by using the same unique ID. Please note that:\n\n*   Each job in a single joint order group will be fulfilled by a unique vehicle.\n    \n*   Jobs belonging to a joint order group can be served in any sequence.\n    \n*   Joint order settings will not be effective if \\solution\\ or \\relations\\ attributes are also provided in the input request.',
          },
          load_types: {
            type: 'array',
            description:
              'Use this parameter to specify the type of loads for the given job. Once this property is configured, the job can not be served by a vehicle which has serviced any task whose load is incompatible with any of theload_types provided in this input. The load type considerations are ignored for the first task of the route.\n\nFor example, an input value of \\[“groceries”, “food”\\] means that job’s load characteristics belong to either one or both types. Consequently, the optimizer will assign this job to a vehicle which has served other tasks whose incompatible_load_types do not contain either groceries or food.\n\nNote:\n\n*   This parameter is effective only when a pickup / delivery is configured for the job.\n    \n*   If the job is part of any relations then, load_types might be ignored.',
            items: {
              type: 'string',
            },
          },
          max_visit_lateness: {
            type: 'integer',
            description:
              'It determines the allowable delay, in seconds, to begin a job after its designated time window has concluded. Please note that this parameter would override the constraint.max_visit_lateness (global) if both are specified.',
          },
          metadata: {
            type: 'object',
            description:
              'Specify any custom data that should be attached along with job fulfilment details in the steps attribute of the optimized solution. Users can leverage this property to provide additional details/context when sharing information about the job with integrated systems (TMS, Fleet Management, Driver dispatch etc).\n\nPlease note that the metadata content must always be specified in akey : value pair format, where the “key” is always a string.',
          },
          outsourcing_cost: {
            type: 'integer',
            description:
              'Specify the cost of keeping this job unassigned, namely, the cost of outsourcing the job. When provided, the optimizer weighs the cost of assigning the job against the cost of keeping it unassigned and chooses a solution with lower cost. In the solution, the outsourcing_cost of unassigned jobs is added to the total cost of the solution.\n\nIf the outsourcing_cost is not provided, which is to say that the job can not be outsourced, then the optimizer tries to fulfill the job irrespective of the cost incurred, subject to other constraints.\n\nPlease note that revenue and outsourcing_cost can not be specified simultaneously for a job. Also, the outsourcing_cost would override the priority settings of the job.',
          },
          pickup: {
            type: 'array',
            description:
              'In case the job involves a pickup step, use this attribute to describe pickup quantity. This attribute supports multidimensional quantities, to support picking up quantities of different units/dimensions. It is recommended to keep the dimensions of quantity for pickup/delivery consistent when defining them in jobs and vehicles (in capacity attribute).\n\nPlease note that the vehicle will continue to carry the picked-up quantity until its last stop.\n\nIn case depots are being added, the pickup configured here can be fulfilled by vehicles ending at specific depots. Refer to depot_ids and vehicles.end_depot_ids to know more.',
            items: {
              type: 'integer',
            },
          },
          priority: {
            type: 'integer',
            description:
              'Specify the priority of this job. The valid values are in the range of \\[0, 100\\]. Default value is 0.\n\nPlease note that setting a priority will only decide whether this job will be assigned or not, but has nothing to do with the sequence of job fulfilment.',
          },
          revenue: {
            type: 'integer',
            description:
              'Specify the revenue earned by completing this job. The optimizer uses the revenue input to identify the potential profit earned by fulfilling this job after taking into account the costs incurred to do so. Theoptions.objective and vehicles.costs input are taken into account to identify the costs of fulfilling the job.\n\nIn general, the optimizer will prefer fulfilling the tasks with higher profits over the tasks with lower profits, should it need to reject some tasks in order to honor other constraints. In case the profit from fulfilling a job is negative, it will remain unassigned whatsoever.',
          },
          sequence_order: {
            type: 'integer',
            description:
              'Use this parameter to prioritize completing a task relative to certain other tasks. A task configured with a sequence_order of 2 will be done after the task with sequence_order of 1, but before the task with sequence_order of 3. Valid range of values for this input is \\[0,100\\].\n\nPlease note that:\n\n*   Only the tasks within the same route are compared and ordered as per their sequence_order.\n    \n*   Tasks without a sequence_order are not involved in the comparison.\n    \n*   Following is the precedence of sequence_order when used along side some of the other constraints:\n    \n    *   relations are prioritized over sequence_order comparisons.\n        \n    *   sequence_order will override order_grouping configurations.',
          },
          service: {
            type: 'integer',
            description:
              'Use this attribute to define the time duration, in seconds, needed to complete the job. Default value is 0.',
          },
          setup: {
            type: 'integer',
            description:
              'Specify the job set-up duration, in seconds. setup is the one-time effort needed apart from working on the original task - for example, effort to record some information for compliance, or effort to set-up the equipment, or perform any other action for completing all steps required to fulfil the job.\n\nPlease note that setup time is applied only once for a given task location. setup time, unlike service time, is not repeated in case there are multiple tasks at the same location.',
          },
          skills: {
            type: 'array',
            description:
              'Define the skills needed to complete the job. This attribute supports multidimensional skills allowing users to add multiple skills.\n\nRead more about the behavior of this attribute in the [Multi-Dimensional Parameters](#multi-dimensional-parameters) section.',
            items: {
              type: 'integer',
              description: 'Represents a kind of skill',
            },
          },
          time_windows: {
            type: 'array',
            description:
              'Define time periods within which this job should be started. The time periods should be expressed as a UNIX timestamp in seconds.\n\nPlease note that the time periods should not overlap with each other and should always follow the format of \\[start\\_timestamp, end\\_timestamp\\].',
            items: {
              type: 'array',
              items: {
                type: 'integer',
              },
            },
          },
          volume: {
            type: 'object',
            description:
              'Specify the dimensions and alignment configurations for the cargo associated with the task. These inputs will be used to arrange the items into the loading compartment of the vehicle to utilize the three-dimensional space. If a job consists of several different items, each with its own dimensions, please specify the final characteristics for the task: total height, total length, total width.\n\nPlease note that vehicles which contain the volume input, will only be considered for arranging such items.',
            properties: {
              alignment: {
                type: 'string',
                description:
                  'Refers to the orientation of the cargo in the loading compartment. It supports the following values:\n\n*   **" "** : A blank space to indicate that the dimension check for the cargo should be skipped. This is also the default value.\n    \n*   **strict :** In this orientation, the cargo must fit within the vehicle’s dimensions exactly as is—no rotation is allowed. All dimensions of the cargo must be less than or equal to the corresponding dimensions of the vehicle. If any dimension exceeds that of the vehicle, the cargo cannot be loaded.\n    \n*   **parallel :** With parallel orientation, the cargo can be rotated around any one of the axes to help it fit into the loading compartment. For example, if the cargo is wider than the vehicle, it can still be loaded by rotating it around the vertical axis (so the width aligns with the vehicle’s depth) or the horizontal axis (so the width aligns with the vehicle’s height). Using this orientation, even a cargo whose one dimension is larger than the corresponding dimension of the vehicle but smaller than other dimensions, can also be loaded.\n    \n*   **fixed\\_bottom :** In this orientation, the cargo can only be rotated around the vertical axis, meaning its base stays fixed and it cannot be tilted or turned over. The height of the cargo remains aligned with the vehicle’s height and cannot be adjusted. As a result, if the cargo’s height exceeds the vehicle’s available height, it cannot be loaded into the compartment.',
                enum: ['strict', 'parallel', 'fixed_bottom'],
              },
              depth: {
                type: 'number',
                description: 'Cargo length, in meters.',
              },
              height: {
                type: 'number',
                description: 'Cargo height, in meters.',
              },
              width: {
                type: 'number',
                description: 'Cargo width, in meters.',
              },
            },
          },
          zones: {
            type: 'array',
            description:
              'An array of integers specifying the IDs of the zone(s) that this job belongs to. The job can be fulfilled by all vehicles which are allowed to complete tasks in the zone(s) assigned to this job. Please note following points about job zones:\n\n*   If zone IDs are provided for any one of the jobs, then all other jobs should also be specified with zone IDs. Zone IDs provided here will override any zone geometries provided in the zones attribute and these IDs will be used for allocating appropriate vehicles.\n    \n*   Jobs can be auto-allocated to zones if this parameter is not specified while the zone geometries (either zones.geometry or zones.geofence_id) are provided.\n    \n*   Jobs not falling in any zones can be fulfilled by only those vehicles which are allowed to take up tasks outside zones as well. Refer to vehicles attribute for more information.',
            items: {
              type: 'integer',
            },
          },
        },
        required: ['id', 'location_index'],
      },
      shipment: {
        type: 'object',
        properties: {
          delivery: {
            type: 'object',
            description: 'Specify the details of the delivery step of the shipment.',
            properties: {
              id: {
                type: 'string',
                description:
                  'Indicate the ID of this shipment delivery step. An error will be reported if there are duplicate IDs for multiple shipment deliveries. The IDs are case sensitive. Please note id is mandatory when using the shipments attribute.',
              },
              location_index: {
                type: 'integer',
                description:
                  'Indicate the index of location for this shipment delivery. The index references the locations present in the location array. The valid range of value is \\[0, length of location array).\n\nPlease note location_index is mandatory when using the shipment attribute.',
              },
              description: {
                type: 'string',
                description: 'Specify a custom description for the shipment delivery step.',
              },
              max_visit_lateness: {
                type: 'integer',
                description:
                  'It determines the allowable delay, in seconds, to begin a shipment delivery after its designated time window has concluded. Please note that this parameter would override the constraint.max_visit_lateness (global) if both are specified.',
              },
              metadata: {
                type: 'object',
                description:
                  'Specify any custom data that should be attached along with delivery fulfilment details in the step attribute of the optimized solution. Users can leverage this property to provide additional details/context when sharing information about the delivery step with integrated systems (TMS, Fleet Management, Driver dispatch etc).\n\nPlease note that the metadata content must always be specified in a key : value pair format, where the “key” is always a string.',
              },
              sequence_order: {
                type: 'integer',
                description:
                  "Use this parameter to prioritize completing the shipment delivery relative to certain other tasks. A task configured with a sequence_order of 2 will be done after the task with sequence_order of 1, but before the task with sequence_order of 3. Valid range of values for this input is \\[0,100\\].\n\nPlease note that:\n\n*   The shipment delivery's sequence order must be greater than or equal to its corresponding pickup's sequence order.\n    \n*   Only the tasks within the same route are compared and ordered as per their sequence_order.\n    \n*   Tasks without a sequence_order are not involved in the comparison.\n    \n*   Following is the precedence of sequence_order when used along side some of the other constraints:\n    \n    *   relations are prioritized over sequence_order comparisons.\n        \n    *   sequence_order will override order_grouping configurations.",
              },
              service: {
                type: 'integer',
                description:
                  'Provide the time duration, in seconds, needed to complete the shipment delivery. Default value is 0.',
              },
              setup: {
                type: 'integer',
                description:
                  'Specify the set-up duration, in seconds, for the delivery. setup is the one-time effort needed apart from working on the original task- for example, effort to record some information for compliance, or effort to set-up the equipment, or perform any other action for completing all steps required to fulfil the job.\n\nPlease note that setup time is applied only once for a given task location. setup time, unlike service time, is not repeated in case there are multiple tasks at the same location.',
              },
              time_windows: {
                type: 'array',
                description:
                  'Describe time periods within which the shipment delivery should start. The time periods should be expressed as a UNIX timestamp in seconds.\n\nPlease note that the time periods should not overlap with each other and should always follow the format of \\[start\\_timestamp, end\\_timestamp\\].',
                items: {
                  type: 'array',
                  items: {
                    type: 'integer',
                  },
                },
              },
            },
            required: ['id', 'location_index'],
          },
          pickup: {
            type: 'object',
            description: 'Specify the details of the pickup step of the shipment.',
            properties: {
              id: {
                type: 'string',
                description:
                  'Indicate the ID of this shipment pickup step. An error will be reported if there are duplicate IDs for multiple shipment pick-ups. The IDs are case-sensitive. Please note id is mandatory when using the shipments attribute.',
              },
              location_index: {
                type: 'integer',
                description:
                  'Indicate the index of the location for this shipment pickup. The index references the locations present in the location array. The valid range of value is \\[0, length of location array).',
              },
              description: {
                type: 'string',
                description: 'Specify a custom description for the shipment pickup step.',
              },
              max_visit_lateness: {
                type: 'integer',
                description:
                  'It determines the allowable delay, in seconds, to begin a shipment pickup after its designated time window has concluded. Please note that this parameter would override the constraint.max_visit_lateness (global) if both are specified.',
              },
              metadata: {
                type: 'object',
                description:
                  'Specify any custom data that should be attached along with pickup fulfilment details in the steps attribute of the optimized solution. Users can leverage this property to provide additional details/context when sharing information about the pickup step with integrated systems (TMS, Fleet Management, Driver dispatch etc).\n\nPlease note that the metadata content must always be specified in akey : value pair format, where the “key” is always a string.',
              },
              sequence_order: {
                type: 'integer',
                description:
                  "Use this parameter to prioritize completing the shipment pickup relative to certain other tasks. A task configured with a sequence_order of 2 will be done after the task with sequence_order of 1, but before the task with sequence_order of 3. Valid range of values for this input is \\[0,100\\].\n\nPlease note that:\n\n*   The shipment pickups's sequence order must be lesser than or equal to its corresponding delivery's sequence order.\n    \n*   Only the tasks within the same route are compared and ordered as per their sequence_order.\n    \n*   Tasks without a sequence_order are not involved in the comparison.\n    \n*   Following is the precedence of sequence_order when used along side some of the other constraints:\n    \n    *   relations are prioritized over sequence_order comparisons.\n        \n    *   sequence_order will override order_grouping configurations.",
              },
              service: {
                type: 'integer',
                description:
                  'Provide the time duration, in seconds, needed to complete the shipment pickup. Default value is 0.',
              },
              setup: {
                type: 'integer',
                description:
                  'Specify the set-up duration, in seconds, for the pickup. setup is the one-time effort needed apart from working on the original task- for example, effort to record some information for compliance, or effort to set-up the equipment, or perform any other action for completing all steps required to fulfil the job.\n\nPlease note that setup time is applied only once for a given task location. setup time, unlike service time, is not repeated in case there are multiple tasks at the same location.',
              },
              time_windows: {
                type: 'array',
                description:
                  'Describe time periods within which the shipment pickup should be start. The time periods should be expressed as a UNIX timestamp in seconds.\n\nPlease note that the time periods should not overlap with each other and should always follow the format of \\[start\\_timestamp, end\\_timestamp\\]',
                items: {
                  type: 'array',
                  items: {
                    type: 'integer',
                  },
                },
              },
            },
            required: ['id', 'location_index'],
          },
          amount: {
            type: 'array',
            description:
              'This parameter defines the quantity that needs to be shipped. This attribute supports multidimensional quantities, to support shipment of quantities of different units/dimensions. It is recommended to keep the dimensions of amount in shipments and that of capacity in vehicles consistent.\n\nPlease note that the amount will be added to the assigned vehicle’s initial load.\n\nRead more about the behavior of this attribute in the [Multi-Dimensional Parameters](#multi-dimensional-parameters) section.',
            items: {
              type: 'integer',
            },
          },
          follow_lifo_order: {
            type: 'boolean',
            description:
              'Specify whether the shipment route should follow LIFO (last in, first out). Use this parameter when the loading or unloading sequence of cargo is important. The default value is \\false\\.',
          },
          incompatible_load_types: {
            type: 'array',
            description:
              'Use this parameter to specify the type of loads which are incompatible with the shipment’s load type. Once this property is configured, the shipment can only be serviced by a vehicle which has not serviced any other task with an incompatible load_types . Add multiple load types to indicate all the types which are incompatible for this shipment. The incompatible load type considerations are ignored for the first task of the route.\n\nFor example, an input value of \\[“groceries”, “food”\\] means that shipment’s load is incompatible with both groceries and food type of loads. Consequently, the optimizer will not assign this shipment to a vehicle which has served any task with load_types as either groceries or food.\n\nPlease note that if the shipment is part of any relations then, configured incompatible_load_types might be ignored.',
            items: {
              type: 'string',
            },
          },
          joint_order: {
            type: 'integer',
            description:
              'Specify a joint order group ID that this shipment is associated with. Tasks having the same joint order group ID are treated as a single unit: either all tasks in the group are assigned, or none are. Users can add tasks of both jobs and shipments types to a single joint order group by using the same unique ID. Please note that:\n\n*   Each shipment in a single joint order group will be fulfilled by a unique vehicle.\n    \n*   Shipments belonging to a joint order group can be served in any sequence while maintaining the pickup -> delivery sequence for an individual shipment.\n    \n*   Joint order settings will not be effective if \\solution\\ or \\relations\\ attributes are also provided in the input request.',
          },
          load_types: {
            type: 'array',
            description:
              'Use this parameter to specify the type of loads for the given shipment. Once this property is configured, the shipment can not be served by a vehicle which has serviced any task whose load is incompatible with any of theload_types provided in this input. The load type considerations are ignored for the first task of the route.\n\nFor example, an input value of \\[“groceries”, “food”\\] means that shipment’s load characteristics belong to either one or both types. Consequently, the optimizer will assign this shipment to a vehicle which has served other tasks whose incompatible_load_types do not contain either groceries or food.\n\nPlease note that if the shipment is part of any relations then, configured load_types might be ignored.',
            items: {
              type: 'string',
            },
          },
          max_time_in_vehicle: {
            type: 'integer',
            description:
              'Use this parameter to limit the drive time for which a shipment stays in the vehicle. The time-in-vehicle calculations start once the pickup leg of shipment is completed after serving any setup and service time that may have been configured for it. For the delivery leg, time-in-vehicle calculations wouldn’t consider any setup and service time that needs to be served for completing the delivery. The service or setup times of other tasks performed in between will also be not accumulated against the time-in-vehicle limit.\n\nPlease note that this property would be overridden if any relations configuration is used except for “precedence” type. If “precedence” type relations is used then max_time_in_vehicle will override it.',
          },
          outsourcing_cost: {
            type: 'integer',
            description:
              'Specify the cost of keeping this shipment unassigned, namely, the cost of outsourcing the shipment. When provided, the optimizer weighs the cost of assigning the shipment against the cost of keeping it unassigned and chooses a solution with lower cost. In the solution, the outsourcing_cost of unassigned shipments is added to the total cost of the solution.\n\nIf the outsourcing_cost is not provided, which is to say that the shipment can not be outsourced, then the optimizer tries to fulfill the shipment irrespective of the cost incurred, subject to other constraints.\n\nPlease note that revenue and outsourcing_cost can not be specified simultaneously for a shipment. Also, the outsourcing_cost would override the priority settings of the shipment.',
          },
          priority: {
            type: 'integer',
            description:
              'Describe the priority of this shipment. The valid values are in the range of \\[0, 100\\]. Default value is 0.\n\nPlease note that setting a priority will only decide whether this shipment will be assigned or not, but has nothing to do with the sequence of fulfilling shipments.',
          },
          revenue: {
            type: 'integer',
            description:
              'Specify the revenue earned by completing this shipment. The optimizer uses the revenue input to identify the potential profit earned by fulfilling this shipment after taking into account the costs incurred to do so. Theoptions.objective and vehicles.costs input are taken into account to identify the costs of fulfilling the shipment.\n\nIn general, the optimizer will prefer fulfilling the tasks with higher profits over the tasks with lower profits, should it need to reject some tasks in order to honor other constraints. In case the profit from fulfilling a shipment is negative, it will remain unassigned whatsoever.',
          },
          skills: {
            type: 'array',
            description:
              'Define the skills needed to complete the shipment. This attribute supports multidimensional skills allowing users to add multiple skills for a shipment.\n\nRead more about the behavior of this attribute in the [Multi-Dimensional Parameters](#multi-dimensional-parameters) section.',
            items: {
              type: 'integer',
            },
          },
          volume: {
            type: 'object',
            description:
              'Specify the dimensions and alignment configurations for the cargo associated with the shipment. These inputs will be used to arrange the items into the loading compartment of the vehicle to utilize the three-dimensional space. If a shipment consists of several different items, each with its own dimensions, please specify the final characteristics for the task: total height, total depth, total width.\n\nPlease note that vehicles which contain the volume input, will only be considered for arranging such items.',
            properties: {
              alignment: {
                type: 'string',
                description:
                  'Refers to the orientation of the cargo in the loading compartment. It supports the following values:\n\n*   **" "** : A blank space to indicate that the dimension check for the cargo should be skipped. This is also the default value.\n    \n*   **strict :** In this orientation, the cargo must fit within the vehicle’s dimensions exactly as is—no rotation is allowed. All dimensions of the cargo must be less than or equal to the corresponding dimensions of the vehicle. If any dimension exceeds that of the vehicle, the cargo cannot be loaded.\n    \n*   **parallel :** With parallel orientation, the cargo can be rotated around any one of the axes to help it fit into the loading compartment. For example, if the cargo is wider than the vehicle, it can still be loaded by rotating it around the vertical axis (so the width aligns with the vehicle’s depth) or the horizontal axis (so the width aligns with the vehicle’s height). Using this orientation, even a cargo whose one dimension is larger than the corresponding dimension of the vehicle but smaller than other dimensions, can also be loaded.\n    \n*   **fixed\\_bottom :** In this orientation, the cargo can only be rotated around the vertical axis, meaning its base stays fixed and it cannot be tilted or turned over. The height of the cargo remains aligned with the vehicle’s height and cannot be adjusted. As a result, if the cargo’s height exceeds the vehicle’s available height, it cannot be loaded into the compartment.',
                enum: ['strict', 'parallel', 'fixed_bottom', '" "'],
              },
              depth: {
                type: 'number',
                description: 'Cargo length, in meters.',
              },
              height: {
                type: 'number',
                description: 'Cargo height, in meters.',
              },
              width: {
                type: 'number',
                description: 'Cargo width, in meters.',
              },
            },
          },
          zones: {
            type: 'array',
            description:
              'An array of integers specifying the IDs of the zone(s) that this shipment belongs to. The shipment can be fulfilled by all vehicles which are allowed to complete tasks in the zone(s) assigned to this shipment. If the pickup and delivery steps belong to different zones, then a vehicle should be allowed to fulfil tasks in both zones to take up such shipments. Please note following points about shipment zones:\n\n*   If zone IDs are provided for any one of the shipments, then all other shipments should also be specified with zone IDs. Zone IDs provided here will override any zone geometries provided in the zones attribute and these IDs will be used for allocating appropriate vehicles.\n    \n*   Shipment steps can be auto-allocated to zones if this parameter is not specified while the zone geometries (either zones.geometry or zones.geofence_id) are provided.\n    \n*   Shipments not falling in any zones can be fulfilled by only those vehicles which are allowed to take up tasks outside zones as well. Refer to vehicles attribute for more information.',
            items: {
              type: 'integer',
            },
          },
        },
        required: ['delivery', 'pickup'],
      },
      vehicle: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Specify a unique ID for the vehicle.',
          },
          location: {
            type: 'object',
            description:
              'Specify the location coordinates where the vehicle is currently located. This input is mandatory for each vehicle.',
            properties: {
              lat: {
                type: 'number',
                description: "Latitude of the vehicle's current location.",
              },
              lng: {
                type: 'number',
                description: "Longitude of the vehicle's current location.",
              },
            },
          },
          attributes: {
            type: 'object',
            description:
              'Specify custom attributes for the vehicle. Each attribute should be created as a key:value pair. These attributes can be used in the orders.vehicle_preferences input to refine the search of vehicles for each order.\n\nThe maximum number of key:value pairs that can be specified under attributes for a given vehicle, is limited to 30.',
          },
          priority: {
            type: 'integer',
            description:
              'Specify the priority for this vehicle. A higher value indicates a higher priority. When specified, it will override any priority score deduced from vehicle_attribute_priority_mappings for this vehicle. Valid values are \\[1, 10\\] and default is 0.',
          },
          remaining_waypoints: {
            type: 'array',
            description:
              'An array of objects to collect the location coordinates of the stops remaining on an ongoing trip of the vehicle. The service can assign new orders to the vehicle if they are cost-effective. Once a new order is assigned, the vehicle must complete all the steps in the ongoing trip before proceeding to pickup the newly assigned order.\n\nPlease note that a maximum of 10 waypoints can be specified for a given vehicle.',
            items: {
              $ref: '#/$defs/location',
            },
          },
        },
        required: ['id', 'location'],
      },
      location: {
        type: 'object',
        description: 'Location info.',
        properties: {
          lat: {
            type: 'number',
            description: 'Latitude of location.',
          },
          lon: {
            type: 'number',
            description: 'Longitude of location.',
          },
        },
        required: ['lat', 'lon'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.optimization.reOptimize(body));
};

export default { metadata, tool, handler };
