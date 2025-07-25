// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Restrictions extends APIResource {
  /**
   * Create a new restriction
   *
   * @example
   * ```ts
   * const richGroupDtoResponse =
   *   await client.restrictions.create('turn', {
   *     key: 'key=API_KEY',
   *     area: 'area',
   *     name: 'name',
   *     length: 211,
   *   });
   * ```
   */
  create(
    restrictionType: 'turn' | 'parking' | 'fixedspeed' | 'maxspeed' | 'closure' | 'truck',
    params: RestrictionCreateParams,
    options?: RequestOptions,
  ): APIPromise<RichGroupDtoResponse> {
    const { key, latlon, ...body } = params;
    return this._client.post(path`/restrictions/${restrictionType}`, {
      query: { key, latlon },
      body,
      ...options,
    });
  }

  /**
   * Get a restriction by id
   *
   * @example
   * ```ts
   * const richGroupDtoResponse =
   *   await client.restrictions.retrieve(0, {
   *     key: 'key=API_KEY',
   *   });
   * ```
   */
  retrieve(
    id: number,
    query: RestrictionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RichGroupDtoResponse> {
    return this._client.get(path`/restrictions/${id}`, { query, ...options });
  }

  /**
   * Update a restriction
   *
   * @example
   * ```ts
   * const richGroupDtoResponse =
   *   await client.restrictions.update(0, {
   *     key: 'key=API_KEY',
   *     area: 'area',
   *     name: 'name',
   *     length: 225,
   *   });
   * ```
   */
  update(
    id: number,
    params: RestrictionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RichGroupDtoResponse> {
    const { key, latlon, ...body } = params;
    return this._client.patch(path`/restrictions/${id}`, { query: { key, latlon }, body, ...options });
  }

  /**
   * Get restrictions by bbox
   *
   * @example
   * ```ts
   * const richGroupDtoResponses =
   *   await client.restrictions.list({
   *     key: 'key=API_KEY',
   *     max_lat: 0,
   *     max_lon: 0,
   *     min_lat: 0,
   *     min_lon: 0,
   *   });
   * ```
   */
  list(query: RestrictionListParams, options?: RequestOptions): APIPromise<RestrictionListResponse> {
    return this._client.get('/restrictions', { query, ...options });
  }

  /**
   * Delete a restriction by ID
   *
   * @example
   * ```ts
   * const restriction = await client.restrictions.delete(0, {
   *   key: 'key=API_KEY',
   * });
   * ```
   */
  delete(
    id: number,
    params: RestrictionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RestrictionDeleteResponse> {
    const { key } = params;
    return this._client.delete(path`/restrictions/${id}`, { query: { key }, ...options });
  }

  /**
   * Get the paginated list of restrictions
   *
   * @example
   * ```ts
   * const response = await client.restrictions.listPaginated({
   *   area: 'area',
   *   key: 'key=API_KEY',
   *   limit: 0,
   *   offset: 0,
   * });
   * ```
   */
  listPaginated(
    query: RestrictionListPaginatedParams,
    options?: RequestOptions,
  ): APIPromise<RestrictionListPaginatedResponse> {
    return this._client.get('/restrictions/list', { query, ...options });
  }

  /**
   * Set the state of a restriction by ID
   *
   * @example
   * ```ts
   * const richGroupDtoResponse =
   *   await client.restrictions.setState(0, {
   *     key: 'key=API_KEY',
   *     state: '`enabled`',
   *   });
   * ```
   */
  setState(
    id: number,
    params: RestrictionSetStateParams,
    options?: RequestOptions,
  ): APIPromise<RichGroupDtoResponse> {
    const { key, ...body } = params;
    return this._client.put(path`/restrictions/${id}/state`, { query: { key }, body, ...options });
  }
}

export interface RichGroupDtoRequest {
  /**
   * Specify the area name. It represents a region where restrictions can be applied.
   * This is a custom field and it is recommended for the users to check with
   * [NextBillion.ai](www.nextbillion.ai) support for the right value. Alternatively,
   * users can invoke the _[Areas](#supported-areas)_ method to get a list of
   * available areas for them.
   */
  area: string;

  /**
   * Specify a custom, descriptive name for the restriction.
   */
  name: string;

  /**
   * Use this parameter to add any custom information about the restriction being
   * created.
   */
  comment?: string;

  /**
   * Represents the traffic direction on the segments to which the restriction will
   * be applied.
   */
  direction?: '`forward`' | '`backward`' | '`both`';

  /**
   * Provide a UNIX epoch timestamp in seconds, representing the time when the
   * restriction should cease to be in-effect.
   */
  end_time?: number;

  /**
   * An array of coordinates denoting the boundary of an area in which the
   * restrictions are to be applied. The format in which coordinates should be listed
   * is defined by the `latlon` field.
   *
   * Geofences can be used to create all restriction types, except for a `turn` type
   * restriction. Please note that `segments` is not required when using `geofence`
   * to create restrictions.
   */
  geofence?: Array<Array<number>>;

  /**
   * Specify the maximum truck height, in centimeter, that will be allowed under the
   * restriction. A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided when restriction type is `truck`.
   */
  height?: number;

  /**
   * Specify the maximum truck length, in centimeter, that will be allowed under the
   * restriction. A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided when restriction type is `truck`.
   */
  length?: number;

  /**
   * Provide the driving modes for which the restriction should be effective. If the
   * value is an empty array or if it is not provided then the restriction would be
   * applied for all modes.
   */
  mode?: Array<'0w' | '2w' | '3w' | '4w' | '6w'>;

  /**
   * It represents the days and times when the restriction is in effect. Users can
   * use this property to set recurring or one-time restrictions as per the
   * [given format](https://wiki.openstreetmap.org/wiki/Key:opening_hours) for
   * specifying the recurring schedule of the restriction.
   *
   * Please provided values as per the local time of the region where the restriction
   * is being applied.
   */
  repeat_on?: string;

  /**
   * An array of objects to collect the details of the segments of a road on which
   * the restriction has to be applied. Each object corresponds to a new segment.
   *
   * Please note that `segments` is mandatory for all `restrtiction_type` except
   * `turn`.
   */
  segments?: Array<RichGroupDtoRequest.Segment>;

  /**
   * Provide the the fixed speed of the segment where the restriction needs to be
   * applied. Please note that this parameter is mandatory when the `restrictionType`
   * is `fixedspeed`.
   */
  speed?: number;

  /**
   * Provide the the maximum speed of the segment where the restriction needs to be
   * applied. Please note that this parameter is mandatory when the `restrictionType`
   * is `maxspeed`.
   */
  speed_limit?: number;

  /**
   * Provide a UNIX epoch timestamp in seconds, representing the start time for the
   * restriction to be in-effect.
   */
  start_time?: number;

  /**
   * Specify a sequence of coordinates (track) where the restriction is to be
   * applied. The coordinates will be snapped to nearest road. Please note when using
   * `tracks`, `segments` and `turns` are not required.
   */
  tracks?: Array<Array<number>>;

  /**
   * An array of objects to collect the details of the turns of a road on which the
   * restriction has to be applied. Each object corresponds to a new turn.
   *
   * Please note that `turns` is mandatory for when `restrtiction_type=turn`.
   */
  turns?: Array<RichGroupDtoRequest.Turn>;

  /**
   * Specify the maximum truck weight, in kilograms, that the restriction will allow.
   * A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided for is `truck` restriction type.
   */
  weight?: number;

  /**
   * Specify the maximum truck width, in centimeter, that will be allowed under the
   * restriction. A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided when restriction type is `truck`.
   */
  width?: number;
}

export namespace RichGroupDtoRequest {
  export interface Segment {
    /**
     * An integer value representing the ID of the starting node of the segment.
     */
    from?: number;

    /**
     * An integer value representing the ID of the ending node of the segment.
     */
    to?: number;
  }

  export interface Turn {
    /**
     * An integer value that represents the ID of the starting node of the turn.
     */
    from?: number;

    /**
     * An integer value that represents the ID of the ending node of the turn.
     */
    to?: number;

    /**
     * An integer value that represents the ID of a node connecting `from` and `to`
     * nodes of the turn.
     */
    via?: number;
  }
}

export interface RichGroupDtoResponse {
  /**
   * Returns the unique ID of the restriction. This ID can be used for update,
   * delete, get operations on the restriction using the available API methods.
   */
  id?: number;

  /**
   * Returns the area to which the restriction belongs to.
   */
  area?: string;

  /**
   * Returns the details of the bounding box containing the restriction.
   */
  bbox?: unknown;

  /**
   * Returns the comments that were provided for the restriction at the time of
   * creating or updating the request.
   */
  comment?: string;

  /**
   * The timestamp at which the restriction was created.
   */
  create_at?: string;

  /**
   * Returns the direction of travel on the segments to which the restriction
   * applies.
   */
  direction?: 'forward' | 'backward' | 'both';

  /**
   * The time when the restriction ceases to be in-effect. It is a UNIX timestamp.
   */
  end_time?: number;

  /**
   * Returns the list of coordinates representing the area that was used to apply the
   * given restriction. The geofence returned is same as that provided while creating
   * or updating the restriction.
   */
  geofence?: unknown;

  /**
   * Returns the highway information on which the restriction applies to. If no
   * highway is impacted by the restriction, then this field is not present in the
   * response.
   */
  highway?: string;

  /**
   * Returns an array denoting all the traveling modes the restriction applies on.
   */
  mode?: Array<string>;

  /**
   * Returns the name of the restriction. This value is same as that provided at the
   * time of creating or updating the restriction.
   */
  name?: string;

  /**
   * Returns the time periods during which this restriction active or repeats on. The
   * time values follow a
   * [given format](https://wiki.openstreetmap.org/wiki/Key:opening_hours).
   */
  repeat_on?: string;

  /**
   * Returns the type of restriction. This is the same value as provided when
   * creating or updating the restriction.
   */
  restriction_type?: 'closure' | 'maxspeed' | 'fixedspeed' | 'parking' | 'turn' | 'truck';

  /**
   * Returns the fixed speed of segments. This field is not present in the response
   * if the restriction type is not `fixedspeed`
   */
  speed?: number;

  /**
   * Returns the maximum speed of segments. This field is not present in the response
   * if the restriction type is not `maxspeed`
   */
  speed_limit?: number;

  /**
   * The time when the restriction starts to be in-effect. It is a UNIX timestamp.
   */
  start_time?: number;

  /**
   * Returns the state of the "restriction" itself - enabled, disabled or deleted. It
   * does not denote if the restriction is actually in effect or not.
   */
  state?: 'enabled' | 'disabled' | 'deleted';

  /**
   * Returns the status of the restriction at the time of making the request i.e.
   * whether the restriction is in force or not. It will have one of the following
   * values: `active` or `inactive`.
   *
   * Please note that this field can not be directly influenced by the users. It will
   * always be calculated using the `start_time`, `end_time` and `repeat_on`
   * parameters.
   */
  status?: 'active' | 'inactive';

  /**
   * The timestamp at which the restriction was updated.
   */
  update_at?: string;
}

export type RestrictionListResponse = Array<RichGroupDtoResponse>;

export interface RestrictionDeleteResponse {
  /**
   * It is the unique ID of the restriction.
   */
  id?: number;

  /**
   * Returns the state of the restriction. It would always be `deleted`.
   */
  state?: string;
}

export interface RestrictionListPaginatedResponse {
  /**
   * An array of objects containing the details of the restrictions returned. Each
   * object represents one restriction.
   */
  data?: Array<RichGroupDtoResponse>;

  meta?: RestrictionListPaginatedResponse.Meta;
}

export namespace RestrictionListPaginatedResponse {
  export interface Meta {
    /**
     * An integer value indicating the maximum number of items retrieved per "page".
     * This is the same number as provided for the `limit` parameter in input.
     */
    limit?: number;

    /**
     * An integer value indicating the number of items in the collection that were
     * skipped to display the current response. Please note that the offset starts from
     * zero.
     */
    offset?: number;

    /**
     * An integer value indicating the total number of items available in the data set.
     */
    total?: number;
  }
}

export interface RestrictionCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Specify the area name. It represents a region where restrictions can
   * be applied. This is a custom field and it is recommended for the users to check
   * with [NextBillion.ai](www.nextbillion.ai) support for the right value.
   * Alternatively, users can invoke the _[Areas](#supported-areas)_ method to get a
   * list of available areas for them.
   */
  area: string;

  /**
   * Body param: Specify a custom, descriptive name for the restriction.
   */
  name: string;

  /**
   * Query param: Use this parameter to decide the format for specifying the geofence
   * coordinates. If true, then the coordinates of geofence can be specified as
   * "latitude,longitude" format, otherwise they should be specified in
   * "longitude,latitude" format.
   */
  latlon?: boolean;

  /**
   * Body param: Use this parameter to add any custom information about the
   * restriction being created.
   */
  comment?: string;

  /**
   * Body param: Represents the traffic direction on the segments to which the
   * restriction will be applied.
   */
  direction?: '`forward`' | '`backward`' | '`both`';

  /**
   * Body param: Provide a UNIX epoch timestamp in seconds, representing the time
   * when the restriction should cease to be in-effect.
   */
  end_time?: number;

  /**
   * Body param: An array of coordinates denoting the boundary of an area in which
   * the restrictions are to be applied. The format in which coordinates should be
   * listed is defined by the `latlon` field.
   *
   * Geofences can be used to create all restriction types, except for a `turn` type
   * restriction. Please note that `segments` is not required when using `geofence`
   * to create restrictions.
   */
  geofence?: Array<Array<number>>;

  /**
   * Body param: Specify the maximum truck height, in centimeter, that will be
   * allowed under the restriction. A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided when restriction type is `truck`.
   */
  height?: number;

  /**
   * Body param: Specify the maximum truck length, in centimeter, that will be
   * allowed under the restriction. A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided when restriction type is `truck`.
   */
  length?: number;

  /**
   * Body param: Provide the driving modes for which the restriction should be
   * effective. If the value is an empty array or if it is not provided then the
   * restriction would be applied for all modes.
   */
  mode?: Array<'0w' | '2w' | '3w' | '4w' | '6w'>;

  /**
   * Body param: It represents the days and times when the restriction is in effect.
   * Users can use this property to set recurring or one-time restrictions as per the
   * [given format](https://wiki.openstreetmap.org/wiki/Key:opening_hours) for
   * specifying the recurring schedule of the restriction.
   *
   * Please provided values as per the local time of the region where the restriction
   * is being applied.
   */
  repeat_on?: string;

  /**
   * Body param: An array of objects to collect the details of the segments of a road
   * on which the restriction has to be applied. Each object corresponds to a new
   * segment.
   *
   * Please note that `segments` is mandatory for all `restrtiction_type` except
   * `turn`.
   */
  segments?: Array<RestrictionCreateParams.Segment>;

  /**
   * Body param: Provide the the fixed speed of the segment where the restriction
   * needs to be applied. Please note that this parameter is mandatory when the
   * `restrictionType` is `fixedspeed`.
   */
  speed?: number;

  /**
   * Body param: Provide the the maximum speed of the segment where the restriction
   * needs to be applied. Please note that this parameter is mandatory when the
   * `restrictionType` is `maxspeed`.
   */
  speed_limit?: number;

  /**
   * Body param: Provide a UNIX epoch timestamp in seconds, representing the start
   * time for the restriction to be in-effect.
   */
  start_time?: number;

  /**
   * Body param: Specify a sequence of coordinates (track) where the restriction is
   * to be applied. The coordinates will be snapped to nearest road. Please note when
   * using `tracks`, `segments` and `turns` are not required.
   */
  tracks?: Array<Array<number>>;

  /**
   * Body param: An array of objects to collect the details of the turns of a road on
   * which the restriction has to be applied. Each object corresponds to a new turn.
   *
   * Please note that `turns` is mandatory for when `restrtiction_type=turn`.
   */
  turns?: Array<RestrictionCreateParams.Turn>;

  /**
   * Body param: Specify the maximum truck weight, in kilograms, that the restriction
   * will allow. A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided for is `truck` restriction type.
   */
  weight?: number;

  /**
   * Body param: Specify the maximum truck width, in centimeter, that will be allowed
   * under the restriction. A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided when restriction type is `truck`.
   */
  width?: number;
}

export namespace RestrictionCreateParams {
  export interface Segment {
    /**
     * An integer value representing the ID of the starting node of the segment.
     */
    from?: number;

    /**
     * An integer value representing the ID of the ending node of the segment.
     */
    to?: number;
  }

  export interface Turn {
    /**
     * An integer value that represents the ID of the starting node of the turn.
     */
    from?: number;

    /**
     * An integer value that represents the ID of the ending node of the turn.
     */
    to?: number;

    /**
     * An integer value that represents the ID of a node connecting `from` and `to`
     * nodes of the turn.
     */
    via?: number;
  }
}

export interface RestrictionRetrieveParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * a internal parameter
   */
  transform?: boolean;
}

export interface RestrictionUpdateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Specify the area name. It represents a region where restrictions can
   * be applied. This is a custom field and it is recommended for the users to check
   * with [NextBillion.ai](www.nextbillion.ai) support for the right value.
   * Alternatively, users can invoke the _[Areas](#supported-areas)_ method to get a
   * list of available areas for them.
   */
  area: string;

  /**
   * Body param: Specify a custom, descriptive name for the restriction.
   */
  name: string;

  /**
   * Query param: Use this parameter to decide the format for specifying the geofence
   * coordinates. If true, then the coordinates of geofence can be specified as
   * "latitude,longitude" format, otherwise they should be specified in
   * "longitude,latitude" format.
   */
  latlon?: boolean;

  /**
   * Body param: Use this parameter to add any custom information about the
   * restriction being created.
   */
  comment?: string;

  /**
   * Body param: Represents the traffic direction on the segments to which the
   * restriction will be applied.
   */
  direction?: '`forward`' | '`backward`' | '`both`';

  /**
   * Body param: Provide a UNIX epoch timestamp in seconds, representing the time
   * when the restriction should cease to be in-effect.
   */
  end_time?: number;

  /**
   * Body param: An array of coordinates denoting the boundary of an area in which
   * the restrictions are to be applied. The format in which coordinates should be
   * listed is defined by the `latlon` field.
   *
   * Geofences can be used to create all restriction types, except for a `turn` type
   * restriction. Please note that `segments` is not required when using `geofence`
   * to create restrictions.
   */
  geofence?: Array<Array<number>>;

  /**
   * Body param: Specify the maximum truck height, in centimeter, that will be
   * allowed under the restriction. A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided when restriction type is `truck`.
   */
  height?: number;

  /**
   * Body param: Specify the maximum truck length, in centimeter, that will be
   * allowed under the restriction. A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided when restriction type is `truck`.
   */
  length?: number;

  /**
   * Body param: Provide the driving modes for which the restriction should be
   * effective. If the value is an empty array or if it is not provided then the
   * restriction would be applied for all modes.
   */
  mode?: Array<'0w' | '2w' | '3w' | '4w' | '6w'>;

  /**
   * Body param: It represents the days and times when the restriction is in effect.
   * Users can use this property to set recurring or one-time restrictions as per the
   * [given format](https://wiki.openstreetmap.org/wiki/Key:opening_hours) for
   * specifying the recurring schedule of the restriction.
   *
   * Please provided values as per the local time of the region where the restriction
   * is being applied.
   */
  repeat_on?: string;

  /**
   * Body param: An array of objects to collect the details of the segments of a road
   * on which the restriction has to be applied. Each object corresponds to a new
   * segment.
   *
   * Please note that `segments` is mandatory for all `restrtiction_type` except
   * `turn`.
   */
  segments?: Array<RestrictionUpdateParams.Segment>;

  /**
   * Body param: Provide the the fixed speed of the segment where the restriction
   * needs to be applied. Please note that this parameter is mandatory when the
   * `restrictionType` is `fixedspeed`.
   */
  speed?: number;

  /**
   * Body param: Provide the the maximum speed of the segment where the restriction
   * needs to be applied. Please note that this parameter is mandatory when the
   * `restrictionType` is `maxspeed`.
   */
  speed_limit?: number;

  /**
   * Body param: Provide a UNIX epoch timestamp in seconds, representing the start
   * time for the restriction to be in-effect.
   */
  start_time?: number;

  /**
   * Body param: Specify a sequence of coordinates (track) where the restriction is
   * to be applied. The coordinates will be snapped to nearest road. Please note when
   * using `tracks`, `segments` and `turns` are not required.
   */
  tracks?: Array<Array<number>>;

  /**
   * Body param: An array of objects to collect the details of the turns of a road on
   * which the restriction has to be applied. Each object corresponds to a new turn.
   *
   * Please note that `turns` is mandatory for when `restrtiction_type=turn`.
   */
  turns?: Array<RestrictionUpdateParams.Turn>;

  /**
   * Body param: Specify the maximum truck weight, in kilograms, that the restriction
   * will allow. A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided for is `truck` restriction type.
   */
  weight?: number;

  /**
   * Body param: Specify the maximum truck width, in centimeter, that will be allowed
   * under the restriction. A value of 0 indicates no limit.
   *
   * Please note this parameter is effective only when `restriction_type` is `truck`.
   * At least one of truck parameters - `weight`, `height`, `width` and `truck` -
   * needs to be provided when restriction type is `truck`.
   */
  width?: number;
}

export namespace RestrictionUpdateParams {
  export interface Segment {
    /**
     * An integer value representing the ID of the starting node of the segment.
     */
    from?: number;

    /**
     * An integer value representing the ID of the ending node of the segment.
     */
    to?: number;
  }

  export interface Turn {
    /**
     * An integer value that represents the ID of the starting node of the turn.
     */
    from?: number;

    /**
     * An integer value that represents the ID of the ending node of the turn.
     */
    to?: number;

    /**
     * An integer value that represents the ID of a node connecting `from` and `to`
     * nodes of the turn.
     */
    via?: number;
  }
}

export interface RestrictionListParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * Specifies the maximum latitude value for the bounding box.
   */
  max_lat: number;

  /**
   * Specifies the maximum longitude value for the bounding box.
   */
  max_lon: number;

  /**
   * Specifies the minimum latitude value for the bounding box.
   */
  min_lat: number;

  /**
   * Specifies the minimum longitude value for the bounding box.
   */
  min_lon: number;

  /**
   * Specify the modes of travel that the restriction pertains to.
   */
  mode?: Array<'0w' | '2w' | '3w' | '4w' | '6w'>;

  /**
   * Specify the type of restrictions to fetch.
   */
  restriction_type?: 'turn' | 'parking' | 'fixedspeed' | 'maxspeed' | 'closure' | 'truck';

  /**
   * This parameter represents where the restriction comes from and cannot be
   * modified by clients sending requests to the API endpoint.
   *
   * For example, an API endpoint that returns a list of restrictions could include
   * the source parameter to indicate where each item comes from. This parameter can
   * be useful for filtering, sorting, or grouping the results based on their source.
   */
  source?: 'rrt' | 'pbf';

  /**
   * This parameter is used to filter restrictions based on their state i.e. whether
   * the restriction is currently enabled, disabled, or deleted. For example, users
   * can retrieve a list of all the deleted restrictions by setting `state=deleted`.
   */
  state?: '`enabled`' | '`disabled`' | '`deleted`';

  /**
   * Restrictions can be active or inactive at a given time by virtue of their
   * nature. For example, maximum speed limits can be active on the roads leading to
   * schools during school hours and be inactive afterwards or certain road closure
   * restrictions be active during holidays/concerts and be inactive otherwise.
   *
   * Use this parameter to filter the restrictions based on their status at the time
   * of making the request i.e. whether they are in force or not.
   */
  status?: '`active`' | '`inactive`';

  /**
   * This is internal parameter with a default value as `false`.
   */
  transform?: boolean;
}

