// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AuthSessions extends APIResource {
  /**
   * To launch the authentication flow, create an AuthSession and pass the returned
   * session’s `authFlowUrl` to the client for your end-user to visit in their
   * browser.
   */
  create(body: AuthSessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<AuthSession> {
    return this._client.post('/auth-sessions', { body, ...options });
  }

  /**
   * Retrieves the details of an AuthSession that has previously been created.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<AuthSession> {
    return this._client.get(`/auth-sessions/${id}`, options);
  }
}

export interface AuthSession {
  /**
   * The unique identifier for this AuthSession.
   */
  id: string;

  /**
   * The URL of the authentication flow that you will pass to your client for your
   * user to set up their IntegrationConnection.
   */
  authFlowUrl: string;

  /**
   * The secret used in `authFlowUrl` to securely access the authentication flow.
   */
  clientSecret: string;

  /**
   * The date and time when this AuthSession was created.
   */
  createdAt: string;

  /**
   * The ID of the EndUser for whom to create an IntegrationConnection.
   */
  endUserId: string;

  /**
   * The date and time when this AuthSession expires. By default, this value is 30
   * minutes from creation. You can extend this time by setting `linkExpiryMins` when
   * [creating the AuthSession](/apis/auth-sessions/create).
   */
  expiresAt: string;

  /**
   * The type of object. This value is always `"auth_session"`.
   */
  objectType: 'auth_session';

  /**
   * The URL to which Conductor will redirect your user to return to your app after
   * they complete the authentication flow. If `null`, their browser tab will close
   * instead.
   */
  redirectUrl: string | null;
}

export interface AuthSessionCreateParams {
  /**
   * The ID of the EndUser for whom to create the IntegrationConnection.
   */
  endUserId: string;

  /**
   * Your Conductor publishable key, which we use to create the session’s
   * `authFlowUrl`.
   */
  publishableKey: string;

  /**
   * The number of minutes after which the AuthSession will expire. Must be at least
   * 15 minutes and no more than 7 days. If not provided, defaults to 30 minutes.
   */
  linkExpiryMins?: number;

  /**
   * The URL to which Conductor will redirect the end-user to return to your app
   * after they complete the authentication flow. If not provided, their browser tab
   * will close instead.
   */
  redirectUrl?: string;
}

export declare namespace AuthSessions {
  export { type AuthSession as AuthSession, type AuthSessionCreateParams as AuthSessionCreateParams };
}
