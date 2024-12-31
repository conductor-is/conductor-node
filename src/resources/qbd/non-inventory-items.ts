// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class NonInventoryItems extends APIResource {
  /**
   * Creates a new non-inventory item.
   */
  create(
    params: NonInventoryItemCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NonInventoryItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/non-inventory-items', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a non-inventory item by ID.
   */
  retrieve(
    id: string,
    params: NonInventoryItemRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NonInventoryItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/non-inventory-items/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing non-inventory item.
   */
  update(
    id: string,
    params: NonInventoryItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NonInventoryItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/non-inventory-items/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of non-inventory items. Use the `cursor` parameter to paginate
   * through the results.
   */
  list(
    params: NonInventoryItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<NonInventoryItemsCursorPage, NonInventoryItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/non-inventory-items', NonInventoryItemsCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class NonInventoryItemsCursorPage extends CursorPage<NonInventoryItem> {}

export interface NonInventoryItem {
  /**
   * The unique identifier assigned by QuickBooks to this non-inventory item. This ID
   * is unique across all non-inventory items but not across different QuickBooks
   * object types.
   */
  id: string;

  /**
   * The non-inventory item's barcode.
   */
  barcode: string | null;

  /**
   * The non-inventory item's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default.
   */
  class: NonInventoryItem.Class | null;

  /**
   * The date and time when this non-inventory item was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The custom fields for the non-inventory item object, added as user-defined data
   * extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<NonInventoryItem.CustomField>;

  /**
   * A globally unique identifier (GUID) you, the developer, can provide for tracking
   * this object in your external system.
   */
  externalId: string | null;

  /**
   * The case-insensitive fully-qualified unique name of this non-inventory item,
   * formed by combining the names of its hierarchical parent objects with its own
   * `name`, separated by colons. For example, if a non-inventory item is under
   * "Office Supplies" and has the `name` "Printer Ink Cartridge", its `fullName`
   * would be "Office Supplies:Printer Ink Cartridge".
   *
   * **NOTE**: Unlike `name`, `fullName` is guaranteed to be unique across all
   * non-inventory item objects. However, `fullName` can still be arbitrarily changed
   * by the QuickBooks user when they modify the underlying `name` field.
   */
  fullName: string;

  /**
   * Indicates whether this non-inventory item is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive: boolean;

  /**
   * The case-insensitive name of this non-inventory item. Not guaranteed to be
   * unique because it does not include the names of its hierarchical parent objects
   * like `fullName` does. For example, two non-inventory items could both have the
   * `name` "Printer Ink Cartridge", but they could have unique `fullName` values,
   * such as "Office Supplies:Printer Ink Cartridge" and "Miscellaneous:Printer Ink
   * Cartridge". Maximum length: 31 characters.
   */
  name: string;

  /**
   * The type of object. This value is always `"qbd_non_inventory_item"`.
   */
  objectType: 'qbd_non_inventory_item';

  /**
   * The parent non-inventory item one level above this one in the hierarchy. For
   * example, if this non-inventory item has a `fullName` of "Office Supplies:Printer
   * Ink Cartridge", its parent has a `fullName` of "Office Supplies". If this
   * non-inventory item is at the top level, this field will be `null`.
   */
  parent: NonInventoryItem.Parent | null;

  /**
   * The current revision number of this non-inventory item object, which changes
   * each time the object is modified. When updating this object, you must provide
   * the most recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * Details for non-inventory items that are both purchased and sold, such as
   * reimbursable expenses or inventory items that are bought from vendors and sold
   * to customers.
   *
   * **IMPORTANT**: A non-inventory item will have either `salesAndPurchaseDetails`
   * or `salesOrPurchaseDetails`, but never both because an item cannot have both
   * configurations.
   */
  salesAndPurchaseDetails: NonInventoryItem.SalesAndPurchaseDetails | null;

  /**
   * Details for non-inventory items that are exclusively sold or exclusively
   * purchased, but not both. This typically applies to non-inventory items (like a
   * purchased office supply that isn't resold) or service items (like consulting
   * services that are sold but not purchased).
   *
   * **IMPORTANT**: A non-inventory item will have either `salesAndPurchaseDetails`
   * or `salesOrPurchaseDetails`, but never both because an item cannot have both
   * configurations.
   */
  salesOrPurchaseDetails: NonInventoryItem.SalesOrPurchaseDetails | null;

  /**
   * The default sales-tax code for this non-inventory item, determining whether it
   * is taxable or non-taxable. This can be overridden at the transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCode: NonInventoryItem.SalesTaxCode | null;

  /**
   * The non-inventory item's stock keeping unit (SKU), which is sometimes the
   * manufacturer's part number.
   */
  sku: string | null;

  /**
   * The depth level of this non-inventory item in the hierarchy. A top-level
   * non-inventory item has a `sublevel` of 0; each subsequent sublevel increases
   * this number by 1. For example, a non-inventory item with a `fullName` of "Office
   * Supplies:Printer Ink Cartridge" would have a `sublevel` of 1.
   */
  sublevel: number;

  /**
   * The unit-of-measure set associated with this non-inventory item, which consists
   * of a base unit and related units.
   */
  unitOfMeasureSet: NonInventoryItem.UnitOfMeasureSet | null;

  /**
   * The date and time when this non-inventory item was last updated, in ISO 8601
   * format (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time
   * zone in QuickBooks.
   */
  updatedAt: string;
}

export namespace NonInventoryItem {
  /**
   * The non-inventory item's class. Classes can be used to categorize objects into
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
   * The parent non-inventory item one level above this one in the hierarchy. For
   * example, if this non-inventory item has a `fullName` of "Office Supplies:Printer
   * Ink Cartridge", its parent has a `fullName` of "Office Supplies". If this
   * non-inventory item is at the top level, this field will be `null`.
   */
  export interface Parent {
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
   * Details for non-inventory items that are both purchased and sold, such as
   * reimbursable expenses or inventory items that are bought from vendors and sold
   * to customers.
   *
   * **IMPORTANT**: A non-inventory item will have either `salesAndPurchaseDetails`
   * or `salesOrPurchaseDetails`, but never both because an item cannot have both
   * configurations.
   */
  export interface SalesAndPurchaseDetails {
    /**
     * The expense account used to track expenses from purchases of this item.
     */
    expenseAccount: SalesAndPurchaseDetails.ExpenseAccount;

    /**
     * The income account used to track revenue from sales of this item.
     */
    incomeAccount: SalesAndPurchaseDetails.IncomeAccount;

    /**
     * The preferred vendor from whom this item is typically purchased.
     */
    preferredVendor: SalesAndPurchaseDetails.PreferredVendor | null;

    /**
     * The cost at which this item is purchased from vendors, represented as a decimal
     * string.
     */
    purchaseCost: string | null;

    /**
     * The description of this item that appears on purchase forms (e.g., checks,
     * bills, item receipts) when it is ordered or bought from vendors.
     */
    purchaseDescription: string | null;

    /**
     * The tax code applied to purchases of this item. Applicable in regions where
     * purchase taxes are used, such as Canada or the UK.
     */
    purchaseTaxCode: SalesAndPurchaseDetails.PurchaseTaxCode | null;

    /**
     * The description of this item that appears on sales forms (e.g., invoices, sales
     * receipts) when sold to customers.
     */
    salesDescription: string | null;

    /**
     * The price at which this item is sold to customers, represented as a decimal
     * string.
     */
    salesPrice: string | null;
  }

  export namespace SalesAndPurchaseDetails {
    /**
     * The expense account used to track expenses from purchases of this item.
     */
    export interface ExpenseAccount {
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
     * The income account used to track revenue from sales of this item.
     */
    export interface IncomeAccount {
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
     * The preferred vendor from whom this item is typically purchased.
     */
    export interface PreferredVendor {
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
     * The tax code applied to purchases of this item. Applicable in regions where
     * purchase taxes are used, such as Canada or the UK.
     */
    export interface PurchaseTaxCode {
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

  /**
   * Details for non-inventory items that are exclusively sold or exclusively
   * purchased, but not both. This typically applies to non-inventory items (like a
   * purchased office supply that isn't resold) or service items (like consulting
   * services that are sold but not purchased).
   *
   * **IMPORTANT**: A non-inventory item will have either `salesAndPurchaseDetails`
   * or `salesOrPurchaseDetails`, but never both because an item cannot have both
   * configurations.
   */
  export interface SalesOrPurchaseDetails {
    /**
     * A description of this item.
     */
    description: string | null;

    /**
     * The posting account associated with this item, used when recording transactions
     * involving this item. This could be an income account when selling or an expense
     * account when purchasing.
     */
    postingAccount: SalesOrPurchaseDetails.PostingAccount | null;

    /**
     * The price at which this item is purchased or sold, represented as a decimal
     * string.
     */
    price: string | null;

    /**
     * The price of this item expressed as a percentage, used instead of `price` when
     * the item's cost is calculated as a percentage of another amount. For example, a
     * service item that costs a percentage of another item's price.
     */
    pricePercentage: string | null;
  }

  export namespace SalesOrPurchaseDetails {
    /**
     * The posting account associated with this item, used when recording transactions
     * involving this item. This could be an income account when selling or an expense
     * account when purchasing.
     */
    export interface PostingAccount {
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

  /**
   * The default sales-tax code for this non-inventory item, determining whether it
   * is taxable or non-taxable. This can be overridden at the transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  export interface SalesTaxCode {
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
   * The unit-of-measure set associated with this non-inventory item, which consists
   * of a base unit and related units.
   */
  export interface UnitOfMeasureSet {
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

export interface NonInventoryItemCreateParams {
  /**
   * Body param: The case-insensitive name of this non-inventory item. Not guaranteed
   * to be unique because it does not include the names of its hierarchical parent
   * objects like `fullName` does. For example, two non-inventory items could both
   * have the `name` "Printer Ink Cartridge", but they could have unique `fullName`
   * values, such as "Office Supplies:Printer Ink Cartridge" and
   * "Miscellaneous:Printer Ink Cartridge". Maximum length: 31 characters.
   */
  name: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The non-inventory item's barcode.
   */
  barcode?: NonInventoryItemCreateParams.Barcode;

  /**
   * Body param: The non-inventory item's class. Classes can be used to categorize
   * objects into meaningful segments, such as department, location, or type of work.
   * In QuickBooks, class tracking is off by default.
   */
  classId?: string;

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
   * Body param: Indicates whether this non-inventory item is active. Inactive
   * objects are typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The parent non-inventory item one level above this one in the
   * hierarchy. For example, if this non-inventory item has a `fullName` of "Office
   * Supplies:Printer Ink Cartridge", its parent has a `fullName` of "Office
   * Supplies". If this non-inventory item is at the top level, this field will be
   * `null`.
   */
  parentId?: string;

  /**
   * Body param: Details for non-inventory items that are both purchased and sold,
   * such as reimbursable expenses or inventory items that are bought from vendors
   * and sold to customers.
   *
   * **IMPORTANT**: You must specify either `salesAndPurchaseDetails` or
   * `salesOrPurchaseDetails` when creating a non-inventory item, but never both
   * because an item cannot have both configurations.
   */
  salesAndPurchaseDetails?: NonInventoryItemCreateParams.SalesAndPurchaseDetails;

  /**
   * Body param: Details for non-inventory items that are exclusively sold or
   * exclusively purchased, but not both. This typically applies to non-inventory
   * items (like a purchased office supply that isn't resold) or service items (like
   * consulting services that are sold but not purchased).
   *
   * **IMPORTANT**: You must specify either `salesOrPurchaseDetails` or
   * `salesAndPurchaseDetails` when creating a non-inventory item, but never both
   * because an item cannot have both configurations.
   */
  salesOrPurchaseDetails?: NonInventoryItemCreateParams.SalesOrPurchaseDetails;

  /**
   * Body param: The default sales-tax code for this non-inventory item, determining
   * whether it is taxable or non-taxable. This can be overridden at the
   * transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCodeId?: string;

  /**
   * Body param: The non-inventory item's stock keeping unit (SKU), which is
   * sometimes the manufacturer's part number.
   */
  sku?: string;

  /**
   * Body param: The unit-of-measure set associated with this non-inventory item,
   * which consists of a base unit and related units.
   */
  unitOfMeasureSetId?: string;
}

export namespace NonInventoryItemCreateParams {
  /**
   * The non-inventory item's barcode.
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

  /**
   * Details for non-inventory items that are both purchased and sold, such as
   * reimbursable expenses or inventory items that are bought from vendors and sold
   * to customers.
   *
   * **IMPORTANT**: You must specify either `salesAndPurchaseDetails` or
   * `salesOrPurchaseDetails` when creating a non-inventory item, but never both
   * because an item cannot have both configurations.
   */
  export interface SalesAndPurchaseDetails {
    /**
     * The expense account used to track expenses from purchases of this item.
     */
    expenseAccountId: string;

    /**
     * The income account used to track revenue from sales of this item.
     */
    incomeAccountId: string;

    /**
     * The preferred vendor from whom this item is typically purchased.
     */
    preferredVendorId?: string;

    /**
     * The cost at which this item is purchased from vendors, represented as a decimal
     * string.
     */
    purchaseCost?: string;

    /**
     * The description of this item that appears on purchase forms (e.g., checks,
     * bills, item receipts) when it is ordered or bought from vendors.
     */
    purchaseDescription?: string;

    /**
     * The tax code applied to purchases of this item. Applicable in regions where
     * purchase taxes are used, such as Canada or the UK.
     */
    purchaseTaxCodeId?: string;

    /**
     * The description of this item that appears on sales forms (e.g., invoices, sales
     * receipts) when sold to customers.
     */
    salesDescription?: string;

    /**
     * The price at which this item is sold to customers, represented as a decimal
     * string.
     */
    salesPrice?: string;
  }

  /**
   * Details for non-inventory items that are exclusively sold or exclusively
   * purchased, but not both. This typically applies to non-inventory items (like a
   * purchased office supply that isn't resold) or service items (like consulting
   * services that are sold but not purchased).
   *
   * **IMPORTANT**: You must specify either `salesOrPurchaseDetails` or
   * `salesAndPurchaseDetails` when creating a non-inventory item, but never both
   * because an item cannot have both configurations.
   */
  export interface SalesOrPurchaseDetails {
    /**
     * The posting account associated with this item, used when recording transactions
     * involving this item. This could be an income account when selling or an expense
     * account when purchasing.
     */
    postingAccountId: string;

    /**
     * A description of this item.
     */
    description?: string;

    /**
     * The price at which this item is purchased or sold, represented as a decimal
     * string.
     */
    price?: string;

    /**
     * The price of this item expressed as a percentage, used instead of `price` when
     * the item's cost is calculated as a percentage of another amount. For example, a
     * service item that costs a percentage of another item's price.
     */
    pricePercentage?: string;
  }
}

export interface NonInventoryItemRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface NonInventoryItemUpdateParams {
  /**
   * Body param: The current revision number of the non-inventory item object you are
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
   * Body param: The non-inventory item's barcode.
   */
  barcode?: NonInventoryItemUpdateParams.Barcode;

  /**
   * Body param: The non-inventory item's class. Classes can be used to categorize
   * objects into meaningful segments, such as department, location, or type of work.
   * In QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: Indicates whether to allow changing the non-inventory item's
   * unit-of-measure set (using the `unitOfMeasureSetId` field) when the base unit of
   * the new unit-of-measure set does not match that of the currently assigned set.
   * Without setting this field to `true` in this scenario, the request will fail
   * with an error; hence, this field is equivalent to accepting the warning prompt
   * in the QuickBooks UI.
   *
   * NOTE: Changing the base unit requires you to update the item's
   * quantities-on-hand and cost to reflect the new unit; otherwise, these values
   * will be inaccurate. Alternatively, consider creating a new item with the desired
   * unit-of-measure set and deactivating the old item.
   */
  forceUnitOfMeasureChange?: boolean;

  /**
   * Body param: Indicates whether this non-inventory item is active. Inactive
   * objects are typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The case-insensitive name of this non-inventory item. Not guaranteed
   * to be unique because it does not include the names of its hierarchical parent
   * objects like `fullName` does. For example, two non-inventory items could both
   * have the `name` "Printer Ink Cartridge", but they could have unique `fullName`
   * values, such as "Office Supplies:Printer Ink Cartridge" and
   * "Miscellaneous:Printer Ink Cartridge". Maximum length: 31 characters.
   */
  name?: string;

  /**
   * Body param: The parent non-inventory item one level above this one in the
   * hierarchy. For example, if this non-inventory item has a `fullName` of "Office
   * Supplies:Printer Ink Cartridge", its parent has a `fullName` of "Office
   * Supplies". If this non-inventory item is at the top level, this field will be
   * `null`.
   */
  parentId?: string;

  /**
   * Body param: Details for non-inventory items that are both purchased and sold,
   * such as reimbursable expenses or inventory items that are bought from vendors
   * and sold to customers.
   *
   * **IMPORTANT**: You cannot specify both `salesAndPurchaseDetails` and
   * `salesOrPurchaseDetails` when modifying a non-inventory item because an item
   * cannot have both configurations.
   */
  salesAndPurchaseDetails?: NonInventoryItemUpdateParams.SalesAndPurchaseDetails;

  /**
   * Body param: Details for non-inventory items that are exclusively sold or
   * exclusively purchased, but not both. This typically applies to non-inventory
   * items (like a purchased office supply that isn't resold) or service items (like
   * consulting services that are sold but not purchased).
   *
   * **IMPORTANT**: You cannot specify both `salesOrPurchaseDetails` and
   * `salesAndPurchaseDetails` when modifying a non-inventory item because an item
   * cannot have both configurations.
   */
  salesOrPurchaseDetails?: NonInventoryItemUpdateParams.SalesOrPurchaseDetails;

  /**
   * Body param: The default sales-tax code for this non-inventory item, determining
   * whether it is taxable or non-taxable. This can be overridden at the
   * transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCodeId?: string;

  /**
   * Body param: The non-inventory item's stock keeping unit (SKU), which is
   * sometimes the manufacturer's part number.
   */
  sku?: string;

  /**
   * Body param: The unit-of-measure set associated with this non-inventory item,
   * which consists of a base unit and related units.
   */
  unitOfMeasureSetId?: string;
}

export namespace NonInventoryItemUpdateParams {
  /**
   * The non-inventory item's barcode.
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

  /**
   * Details for non-inventory items that are both purchased and sold, such as
   * reimbursable expenses or inventory items that are bought from vendors and sold
   * to customers.
   *
   * **IMPORTANT**: You cannot specify both `salesAndPurchaseDetails` and
   * `salesOrPurchaseDetails` when modifying a non-inventory item because an item
   * cannot have both configurations.
   */
  export interface SalesAndPurchaseDetails {
    /**
     * The expense account used to track expenses from purchases of this item.
     */
    expenseAccountId?: string;

    /**
     * The income account used to track revenue from sales of this item.
     */
    incomeAccountId?: string;

    /**
     * The preferred vendor from whom this item is typically purchased.
     */
    preferredVendorId?: string;

    /**
     * The cost at which this item is purchased from vendors, represented as a decimal
     * string.
     */
    purchaseCost?: string;

    /**
     * The description of this item that appears on purchase forms (e.g., checks,
     * bills, item receipts) when it is ordered or bought from vendors.
     */
    purchaseDescription?: string;

    /**
     * The tax code applied to purchases of this item. Applicable in regions where
     * purchase taxes are used, such as Canada or the UK.
     */
    purchaseTaxCodeId?: string;

    /**
     * The description of this item that appears on sales forms (e.g., invoices, sales
     * receipts) when sold to customers.
     */
    salesDescription?: string;

    /**
     * The price at which this item is sold to customers, represented as a decimal
     * string.
     */
    salesPrice?: string;

    /**
     * When `true`, applies the new expense account (specified by the
     * `expenseAccountId` field) to all existing transactions that use this item. This
     * updates historical data and should be used with caution. The update will fail if
     * any affected transaction falls within a closed accounting period. If this
     * parameter is not specified, QuickBooks will prompt the user before making any
     * changes.
     */
    updateExistingTransactionsExpenseAccount?: boolean;

    /**
     * When `true`, applies the new income account (specified by the `incomeAccountId`
     * field) to all existing transactions that use this item. This updates historical
     * data and should be used with caution. The update will fail if any affected
     * transaction falls within a closed accounting period. If this parameter is not
     * specified, QuickBooks will prompt the user before making any changes.
     */
    updateExistingTransactionsIncomeAccount?: boolean;
  }

  /**
   * Details for non-inventory items that are exclusively sold or exclusively
   * purchased, but not both. This typically applies to non-inventory items (like a
   * purchased office supply that isn't resold) or service items (like consulting
   * services that are sold but not purchased).
   *
   * **IMPORTANT**: You cannot specify both `salesOrPurchaseDetails` and
   * `salesAndPurchaseDetails` when modifying a non-inventory item because an item
   * cannot have both configurations.
   */
  export interface SalesOrPurchaseDetails {
    /**
     * A description of this item.
     */
    description?: string;

    /**
     * The posting account associated with this item, used when recording transactions
     * involving this item. This could be an income account when selling or an expense
     * account when purchasing.
     */
    postingAccountId?: string;

    /**
     * The price at which this item is purchased or sold, represented as a decimal
     * string.
     */
    price?: string;

    /**
     * The price of this item expressed as a percentage, used instead of `price` when
     * the item's cost is calculated as a percentage of another amount. For example, a
     * service item that costs a percentage of another item's price.
     */
    pricePercentage?: string;

    /**
     * When `true`, applies the new account (specified by the `accountId` field) to all
     * existing transactions associated with this item. This updates historical data
     * and should be used with caution. The update will fail if any affected
     * transaction falls within a closed accounting period. If this parameter is not
     * specified, QuickBooks will prompt the user before making any changes.
     */
    updateExistingTransactionsAccount?: boolean;
  }
}

export interface NonInventoryItemListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for non-inventory items of these classes. A class is a way
   * end-users can categorize non-inventory items in QuickBooks.
   */
  classIds?: Array<string>;

  /**
   * Query param: Filter for specific non-inventory items by their full-name(s),
   * case-insensitive. Like `id`, `fullName` is a unique identifier for a
   * non-inventory item, formed by by combining the names of its parent objects with
   * its own `name`, separated by colons. For example, if a non-inventory item is
   * under "Office Supplies" and has the `name` "Printer Ink Cartridge", its
   * `fullName` would be "Office Supplies:Printer Ink Cartridge".
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  fullNames?: Array<string>;

  /**
   * Query param: Filter for specific non-inventory items by their
   * QuickBooks-assigned unique identifier(s).
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  ids?: Array<string>;

  /**
   * Query param: Filter for non-inventory items whose `name` contains this
   * substring, case-insensitive. NOTE: If you use this parameter, you cannot also
   * use `nameStartsWith` or `nameEndsWith`.
   */
  nameContains?: string;

  /**
   * Query param: Filter for non-inventory items whose `name` ends with this
   * substring, case-insensitive. NOTE: If you use this parameter, you cannot also
   * use `nameContains` or `nameStartsWith`.
   */
  nameEndsWith?: string;

  /**
   * Query param: Filter for non-inventory items whose `name` is alphabetically
   * greater than or equal to this value.
   */
  nameFrom?: string;

  /**
   * Query param: Filter for non-inventory items whose `name` starts with this
   * substring, case-insensitive. NOTE: If you use this parameter, you cannot also
   * use `nameContains` or `nameEndsWith`.
   */
  nameStartsWith?: string;

  /**
   * Query param: Filter for non-inventory items whose `name` is alphabetically less
   * than or equal to this value.
   */
  nameTo?: string;

  /**
   * Query param: Filter for non-inventory items that are active, inactive, or both.
   */
  status?: 'active' | 'all' | 'inactive';

  /**
   * Query param: Filter for non-inventory items updated on or after this date and
   * time, in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for non-inventory items updated on or before this date and
   * time, in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

NonInventoryItems.NonInventoryItemsCursorPage = NonInventoryItemsCursorPage;

export declare namespace NonInventoryItems {
  export {
    type NonInventoryItem as NonInventoryItem,
    NonInventoryItemsCursorPage as NonInventoryItemsCursorPage,
    type NonInventoryItemCreateParams as NonInventoryItemCreateParams,
    type NonInventoryItemRetrieveParams as NonInventoryItemRetrieveParams,
    type NonInventoryItemUpdateParams as NonInventoryItemUpdateParams,
    type NonInventoryItemListParams as NonInventoryItemListParams,
  };
}
