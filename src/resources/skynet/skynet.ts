// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigAPI from './config';
import {
  Config,
  ConfigCreateParams,
  ConfigListParams,
  ConfigListResponse,
  ConfigTestwebhookParams,
  ConfigTestwebhookResponse,
} from './config';
import * as MonitorAPI from './monitor';
import {
  Metadata,
  Monitor,
  MonitorCreateParams,
  MonitorCreateResponse,
  MonitorDeleteParams,
  MonitorResource,
  MonitorRetrieveListParams,
  MonitorRetrieveListResponse,
  MonitorRetrieveParams,
  MonitorRetrieveResponse,
  MonitorUpdateParams,
  Pagination,
} from './monitor';
import * as NamespacedApikeysAPI from './namespaced-apikeys';
import {
  NamespacedApikeyDeleteNamespacedApikeysParams,
  NamespacedApikeyDeleteNamespacedApikeysResponse,
  NamespacedApikeyNamespacedApikeysParams,
  NamespacedApikeyNamespacedApikeysResponse,
  NamespacedApikeys,
} from './namespaced-apikeys';
import * as TripAPI from './trip';
import {
  Trip,
  TripDeleteParams,
  TripEndParams,
  TripRetrieveParams,
  TripRetrieveResponse,
  TripRetrieveSummaryParams,
  TripRetrieveSummaryResponse,
  TripStartParams,
  TripStartResponse,
  TripStop,
  TripUpdateParams,
} from './trip';
import * as AssetAPI from './asset/asset';
import {
  Asset,
  AssetCreateParams,
  AssetCreateResponse,
  AssetDeleteParams,
  AssetRetrieveListParams,
  AssetRetrieveListResponse,
  AssetRetrieveParams,
  AssetRetrieveResponse,
  AssetTrackParams,
  AssetUpdateAttributesParams,
  AssetUpdateParams,
  MetaData,
  SimpleResp,
} from './asset/asset';
import * as SearchAPI from './search/search';
import {
  Search,
  SearchResponse,
  SearchRetrieveAroundParams,
  SearchRetrieveBoundParams,
} from './search/search';
import * as SkynetSkynetAPI from './skynet_/skynet_';
import { Skynet as SkynetAPISkynet } from './skynet_/skynet_';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Skynet extends APIResource {
  asset: AssetAPI.Asset = new AssetAPI.Asset(this._client);
  monitor: MonitorAPI.MonitorResource = new MonitorAPI.MonitorResource(this._client);
  trip: TripAPI.Trip = new TripAPI.Trip(this._client);
  namespacedApikeys: NamespacedApikeysAPI.NamespacedApikeys = new NamespacedApikeysAPI.NamespacedApikeys(
    this._client,
  );
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  skynet: SkynetSkynetAPI.Skynet = new SkynetSkynetAPI.Skynet(this._client);

  /**
   * POST Action
   */
  subscribe(body: SkynetSubscribeParams, options?: RequestOptions): APIPromise<SkynetSubscribeResponse> {
    return this._client.post('/skynet/subscribe', { body, ...options });
  }
}

export interface SkynetSubscribeResponse {
  /**
   * Subscription ID as provided in the input action message.
   */
  id?: string;

  /**
   * Returns the error message when `status: error`. Otherwise, response doesn't
   * contain this field.
   */
  error?: string;

  /**
   * Status of the action. It can have only two values - "success" or "error".
   */
  status?: string;

  /**
   * Returns the UNIX timestamp, in milliseconds format, when the web-socket returns
   * the action response.
   */
  timestamp?: number;
}

export interface SkynetSubscribeParams {
  /**
   * Specify the behavior that needs to be achieved for the subscription. Following
   * values are accepted:
   *
   * - TRIP_SUBSCRIBE: Enable a trip subscription.
   * - TRIP_UNSUBSCRIBE: Unsubscribe from a trip
   * - HEARTBEAT: Enable heartbeat mechanism for a web-socket connection. The action
   *   message need to be sent at a frequency higher than every 5 mins to keep the
   *   connection alive. Alternatively, users can chose to respond to the ping frame
   *   sent by web socket server to keep the connection alive. Refer to
   *   [connection details](https://188--nbai-docs-stg.netlify.app/docs/tracking/api/live-tracking-api#connect-to-web-socket-server)
   *   for more details.
   */
  action: '`TRIP_SUBSCRIBE`' | '`TRIP_UNSUBSCRIBE`' | '`HEARTBEAT`';

