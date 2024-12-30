// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class StandardTerms extends APIResource {
  /**
   * Creates a new standard term.
   */
  create(params: StandardTermCreateParams, options?: Core.RequestOptions): Core.APIPromise<StandardTerm> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/standard-terms', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a standard term by ID.
   */
  retrieve(
    id: string,
    params: StandardTermRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StandardTerm> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/standard-terms/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of standard terms. NOTE: QuickBooks Desktop does not support
   * pagination for standard terms; hence, there is no `cursor` parameter. Users
   * typically have few standard terms.
   */
  list(
    params: StandardTermListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StandardTermListResponse> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.get('/quickbooks-desktop/standard-terms', {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export interface StandardTerm {
  /**
   * The unique identifier assigned by QuickBooks to this standard term. This ID is
   * unique across all standard terms but not across different QuickBooks object
   * types.
   */
  id: string;

  /**
   * The date and time when this standard term was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The number of days within which payment must be received to qualify for the
   * discount specified by `discountPercentage`.
   */
  discountDays: number | null;

  /**
   * The discount percentage applied to the payment if received within the number of
   * days specified by `discountDays`. The value is between 0 and 100.
   */
  discountPercentage: string | null;

  /**
   * The number of days until payment is due.
   */
  dueDays: number | null;

  /**
   * Indicates whether this standard term is active. Inactive objects are typically
   * hidden from views and reports in QuickBooks.
   */
  isActive: boolean;

  /**
   * The case-insensitive unique name of this standard term, unique across all
   * standard terms.
   *
   * **NOTE**: Standard terms do not have a `fullName` field because they are not
   * hierarchical objects, which is why `name` is unique for them but not for objects
   * that have parents. Maximum length: 31 characters.
   */
  name: string;

  /**
   * The type of object. This value is always `"qbd_standard_term"`.
   */
  objectType: 'qbd_standard_term';

  /**
   * The current revision number of this standard term object, which changes each
   * time the object is modified. When updating this object, you must provide the
   * most recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The date and time when this standard term was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export interface StandardTermListResponse {
  /**
   * The array of standard terms.
   */
  data: Array<StandardTerm>;

  /**
   * The type of object. This value is always `"list"`.
   */
  objectType: 'list';

  /**
   * The endpoint URL where this list can be accessed.
   */
  url: string;
}

export interface StandardTermCreateParams {
  /**
   * Body param: The case-insensitive unique name of this standard term, unique
   * across all standard terms.
   *
   * **NOTE**: Standard terms do not have a `fullName` field because they are not
   * hierarchical objects, which is why `name` is unique for them but not for objects
   * that have parents. Maximum length: 31 characters.
   */
  name: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The number of days within which payment must be received to qualify
   * for the discount specified by `discountPercentage`.
   */
  discountDays?: number;

  /**
   * Body param: The discount percentage applied to the payment if received within
   * the number of days specified by `discountDays`. The value is between 0 and 100.
   */
  discountPercentage?: string;

  /**
   * Body param: The number of days until payment is due.
   */
  dueDays?: number;

  /**
   * Body param: Indicates whether this standard term is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;
}

export interface StandardTermRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface StandardTermListParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for specific standard terms by their QuickBooks-assigned
   * unique identifier(s).
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  ids?: Array<string>;

  /**
   * Query param: The maximum number of objects to return.
   *
   * **IMPORTANT**: QuickBooks Desktop does not support cursor-based pagination for
   * standard terms. Hence, this parameter will limit the response size, but you will
   * not be able to fetch the next set of results. If needed, you can paginate by
   * fetching batches via the name-range (e.g., `nameFrom=A&nameTo=B`) query
   * parameters.
   */
  limit?: number;

  /**
   * Query param: Filter for standard terms whose `name` contains this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameStartsWith` or `nameEndsWith`.
   */
  nameContains?: string;

  /**
   * Query param: Filter for standard terms whose `name` ends with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameStartsWith`.
   */
  nameEndsWith?: string;

  /**
   * Query param: Filter for standard terms whose `name` is alphabetically greater
   * than or equal to this value.
   */
  nameFrom?: string;

  /**
   * Query param: Filter for specific standard terms by their name(s),
   * case-insensitive. Like `id`, `name` is a unique identifier for a standard term.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  names?: Array<string>;

  /**
   * Query param: Filter for standard terms whose `name` starts with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameEndsWith`.
   */
  nameStartsWith?: string;

  /**
   * Query param: Filter for standard terms whose `name` is alphabetically less than
   * or equal to this value.
   */
  nameTo?: string;

  /**
   * Query param: Filter for standard terms that are active, inactive, or both.
   */
  status?: 'active' | 'all' | 'inactive';

  /**
   * Query param: Filter for standard terms updated on or after this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for standard terms updated on or before this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

export declare namespace StandardTerms {
  export {
    type StandardTerm as StandardTerm,
    type StandardTermListResponse as StandardTermListResponse,
    type StandardTermCreateParams as StandardTermCreateParams,
    type StandardTermRetrieveParams as StandardTermRetrieveParams,
    type StandardTermListParams as StandardTermListParams,
  };
}
