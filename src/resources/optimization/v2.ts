// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DriverAssignmentAPI from './driver-assignment';
import * as OptimizationAPI from './optimization';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V2 extends APIResource {
  /**
   * Flexible GET
   */
  retrieveResult(
    query: V2RetrieveResultParams,
    options?: RequestOptions,
  ): APIPromise<V2RetrieveResultResponse> {
    return this._client.get('/optimization/v2/result', { query, ...options });
  }

  /**
   * Flexible POST
   */
  submit(params: V2SubmitParams, options?: RequestOptions): APIPromise<OptimizationAPI.PostResponse> {
    const { key, ...body } = params;
    return this._client.post('/optimization/v2', { query: { key }, body, ...options });
  }
}

export interface Job {
  /**
   * Provide an unique ID for the job. The IDs are case-sensitive.
   */
  id: string;

  /**
   * An integer denoting the index (in the `location` array) of the location
   * coordinates where the job needs to be performed. The valid range of values is
   * \[0, length of `location` array).
   *
   * Please note the `location_index` is mandatory when using the `jobs` object.
   */
  location_index: number;

  /**
   * In case the job involves a delivery step, use this attribute to describe
   * delivery quantity. This attribute supports multidimensional quantities, to
   * support delivering quantities of different units/dimensions. It is recommended
   * to keep the dimensions of quantity for pickup/delivery consistent when defining
   * them in `jobs` and `vehicles` (in `capacity` attribute).
   *
   * Please note that the quantity of delivery will be added to the assigned
   * vehicle’s initial load.
   *
   * In case depots are being added, the delivery configured here can be fulfilled by
   * vehicles starting from specific depots. Refer to `depot_ids` and
   * `vehicles.start_depot_ids` to know more.
   */
  delivery?: Array<number>;

  /**
   * Specify the depots which can be used to fulfil this job. In case of a pickup
   * job, the assigned vehicle will deliver the goods to the depot specified here, at
   * the end of its trip. Conversely, in case of delivery jobs, the vehicle will load
   * the goods from the depot specified here, before starting the trip.
   *
   * **Note:**
   *
   * - If multiple IDs are provided for this field then any of the given depots can
   *   be used to fulfil the job.
   * - If this field is not provided then the given job can be fulfilled by any
   *   vehicle (subject to other constraints configured in the input).
   * - If the job does not have any delivery or pick-up step configured then depots
   *   configuration will not have any impact on the given job.
   */
  depot_ids?: Array<string>;

  /**
   * Add a custom description for the job.
   */
  description?: string;

  /**
   * Specify whether the job route should follow LIFO (last in, first out). Use this
   * parameter when `pickup` or `delivery` jobs are involved and the loading or
   * unloading sequence of cargo is important. The default is `false`.
   */
  follow_lifo_order?: boolean;

  /**
   * Use this parameter to specify the type of loads which are incompatible with the
   * job’s load type. Once this property is configured, the job can only be serviced
   * by a vehicle which has not serviced any other task with an incompatible
   * `load_types` . Add multiple load types to indicate all the types which are
   * incompatible for this job. The incompatible load type considerations are ignored
   * for the first task of the route.
   *
   * For example, an input value of \[“groceries”, “food”\] means that current job’s
   * load is incompatible with both groceries and food type of loads. Consequently,
   * the optimizer will not assign this job to a vehicle which has served any task
   * with `load_types` as either groceries or food.
   *
   * Note:
   *
   * - This parameter is effective only when a pickup / delivery is configured for
   *   the job.
   * - If the job is part of any `relations` then, configured
   *   `incompatible_load_types` might be ignored.
   */
  incompatible_load_types?: Array<string>;

  /**
   * Specify a joint order group ID that this job is associated with. Tasks having
   * the same joint order group ID are treated as a single unit: either all tasks in
   * the group are assigned, or none are. Users can add tasks of both `jobs` and
   * `shipments` types to a single joint order group by using the same unique ID.
   * Please note that:
   *
   * - Each job in a single joint order group will be fulfilled by a unique vehicle.
   * - Jobs belonging to a joint order group can be served in any sequence.
   * - Joint order settings will not be effective if \`solution\` or \`relations\`
   *   attributes are also provided in the input request.
   */
  joint_order?: number;

  /**
   * Use this parameter to specify the type of loads for the given job. Once this
   * property is configured, the job can not be served by a vehicle which has
   * serviced any task whose load is incompatible with any of the`load_types`
   * provided in this input. The load type considerations are ignored for the first
   * task of the route.
   *
   * For example, an input value of \[“groceries”, “food”\] means that job’s load
   * characteristics belong to either one or both types. Consequently, the optimizer
   * will assign this job to a vehicle which has served other tasks whose
   * `incompatible_load_types` do not contain either groceries or food.
   *
   * Note:
   *
   * - This parameter is effective only when a pickup / delivery is configured for
   *   the job.
   * - If the job is part of any `relations` then, `load_types` might be ignored.
   */
  load_types?: Array<string>;

  /**
   * It determines the allowable delay, in seconds, to begin a job after its
   * designated time window has concluded. Please note that this parameter would
   * override the `constraint.max_visit_lateness` (global) if both are specified.
   */
  max_visit_lateness?: number;

  /**
   * Specify any custom data that should be attached along with job fulfilment
   * details in the `steps` attribute of the optimized solution. Users can leverage
   * this property to provide additional details/context when sharing information
   * about the job with integrated systems (TMS, Fleet Management, Driver dispatch
   * etc).
   *
   * Please note that the `metadata` content must always be specified in a`key` :
   * `value` pair format, where the “key” is always a string.
   */
  metadata?: unknown;

  /**
   * Specify the cost of keeping this job unassigned, namely, the cost of outsourcing
   * the job. When provided, the optimizer weighs the cost of assigning the job
   * against the cost of keeping it unassigned and chooses a solution with lower
   * cost. In the solution, the `outsourcing_cost` of unassigned jobs is added to the
   * total cost of the solution.
   *
   * If the `outsourcing_cost` is not provided, which is to say that the job can not
   * be outsourced, then the optimizer tries to fulfill the job irrespective of the
   * cost incurred, subject to other constraints.
   *
   * Please note that `revenue` and `outsourcing_cost` can not be specified
   * simultaneously for a job. Also, the `outsourcing_cost` would override the
   * priority settings of the job.
   */
  outsourcing_cost?: number;

  /**
   * In case the job involves a pickup step, use this attribute to describe pickup
   * quantity. This attribute supports multidimensional quantities, to support
   * picking up quantities of different units/dimensions. It is recommended to keep
   * the dimensions of quantity for pickup/delivery consistent when defining them in
   * `jobs` and `vehicles` (in `capacity` attribute).
   *
   * Please note that the vehicle will continue to carry the picked-up quantity until
   * its last stop.
   *
   * In case depots are being added, the pickup configured here can be fulfilled by
   * vehicles ending at specific depots. Refer to `depot_ids` and
   * `vehicles.end_depot_ids` to know more.
   */
  pickup?: Array<number>;

  /**
   * Specify the priority of this job. The valid values are in the range of \[0,
   * 100\]. Default value is 0.
   *
   * Please note that setting a priority will only decide whether this job will be
   * assigned or not, but has nothing to do with the sequence of job fulfilment.
   */
  priority?: number;

  /**
   * Specify the revenue earned by completing this job. The optimizer uses the
   * `revenue` input to identify the potential profit earned by fulfilling this job
   * after taking into account the costs incurred to do so. The`options.objective`
   * and `vehicles.costs` input are taken into account to identify the costs of
   * fulfilling the job.
   *
   * In general, the optimizer will prefer fulfilling the tasks with higher profits
   * over the tasks with lower profits, should it need to reject some tasks in order
   * to honor other constraints. In case the profit from fulfilling a job is
   * negative, it will remain unassigned whatsoever.
   */
  revenue?: number;

  /**
   * Use this parameter to prioritize completing a task relative to certain other
   * tasks. A task configured with a `sequence_order` of 2 will be done after the
   * task with `sequence_order` of 1, but before the task with `sequence_order` of 3.
   * Valid range of values for this input is \[0,100\].
   *
   * Please note that:
   *
   * - Only the tasks within the same route are compared and ordered as per their
   *   `sequence_order`.
   * - Tasks without a `sequence_order` are not involved in the comparison.
   * - Following is the precedence of `sequence_order` when used along side some of
   *   the other constraints:
   *
   *   - `relations` are prioritized over `sequence_order` comparisons.
   *   - `sequence_order` will override `order_grouping` configurations.
   */
  sequence_order?: number;

  /**
   * Use this attribute to define the time duration, in seconds, needed to complete
   * the job. Default value is 0.
   */
  service?: number;

  /**
   * Specify the job set-up duration, in seconds. `setup` is the one-time effort
   * needed apart from working on the original task - for example, effort to record
   * some information for compliance, or effort to set-up the equipment, or perform
   * any other action for completing all steps required to fulfil the job.
   *
   * Please note that `setup` time is applied only once for a given task location.
   * `setup` time, unlike `service` time, is not repeated in case there are multiple
   * tasks at the same location.
   */
  setup?: number;

  /**
   * Define the skills needed to complete the job. This attribute supports
   * multidimensional skills allowing users to add multiple skills.
   *
   * Read more about the behavior of this attribute in the
   * [Multi-Dimensional Parameters](#multi-dimensional-parameters) section.
   */
  skills?: Array<number>;

  /**
   * Define time periods within which this job should be started. The time periods
   * should be expressed as a UNIX timestamp in seconds.
   *
   * Please note that the time periods should not overlap with each other and should
   * always follow the format of \[start_timestamp, end_timestamp\].
   */
  time_windows?: Array<Array<number>>;

  /**
   * Specify the dimensions and alignment configurations for the cargo associated
   * with the task. These inputs will be used to arrange the items into the loading
   * compartment of the vehicle to utilize the three-dimensional space. If a job
   * consists of several different items, each with its own dimensions, please
   * specify the final characteristics for the task: total height, total length,
   * total width.
   *
   * Please note that vehicles which contain the `volume` input, will only be
   * considered for arranging such items.
   */
  volume?: Job.Volume;