  /**
   * Specify a custom ID for the subscription. It can be used to reference a given
   * subscription in the downstream applications / systems.
   */
  id?: string;

  params?: SkynetSubscribeParams.Params;
}

export namespace SkynetSubscribeParams {
  export interface Params {
    /**
     * Specify the ID of an active trip that needs to be subscribed. The ID of a trip
     * is returned in the response when _Start A Trip_ request is acknowledged.
     *
     * This attribute is mandatory when `action` is set to either "TRIP_SUBSCRIBE" or
     * "TRIP_UNSUBSCRIBE"
     */
    id: string;
  }
}

Skynet.Asset = Asset;
Skynet.MonitorResource = MonitorResource;
Skynet.Trip = Trip;
Skynet.NamespacedApikeys = NamespacedApikeys;
Skynet.Config = Config;
Skynet.Search = Search;
Skynet.Skynet = SkynetAPISkynet;

export declare namespace Skynet {
  export {
    type SkynetSubscribeResponse as SkynetSubscribeResponse,
    type SkynetSubscribeParams as SkynetSubscribeParams,
  };

  export {
    Asset as Asset,
    type MetaData as MetaData,
    type SimpleResp as SimpleResp,
    type AssetCreateResponse as AssetCreateResponse,
    type AssetRetrieveResponse as AssetRetrieveResponse,
    type AssetRetrieveListResponse as AssetRetrieveListResponse,
    type AssetCreateParams as AssetCreateParams,
    type AssetRetrieveParams as AssetRetrieveParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetDeleteParams as AssetDeleteParams,
    type AssetRetrieveListParams as AssetRetrieveListParams,
    type AssetTrackParams as AssetTrackParams,
    type AssetUpdateAttributesParams as AssetUpdateAttributesParams,
  };

  export {
    MonitorResource as MonitorResource,
    type Metadata as Metadata,
    type Monitor as Monitor,
    type Pagination as Pagination,
    type MonitorCreateResponse as MonitorCreateResponse,
    type MonitorRetrieveResponse as MonitorRetrieveResponse,
    type MonitorRetrieveListResponse as MonitorRetrieveListResponse,
    type MonitorCreateParams as MonitorCreateParams,
    type MonitorRetrieveParams as MonitorRetrieveParams,
    type MonitorUpdateParams as MonitorUpdateParams,
    type MonitorDeleteParams as MonitorDeleteParams,
    type MonitorRetrieveListParams as MonitorRetrieveListParams,
  };

  export {
    Trip as Trip,
    type TripStop as TripStop,
    type TripRetrieveResponse as TripRetrieveResponse,
    type TripRetrieveSummaryResponse as TripRetrieveSummaryResponse,
    type TripStartResponse as TripStartResponse,
    type TripRetrieveParams as TripRetrieveParams,
    type TripUpdateParams as TripUpdateParams,
    type TripDeleteParams as TripDeleteParams,
    type TripEndParams as TripEndParams,
    type TripRetrieveSummaryParams as TripRetrieveSummaryParams,
    type TripStartParams as TripStartParams,
  };

  export {
    NamespacedApikeys as NamespacedApikeys,
    type NamespacedApikeyDeleteNamespacedApikeysResponse as NamespacedApikeyDeleteNamespacedApikeysResponse,
    type NamespacedApikeyNamespacedApikeysResponse as NamespacedApikeyNamespacedApikeysResponse,
    type NamespacedApikeyDeleteNamespacedApikeysParams as NamespacedApikeyDeleteNamespacedApikeysParams,
    type NamespacedApikeyNamespacedApikeysParams as NamespacedApikeyNamespacedApikeysParams,
  };

  export {
    Config as Config,
    type ConfigListResponse as ConfigListResponse,
    type ConfigTestwebhookResponse as ConfigTestwebhookResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigListParams as ConfigListParams,
    type ConfigTestwebhookParams as ConfigTestwebhookParams,
  };

  export {
    Search as Search,
    type SearchResponse as SearchResponse,
    type SearchRetrieveAroundParams as SearchRetrieveAroundParams,
    type SearchRetrieveBoundParams as SearchRetrieveBoundParams,
  };

  export { SkynetAPISkynet as Skynet };
}
