// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Isochrone extends APIResource {
  /**
   * The NextBillion.ai Isochrone API computes areas that are reachable within a
   * specified amount of time from a location, and returns the reachable regions as
   * contours of polygons or lines that you can display on a map.
   */
  compute(query: IsochroneComputeParams, options?: RequestOptions): APIPromise<IsochroneComputeResponse> {
    return this._client.get('/isochrone/json', { query, ...options });
  }
}

export interface IsochroneComputeResponse {
  /**
   * A
   * [GeoJSON FeatureCollection](https://datatracker.ietf.org/doc/html/rfc7946#section-3.3)
   * object with details of the isochrone contours. Each feature object in this
   * collection represents an isochrone.
   */
  features?: Array<IsochroneComputeResponse.Feature>;

  /**
   * Displays the error message in case of a failed request or operation. Please note
   * that this parameter is not returned in the response in case of a successful
   * request.
   */
  msg?: string;

  /**
   * A string indicating the state of the response. On normal responses, the value
   * will be Ok. Indicative HTTP error codes are returned for different errors. See
   * the [API Errors Codes](#api-error-codes) section below for more information.
   */
  status?: string;

  /**
   * Type of the GeoJSON object. As prescribed in
   * [GeoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946#section-1.4),
   * its value is FeatureCollection as the feature property contains a list of
   * geoJSON feature objects.
   */
  type?: string;
}

export namespace IsochroneComputeResponse {
  export interface Feature {
    /**
     * A [GeoJSON geometry](https://datatracker.ietf.org/doc/html/rfc7946#page-7)
     * object with details of the contour line.
     */
    geometry?: Feature.Geometry;

    /**
     * An object with details of how the isochrone contour can be drawn on a map.
     */
    properties?: Feature.Properties;

    /**
     * Type of the GeoJSON object. Its value is Feature as per the
     * [GeoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946#section-1.4)
     * object.
     */
    type?: string;
  }

  export namespace Feature {
    /**
     * A [GeoJSON geometry](https://datatracker.ietf.org/doc/html/rfc7946#page-7)
     * object with details of the contour line.
     */
    export interface Geometry {
      /**
       * An array of coordinate points, in [longitude,latitude] format representing the
       * isochrone contour line.
       */
      coordinates?: Array<number>;

      /**
       * Type of the geoJSON geometry.
       */
      type?: string;
    }

    /**
     * An object with details of how the isochrone contour can be drawn on a map.
     */
    export interface Properties {
      /**
       * The hex code of the color of the isochrone contour line
       */
      color?: string;

      /**
       * The value of the metric used in this contour. See the metric property to
       * determine whether this is a time or distance contour. When the metric is time
       * this value denotes the travel time in minutes and when the metric is distance
       * this value denotes the travel distance in kilometers.
       */
      contour?: number;

      /**
       * The hex code for the fill color of the isochrone contour line.
       */
      fill?: string;

      /**
       * The hex code for the fill color of the isochrone contour line
       */
      fillColor?: string;

      /**
       * The fill opacity for the isochrone contour line. It is a float value starting
       * from 0.0 with a max value of 1.0. Higher number indicates a higher fill opacity.
       */
      fillOpacity?: number;

      /**
       * The metric that the contour represents - either distance or time
       */
      metric?: string;

      /**
       * The opacity of the isochrone contour line. It is a float value starting from 0.0
       * with a max value of 1.0. Higher number indicates a higher line opacity
       */
      opacity?: number;
    }
  }
}

export interface IsochroneComputeParams {
  /**
   * The distances, in meters, to use for each isochrone contour. You can specify up
   * to four contours. Distances must be in increasing order. The maximum distance
   * that can be specified is 60000 meters (60 km).
   */
  contours_meters: number;

  /**
   * The times, in minutes, to use for each isochrone contour. You can specify up to
   * four contours. Times must be in increasing order. The maximum time that can be
   * specified is 40 minutes.
   */
  contours_minutes: number;

  /**
   * The coordinates of the location which acts as the starting point for which the
   * isochrone lines need to be determined.
   */
  coordinates: string;

  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * The hex code of the color to fill isochrone contour. When requesting multiple
   * contours, it is recommended to provide color codes for each of the requested
   * contours, separated by a ",". If no colors are specified, the Isochrone API will
   * assign a random color scheme to the output.
   */
  contours_colors?: string;

  /**
   * A floating point value from 0.0 to 1.0 can be used to remove smaller contours.
   * The default is 1.0. A value of 1.0 will only return the largest contour for a
   * given value. A value of 0.5 drops any contours that are less than half the area
   * of the largest contour in the set of contours for that same value.
   */
  denoise?: number;

  /**
   * Use this parameter to set a departure time, expressed as UNIX epoch timestamp in
   * seconds, for calculating the isochrone contour. The response will consider the
   * typical traffic conditions at the given time and return a contour which can be
   * reached under those traffic conditions. Please note that if no input is provided
   * for this parameter then the traffic conditions at the time of making the request
   * are considered.
   */
  departure_time?: number;

  /**
   * A positive floating point value, in meters, used as the tolerance for
   * Douglas-Peucker generalization. There is no upper bound. If no value is
   * specified in the request, the Isochrone API will choose the most optimized
   * generalization to use for the request. Note that the generalization of contours
   * can lead to self-intersections, as well as intersections of adjacent contours.
   */
  generalize?: number;

  /**
   * Set which driving mode the service should use to determine the contour. For
   * example, if you use "car", the API will return an isochrone contour that a car
   * can reach within the specified time or after driving the specified distance.
   * Using "truck" will return a contour that a truck can reach after taking into
   * account appropriate truck routing restrictions.
   *
   * Note: Only the "car" profile is enabled by default. Please note that customized
   * profiles (including "truck") might not be available for all regions. Please
   * contact your [NextBillion.ai](http://NextBillion.ai) account manager, sales
   * representative or reach out at
   * [support@nextbillion.ai](mailto:support@nextbillion.ai) in case you need
   * additional profiles.
   */
  mode?: 'car' | 'truck';

  /**
   * Specify whether to return the contours as GeoJSON polygons (true) or linestrings
   * (false, default). When polygons=true, any contour that forms a ring is returned
   * as a polygon.
   */
  polygons?: boolean;
}

export declare namespace Isochrone {
  export {
    type IsochroneComputeResponse as IsochroneComputeResponse,
    type IsochroneComputeParams as IsochroneComputeParams,
  };
}