  /**
   * An array of integers specifying the IDs of the zone(s) that this job belongs to.
   * The job can be fulfilled by all vehicles which are allowed to complete tasks in
   * the zone(s) assigned to this job. Please note following points about job zones:
   *
   * - If zone IDs are provided for any one of the jobs, then all other jobs should
   *   also be specified with zone IDs. Zone IDs provided here will override any zone
   *   geometries provided in the `zones` attribute and these IDs will be used for
   *   allocating appropriate vehicles.
   * - Jobs can be auto-allocated to zones if this parameter is not specified while
   *   the zone geometries (either `zones.geometry` or `zones.geofence_id`) are
   *   provided.
   * - Jobs not falling in any zones can be fulfilled by only those vehicles which
   *   are allowed to take up tasks outside zones as well. Refer to `vehicles`
   *   attribute for more information.
   */
  zones?: Array<number>;
}

export namespace Job {
  /**
   * Specify the dimensions and alignment configurations for the cargo associated
   * with the task. These inputs will be used to arrange the items into the loading
   * compartment of the vehicle to utilize the three-dimensional space. If a job
   * consists of several different items, each with its own dimensions, please
   * specify the final characteristics for the task: total height, total length,
   * total width.
   *
   * Please note that vehicles which contain the `volume` input, will only be
   * considered for arranging such items.
   */
  export interface Volume {
    /**
     * Refers to the orientation of the cargo in the loading compartment. It supports
     * the following values:
     *
     * - **" "** : A blank space to indicate that the dimension check for the cargo
     *   should be skipped. This is also the default value.
     * - **strict :** In this orientation, the cargo must fit within the vehicle’s
     *   dimensions exactly as is—no rotation is allowed. All dimensions of the cargo
     *   must be less than or equal to the corresponding dimensions of the vehicle. If
     *   any dimension exceeds that of the vehicle, the cargo cannot be loaded.
     * - **parallel :** With parallel orientation, the cargo can be rotated around any
     *   one of the axes to help it fit into the loading compartment. For example, if
     *   the cargo is wider than the vehicle, it can still be loaded by rotating it
     *   around the vertical axis (so the width aligns with the vehicle’s depth) or the
     *   horizontal axis (so the width aligns with the vehicle’s height). Using this
     *   orientation, even a cargo whose one dimension is larger than the corresponding
     *   dimension of the vehicle but smaller than other dimensions, can also be
     *   loaded.
     * - **fixed_bottom :** In this orientation, the cargo can only be rotated around
     *   the vertical axis, meaning its base stays fixed and it cannot be tilted or
     *   turned over. The height of the cargo remains aligned with the vehicle’s height
     *   and cannot be adjusted. As a result, if the cargo’s height exceeds the
     *   vehicle’s available height, it cannot be loaded into the compartment.
     */
    alignment?: '`strict`' | '`parallel`' | '`fixed_bottom`' | '`" "`';

    /**
     * Cargo length, in meters.
     */
    depth?: number;

    /**
     * Cargo height, in meters.
     */
    height?: number;

    /**
     * Cargo width, in meters.
     */
    width?: number;
  }
}

export interface Shipment {
  /**
   * Specify the details of the delivery step of the shipment.
   */
  delivery: Shipment.Delivery;

  /**
   * Specify the details of the pickup step of the shipment.
   */
  pickup: Shipment.Pickup;

  /**
   * This parameter defines the quantity that needs to be shipped. This attribute
   * supports multidimensional quantities, to support shipment of quantities of
   * different units/dimensions. It is recommended to keep the dimensions of `amount`
   * in `shipments` and that of `capacity` in `vehicles` consistent.
   *
   * Please note that the `amount` will be added to the assigned vehicle’s initial
   * load.
   *
   * Read more about the behavior of this attribute in the
   * [Multi-Dimensional Parameters](#multi-dimensional-parameters) section.
   */
  amount?: Array<number>;

  /**
   * Specify whether the shipment route should follow LIFO (last in, first out). Use
   * this parameter when the loading or unloading sequence of cargo is important. The
   * default value is \`false\`.
   */
  follow_lifo_order?: boolean;

  /**
   * Use this parameter to specify the type of loads which are incompatible with the
   * shipment’s load type. Once this property is configured, the shipment can only be
   * serviced by a vehicle which has not serviced any other task with an incompatible
   * `load_types` . Add multiple load types to indicate all the types which are
   * incompatible for this shipment. The incompatible load type considerations are
   * ignored for the first task of the route.
   *
   * For example, an input value of \[“groceries”, “food”\] means that shipment’s
   * load is incompatible with both groceries and food type of loads. Consequently,
   * the optimizer will not assign this shipment to a vehicle which has served any
   * task with `load_types` as either groceries or food.
   *
   * Please note that if the shipment is part of any `relations` then, configured
   * `incompatible_load_types` might be ignored.
   */
  incompatible_load_types?: Array<string>;

  /**
   * Specify a joint order group ID that this shipment is associated with. Tasks
   * having the same joint order group ID are treated as a single unit: either all
   * tasks in the group are assigned, or none are. Users can add tasks of both `jobs`
   * and `shipments` types to a single joint order group by using the same unique ID.
   * Please note that:
   *
   * - Each shipment in a single joint order group will be fulfilled by a unique
   *   vehicle.
   * - Shipments belonging to a joint order group can be served in any sequence while
   *   maintaining the pickup -> delivery sequence for an individual shipment.
   * - Joint order settings will not be effective if \`solution\` or \`relations\`
   *   attributes are also provided in the input request.
   */
  joint_order?: number;

  /**
   * Use this parameter to specify the type of loads for the given shipment. Once
   * this property is configured, the shipment can not be served by a vehicle which
   * has serviced any task whose load is incompatible with any of the`load_types`
   * provided in this input. The load type considerations are ignored for the first
   * task of the route.
   *
   * For example, an input value of \[“groceries”, “food”\] means that shipment’s
   * load characteristics belong to either one or both types. Consequently, the
   * optimizer will assign this shipment to a vehicle which has served other tasks
   * whose `incompatible_load_types` do not contain either groceries or food.
   *
   * Please note that if the shipment is part of any `relations` then, configured
   * `load_types` might be ignored.
   */
  load_types?: Array<string>;

  /**
   * Use this parameter to limit the drive time for which a shipment stays in the
   * vehicle. The time-in-vehicle calculations start once the pickup leg of shipment
   * is completed after serving any setup and service time that may have been
   * configured for it. For the delivery leg, time-in-vehicle calculations wouldn’t
   * consider any setup and service time that needs to be served for completing the
   * delivery. The service or setup times of other tasks performed in between will
   * also be not accumulated against the time-in-vehicle limit.
   *
   * Please note that this property would be overridden if any `relations`
   * configuration is used except for “precedence” type. If “precedence” type
   * relations is used then `max_time_in_vehicle` will override it.
   */
  max_time_in_vehicle?: number;

  /**
   * Specify the cost of keeping this shipment unassigned, namely, the cost of
   * outsourcing the shipment. When provided, the optimizer weighs the cost of
   * assigning the shipment against the cost of keeping it unassigned and chooses a
   * solution with lower cost. In the solution, the `outsourcing_cost` of unassigned
   * shipments is added to the total cost of the solution.
   *
   * If the `outsourcing_cost` is not provided, which is to say that the shipment can
   * not be outsourced, then the optimizer tries to fulfill the shipment irrespective
   * of the cost incurred, subject to other constraints.
   *
   * Please note that `revenue` and `outsourcing_cost` can not be specified
   * simultaneously for a shipment. Also, the `outsourcing_cost` would override the
   * priority settings of the shipment.
   */
  outsourcing_cost?: number;

  /**
   * Describe the priority of this shipment. The valid values are in the range of
   * \[0, 100\]. Default value is 0.
   *
   * Please note that setting a priority will only decide whether this shipment will
   * be assigned or not, but has nothing to do with the sequence of fulfilling
   * shipments.
   */
  priority?: number;

  /**
   * Specify the revenue earned by completing this shipment. The optimizer uses the
   * `revenue` input to identify the potential profit earned by fulfilling this
   * shipment after taking into account the costs incurred to do so.
   * The`options.objective` and `vehicles.costs` input are taken into account to
   * identify the costs of fulfilling the shipment.
   *
   * In general, the optimizer will prefer fulfilling the tasks with higher profits
   * over the tasks with lower profits, should it need to reject some tasks in order
   * to honor other constraints. In case the profit from fulfilling a shipment is
   * negative, it will remain unassigned whatsoever.
   */
  revenue?: number;

  /**
   * Define the skills needed to complete the shipment. This attribute supports
   * multidimensional skills allowing users to add multiple skills for a shipment.
   *
   * Read more about the behavior of this attribute in the
   * [Multi-Dimensional Parameters](#multi-dimensional-parameters) section.
   */
  skills?: Array<number>;

  /**
   * Specify the dimensions and alignment configurations for the cargo associated
   * with the shipment. These inputs will be used to arrange the items into the
   * loading compartment of the vehicle to utilize the three-dimensional space. If a
   * shipment consists of several different items, each with its own dimensions,
   * please specify the final characteristics for the task: total height, total
   * depth, total width.
   *
   * Please note that vehicles which contain the `volume` input, will only be
   * considered for arranging such items.
   */
  volume?: Shipment.Volume;

  /**
   * An array of integers specifying the IDs of the zone(s) that this shipment
   * belongs to. The shipment can be fulfilled by all vehicles which are allowed to
   * complete tasks in the zone(s) assigned to this shipment. If the pickup and
   * delivery steps belong to different zones, then a vehicle should be allowed to
   * fulfil tasks in both zones to take up such shipments. Please note following
   * points about shipment zones:
   *
   * - If zone IDs are provided for any one of the shipments, then all other
   *   shipments should also be specified with zone IDs. Zone IDs provided here will
   *   override any zone geometries provided in the `zones` attribute and these IDs
   *   will be used for allocating appropriate vehicles.
   * - Shipment steps can be auto-allocated to zones if this parameter is not
   *   specified while the zone geometries (either `zones.geometry` or
   *   `zones.geofence_id`) are provided.
   * - Shipments not falling in any zones can be fulfilled by only those vehicles
   *   which are allowed to take up tasks outside zones as well. Refer to `vehicles`
   *   attribute for more information.
   */
  zones?: Array<number>;
}

