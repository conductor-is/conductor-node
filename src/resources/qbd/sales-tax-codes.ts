// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class SalesTaxCodes extends APIResource {
  /**
   * Creates a new sales-tax code.
   */
  create(params: SalesTaxCodeCreateParams, options?: Core.RequestOptions): Core.APIPromise<SalesTaxCode> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/sales-tax-codes', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a sales-tax code by ID.
   */
  retrieve(
    id: string,
    params: SalesTaxCodeRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SalesTaxCode> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/sales-tax-codes/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing sales-tax code.
   */
  update(
    id: string,
    params: SalesTaxCodeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SalesTaxCode> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/sales-tax-codes/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of sales-tax codes. NOTE: QuickBooks Desktop does not support
   * pagination for sales-tax codes; hence, there is no `cursor` parameter. Users
   * typically have few sales-tax codes.
   */
  list(
    params: SalesTaxCodeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SalesTaxCodeListResponse> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.get('/quickbooks-desktop/sales-tax-codes', {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export interface SalesTaxCode {
  /**
   * The unique identifier assigned by QuickBooks to this sales-tax code. This ID is
   * unique across all sales-tax codes but not across different QuickBooks object
   * types.
   */
  id: string;

  /**
   * The date and time when this sales-tax code was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * A description of this sales-tax code.
   */
  description: string | null;

  /**
   * Indicates whether this sales-tax code is active. Inactive objects are typically
   * hidden from views and reports in QuickBooks.
   */
  isActive: boolean;

  /**
   * Indicates whether this sales-tax code is tracking taxable sales. This field
   * cannot be modified once the sales-tax code has been used in a transaction.
   */
  isTaxable: boolean;

  /**
   * The case-insensitive unique name of this sales-tax code, unique across all
   * sales-tax codes.
   *
   * **NOTE**: Sales-tax codes do not have a `fullName` field because they are not
   * hierarchical objects, which is why `name` is unique for them but not for objects
   * that have parents. Maximum length: 3 characters. This short name will appear on
   * sales forms to identify the tax status of an item.
   */
  name: string;

  /**
   * The type of object. This value is always `"qbd_sales_tax_code"`.
   */
  objectType: 'qbd_sales_tax_code';

  /**
   * The current revision number of this sales-tax code object, which changes each
   * time the object is modified. When updating this object, you must provide the
   * most recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The sales-tax item used to calculate the actual tax amount for this sales-tax
   * code's transactions by applying a specific tax rate collected for a single tax
   * agency. Unlike `salesTaxCode`, which only indicates general taxability, this
   * field drives the actual tax calculation and reporting.
   */
  salesTaxItem: SalesTaxCode.SalesTaxItem | null;

  /**
   * The date and time when this sales-tax code was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace SalesTaxCode {
  /**
   * The sales-tax item used to calculate the actual tax amount for this sales-tax
   * code's transactions by applying a specific tax rate collected for a single tax
   * agency. Unlike `salesTaxCode`, which only indicates general taxability, this
   * field drives the actual tax calculation and reporting.
   */
  export interface SalesTaxItem {
    /**
     * The unique identifier assigned by QuickBooks to this object. This ID is unique
     * across all objects of the same type, but not across different QuickBooks object
     * types.
     */
    id: string | null;

    /**
     * The fully-qualified unique name for this object, formed by combining the names
     * of its parent objects with its own `name`, separated by colons. Not
     * case-sensitive.
     */
    fullName: string | null;
  }
}

export interface SalesTaxCodeListResponse {
  /**
   * The array of sales-tax codes.
   */
  data: Array<SalesTaxCode>;

  /**
   * The type of object. This value is always `"list"`.
   */
  objectType: 'list';

  /**
   * The endpoint URL where this list can be accessed.
   */
  url: string;
}

export interface SalesTaxCodeCreateParams {
  /**
   * Body param: Indicates whether this sales-tax code is tracking taxable sales.
   * This field cannot be modified once the sales-tax code has been used in a
   * transaction.
   */
  isTaxable: boolean;

  /**
   * Body param: The case-insensitive unique name of this sales-tax code, unique
   * across all sales-tax codes.
   *
   * **NOTE**: Sales-tax codes do not have a `fullName` field because they are not
   * hierarchical objects, which is why `name` is unique for them but not for objects
   * that have parents. Maximum length: 3 characters. This short name will appear on
   * sales forms to identify the tax status of an item.
   */
  name: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: A description of this sales-tax code.
   */
  description?: string;

  /**
   * Body param: Indicates whether this sales-tax code is active. Inactive objects
   * are typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The sales-tax item used to calculate the actual tax amount for this
   * sales-tax code's transactions by applying a specific tax rate collected for a
   * single tax agency. Unlike `salesTaxCode`, which only indicates general
   * taxability, this field drives the actual tax calculation and reporting.
   */
  salesTaxItemId?: string;
}

export interface SalesTaxCodeRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface SalesTaxCodeUpdateParams {
  /**
   * Body param: The current revision number of the sales-tax code object you are
   * updating, which you can get by fetching the object first. Provide the most
   * recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: A description of this sales-tax code.
   */
  description?: string;

  /**
   * Body param: Indicates whether this sales-tax code is active. Inactive objects
   * are typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: Indicates whether this sales-tax code is tracking taxable sales.
   * This field cannot be modified once the sales-tax code has been used in a
   * transaction.
   */
  isTaxable?: boolean;

  /**
   * Body param: The case-insensitive unique name of this sales-tax code, unique
   * across all sales-tax codes.
   *
   * **NOTE**: Sales-tax codes do not have a `fullName` field because they are not
   * hierarchical objects, which is why `name` is unique for them but not for objects
   * that have parents. Maximum length: 3 characters. This short name will appear on
   * sales forms to identify the tax status of an item.
   */
  name?: string;

  /**
   * Body param: The sales-tax item used to calculate the actual tax amount for this
   * sales-tax code's transactions by applying a specific tax rate collected for a
   * single tax agency. Unlike `salesTaxCode`, which only indicates general
   * taxability, this field drives the actual tax calculation and reporting.
   */
  salesTaxItemId?: string;
}

export interface SalesTaxCodeListParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for specific sales-tax codes by their QuickBooks-assigned
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
   * sales-tax codes. Hence, this parameter will limit the response size, but you
   * will not be able to fetch the next set of results. If needed, you can paginate
   * by fetching batches via the name-range (e.g., `nameFrom=A&nameTo=B`) query
   * parameters.
   */
  limit?: number;

  /**
   * Query param: Filter for sales-tax codes whose `name` contains this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameStartsWith` or `nameEndsWith`.
   */
  nameContains?: string;

  /**
   * Query param: Filter for sales-tax codes whose `name` ends with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameStartsWith`.
   */
  nameEndsWith?: string;

  /**
   * Query param: Filter for sales-tax codes whose `name` is alphabetically greater
   * than or equal to this value.
   */
  nameFrom?: string;

  /**
   * Query param: Filter for specific sales-tax codes by their name(s),
   * case-insensitive. Like `id`, `name` is a unique identifier for a sales-tax code.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  names?: Array<string>;

  /**
   * Query param: Filter for sales-tax codes whose `name` starts with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameEndsWith`.
   */
  nameStartsWith?: string;

  /**
   * Query param: Filter for sales-tax codes whose `name` is alphabetically less than
   * or equal to this value.
   */
  nameTo?: string;

  /**
   * Query param: Filter for sales-tax codes that are active, inactive, or both.
   */
  status?: 'active' | 'all' | 'inactive';

  /**
   * Query param: Filter for sales-tax codes updated on or after this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for sales-tax codes updated on or before this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

export declare namespace SalesTaxCodes {
  export {
    type SalesTaxCode as SalesTaxCode,
    type SalesTaxCodeListResponse as SalesTaxCodeListResponse,
    type SalesTaxCodeCreateParams as SalesTaxCodeCreateParams,
    type SalesTaxCodeRetrieveParams as SalesTaxCodeRetrieveParams,
    type SalesTaxCodeUpdateParams as SalesTaxCodeUpdateParams,
    type SalesTaxCodeListParams as SalesTaxCodeListParams,
  };
}