export interface RestrictionDeleteParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export interface RestrictionListPaginatedParams {
  /**
   * Specify the area name. It represents a region where restrictions can be applied.
   *
   * _The area it belongs to. See Area API_
   */
  area: string;

  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * The number of restrictions to be returned in the response. Please note that if
   * the `limit` is set to a number more than the total number of available
   * restrictions, then all restrictions would be returned together.
   */
  limit: number;

  /**
   * An integer value indicating the number of items in the collection that need to
   * be skipped in the response. Please note that the offset starts from 0, so the
   * first item returned in the result would be the item at (offset + 1) position in
   * collection.
   *
   * Users can use `offset` along with `limit` to implement paginated result.
   */
  offset: number;

  /**
   * Specify the modes of travel that the restriction pertains to.
   */
  mode?: '`0w`' | '`2w`' | '`3w`' | '`4w`' | '`6w`';

  /**
   * The name of the restriction. This should be same as that provided while creating
   * or updating the restriction.
   */
  name?: string;

  /**
   * Specify the type of restrictions to fetch.
   */
  restriction_type?: '`turn`' | '`parking`' | '`fixedspeed`' | '`maxspeed`' | '`closure`' | '`truck`';

  /**
   * It represents where it comes from, currently the possible values include "rrt",
   * "xsm"
   */
  source?: 'rrt' | 'pbf';