export namespace Shipment {
  /**
   * Specify the details of the delivery step of the shipment.
   */
  export interface Delivery {
    /**
     * Indicate the ID of this shipment delivery step. An error will be reported if
     * there are duplicate IDs for multiple shipment deliveries. The IDs are case
     * sensitive. Please note `id` is mandatory when using the `shipments` attribute.
     */
    id: string;

    /**
     * Indicate the index of location for this shipment delivery. The index references
     * the locations present in the `location` array. The valid range of value is \[0,
     * length of `location` array).
     *
     * Please note `location_index` is mandatory when using the `shipment` attribute.
     */
    location_index: number;

    /**
     * Specify a custom description for the shipment delivery step.
     */
    description?: string;

    /**
     * It determines the allowable delay, in seconds, to begin a shipment delivery
     * after its designated time window has concluded. Please note that this parameter
     * would override the `constraint.max_visit_lateness` (global) if both are
     * specified.
     */
    max_visit_lateness?: number;

    /**
     * Specify any custom data that should be attached along with delivery fulfilment
     * details in the `step` attribute of the optimized solution. Users can leverage
     * this property to provide additional details/context when sharing information
     * about the delivery step with integrated systems (TMS, Fleet Management, Driver
     * dispatch etc).
     *
     * Please note that the `metadata` content must always be specified in a `key` :
     * `value` pair format, where the “key” is always a string.
     */
    metadata?: unknown;

    /**
     * Use this parameter to prioritize completing the shipment delivery relative to
     * certain other tasks. A task configured with a `sequence_order` of 2 will be done
     * after the task with `sequence_order` of 1, but before the task with
     * `sequence_order` of 3. Valid range of values for this input is \[0,100\].
     *
     * Please note that:
     *
     * - The shipment delivery's sequence order must be greater than or equal to its
     *   corresponding pickup's sequence order.
     * - Only the tasks within the same route are compared and ordered as per their
     *   `sequence_order`.
     * - Tasks without a `sequence_order` are not involved in the comparison.
     * - Following is the precedence of `sequence_order` when used along side some of
     *   the other constraints:
     *
     *   - `relations` are prioritized over `sequence_order` comparisons.
     *   - `sequence_order` will override `order_grouping` configurations.
     */
    sequence_order?: number;

    /**
     * Provide the time duration, in seconds, needed to complete the shipment delivery.
     * Default value is 0.
     */
    service?: number;

    /**
     * Specify the set-up duration, in seconds, for the delivery. `setup` is the
     * one-time effort needed apart from working on the original task- for example,
     * effort to record some information for compliance, or effort to set-up the
     * equipment, or perform any other action for completing all steps required to
     * fulfil the job.
     *
     * Please note that `setup` time is applied only once for a given task location.
     * `setup` time, unlike `service` time, is not repeated in case there are multiple
     * tasks at the same location.
     */
    setup?: number;

    /**
     * Describe time periods within which the shipment delivery should start. The time
     * periods should be expressed as a UNIX timestamp in seconds.
     *
     * Please note that the time periods should not overlap with each other and should
     * always follow the format of \[start_timestamp, end_timestamp\].
     */
    time_windows?: Array<Array<number>>;
  }

  /**
   * Specify the details of the pickup step of the shipment.
   */
  export interface Pickup {
    /**
     * Indicate the ID of this shipment pickup step. An error will be reported if there
     * are duplicate IDs for multiple shipment pick-ups. The IDs are case-sensitive.
     * Please note `id` is mandatory when using the `shipments` attribute.
     */
    id: string;

    /**
     * Indicate the index of the location for this shipment pickup. The index
     * references the locations present in the `location` array. The valid range of
     * value is \[0, length of `location` array).
     */
    location_index: number;

    /**
     * Specify a custom description for the shipment pickup step.
     */
    description?: string;

    /**
     * It determines the allowable delay, in seconds, to begin a shipment pickup after
     * its designated time window has concluded. Please note that this parameter would
     * override the `constraint.max_visit_lateness` (global) if both are specified.
     */
    max_visit_lateness?: number;

    /**
     * Specify any custom data that should be attached along with pickup fulfilment
     * details in the `steps` attribute of the optimized solution. Users can leverage
     * this property to provide additional details/context when sharing information
     * about the pickup step with integrated systems (TMS, Fleet Management, Driver
     * dispatch etc).
     *
     * Please note that the `metadata` content must always be specified in a`key` :
     * `value` pair format, where the “key” is always a string.
     */
    metadata?: unknown;

    /**
     * Use this parameter to prioritize completing the shipment pickup relative to
     * certain other tasks. A task configured with a `sequence_order` of 2 will be done
     * after the task with `sequence_order` of 1, but before the task with
     * `sequence_order` of 3. Valid range of values for this input is \[0,100\].
     *
     * Please note that:
     *
     * - The shipment pickups's sequence order must be lesser than or equal to its
     *   corresponding delivery's sequence order.
     * - Only the tasks within the same route are compared and ordered as per their
     *   `sequence_order`.
     * - Tasks without a `sequence_order` are not involved in the comparison.
     * - Following is the precedence of `sequence_order` when used along side some of
     *   the other constraints:
     *
     *   - `relations` are prioritized over `sequence_order` comparisons.
     *   - `sequence_order` will override `order_grouping` configurations.
     */
    sequence_order?: number;

    /**
     * Provide the time duration, in seconds, needed to complete the shipment pickup.
     * Default value is 0.
     */
    service?: number;

    /**
     * Specify the set-up duration, in seconds, for the pickup. `setup` is the one-time
     * effort needed apart from working on the original task- for example, effort to
     * record some information for compliance, or effort to set-up the equipment, or
     * perform any other action for completing all steps required to fulfil the job.
     *
     * Please note that `setup` time is applied only once for a given task location.
     * `setup` time, unlike `service` time, is not repeated in case there are multiple
     * tasks at the same location.
     */
    setup?: number;

    /**
     * Describe time periods within which the shipment pickup should be start. The time
     * periods should be expressed as a UNIX timestamp in seconds.
     *
     * Please note that the time periods should not overlap with each other and should
     * always follow the format of \[start_timestamp, end_timestamp\]
     */
    time_windows?: Array<Array<number>>;
  }

  /**
   * Specify the dimensions and alignment configurations for the cargo associated
   * with the shipment. These inputs will be used to arrange the items into the
   * loading compartment of the vehicle to utilize the three-dimensional space. If a
   * shipment consists of several different items, each with its own dimensions,
   * please specify the final characteristics for the task: total height, total
   * depth, total width.
   *
   * Please note that vehicles which contain the `volume` input, will only be
   * considered for arranging such items.
   */
  export interface Volume {
    /**
     * Refers to the orientation of the cargo in the loading compartment. It supports
     * the following values:
     *
     * - **" "** : A blank space to indicate that the dimension check for the cargo
     *   should be skipped. This is also the default value.
     * - **strict :** In this orientation, the cargo must fit within the vehicle’s
     *   dimensions exactly as is—no rotation is allowed. All dimensions of the cargo
     *   must be less than or equal to the corresponding dimensions of the vehicle. If
     *   any dimension exceeds that of the vehicle, the cargo cannot be loaded.
     * - **parallel :** With parallel orientation, the cargo can be rotated around any
     *   one of the axes to help it fit into the loading compartment. For example, if
     *   the cargo is wider than the vehicle, it can still be loaded by rotating it
     *   around the vertical axis (so the width aligns with the vehicle’s depth) or the
     *   horizontal axis (so the width aligns with the vehicle’s height). Using this
     *   orientation, even a cargo whose one dimension is larger than the corresponding
     *   dimension of the vehicle but smaller than other dimensions, can also be
     *   loaded.
     * - **fixed_bottom :** In this orientation, the cargo can only be rotated around
     *   the vertical axis, meaning its base stays fixed and it cannot be tilted or
     *   turned over. The height of the cargo remains aligned with the vehicle’s height
     *   and cannot be adjusted. As a result, if the cargo’s height exceeds the
     *   vehicle’s available height, it cannot be loaded into the compartment.
     */
    alignment?: '`strict`' | '`parallel`' | '`fixed_bottom`' | '`" "`';

    /**
     * Cargo length, in meters.
     */
    depth?: number;

    /**
     * Cargo height, in meters.
     */
    height?: number;

    /**
     * Cargo width, in meters.
     */
    width?: number;
  }
}

export interface V2RetrieveResultResponse {
  /**
   * Returns the `description` of the optimization job as given in the input POST
   * optimization request. This field will not be present in the response if no
   * `description` was provided in the input request.
   */
  description?: string;

  /**
   * Returns the message in case of errors or failures, otherwise a blank string is
   * returned.
   */
  message?: string;

  /**
   * An object containing the details of the optimized routes.
   */
  result?: V2RetrieveResultResponse.Result;

  /**
   * It indicates the overall status or result of the API request denoting whether
   * the operation was successful or did it encounter any errors.
   */
  status?: '`Ok`' | '`Error`';
}

export namespace V2RetrieveResultResponse {
  /**
   * An object containing the details of the optimized routes.
   */
  export interface Result {
    /**
     * A custom code representing the status of the result. A code other than 0,
     * represents an internal error. In case of codes other than 0, please verify the
     * parameter values, constraints and locations. If the issue does not resolve,
     * please reach out to NextBillion at
     * [support@nextbillion.ai](mailto:support@nextbillion.ai).
     */
    code?: number;

    /**
     * Returns the error message for unfulfilled optimization jobs. This field will not
     * be present in the response in case there are no errors.
     */
    error?: string;

    /**
     * An array of objects containing the details of each route in the optimized
     * solution. Each object represents one route.
     */
    routes?: Array<Result.Route>;

    /**
     * Returns all the routing profiles used in the solution. If no routing profiles
     * were provided in the input or if the vehicles tagged to profiles were not used
     * in the solution, the "default" routing properties are returned. Default routing
     * properties are indicated by `options.routing` in the input.
     */
    routing_profiles?: unknown;

