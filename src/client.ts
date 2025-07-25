// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import { AreaListParams, AreaListResponse, Areas } from './resources/areas';
import {
  Autocomplete,
  AutocompleteSuggestParams,
  AutocompleteSuggestResponse,
} from './resources/autocomplete';
import { Autosuggest, AutosuggestSuggestParams, AutosuggestSuggestResponse } from './resources/autosuggest';
import {
  Batch,
  BatchCreateParams,
  BatchCreateResponse,
  BatchRetrieveParams,
  BatchRetrieveResponse,
} from './resources/batch';
import { Browse, BrowseSearchParams, BrowseSearchResponse } from './resources/browse';
import {
  DirectionComputeRouteParams,
  DirectionComputeRouteResponse,
  Directions,
} from './resources/directions';
import { Discover, DiscoverRetrieveParams, DiscoverRetrieveResponse } from './resources/discover';
import {
  Access,
  Address,
  Categories,
  ContactObject,
  Contacts,
  Geocode,
  GeocodeBatchCreateParams,
  GeocodeBatchCreateResponse,
  GeocodeRetrieveParams,
  GeocodeRetrieveResponse,
  GeocodeStructuredRetrieveParams,
  GeocodeStructuredRetrieveResponse,
  MapView,
  Position,
} from './resources/geocode';
import { Isochrone, IsochroneComputeParams, IsochroneComputeResponse } from './resources/isochrone';
import { Lookup, LookupRetrieveParams, LookupRetrieveResponse } from './resources/lookup';
import { Map } from './resources/map';
import {
  Mdm,
  MdmCreateDistanceMatrixParams,
  MdmCreateDistanceMatrixResponse,
  MdmGetDistanceMatrixStatusParams,
  MdmGetDistanceMatrixStatusResponse,
} from './resources/mdm';
import {
  Navigation,
  NavigationRetrieveRouteParams,
  NavigationRetrieveRouteResponse,
} from './resources/navigation';
import {
  Postalcode,
  PostalcodeRetrieveCoordinatesParams,
  PostalcodeRetrieveCoordinatesResponse,
} from './resources/postalcode';
import {
  RestrictionCreateParams,
  RestrictionDeleteParams,
  RestrictionDeleteResponse,
  RestrictionListPaginatedParams,
  RestrictionListPaginatedResponse,
  RestrictionListParams,
  RestrictionListResponse,
  RestrictionRetrieveParams,
  RestrictionSetStateParams,
  RestrictionUpdateParams,
  Restrictions,
  RichGroupDtoRequest,
  RichGroupDtoResponse,
} from './resources/restrictions';
import {
  RestrictionsItemListParams,
  RestrictionsItemListResponse,
  RestrictionsItems,
} from './resources/restrictions-items';
import { Revgeocode, RevgeocodeRetrieveParams, RevgeocodeRetrieveResponse } from './resources/revgeocode';
import { RouteReport, RouteReportCreateParams, RouteReportCreateResponse } from './resources/route-report';
import { SnapToRoadSnapParams, SnapToRoadSnapResponse, SnapToRoads } from './resources/snap-to-roads';
import { Distancematrix } from './resources/distancematrix/distancematrix';
import { Fleetify } from './resources/fleetify/fleetify';
import {
  Geofence,
  GeofenceContainsParams,
  GeofenceContainsResponse,
  GeofenceCreateParams,
  GeofenceCreateResponse,
  GeofenceDeleteParams,
  GeofenceEntityCreate,
  GeofenceListParams,
  GeofenceListResponse,
  GeofenceResource,
  GeofenceRetrieveParams,
  GeofenceRetrieveResponse,
  GeofenceUpdateParams,
} from './resources/geofence/geofence';
import {
  Multigeocode,
  MultigeocodeSearchParams,
  MultigeocodeSearchResponse,
} from './resources/multigeocode/multigeocode';
import {
  Optimization,
  OptimizationComputeParams,
  OptimizationComputeResponse,
  OptimizationReOptimizeParams,
  PostResponse,
} from './resources/optimization/optimization';
import { Skynet, SkynetSubscribeParams, SkynetSubscribeResponse } from './resources/skynet/skynet';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Defaults to process.env['NEXTBILLION_SDK_API_KEY'].
   */
  apiKey?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['NEXTBILLION_SDK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['NEXTBILLION_SDK_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Nextbillion SDK API.
 */
export class NextbillionSDK {
  apiKey: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Nextbillion SDK API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['NEXTBILLION_SDK_API_KEY'] ?? null]
   * @param {string} [opts.baseURL=process.env['NEXTBILLION_SDK_BASE_URL'] ?? https://api.example.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('NEXTBILLION_SDK_BASE_URL'),
    apiKey = readEnv('NEXTBILLION_SDK_API_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.example.com`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? NextbillionSDK.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('NEXTBILLION_SDK_LOG'), "process.env['NEXTBILLION_SDK_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.example.com';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    if (this.apiKey && values.get('authorization')) {
      return;
    }
    if (nulls.has('authorization')) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the apiKey to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (this.apiKey == null) {
      return undefined;
    }
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static NextbillionSDK = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static NextbillionSDKError = Errors.NextbillionSDKError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  fleetify: API.Fleetify = new API.Fleetify(this);
  skynet: API.Skynet = new API.Skynet(this);
  geocode: API.Geocode = new API.Geocode(this);
  optimization: API.Optimization = new API.Optimization(this);
  geofence: API.GeofenceResource = new API.GeofenceResource(this);
  discover: API.Discover = new API.Discover(this);
  browse: API.Browse = new API.Browse(this);
  mdm: API.Mdm = new API.Mdm(this);
  isochrone: API.Isochrone = new API.Isochrone(this);
  restrictions: API.Restrictions = new API.Restrictions(this);
  restrictionsItems: API.RestrictionsItems = new API.RestrictionsItems(this);
  distancematrix: API.Distancematrix = new API.Distancematrix(this);
  autocomplete: API.Autocomplete = new API.Autocomplete(this);
  navigation: API.Navigation = new API.Navigation(this);
  map: API.Map = new API.Map(this);
  autosuggest: API.Autosuggest = new API.Autosuggest(this);
  directions: API.Directions = new API.Directions(this);
  batch: API.Batch = new API.Batch(this);
  multigeocode: API.Multigeocode = new API.Multigeocode(this);
  revgeocode: API.Revgeocode = new API.Revgeocode(this);
  routeReport: API.RouteReport = new API.RouteReport(this);
  snapToRoads: API.SnapToRoads = new API.SnapToRoads(this);
  postalcode: API.Postalcode = new API.Postalcode(this);
  areas: API.Areas = new API.Areas(this);
  lookup: API.Lookup = new API.Lookup(this);
}
NextbillionSDK.Fleetify = Fleetify;
NextbillionSDK.Skynet = Skynet;
NextbillionSDK.Geocode = Geocode;
NextbillionSDK.Optimization = Optimization;
NextbillionSDK.GeofenceResource = GeofenceResource;
NextbillionSDK.Discover = Discover;
NextbillionSDK.Browse = Browse;
NextbillionSDK.Mdm = Mdm;
NextbillionSDK.Isochrone = Isochrone;
NextbillionSDK.Restrictions = Restrictions;
NextbillionSDK.RestrictionsItems = RestrictionsItems;
NextbillionSDK.Distancematrix = Distancematrix;
NextbillionSDK.Autocomplete = Autocomplete;
NextbillionSDK.Navigation = Navigation;
NextbillionSDK.Map = Map;
NextbillionSDK.Autosuggest = Autosuggest;
NextbillionSDK.Directions = Directions;
NextbillionSDK.Batch = Batch;
NextbillionSDK.Multigeocode = Multigeocode;
NextbillionSDK.Revgeocode = Revgeocode;
NextbillionSDK.RouteReport = RouteReport;
NextbillionSDK.SnapToRoads = SnapToRoads;
NextbillionSDK.Postalcode = Postalcode;
NextbillionSDK.Areas = Areas;
NextbillionSDK.Lookup = Lookup;
export declare namespace NextbillionSDK {
  export type RequestOptions = Opts.RequestOptions;

  export { Fleetify as Fleetify };

  export {
    Skynet as Skynet,
    type SkynetSubscribeResponse as SkynetSubscribeResponse,
    type SkynetSubscribeParams as SkynetSubscribeParams,
  };

  export {
    Geocode as Geocode,
    type Access as Access,
    type Address as Address,
    type Categories as Categories,
    type ContactObject as ContactObject,
    type Contacts as Contacts,
    type MapView as MapView,
    type Position as Position,
    type GeocodeRetrieveResponse as GeocodeRetrieveResponse,
    type GeocodeBatchCreateResponse as GeocodeBatchCreateResponse,
    type GeocodeStructuredRetrieveResponse as GeocodeStructuredRetrieveResponse,
    type GeocodeRetrieveParams as GeocodeRetrieveParams,
    type GeocodeBatchCreateParams as GeocodeBatchCreateParams,
    type GeocodeStructuredRetrieveParams as GeocodeStructuredRetrieveParams,
  };

  export {
    Optimization as Optimization,
    type PostResponse as PostResponse,
    type OptimizationComputeResponse as OptimizationComputeResponse,
    type OptimizationComputeParams as OptimizationComputeParams,
    type OptimizationReOptimizeParams as OptimizationReOptimizeParams,
  };

  export {
    GeofenceResource as GeofenceResource,
    type Geofence as Geofence,
    type GeofenceEntityCreate as GeofenceEntityCreate,
    type GeofenceCreateResponse as GeofenceCreateResponse,
    type GeofenceRetrieveResponse as GeofenceRetrieveResponse,
    type GeofenceListResponse as GeofenceListResponse,
    type GeofenceContainsResponse as GeofenceContainsResponse,
    type GeofenceCreateParams as GeofenceCreateParams,
    type GeofenceRetrieveParams as GeofenceRetrieveParams,
    type GeofenceUpdateParams as GeofenceUpdateParams,
    type GeofenceListParams as GeofenceListParams,
    type GeofenceDeleteParams as GeofenceDeleteParams,
    type GeofenceContainsParams as GeofenceContainsParams,
  };

  export {
    Discover as Discover,
    type DiscoverRetrieveResponse as DiscoverRetrieveResponse,
    type DiscoverRetrieveParams as DiscoverRetrieveParams,
  };

  export {
    Browse as Browse,
    type BrowseSearchResponse as BrowseSearchResponse,
    type BrowseSearchParams as BrowseSearchParams,
  };

  export {
    Mdm as Mdm,
    type MdmCreateDistanceMatrixResponse as MdmCreateDistanceMatrixResponse,
    type MdmGetDistanceMatrixStatusResponse as MdmGetDistanceMatrixStatusResponse,
    type MdmCreateDistanceMatrixParams as MdmCreateDistanceMatrixParams,
    type MdmGetDistanceMatrixStatusParams as MdmGetDistanceMatrixStatusParams,
  };

  export {
    Isochrone as Isochrone,
    type IsochroneComputeResponse as IsochroneComputeResponse,
    type IsochroneComputeParams as IsochroneComputeParams,
  };

  export {
    Restrictions as Restrictions,
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

  export {
    RestrictionsItems as RestrictionsItems,
    type RestrictionsItemListResponse as RestrictionsItemListResponse,
    type RestrictionsItemListParams as RestrictionsItemListParams,
  };

  export { Distancematrix as Distancematrix };

  export {
    Autocomplete as Autocomplete,
    type AutocompleteSuggestResponse as AutocompleteSuggestResponse,
    type AutocompleteSuggestParams as AutocompleteSuggestParams,
  };

  export {
    Navigation as Navigation,
    type NavigationRetrieveRouteResponse as NavigationRetrieveRouteResponse,
    type NavigationRetrieveRouteParams as NavigationRetrieveRouteParams,
  };

  export { Map as Map };

  export {
    Autosuggest as Autosuggest,
    type AutosuggestSuggestResponse as AutosuggestSuggestResponse,
    type AutosuggestSuggestParams as AutosuggestSuggestParams,
  };

  export {
    Directions as Directions,
    type DirectionComputeRouteResponse as DirectionComputeRouteResponse,
    type DirectionComputeRouteParams as DirectionComputeRouteParams,
  };

  export {
    Batch as Batch,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchRetrieveResponse as BatchRetrieveResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchRetrieveParams as BatchRetrieveParams,
  };

  export {
    Multigeocode as Multigeocode,
    type MultigeocodeSearchResponse as MultigeocodeSearchResponse,
    type MultigeocodeSearchParams as MultigeocodeSearchParams,
  };

  export {
    Revgeocode as Revgeocode,
    type RevgeocodeRetrieveResponse as RevgeocodeRetrieveResponse,
    type RevgeocodeRetrieveParams as RevgeocodeRetrieveParams,
  };

  export {
    RouteReport as RouteReport,
    type RouteReportCreateResponse as RouteReportCreateResponse,
    type RouteReportCreateParams as RouteReportCreateParams,
  };

  export {
    SnapToRoads as SnapToRoads,
    type SnapToRoadSnapResponse as SnapToRoadSnapResponse,
    type SnapToRoadSnapParams as SnapToRoadSnapParams,
  };

  export {
    Postalcode as Postalcode,
    type PostalcodeRetrieveCoordinatesResponse as PostalcodeRetrieveCoordinatesResponse,
    type PostalcodeRetrieveCoordinatesParams as PostalcodeRetrieveCoordinatesParams,
  };

  export { Areas as Areas, type AreaListResponse as AreaListResponse, type AreaListParams as AreaListParams };

  export {
    Lookup as Lookup,
    type LookupRetrieveResponse as LookupRetrieveResponse,
    type LookupRetrieveParams as LookupRetrieveParams,
  };
}
