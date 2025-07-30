// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'optimization.v2',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/optimization/v2',
  operationId: 'v2',
};

export const tool: Tool = {
  name: 'submit_optimization_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFlexible POST",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      locations: {
        type: 'object',
        description:
          'The locations object is used to define all the locations that will be used during the optimization process. Read more about this attribute in the [Location Object](#location-object) section.',
        properties: {
          location: {
            type: 'array',
            description:
              'Indicate all the location coordinates that will be used during optimization. The coordinates should be specified in the format “latitude, longitude”. It is recommended to avoid adding duplicate location coordinates to this array. In case there are multiple tasks at the same location, users can repeat the index of the location while configuring all such tasks.\n\nPlease use this array to determine the index of a location when setting the location_index parameter in jobs, shipments, vehicles or other parts of the request. The length of this array determines the valid values for location_index parameter.',
            items: {
              type: 'string',
            },
          },
          id: {
            type: 'integer',
            description: 'A unique ID for the set of locations. It should be a positive integer.',
          },
          approaches: {
            type: 'array',
            description:
              'Describe if the location is curbside. An array of strings indicates the side of the road from which to approach the location in the calculated route. If provided, the number of approaches must be equal to the number of locations. However, you can skip a coordinate and show its position in the list using “” (empty string). Please note these values are case-sensitive.',
            items: {
              type: 'string',
              enum: ['unrestricted', 'curb', '""(empty string)'],
            },
          },
        },
        required: ['location'],
      },
      vehicles: {
        type: 'array',
        description:
          'The vehicles attribute describes the characteristics and constraints of the vehicles that will be used for fulfilling the tasks. Read more about this attribute in the [Vehicle Object](#vehicle-object) section.',
        items: {
          $ref: '#/$defs/vehicle',
        },
      },
      cost_matrix: {
        type: 'array',
        description:
          'An array of arrays to denote the user-defined costs of traveling between each pair of geographic coordinates mentioned in the location array. The number of arrays should be equal to the number of coordinate points mentioned in the location array and each array should contain the same number of elements as well. Please note that cost_matrix is effective only when travel_cost=customized. Read more about this attribute in the [Custom Cost Matrix](#custom-cost-matrix) section.',
        items: {
          type: 'array',
          items: {
            type: 'integer',
          },
        },
      },
      depots: {
        type: 'array',
        description:
          'depots object is used to collect the details of a depot. Depots can be used as a starting point and/or ending point for the routes and vehicles. They also can be used to fulfil pickup and delivery typejobs . The loads which are to be delivered at task locations will be picked from depots and loads picked-up from task locations will be delivered back to the depots. A depot can be configured using the following fields:',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Provide an unique ID for the depot. The IDs are case sensitive.',
            },
            location_index: {
              type: 'integer',
              description:
                'Specify the index of coordinates (in the location array) denoting the depot’s location. The valid range of values is \\[0, length of location array). If the location index exceeds the count of input locations in the location array, the API will report an error.\n\nPlease note the location_index is mandatory when using the depots object.',
            },
            description: {
              type: 'string',
              description: 'Add a custom description for the depot.',
            },
            service: {
              type: 'integer',
              description:
                'Specify the time duration, in seconds, needed to load or unload the vehicle each time it starts or arrives at a depot, respectively. Default value is 0.',
            },
            time_windows: {
              type: 'array',
              description:
                "Specify the time-windows during which the depot is operational and allows vehicles to be loaded / unloaded. The time periods should be expressed as a UNIX timestamp in seconds.\n\nPlease note that:\n\n*   Multiple time-windows can be provided but those time windows should not overlap with each other.\n    \n*   Time windows should always be specified in the format of \\[start\\_timestamp, end\\_timestamp\\].\n    \n*   Depot's time-windows are ineffective used when max_activity_waiting_time is specified in the input.\n    \n*   Using relations along with depot time-window is not allowed and the service will return an error.",
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
      },
      description: {
        type: 'string',
        description:
          'Define the optimization job using any custom message. This description is returned as is in the response.',
      },
      distance_matrix: {
        type: 'array',
        description:
          'An array of arrays to denote the user-defined distances, in meters, for travelling between each pair of geographic coordinates mentioned in the location array. When this input is provided, actual distances between the locations will be ignored in favor of the values provided in this input for any distance calculations during the optimization process. The values provided here will also be used for cost calculations when travel_cost is “distance”.\n\nThe number of arrays in the input should be equal to the number of coordinate points mentioned in the location array and each array, in turn, should contain the same number of elements as well.\n\n**Note:**\n\n*   duration_matrix is mandatory when usingdistance_matrix.\n    \n*   When using distance_matrix route geometry will not be available in the optimized solution.',
        items: {
          type: 'array',
          items: {
            type: 'integer',
          },
        },
      },
      duration_matrix: {
        type: 'array',
        description:
          'An array of arrays to denote the user-defined durations, in seconds, for travelling between each pair of geographic coordinates mentioned in the location array. When this input is provided, actual durations between the locations will be ignored in favor of the values provided in the matrix for any ETA calculations during the optimization process. The values provided in the matrix will also be used for cost calculations when travel_cost is “duration”.\n\nThe number of arrays in the input should be equal to the number of coordinate points mentioned in the location array and each array, in turn, should contain the same number of elements as well.\n\nPlease note that, unlike distance_matrix, duration_matrix can be used independently in following cases:\n\n*   when travel_cost is “duration”\n    \n*   when travel_cost is “customized” and a cost_matrix is provided\n    \n\nAlso, the route geometry will not be available in the optimized solution when using duration_matrix.',
        items: {
          type: 'array',
          items: {
            type: 'integer',
          },
        },
      },
      existing_solution_id: {
        type: 'string',
        description: 'The previous optimization request id used to retrieve solution for reoptimization',
      },
      jobs: {
        type: 'array',
        description:
          'jobs object is used to collect the details of a particular job or task that needs to be completed as part of the optimization process. Each job can have either a pickup or delivery step, but not both. Read more about this attribute in the [Job Object](#job-object) section.\n\nPlease note that either the jobs or the shipments attribute should be specified to build a valid request.',
        items: {
          $ref: '#/$defs/job',
        },
      },
      options: {
        type: 'object',
        description:
          'It represents the set of options that can be used to configure optimization algorithms so that the solver provides a solution that meets the desired business objectives.',
        properties: {
          constraint: {
            type: 'object',
            description:
              'This attribute defines both the soft and hard constraints for an optimization job.\n\nSoft constraints are constraints that do not necessarily have to be satisfied, but the optimization algorithm will try to satisfy them as much as possible. Whereas the hard constraints are the constraints that will not be violated by the solver. Users can use multiple constraints together.\n\nPlease note that soft constraints are ineffective when using relations attribute in a request. The hard constraint, max_activity_waiting_time, is effective only when relation type is in_same_route and ineffective for all other types.',
            properties: {
              max_activity_waiting_time: {
                type: 'integer',
                description:
                  'This is a hard constraint which specifies the maximum waiting time, in seconds, for each step. It ensures that the vehicles do not have unreasonable wait times between jobs or shipments. This feature is useful for use cases where avoiding long wait times between jobs or shipments is a primary concern.\n\nPlease note that the waiting time constraint applies to all tasks in the optimization request, ensuring that no single task exceeds the specified maximum waiting time. When being used together with relations attribute, this parameter is effective only for in_same_route relation type.',
              },
              max_vehicle_overtime: {
                type: 'integer',
                description:
                  'This is a soft constraint for vehicle overtime. Overtime is defined as the time that a vehicle spends to complete a set of jobs after its time window has ended. max_vehicle_overtime attribute specifies the maximum amount of overtime a vehicle can have, in seconds. If a vehicle’s overtime exceeds this value, it will be considered a violation of this constraint.\n\nPlease note that this constraint applies to all vehicles in the optimization request.',
              },
              max_visit_lateness: {
                type: 'integer',
                description:
                  'This is a soft constraint for permissible delay, in seconds, to complete a job or shipment after its time window is over. If a job or shipment’s lateness exceeds this value, it will be considered a violation of this constraint.\n\nPlease note that this constraint applies to all tasks in the optimization request. In case lateness duration needs to be applied for individual tasks, please use the max_visit_lateness parameter under jobs and shipments',
              },
            },
          },
          grouping: {
            type: 'object',
            description:
              'Set grouping rules for the tasks and routes.\n\n*   Use order_grouping to group nearby tasks\n    \n*   Use route_grouping to control route sequencing.',
            properties: {
              order_grouping: {
                type: 'object',
                description:
                  'Specify the criteria for grouping nearby tasks. The grouped tasks will be treated as one stop by the optimizer and no cost would be incurred when driver travels to different tasks within a group. Users can use this feature to model use cases like multiple deliveries in a building complex or a condo.\n\nPlease note that when the multiple tasks are grouped together, only one setup time is considered for all such tasks. The durations of this setup time is equal to maximum setup time among all grouped tasks, if provided. On the other hand, the service time is applied to each task individually, as per the input provided when configuring those tasks.',
                properties: {
                  grouping_diameter: {
                    type: 'number',
                    description:
                      'Specify the straight line distance, in meters, which will be used to identify the tasks that should be grouped together. The default value is null.',
                  },
                },
              },
              proximity_factor: {
                type: 'number',
                description:
                  'When specified, routes are built taking into account the distance to the nearest tasks. A higher proximity factor helps build routes with closer distances between neighboring tasks, whereas a lower proximity factor helps build routes with farther distances between neighboring tasks. As a result, the total number of routes in the solution can vary based on the configured proximity factor - more routes for higher factor and less routes with lower factor.  \n  \nIn practice, such routes are more resistant to changes in task time windows: when the time window is postponed, the driver can drive to the next task and then return to the previous one.  \n  \nPlease note that:\n\n*   Valid values are \\[0,10\\]\n    \n*   Default value is 0.0.\n    \n*   It is recommended to use values lower values, in the range of \\[0, 1\\]. Higher values may adversely impact the solution metrics due to higher number of resulting routes: costs, mileage etc.',
              },
              route_grouping: {
                type: 'object',
                description:
                  'Specify the criteria for prioritising routes in a zone over routes that are part of another zone. As a result, all the tasks falling in a zone will be fulfilled before any tasks that are part of a different zone.',
                properties: {
                  penalty_factor: {
                    type: 'number',
                    description:
                      'Specify a non-negative value which indicates the penalty of crossing zones on the same route. Default penalty value is 0.\n\nA higher value, for example 30.0, will place a higher penalty on zone violations and hence push the optimizer to prefer a solution without any zone violations, where all tasks in a single region are fulfilled before any tasks in other regions or outside the current region. Whereas a lower value, say 5.0, will place a lower penalty allowing the optimizer to return solutions which may have few violations, say a couple of routing zone violations in our example. A still lower penalty factor, like 1.0, may have several zone violations.',
                  },
                  zone_diameter: {
                    type: 'number',
                    description:
                      'Specify the diameter of the zone, routes within which will be prioritised before routes falling in other zones. Please note that zone_diameter is the straight line distance, in meters.',
                  },
                  zone_source: {
                    type: 'string',
                    description:
                      'Specify the source for creating boundaries of the routing zones. The default value is “system\\_generated”.\n\n*   system\\_generated - Routing zone boundaries are created automatically by the optimizer based on the zone_diameter provided.\n    \n*   custom\\_definition - Custom routing zone boundaries should be provided by the user in input using the zones attribute. An error would be returned if the zones attribute is null or missing in the input request.',
                    enum: ['system_generated', 'custom_definition'],
                  },
                },
              },
            },
          },
          objective: {
            type: 'object',
            description: 'This attribute is used to configure the objective of the optimization job.',
            properties: {
              allow_early_arrival: {
                type: 'boolean',
                description:
                  'Choose where the optimizer should schedule the driver’s wait time. When set to true the driver waits at the location of the task until its time window allows him to start the task. When set to false the driver waits at the location of the previous task and starts driving only at such a time that makes him arrive at the next task location in time to start the task as soon as he reaches.',
              },
              custom: {
                type: 'object',
                description:
                  'The custom parameter is used to define special objectives apart from the simpler travel cost minimization objectives.',
                properties: {
                  type: {
                    type: 'string',
                    description:
                      'The type parameter accepts two inputs:\n\n*   min: This type of customized objective will minimize the metric provided in the value parameter.\n    \n*   min-max: This type of customized objective will approximate an even distribution of the metric provided in the value parameter, among all the routes in solution.\n    \n\nPlease note that type is mandatory only when using custom attribute.',
                    enum: ['min', 'min-max'],
                  },
                  value: {
                    type: 'string',
                    description:
                      'The value parameter accepts four inputs, two of them are valid for min type and other two are valid for min-max type custom objective. Let’s look at the values for min type objective:\n\n*   vehicles: Solver will minimize the number of vehicles used in the solution.\n    \n*   completion_time: Solver will minimize the total time taken to complete all tasks.\n    \n\nThe next set of values are acceptable when type is set to min-max.\n\n*   tasks: Solver will evenly distribute the tasks on each route.\n    \n*   travel_cost: Solver will assign tasks such that the traveling cost of each route is within a close range of other routes. The travel cost metric considered here is the one set using objective.travel_cost .\n    \n\nPlease note that value is mandatory only when using custom attribute. The above values provide flexibility to tune the optimization algorithm to fulfill practical objectives beyond the relatively simpler time or distance minimization approaches.',
                    enum: ['vehicles', 'completion_time', 'travel_cost', 'tasks'],
                  },
                },
                required: ['type', 'value'],
              },
              minimise_num_depots: {
                type: 'boolean',
                description: 'Specify whether to minimize the number of depots used in optimization routes.',
              },
              solver_mode: {
                type: 'string',
                description:
                  'If the input doesn’t include features of soft constraints, customized objectives, re-optimization, relations, max travel cost or automatic fixed cost, then user can select “optimal” to achieve a higher-speed and higher-quality optimization.\n\nIf “optimal” mode is unable to process some features in the input, then it will still goes to “flexible” mode.',
                enum: ['flexible', 'fast', 'internal'],
              },
              solving_time_limit: {
                type: 'integer',
                description:
                  'Specify the number of seconds within which the optimizer should ideally solve the optimization request.\n\nPlease note that:\n\n*   In case the specified time limit is not enough to generate a solution for a given problem set, the optimizer will continue processing until it arrives at a solution.\n    \n*   It is recommended to specify a duration of at least 5-7 minutes in case the input problem contains a large set of tasks or vehicles.',
              },
              travel_cost: {
                type: 'string',
                description:
                  'The travel_cost parameter specifies the type of cost used by the solver to determine the routes.\n\nIf the travel_cost parameter is set to distance, the solver will minimize the total distance traveled by vehicles while determining a solution. This objective would be useful in cases where the primary objective is to reduce fuel consumption or travel expenses.\n\nIf the travel_cost parameter is set to duration, the solver will minimize the total time taken by the vehicles to complete all tasks while determining a solution. This objective would be useful in cases where the primary objective is to minimize completion time or maximize the number of orders fulfilled within a given time window.\n\nIf the travel_cost parameter is set to air_distance, the solver will try to calculate the distance,in meters, between two points using the great-circle distance formula (i.e., the shortest distance between two points on a sphere) instead of the actual road distance. This would be useful in cases where the delivery locations are far apart and the road distance between them is significantly longer than the actual straight-line distance. For example, in Drone Delivery services.\n\nIf the travel_cost is set to customized the solver would use the custom cost values provided by the user (in cost_matrix attribute) and prefer a solution with lower overall cost. This enables the user to have greater control over the routes preferred by the solver and hence the sequence in which the jobs are completed.',
                enum: ['duration', 'distance', 'air_distance', 'customized'],
              },
            },
          },
          routing: {
            type: 'object',
            description:
              'This attribute is used to define the routing configurations for the optimization job.',
            properties: {
              allow: {
                type: 'array',
                items: {
                  type: 'string',
                  enum: ['taxi', 'hov'],
                },
              },
              avoid: {
                type: 'array',
                description:
                  'Specify the type of objects/maneuvers that the route should avoid.\n\nPlease note that:\n\n*   The values are case-sensitive.\n    \n*   When using avoid:bbox feature, users need to specify the boundaries of the bounding box to be avoided. Multiple bounding boxes can be provided simultaneously. Please note that bounding box is a hard filter and if it blocks all possible routes between given locations, a 4xx error is returned. Mention the bounding box boundaries in the following format: bbox: min\\_latitude,min\\_longitude,max\\_latitude,max\\_longitude.\n    \n*   When using avoid=sharp_turn, the range of allowed turn angles is \\[120,240\\] in the clockwise direction from the current road. Any roads with turn angles outside the range will be avoided.\n    \n*   If none is provided along with other values, an error is returned as a valid route is not feasible.',
                items: {
                  type: 'string',
                  enum: [
                    'toll',
                    'highway',
                    'bbox',
                    'left_turn',
                    'right_turn',
                    'sharp_turn',
                    'uturn',
                    'service_road',
                    'ferry',
                    'none ',
                  ],
                },
              },
              context: {
                type: 'string',
                description:
                  'Use this parameter to apply a single speed value for all ETA and drive time calculations. In case, the travel_cost is set to duration then setting this parameter also impacts the cost of the solution.',
                enum: ['avgspeed'],
              },
              cross_border: {
                type: 'boolean',
                description:
                  'Specify if crossing an international border is allowed for operations near border areas. When set to false, the API will prohibit any routes crossing international borders. When set to true, the service will return routes which cross the borders between countries, if required for the given set locations\n\nThis feature is available in North America region only. Please get in touch with [support@nextbillion.ai](mailto:support@nextbillion.ai) to enquire/enable other areas.',
              },
              disable_cache: {
                type: 'boolean',
                description:
                  'Specify if the optimizer should cache the matrix result set (containing ETAs and distances) for the given set of locations in the request. Once the results are cached, the optimizer can use it during the next 60 mins if exactly the same set of locations are provided again. Please note that if a cached result is retrieved, the timer is reset and that result will be available for another 60 mins.\n\nIf the users want to regenerate the result set, they can set this parameter to true and optimizer will not use the cached results.\n\nThis feature is helpful in expediting the optimization process and generate results quickly. It also helps users to quickly simulate route plans for different combinations of constraints for a given set of locations.',
              },
              hazmat_type: {
                type: 'array',
                description:
                  'Specify the type of hazardous material being carried and the service will avoid roads which are not suitable for the type of goods specified. Provide multiple values separated by a comma , .\n\nPlease note that this parameter is effective only when mode=truck.',
                items: {
                  type: 'string',
                  enum: ['general', 'circumstantial', 'explosive', 'harmful_to_water'],
                },
              },
              mode: {
                type: 'string',
                description: 'Define the traveling mode to be used for determining the optimized routes.',
                enum: ['car', 'truck'],
              },
              profiles: {
                type: 'object',
                description:
                  'Defines all the vehicle profiles. profiles is implemented as a dictionary of objects where each profile name is the unique key and the associated value is an object describing the routing properties of that profile. All routing properties available in options.routing can be added as values for a given profile.\n\nPlease note:\n\n*   The routing properties configured using options.routing (and not part of any \\profiles\\) are considered as default route settings i.e. they are applied to vehicles which are not associated with any profile.\n    \n*   The default route settings are independent from those defined for any profiles . Consequently, for vehicles which are tagged to a given profile, only the routing properties configured for the given profile will apply.\n    \n*   If the "mode" is not specified for any profile, by default it is considered to be car .\n    \n*   "default" is a reserved keyword and can not be used as the name for any custom profile.\n    \n*   profiles can\'t be nested in other profiles.\n    \n*   The number of profiles, including default route settings, are limited to\n    \n    *   15, if 0 < number of location <= 100\n        \n    *   6, if 100 < number of location <= 600，\n        \n    *   2, if 600 < number of location <= 1200,\n        \n    *   1, if number of location > 1200\n        \n\nRouting profiles attribute is useful for configuring fleets containing multiple vehicles types. Check [Routing Profiles](https://docs.nextbillion.ai/docs/optimization/api/route-optimization-flexible/tutorials/routing-profiles) tutorial to learn more.',
              },
              traffic_timestamp: {
                type: 'integer',
                description:
                  'Specify the general time when the job needs to be carried out. The time should be expressed as an UNIX timestamp in seconds format. The solver will take into account the general traffic conditions at the given time to determine the routes and their ETAs.',
              },
              truck_axle_load: {
                type: 'number',
                description:
                  'Specify the total load per axle (including the weight of trailers and shipped goods) of the truck, in tonnes. When used, the optimizer will use only those routes which are legally allowed to carry the load specified per axle.\n\nPlease note this parameter is effective only when mode=truck.',
              },
              truck_size: {
                type: 'string',
                description:
                  'Specify the truck dimensions, in centimeters, in the format of “height,width,length”. Please note that this parameter is effective only when mode=truck.',
              },
              truck_weight: {
                type: 'integer',
                description:
                  'Specify the truck weight including the trailers and shipped goods, in kilograms. Please note that this parameter is effective only when mode=truck.',
              },
            },
          },
        },
      },
      relations: {
        type: 'array',
        description:
          'relations attribute is an array of individual relation objects. type parameter and steps object are mandatory when using this attribute.\n\nPlease note:\n\n*   The soft constraints are **not** effective when using the relations attribute.\n    \n*   In case a given relation can\'t be satisfied, the optimizer will flag all the tasks involved in that "relation" as unassigned.\n    \n\nRead more about this attribute in the [Relations Object](#relations-object) section.',
        items: {
          type: 'object',
          properties: {
            steps: {
              type: 'array',
              description:
                'The steps property specifies the tasks or steps that are part of the relation and must be carried out in a manner defined in the type parameter. Please note you can add any number of steps here, except when relation type is precedence where only 2 tasks can be added.',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    description:
                      'Specifies the type of the step. The start and end step types have to be the first and last steps, respectively, in a relation.\n\nPlease note that the type is mandatory when using the relations object.',
                    enum: ['start', 'end', 'job', 'pickup', 'delivery'],
                  },
                  id: {
                    type: 'string',
                    description:
                      'This represents the ID of the task and should be consistent with the input IDs provided in the jobs or shipments objects for a given step. The id is required for all steps other than start and end.',
                  },
                },
                required: ['type'],
              },
            },
            type: {
              type: 'string',
              description:
                'Specifies the type of relation constraint. The following types are supported:\n\n*   in_same_route: Ensures that all steps are covered in the same route in solution.\n    \n*   in_sequence: Ensures that all steps are in the same route and their sequence matches the order specified in the steps field. Insertion of new steps between the steps specified, is allowed.\n    \n*   in_direct_sequence: Similar to in_sequence, but insertion of new steps is not allowed in the final route.\n    \n*   precedence: Restricts the travel time between the first step and second step. If the precedence requirement cannot be satisfied, then the task specified at the second step will not be assigned. Only 2 steps can be specified in a single precedence type relations. Please use multiple precedence relations to apply restrictions on more than 2 tasks.\n    \n\nIf the vehicle field is specified in the relations input, all steps will be served by that particular vehicle. Otherwise, the route can be allocated to any feasible vehicle.\n\nPlease note that the type field is mandatory when using the relations object.',
              enum: ['in_same_route', 'in_sequence', 'in_direct_sequence', 'precedence'],
            },
            id: {
              type: 'integer',
              description:
                '**Deprecated! Please use the** vehicle **parameter to specify the vehicle ID.**\n\nSpecifies the ID of the vehicle that would fulfil the steps. ID should be consistent with input IDs provided in the vehicles object.',
            },
            max_duration: {
              type: 'integer',
              description:
                'This attribute is effective only when precedence type relation is used. max_duration restricts the travel time of the vehicle to go from location of first task to the location of second task specified in steps object. The unit for this parameter is seconds. It accepts values greater than 0 only.\n\nPlease note that max_duration is a hard constraint. Hence, if aggressive durations are provided such that the second task cannot be reached within the specified max_duration, it might be done before the first task (usually in case of jobs) or remain un-assigned (usually in case of shipments).',
            },
            min_duration: {
              type: 'integer',
              description:
                'This attribute is effective only when precedence type relation is used. Use min_duration to enforce a minimum time-gap between the two tasks specified in steps object. When specified, the second task will get completed after a gap of min_duration with respect to the first task. The unit for this parameter is seconds.\n\nPlease note that min_duration is implemented as a soft constraint and it can be violated in presence of other relation types. The optimizer will tend to provide solutions where min_duration is not violated, but it is not guaranteed.',
            },
            vehicle: {
              type: 'string',
              description:
                'Specifies the ID of the vehicle that would fulfill the steps. Providing the same vehicle ID to multiple ‘relations’ is prohibited. The vehicle ID provided here should be consistent with ID provided in the vehicles attribute.',
            },
          },
          required: ['steps', 'type'],
        },
      },
      shipments: {
        type: 'array',
        description:
          'The shipments object is used to collect the details of shipments that need to be completed as part of the optimization process.\n\nEach shipment should have a pickup and the corresponding delivery step.\n\nPlease note that either the jobs or the shipments attribute should be specified to build a valid request.',
        items: {
          $ref: '#/$defs/shipment',
        },
      },
      solution: {
        type: 'array',
        description:
          'This attribute is related to the re-optimization feature. It allows for the previous optimization result to be provided in case new orders are received and the solution needs to be re-planned. The solution attribute should contain the same routes as the previous optimization result. solution attribute is an array of objects with each object corresponding to one route.',
        items: {
          type: 'object',
          properties: {
            cost: {
              type: 'integer',
              description: 'Specify the cost of the route.',
            },
            steps: {
              type: 'array',
              description: 'Describe the steps in this route.',
              items: {
                type: 'object',
                description: 'Describe details about a step of a route',
                properties: {
                  id: {
                    type: 'string',
                    description:
                      'The ID of the step. This field is mandatory for all steps except for start and end type.\n\nPlease note that the ID provided here must also be present in either the jobs or the shipments objects.\n\n**Note:** We have modified the data type of this field. The latest change is backward compatible and both integer and string type IDs are valid for this field, as long as they match the IDs of the jobs or shipments already configured.',
                  },
                  arrival: {
                    type: 'integer',
                    description:
                      'Specify the time at which the vehicle arrives at the step location. If time_windows is provided, then arrival will be an UNIX timestamp expressed in seconds. Otherwise, it will be the total duration, in seconds, elapsed since the start of the route.\n\nPlease note that arrival is mandatory when using the solution object.',
                  },
                  type: {
                    type: 'string',
                    description: 'Specify the type of the step.',
                    enum: ['start', 'end', 'job', 'pickup', 'delivery', 'break'],
                  },
                  description: {
                    type: 'string',
                    description: 'Specify the description of this step.',
                  },
                  distance: {
                    type: 'integer',
                    description:
                      'Specify the distance covered, in meters, from the start of the route up until the current step.\n\nPlease note that the value of this parameter accumulates with each step. In case , the travel_cost: air_distance, then the distance here should be the straight line distance.',
                  },
                  duration: {
                    type: 'integer',
                    description:
                      'Specify the drive time, in seconds, from the start of the route up until the start of the step. Please note that the value of this parameter accumulates with each step.',
                  },
                  load: {
                    type: 'array',
                    description:
                      'Specify the load on the vehicle after completing this step. In case of multiple dimensions, please specify the load for each type.',
                    items: {
                      type: 'integer',
                    },
                  },
                  location: {
                    type: 'array',
                    description:
                      'Specify the location coordinates of the step in the \\[latitude, longitude\\] format. Alternatively, location_index property can also be used to specify the location of the step.\n\nPlease note that either location or location_index is mandatory.',
                    items: {
                      type: 'number',
                    },
                  },
                  location_index: {
                    type: 'integer',
                    description:
                      'Specify the index (in the location array) of the location coordinates where the step is performed. The valid range of values is \\[0, length of location array). Alternatively, location property can also be used to specify the location.\n\nPlease note that either location or location_index is mandatory.',
                  },
                  service: {
                    type: 'integer',
                    description: 'Specify the service time, in seconds, at this step.',
                  },
                  setup: {
                    type: 'integer',
                    description: 'Specify the set-up duration, in seconds, needed at the step.',
                  },
                  waiting_time: {
                    type: 'integer',
                    description: 'Specify the wait time of the vehicle at this step, in seconds.',
                  },
                },
                required: ['id', 'arrival', 'type'],
              },
            },
            vehicle: {
              type: 'string',
              description:
                'Specify the ID of the vehicle that was assigned to the route. This field is mandatory when using the solution attribute and providing an empty string would result in error. The IDs are case-sensitive.\n\n**Note:** Since the vehicles can be configured using either a string or an integer ID, please ensure that the same value type is provided for this field as was used in the original request.',
            },
            delivery: {
              type: 'array',
              description:
                'Specify the total quantities, for each dimension (or unit), of deliveries performed in the route.',
              items: {
                type: 'integer',
              },
            },
            description: {
              type: 'string',
              description: 'Specify the description of the assigned vehicle.',
            },
            distance: {
              type: 'integer',
              description: 'Specify the total distance of the route, in meters.',
            },
            duration: {
              type: 'integer',
              description: 'Specify the total drive duration of the route, in seconds.',
            },
            geometry: {
              type: 'string',
              description: 'Specify the geometry of this route encoded in polyline format.',
            },
            pickup: {
              type: 'array',
              description:
                'Specify the total quantities, for each dimension (or unit), of pickups performed in the route.',
              items: {
                type: 'integer',
              },
            },
            priority: {
              type: 'integer',
              description: 'Specify the sum of priorities of all tasks on the route.',
            },
            service: {
              type: 'integer',
              description: 'Specify the total service time for the route, in seconds.',
            },
            setup: {
              type: 'integer',
              description:
                'Specify the total set-up duration, in seconds, needed for the tasks on the route.',
            },
            waiting_time: {
              type: 'integer',
              description: 'Specify the total waiting time of the vehicle on the route, in seconds.',
            },
          },
          required: ['cost', 'steps', 'vehicle'],
        },
      },
      unassigned: {
        type: 'object',
        description:
          'unassigned attribute is related to the re-optimization feature. This attribute should contain the tasks that were not assigned during an earlier optimization process. Please note that the unassigned part in request should be consistent with the unassigned part in the previous optimization result.\n\nUsers can reduce the number of unassigned tasks in the re-optimized solution, by following strategies such as:\n\n*   Extending the time windows for vehicles or tasks to give more flexibility\n    \n*   Adding more vehicles to the optimization problem\n    \n*   Adjusting the priority of different tasks to balance the workload more evenly\n    \n*   Modifying other constraints or parameters to make the problem more solvable\n    \n\nUltimately, the goal is to minimize the number of unassigned tasks while still meeting all the necessary constraints and objectives.',
        properties: {
          jobs: {
            type: 'array',
            description:
              'Specify the unassigned job IDs from the previous optimization result. Please note the IDs should also be present in the jobs part of the input.\n\n**Note:** We have modified the data type of this field. However, the latest change is backward compatible and both integer and string type job IDs are valid for this field, as long as they match the IDs of the jobs already configured. Providing mixed value types in the array, will lead to an error.',
            items: {
              type: 'string',
            },
          },
          shipments: {
            type: 'array',
            description:
              'Specify the unassigned shipment pickup & delivery IDs from the previous optimization result. Both the pickup & delivery steps of a shipment should be part of the same array.\n\n**Note:** We have modified the data type of this field. However, the latest change is backward compatible and both integer and string type shipment IDs are valid for this field, as long as they match the IDs of the shipments already configured. Providing mixed value types in the array, will lead to an error.',
            items: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
      zones: {
        type: 'array',
        description:
          'An array of objects to specify geometry of all the zones involved. Each object corresponds to a single zone. A valid zone can be a [geoJSON](https://datatracker.ietf.org/doc/html/rfc7946#page-9) polygon, multi-polygon or a geofence created using [NextBillion.ai](http://NextBillion.ai)’s [Geofence API](https://docs.nextbillion.ai/docs/tracking/api/geofence).\n\nPlease note that\n\n*   Each zone should have a geometry specified either throughgeometry or through the geofence_id parameter.\n    \n*   When zone IDs are not provided for individual tasks (jobs or shipments) then the API will automatically allocate zones based on the task’s geolocation and the geometries of the zones provided here. Otherwise, if the zone IDs are provided while configuring individual tasks, the zone IDs will override the geometries provided here.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Provide an ID for the zone. This field is mandatory when adding zones.',
            },
            geofence_id: {
              type: 'string',
              description:
                'Provide the ID of a pre-created geofence using the [Geofence API](https://docs.nextbillion.ai/docs/tracking/api/geofence).\n\nPlease note that one of geometry or geofence_id should be provided.',
            },
            geometry: {
              type: 'object',
              description:
                'It is a [geoJSON object](https://datatracker.ietf.org/doc/html/rfc7946#page-9) with details of the geographic boundaries of the zone. Only “Polygon” and “MultiPolygon” geoJSON types are supported.\n\nPlease note that one of geometry or geofence_id should be provided.',
              properties: {
                coordinates: {
                  type: 'array',
                  description:
                    'An array of coordinates in the \\[longitude, latitude\\] format, representing the zone boundary.',
                  items: {
                    type: 'array',
                    items: {
                      type: 'number',
                    },
                  },
                },
                description: {
                  type: 'string',
                  description: 'Provide a description to identify the zone',
                },
                type: {
                  type: 'string',
                  description: 'Type of the geoJSON geometry. Should always be Polygon or MultiPolygon.',
                  enum: ['Polygon', 'MultiPolygon'],
                },
              },
            },
          },
          required: ['id'],
        },
      },
    },
    required: ['key', 'locations', 'vehicles'],
    $defs: {
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
              'An array of integers specifying the IDs of the zone(s) that this shipment belongs to. The shipment can be fulfilled by all vehicles which are allowed to complete tasks in the zone(s) assigned to this shipment. If the pickup and delivery steps belong to different zones, then a vehicle should be allowed to fulfil tasks in both zones to take up such shipments. Please note following points about shipment zones:\n\n*   If zone IDs are provided for any one of the shipments, then all other shipments should also be specified with zone IDs. Zone IDs provided here will override any zone geometries provided in the zones attribute and these IDs will be used for allocating appropriate vehicles.\n    \n*   Shipment steps can be auto-allocated to zones if this parameter is not specified while the zone geometries (either zones.geometry or zones.geofence_id) are provided.\n    \n*   Shipments not falling in any zones can be fulfilled by only those vehicles which are allowed to take up tasks outside zones as well. Refer to vehicles attribute for more information.',
            items: {
              type: 'integer',
            },
          },
        },
        required: ['delivery', 'pickup'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.optimization.v2.submit(body));
};

export default { metadata, tool, handler };