    /**
     * An object to describe the summarized result of the optimization request. This
     * object can be useful to quickly get an overview of the important result
     * parameters.
     */
    summary?: Result.Summary;

    /**
     * An array of objects containing the details of unassigned tasks in the optimized
     * solution. Each object represents one task.
     */
    unassigned?: Array<Result.Unassigned>;
  }

  export namespace Result {
    export interface Route {
      /**
       * Returns the capacity configuration of the vehicle that was used for this route.
       * This field would return either the vehicle's `capacity` or one of the
       * `alternative_capacities` provided in the input request.
       */
      adopted_capacity?: Array<number>;

      /**
       * Returns the cost of the route. The unit of cost type depends on the value of
       * `travel_cost` attribute in the optimization request.
       */
      cost?: number;

      /**
       * Returns the total quantities, for each dimension (or unit), of deliveries
       * performed in the route. Please note that when both `shipments` and `jobs` are
       * provided, this field corresponds to the sum of quantities delivered as part of
       * the assigned `shipments` and `jobs` on the route.
       */
      delivery?: Array<number>;

      /**
       * Return the description of the assigned vehicle. It would be the same as that
       * provided in the `description` field of `vehicles` part of the input POST
       * optimization request.
       */
      description?: string;

      /**
       * Returns the total distance of the route, in meters.
       */
      distance?: number;

      /**
       * Returns the total drive duration of the route, in seconds.
       */
      duration?: number;

      /**
       * Returns the geometry of this route encoded in polyline format.
       */
      geometry?: string;

      /**
       * Returns the custom information that was provided when the vehicle was
       * configured. This field would not be present for the vehicles that were not
       * provided with any metadata.
       */
      metadata?: unknown;

      /**
       * Returns the total quantities, for each dimension (or unit), of pickups performed
       * in the route. Please note that when both `shipments` and `jobs` are provided,
       * this field corresponds to the sum of quantities picked-up as part of the
       * assigned `shipments` and `jobs` on the route.
       */
      pickup?: Array<number>;

      /**
       * Returns the sum of priorities of all tasks on the route.
       */
      priority?: number;

      /**
       * Returns the profile of the vehicle.
       */
      profile?: string;

      /**
       * Returns the revenue earned by fulfilling the task on this route. Please note
       * this field is present only when the revenue inputs are provided in the input,
       * otherwise it is not present in the response.
       */
      revenue?: number;

      /**
       * Returns the total service time spent on the tasks or depots on the route, in
       * seconds.
       */
      service?: number;

      /**
       * Returns the total setup time, in seconds, for the tasks assigned on the route.
       */
      setup?: number;

      /**
       * This attribute contains the details of all the steps involved in the route. It
       * is an array of objects with each object representing one step.
       */
      steps?: Array<Route.Step>;

      /**
       * Returns the ID of the vehicle that was assigned to the route. The value type
       * will be same as the value type provided in the input request.
       */
      vehicle?: string;

      /**
       * Returns the total vehicle overtime for the route, in seconds. Please note this
       * field is present only when there is a non-zero value for vehicle overtime,
       * otherwise it is not present in the response.
       */
      vehicle_overtime?: number;

      /**
       * Returns the total waiting time of the vehicle on the route, in seconds.
       */
      waiting_time?: number;
    }

    export namespace Route {
      /**
       * This attribute contains the details of all the steps involved in the route. It
       * is an array of objects with each object representing one step.
       */
      export interface Step {
        /**
         * Returns the ID of the task. The ID returned here are the same values that were
         * provided for the given task in the `jobs` or the `shipments` objects of the
         * input POST optimization request.
         *
         * **Note:** Since both integer and string value types are supported for job IDs,
         * the value type returned for this field will depend on the value type provided in
         * the input request.
         */
        id?: string;

        /**
         * Returns the time at which the vehicle arrives at the `step` location. If
         * `time_windows` is provided for the task it will be returned as an UNIX timestamp
         * expressed in seconds. When `time_windows` is not provided, it is returned as the
         * total duration, in seconds, elapsed since the start of the route.
         *
         * Please note it includes all the other durations as well (setup, service,
         * waiting).
         */
        arrival?: number;

        /**
         * For step type "start" or "end", this field returns the ID of the depot relevant
         * to that step. For "start" steps, the field will contain the ID of the depot from
         * which the vehicle commenced its journey. Conversely, for "end" steps, the field
         * will hold the ID of the depot where the vehicle concluded its trip.
         *
         * Please note that `start_depot_ids` or `end_depot_ids` input for the vehicle must
         * be configured to get this field in the response for respective step types in a
         * route.
         */
        depot?: string;

        /**
         * Returns the description of this step. The description returned here are the same
         * values that were provided for the given task in the `jobs` or the `shipments`
         * objects of the input POST optimization request.
         */
        description?: string;

        /**
         * Returns the distance covered, in meters, from the start of the route and up
         * until the current step.
         *
         * Please note that the value of this parameter accumulates with each step. In case
         * , the `travel_cost: air_distance`, then the distance here represents straight
         * line distance.
         */
        distance?: number;

        /**
         * Returns the total drive time, in seconds, from the start of the route up until
         * the start of the `step`. Please note that this value does not include any other
         * category of durations (service, wait, setup) and the value of this parameter
         * accumulates with each step.
         */
        duration?: number;

        /**
         * Returns the amount of time, in seconds, by which the vehicle is late when
         * arriving at this step. Please note this field is present only when there is a
         * non-zero value for vehicle lateness, otherwise it is not present in the
         * response.
         */
        late_by?: string;

        /**
         * Returns the load on the vehicle after completing this step. In case of multiple
         * dimensions, loads of each type are returned by a matching number of elements in
         * the array.
         */
        load?: Array<number>;

        /**
         * Returns the location coordinates of the step in the \[latitude, longitude\]
         * format.
         *
         * The index of this location is also returned by the `location_index` parameter.
         */
        location?: Array<number>;

        /**
         * Returns the index (in the `location` array) of the location coordinates where
         * the step is performed. The index will always be in the range of \[0, length of
         * `location` array).
         *
         * Actual coordinates are also returned by the `location` parameter.
         */
        location_index?: number;

        /**
         * Returns the custom information that was provided when the given task (job /
         * pickup / delivery) was configured. This field would not be present for the tasks
         * that were not provided with any metadata. It will also be not present for
         * “start” and “end” steps.
         */
        metadata?: unknown;

        /**
         * In case this step is part of a task group, this field returns the location
         * coordinates of the point, in \[latitude, longitude\] format, which was used as a
         * common stop for all grouped tasks.
         */
        projected_location?: Array<number>;

        /**
         * When a vehicle is configured to make multiple runs to the depot (via
         * `max_depot_runs`), this field returns the iteration to which the step belongs
         * to. Each run will begin with a "start" step from the depot's location and
         * conclude with an "end" step at either the last task's or the configured end
         * location.
         */
        run?: number;

        /**
         * Returns the service time, in seconds, for the task when the step type is not
         * `start` or `end`.
         *
         * When the step type is `start` or `end` , the field also returns the service
         * time, in seconds, spent at the depot when if the vehicle is starting or
         * completing the trip at one of the depots.
         */
        service?: number;

        /**
         * Returns the setup time, in seconds, for the task.
         */
        setup?: number;

        /**
         * Returns the coordinates after snapping the location of this step to a nearby
         * road. Please note that this field will not be available in the response when
         * custom duration or distance matrix were used for cost calculations.
         */
        snapped_location?: Array<number>;

        /**
         * Returns the type of the step. Its value will always be one of the following:
         * `start`, `job`, `pickup`, `delivery`, `end`. In case the type is `start` or
         * `end`, `steps` object will not have the `id` field.
         */
        type?: string;

        /**
         * Returns the wait time of the vehicle at this step, in seconds.
         */
        waiting_time?: number;
      }
    }

    /**
     * An object to describe the summarized result of the optimization request. This
     * object can be useful to quickly get an overview of the important result
     * parameters.
     */
    export interface Summary {
      /**
       * Returns the total cost of all the routes returned in the solution. The unit of
       * cost type depends on the value of `travel_cost` attribute in the optimization
       * request.
       */
      cost?: number;

      /**
       * Returns the sum of all quantities that were delivered in the optimized solution.
       * If quantities of different dimensions were delivered, then a matching number of
       * elements is returned in the `delivery` array.
       *
       * Please note that when both `shipments` and `jobs` are provided, this field
       * corresponds to the sum of quantities delivered as part of all the assigned
       * `shipments` and `jobs` .
       */
      delivery?: Array<number>;

      /**
       * Returns the total distance of all routes, in meters. It is equal to the sum of
       * distances of individual routes.
       */
      distance?: number;

      /**
       * Returns the total drive time, in seconds, needed to cover all routes. Please
       * note that it does not include the service, setup or the waiting durations
       * elapsed on these routes.
       */
      duration?: number;

      /**
       * Returns the total number of tasks across all routes that failed to start within
       * their scheduled time windows.
       */
      num_late_visits?: number;

      /**
       * Returns the sum of all quantities that were picked-up in the optimized solution.
       * If quantities of different dimensions were picked-up, then a matching number of
       * elements is returned in the `pickup` array.
       *
       * Please note that when both `shipments` and `jobs` are provided, this field
       * corresponds to the sum of quantities picked-up as part of all the assigned
       * `shipments` and `jobs` .
       */
      pickup?: Array<number>;

      /**
       * Returns the sum of priorities of all tasks that were assigned.
       */
      priority?: number;

      /**
       * Returns the revenue earned by completing all the assigned tasks. Overall profit
       * earned by following the suggested route plan can be inferred by subtracting the
       * `cost` of the solution from the reported `revenue`.
       */
      revenue?: number;

      /**
       * Returns the total number of routes in the solution.
       */
      routes?: number;

      /**
       * Returns the total service time, in seconds, for all the routes in the solution.
       * It is equal to the sum of service time of individual tasks that were assigned
       * and the time spent loading/unloading items at designated depots by all vehicles.
       */
      service?: number;

      /**
       * Returns the total setup time, in seconds, of all assigned tasks. It is equal to
       * the sum of setup time of individual tasks that were assigned.
       */
      setup?: number;

