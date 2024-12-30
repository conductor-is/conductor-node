// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class InventoryAssemblyItems extends APIResource {
  /**
   * Creates a new inventory assembly item.
   */
  create(
    params: InventoryAssemblyItemCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InventoryAssemblyItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/inventory-assembly-items', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves an inventory assembly item by ID.
   */
  retrieve(
    id: string,
    params: InventoryAssemblyItemRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InventoryAssemblyItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/inventory-assembly-items/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing inventory assembly item.
   */
  update(
    id: string,
    params: InventoryAssemblyItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InventoryAssemblyItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/inventory-assembly-items/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of inventory assembly items. Use the `cursor` parameter to
   * paginate through the results.
   */
  list(
    params: InventoryAssemblyItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InventoryAssemblyItemsCursorPage, InventoryAssemblyItem> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList(
      '/quickbooks-desktop/inventory-assembly-items',
      InventoryAssemblyItemsCursorPage,
      { query, ...options, headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers } },
    );
  }
}

export class InventoryAssemblyItemsCursorPage extends CursorPage<InventoryAssemblyItem> {}

export interface InventoryAssemblyItem {
  /**
   * The unique identifier assigned by QuickBooks to this inventory assembly item.
   * This ID is unique across all inventory assembly items but not across different
   * QuickBooks object types.
   */
  id: string;

  /**
   * The asset account used to track the current value of this inventory assembly
   * item in inventory.
   */
  assetAccount: InventoryAssemblyItem.AssetAccount;

  /**
   * The average cost per unit of this inventory assembly item, represented as a
   * decimal string.
   */
  averageCost: string | null;

  /**
   * The inventory assembly item's barcode.
   */
  barcode: string | null;

  /**
   * The inventory assembly item's minimum quantity threshold that triggers a build
   * notification in QuickBooks. When the sum of `quantityOnHand` (current inventory)
   * and `quantityOnOrder` (pending purchase orders) drops below this threshold,
   * QuickBooks will notify users that more units need to be built or assembled. This
   * helps ensure adequate inventory levels for inventory assembly items.
   */
  buildNotificationThreshold: number | null;

  /**
   * The inventory assembly item's class. Classes can be used to categorize objects
   * into meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default.
   */
  class: InventoryAssemblyItem.Class | null;

  /**
   * The Cost of Goods Sold (COGS) account for this inventory assembly item, tracking
   * the original direct costs of producing goods sold.
   */
  cogsAccount: InventoryAssemblyItem.CogsAccount;

  /**
   * The date and time when this inventory assembly item was created, in ISO 8601
   * format (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time
   * zone in QuickBooks.
   */
  createdAt: string;

  /**
   * The custom fields for the inventory assembly item object, added as user-defined
   * data extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<InventoryAssemblyItem.CustomField>;

  /**
   * A globally unique identifier (GUID) you can provide for tracking this object in
   * your external system.
   *
   * **IMPORTANT**: Must be formatted as a valid GUID; otherwise, QuickBooks will
   * return an error. This field is immutable and can only be set during object
   * creation.
   */
  externalId: string | null;

  /**
   * The case-insensitive fully-qualified unique name of this inventory assembly
   * item, formed by combining the names of its hierarchical parent objects with its
   * own `name`, separated by colons. For example, if an inventory assembly item is
   * under "Assemblies" and has the `name` "Deluxe Kit", its `fullName` would be
   * "Assemblies:Deluxe Kit".
   *
   * **NOTE**: Unlike `name`, `fullName` is guaranteed to be unique across all
   * inventory assembly item objects. However, `fullName` can still be arbitrarily
   * changed by the QuickBooks user when they modify the underlying `name` field.
   */
  fullName: string;

  /**
   * The income account used to track revenue from sales of this inventory assembly
   * item.
   */
  incomeAccount: InventoryAssemblyItem.IncomeAccount;

  /**
   * Indicates whether this inventory assembly item is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive: boolean;

  /**
   * The inventory assembly item's lines.
   */
  lines: Array<InventoryAssemblyItem.Line>;

  /**
   * The maximum quantity of this inventory assembly item desired in inventory.
   */
  maximumQuantityOnHand: number | null;

  /**
   * The case-insensitive name of this inventory assembly item. Not guaranteed to be
   * unique because it does not include the names of its hierarchical parent objects
   * like `fullName` does. For example, two inventory assembly items could both have
   * the `name` "Deluxe Kit", but they could have unique `fullName` values, such as
   * "Assemblies:Deluxe Kit" and "Inventory:Deluxe Kit". Maximum length: 31
   * characters.
   */
  name: string;

  /**
   * The type of object. This value is always `"qbd_inventory_assembly_item"`.
   */
  objectType: 'qbd_inventory_assembly_item';

  /**
   * The parent inventory assembly item one level above this one in the hierarchy.
   * For example, if this inventory assembly item has a `fullName` of
   * "Assemblies:Deluxe Kit", its parent has a `fullName` of "Assemblies". If this
   * inventory assembly item is at the top level, this field will be `null`.
   */
  parent: InventoryAssemblyItem.Parent | null;

  /**
   * The preferred vendor from whom this inventory assembly item is typically
   * purchased.
   */
  preferredVendor: InventoryAssemblyItem.PreferredVendor | null;

  /**
   * The cost at which this inventory assembly item is purchased from vendors,
   * represented as a decimal string.
   */
  purchaseCost: string | null;

  /**
   * The description of this inventory assembly item that appears on purchase forms
   * (e.g., checks, bills, item receipts) when it is ordered or bought from vendors.
   */
  purchaseDescription: string | null;

  /**
   * The tax code applied to purchases of this inventory assembly item. Applicable in
   * regions where purchase taxes are used, such as Canada or the UK.
   */
  purchaseTaxCode: InventoryAssemblyItem.PurchaseTaxCode | null;

  /**
   * The current quantity of this inventory assembly item available in inventory. To
   * change the `quantityOnHand` for an inventory assembly item, you must create an
   * inventory-adjustment instead of updating this inventory assembly item directly.
   */
  quantityOnHand: number | null;

  /**
   * The number of units of this inventory assembly item that have been ordered from
   * vendors (as recorded in purchase orders) but not yet received.
   */
  quantityOnOrder: number | null;

  /**
   * The number of units of this inventory assembly item that have been sold (as
   * recorded in sales orders) but not yet fulfilled or delivered to customers.
   */
  quantityOnSalesOrder: number | null;

  /**
   * The current revision number of this inventory assembly item object, which
   * changes each time the object is modified. When updating this object, you must
   * provide the most recent `revisionNumber` to ensure you're working with the
   * latest data; otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The description of this inventory assembly item that appears on sales forms
   * (e.g., invoices, sales receipts) when sold to customers.
   */
  salesDescription: string | null;

  /**
   * The price at which this inventory assembly item is sold to customers,
   * represented as a decimal string.
   */
  salesPrice: string | null;

  /**
   * The default sales-tax code for this inventory assembly item, determining whether
   * it is taxable or non-taxable. This can be overridden at the transaction-line
   * level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCode: InventoryAssemblyItem.SalesTaxCode | null;

  /**
   * The inventory assembly item's stock keeping unit (SKU), which is sometimes the
   * manufacturer's part number.
   */
  sku: string | null;

  /**
   * The depth level of this inventory assembly item in the hierarchy. A top-level
   * inventory assembly item has a `sublevel` of 0; each subsequent sublevel
   * increases this number by 1. For example, an inventory assembly item with a
   * `fullName` of "Assemblies:Deluxe Kit" would have a `sublevel` of 1.
   */
  sublevel: number;

  /**
   * The unit-of-measure set associated with this inventory assembly item, which
   * consists of a base unit and related units.
   */
  unitOfMeasureSet: InventoryAssemblyItem.UnitOfMeasureSet | null;

  /**
   * The date and time when this inventory assembly item was last updated, in ISO
   * 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's
   * time zone in QuickBooks.
   */
  updatedAt: string;
}

export namespace InventoryAssemblyItem {
  /**
   * The asset account used to track the current value of this inventory assembly
   * item in inventory.
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
   * The inventory assembly item's class. Classes can be used to categorize objects
   * into meaningful segments, such as department, location, or type of work. In
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
   * The Cost of Goods Sold (COGS) account for this inventory assembly item, tracking
   * the original direct costs of producing goods sold.
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
   * The income account used to track revenue from sales of this inventory assembly
   * item.
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

  export interface Line {
    /**
     * The inventory item associated with this inventory assembly item line.
     */
    inventoryItem: Line.InventoryItem | null;

    /**
     * The quantity of the item associated with this inventory assembly item line. This
     * field cannot be cleared.
     */
    quantity: number | null;
  }

  export namespace Line {
    /**
     * The inventory item associated with this inventory assembly item line.
     */
    export interface InventoryItem {
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
   * The parent inventory assembly item one level above this one in the hierarchy.
   * For example, if this inventory assembly item has a `fullName` of
   * "Assemblies:Deluxe Kit", its parent has a `fullName` of "Assemblies". If this
   * inventory assembly item is at the top level, this field will be `null`.
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
   * The preferred vendor from whom this inventory assembly item is typically
   * purchased.
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
   * The tax code applied to purchases of this inventory assembly item. Applicable in
   * regions where purchase taxes are used, such as Canada or the UK.
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
   * The default sales-tax code for this inventory assembly item, determining whether
   * it is taxable or non-taxable. This can be overridden at the transaction-line
   * level.
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
   * The unit-of-measure set associated with this inventory assembly item, which
   * consists of a base unit and related units.
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

export interface InventoryAssemblyItemCreateParams {
  /**
   * Body param: The asset account used to track the current value of this inventory
   * assembly item in inventory.
   */
  assetAccountId: string;

  /**
   * Body param: The Cost of Goods Sold (COGS) account for this inventory assembly
   * item, tracking the original direct costs of producing goods sold.
   */
  cogsAccountId: string;

  /**
   * Body param: The income account used to track revenue from sales of this
   * inventory assembly item.
   */
  incomeAccountId: string;

  /**
   * Body param: The case-insensitive name of this inventory assembly item. Not
   * guaranteed to be unique because it does not include the names of its
   * hierarchical parent objects like `fullName` does. For example, two inventory
   * assembly items could both have the `name` "Deluxe Kit", but they could have
   * unique `fullName` values, such as "Assemblies:Deluxe Kit" and "Inventory:Deluxe
   * Kit". Maximum length: 31 characters.
   */
  name: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The inventory assembly item's barcode.
   */
  barcode?: InventoryAssemblyItemCreateParams.Barcode;

  /**
   * Body param: The inventory assembly item's minimum quantity threshold that
   * triggers a build notification in QuickBooks. When the sum of `quantityOnHand`
   * (current inventory) and `quantityOnOrder` (pending purchase orders) drops below
   * this threshold, QuickBooks will notify users that more units need to be built or
   * assembled. This helps ensure adequate inventory levels for inventory assembly
   * items.
   */
  buildNotificationThreshold?: number;

  /**
   * Body param: The inventory assembly item's class. Classes can be used to
   * categorize objects into meaningful segments, such as department, location, or
   * type of work. In QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: A globally unique identifier (GUID) you can provide for tracking
   * this object in your external system.
   *
   * **IMPORTANT**: Must be formatted as a valid GUID; otherwise, QuickBooks will
   * return an error. This field is immutable and can only be set during object
   * creation.
   */
  externalId?: string;

  /**
   * Body param: The date when this inventory assembly item was converted into an
   * inventory item from some other type of item, in ISO 8601 format (YYYY-MM-DD).
   */
  inventoryDate?: string;

  /**
   * Body param: Indicates whether this inventory assembly item is active. Inactive
   * objects are typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The inventory assembly item's lines.
   */
  lines?: Array<InventoryAssemblyItemCreateParams.Line>;

  /**
   * Body param: The maximum quantity of this inventory assembly item desired in
   * inventory.
   */
  maximumQuantityOnHand?: number;

  /**
   * Body param: The parent inventory assembly item one level above this one in the
   * hierarchy. For example, if this inventory assembly item has a `fullName` of
   * "Assemblies:Deluxe Kit", its parent has a `fullName` of "Assemblies". If this
   * inventory assembly item is at the top level, this field will be `null`.
   */
  parentId?: string;

  /**
   * Body param: The preferred vendor from whom this inventory assembly item is
   * typically purchased.
   */
  preferredVendorId?: string;

  /**
   * Body param: The cost at which this inventory assembly item is purchased from
   * vendors, represented as a decimal string.
   */
  purchaseCost?: string;

  /**
   * Body param: The description of this inventory assembly item that appears on
   * purchase forms (e.g., checks, bills, item receipts) when it is ordered or bought
   * from vendors.
   */
  purchaseDescription?: string;

  /**
   * Body param: The tax code applied to purchases of this inventory assembly item.
   * Applicable in regions where purchase taxes are used, such as Canada or the UK.
   */
  purchaseTaxCodeId?: string;

  /**
   * Body param: The current quantity of this inventory assembly item available in
   * inventory. To change the `quantityOnHand` for an inventory assembly item, you
   * must create an inventory-adjustment instead of updating this inventory assembly
   * item directly.
   */
  quantityOnHand?: number;

  /**
   * Body param: The description of this inventory assembly item that appears on
   * sales forms (e.g., invoices, sales receipts) when sold to customers.
   */
  salesDescription?: string;

  /**
   * Body param: The price at which this inventory assembly item is sold to
   * customers, represented as a decimal string.
   */
  salesPrice?: string;

  /**
   * Body param: The default sales-tax code for this inventory assembly item,
   * determining whether it is taxable or non-taxable. This can be overridden at the
   * transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCodeId?: string;

  /**
   * Body param: The total value of this inventory assembly item. If `totalValue` is
   * provided, `quantityOnHand` must also be provided and must be greater than zero.
   * If both `quantityOnHand` and `purchaseCost` are provided, then `totalValue` will
   * be set to `quantityOnHand` times `purchaseCost`, regardless of what `totalValue`
   * is explicitly set to.
   */
  totalValue?: string;

  /**
   * Body param: The unit-of-measure set associated with this inventory assembly
   * item, which consists of a base unit and related units.
   */
  unitOfMeasureSetId?: string;
}

export namespace InventoryAssemblyItemCreateParams {
  /**
   * The inventory assembly item's barcode.
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

  export interface Line {
    /**
     * The inventory item associated with this inventory assembly item line.
     */
    inventoryItemId?: string;

    /**
     * The quantity of the item associated with this inventory assembly item line. This
     * field cannot be cleared.
     */
    quantity?: number;
  }
}

export interface InventoryAssemblyItemRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface InventoryAssemblyItemUpdateParams {
  /**
   * Body param: The current revision number of the inventory assembly item object
   * you are updating, which you can get by fetching the object first. Provide the
   * most recent `revisionNumber` to ensure you're working with the latest data;
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
   * assembly item in inventory.
   */
  assetAccountId?: string;

  /**
   * Body param: The inventory assembly item's barcode.
   */
  barcode?: InventoryAssemblyItemUpdateParams.Barcode;

  /**
   * Body param: The inventory assembly item's minimum quantity threshold that
   * triggers a build notification in QuickBooks. When the sum of `quantityOnHand`
   * (current inventory) and `quantityOnOrder` (pending purchase orders) drops below
   * this threshold, QuickBooks will notify users that more units need to be built or
   * assembled. This helps ensure adequate inventory levels for inventory assembly
   * items.
   */
  buildNotificationThreshold?: number;

  /**
   * Body param: The inventory assembly item's class. Classes can be used to
   * categorize objects into meaningful segments, such as department, location, or
   * type of work. In QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: When `true`, removes all existing item lines associated with this
   * inventory assembly item. To modify or add individual item lines, use the field
   * `itemLines` instead.
   */
  clearItemLines?: boolean;

  /**
   * Body param: The Cost of Goods Sold (COGS) account for this inventory assembly
   * item, tracking the original direct costs of producing goods sold.
   */
  cogsAccountId?: string;

  /**
   * Body param: Indicates whether to allow changing the inventory assembly item's
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
   * inventory assembly item.
   */
  incomeAccountId?: string;

  /**
   * Body param: Indicates whether this inventory assembly item is active. Inactive
   * objects are typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The inventory assembly item's lines.
   */
  lines?: Array<InventoryAssemblyItemUpdateParams.Line>;

  /**
   * Body param: The maximum quantity of this inventory assembly item desired in
   * inventory.
   */
  maximumQuantityOnHand?: number;

  /**
   * Body param: The case-insensitive name of this inventory assembly item. Not
   * guaranteed to be unique because it does not include the names of its
   * hierarchical parent objects like `fullName` does. For example, two inventory
   * assembly items could both have the `name` "Deluxe Kit", but they could have
   * unique `fullName` values, such as "Assemblies:Deluxe Kit" and "Inventory:Deluxe
   * Kit". Maximum length: 31 characters.
   */
  name?: string;

  /**
   * Body param: The parent inventory assembly item one level above this one in the
   * hierarchy. For example, if this inventory assembly item has a `fullName` of
   * "Assemblies:Deluxe Kit", its parent has a `fullName` of "Assemblies". If this
   * inventory assembly item is at the top level, this field will be `null`.
   */
  parentId?: string;

  /**
   * Body param: The preferred vendor from whom this inventory assembly item is
   * typically purchased.
   */
  preferredVendorId?: string;

  /**
   * Body param: The cost at which this inventory assembly item is purchased from
   * vendors, represented as a decimal string.
   */
  purchaseCost?: string;

  /**
   * Body param: The description of this inventory assembly item that appears on
   * purchase forms (e.g., checks, bills, item receipts) when it is ordered or bought
   * from vendors.
   */
  purchaseDescription?: string;

  /**
   * Body param: The tax code applied to purchases of this inventory assembly item.
   * Applicable in regions where purchase taxes are used, such as Canada or the UK.
   */
  purchaseTaxCodeId?: string;

  /**
   * Body param: The description of this inventory assembly item that appears on
   * sales forms (e.g., invoices, sales receipts) when sold to customers.
   */
  salesDescription?: string;

  /**
   * Body param: The price at which this inventory assembly item is sold to
   * customers, represented as a decimal string.
   */
  salesPrice?: string;

  /**
   * Body param: The default sales-tax code for this inventory assembly item,
   * determining whether it is taxable or non-taxable. This can be overridden at the
   * transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCodeId?: string;

  /**
   * Body param: The inventory assembly item's stock keeping unit (SKU), which is
   * sometimes the manufacturer's part number.
   */
  sku?: string;

  /**
   * Body param: The unit-of-measure set associated with this inventory assembly
   * item, which consists of a base unit and related units.
   */
  unitOfMeasureSetId?: string;

  /**
   * Body param: When `true`, applies the new income account (specified by the
   * `incomeAccountId` field) to all existing transactions that use this inventory
   * assembly item. This updates historical data and should be used with caution. The
   * update will fail if any affected transaction falls within a closed accounting
   * period. If this parameter is not specified, QuickBooks will prompt the user
   * before making any changes.
   */
  updateExistingTransactionsIncomeAccount?: boolean;
}

export namespace InventoryAssemblyItemUpdateParams {
  /**
   * The inventory assembly item's barcode.
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

  export interface Line {
    /**
     * The inventory item associated with this inventory assembly item line.
     */
    inventoryItemId?: string;

    /**
     * The quantity of the item associated with this inventory assembly item line. This
     * field cannot be cleared.
     */
    quantity?: number;
  }
}

export interface InventoryAssemblyItemListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for inventory assembly items of these classes. A class is a
   * way end-users can categorize inventory assembly items in QuickBooks.
   */
  classIds?: Array<string>;

  /**
   * Query param: Filter for specific inventory assembly items by their full-name(s),
   * case-insensitive. Like `id`, `fullName` is a unique identifier for an inventory
   * assembly item, formed by by combining the names of its parent objects with its
   * own `name`, separated by colons. For example, if an inventory assembly item is
   * under "Assemblies" and has the `name` "Deluxe Kit", its `fullName` would be
   * "Assemblies:Deluxe Kit".
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  fullNames?: Array<string>;

  /**
   * Query param: Filter for specific inventory assembly items by their
   * QuickBooks-assigned unique identifier(s).
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  ids?: Array<string>;

  /**
   * Query param: Filter for inventory assembly items whose `name` contains this
   * substring, case-insensitive. NOTE: If you use this parameter, you cannot also
   * use `nameStartsWith` or `nameEndsWith`.
   */
  nameContains?: string;

  /**
   * Query param: Filter for inventory assembly items whose `name` ends with this
   * substring, case-insensitive. NOTE: If you use this parameter, you cannot also
   * use `nameContains` or `nameStartsWith`.
   */
  nameEndsWith?: string;

  /**
   * Query param: Filter for inventory assembly items whose `name` is alphabetically
   * greater than or equal to this value.
   */
  nameFrom?: string;

  /**
   * Query param: Filter for inventory assembly items whose `name` starts with this
   * substring, case-insensitive. NOTE: If you use this parameter, you cannot also
   * use `nameContains` or `nameEndsWith`.
   */
  nameStartsWith?: string;

  /**
   * Query param: Filter for inventory assembly items whose `name` is alphabetically
   * less than or equal to this value.
   */
  nameTo?: string;

  /**
   * Query param: Filter for inventory assembly items that are active, inactive, or
   * both.
   */
  status?: 'active' | 'all' | 'inactive';

  /**
   * Query param: Filter for inventory assembly items updated on or after this date
   * and time, in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   *
   * **WARNING**: Due to a known issue in QuickBooks Desktop, the `updatedAfter`
   * parameter may not correctly filter inventory assembly items by their updated
   * dates. To accurately retrieve the desired inventory assembly items, we recommend
   * avoiding this parameter and instead fetching a broader dataset, then filtering
   * the results locally using the `updatedAt` property.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for inventory assembly items updated on or before this date
   * and time, in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   *
   * **WARNING**: Due to a known issue in QuickBooks Desktop, the `updatedBefore`
   * parameter may not correctly filter inventory assembly items by their updated
   * dates. To accurately retrieve the desired inventory assembly items, we recommend
   * avoiding this parameter and instead fetching a broader dataset, then filtering
   * the results locally using the `updatedAt` property.
   */
  updatedBefore?: string;
}

InventoryAssemblyItems.InventoryAssemblyItemsCursorPage = InventoryAssemblyItemsCursorPage;

export declare namespace InventoryAssemblyItems {
  export {
    type InventoryAssemblyItem as InventoryAssemblyItem,
    InventoryAssemblyItemsCursorPage as InventoryAssemblyItemsCursorPage,
    type InventoryAssemblyItemCreateParams as InventoryAssemblyItemCreateParams,
    type InventoryAssemblyItemRetrieveParams as InventoryAssemblyItemRetrieveParams,
    type InventoryAssemblyItemUpdateParams as InventoryAssemblyItemUpdateParams,
    type InventoryAssemblyItemListParams as InventoryAssemblyItemListParams,
  };
}