  /**
   * This parameter is used to filter restrictions based on their state i.e. whether
   * the restriction is currently enabled, disabled, or deleted. For example, users
   * can retrieve a list of all the deleted restrictions by setting `state=deleted`.
   */
  state?: '`enabled`' | '`disabled`' | '`deleted`';

  /**
   * Restrictions can be active or inactive at a given time by virtue of their
   * nature. For example, maximum speed limits can be active on the roads leading to
   * schools during school hours and be inactive afterwards or certain road closure
   * restrictions be active during holidays/concerts and be inactive otherwise.
   *
   * Use this parameter to filter the restrictions based on their status at the time
   * of making the request i.e. whether they are in force or not.
   */
  status?: '`active`' | '`inactive`';

  /**
   * a internal parameter
   */
  transform?: boolean;
}

export interface RestrictionSetStateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Use this field to specify the new `state` of the restriction. Please
   * note that this method cannot update the state of restrictions that are currently
   * in 'deleted' state.
   */
  state: '`enabled`' | '`disabled`' | '`deleted`';
}

export declare namespace Restrictions {
  export {
    type RichGroupDtoRequest as RichGroupDtoRequest,
    type RichGroupDtoResponse as RichGroupDtoResponse,
    type RestrictionListResponse as RestrictionListResponse,
    type RestrictionDeleteResponse as RestrictionDeleteResponse,
    type RestrictionListPaginatedResponse as RestrictionListPaginatedResponse,
    type RestrictionCreateParams as RestrictionCreateParams,
    type RestrictionRetrieveParams as RestrictionRetrieveParams,
    type RestrictionUpdateParams as RestrictionUpdateParams,
    type RestrictionListParams as RestrictionListParams,
    type RestrictionDeleteParams as RestrictionDeleteParams,
    type RestrictionListPaginatedParams as RestrictionListPaginatedParams,
    type RestrictionSetStateParams as RestrictionSetStateParams,
  };
}