      /**
       * Returns the total duration, in seconds, that tasks across all routes were
       * delayed from starting after their scheduled time windows had passed.
       */
      total_visit_lateness?: number;

      /**
       * Returns the number of unfulfilled tasks in the solution.
       */
      unassigned?: number;

      /**
       * Returns the sum of durations spent waiting, in seconds, by vehicles on all
       * routes.
       */
      waiting_time?: number;
    }

    export interface Unassigned {
      /**
       * Returns the ID of the unassigned task. The ID returned is the same as that
       * provided for the given task in the `jobs` or the `shipments` part in the input
       * POST optimization request.
       *
       * **Note:** Since both integer and string value types are supported for task IDs,
       * the value type returned for this field will depend on the value type provided in
       * the input request for the unassigned task.
       */
      id?: string;

      /**
       * Returns the location of the unassigned tasks in the \[latitude, longitude\]
       * format.
       */
      location?: Array<number>;

      /**
       * Returns the cost of outsourcing the task. This is the same value as provided in
       * the input. The field is present only if a `outsourcing_cost` was provided for
       * the unassigned task.
       */
      outsourcing_cost?: number;

      /**
       * Returns the most likely reason due to which the task remained unassigned. The
       * optimization service can capture the following causes of tasks remaining
       * unassigned, among others:
       *
       * - unmatched `skills` of the tasks
       * - insufficient `capacity` of vehicle to accommodate the tasks
       * - `time_window` requirements of the tasks or the vehicles
       * - violation of vehicle’s `max_activity_waiting_time` constraint
       * - violation of vehicle’s `max_tasks` or `max_stops` constraints
       * - violation of vehicle’s `max_distance` or `max_travel_time` constraints
       * - task unassigned due to zone constraints
       * - task unassigned due to depot constraints
       * - task unassigned due to load type incompatibility constraints
       * - task unassigned due to max time in vehicle constraint
       * - task unassigned as it is unprofitable
       * - task unassigned due to low outsourcing cost
       * - task unassigned due to infeasible conditions specified in `relations`
       *   attribute
       */
      reason?: string;

      /**
       * Returns the type of the task that was unassigned. Will always belong to one of
       * `job`, `pickup`, or `delivery`.
       */
      type?: string;
    }
  }
}

export interface V2RetrieveResultParams {
  /**
   * The unique ID that was returned on successful submission of the Optimization
   * POST request.
   */
  id: string;

  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export interface V2SubmitParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: The `locations` object is used to define all the locations that will
   * be used during the optimization process. Read more about this attribute in the
   * [Location Object](#location-object) section.
   */
  locations: V2SubmitParams.Locations;

  /**
   * Body param: The `vehicles` attribute describes the characteristics and
   * constraints of the vehicles that will be used for fulfilling the tasks. Read
   * more about this attribute in the [Vehicle Object](#vehicle-object) section.
   */
  vehicles: Array<DriverAssignmentAPI.Vehicle>;

  /**
   * Body param: An array of arrays to denote the user-defined costs of traveling
   * between each pair of geographic coordinates mentioned in the `location` array.
   * The number of arrays should be equal to the number of coordinate points
   * mentioned in the `location` array and each array should contain the same number
   * of elements as well. Please note that `cost_matrix` is effective only when
   * `travel_cost=customized`. Read more about this attribute in the
   * [Custom Cost Matrix](#custom-cost-matrix) section.
   */
  cost_matrix?: Array<Array<number>>;

  /**
   * Body param: `depots` object is used to collect the details of a depot. Depots
   * can be used as a starting point and/or ending point for the routes and vehicles.
   * They also can be used to fulfil pickup and delivery type`jobs` . The loads which
   * are to be delivered at task locations will be picked from depots and loads
   * picked-up from task locations will be delivered back to the depots. A depot can
   * be configured using the following fields:
   */
  depots?: Array<V2SubmitParams.Depot>;

  /**
   * Body param: Define the optimization job using any custom message. This
   * description is returned as is in the response.
   */
  description?: string;

  /**
   * Body param: An array of arrays to denote the user-defined distances, in meters,
   * for travelling between each pair of geographic coordinates mentioned in the
   * `location` array. When this input is provided, actual distances between the
   * locations will be ignored in favor of the values provided in this input for any
   * distance calculations during the optimization process. The values provided here
   * will also be used for cost calculations when `travel_cost` is “distance”.
   *
   * The number of arrays in the input should be equal to the number of coordinate
   * points mentioned in the `location` array and each array, in turn, should contain
   * the same number of elements as well.
   *
   * **Note:**
   *
   * - `duration_matrix` is mandatory when using`distance_matrix`.
   * - When using `distance_matrix` route geometry will not be available in the
   *   optimized solution.
   */
  distance_matrix?: Array<Array<number>>;

  /**
   * Body param: An array of arrays to denote the user-defined durations, in seconds,
   * for travelling between each pair of geographic coordinates mentioned in the
   * `location` array. When this input is provided, actual durations between the
   * locations will be ignored in favor of the values provided in the matrix for any
   * ETA calculations during the optimization process. The values provided in the
   * matrix will also be used for cost calculations when `travel_cost` is “duration”.
   *
   * The number of arrays in the input should be equal to the number of coordinate
   * points mentioned in the `location` array and each array, in turn, should contain
   * the same number of elements as well.
   *
   * Please note that, unlike `distance_matrix`, `duration_matrix` can be used
   * independently in following cases:
   *
   * - when `travel_cost` is “duration”
   * - when `travel_cost` is “customized” and a `cost_matrix` is provided
   *
   * Also, the route geometry will not be available in the optimized solution when
   * using `duration_matrix`.
   */
  duration_matrix?: Array<Array<number>>;

  /**
   * Body param: The previous optimization request id used to retrieve solution for
   * reoptimization
   */
  existing_solution_id?: string;

  /**
   * Body param: `jobs` object is used to collect the details of a particular job or
   * task that needs to be completed as part of the optimization process. Each job
   * can have either a `pickup` or `delivery` step, but not both. Read more about
   * this attribute in the [Job Object](#job-object) section.
   *
   * Please note that either the `jobs` or the `shipments` attribute should be
   * specified to build a valid request.
   */
  jobs?: Array<Job>;

  /**
   * Body param: It represents the set of options that can be used to configure
   * optimization algorithms so that the solver provides a solution that meets the
   * desired business objectives.
   */
  options?: V2SubmitParams.Options;

  /**
   * Body param: `relations` attribute is an array of individual relation objects.
   * `type` parameter and `steps` object are mandatory when using this attribute.
   *
   * Please note:
   *
   * - The soft constraints are **not** effective when using the `relations`
   *   attribute.
   * - In case a given relation can't be satisfied, the optimizer will flag all the
   *   tasks involved in that "relation" as unassigned.
   *
   * Read more about this attribute in the [Relations Object](#relations-object)
   * section.
   */
  relations?: Array<V2SubmitParams.Relation>;

  /**
   * Body param: The `shipments` object is used to collect the details of shipments
   * that need to be completed as part of the optimization process.
   *
   * Each shipment should have a pickup and the corresponding delivery step.
   *
   * Please note that either the `jobs` or the `shipments` attribute should be
   * specified to build a valid request.
   */
  shipments?: Array<Shipment>;

  /**
   * Body param: This attribute is related to the re-optimization feature. It allows
   * for the previous optimization result to be provided in case new orders are
   * received and the solution needs to be re-planned. The `solution` attribute
   * should contain the same routes as the previous optimization result. `solution`
   * attribute is an array of objects with each object corresponding to one route.
   */
  solution?: Array<V2SubmitParams.Solution>;

  /**
   * Body param: `unassigned` attribute is related to the re-optimization feature.
   * This attribute should contain the tasks that were not assigned during an earlier
   * optimization process. Please note that the `unassigned` part in request should
   * be consistent with the `unassigned` part in the previous optimization result.
   *
   * Users can reduce the number of unassigned tasks in the re-optimized solution, by
   * following strategies such as:
   *
   * - Extending the time windows for vehicles or tasks to give more flexibility
   * - Adding more vehicles to the optimization problem
   * - Adjusting the priority of different tasks to balance the workload more evenly
   * - Modifying other constraints or parameters to make the problem more solvable
   *
   * Ultimately, the goal is to minimize the number of unassigned tasks while still
   * meeting all the necessary constraints and objectives.
   */
  unassigned?: V2SubmitParams.Unassigned;

  /**
   * Body param: An array of objects to specify geometry of all the zones involved.
   * Each object corresponds to a single zone. A valid zone can be a
   * [geoJSON](https://datatracker.ietf.org/doc/html/rfc7946#page-9) polygon,
   * multi-polygon or a geofence created using
   * [NextBillion.ai](http://NextBillion.ai)’s
   * [Geofence API](https://docs.nextbillion.ai/docs/tracking/api/geofence).
   *
   * Please note that
   *
   * - Each zone should have a geometry specified either through`geometry` or through
   *   the `geofence_id` parameter.
   * - When zone IDs are not provided for individual tasks (jobs or shipments) then
   *   the API will automatically allocate zones based on the task’s geolocation and
   *   the geometries of the zones provided here. Otherwise, if the zone IDs are
   *   provided while configuring individual tasks, the zone IDs will override the
   *   geometries provided here.
   */
  zones?: Array<V2SubmitParams.Zone>;
}

export namespace V2SubmitParams {
  /**
   * The `locations` object is used to define all the locations that will be used
   * during the optimization process. Read more about this attribute in the
   * [Location Object](#location-object) section.
   */
  export interface Locations {
    /**
     * Indicate all the location coordinates that will be used during optimization. The
     * coordinates should be specified in the format “latitude, longitude”. It is
     * recommended to avoid adding duplicate location coordinates to this array. In
     * case there are multiple tasks at the same location, users can repeat the index
     * of the location while configuring all such tasks.
     *
     * Please use this array to determine the index of a location when setting the
     * `location_index` parameter in `jobs`, `shipments`, `vehicles` or other parts of
     * the request. The length of this array determines the valid values for
     * `location_index` parameter.
     */
    location: Array<string>;

    /**
     * A unique ID for the set of locations. It should be a positive integer.
     */
    id?: number;

