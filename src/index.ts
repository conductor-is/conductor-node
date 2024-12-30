// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type CursorPageParams, CursorPageResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { AuthSession, AuthSessionCreateParams, AuthSessions } from './resources/auth-sessions';
import {
  EndUser,
  EndUserCreateParams,
  EndUserDeleteResponse,
  EndUserListResponse,
  EndUserPassthroughParams,
  EndUserPassthroughResponse,
  EndUserPingResponse,
  EndUsers,
} from './resources/end-users';
import { Qbd } from './resources/qbd/qbd';

export interface ClientOptions {
  /**
   * Defaults to process.env['CONDUCTOR_SECRET_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['CONDUCTOR_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Conductor API.
 */
export class Conductor extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Conductor API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['CONDUCTOR_SECRET_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['CONDUCTOR_BASE_URL'] ?? https://api.conductor.is/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=2 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('CONDUCTOR_BASE_URL'),
    apiKey = Core.readEnv('CONDUCTOR_SECRET_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.ConductorError(
        "The CONDUCTOR_SECRET_KEY environment variable is missing or empty; either provide it, or instantiate the Conductor client with an apiKey option, like new Conductor({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.conductor.is/v1`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 120000 /* 2 minutes */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  authSessions: API.AuthSessions = new API.AuthSessions(this);
  endUsers: API.EndUsers = new API.EndUsers(this);
  qbd: API.Qbd = new API.Qbd(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { allowDots: true, arrayFormat: 'comma' });
  }

  static Conductor = this;
  static DEFAULT_TIMEOUT = 120000; // 2 minutes

  static ConductorError = Errors.ConductorError;
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
  static fileFromPath = Uploads.fileFromPath;
}

Conductor.AuthSessions = AuthSessions;
Conductor.EndUsers = EndUsers;
Conductor.Qbd = Qbd;
export declare namespace Conductor {
  export type RequestOptions = Core.RequestOptions;

  export import CursorPage = Pagination.CursorPage;
  export { type CursorPageParams as CursorPageParams, type CursorPageResponse as CursorPageResponse };

  export {
    AuthSessions as AuthSessions,
    type AuthSession as AuthSession,
    type AuthSessionCreateParams as AuthSessionCreateParams,
  };

  export {
    EndUsers as EndUsers,
    type EndUser as EndUser,
    type EndUserListResponse as EndUserListResponse,
    type EndUserDeleteResponse as EndUserDeleteResponse,
    type EndUserPassthroughResponse as EndUserPassthroughResponse,
    type EndUserPingResponse as EndUserPingResponse,
    type EndUserCreateParams as EndUserCreateParams,
    type EndUserPassthroughParams as EndUserPassthroughParams,
  };

  export { Qbd as Qbd };
}

export { toFile, fileFromPath } from './uploads';
export {
  ConductorError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Conductor;
