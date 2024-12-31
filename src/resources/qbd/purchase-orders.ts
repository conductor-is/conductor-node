// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class PurchaseOrders extends APIResource {
  /**
   * Creates a new purchase order.
   */
  create(params: PurchaseOrderCreateParams, options?: Core.RequestOptions): Core.APIPromise<PurchaseOrder> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/purchase-orders', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a purchase order by ID.
   */
  retrieve(
    id: string,
    params: PurchaseOrderRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PurchaseOrder> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/purchase-orders/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing purchase order.
   */
  update(
    id: string,
    params: PurchaseOrderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PurchaseOrder> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/purchase-orders/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of purchase orders. Use the `cursor` parameter to paginate
   * through the results.
   */
  list(
    params: PurchaseOrderListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PurchaseOrdersCursorPage, PurchaseOrder> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/purchase-orders', PurchaseOrdersCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class PurchaseOrdersCursorPage extends CursorPage<PurchaseOrder> {}

export interface PurchaseOrder {
  /**
   * The unique identifier assigned by QuickBooks to this purchase order. This ID is
   * unique across all transaction types.
   */
  id: string;

  /**
   * The purchase order's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this purchase order's line items unless overridden at the
   * line item level.
   */
  class: PurchaseOrder.Class | null;

  /**
   * The date and time when this purchase order was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The purchase order's currency. For built-in currencies, the name and code are
   * standard international values. For user-defined currencies, all values are
   * editable.
   */
  currency: PurchaseOrder.Currency | null;

  /**
   * The custom fields for the purchase order object, added as user-defined data
   * extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<PurchaseOrder.CustomField>;

  /**
   * The predefined template in QuickBooks that determines the layout and formatting
   * for this purchase order when printed or displayed.
   */
  documentTemplate: PurchaseOrder.DocumentTemplate | null;

  /**
   * The date by which this purchase order must be paid, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  dueDate: string | null;

  /**
   * The market exchange rate between this purchase order's currency and the home
   * currency in QuickBooks at the time of this transaction. Represented as a decimal
   * value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home currency).
   */
  exchangeRate: number | null;

  /**
   * The date on which shipment of this purchase order is expected to be completed,
   * in ISO 8601 format (YYYY-MM-DD).
   */
  expectedDate: string | null;

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
   * The site location where inventory for the item associated with this purchase
   * order is stored.
   */
  inventorySite: PurchaseOrder.InventorySite | null;

  /**
   * Indicates whether all items in this purchase order have been received and none
   * of them were closed manually.
   */
  isFullyReceived: boolean | null;

  /**
   * Indicates whether this purchase order has been manually marked as closed, even
   * if all items have not been received or the sale has not been cancelled. Once the
   * purchase order is marked as closed, all of its line items become closed as well.
   * You cannot change `isManuallyClosed` to `false` after the purchase order has
   * been fully received.
   */
  isManuallyClosed: boolean;

  /**
   * Indicates whether this purchase order is included in the queue of documents for
   * QuickBooks to email to the customer.
   */
  isQueuedForEmail: boolean | null;

  /**
   * Indicates whether this purchase order is included in the queue of documents for
   * QuickBooks to print.
   */
  isQueuedForPrint: boolean | null;

  /**
   * The purchase order's line item groups, each representing a predefined set of
   * related items.
   */
  lineGroups: Array<PurchaseOrder.LineGroup>;

  /**
   * The purchase order's line items, each representing a single product or service
   * ordered.
   */
  lines: Array<PurchaseOrder.Line>;

  /**
   * The purchase order's linked transactions, such as payments applied, credits
   * used, or associated purchase orders.
   *
   * **IMPORTANT**: You must specify the parameter `includeLinkedTransactions` when
   * fetching a list of purchase orders to receive this field because it is not
   * returned by default.
   */
  linkedTransactions: Array<PurchaseOrder.LinkedTransaction>;

  /**
   * A memo or note for this purchase order that appears in reports, but not on the
   * purchase order.
   */
  memo: string | null;

  /**
   * The type of object. This value is always `"qbd_purchase_order"`.
   */
  objectType: 'qbd_purchase_order';

  /**
   * A built-in custom field for additional information specific to this purchase
   * order. Unlike the user-defined fields in the `customFields` array, this is a
   * standard QuickBooks field that exists for all purchase orders for convenience.
   * Developers often use this field for tracking information that doesn't fit into
   * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
   */
  otherCustomField1: string | null;

  /**
   * A second built-in custom field for additional information specific to this
   * purchase order. Unlike the user-defined fields in the `customFields` array, this
   * is a standard QuickBooks field that exists for all purchase orders for
   * convenience. Like `otherCustomField1`, developers often use this field for
   * tracking information that doesn't fit into other standard QuickBooks fields.
   * Hidden by default in the QuickBooks UI.
   */
  otherCustomField2: string | null;

  /**
   * The case-sensitive user-defined reference number for this purchase order, which
   * can be used to identify the transaction in QuickBooks. This value is not
   * required to be unique and can be arbitrarily changed by the QuickBooks user.
   */
  refNumber: string | null;

  /**
   * The current revision number of this purchase order object, which changes each
   * time the object is modified. When updating this object, you must provide the
   * most recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The sales-tax code for this purchase order, determining whether it is taxable or
   * non-taxable. If set, this overrides any sales-tax codes defined on the vendor.
   * This can be overridden on the purchase order's individual lines.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCode: PurchaseOrder.SalesTaxCode | null;

  /**
   * The origin location from where the product associated with this purchase order
   * is shipped. This is the point at which ownership and liability for goods
   * transfer from seller to buyer. Internally, QuickBooks uses the term "FOB" for
   * this field, which stands for "freight on board". This field is informational and
   * has no accounting implications.
   */
  shipmentOrigin: string | null;

  /**
   * The purchase order's shipping address.
   */
  shippingAddress: PurchaseOrder.ShippingAddress | null;

  /**
   * The shipping method used for this purchase order, such as standard mail or
   * overnight delivery.
   */
  shippingMethod: PurchaseOrder.ShippingMethod | null;

  /**
   * The customer, vendor, employee, or other entity to whom this purchase order is
   * to be shipped.
   */
  shipToEntity: PurchaseOrder.ShipToEntity | null;

  /**
   * The purchase order's payment terms, defining when payment is due and any
   * applicable discounts.
   */
  terms: PurchaseOrder.Terms | null;

  /**
   * The total monetary amount of this purchase order, equivalent to the sum of the
   * amounts in `lines` and `lineGroups`, represented as a decimal string.
   */
  totalAmount: string;

  /**
   * The total monetary amount for this purchase order converted to the home currency
   * of the QuickBooks company file. Represented as a decimal string.
   */
  totalAmountInHomeCurrency: string | null;

  /**
   * The date of this purchase order, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * The date and time when this purchase order was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;

  /**
   * The vendor who sent this purchase order for goods or services purchased.
   */
  vendor: PurchaseOrder.Vendor;

  /**
   * The address of the vendor who sent this purchase order.
   */
  vendorAddress: PurchaseOrder.VendorAddress | null;

  /**
   * A message to be printed on this purchase order for the vendor to read.
   */
  vendorMessage: string | null;
}

export namespace PurchaseOrder {
  /**
   * The purchase order's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this purchase order's line items unless overridden at the
   * line item level.
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
   * The purchase order's currency. For built-in currencies, the name and code are
   * standard international values. For user-defined currencies, all values are
   * editable.
   */
  export interface Currency {
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
   * The predefined template in QuickBooks that determines the layout and formatting
   * for this purchase order when printed or displayed.
   */
  export interface DocumentTemplate {
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
   * The site location where inventory for the item associated with this purchase
   * order is stored.
   */
  export interface InventorySite {
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

  export interface LineGroup {
    /**
     * The unique identifier assigned by QuickBooks to this purchase order line group.
     * This ID is unique across all transaction line types.
     */
    id: string;

    /**
     * The custom fields for the purchase order line group object, added as
     * user-defined data extensions, not included in the standard QuickBooks object.
     */
    customFields: Array<LineGroup.CustomField>;

    /**
     * A description of this purchase order line group.
     */
    description: string | null;

    /**
     * The purchase order line group's item group, representing a predefined set of
     * items bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroup: LineGroup.ItemGroup;

    /**
     * The purchase order line group's line items, each representing a single product
     * or service ordered.
     */
    lines: Array<LineGroup.Line>;

    /**
     * The type of object. This value is always `"qbd_purchase_order_line_group"`.
     */
    objectType: 'qbd_purchase_order_line_group';

    /**
     * Specifies an alternative unit-of-measure set when updating this purchase order
     * line group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows
     * you to select units from a different set than the item's default unit-of-measure
     * set, which remains unchanged on the item itself. The override applies only to
     * this specific line. For example, you can sell an item typically measured in
     * volume units using weight units in a specific transaction by specifying a
     * different unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSet: LineGroup.OverrideUnitOfMeasureSet | null;

    /**
     * The quantity of the item group associated with this purchase order line group.
     * This field cannot be cleared.
     */
    quantity: number | null;

    /**
     * Indicates whether the individual items in this purchase order line group and
     * their separate amounts appear on printed forms.
     */
    shouldPrintItemsInGroup: boolean;

    /**
     * The total monetary amount of this purchase order line group, equivalent to the
     * sum of the amounts in `lines`, represented as a decimal string.
     */
    totalAmount: string;

    /**
     * The unit-of-measure used for the `quantity` in this purchase order line group.
     * Must be a valid unit within the item's available units of measure.
     */
    unitOfMeasure: string | null;
  }

  export namespace LineGroup {
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
     * The purchase order line group's item group, representing a predefined set of
     * items bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    export interface ItemGroup {
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
       * The unique identifier assigned by QuickBooks to this purchase order line. This
       * ID is unique across all transaction line types.
       */
      id: string;

      /**
       * The monetary amount of this purchase order line, represented as a decimal
       * string. If both `quantity` and `rate` are specified but not `amount`, QuickBooks
       * will use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
       * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
       * `1` and the suggested `rate`. This field cannot be cleared.
       */
      amount: string | null;

      /**
       * The purchase order line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all purchase order
       * lines unless overridden here, at the transaction line level.
       */
      class: Line.Class | null;

      /**
       * The custom fields for the purchase order line object, added as user-defined data
       * extensions, not included in the standard QuickBooks object.
       */
      customFields: Array<Line.CustomField>;

      /**
       * A description of this purchase order line.
       */
      description: string | null;

      /**
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this purchase order line is stored.
       */
      inventorySiteLocation: Line.InventorySiteLocation | null;

      /**
       * Indicates whether this purchase order line has been billed.
       */
      isBilled: boolean | null;

      /**
       * Indicates whether this purchase order line has been manually marked as closed,
       * even if this item has not been received or its sale has not been cancelled. If
       * all the purchase order lines are marked as closed, the purchase order itself is
       * marked as closed as well. You cannot change `isManuallyClosed` to `false` after
       * the purchase order line has been fully received.
       */
      isManuallyClosed: boolean;

      /**
       * The item associated with this purchase order line. This can refer to any good or
       * service that the business buys or sells, including item types such as a service
       * item, inventory item, or special calculation item like a discount item or
       * sales-tax item.
       */
      item: Line.Item | null;

      /**
       * The type of object. This value is always `"qbd_purchase_order_line"`.
       */
      objectType: 'qbd_purchase_order_line';

      /**
       * A built-in custom field for additional information specific to this purchase
       * order line. Unlike the user-defined fields in the `customFields` array, this is
       * a standard QuickBooks field that exists for all purchase order lines for
       * convenience. Developers often use this field for tracking information that
       * doesn't fit into other standard QuickBooks fields. Hidden by default in the
       * QuickBooks UI.
       */
      otherCustomField1: string | null;

      /**
       * A second built-in custom field for additional information specific to this
       * purchase order line. Unlike the user-defined fields in the `customFields` array,
       * this is a standard QuickBooks field that exists for all purchase order lines for
       * convenience. Like `otherCustomField1`, developers often use this field for
       * tracking information that doesn't fit into other standard QuickBooks fields.
       * Hidden by default in the QuickBooks UI.
       */
      otherCustomField2: string | null;

      /**
       * Specifies an alternative unit-of-measure set when updating this purchase order
       * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
       * select units from a different set than the item's default unit-of-measure set,
       * which remains unchanged on the item itself. The override applies only to this
       * specific line. For example, you can sell an item typically measured in volume
       * units using weight units in a specific transaction by specifying a different
       * unit-of-measure set with this field.
       */
      overrideUnitOfMeasureSet: Line.OverrideUnitOfMeasureSet | null;

      /**
       * If `account` refers to an Accounts-Payable (A/P) account, `payee` refers to the
       * expense's vendor (not the customer). If `account` refers to any other type of
       * account, `payee` refers to the expense's customer (not the vendor).
       */
      payee: Line.Payee | null;

      /**
       * The quantity of the item associated with this purchase order line. This field
       * cannot be cleared.
       */
      quantity: number | null;

      /**
       * The price per unit for this purchase order line. If both `rate` and `amount` are
       * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
       * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
       * decimal string. This field cannot be cleared.
       */
      rate: string | null;

      /**
       * The quantity that has been received against this purchase order line.
       */
      receivedQuantity: number | null;

      /**
       * The sales-tax code for this purchase order line, determining whether it is
       * taxable or non-taxable. If set, this overrides any sales-tax codes defined on
       * the parent transaction or the associated item.
       *
       * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
       * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
       * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
       * non-taxable code to all sales.
       */
      salesTaxCode: Line.SalesTaxCode | null;

      /**
       * The date on which the service for this purchase order line was or will be
       * performed, in ISO 8601 format (YYYY-MM-DD). This is particularly relevant for
       * service items.
       */
      serviceDate: string | null;

      /**
       * The purchase order line's stock keeping unit (SKU), which is sometimes the
       * manufacturer's part number.
       */
      sku: string | null;

      /**
       * The quantity that has not been billed for this purchase order line.
       */
      unbilledQuantity: number | null;

      /**
       * The unit-of-measure used for the `quantity` in this purchase order line. Must be
       * a valid unit within the item's available units of measure.
       */
      unitOfMeasure: string | null;
    }

    export namespace Line {
      /**
       * The purchase order line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all purchase order
       * lines unless overridden here, at the transaction line level.
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
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this purchase order line is stored.
       */
      export interface InventorySiteLocation {
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
       * The item associated with this purchase order line. This can refer to any good or
       * service that the business buys or sells, including item types such as a service
       * item, inventory item, or special calculation item like a discount item or
       * sales-tax item.
       */
      export interface Item {
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
       * Specifies an alternative unit-of-measure set when updating this purchase order
       * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
       * select units from a different set than the item's default unit-of-measure set,
       * which remains unchanged on the item itself. The override applies only to this
       * specific line. For example, you can sell an item typically measured in volume
       * units using weight units in a specific transaction by specifying a different
       * unit-of-measure set with this field.
       */
      export interface OverrideUnitOfMeasureSet {
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
       * If `account` refers to an Accounts-Payable (A/P) account, `payee` refers to the
       * expense's vendor (not the customer). If `account` refers to any other type of
       * account, `payee` refers to the expense's customer (not the vendor).
       */
      export interface Payee {
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
       * The sales-tax code for this purchase order line, determining whether it is
       * taxable or non-taxable. If set, this overrides any sales-tax codes defined on
       * the parent transaction or the associated item.
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
    }

    /**
     * Specifies an alternative unit-of-measure set when updating this purchase order
     * line group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows
     * you to select units from a different set than the item's default unit-of-measure
     * set, which remains unchanged on the item itself. The override applies only to
     * this specific line. For example, you can sell an item typically measured in
     * volume units using weight units in a specific transaction by specifying a
     * different unit-of-measure set with this field.
     */
    export interface OverrideUnitOfMeasureSet {
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

  export interface Line {
    /**
     * The unique identifier assigned by QuickBooks to this purchase order line. This
     * ID is unique across all transaction line types.
     */
    id: string;

    /**
     * The monetary amount of this purchase order line, represented as a decimal
     * string. If both `quantity` and `rate` are specified but not `amount`, QuickBooks
     * will use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount: string | null;

    /**
     * The purchase order line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all purchase order
     * lines unless overridden here, at the transaction line level.
     */
    class: Line.Class | null;

    /**
     * The custom fields for the purchase order line object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields: Array<Line.CustomField>;

    /**
     * A description of this purchase order line.
     */
    description: string | null;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this purchase order line is stored.
     */
    inventorySiteLocation: Line.InventorySiteLocation | null;

    /**
     * Indicates whether this purchase order line has been billed.
     */
    isBilled: boolean | null;

    /**
     * Indicates whether this purchase order line has been manually marked as closed,
     * even if this item has not been received or its sale has not been cancelled. If
     * all the purchase order lines are marked as closed, the purchase order itself is
     * marked as closed as well. You cannot change `isManuallyClosed` to `false` after
     * the purchase order line has been fully received.
     */
    isManuallyClosed: boolean;

    /**
     * The item associated with this purchase order line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    item: Line.Item | null;

    /**
     * The type of object. This value is always `"qbd_purchase_order_line"`.
     */
    objectType: 'qbd_purchase_order_line';

    /**
     * A built-in custom field for additional information specific to this purchase
     * order line. Unlike the user-defined fields in the `customFields` array, this is
     * a standard QuickBooks field that exists for all purchase order lines for
     * convenience. Developers often use this field for tracking information that
     * doesn't fit into other standard QuickBooks fields. Hidden by default in the
     * QuickBooks UI.
     */
    otherCustomField1: string | null;

    /**
     * A second built-in custom field for additional information specific to this
     * purchase order line. Unlike the user-defined fields in the `customFields` array,
     * this is a standard QuickBooks field that exists for all purchase order lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2: string | null;

    /**
     * Specifies an alternative unit-of-measure set when updating this purchase order
     * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSet: Line.OverrideUnitOfMeasureSet | null;

    /**
     * If `account` refers to an Accounts-Payable (A/P) account, `payee` refers to the
     * expense's vendor (not the customer). If `account` refers to any other type of
     * account, `payee` refers to the expense's customer (not the vendor).
     */
    payee: Line.Payee | null;

    /**
     * The quantity of the item associated with this purchase order line. This field
     * cannot be cleared.
     */
    quantity: number | null;

    /**
     * The price per unit for this purchase order line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate: string | null;

    /**
     * The quantity that has been received against this purchase order line.
     */
    receivedQuantity: number | null;

    /**
     * The sales-tax code for this purchase order line, determining whether it is
     * taxable or non-taxable. If set, this overrides any sales-tax codes defined on
     * the parent transaction or the associated item.
     *
     * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
     * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
     * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
     * non-taxable code to all sales.
     */
    salesTaxCode: Line.SalesTaxCode | null;

    /**
     * The date on which the service for this purchase order line was or will be
     * performed, in ISO 8601 format (YYYY-MM-DD). This is particularly relevant for
     * service items.
     */
    serviceDate: string | null;

    /**
     * The purchase order line's stock keeping unit (SKU), which is sometimes the
     * manufacturer's part number.
     */
    sku: string | null;

    /**
     * The quantity that has not been billed for this purchase order line.
     */
    unbilledQuantity: number | null;

    /**
     * The unit-of-measure used for the `quantity` in this purchase order line. Must be
     * a valid unit within the item's available units of measure.
     */
    unitOfMeasure: string | null;
  }

  export namespace Line {
    /**
     * The purchase order line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all purchase order
     * lines unless overridden here, at the transaction line level.
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
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this purchase order line is stored.
     */
    export interface InventorySiteLocation {
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
     * The item associated with this purchase order line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    export interface Item {
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
     * Specifies an alternative unit-of-measure set when updating this purchase order
     * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    export interface OverrideUnitOfMeasureSet {
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
     * If `account` refers to an Accounts-Payable (A/P) account, `payee` refers to the
     * expense's vendor (not the customer). If `account` refers to any other type of
     * account, `payee` refers to the expense's customer (not the vendor).
     */
    export interface Payee {
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
     * The sales-tax code for this purchase order line, determining whether it is
     * taxable or non-taxable. If set, this overrides any sales-tax codes defined on
     * the parent transaction or the associated item.
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
  }

  export interface LinkedTransaction {
    /**
     * The unique identifier assigned by QuickBooks to this linked transaction. This ID
     * is unique across all transaction types.
     */
    id: string;

    /**
     * The monetary amount of this linked transaction, represented as a decimal string.
     */
    amount: string | null;

    /**
     * Indicates the nature of the link between the transactions: `amount` denotes an
     * amount-based link (e.g., an invoice linked to a payment), and `quantity` denotes
     * a quantity-based link (e.g., an invoice created from a sales order based on the
     * quantity of items received).
     */
    linkType: 'amount' | 'quantity' | null;

    /**
     * The type of object. This value is always `"qbd_linked_transaction"`.
     */
    objectType: 'qbd_linked_transaction';

    /**
     * The case-sensitive user-defined reference number for this linked transaction,
     * which can be used to identify the transaction in QuickBooks. This value is not
     * required to be unique and can be arbitrarily changed by the QuickBooks user.
     */
    refNumber: string | null;

    /**
     * The date of this linked transaction, in ISO 8601 format (YYYY-MM-DD).
     */
    transactionDate: string;

    /**
     * The type of transaction for this linked transaction.
     */
    transactionType:
      | 'ar_refund_credit_card'
      | 'bill'
      | 'bill_payment_check'
      | 'bill_payment_credit_card'
      | 'build_assembly'
      | 'charge'
      | 'check'
      | 'credit_card_charge'
      | 'credit_card_credit'
      | 'credit_memo'
      | 'deposit'
      | 'estimate'
      | 'inventory_adjustment'
      | 'invoice'
      | 'item_receipt'
      | 'journal_entry'
      | 'liability_adjustment'
      | 'paycheck'
      | 'payroll_liability_check'
      | 'purchase_order'
      | 'receive_payment'
      | 'sales_order'
      | 'sales_receipt'
      | 'sales_tax_payment_check'
      | 'transfer'
      | 'vendor_credit'
      | 'ytd_adjustment';
  }

  /**
   * The sales-tax code for this purchase order, determining whether it is taxable or
   * non-taxable. If set, this overrides any sales-tax codes defined on the vendor.
   * This can be overridden on the purchase order's individual lines.
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
   * The purchase order's shipping address.
   */
  export interface ShippingAddress {
    /**
     * The city, district, suburb, town, or village name of the address.
     */
    city: string | null;

    /**
     * The country name of the address.
     */
    country: string | null;

    /**
     * The first line of the address (e.g., street, PO Box, or company name).
     */
    line1: string | null;

    /**
     * The second line of the address, if needed (e.g., apartment, suite, unit, or
     * building).
     */
    line2: string | null;

    /**
     * The third line of the address, if needed.
     */
    line3: string | null;

    /**
     * The fourth line of the address, if needed.
     */
    line4: string | null;

    /**
     * The fifth line of the address, if needed.
     */
    line5: string | null;

    /**
     * A note written at the bottom of the address in the form in which it appears,
     * such as the invoice form.
     */
    note: string | null;

    /**
     * The postal code or ZIP code of the address.
     */
    postalCode: string | null;

    /**
     * The state, county, province, or region name of the address.
     */
    state: string | null;
  }

  /**
   * The shipping method used for this purchase order, such as standard mail or
   * overnight delivery.
   */
  export interface ShippingMethod {
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
   * The customer, vendor, employee, or other entity to whom this purchase order is
   * to be shipped.
   */
  export interface ShipToEntity {
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
   * The purchase order's payment terms, defining when payment is due and any
   * applicable discounts.
   */
  export interface Terms {
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
   * The vendor who sent this purchase order for goods or services purchased.
   */
  export interface Vendor {
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
   * The address of the vendor who sent this purchase order.
   */
  export interface VendorAddress {
    /**
     * The city, district, suburb, town, or village name of the address.
     */
    city: string | null;

    /**
     * The country name of the address.
     */
    country: string | null;

    /**
     * The first line of the address (e.g., street, PO Box, or company name).
     */
    line1: string | null;

    /**
     * The second line of the address, if needed (e.g., apartment, suite, unit, or
     * building).
     */
    line2: string | null;

    /**
     * The third line of the address, if needed.
     */
    line3: string | null;

    /**
     * The fourth line of the address, if needed.
     */
    line4: string | null;

    /**
     * The fifth line of the address, if needed.
     */
    line5: string | null;

    /**
     * A note written at the bottom of the address in the form in which it appears,
     * such as the invoice form.
     */
    note: string | null;

    /**
     * The postal code or ZIP code of the address.
     */
    postalCode: string | null;

    /**
     * The state, county, province, or region name of the address.
     */
    state: string | null;
  }
}

export interface PurchaseOrderCreateParams {
  /**
   * Body param: The date of this purchase order, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * Body param: The vendor who sent this purchase order for goods or services
   * purchased.
   */
  vendorId: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The purchase order's class. Classes can be used to categorize
   * objects into meaningful segments, such as department, location, or type of work.
   * In QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this purchase order's line items unless overridden at the
   * line item level.
   */
  classId?: string;

  /**
   * Body param: The predefined template in QuickBooks that determines the layout and
   * formatting for this purchase order when printed or displayed.
   */
  documentTemplateId?: string;

  /**
   * Body param: The date by which this purchase order must be paid, in ISO 8601
   * format (YYYY-MM-DD).
   */
  dueDate?: string;

  /**
   * Body param: The market exchange rate between this purchase order's currency and
   * the home currency in QuickBooks at the time of this transaction. Represented as
   * a decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home
   * currency).
   */
  exchangeRate?: number;

  /**
   * Body param: The date on which shipment of this purchase order is expected to be
   * completed, in ISO 8601 format (YYYY-MM-DD).
   */
  expectedDate?: string;

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
   * Body param: The site location where inventory for the item associated with this
   * purchase order is stored.
   */
  inventorySiteId?: string;

  /**
   * Body param: Indicates whether this purchase order is included in the queue of
   * documents for QuickBooks to email to the customer.
   */
  isQueuedForEmail?: boolean;

  /**
   * Body param: Indicates whether this purchase order is included in the queue of
   * documents for QuickBooks to print.
   */
  isQueuedForPrint?: boolean;

  /**
   * Body param: The purchase order's line item groups, each representing a
   * predefined set of related items.
   *
   * **IMPORTANT**: You must specify `lines`, `lineGroups`, or both when creating a
   * purchase order.
   */
  lineGroups?: Array<PurchaseOrderCreateParams.LineGroup>;

  /**
   * Body param: The purchase order's line items, each representing a single product
   * or service ordered.
   *
   * **IMPORTANT**: You must specify `lines`, `lineGroups`, or both when creating a
   * purchase order.
   */
  lines?: Array<PurchaseOrderCreateParams.Line>;

  /**
   * Body param: A memo or note for this purchase order that appears in reports, but
   * not on the purchase order.
   */
  memo?: string;

  /**
   * Body param: A built-in custom field for additional information specific to this
   * purchase order. Unlike the user-defined fields in the `customFields` array, this
   * is a standard QuickBooks field that exists for all purchase orders for
   * convenience. Developers often use this field for tracking information that
   * doesn't fit into other standard QuickBooks fields. Hidden by default in the
   * QuickBooks UI.
   */
  otherCustomField1?: string;

  /**
   * Body param: A second built-in custom field for additional information specific
   * to this purchase order. Unlike the user-defined fields in the `customFields`
   * array, this is a standard QuickBooks field that exists for all purchase orders
   * for convenience. Like `otherCustomField1`, developers often use this field for
   * tracking information that doesn't fit into other standard QuickBooks fields.
   * Hidden by default in the QuickBooks UI.
   */
  otherCustomField2?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this purchase
   * order, which can be used to identify the transaction in QuickBooks. This value
   * is not required to be unique and can be arbitrarily changed by the QuickBooks
   * user.
   */
  refNumber?: string;

  /**
   * Body param: The sales-tax code for this purchase order, determining whether it
   * is taxable or non-taxable. If set, this overrides any sales-tax codes defined on
   * the vendor. This can be overridden on the purchase order's individual lines.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCodeId?: string;

  /**
   * Body param: The origin location from where the product associated with this
   * purchase order is shipped. This is the point at which ownership and liability
   * for goods transfer from seller to buyer. Internally, QuickBooks uses the term
   * "FOB" for this field, which stands for "freight on board". This field is
   * informational and has no accounting implications.
   */
  shipmentOrigin?: string;

  /**
   * Body param: The purchase order's shipping address.
   */
  shippingAddress?: PurchaseOrderCreateParams.ShippingAddress;

  /**
   * Body param: The shipping method used for this purchase order, such as standard
   * mail or overnight delivery.
   */
  shippingMethodId?: string;

  /**
   * Body param: The customer, vendor, employee, or other entity to whom this
   * purchase order is to be shipped.
   */
  shipToEntityId?: string;

  /**
   * Body param: The purchase order's payment terms, defining when payment is due and
   * any applicable discounts.
   */
  termsId?: string;

  /**
   * Body param: The address of the vendor who sent this purchase order.
   */
  vendorAddress?: PurchaseOrderCreateParams.VendorAddress;

  /**
   * Body param: A message to be printed on this purchase order for the vendor to
   * read.
   */
  vendorMessage?: string;
}

export namespace PurchaseOrderCreateParams {
  export interface LineGroup {
    /**
     * The purchase order line group's item group, representing a predefined set of
     * items bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroupId: string;

    /**
     * The custom fields for the purchase order line group object, added as
     * user-defined data extensions, not included in the standard QuickBooks object.
     */
    customFields?: Array<LineGroup.CustomField>;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item group associated with this purchase order line group is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The quantity of the item group associated with this purchase order line group.
     * This field cannot be cleared.
     */
    quantity?: number;

    /**
     * The unit-of-measure used for the `quantity` in this purchase order line group.
     * Must be a valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  export namespace LineGroup {
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
       * The value of this custom field. The maximum length depends on the field's data
       * type.
       */
      value: string;
    }
  }

  export interface Line {
    /**
     * The monetary amount of this purchase order line, represented as a decimal
     * string. If both `quantity` and `rate` are specified but not `amount`, QuickBooks
     * will use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount?: string;

    /**
     * The purchase order line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all purchase order
     * lines unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * The custom fields for the purchase order line object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields?: Array<Line.CustomField>;

    /**
     * A description of this purchase order line.
     */
    description?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this purchase order line is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The item associated with this purchase order line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    itemId?: string;

    /**
     * A built-in custom field for additional information specific to this purchase
     * order line. Unlike the user-defined fields in the `customFields` array, this is
     * a standard QuickBooks field that exists for all purchase order lines for
     * convenience. Developers often use this field for tracking information that
     * doesn't fit into other standard QuickBooks fields. Hidden by default in the
     * QuickBooks UI.
     */
    otherCustomField1?: string;

    /**
     * A second built-in custom field for additional information specific to this
     * purchase order line. Unlike the user-defined fields in the `customFields` array,
     * this is a standard QuickBooks field that exists for all purchase order lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2?: string;

    /**
     * The account to use for this purchase order line, overriding the default account
     * associated with the item.
     */
    overrideItemAccountId?: string;

    /**
     * If `account` refers to an Accounts-Payable (A/P) account, `payee` refers to the
     * expense's vendor (not the customer). If `account` refers to any other type of
     * account, `payee` refers to the expense's customer (not the vendor).
     */
    payeeId?: string;

    /**
     * The quantity of the item associated with this purchase order line. This field
     * cannot be cleared.
     */
    quantity?: number;

    /**
     * The price per unit for this purchase order line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate?: string;

    /**
     * The sales-tax code for this purchase order line, determining whether it is
     * taxable or non-taxable. If set, this overrides any sales-tax codes defined on
     * the parent transaction or the associated item.
     *
     * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
     * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
     * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
     * non-taxable code to all sales.
     */
    salesTaxCodeId?: string;

    /**
     * The date on which the service for this purchase order line was or will be
     * performed, in ISO 8601 format (YYYY-MM-DD). This is particularly relevant for
     * service items.
     */
    serviceDate?: string;

    /**
     * The purchase order line's stock keeping unit (SKU), which is sometimes the
     * manufacturer's part number.
     */
    sku?: string;

    /**
     * The unit-of-measure used for the `quantity` in this purchase order line. Must be
     * a valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  export namespace Line {
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
       * The value of this custom field. The maximum length depends on the field's data
       * type.
       */
      value: string;
    }
  }

  /**
   * The purchase order's shipping address.
   */
  export interface ShippingAddress {
    /**
     * The city, district, suburb, town, or village name of the address.
     */
    city?: string;

    /**
     * The country name of the address.
     */
    country?: string;

    /**
     * The first line of the address (e.g., street, PO Box, or company name).
     */
    line1?: string;

    /**
     * The second line of the address, if needed (e.g., apartment, suite, unit, or
     * building).
     */
    line2?: string;

    /**
     * The third line of the address, if needed.
     */
    line3?: string;

    /**
     * The fourth line of the address, if needed.
     */
    line4?: string;

    /**
     * The fifth line of the address, if needed.
     */
    line5?: string;

    /**
     * A note written at the bottom of the address in the form in which it appears,
     * such as the invoice form.
     */
    note?: string;

    /**
     * The postal code or ZIP code of the address.
     */
    postalCode?: string;

    /**
     * The state, county, province, or region name of the address.
     */
    state?: string;
  }

  /**
   * The address of the vendor who sent this purchase order.
   */
  export interface VendorAddress {
    /**
     * The city, district, suburb, town, or village name of the address.
     */
    city?: string;

    /**
     * The country name of the address.
     */
    country?: string;

    /**
     * The first line of the address (e.g., street, PO Box, or company name).
     */
    line1?: string;

    /**
     * The second line of the address, if needed (e.g., apartment, suite, unit, or
     * building).
     */
    line2?: string;

    /**
     * The third line of the address, if needed.
     */
    line3?: string;

    /**
     * The fourth line of the address, if needed.
     */
    line4?: string;

    /**
     * The fifth line of the address, if needed.
     */
    line5?: string;

    /**
     * A note written at the bottom of the address in the form in which it appears,
     * such as the invoice form.
     */
    note?: string;

    /**
     * The postal code or ZIP code of the address.
     */
    postalCode?: string;

    /**
     * The state, county, province, or region name of the address.
     */
    state?: string;
  }
}

export interface PurchaseOrderRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface PurchaseOrderUpdateParams {
  /**
   * Body param: The current revision number of the purchase order object you are
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
   * Body param: The purchase order's class. Classes can be used to categorize
   * objects into meaningful segments, such as department, location, or type of work.
   * In QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this purchase order's line items unless overridden at the
   * line item level.
   */
  classId?: string;

  /**
   * Body param: The predefined template in QuickBooks that determines the layout and
   * formatting for this purchase order when printed or displayed.
   */
  documentTemplateId?: string;

  /**
   * Body param: The date by which this purchase order must be paid, in ISO 8601
   * format (YYYY-MM-DD).
   */
  dueDate?: string;

  /**
   * Body param: The market exchange rate between this purchase order's currency and
   * the home currency in QuickBooks at the time of this transaction. Represented as
   * a decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home
   * currency).
   */
  exchangeRate?: number;

  /**
   * Body param: The date on which shipment of this purchase order is expected to be
   * completed, in ISO 8601 format (YYYY-MM-DD).
   */
  expectedDate?: string;

  /**
   * Body param: The site location where inventory for the item associated with this
   * purchase order is stored.
   */
  inventorySiteId?: string;

  /**
   * Body param: Indicates whether this purchase order has been manually marked as
   * closed, even if all items have not been received or the sale has not been
   * cancelled. Once the purchase order is marked as closed, all of its line items
   * become closed as well. You cannot change `isManuallyClosed` to `false` after the
   * purchase order has been fully received.
   */
  isManuallyClosed?: boolean;

  /**
   * Body param: Indicates whether this purchase order is included in the queue of
   * documents for QuickBooks to email to the customer.
   */
  isQueuedForEmail?: boolean;

  /**
   * Body param: Indicates whether this purchase order is included in the queue of
   * documents for QuickBooks to print.
   */
  isQueuedForPrint?: boolean;

  /**
   * Body param: The purchase order's line item groups, each representing a
   * predefined set of related items.
   *
   * **IMPORTANT**:
   *
   * 1. Including this array in your update request will **REPLACE** all existing
   *    line item groups for the purchase order with this array. To keep any existing
   *    line item groups, you must include them in this array even if they have not
   *    changed. **Any line item groups not included will be removed.**
   *
   * 2. To add a new line item group, include it here with the `id` field set to
   *    `-1`.
   *
   * 3. If you do not wish to modify any line item groups, omit this field entirely
   *    to keep them unchanged.
   */
  lineGroups?: Array<PurchaseOrderUpdateParams.LineGroup>;

  /**
   * Body param: The purchase order's line items, each representing a single product
   * or service ordered.
   *
   * **IMPORTANT**:
   *
   * 1. Including this array in your update request will **REPLACE** all existing
   *    line items for the purchase order with this array. To keep any existing line
   *    items, you must include them in this array even if they have not changed.
   *    **Any line items not included will be removed.**
   *
   * 2. To add a new line item, include it here with the `id` field set to `-1`.
   *
   * 3. If you do not wish to modify any line items, omit this field entirely to keep
   *    them unchanged.
   */
  lines?: Array<PurchaseOrderUpdateParams.Line>;

  /**
   * Body param: A memo or note for this purchase order that appears in reports, but
   * not on the purchase order.
   */
  memo?: string;

  /**
   * Body param: A built-in custom field for additional information specific to this
   * purchase order. Unlike the user-defined fields in the `customFields` array, this
   * is a standard QuickBooks field that exists for all purchase orders for
   * convenience. Developers often use this field for tracking information that
   * doesn't fit into other standard QuickBooks fields. Hidden by default in the
   * QuickBooks UI.
   */
  otherCustomField1?: string;

  /**
   * Body param: A second built-in custom field for additional information specific
   * to this purchase order. Unlike the user-defined fields in the `customFields`
   * array, this is a standard QuickBooks field that exists for all purchase orders
   * for convenience. Like `otherCustomField1`, developers often use this field for
   * tracking information that doesn't fit into other standard QuickBooks fields.
   * Hidden by default in the QuickBooks UI.
   */
  otherCustomField2?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this purchase
   * order, which can be used to identify the transaction in QuickBooks. This value
   * is not required to be unique and can be arbitrarily changed by the QuickBooks
   * user.
   */
  refNumber?: string;

  /**
   * Body param: The sales-tax code for this purchase order, determining whether it
   * is taxable or non-taxable. If set, this overrides any sales-tax codes defined on
   * the vendor. This can be overridden on the purchase order's individual lines.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCodeId?: string;

  /**
   * Body param: The origin location from where the product associated with this
   * purchase order is shipped. This is the point at which ownership and liability
   * for goods transfer from seller to buyer. Internally, QuickBooks uses the term
   * "FOB" for this field, which stands for "freight on board". This field is
   * informational and has no accounting implications.
   */
  shipmentOrigin?: string;

  /**
   * Body param: The purchase order's shipping address.
   */
  shippingAddress?: PurchaseOrderUpdateParams.ShippingAddress;

  /**
   * Body param: The shipping method used for this purchase order, such as standard
   * mail or overnight delivery.
   */
  shippingMethodId?: string;

  /**
   * Body param: The customer, vendor, employee, or other entity to whom this
   * purchase order is to be shipped.
   */
  shipToEntityId?: string;

  /**
   * Body param: The purchase order's payment terms, defining when payment is due and
   * any applicable discounts.
   */
  termsId?: string;

  /**
   * Body param: The date of this purchase order, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate?: string;

  /**
   * Body param: The address of the vendor who sent this purchase order.
   */
  vendorAddress?: PurchaseOrderUpdateParams.VendorAddress;

  /**
   * Body param: The vendor who sent this purchase order for goods or services
   * purchased.
   */
  vendorId?: string;

  /**
   * Body param: A message to be printed on this purchase order for the vendor to
   * read.
   */
  vendorMessage?: string;
}

export namespace PurchaseOrderUpdateParams {
  export interface LineGroup {
    /**
     * The QuickBooks-assigned unique identifier of an existing purchase order line
     * group you wish to retain or update.
     *
     * **IMPORTANT**: Set this field to `-1` for new purchase order line groups you
     * wish to add.
     */
    id: string;

    /**
     * The purchase order line group's item group, representing a predefined set of
     * items bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroupId?: string;

    /**
     * The purchase order line group's line items, each representing a single product
     * or service ordered.
     *
     * **IMPORTANT**:
     *
     * 1. Including this array in your update request will **REPLACE** all existing
     *    line items for the purchase order line group with this array. To keep any
     *    existing line items, you must include them in this array even if they have
     *    not changed. **Any line items not included will be removed.**
     *
     * 2. To add a new line item, include it here with the `id` field set to `-1`.
     *
     * 3. If you do not wish to modify any line items, omit this field entirely to keep
     *    them unchanged.
     */
    lines?: Array<LineGroup.Line>;

    /**
     * Specifies an alternative unit-of-measure set when updating this purchase order
     * line group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows
     * you to select units from a different set than the item's default unit-of-measure
     * set, which remains unchanged on the item itself. The override applies only to
     * this specific line. For example, you can sell an item typically measured in
     * volume units using weight units in a specific transaction by specifying a
     * different unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSetId?: string;

    /**
     * The quantity of the item group associated with this purchase order line group.
     * This field cannot be cleared.
     */
    quantity?: number;

    /**
     * The unit-of-measure used for the `quantity` in this purchase order line group.
     * Must be a valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  export namespace LineGroup {
    export interface Line {
      /**
       * The QuickBooks-assigned unique identifier of an existing purchase order line you
       * wish to retain or update.
       *
       * **IMPORTANT**: Set this field to `-1` for new purchase order lines you wish to
       * add.
       */
      id: string;

      /**
       * The monetary amount of this purchase order line, represented as a decimal
       * string. If both `quantity` and `rate` are specified but not `amount`, QuickBooks
       * will use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
       * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
       * `1` and the suggested `rate`. This field cannot be cleared.
       */
      amount?: string;

      /**
       * The purchase order line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all purchase order
       * lines unless overridden here, at the transaction line level.
       */
      classId?: string;

      /**
       * A description of this purchase order line.
       */
      description?: string;

      /**
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this purchase order line is stored.
       */
      inventorySiteLocationId?: string;

      /**
       * Indicates whether this purchase order line has been manually marked as closed,
       * even if this item has not been received or its sale has not been cancelled. If
       * all the purchase order lines are marked as closed, the purchase order itself is
       * marked as closed as well. You cannot change `isManuallyClosed` to `false` after
       * the purchase order line has been fully received.
       */
      isManuallyClosed?: boolean;

      /**
       * The item associated with this purchase order line. This can refer to any good or
       * service that the business buys or sells, including item types such as a service
       * item, inventory item, or special calculation item like a discount item or
       * sales-tax item.
       */
      itemId?: string;

      /**
       * A built-in custom field for additional information specific to this purchase
       * order line. Unlike the user-defined fields in the `customFields` array, this is
       * a standard QuickBooks field that exists for all purchase order lines for
       * convenience. Developers often use this field for tracking information that
       * doesn't fit into other standard QuickBooks fields. Hidden by default in the
       * QuickBooks UI.
       */
      otherCustomField1?: string;

      /**
       * A second built-in custom field for additional information specific to this
       * purchase order line. Unlike the user-defined fields in the `customFields` array,
       * this is a standard QuickBooks field that exists for all purchase order lines for
       * convenience. Like `otherCustomField1`, developers often use this field for
       * tracking information that doesn't fit into other standard QuickBooks fields.
       * Hidden by default in the QuickBooks UI.
       */
      otherCustomField2?: string;

      /**
       * The account to use for this purchase order line, overriding the default account
       * associated with the item.
       */
      overrideItemAccountId?: string;

      /**
       * Specifies an alternative unit-of-measure set when updating this purchase order
       * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
       * select units from a different set than the item's default unit-of-measure set,
       * which remains unchanged on the item itself. The override applies only to this
       * specific line. For example, you can sell an item typically measured in volume
       * units using weight units in a specific transaction by specifying a different
       * unit-of-measure set with this field.
       */
      overrideUnitOfMeasureSetId?: string;

      /**
       * If `account` refers to an Accounts-Payable (A/P) account, `payee` refers to the
       * expense's vendor (not the customer). If `account` refers to any other type of
       * account, `payee` refers to the expense's customer (not the vendor).
       */
      payeeId?: string;

      /**
       * The quantity of the item associated with this purchase order line. This field
       * cannot be cleared.
       */
      quantity?: number;

      /**
       * The price per unit for this purchase order line. If both `rate` and `amount` are
       * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
       * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
       * decimal string. This field cannot be cleared.
       */
      rate?: string;

      /**
       * The sales-tax code for this purchase order line, determining whether it is
       * taxable or non-taxable. If set, this overrides any sales-tax codes defined on
       * the parent transaction or the associated item.
       *
       * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
       * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
       * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
       * non-taxable code to all sales.
       */
      salesTaxCodeId?: string;

      /**
       * The date on which the service for this purchase order line was or will be
       * performed, in ISO 8601 format (YYYY-MM-DD). This is particularly relevant for
       * service items.
       */
      serviceDate?: string;

      /**
       * The purchase order line's stock keeping unit (SKU), which is sometimes the
       * manufacturer's part number.
       */
      sku?: string;

      /**
       * The unit-of-measure used for the `quantity` in this purchase order line. Must be
       * a valid unit within the item's available units of measure.
       */
      unitOfMeasure?: string;
    }
  }

  export interface Line {
    /**
     * The QuickBooks-assigned unique identifier of an existing purchase order line you
     * wish to retain or update.
     *
     * **IMPORTANT**: Set this field to `-1` for new purchase order lines you wish to
     * add.
     */
    id: string;

    /**
     * The monetary amount of this purchase order line, represented as a decimal
     * string. If both `quantity` and `rate` are specified but not `amount`, QuickBooks
     * will use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount?: string;

    /**
     * The purchase order line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all purchase order
     * lines unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * A description of this purchase order line.
     */
    description?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this purchase order line is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * Indicates whether this purchase order line has been manually marked as closed,
     * even if this item has not been received or its sale has not been cancelled. If
     * all the purchase order lines are marked as closed, the purchase order itself is
     * marked as closed as well. You cannot change `isManuallyClosed` to `false` after
     * the purchase order line has been fully received.
     */
    isManuallyClosed?: boolean;

    /**
     * The item associated with this purchase order line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    itemId?: string;

    /**
     * A built-in custom field for additional information specific to this purchase
     * order line. Unlike the user-defined fields in the `customFields` array, this is
     * a standard QuickBooks field that exists for all purchase order lines for
     * convenience. Developers often use this field for tracking information that
     * doesn't fit into other standard QuickBooks fields. Hidden by default in the
     * QuickBooks UI.
     */
    otherCustomField1?: string;

    /**
     * A second built-in custom field for additional information specific to this
     * purchase order line. Unlike the user-defined fields in the `customFields` array,
     * this is a standard QuickBooks field that exists for all purchase order lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2?: string;

    /**
     * The account to use for this purchase order line, overriding the default account
     * associated with the item.
     */
    overrideItemAccountId?: string;

    /**
     * Specifies an alternative unit-of-measure set when updating this purchase order
     * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSetId?: string;

    /**
     * If `account` refers to an Accounts-Payable (A/P) account, `payee` refers to the
     * expense's vendor (not the customer). If `account` refers to any other type of
     * account, `payee` refers to the expense's customer (not the vendor).
     */
    payeeId?: string;

    /**
     * The quantity of the item associated with this purchase order line. This field
     * cannot be cleared.
     */
    quantity?: number;

    /**
     * The price per unit for this purchase order line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate?: string;

    /**
     * The sales-tax code for this purchase order line, determining whether it is
     * taxable or non-taxable. If set, this overrides any sales-tax codes defined on
     * the parent transaction or the associated item.
     *
     * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
     * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
     * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
     * non-taxable code to all sales.
     */
    salesTaxCodeId?: string;

    /**
     * The date on which the service for this purchase order line was or will be
     * performed, in ISO 8601 format (YYYY-MM-DD). This is particularly relevant for
     * service items.
     */
    serviceDate?: string;

    /**
     * The purchase order line's stock keeping unit (SKU), which is sometimes the
     * manufacturer's part number.
     */
    sku?: string;

    /**
     * The unit-of-measure used for the `quantity` in this purchase order line. Must be
     * a valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  /**
   * The purchase order's shipping address.
   */
  export interface ShippingAddress {
    /**
     * The city, district, suburb, town, or village name of the address.
     */
    city?: string;

    /**
     * The country name of the address.
     */
    country?: string;

    /**
     * The first line of the address (e.g., street, PO Box, or company name).
     */
    line1?: string;

    /**
     * The second line of the address, if needed (e.g., apartment, suite, unit, or
     * building).
     */
    line2?: string;

    /**
     * The third line of the address, if needed.
     */
    line3?: string;

    /**
     * The fourth line of the address, if needed.
     */
    line4?: string;

    /**
     * The fifth line of the address, if needed.
     */
    line5?: string;

    /**
     * A note written at the bottom of the address in the form in which it appears,
     * such as the invoice form.
     */
    note?: string;

    /**
     * The postal code or ZIP code of the address.
     */
    postalCode?: string;

    /**
     * The state, county, province, or region name of the address.
     */
    state?: string;
  }

  /**
   * The address of the vendor who sent this purchase order.
   */
  export interface VendorAddress {
    /**
     * The city, district, suburb, town, or village name of the address.
     */
    city?: string;

    /**
     * The country name of the address.
     */
    country?: string;

    /**
     * The first line of the address (e.g., street, PO Box, or company name).
     */
    line1?: string;

    /**
     * The second line of the address, if needed (e.g., apartment, suite, unit, or
     * building).
     */
    line2?: string;

    /**
     * The third line of the address, if needed.
     */
    line3?: string;

    /**
     * The fourth line of the address, if needed.
     */
    line4?: string;

    /**
     * The fifth line of the address, if needed.
     */
    line5?: string;

    /**
     * A note written at the bottom of the address in the form in which it appears,
     * such as the invoice form.
     */
    note?: string;

    /**
     * The postal code or ZIP code of the address.
     */
    postalCode?: string;

    /**
     * The state, county, province, or region name of the address.
     */
    state?: string;
  }
}

export interface PurchaseOrderListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for purchase orders associated with these accounts.
   */
  accountIds?: Array<string>;

  /**
   * Query param: Filter for purchase orders in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for specific purchase orders by their QuickBooks-assigned
   * unique identifier(s).
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  ids?: Array<string>;

  /**
   * Query param: Whether to include line items in the response. Defaults to `true`.
   */
  includeLineItems?: boolean;

  /**
   * Query param: Whether to include linked transactions in the response. Defaults to
   * `false`. For example, a payment linked to the corresponding purchase order.
   */
  includeLinkedTransactions?: boolean;

  /**
   * Query param: Filter for purchase orders whose `refNumber` contains this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberStartsWith` or `refNumberEndsWith`.
   */
  refNumberContains?: string;

  /**
   * Query param: Filter for purchase orders whose `refNumber` ends with this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberContains` or `refNumberStartsWith`.
   */
  refNumberEndsWith?: string;

  /**
   * Query param: Filter for purchase orders whose `refNumber` is greater than or
   * equal to this value. If omitted, the range will begin with the first number of
   * the list. Uses a numerical comparison for values that contain only digits;
   * otherwise, uses a lexicographical comparison.
   */
  refNumberFrom?: string;

  /**
   * Query param: Filter for specific purchase orders by their ref-number(s),
   * case-sensitive. In QuickBooks, ref-numbers are not required to be unique and can
   * be arbitrarily changed by the QuickBooks user.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  refNumbers?: Array<string>;

  /**
   * Query param: Filter for purchase orders whose `refNumber` starts with this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberContains` or `refNumberEndsWith`.
   */
  refNumberStartsWith?: string;

  /**
   * Query param: Filter for purchase orders whose `refNumber` is less than or equal
   * to this value. If omitted, the range will end with the last number of the list.
   * Uses a numerical comparison for values that contain only digits; otherwise, uses
   * a lexicographical comparison.
   */
  refNumberTo?: string;

  /**
   * Query param: Filter for purchase orders created on or after this date, in ISO
   * 8601 format (YYYY-MM-DD).
   */
  transactionDateFrom?: string;

  /**
   * Query param: Filter for purchase orders created on or before this date, in ISO
   * 8601 format (YYYY-MM-DD).
   */
  transactionDateTo?: string;

  /**
   * Query param: Filter for purchase orders updated on or after this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for purchase orders updated on or before this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;

  /**
   * Query param: Filter for purchase orders sent to these vendors.
   */
  vendorIds?: Array<string>;
}

PurchaseOrders.PurchaseOrdersCursorPage = PurchaseOrdersCursorPage;

export declare namespace PurchaseOrders {
  export {
    type PurchaseOrder as PurchaseOrder,
    PurchaseOrdersCursorPage as PurchaseOrdersCursorPage,
    type PurchaseOrderCreateParams as PurchaseOrderCreateParams,
    type PurchaseOrderRetrieveParams as PurchaseOrderRetrieveParams,
    type PurchaseOrderUpdateParams as PurchaseOrderUpdateParams,
    type PurchaseOrderListParams as PurchaseOrderListParams,
  };
}