    /**
     * Describe if the location is curbside. An array of strings indicates the side of
     * the road from which to approach the location in the calculated route. If
     * provided, the number of approaches must be equal to the number of locations.
     * However, you can skip a coordinate and show its position in the list using “”
     * (empty string). Please note these values are case-sensitive.
     */
    approaches?: Array<'`unrestricted`' | '`curb`' | '""(empty string)'>;
  }

  export interface Depot {
    /**
     * Provide an unique ID for the depot. The IDs are case sensitive.
     */
    id: string;

    /**
     * Specify the index of coordinates (in the `location` array) denoting the depot’s
     * location. The valid range of values is \[0, length of `location` array). If the
     * location index exceeds the count of input locations in the `location` array, the
     * API will report an error.
     *
     * Please note the `location_index` is mandatory when using the `depots` object.
     */
    location_index: number;

    /**
     * Add a custom description for the depot.
     */
    description?: string;

    /**
     * Specify the time duration, in seconds, needed to load or unload the vehicle each
     * time it starts or arrives at a depot, respectively. Default value is 0.
     */
    service?: number;

    /**
     * Specify the time-windows during which the depot is operational and allows
     * vehicles to be loaded / unloaded. The time periods should be expressed as a UNIX
     * timestamp in seconds.
     *
     * Please note that:
     *
     * - Multiple time-windows can be provided but those time windows should not
     *   overlap with each other.
     * - Time windows should always be specified in the format of \[start_timestamp,
     *   end_timestamp\].
     * - Depot's time-windows are ineffective used when `max_activity_waiting_time` is
     *   specified in the input.
     * - Using `relations` along with depot time-window is not allowed and the service
     *   will return an error.
     */
    time_windows?: Array<Array<number>>;
  }

  /**
   * It represents the set of options that can be used to configure optimization
   * algorithms so that the solver provides a solution that meets the desired
   * business objectives.
   */
  export interface Options {
    /**
     * This attribute defines both the soft and hard constraints for an optimization
     * job.
     *
     * Soft constraints are constraints that do not necessarily have to be satisfied,
     * but the optimization algorithm will try to satisfy them as much as possible.
     * Whereas the hard constraints are the constraints that will not be violated by
     * the solver. Users can use multiple constraints together.
     *
     * Please note that soft constraints are ineffective when using `relations`
     * attribute in a request. The hard constraint, `max_activity_waiting_time`, is
     * effective only when relation type is `in_same_route` and ineffective for all
     * other types.
     */
    constraint?: Options.Constraint;

    /**
     * Set grouping rules for the tasks and routes.
     *
     * - Use `order_grouping` to group nearby tasks
     * - Use `route_grouping` to control route sequencing.
     */
    grouping?: Options.Grouping;

    /**
     * This attribute is used to configure the objective of the optimization job.
     */
    objective?: Options.Objective;

    /**
     * This attribute is used to define the routing configurations for the optimization
     * job.
     */
    routing?: Options.Routing;
  }

  export namespace Options {
    /**
     * This attribute defines both the soft and hard constraints for an optimization
     * job.
     *
     * Soft constraints are constraints that do not necessarily have to be satisfied,
     * but the optimization algorithm will try to satisfy them as much as possible.
     * Whereas the hard constraints are the constraints that will not be violated by
     * the solver. Users can use multiple constraints together.
     *
     * Please note that soft constraints are ineffective when using `relations`
     * attribute in a request. The hard constraint, `max_activity_waiting_time`, is
     * effective only when relation type is `in_same_route` and ineffective for all
     * other types.
     */
    export interface Constraint {
      /**
       * This is a hard constraint which specifies the maximum waiting time, in seconds,
       * for each `step`. It ensures that the vehicles do not have unreasonable wait
       * times between jobs or shipments. This feature is useful for use cases where
       * avoiding long wait times between jobs or shipments is a primary concern.
       *
       * Please note that the waiting time constraint applies to all tasks in the
       * optimization request, ensuring that no single task exceeds the specified maximum
       * waiting time. When being used together with `relations` attribute, this
       * parameter is effective only for `in_same_route` relation type.
       */
      max_activity_waiting_time?: number;

      /**
       * This is a soft constraint for vehicle overtime. Overtime is defined as the time
       * that a vehicle spends to complete a set of jobs after its time window has ended.
       * `max_vehicle_overtime` attribute specifies the maximum amount of overtime a
       * vehicle can have, in seconds. If a vehicle’s overtime exceeds this value, it
       * will be considered a violation of this constraint.
       *
       * Please note that this constraint applies to all vehicles in the optimization
       * request.
       */
      max_vehicle_overtime?: number;

      /**
       * This is a soft constraint for permissible delay, in seconds, to complete a job
       * or shipment after its time window is over. If a job or shipment’s lateness
       * exceeds this value, it will be considered a violation of this constraint.
       *
       * Please note that this constraint applies to all tasks in the optimization
       * request. In case lateness duration needs to be applied for individual tasks,
       * please use the `max_visit_lateness` parameter under `jobs` and `shipments`
       */
      max_visit_lateness?: number;
    }

    /**
     * Set grouping rules for the tasks and routes.
     *
     * - Use `order_grouping` to group nearby tasks
     * - Use `route_grouping` to control route sequencing.
     */
    export interface Grouping {
      /**
       * Specify the criteria for grouping nearby tasks. The grouped tasks will be
       * treated as one stop by the optimizer and no cost would be incurred when driver
       * travels to different tasks within a group. Users can use this feature to model
       * use cases like multiple deliveries in a building complex or a condo.
       *
       * Please note that when the multiple tasks are grouped together, only one setup
       * time is considered for all such tasks. The durations of this setup time is equal
       * to maximum setup time among all grouped tasks, if provided. On the other hand,
       * the service time is applied to each task individually, as per the input provided
       * when configuring those tasks.
       */
      order_grouping?: Grouping.OrderGrouping;

      /**
       * When specified, routes are built taking into account the distance to the nearest
       * tasks. A higher proximity factor helps build routes with closer distances
       * between neighboring tasks, whereas a lower proximity factor helps build routes
       * with farther distances between neighboring tasks. As a result, the total number
       * of routes in the solution can vary based on the configured proximity factor -
       * more routes for higher factor and less routes with lower factor.
       *
       * In practice, such routes are more resistant to changes in task time windows:
       * when the time window is postponed, the driver can drive to the next task and
       * then return to the previous one.
       *
       * Please note that:
       *
       * - Valid values are \[0,10\]
       * - Default value is 0.0.
       * - It is recommended to use values lower values, in the range of \[0, 1\]. Higher
       *   values may adversely impact the solution metrics due to higher number of
       *   resulting routes: costs, mileage etc.
       */
      proximity_factor?: number;

      /**
       * Specify the criteria for prioritising routes in a zone over routes that are part
       * of another zone. As a result, all the tasks falling in a zone will be fulfilled
       * before any tasks that are part of a different zone.
       */
      route_grouping?: Grouping.RouteGrouping;
    }

    export namespace Grouping {
      /**
       * Specify the criteria for grouping nearby tasks. The grouped tasks will be
       * treated as one stop by the optimizer and no cost would be incurred when driver
       * travels to different tasks within a group. Users can use this feature to model
       * use cases like multiple deliveries in a building complex or a condo.
       *
       * Please note that when the multiple tasks are grouped together, only one setup
       * time is considered for all such tasks. The durations of this setup time is equal
       * to maximum setup time among all grouped tasks, if provided. On the other hand,
       * the service time is applied to each task individually, as per the input provided
       * when configuring those tasks.
       */
      export interface OrderGrouping {
        /**
         * Specify the straight line distance, in meters, which will be used to identify
         * the tasks that should be grouped together. The default value is `null`.
         */
        grouping_diameter?: number;
      }

      /**
       * Specify the criteria for prioritising routes in a zone over routes that are part
       * of another zone. As a result, all the tasks falling in a zone will be fulfilled
       * before any tasks that are part of a different zone.
       */
      export interface RouteGrouping {
        /**
         * Specify a non-negative value which indicates the penalty of crossing zones on
         * the same route. Default penalty value is 0.
         *
         * A higher value, for example 30.0, will place a higher penalty on zone violations
         * and hence push the optimizer to prefer a solution without any zone violations,
         * where all tasks in a single region are fulfilled before any tasks in other
         * regions or outside the current region. Whereas a lower value, say 5.0, will
         * place a lower penalty allowing the optimizer to return solutions which may have
         * few violations, say a couple of routing zone violations in our example. A still
         * lower penalty factor, like 1.0, may have several zone violations.
         */
        penalty_factor?: number;

        /**
         * Specify the diameter of the zone, routes within which will be prioritised before
         * routes falling in other zones. Please note that `zone_diameter` is the straight
         * line distance, in meters.
         */
        zone_diameter?: number;

        /**
         * Specify the source for creating boundaries of the routing zones. The default
         * value is “system_generated”.
         *
         * - system_generated - Routing zone boundaries are created automatically by the
         *   optimizer based on the `zone_diameter` provided.
         * - custom_definition - Custom routing zone boundaries should be provided by the
         *   user in input using the `zones` attribute. An error would be returned if the
         *   `zones` attribute is null or missing in the input request.
         */
        zone_source?: '`system_generated`' | '`custom_definition`';
      }
    }

    /**
     * This attribute is used to configure the objective of the optimization job.
     */
    export interface Objective {
      /**
       * Choose where the optimizer should schedule the driver’s wait time. When set to
       * `true` the driver waits at the location of the task until its time window allows
       * him to start the task. When set to `false` the driver waits at the location of
       * the previous task and starts driving only at such a time that makes him arrive
       * at the next task location in time to start the task as soon as he reaches.
       */
      allow_early_arrival?: boolean;

      /**
       * The `custom` parameter is used to define special objectives apart from the
       * simpler travel cost minimization objectives.
       */
      custom?: Objective.Custom;

      /**
       * Specify whether to minimize the number of depots used in optimization routes.
       */
      minimise_num_depots?: boolean;

      /**
       * If the input doesn’t include features of soft constraints, customized
       * objectives, re-optimization, relations, max travel cost or automatic fixed cost,
       * then user can select “optimal” to achieve a higher-speed and higher-quality
       * optimization.
       *
       * If “optimal” mode is unable to process some features in the input, then it will
       * still goes to “flexible” mode.
       */
      solver_mode?: '`flexible`' | '`fast`' | '`internal`';

