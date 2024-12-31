// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class InventoryItems extends APIResource {
  /**
   * Creates a new inventory item.
   */
  create(params: InventoryItemCreateParams, options?: Core.RequestOptions): Core.APIPromise<InventoryItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/inventory-items', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves an inventory item by ID.
   */
  retrieve(
    id: string,
    params: InventoryItemRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InventoryItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/inventory-items/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing inventory item.
   */
  update(
    id: string,
    params: InventoryItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InventoryItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/inventory-items/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of inventory items. Use the `cursor` parameter to paginate
   * through the results.
   */
  list(
    params: InventoryItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InventoryItemsCursorPage, InventoryItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/inventory-items', InventoryItemsCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class InventoryItemsCursorPage extends CursorPage<InventoryItem> {}

export interface InventoryItem {
  /**
   * The unique identifier assigned by QuickBooks to this inventory item. This ID is
   * unique across all inventory items but not across different QuickBooks object
   * types.
   */
  id: string;

  /**
   * The asset account used to track the current value of this inventory item in
   * inventory.
   */
  assetAccount: InventoryItem.AssetAccount;

  /**
   * The average cost per unit of this inventory item, represented as a decimal
   * string.
   */
  averageCost: string | null;

  /**
   * The inventory item's barcode.
   */
  barcode: string | null;

  /**
   * The inventory item's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default.
   */
  class: InventoryItem.Class | null;

  /**
   * The Cost of Goods Sold (COGS) account for this inventory item, tracking the
   * original direct costs of producing goods sold.
   */
  cogsAccount: InventoryItem.CogsAccount;

  /**
   * The date and time when this inventory item was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The custom fields for the inventory item object, added as user-defined data
   * extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<InventoryItem.CustomField>;

  /**
   * A globally unique identifier (GUID) you, the developer, can provide for tracking
   * this object in your external system.
   */
  externalId: string | null;

  /**
   * The case-insensitive fully-qualified unique name of this inventory item, formed
   * by combining the names of its hierarchical parent objects with its own `name`,
   * separated by colons. For example, if an inventory item is under
   * "Products:Electronics" and has the `name` "Widgets", its `fullName` would be
   * "Products:Electronics:Widgets".
   *
   * **NOTE**: Unlike `name`, `fullName` is guaranteed to be unique across all
   * inventory item objects. However, `fullName` can still be arbitrarily changed by
   * the QuickBooks user when they modify the underlying `name` field.
   */
  fullName: string;

  /**
   * The income account used to track revenue from sales of this inventory item.
   */
  incomeAccount: InventoryItem.IncomeAccount;

  /**
   * Indicates whether this inventory item is active. Inactive objects are typically
   * hidden from views and reports in QuickBooks.
   */
  isActive: boolean;

  /**
   * The maximum quantity of this inventory item desired in inventory.
   */
  maximumQuantityOnHand: number | null;

  /**
   * The case-insensitive name of this inventory item. Not guaranteed to be unique
   * because it does not include the names of its hierarchical parent objects like
   * `fullName` does. For example, two inventory items could both have the `name`
   * "Cabinet", but they could have unique `fullName` values, such as
   * "Kitchen:Cabinet" and "Inventory:Cabinet". Maximum length: 31 characters.
   */
  name: string;

  /**
   * The type of object. This value is always `"qbd_inventory_item"`.
   */
  objectType: 'qbd_inventory_item';

  /**
   * The parent inventory item one level above this one in the hierarchy. For
   * example, if this inventory item has a `fullName` of "Kitchen:Cabinet", its
   * parent has a `fullName` of "Kitchen". If this inventory item is at the top
   * level, this field will be `null`.
   */
  parent: InventoryItem.Parent | null;

  /**
   * The preferred vendor from whom this inventory item is typically purchased.
   */
  preferredVendor: InventoryItem.PreferredVendor | null;

  /**
   * The cost at which this inventory item is purchased from vendors, represented as
   * a decimal string.
   */
  purchaseCost: string | null;

  /**
   * The description of this inventory item that appears on purchase forms (e.g.,
   * checks, bills, item receipts) when it is ordered or bought from vendors.
   */
  purchaseDescription: string | null;

  /**
   * The tax code applied to purchases of this inventory item. Applicable in regions
   * where purchase taxes are used, such as Canada or the UK.
   */
  purchaseTaxCode: InventoryItem.PurchaseTaxCode | null;

  /**
   * The current quantity of this inventory item available in inventory. To change
   * the `quantityOnHand` for an inventory item, you must create an
   * inventory-adjustment instead of updating this inventory item directly.
   */
  quantityOnHand: number | null;

  /**
   * The number of units of this inventory item that have been ordered from vendors
   * (as recorded in purchase orders) but not yet received.
   */
  quantityOnOrder: number | null;

  /**
   * The number of units of this inventory item that have been sold (as recorded in
   * sales orders) but not yet fulfilled or delivered to customers.
   */
  quantityOnSalesOrder: number | null;

  /**
   * The minimum quantity of this inventory item at which QuickBooks prompts for
   * reordering.
   */
  reorderPoint: number | null;

  /**
   * The current revision number of this inventory item object, which changes each
   * time the object is modified. When updating this object, you must provide the
   * most recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The description of this inventory item that appears on sales forms (e.g.,
   * invoices, sales receipts) when sold to customers.
   */
  salesDescription: string | null;

  /**
   * The price at which this inventory item is sold to customers, represented as a
   * decimal string.
   */
  salesPrice: string | null;

  /**
   * The default sales-tax code for this inventory item, determining whether it is
   * taxable or non-taxable. This can be overridden at the transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCode: InventoryItem.SalesTaxCode | null;

  /**
   * The inventory item's stock keeping unit (SKU), which is sometimes the
   * manufacturer's part number.
   */
  sku: string | null;

  /**
   * The depth level of this inventory item in the hierarchy. A top-level inventory
   * item has a `sublevel` of 0; each subsequent sublevel increases this number by 1.
   * For example, an inventory item with a `fullName` of "Kitchen:Cabinet" would have
   * a `sublevel` of 1.
   */
  sublevel: number;

  /**
   * The unit-of-measure set associated with this inventory item, which consists of a
   * base unit and related units.
   */
  unitOfMeasureSet: InventoryItem.UnitOfMeasureSet | null;

  /**
   * The date and time when this inventory item was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace InventoryItem {
  /**
   * The asset account used to track the current value of this inventory item in
   * inventory.
   */
  export interface AssetAccount {
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
   * The inventory item's class. Classes can be used to categorize objects into
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

  /**
   * The Cost of Goods Sold (COGS) account for this inventory item, tracking the
   * original direct costs of producing goods sold.
   */
  export interface CogsAccount {
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
   * The income account used to track revenue from sales of this inventory item.
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
   * The parent inventory item one level above this one in the hierarchy. For
   * example, if this inventory item has a `fullName` of "Kitchen:Cabinet", its
   * parent has a `fullName` of "Kitchen". If this inventory item is at the top
   * level, this field will be `null`.
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
   * The preferred vendor from whom this inventory item is typically purchased.
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
   * The tax code applied to purchases of this inventory item. Applicable in regions
   * where purchase taxes are used, such as Canada or the UK.
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

  /**
   * The default sales-tax code for this inventory item, determining whether it is
   * taxable or non-taxable. This can be overridden at the transaction-line level.
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
   * The unit-of-measure set associated with this inventory item, which consists of a
   * base unit and related units.
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

export interface InventoryItemCreateParams {
  /**
   * Body param: The asset account used to track the current value of this inventory
   * item in inventory.
   */
  assetAccountId: string;

  /**
   * Body param: The Cost of Goods Sold (COGS) account for this inventory item,
   * tracking the original direct costs of producing goods sold.
   */
  cogsAccountId: string;

  /**
   * Body param: The income account used to track revenue from sales of this
   * inventory item.
   */
  incomeAccountId: string;

  /**
   * Body param: The case-insensitive name of this inventory item. Not guaranteed to
   * be unique because it does not include the names of its hierarchical parent
   * objects like `fullName` does. For example, two inventory items could both have
   * the `name` "Cabinet", but they could have unique `fullName` values, such as
   * "Kitchen:Cabinet" and "Inventory:Cabinet". Maximum length: 31 characters.
   */
  name: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The inventory item's barcode.
   */
  barcode?: InventoryItemCreateParams.Barcode;

  /**
   * Body param: The inventory item's class. Classes can be used to categorize
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
   * Body param: The date when this inventory item was converted into an inventory
   * item from some other type of item, in ISO 8601 format (YYYY-MM-DD).
   */
  inventoryDate?: string;

  /**
   * Body param: Indicates whether this inventory item is active. Inactive objects
   * are typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The maximum quantity of this inventory item desired in inventory.
   */
  maximumQuantityOnHand?: number;

  /**
   * Body param: The parent inventory item one level above this one in the hierarchy.
   * For example, if this inventory item has a `fullName` of "Kitchen:Cabinet", its
   * parent has a `fullName` of "Kitchen". If this inventory item is at the top
   * level, this field will be `null`.
   */
  parentId?: string;

  /**
   * Body param: The preferred vendor from whom this inventory item is typically
   * purchased.
   */
  preferredVendorId?: string;

  /**
   * Body param: The cost at which this inventory item is purchased from vendors,
   * represented as a decimal string.
   */
  purchaseCost?: string;

  /**
   * Body param: The description of this inventory item that appears on purchase
   * forms (e.g., checks, bills, item receipts) when it is ordered or bought from
   * vendors.
   */
  purchaseDescription?: string;

  /**
   * Body param: The tax code applied to purchases of this inventory item. Applicable
   * in regions where purchase taxes are used, such as Canada or the UK.
   */
  purchaseTaxCodeId?: string;

  /**
   * Body param: The current quantity of this inventory item available in inventory.
   * To change the `quantityOnHand` for an inventory item, you must create an
   * inventory-adjustment instead of updating this inventory item directly.
   */
  quantityOnHand?: number;

  /**
   * Body param: The minimum quantity of this inventory item at which QuickBooks
   * prompts for reordering.
   */
  reorderPoint?: number;

  /**
   * Body param: The description of this inventory item that appears on sales forms
   * (e.g., invoices, sales receipts) when sold to customers.
   */
  salesDescription?: string;

  /**
   * Body param: The price at which this inventory item is sold to customers,
   * represented as a decimal string.
   */
  salesPrice?: string;

  /**
   * Body param: The default sales-tax code for this inventory item, determining
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
   * Body param: The inventory item's stock keeping unit (SKU), which is sometimes
   * the manufacturer's part number.
   */
  sku?: string;

  /**
   * Body param: The total value of this inventory item. If `totalValue` is provided,
   * `quantityOnHand` must also be provided and must be greater than zero. If both
   * `quantityOnHand` and `purchaseCost` are provided, then `totalValue` will be set
   * to `quantityOnHand` times `purchaseCost`, regardless of what `totalValue` is
   * explicitly set to.
   */
  totalValue?: string;

  /**
   * Body param: The unit-of-measure set associated with this inventory item, which
   * consists of a base unit and related units.
   */
  unitOfMeasureSetId?: string;
}

export namespace InventoryItemCreateParams {
  /**
   * The inventory item's barcode.
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

export interface InventoryItemRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface InventoryItemUpdateParams {
  /**
   * Body param: The current revision number of the inventory item object you are
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
   * Body param: The asset account used to track the current value of this inventory
   * item in inventory.
   */
  assetAccountId?: string;

  /**
   * Body param: The inventory item's barcode.
   */
  barcode?: InventoryItemUpdateParams.Barcode;

  /**
   * Body param: The inventory item's class. Classes can be used to categorize
   * objects into meaningful segments, such as department, location, or type of work.
   * In QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: The Cost of Goods Sold (COGS) account for this inventory item,
   * tracking the original direct costs of producing goods sold.
   */
  cogsAccountId?: string;

  /**
   * Body param: Indicates whether to allow changing the inventory item's
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
   * Body param: The income account used to track revenue from sales of this
   * inventory item.
   */
  incomeAccountId?: string;

  /**
   * Body param: Indicates whether this inventory item is active. Inactive objects
   * are typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The maximum quantity of this inventory item desired in inventory.
   */
  maximumQuantityOnHand?: number;

  /**
   * Body param: The case-insensitive name of this inventory item. Not guaranteed to
   * be unique because it does not include the names of its hierarchical parent
   * objects like `fullName` does. For example, two inventory items could both have
   * the `name` "Cabinet", but they could have unique `fullName` values, such as
   * "Kitchen:Cabinet" and "Inventory:Cabinet". Maximum length: 31 characters.
   */
  name?: string;

  /**
   * Body param: The parent inventory item one level above this one in the hierarchy.
   * For example, if this inventory item has a `fullName` of "Kitchen:Cabinet", its
   * parent has a `fullName` of "Kitchen". If this inventory item is at the top
   * level, this field will be `null`.
   */
  parentId?: string;

  /**
   * Body param: The preferred vendor from whom this inventory item is typically
   * purchased.
   */
  preferredVendorId?: string;

  /**
   * Body param: The cost at which this inventory item is purchased from vendors,
   * represented as a decimal string.
   */
  purchaseCost?: string;

  /**
   * Body param: The description of this inventory item that appears on purchase
   * forms (e.g., checks, bills, item receipts) when it is ordered or bought from
   * vendors.
   */
  purchaseDescription?: string;

  /**
   * Body param: The tax code applied to purchases of this inventory item. Applicable
   * in regions where purchase taxes are used, such as Canada or the UK.
   */
  purchaseTaxCodeId?: string;

  /**
   * Body param: The minimum quantity of this inventory item at which QuickBooks
   * prompts for reordering.
   */
  reorderPoint?: number;

  /**
   * Body param: The description of this inventory item that appears on sales forms
   * (e.g., invoices, sales receipts) when sold to customers.
   */
  salesDescription?: string;

  /**
   * Body param: The price at which this inventory item is sold to customers,
   * represented as a decimal string.
   */
  salesPrice?: string;

  /**
   * Body param: The default sales-tax code for this inventory item, determining
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
   * Body param: The inventory item's stock keeping unit (SKU), which is sometimes
   * the manufacturer's part number.
   */
  sku?: string;

  /**
   * Body param: The unit-of-measure set associated with this inventory item, which
   * consists of a base unit and related units.
   */
  unitOfMeasureSetId?: string;

  /**
   * Body param: When `true`, applies the new COGS account (specified by the
   * `cogsAccountId` field) to all existing transactions that use this inventory
   * item. This updates historical data and should be used with caution. The update
   * will fail if any affected transaction falls within a closed accounting period.
   * If this parameter is not specified, QuickBooks will prompt the user before
   * making any changes.
   */
  updateExistingTransactionsCogsAccount?: boolean;

  /**
   * Body param: When `true`, applies the new income account (specified by the
   * `incomeAccountId` field) to all existing transactions that use this inventory
   * item. This updates historical data and should be used with caution. The update
   * will fail if any affected transaction falls within a closed accounting period.
   * If this parameter is not specified, QuickBooks will prompt the user before
   * making any changes.
   */
  updateExistingTransactionsIncomeAccount?: boolean;
}

export namespace InventoryItemUpdateParams {
  /**
   * The inventory item's barcode.
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

export interface InventoryItemListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for inventory items of these classes. A class is a way
   * end-users can categorize inventory items in QuickBooks.
   */
  classIds?: Array<string>;

  /**
   * Query param: Filter for specific inventory items by their full-name(s),
   * case-insensitive. Like `id`, `fullName` is a unique identifier for an inventory
   * item, formed by by combining the names of its parent objects with its own
   * `name`, separated by colons. For example, if an inventory item is under
   * "Kitchen" and has the `name` "Cabinet", its `fullName` would be
   * "Kitchen:Cabinet".
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  fullNames?: Array<string>;

  /**
   * Query param: Filter for specific inventory items by their QuickBooks-assigned
   * unique identifier(s).
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  ids?: Array<string>;

  /**
   * Query param: Filter for inventory items whose `name` contains this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameStartsWith` or `nameEndsWith`.
   */
  nameContains?: string;

  /**
   * Query param: Filter for inventory items whose `name` ends with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameStartsWith`.
   */
  nameEndsWith?: string;

  /**
   * Query param: Filter for inventory items whose `name` is alphabetically greater
   * than or equal to this value.
   */
  nameFrom?: string;

  /**
   * Query param: Filter for inventory items whose `name` starts with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameEndsWith`.
   */
  nameStartsWith?: string;

  /**
   * Query param: Filter for inventory items whose `name` is alphabetically less than
   * or equal to this value.
   */
  nameTo?: string;

  /**
   * Query param: Filter for inventory items that are active, inactive, or both.
   */
  status?: 'active' | 'all' | 'inactive';

  /**
   * Query param: Filter for inventory items updated on or after this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   *
   * **WARNING**: Due to a known issue in QuickBooks Desktop, the `updatedAfter`
   * parameter may not correctly filter inventory items by their updated dates. To
   * accurately retrieve the desired inventory items, we recommend avoiding this
   * parameter and instead fetching a broader dataset, then filtering the results
   * locally using the `updatedAt` property.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for inventory items updated on or before this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   *
   * **WARNING**: Due to a known issue in QuickBooks Desktop, the `updatedBefore`
   * parameter may not correctly filter inventory items by their updated dates. To
   * accurately retrieve the desired inventory items, we recommend avoiding this
   * parameter and instead fetching a broader dataset, then filtering the results
   * locally using the `updatedAt` property.
   */
  updatedBefore?: string;
}

InventoryItems.InventoryItemsCursorPage = InventoryItemsCursorPage;

export declare namespace InventoryItems {
  export {
    type InventoryItem as InventoryItem,
    InventoryItemsCursorPage as InventoryItemsCursorPage,
    type InventoryItemCreateParams as InventoryItemCreateParams,
    type InventoryItemRetrieveParams as InventoryItemRetrieveParams,
    type InventoryItemUpdateParams as InventoryItemUpdateParams,
    type InventoryItemListParams as InventoryItemListParams,
  };
}
