// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class SalesTaxItems extends APIResource {
  /**
   * Creates a new sales-tax item.
   */
  create(params: SalesTaxItemCreateParams, options?: Core.RequestOptions): Core.APIPromise<SalesTaxItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/sales-tax-items', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a sales-tax item by ID.
   */
  retrieve(
    id: string,
    params: SalesTaxItemRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SalesTaxItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/sales-tax-items/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing sales-tax item.
   */
  update(
    id: string,
    params: SalesTaxItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SalesTaxItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/sales-tax-items/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of sales-tax items. Use the `cursor` parameter to paginate
   * through the results.
   */
  list(
    params: SalesTaxItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SalesTaxItemsCursorPage, SalesTaxItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/sales-tax-items', SalesTaxItemsCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class SalesTaxItemsCursorPage extends CursorPage<SalesTaxItem> {}

export interface SalesTaxItem {
  /**
   * The unique identifier assigned by QuickBooks to this sales-tax item. This ID is
   * unique across all sales-tax items but not across different QuickBooks object
   * types.
   */
  id: string;

  /**
   * The sales-tax item's barcode.
   */
  barcode: string | null;

  /**
   * The sales-tax item's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default.
   */
  class: SalesTaxItem.Class | null;

  /**
   * The date and time when this sales-tax item was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The custom fields for the sales-tax item object, added as user-defined data
   * extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<SalesTaxItem.CustomField>;

  /**
   * The sales-tax item's description that will appear on sales forms that include
   * this item.
   */
  description: string | null;

  /**
   * A globally unique identifier (GUID) you, the developer, can provide for tracking
   * this object in your external system.
   */
  externalId: string | null;

  /**
   * Indicates whether this sales-tax item is active. Inactive objects are typically
   * hidden from views and reports in QuickBooks.
   */
  isActive: boolean;

  /**
   * The case-insensitive unique name of this sales-tax item, unique across all
   * sales-tax items.
   *
   * **NOTE**: Sales-tax items do not have a `fullName` field because they are not
   * hierarchical objects, which is why `name` is unique for them but not for objects
   * that have parents. Maximum length: 31 characters.
   */
  name: string;

  /**
   * The type of object. This value is always `"qbd_sales_tax_item"`.
   */
  objectType: 'qbd_sales_tax_item';

  /**
   * The current revision number of this sales-tax item object, which changes each
   * time the object is modified. When updating this object, you must provide the
   * most recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The specific line on the sales tax return form where the tax collected using
   * this sales-tax item should be reported.
   */
  salesTaxReturnLine: SalesTaxItem.SalesTaxReturnLine | null;

  /**
   * The tax rate defined by this sales-tax item, represented as a decimal string.
   * For example, "7.5" represents a 7.5% tax rate. This rate determines the amount
   * of sales tax applied when this item is used in transactions. If a non-zero
   * `taxRate` is specified, then the `taxVendor` field is required.
   */
  taxRate: string | null;

  /**
   * The tax agency (vendor) to whom collected sales taxes are owed for this
   * sales-tax item. This field refers to a vendor in QuickBooks that represents the
   * tax authority. If a non-zero `taxRate` is specified, then `taxVendor` is
   * required.
   */
  taxVendor: SalesTaxItem.TaxVendor | null;

  /**
   * The date and time when this sales-tax item was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace SalesTaxItem {
  /**
   * The sales-tax item's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default.
   */
  export interface Class {
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

  export interface CustomField {
    /**
     * The name of the custom field, unique for the specified `ownerId`. For public
     * custom fields, this name is visible as a label in the QuickBooks UI.
     */
    name: string;

    /**
     * The identifier of the owner of the custom field, which QuickBooks internally
     * calls a "data extension". For public custom fields visible in the UI, such as
     * those added by the QuickBooks user, this is always "0". For private custom
     * fields that are only visible to the application that created them, this is a
     * valid GUID identifying the owning application. Internally, Conductor always
     * fetches all public custom fields (those with an `ownerId` of "0") for all
     * objects.
     */
    ownerId: string;

    /**
     * The data type of this custom field.
     */
    type:
      | 'amount_type'
      | 'date_time_type'
      | 'integer_type'
      | 'percent_type'
      | 'price_type'
      | 'quantity_type'
      | 'string_1024_type'
      | 'string_255_type';

    /**
     * The value of this custom field. The maximum length depends on the field's data
     * type.
     */
    value: string;
  }

  /**
   * The specific line on the sales tax return form where the tax collected using
   * this sales-tax item should be reported.
   */
  export interface SalesTaxReturnLine {
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

  /**
   * The tax agency (vendor) to whom collected sales taxes are owed for this
   * sales-tax item. This field refers to a vendor in QuickBooks that represents the
   * tax authority. If a non-zero `taxRate` is specified, then `taxVendor` is
   * required.
   */
  export interface TaxVendor {
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

export interface SalesTaxItemCreateParams {
  /**
   * Body param: The case-insensitive unique name of this sales-tax item, unique
   * across all sales-tax items.
   *
   * **NOTE**: Sales-tax items do not have a `fullName` field because they are not
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
   * Body param: The sales-tax item's barcode.
   */
  barcode?: SalesTaxItemCreateParams.Barcode;

  /**
   * Body param: The sales-tax item's class. Classes can be used to categorize
   * objects into meaningful segments, such as department, location, or type of work.
   * In QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: The sales-tax item's description that will appear on sales forms
   * that include this item.
   */
  description?: string;

  /**
   * Body param: A globally unique identifier (GUID) you, the developer, can provide
   * for tracking this object in your external system.
   *
   * **IMPORTANT**: Must be formatted as a valid GUID; otherwise, QuickBooks will
   * return an error. This field is immutable and can only be set during object
   * creation.
   */
  externalId?: string;

  /**
   * Body param: Indicates whether this sales-tax item is active. Inactive objects
   * are typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The specific line on the sales tax return form where the tax
   * collected using this sales-tax item should be reported.
   */
  salesTaxReturnLineId?: string;

  /**
   * Body param: The tax rate defined by this sales-tax item, represented as a
   * decimal string. For example, "7.5" represents a 7.5% tax rate. This rate
   * determines the amount of sales tax applied when this item is used in
   * transactions. If a non-zero `taxRate` is specified, then the `taxVendor` field
   * is required.
   */
  taxRate?: string;

  /**
   * Body param: The tax agency (vendor) to whom collected sales taxes are owed for
   * this sales-tax item. This field refers to a vendor in QuickBooks that represents
   * the tax authority. If a non-zero `taxRate` is specified, then `taxVendor` is
   * required.
   */
  taxVendorId?: string;
}

export namespace SalesTaxItemCreateParams {
  /**
   * The sales-tax item's barcode.
   */
  export interface Barcode {
    /**
     * Indicates whether to allow the barcode to be overridden.
     */
    allowOverride?: boolean;

    /**
     * Indicates whether to assign the barcode even if it is already used.
     */
    assignEvenIfUsed?: boolean;

    /**
     * The item's barcode value.
     */
    value?: string;
  }
}

export interface SalesTaxItemRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface SalesTaxItemUpdateParams {
  /**
   * Body param: The current revision number of the sales-tax item object you are
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
   * Body param: The sales-tax item's barcode.
   */
  barcode?: SalesTaxItemUpdateParams.Barcode;

  /**
   * Body param: The sales-tax item's class. Classes can be used to categorize
   * objects into meaningful segments, such as department, location, or type of work.
   * In QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: The sales-tax item's description that will appear on sales forms
   * that include this item.
   */
  description?: string;

  /**
   * Body param: Indicates whether this sales-tax item is active. Inactive objects
   * are typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The case-insensitive unique name of this sales-tax item, unique
   * across all sales-tax items.
   *
   * **NOTE**: Sales-tax items do not have a `fullName` field because they are not
   * hierarchical objects, which is why `name` is unique for them but not for objects
   * that have parents. Maximum length: 31 characters.
   */
  name?: string;

  /**
   * Body param: The specific line on the sales tax return form where the tax
   * collected using this sales-tax item should be reported.
   */
  salesTaxReturnLineId?: string;

  /**
   * Body param: The tax rate defined by this sales-tax item, represented as a
   * decimal string. For example, "7.5" represents a 7.5% tax rate. This rate
   * determines the amount of sales tax applied when this item is used in
   * transactions. If a non-zero `taxRate` is specified, then the `taxVendor` field
   * is required.
   */
  taxRate?: string;

  /**
   * Body param: The tax agency (vendor) to whom collected sales taxes are owed for
   * this sales-tax item. This field refers to a vendor in QuickBooks that represents
   * the tax authority. If a non-zero `taxRate` is specified, then `taxVendor` is
   * required.
   */
  taxVendorId?: string;
}

export namespace SalesTaxItemUpdateParams {
  /**
   * The sales-tax item's barcode.
   */
  export interface Barcode {
    /**
     * Indicates whether to allow the barcode to be overridden.
     */
    allowOverride?: boolean;

    /**
     * Indicates whether to assign the barcode even if it is already used.
     */
    assignEvenIfUsed?: boolean;

    /**
     * The item's barcode value.
     */
    value?: string;
  }
}

export interface SalesTaxItemListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for sales-tax items of these classes. A class is a way
   * end-users can categorize sales-tax items in QuickBooks.
   */
  classIds?: Array<string>;

  /**
   * Query param: Filter for specific sales-tax items by their QuickBooks-assigned
   * unique identifier(s).
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  ids?: Array<string>;

  /**
   * Query param: Filter for sales-tax items whose `name` contains this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameStartsWith` or `nameEndsWith`.
   */
  nameContains?: string;

  /**
   * Query param: Filter for sales-tax items whose `name` ends with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameStartsWith`.
   */
  nameEndsWith?: string;

  /**
   * Query param: Filter for sales-tax items whose `name` is alphabetically greater
   * than or equal to this value.
   */
  nameFrom?: string;

  /**
   * Query param: Filter for specific sales-tax items by their name(s),
   * case-insensitive. Like `id`, `name` is a unique identifier for a sales-tax item.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  names?: Array<string>;

  /**
   * Query param: Filter for sales-tax items whose `name` starts with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameEndsWith`.
   */
  nameStartsWith?: string;

  /**
   * Query param: Filter for sales-tax items whose `name` is alphabetically less than
   * or equal to this value.
   */
  nameTo?: string;

  /**
   * Query param: Filter for sales-tax items that are active, inactive, or both.
   */
  status?: 'active' | 'all' | 'inactive';

  /**
   * Query param: Filter for sales-tax items updated on or after this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for sales-tax items updated on or before this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

SalesTaxItems.SalesTaxItemsCursorPage = SalesTaxItemsCursorPage;

export declare namespace SalesTaxItems {
  export {
    type SalesTaxItem as SalesTaxItem,
    SalesTaxItemsCursorPage as SalesTaxItemsCursorPage,
    type SalesTaxItemCreateParams as SalesTaxItemCreateParams,
    type SalesTaxItemRetrieveParams as SalesTaxItemRetrieveParams,
    type SalesTaxItemUpdateParams as SalesTaxItemUpdateParams,
    type SalesTaxItemListParams as SalesTaxItemListParams,
  };
}