      /**
       * Specify the number of seconds within which the optimizer should ideally solve
       * the optimization request.
       *
       * Please note that:
       *
       * - In case the specified time limit is not enough to generate a solution for a
       *   given problem set, the optimizer will continue processing until it arrives at
       *   a solution.
       * - It is recommended to specify a duration of at least 5-7 minutes in case the
       *   input problem contains a large set of tasks or vehicles.
       */
      solving_time_limit?: number;

      /**
       * The `travel_cost` parameter specifies the type of cost used by the solver to
       * determine the routes.
       *
       * If the `travel_cost` parameter is set to `distance`, the solver will minimize
       * the total distance traveled by vehicles while determining a solution. This
       * objective would be useful in cases where the primary objective is to reduce fuel
       * consumption or travel expenses.
       *
       * If the `travel_cost` parameter is set to `duration`, the solver will minimize
       * the total time taken by the vehicles to complete all tasks while determining a
       * solution. This objective would be useful in cases where the primary objective is
       * to minimize completion time or maximize the number of orders fulfilled within a
       * given time window.
       *
       * If the `travel_cost` parameter is set to `air_distance`, the solver will try to
       * calculate the distance,in meters, between two points using the great-circle
       * distance formula (i.e., the shortest distance between two points on a sphere)
       * instead of the actual road distance. This would be useful in cases where the
       * delivery locations are far apart and the road distance between them is
       * significantly longer than the actual straight-line distance. For example, in
       * Drone Delivery services.
       *
       * If the `travel_cost` is set to `customized` the solver would use the custom cost
       * values provided by the user (in `cost_matrix` attribute) and prefer a solution
       * with lower overall cost. This enables the user to have greater control over the
       * routes preferred by the solver and hence the sequence in which the jobs are
       * completed.
       */
      travel_cost?: '`duration`' | '`distance`' | '`air_distance`' | '`customized`';
    }

    export namespace Objective {
      /**
       * The `custom` parameter is used to define special objectives apart from the
       * simpler travel cost minimization objectives.
       */
      export interface Custom {
        /**
         * The `type` parameter accepts two inputs:
         *
         * - `min`: This type of customized objective will minimize the metric provided in
         *   the `value` parameter.
         * - `min-max`: This type of customized objective will approximate an even
         *   distribution of the metric provided in the `value` parameter, among all the
         *   routes in solution.
         *
         * Please note that `type` is mandatory only when using `custom` attribute.
         */
        type: '`min`' | '`min-max`';

        /**
         * The `value` parameter accepts four inputs, two of them are valid for `min` type
         * and other two are valid for `min-max` type custom objective. Let’s look at the
         * values for `min` type objective:
         *
         * - `vehicles`: Solver will minimize the number of vehicles used in the solution.
         * - `completion_time`: Solver will minimize the total time taken to complete all
         *   tasks.
         *
         * The next set of values are acceptable when `type` is set to `min-max`.
         *
         * - `tasks`: Solver will evenly distribute the tasks on each route.
         * - `travel_cost`: Solver will assign tasks such that the traveling cost of each
         *   route is within a close range of other routes. The travel cost metric
         *   considered here is the one set using `objective.travel_cost` .
         *
         * Please note that `value` is mandatory only when using `custom` attribute. The
         * above values provide flexibility to tune the optimization algorithm to fulfill
         * practical objectives beyond the relatively simpler time or distance minimization
         * approaches.
         */
        value: '`vehicles`' | '`completion_time`' | '`travel_cost`' | '`tasks`';
      }
    }

    /**
     * This attribute is used to define the routing configurations for the optimization
     * job.
     */
    export interface Routing {
      allow?: Array<'taxi' | 'hov'>;

      /**
       * Specify the type of objects/maneuvers that the route should avoid.
       *
       * Please note that:
       *
       * - The values are case-sensitive.
       * - When using `avoid:bbox` feature, users need to specify the boundaries of the
       *   bounding box to be avoided. Multiple bounding boxes can be provided
       *   simultaneously. Please note that bounding box is a hard filter and if it
       *   blocks all possible routes between given locations, a 4xx error is returned.
       *   Mention the bounding box boundaries in the following format: bbox:
       *   min_latitude,min_longitude,max_latitude,max_longitude.
       * - When using `avoid=sharp_turn`, the range of allowed turn angles is \[120,240\]
       *   in the clockwise direction from the current road. Any roads with turn angles
       *   outside the range will be avoided.
       * - If `none` is provided along with other values, an error is returned as a valid
       *   route is not feasible.
       */
      avoid?: Array<
        | '`toll`'
        | '`highway`'
        | '`bbox`'
        | '`left_turn`'
        | '`right_turn`'
        | '`sharp_turn`'
        | '`uturn`'
        | '`service_road`'
        | '`ferry`'
        | '`none` '
      >;

      /**
       * Use this parameter to apply a single speed value for all ETA and drive time
       * calculations. In case, the `travel_cost` is set to duration then setting this
       * parameter also impacts the cost of the solution.
       */
      context?: '`avgspeed`';

      /**
       * Specify if crossing an international border is allowed for operations near
       * border areas. When set to false, the API will prohibit any routes crossing
       * international borders. When set to true, the service will return routes which
       * cross the borders between countries, if required for the given set `locations`
       *
       * This feature is available in North America region only. Please get in touch with
       * [support@nextbillion.ai](mailto:support@nextbillion.ai) to enquire/enable other
       * areas.
       */
      cross_border?: boolean;

      /**
       * Specify if the optimizer should cache the matrix result set (containing ETAs and
       * distances) for the given set of locations in the request. Once the results are
       * cached, the optimizer can use it during the next 60 mins if exactly the same set
       * of locations are provided again. Please note that if a cached result is
       * retrieved, the timer is reset and that result will be available for another 60
       * mins.
       *
       * If the users want to regenerate the result set, they can set this parameter to
       * `true` and optimizer will not use the cached results.
       *
       * This feature is helpful in expediting the optimization process and generate
       * results quickly. It also helps users to quickly simulate route plans for
       * different combinations of constraints for a given set of locations.
       */
      disable_cache?: boolean;

      /**
       * Specify the type of hazardous material being carried and the service will avoid
       * roads which are not suitable for the type of goods specified. Provide multiple
       * values separated by a comma `,` .
       *
       * Please note that this parameter is effective only when `mode=truck`.
       */
      hazmat_type?: Array<'`general`' | '`circumstantial`' | '`explosive`' | '`harmful_to_water`'>;

      /**
       * Define the traveling mode to be used for determining the optimized routes.
       */
      mode?: '`car`' | '`truck`';

      /**
       * Defines all the vehicle profiles. `profiles` is implemented as a dictionary of
       * objects where each profile name is the unique key and the associated value is an
       * object describing the routing properties of that profile. All routing properties
       * available in `options.routing` can be added as values for a given profile.
       *
       * Please note:
       *
       * - The routing properties configured using `options.routing` (and not part of any
       *   \`profiles\`) are considered as default route settings i.e. they are applied
       *   to vehicles which are not associated with any profile.
       * - The default route settings are independent from those defined for any
       *   `profiles` . Consequently, for vehicles which are tagged to a given profile,
       *   only the routing properties configured for the given profile will apply.
       * - If the "mode" is not specified for any profile, by default it is considered to
       *   be `car` .
       * - "default" is a reserved keyword and can not be used as the name for any custom
       *   profile.
       * - `profiles` can't be nested in other profiles.
       * - The number of profiles, including default route settings, are limited to
       *
       *   - 15, if 0 < number of location <= 100
       *   - 6, if 100 < number of location <= 600，
       *   - 2, if 600 < number of location <= 1200,
       *   - 1, if number of location > 1200
       *
       * Routing profiles attribute is useful for configuring fleets containing multiple
       * vehicles types. Check
       * [Routing Profiles](https://docs.nextbillion.ai/docs/optimization/api/route-optimization-flexible/tutorials/routing-profiles)
       * tutorial to learn more.
       */
      profiles?: unknown;

      /**
       * Specify the general time when the job needs to be carried out. The time should
       * be expressed as an UNIX timestamp in seconds format. The solver will take into
       * account the general traffic conditions at the given time to determine the routes
       * and their ETAs.
       */
      traffic_timestamp?: number;

      /**
       * Specify the total load per axle (including the weight of trailers and shipped
       * goods) of the truck, in tonnes. When used, the optimizer will use only those
       * routes which are legally allowed to carry the load specified per axle.
       *
       * Please note this parameter is effective only when `mode=truck`.
       */
      truck_axle_load?: number;

      /**
       * Specify the truck dimensions, in centimeters, in the format of
       * “height,width,length”. Please note that this parameter is effective only when
       * `mode=truck`.
       */
      truck_size?: string;

      /**
       * Specify the truck weight including the trailers and shipped goods, in kilograms.
       * Please note that this parameter is effective only when `mode=truck`.
       */
      truck_weight?: number;
    }
  }

  export interface Relation {
    /**
     * The `steps` property specifies the tasks or steps that are part of the relation
     * and must be carried out in a manner defined in the `type` parameter. Please note
     * you can add any number of steps here, except when relation type is `precedence`
     * where only 2 tasks can be added.
     */
    steps: Array<Relation.Step>;

    /**
     * Specifies the type of relation constraint. The following types are supported:
     *
     * - `in_same_route`: Ensures that all `steps` are covered in the same route in
     *   solution.
     * - `in_sequence`: Ensures that all steps are in the same route and their sequence
     *   matches the order specified in the `steps` field. Insertion of new steps
     *   between the `steps` specified, is allowed.
     * - `in_direct_sequence`: Similar to `in_sequence`, but insertion of new `steps`
     *   is not allowed in the final route.
     * - `precedence`: Restricts the travel time between the first step and second
     *   step. If the precedence requirement cannot be satisfied, then the task
     *   specified at the second step will not be assigned. Only 2 steps can be
     *   specified in a single `precedence` type relations. Please use multiple
     *   `precedence` relations to apply restrictions on more than 2 tasks.
     *
     * If the `vehicle` field is specified in the relations input, all steps will be
     * served by that particular vehicle. Otherwise, the route can be allocated to any
     * feasible vehicle.
     *
     * Please note that the `type` field is mandatory when using the `relations`
     * object.
     */
    type: '`in_same_route`' | '`in_sequence`' | '`in_direct_sequence`' | '`precedence`';

    /**
     * **Deprecated! Please use the** `vehicle` **parameter to specify the vehicle
     * ID.**
     *
     * Specifies the ID of the vehicle that would fulfil the steps. ID should be
     * consistent with input IDs provided in the `vehicles` object.
     */
    id?: number;

    /**
     * This attribute is effective only when `precedence` type relation is used.
     * `max_duration` restricts the travel time of the vehicle to go from location of
     * first task to the location of second task specified in `steps` object. The unit
     * for this parameter is seconds. It accepts values greater than 0 only.
     *
     * Please note that `max_duration` is a hard constraint. Hence, if aggressive
     * durations are provided such that the second task cannot be reached within the
     * specified `max_duration`, it might be done before the first task (usually in
     * case of `jobs`) or remain un-assigned (usually in case of `shipments`).
     */
    max_duration?: number;

    /**
     * This attribute is effective only when `precedence` type relation is used. Use
     * `min_duration` to enforce a minimum time-gap between the two tasks specified in
     * `steps` object. When specified, the second task will get completed after a gap
     * of `min_duration` with respect to the first task. The unit for this parameter is
     * seconds.
     *
     * Please note that `min_duration` is implemented as a soft constraint and it can
     * be violated in presence of other relation types. The optimizer will tend to
     * provide solutions where `min_duration` is not violated, but it is not
     * guaranteed.
     */
    min_duration?: number;

    /**
     * Specifies the ID of the vehicle that would fulfill the steps. Providing the same
     * vehicle ID to multiple ‘relations’ is prohibited. The vehicle ID provided here
     * should be consistent with ID provided in the `vehicles` attribute.
     */
    vehicle?: string;
  }

  export namespace Relation {
    export interface Step {
      /**
       * Specifies the type of the step. The `start` and `end` step types have to be the
       * first and last steps, respectively, in a relation.
       *
       * Please note that the `type` is mandatory when using the `relations` object.
       */
      type: '`start`' | '`end`' | '`job`' | '`pickup`' | '`delivery`';

      /**
       * This represents the ID of the task and should be consistent with the input IDs
       * provided in the `jobs` or `shipments` objects for a given step. The `id` is
       * required for all steps other than `start` and `end`.
       */
      id?: string;
    }
  }

  export interface Solution {
    /**
     * Specify the cost of the route.
     */
    cost: number;

    /**
     * Describe the steps in this route.
     */
    steps: Array<Solution.Step>;

    /**
     * Specify the ID of the vehicle that was assigned to the route. This field is
     * mandatory when using the `solution` attribute and providing an empty string
     * would result in error. The IDs are case-sensitive.
     *
     * **Note:** Since the vehicles can be configured using either a string or an
     * integer ID, please ensure that the same value type is provided for this field as
     * was used in the original request.
     */
    vehicle: string;

    /**
     * Specify the total quantities, for each dimension (or unit), of deliveries
     * performed in the route.
     */
    delivery?: Array<number>;

    /**
     * Specify the description of the assigned vehicle.
     */
    description?: string;

    /**
     * Specify the total distance of the route, in meters.
     */
    distance?: number;

    /**
     * Specify the total drive duration of the route, in seconds.
     */
    duration?: number;

    /**
     * Specify the geometry of this route encoded in polyline format.
     */
    geometry?: string;

    /**
     * Specify the total quantities, for each dimension (or unit), of pickups performed
     * in the route.
     */
    pickup?: Array<number>;

    /**
     * Specify the sum of priorities of all tasks on the route.
     */
    priority?: number;

    /**
     * Specify the total service time for the route, in seconds.
     */
    service?: number;

    /**
     * Specify the total set-up duration, in seconds, needed for the tasks on the
     * route.
     */
    setup?: number;

    /**
     * Specify the total waiting time of the vehicle on the route, in seconds.
     */
    waiting_time?: number;
  }

  export namespace Solution {
    /**
     * Describe details about a step of a route
     */
    export interface Step {
      /**
       * The ID of the step. This field is mandatory for all steps except for `start` and
       * `end` type.
       *
       * Please note that the ID provided here must also be present in either the `jobs`
       * or the `shipments` objects.
       *
       * **Note:** We have modified the data type of this field. The latest change is
       * backward compatible and both integer and string type IDs are valid for this
       * field, as long as they match the IDs of the jobs or shipments already
       * configured.
       */
      id: string;

      /**
       * Specify the time at which the vehicle arrives at the `step` location. If
       * `time_windows` is provided, then `arrival` will be an UNIX timestamp expressed
       * in seconds. Otherwise, it will be the total duration, in seconds, elapsed since
       * the start of the route.
       *
       * Please note that arrival is mandatory when using the `solution` object.
       */
      arrival: number;

      /**
       * Specify the type of the step.
       */
      type: '`start`' | '`end`' | '`job`' | '`pickup`' | '`delivery`' | '`break`';

      /**
       * Specify the description of this step.
       */
      description?: string;

      /**
       * Specify the distance covered, in meters, from the start of the route up until
       * the current step.
       *
       * Please note that the value of this parameter accumulates with each step. In case
       * , the `travel_cost: air_distance`, then the distance here should be the straight
       * line distance.
       */
      distance?: number;

      /**
       * Specify the drive time, in seconds, from the start of the route up until the
       * start of the `step`. Please note that the value of this parameter accumulates
       * with each step.
       */
      duration?: number;

      /**
       * Specify the load on the vehicle after completing this step. In case of multiple
       * dimensions, please specify the load for each type.
       */
      load?: Array<number>;

      /**
       * Specify the location coordinates of the step in the \[latitude, longitude\]
       * format. Alternatively, `location_index` property can also be used to specify the
       * location of the step.
       *
       * Please note that either `location` or `location_index` is mandatory.
       */
      location?: Array<number>;

      /**
       * Specify the index (in the `location` array) of the location coordinates where
       * the step is performed. The valid range of values is \[0, length of `location`
       * array). Alternatively, `location` property can also be used to specify the
       * location.
       *
       * Please note that either `location` or `location_index` is mandatory.
       */
      location_index?: number;

      /**
       * Specify the service time, in seconds, at this step.
       */
      service?: number;

      /**
       * Specify the set-up duration, in seconds, needed at the step.
       */
      setup?: number;

      /**
       * Specify the wait time of the vehicle at this step, in seconds.
       */
      waiting_time?: number;
    }
  }

  /**
   * `unassigned` attribute is related to the re-optimization feature. This attribute
   * should contain the tasks that were not assigned during an earlier optimization
   * process. Please note that the `unassigned` part in request should be consistent
   * with the `unassigned` part in the previous optimization result.
   *
   * Users can reduce the number of unassigned tasks in the re-optimized solution, by
   * following strategies such as:
   *
   * - Extending the time windows for vehicles or tasks to give more flexibility
   * - Adding more vehicles to the optimization problem
   * - Adjusting the priority of different tasks to balance the workload more evenly
   * - Modifying other constraints or parameters to make the problem more solvable
   *
   * Ultimately, the goal is to minimize the number of unassigned tasks while still
   * meeting all the necessary constraints and objectives.
   */
  export interface Unassigned {
    /**
     * Specify the unassigned job IDs from the previous optimization result. Please
     * note the IDs should also be present in the `jobs` part of the input.
     *
     * **Note:** We have modified the data type of this field. However, the latest
     * change is backward compatible and both integer and string type job IDs are valid
     * for this field, as long as they match the IDs of the jobs already configured.
     * Providing mixed value types in the array, will lead to an error.
     */
    jobs?: Array<string>;

    /**
     * Specify the unassigned shipment pickup & delivery IDs from the previous
     * optimization result. Both the pickup & delivery steps of a shipment should be
     * part of the same array.
     *
     * **Note:** We have modified the data type of this field. However, the latest
     * change is backward compatible and both integer and string type shipment IDs are
     * valid for this field, as long as they match the IDs of the shipments already
     * configured. Providing mixed value types in the array, will lead to an error.
     */
    shipments?: Array<Array<string>>;
  }

  export interface Zone {
    /**
     * Provide an ID for the zone. This field is mandatory when adding zones.
     */
    id: number;

    /**
     * Provide the ID of a pre-created geofence using the
     * [Geofence API](https://docs.nextbillion.ai/docs/tracking/api/geofence).
     *
     * Please note that one of `geometry` or `geofence_id` should be provided.
     */
    geofence_id?: string;

    /**
     * It is a [geoJSON object](https://datatracker.ietf.org/doc/html/rfc7946#page-9)
     * with details of the geographic boundaries of the zone. Only “Polygon” and
     * “MultiPolygon” geoJSON types are supported.
     *
     * Please note that one of `geometry` or `geofence_id` should be provided.
     */
    geometry?: Zone.Geometry;
  }

  export namespace Zone {
    /**
     * It is a [geoJSON object](https://datatracker.ietf.org/doc/html/rfc7946#page-9)
     * with details of the geographic boundaries of the zone. Only “Polygon” and
     * “MultiPolygon” geoJSON types are supported.
     *
     * Please note that one of `geometry` or `geofence_id` should be provided.
     */
    export interface Geometry {
      /**
       * An array of coordinates in the \[longitude, latitude\] format, representing the
       * zone boundary.
       */
      coordinates?: Array<Array<number>>;

      /**
       * Provide a description to identify the zone
       */
      description?: string;

      /**
       * Type of the geoJSON geometry. Should always be `Polygon` or `MultiPolygon`.
       */
      type?: '`Polygon`' | '`MultiPolygon`';
    }
  }
}

export declare namespace V2 {
  export {
    type Job as Job,
    type Shipment as Shipment,
    type V2RetrieveResultResponse as V2RetrieveResultResponse,
    type V2RetrieveResultParams as V2RetrieveResultParams,
    type V2SubmitParams as V2SubmitParams,
  };
}
