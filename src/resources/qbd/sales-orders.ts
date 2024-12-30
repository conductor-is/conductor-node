// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class SalesOrders extends APIResource {
  /**
   * Creates a new sales order.
   */
  create(params: SalesOrderCreateParams, options?: Core.RequestOptions): Core.APIPromise<SalesOrder> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/sales-orders', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a sales order by ID.
   */
  retrieve(
    id: string,
    params: SalesOrderRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SalesOrder> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/sales-orders/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing sales order.
   */
  update(
    id: string,
    params: SalesOrderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SalesOrder> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/sales-orders/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of sales orders. Use the `cursor` parameter to paginate through
   * the results.
   */
  list(
    params: SalesOrderListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SalesOrdersCursorPage, SalesOrder> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/sales-orders', SalesOrdersCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class SalesOrdersCursorPage extends CursorPage<SalesOrder> {}

export interface SalesOrder {
  /**
   * The unique identifier assigned by QuickBooks to this sales order. This ID is
   * unique across all transaction types.
   */
  id: string;

  /**
   * The sales order's billing address.
   */
  billingAddress: SalesOrder.BillingAddress | null;

  /**
   * The sales order's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this sales order's line items unless overridden at the
   * line item level.
   */
  class: SalesOrder.Class | null;

  /**
   * The date and time when this sales order was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The sales order's currency. For built-in currencies, the name and code are
   * standard international values. For user-defined currencies, all values are
   * editable.
   */
  currency: SalesOrder.Currency | null;

  /**
   * The customer or customer-job associated with this sales order.
   */
  customer: SalesOrder.Customer;

  /**
   * The message to display to the customer on the sales order.
   */
  customerMessage: SalesOrder.CustomerMessage | null;

  /**
   * The custom fields for the sales order object, added as user-defined data
   * extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<SalesOrder.CustomField>;

  /**
   * The predefined template in QuickBooks that determines the layout and formatting
   * for this sales order when printed or displayed.
   */
  documentTemplate: SalesOrder.DocumentTemplate | null;

  /**
   * The date by which this sales order must be paid, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  dueDate: string | null;

  /**
   * The market exchange rate between this sales order's currency and the home
   * currency in QuickBooks at the time of this transaction. Represented as a decimal
   * value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home currency).
   */
  exchangeRate: number | null;

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
   * Indicates whether all items in this sales order have been invoiced.
   */
  isFullyInvoiced: boolean | null;

  /**
   * Indicates whether this sales order has been manually marked as closed, even if
   * it has not been invoiced.
   */
  isManuallyClosed: boolean;

  /**
   * Indicates whether this sales order is included in the queue of documents for
   * QuickBooks to email to the customer.
   */
  isQueuedForEmail: boolean | null;

  /**
   * Indicates whether this sales order is included in the queue of documents for
   * QuickBooks to print.
   */
  isQueuedForPrint: boolean | null;

  /**
   * The sales order's line item groups, each representing a predefined set of
   * related items.
   */
  lineGroups: Array<SalesOrder.LineGroup>;

  /**
   * The sales order's line items, each representing a single product or service
   * ordered.
   */
  lines: Array<SalesOrder.Line>;

  /**
   * The sales order's linked transactions, such as payments applied, credits used,
   * or associated purchase orders.
   *
   * **IMPORTANT**: You must specify the parameter `includeLinkedTransactions` when
   * fetching a list of sales orders to receive this field because it is not returned
   * by default.
   */
  linkedTransactions: Array<SalesOrder.LinkedTransaction>;

  /**
   * A memo or note for this sales order.
   */
  memo: string | null;

  /**
   * The type of object. This value is always `"qbd_sales_order"`.
   */
  objectType: 'qbd_sales_order';

  /**
   * A built-in custom field for additional information specific to this sales order.
   * Unlike the user-defined fields in the `customFields` array, this is a standard
   * QuickBooks field that exists for all sales orders for convenience. Developers
   * often use this field for tracking information that doesn't fit into other
   * standard QuickBooks fields. Unlike `otherCustomField1` and `otherCustomField2`,
   * which are line item fields, this exists at the transaction level. Hidden by
   * default in the QuickBooks UI.
   */
  otherCustomField: string | null;

  /**
   * The customer's Purchase Order (PO) number associated with this sales order. This
   * field is often used to cross-reference the sales order with the customer's
   * purchasing system.
   */
  purchaseOrderNumber: string | null;

  /**
   * The case-sensitive user-defined reference number for this sales order, which can
   * be used to identify the transaction in QuickBooks. This value is not required to
   * be unique and can be arbitrarily changed by the QuickBooks user.
   */
  refNumber: string | null;

  /**
   * The current revision number of this sales order object, which changes each time
   * the object is modified. When updating this object, you must provide the most
   * recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The type of the sales channel for this sales order.
   */
  salesChannelName: 'blank' | 'ecommerce' | null;

  /**
   * The sales order's sales representative. Sales representatives can be employees,
   * vendors, or other names in QuickBooks.
   */
  salesRepresentative: SalesOrder.SalesRepresentative | null;

  /**
   * The name of the sales store for this sales order.
   */
  salesStoreName: string | null;

  /**
   * The type of the sales store for this sales order.
   */
  salesStoreType: string | null;

  /**
   * The sales-tax code for this sales order, determining whether it is taxable or
   * non-taxable. This can be overridden at the transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCode: SalesOrder.SalesTaxCode | null;

  /**
   * The sales-tax item used to calculate the actual tax amount for this sales
   * order's transactions by applying a specific tax rate collected for a single tax
   * agency. Unlike `salesTaxCode`, which only indicates general taxability, this
   * field drives the actual tax calculation and reporting.
   */
  salesTaxItem: SalesOrder.SalesTaxItem | null;

  /**
   * The sales tax percentage applied to this sales order, represented as a decimal
   * string.
   */
  salesTaxPercentage: string | null;

  /**
   * The total amount of sales tax charged for this sales order, represented as a
   * decimal string.
   */
  salesTaxTotal: string;

  /**
   * The origin location from where the product associated with this sales order is
   * shipped. This is the point at which ownership and liability for goods transfer
   * from seller to buyer. Internally, QuickBooks uses the term "FOB" for this field,
   * which stands for "freight on board". This field is informational and has no
   * accounting implications.
   */
  shipmentOrigin: string | null;

  /**
   * The sales order's shipping address.
   */
  shippingAddress: SalesOrder.ShippingAddress | null;

  /**
   * The date when the products or services for this sales order were shipped or are
   * expected to be shipped, in ISO 8601 format (YYYY-MM-DD).
   */
  shippingDate: string | null;

  /**
   * The shipping method used for this sales order, such as standard mail or
   * overnight delivery.
   */
  shippingMethod: SalesOrder.ShippingMethod | null;

  /**
   * The subtotal of this sales order, which is the sum of all sales order lines
   * before taxes and payments are applied, represented as a decimal string.
   */
  subtotal: string;

  /**
   * The sales order's payment terms, defining when payment is due and any applicable
   * discounts.
   */
  terms: SalesOrder.Terms | null;

  /**
   * The total monetary amount of this sales order, equivalent to the sum of the
   * amounts in `lines` and `lineGroups`, represented as a decimal string.
   */
  totalAmount: string;

  /**
   * The total monetary amount for this sales order converted to the home currency of
   * the QuickBooks company file. Represented as a decimal string.
   */
  totalAmountInHomeCurrency: string | null;

  /**
   * The date of this sales order, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * The date and time when this sales order was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace SalesOrder {
  /**
   * The sales order's billing address.
   */
  export interface BillingAddress {
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
   * The sales order's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this sales order's line items unless overridden at the
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
   * The sales order's currency. For built-in currencies, the name and code are
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

  /**
   * The customer or customer-job associated with this sales order.
   */
  export interface Customer {
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
   * The message to display to the customer on the sales order.
   */
  export interface CustomerMessage {
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
   * for this sales order when printed or displayed.
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

  export interface LineGroup {
    /**
     * The unique identifier assigned by QuickBooks to this sales order line group.
     * This ID is unique across all transaction line types.
     */
    id: string;

    /**
     * The custom fields for the sales order line group object, added as user-defined
     * data extensions, not included in the standard QuickBooks object.
     */
    customFields: Array<LineGroup.CustomField>;

    /**
     * A description of this sales order line group.
     */
    description: string | null;

    /**
     * The sales order line group's item group, representing a predefined set of items
     * bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroup: LineGroup.ItemGroup;

    /**
     * The sales order line group's line items, each representing a single product or
     * service ordered.
     */
    lines: Array<LineGroup.Line>;

    /**
     * The type of object. This value is always `"qbd_sales_order_line_group"`.
     */
    objectType: 'qbd_sales_order_line_group';

    /**
     * Specifies an alternative unit-of-measure set when updating this sales order line
     * group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSet: LineGroup.OverrideUnitOfMeasureSet | null;

    /**
     * The quantity of the item group associated with this sales order line group. This
     * field cannot be cleared.
     */
    quantity: number | null;

    /**
     * Indicates whether the individual items in this sales order line group and their
     * separate amounts appear on printed forms.
     */
    shouldPrintItemsInGroup: boolean;

    /**
     * The total monetary amount of this sales order line group, equivalent to the sum
     * of the amounts in `lines`, represented as a decimal string.
     */
    totalAmount: string;

    /**
     * The unit-of-measure used for the `quantity` in this sales order line group. Must
     * be a valid unit within the item's available units of measure.
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
     * The sales order line group's item group, representing a predefined set of items
     * bundled because they are commonly purchased together or grouped for faster
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
       * The unique identifier assigned by QuickBooks to this sales order line. This ID
       * is unique across all transaction line types.
       */
      id: string;

      /**
       * The monetary amount of this sales order line, represented as a decimal string.
       * If both `quantity` and `rate` are specified but not `amount`, QuickBooks will
       * use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
       * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
       * `1` and the suggested `rate`. This field cannot be cleared.
       */
      amount: string | null;

      /**
       * The sales order line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all sales order lines
       * unless overridden here, at the transaction line level.
       */
      class: Line.Class | null;

      /**
       * The custom fields for the sales order line object, added as user-defined data
       * extensions, not included in the standard QuickBooks object.
       */
      customFields: Array<Line.CustomField>;

      /**
       * A description of this sales order line.
       */
      description: string | null;

      /**
       * The expiration date for the serial number or lot number of the item associated
       * with this sales order line, in ISO 8601 format (YYYY-MM-DD). This is
       * particularly relevant for perishable or time-sensitive inventory items. Note
       * that this field is only supported on QuickBooks Desktop 2023 or later.
       */
      expirationDate: string | null;

      /**
       * The site location where inventory for the item associated with this sales order
       * line is stored.
       */
      inventorySite: Line.InventorySite | null;

      /**
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this sales order line is stored.
       */
      inventorySiteLocation: Line.InventorySiteLocation | null;

      /**
       * Indicates whether this sales order line has been manually marked as closed, even
       * if it has not been invoiced.
       */
      isManuallyClosed: boolean;

      /**
       * The item associated with this sales order line. This can refer to any good or
       * service that the business buys or sells, including item types such as a service
       * item, inventory item, or special calculation item like a discount item or
       * sales-tax item.
       */
      item: Line.Item | null;

      /**
       * The lot number of the item associated with this sales order line. Used for
       * tracking groups of inventory items that are purchased or manufactured together.
       */
      lotNumber: string | null;

      /**
       * The type of object. This value is always `"qbd_sales_order_line"`.
       */
      objectType: 'qbd_sales_order_line';

      /**
       * A built-in custom field for additional information specific to this sales order
       * line. Unlike the user-defined fields in the `customFields` array, this is a
       * standard QuickBooks field that exists for all sales order lines for convenience.
       * Developers often use this field for tracking information that doesn't fit into
       * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
       */
      otherCustomField1: string | null;

      /**
       * A second built-in custom field for additional information specific to this sales
       * order line. Unlike the user-defined fields in the `customFields` array, this is
       * a standard QuickBooks field that exists for all sales order lines for
       * convenience. Like `otherCustomField1`, developers often use this field for
       * tracking information that doesn't fit into other standard QuickBooks fields.
       * Hidden by default in the QuickBooks UI.
       */
      otherCustomField2: string | null;

      /**
       * Specifies an alternative unit-of-measure set when updating this sales order
       * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
       * select units from a different set than the item's default unit-of-measure set,
       * which remains unchanged on the item itself. The override applies only to this
       * specific line. For example, you can sell an item typically measured in volume
       * units using weight units in a specific transaction by specifying a different
       * unit-of-measure set with this field.
       */
      overrideUnitOfMeasureSet: Line.OverrideUnitOfMeasureSet | null;

      /**
       * The quantity of the item associated with this sales order line. This field
       * cannot be cleared.
       */
      quantity: number | null;

      /**
       * The number of units of this sales order line's `quantity` that have been
       * invoiced.
       */
      quantityInvoiced: number | null;

      /**
       * The price per unit for this sales order line. If both `rate` and `amount` are
       * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
       * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
       * decimal string. This field cannot be cleared.
       */
      rate: string | null;

      /**
       * The price of this sales order line expressed as a percentage. Typically used for
       * discount or markup items.
       */
      ratePercent: string | null;

      /**
       * The sales-tax code for this sales order line, determining whether it is taxable
       * or non-taxable. If set, this overrides any sales-tax codes defined on the parent
       * transaction or the associated item.
       *
       * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
       * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
       * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
       * non-taxable code to all sales.
       */
      salesTaxCode: Line.SalesTaxCode | null;

      /**
       * The serial number of the item associated with this sales order line. This is
       * used for tracking individual units of serialized inventory items.
       */
      serialNumber: string | null;

      /**
       * The unit-of-measure used for the `quantity` in this sales order line. Must be a
       * valid unit within the item's available units of measure.
       */
      unitOfMeasure: string | null;
    }

    export namespace Line {
      /**
       * The sales order line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all sales order lines
       * unless overridden here, at the transaction line level.
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
       * The site location where inventory for the item associated with this sales order
       * line is stored.
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

      /**
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this sales order line is stored.
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
       * The item associated with this sales order line. This can refer to any good or
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
       * Specifies an alternative unit-of-measure set when updating this sales order
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
       * The sales-tax code for this sales order line, determining whether it is taxable
       * or non-taxable. If set, this overrides any sales-tax codes defined on the parent
       * transaction or the associated item.
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
     * Specifies an alternative unit-of-measure set when updating this sales order line
     * group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
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
  }

  export interface Line {
    /**
     * The unique identifier assigned by QuickBooks to this sales order line. This ID
     * is unique across all transaction line types.
     */
    id: string;

    /**
     * The monetary amount of this sales order line, represented as a decimal string.
     * If both `quantity` and `rate` are specified but not `amount`, QuickBooks will
     * use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount: string | null;

    /**
     * The sales order line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all sales order lines
     * unless overridden here, at the transaction line level.
     */
    class: Line.Class | null;

    /**
     * The custom fields for the sales order line object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields: Array<Line.CustomField>;

    /**
     * A description of this sales order line.
     */
    description: string | null;

    /**
     * The expiration date for the serial number or lot number of the item associated
     * with this sales order line, in ISO 8601 format (YYYY-MM-DD). This is
     * particularly relevant for perishable or time-sensitive inventory items. Note
     * that this field is only supported on QuickBooks Desktop 2023 or later.
     */
    expirationDate: string | null;

    /**
     * The site location where inventory for the item associated with this sales order
     * line is stored.
     */
    inventorySite: Line.InventorySite | null;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this sales order line is stored.
     */
    inventorySiteLocation: Line.InventorySiteLocation | null;

    /**
     * Indicates whether this sales order line has been manually marked as closed, even
     * if it has not been invoiced.
     */
    isManuallyClosed: boolean;

    /**
     * The item associated with this sales order line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    item: Line.Item | null;

    /**
     * The lot number of the item associated with this sales order line. Used for
     * tracking groups of inventory items that are purchased or manufactured together.
     */
    lotNumber: string | null;

    /**
     * The type of object. This value is always `"qbd_sales_order_line"`.
     */
    objectType: 'qbd_sales_order_line';

    /**
     * A built-in custom field for additional information specific to this sales order
     * line. Unlike the user-defined fields in the `customFields` array, this is a
     * standard QuickBooks field that exists for all sales order lines for convenience.
     * Developers often use this field for tracking information that doesn't fit into
     * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
     */
    otherCustomField1: string | null;

    /**
     * A second built-in custom field for additional information specific to this sales
     * order line. Unlike the user-defined fields in the `customFields` array, this is
     * a standard QuickBooks field that exists for all sales order lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2: string | null;

    /**
     * Specifies an alternative unit-of-measure set when updating this sales order
     * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSet: Line.OverrideUnitOfMeasureSet | null;

    /**
     * The quantity of the item associated with this sales order line. This field
     * cannot be cleared.
     */
    quantity: number | null;

    /**
     * The number of units of this sales order line's `quantity` that have been
     * invoiced.
     */
    quantityInvoiced: number | null;

    /**
     * The price per unit for this sales order line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate: string | null;

    /**
     * The price of this sales order line expressed as a percentage. Typically used for
     * discount or markup items.
     */
    ratePercent: string | null;

    /**
     * The sales-tax code for this sales order line, determining whether it is taxable
     * or non-taxable. If set, this overrides any sales-tax codes defined on the parent
     * transaction or the associated item.
     *
     * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
     * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
     * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
     * non-taxable code to all sales.
     */
    salesTaxCode: Line.SalesTaxCode | null;

    /**
     * The serial number of the item associated with this sales order line. This is
     * used for tracking individual units of serialized inventory items.
     */
    serialNumber: string | null;

    /**
     * The unit-of-measure used for the `quantity` in this sales order line. Must be a
     * valid unit within the item's available units of measure.
     */
    unitOfMeasure: string | null;
  }

  export namespace Line {
    /**
     * The sales order line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all sales order lines
     * unless overridden here, at the transaction line level.
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
     * The site location where inventory for the item associated with this sales order
     * line is stored.
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

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this sales order line is stored.
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
     * The item associated with this sales order line. This can refer to any good or
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
     * Specifies an alternative unit-of-measure set when updating this sales order
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
     * The sales-tax code for this sales order line, determining whether it is taxable
     * or non-taxable. If set, this overrides any sales-tax codes defined on the parent
     * transaction or the associated item.
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
   * The sales order's sales representative. Sales representatives can be employees,
   * vendors, or other names in QuickBooks.
   */
  export interface SalesRepresentative {
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
   * The sales-tax code for this sales order, determining whether it is taxable or
   * non-taxable. This can be overridden at the transaction-line level.
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
   * The sales-tax item used to calculate the actual tax amount for this sales
   * order's transactions by applying a specific tax rate collected for a single tax
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

  /**
   * The sales order's shipping address.
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
   * The shipping method used for this sales order, such as standard mail or
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
   * The sales order's payment terms, defining when payment is due and any applicable
   * discounts.
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
}

export interface SalesOrderCreateParams {
  /**
   * Body param: The customer or customer-job associated with this sales order.
   */
  customerId: string;

  /**
   * Body param: The date of this sales order, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The sales order's billing address.
   */
  billingAddress?: SalesOrderCreateParams.BillingAddress;

  /**
   * Body param: The sales order's class. Classes can be used to categorize objects
   * into meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this sales order's line items unless overridden at the
   * line item level.
   */
  classId?: string;

  /**
   * Body param: The message to display to the customer on the sales order.
   */
  customerMessageId?: string;

  /**
   * Body param: The predefined template in QuickBooks that determines the layout and
   * formatting for this sales order when printed or displayed.
   */
  documentTemplateId?: string;

  /**
   * Body param: The date by which this sales order must be paid, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  dueDate?: string;

  /**
   * Body param: The market exchange rate between this sales order's currency and the
   * home currency in QuickBooks at the time of this transaction. Represented as a
   * decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home currency).
   */
  exchangeRate?: number;

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
   * Body param: Indicates whether this sales order has been manually marked as
   * closed, even if it has not been invoiced.
   */
  isManuallyClosed?: boolean;

  /**
   * Body param: Indicates whether this sales order is included in the queue of
   * documents for QuickBooks to email to the customer.
   */
  isQueuedForEmail?: boolean;

  /**
   * Body param: Indicates whether this sales order is included in the queue of
   * documents for QuickBooks to print.
   */
  isQueuedForPrint?: boolean;

  /**
   * Body param: The sales order's line item groups, each representing a predefined
   * set of related items.
   *
   * **IMPORTANT**: You must specify `lines`, `lineGroups`, or both when creating a
   * sales order.
   */
  lineGroups?: Array<SalesOrderCreateParams.LineGroup>;

  /**
   * Body param: The sales order's line items, each representing a single product or
   * service ordered.
   *
   * **IMPORTANT**: You must specify `lines`, `lineGroups`, or both when creating a
   * sales order.
   */
  lines?: Array<SalesOrderCreateParams.Line>;

  /**
   * Body param: A memo or note for this sales order.
   */
  memo?: string;

  /**
   * Body param: A built-in custom field for additional information specific to this
   * sales order. Unlike the user-defined fields in the `customFields` array, this is
   * a standard QuickBooks field that exists for all sales orders for convenience.
   * Developers often use this field for tracking information that doesn't fit into
   * other standard QuickBooks fields. Unlike `otherCustomField1` and
   * `otherCustomField2`, which are line item fields, this exists at the transaction
   * level. Hidden by default in the QuickBooks UI.
   */
  otherCustomField?: string;

  /**
   * Body param: The customer's Purchase Order (PO) number associated with this sales
   * order. This field is often used to cross-reference the sales order with the
   * customer's purchasing system.
   */
  purchaseOrderNumber?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this sales
   * order, which can be used to identify the transaction in QuickBooks. This value
   * is not required to be unique and can be arbitrarily changed by the QuickBooks
   * user.
   */
  refNumber?: string;

  /**
   * Body param: The type of the sales channel for this sales order.
   */
  salesChannelName?: 'blank' | 'ecommerce';

  /**
   * Body param: The sales order's sales representative. Sales representatives can be
   * employees, vendors, or other names in QuickBooks.
   */
  salesRepresentativeId?: string;

  /**
   * Body param: The name of the sales store for this sales order.
   */
  salesStoreName?: string;

  /**
   * Body param: The type of the sales store for this sales order.
   */
  salesStoreType?: string;

  /**
   * Body param: The sales-tax code for this sales order, determining whether it is
   * taxable or non-taxable. This can be overridden at the transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCodeId?: string;

  /**
   * Body param: The sales-tax item used to calculate the actual tax amount for this
   * sales order's transactions by applying a specific tax rate collected for a
   * single tax agency. Unlike `salesTaxCode`, which only indicates general
   * taxability, this field drives the actual tax calculation and reporting.
   */
  salesTaxItemId?: string;

  /**
   * Body param: The origin location from where the product associated with this
   * sales order is shipped. This is the point at which ownership and liability for
   * goods transfer from seller to buyer. Internally, QuickBooks uses the term "FOB"
   * for this field, which stands for "freight on board". This field is informational
   * and has no accounting implications.
   */
  shipmentOrigin?: string;

  /**
   * Body param: The sales order's shipping address.
   */
  shippingAddress?: SalesOrderCreateParams.ShippingAddress;

  /**
   * Body param: The date when the products or services for this sales order were
   * shipped or are expected to be shipped, in ISO 8601 format (YYYY-MM-DD).
   */
  shippingDate?: string;

  /**
   * Body param: The shipping method used for this sales order, such as standard mail
   * or overnight delivery.
   */
  shippingMethodId?: string;

  /**
   * Body param: The sales order's payment terms, defining when payment is due and
   * any applicable discounts.
   */
  termsId?: string;
}

export namespace SalesOrderCreateParams {
  /**
   * The sales order's billing address.
   */
  export interface BillingAddress {
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

  export interface LineGroup {
    /**
     * The sales order line group's item group, representing a predefined set of items
     * bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroupId: string;

    /**
     * The custom fields for the sales order line group object, added as user-defined
     * data extensions, not included in the standard QuickBooks object.
     */
    customFields?: Array<LineGroup.CustomField>;

    /**
     * The site location where inventory for the item group associated with this sales
     * order line group is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item group associated with this sales order line group is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The quantity of the item group associated with this sales order line group. This
     * field cannot be cleared.
     */
    quantity?: number;

    /**
     * The unit-of-measure used for the `quantity` in this sales order line group. Must
     * be a valid unit within the item's available units of measure.
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
     * The monetary amount of this sales order line, represented as a decimal string.
     * If both `quantity` and `rate` are specified but not `amount`, QuickBooks will
     * use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount?: string;

    /**
     * The sales order line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all sales order lines
     * unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * The custom fields for the sales order line object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields?: Array<Line.CustomField>;

    /**
     * A description of this sales order line.
     */
    description?: string;

    /**
     * The site location where inventory for the item associated with this sales order
     * line is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this sales order line is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * Indicates whether this sales order line has been manually marked as closed, even
     * if it has not been invoiced.
     */
    isManuallyClosed?: boolean;

    /**
     * The item associated with this sales order line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    itemId?: string;

    /**
     * The lot number of the item associated with this sales order line. Used for
     * tracking groups of inventory items that are purchased or manufactured together.
     */
    lotNumber?: string;

    /**
     * A built-in custom field for additional information specific to this sales order
     * line. Unlike the user-defined fields in the `customFields` array, this is a
     * standard QuickBooks field that exists for all sales order lines for convenience.
     * Developers often use this field for tracking information that doesn't fit into
     * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
     */
    otherCustomField1?: string;

    /**
     * A second built-in custom field for additional information specific to this sales
     * order line. Unlike the user-defined fields in the `customFields` array, this is
     * a standard QuickBooks field that exists for all sales order lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2?: string;

    /**
     * The price level applied to this sales order line. This overrides any price level
     * set on the corresponding customer. The resulting sales order line will not show
     * this price level, only the final `rate` calculated from it.
     */
    priceLevelId?: string;

    /**
     * Specifies how to resolve price rule conflicts when adding or modifying this
     * sales order line.
     */
    priceRuleConflictStrategy?: 'base_price' | 'zero';

    /**
     * The quantity of the item associated with this sales order line. This field
     * cannot be cleared.
     */
    quantity?: number;

    /**
     * The price per unit for this sales order line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate?: string;

    /**
     * The price of this sales order line expressed as a percentage. Typically used for
     * discount or markup items.
     */
    ratePercent?: string;

    /**
     * The sales-tax code for this sales order line, determining whether it is taxable
     * or non-taxable. If set, this overrides any sales-tax codes defined on the parent
     * transaction or the associated item.
     *
     * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
     * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
     * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
     * non-taxable code to all sales.
     */
    salesTaxCodeId?: string;

    /**
     * The serial number of the item associated with this sales order line. This is
     * used for tracking individual units of serialized inventory items.
     */
    serialNumber?: string;

    /**
     * The unit-of-measure used for the `quantity` in this sales order line. Must be a
     * valid unit within the item's available units of measure.
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
   * The sales order's shipping address.
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
}

export interface SalesOrderRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface SalesOrderUpdateParams {
  /**
   * Body param: The current revision number of the sales order object you are
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
   * Body param: The sales order's billing address.
   */
  billingAddress?: SalesOrderUpdateParams.BillingAddress;

  /**
   * Body param: The sales order's class. Classes can be used to categorize objects
   * into meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this sales order's line items unless overridden at the
   * line item level.
   */
  classId?: string;

  /**
   * Body param: The customer or customer-job associated with this sales order.
   */
  customerId?: string;

  /**
   * Body param: The message to display to the customer on the sales order.
   */
  customerMessageId?: string;

  /**
   * Body param: The predefined template in QuickBooks that determines the layout and
   * formatting for this sales order when printed or displayed.
   */
  documentTemplateId?: string;

  /**
   * Body param: The date by which this sales order must be paid, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  dueDate?: string;

  /**
   * Body param: The market exchange rate between this sales order's currency and the
   * home currency in QuickBooks at the time of this transaction. Represented as a
   * decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home currency).
   */
  exchangeRate?: number;

  /**
   * Body param: Indicates whether this sales order has been manually marked as
   * closed, even if it has not been invoiced.
   */
  isManuallyClosed?: boolean;

  /**
   * Body param: Indicates whether this sales order is included in the queue of
   * documents for QuickBooks to email to the customer.
   */
  isQueuedForEmail?: boolean;

  /**
   * Body param: Indicates whether this sales order is included in the queue of
   * documents for QuickBooks to print.
   */
  isQueuedForPrint?: boolean;

  /**
   * Body param: The sales order's line item groups, each representing a predefined
   * set of related items.
   *
   * **IMPORTANT**: When updating a sales order's line item groups, this array
   * completely REPLACES all existing line item groups for that sales order. To
   * retain any current line item groups, include them in this array, even if they
   * have not changed. Any line item groups not included will be removed. To add a
   * new line item group, include it with its `id` set to `-1`. If you do not wish to
   * modify the line item groups, you can omit this field entirely to keep them
   * unchanged.
   */
  lineGroups?: Array<SalesOrderUpdateParams.LineGroup>;

  /**
   * Body param: The sales order's line items, each representing a single product or
   * service ordered.
   *
   * **IMPORTANT**: When updating a sales order's line items, this array completely
   * REPLACES all existing line items for that sales order. To retain any current
   * line items, include them in this array, even if they have not changed. Any line
   * items not included will be removed. To add a new line item, include it with its
   * `id` set to `-1`. If you do not wish to modify the line items, you can omit this
   * field entirely to keep them unchanged.
   */
  lines?: Array<SalesOrderUpdateParams.Line>;

  /**
   * Body param: A memo or note for this sales order.
   */
  memo?: string;

  /**
   * Body param: A built-in custom field for additional information specific to this
   * sales order. Unlike the user-defined fields in the `customFields` array, this is
   * a standard QuickBooks field that exists for all sales orders for convenience.
   * Developers often use this field for tracking information that doesn't fit into
   * other standard QuickBooks fields. Unlike `otherCustomField1` and
   * `otherCustomField2`, which are line item fields, this exists at the transaction
   * level. Hidden by default in the QuickBooks UI.
   */
  otherCustomField?: string;

  /**
   * Body param: The customer's Purchase Order (PO) number associated with this sales
   * order. This field is often used to cross-reference the sales order with the
   * customer's purchasing system.
   */
  purchaseOrderNumber?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this sales
   * order, which can be used to identify the transaction in QuickBooks. This value
   * is not required to be unique and can be arbitrarily changed by the QuickBooks
   * user.
   */
  refNumber?: string;

  /**
   * Body param: The type of the sales channel for this sales order.
   */
  salesChannelName?: 'blank' | 'ecommerce';

  /**
   * Body param: The sales order's sales representative. Sales representatives can be
   * employees, vendors, or other names in QuickBooks.
   */
  salesRepresentativeId?: string;

  /**
   * Body param: The name of the sales store for this sales order.
   */
  salesStoreName?: string;

  /**
   * Body param: The type of the sales store for this sales order.
   */
  salesStoreType?: string;

  /**
   * Body param: The sales-tax code for this sales order, determining whether it is
   * taxable or non-taxable. This can be overridden at the transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCodeId?: string;

  /**
   * Body param: The sales-tax item used to calculate the actual tax amount for this
   * sales order's transactions by applying a specific tax rate collected for a
   * single tax agency. Unlike `salesTaxCode`, which only indicates general
   * taxability, this field drives the actual tax calculation and reporting.
   */
  salesTaxItemId?: string;

  /**
   * Body param: The origin location from where the product associated with this
   * sales order is shipped. This is the point at which ownership and liability for
   * goods transfer from seller to buyer. Internally, QuickBooks uses the term "FOB"
   * for this field, which stands for "freight on board". This field is informational
   * and has no accounting implications.
   */
  shipmentOrigin?: string;

  /**
   * Body param: The sales order's shipping address.
   */
  shippingAddress?: SalesOrderUpdateParams.ShippingAddress;

  /**
   * Body param: The date when the products or services for this sales order were
   * shipped or are expected to be shipped, in ISO 8601 format (YYYY-MM-DD).
   */
  shippingDate?: string;

  /**
   * Body param: The shipping method used for this sales order, such as standard mail
   * or overnight delivery.
   */
  shippingMethodId?: string;

  /**
   * Body param: The sales order's payment terms, defining when payment is due and
   * any applicable discounts.
   */
  termsId?: string;

  /**
   * Body param: The date of this sales order, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate?: string;
}

export namespace SalesOrderUpdateParams {
  /**
   * The sales order's billing address.
   */
  export interface BillingAddress {
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

  export interface LineGroup {
    /**
     * The QuickBooks-assigned unique identifier of an existing sales order line group
     * you wish to retain or update.
     *
     * **IMPORTANT**: Set this field to `-1` for new sales order line groups you wish
     * to add.
     */
    id: string;

    /**
     * The sales order line group's item group, representing a predefined set of items
     * bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroupId?: string;

    /**
     * The sales order line group's line items, each representing a single product or
     * service ordered.
     *
     * **IMPORTANT**: When updating a sales order line group's line items, this array
     * completely REPLACES all existing line items for that sales order line group. To
     * retain any current line items, include them in this array, even if they have not
     * changed. Any line items not included will be removed. To add a new line item,
     * include it with its `id` set to `-1`. If you do not wish to modify the line
     * items, you can omit this field entirely to keep them unchanged.
     */
    lines?: Array<LineGroup.Line>;

    /**
     * Specifies an alternative unit-of-measure set when updating this sales order line
     * group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSetId?: string;

    /**
     * The quantity of the item group associated with this sales order line group. This
     * field cannot be cleared.
     */
    quantity?: number;

    /**
     * The unit-of-measure used for the `quantity` in this sales order line group. Must
     * be a valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  export namespace LineGroup {
    export interface Line {
      /**
       * The QuickBooks-assigned unique identifier of an existing sales order line you
       * wish to retain or update.
       *
       * **IMPORTANT**: Set this field to `-1` for new sales order lines you wish to add.
       */
      id: string;

      /**
       * The monetary amount of this sales order line, represented as a decimal string.
       * If both `quantity` and `rate` are specified but not `amount`, QuickBooks will
       * use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
       * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
       * `1` and the suggested `rate`. This field cannot be cleared.
       */
      amount?: string;

      /**
       * The sales order line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all sales order lines
       * unless overridden here, at the transaction line level.
       */
      classId?: string;

      /**
       * A description of this sales order line.
       */
      description?: string;

      /**
       * The site location where inventory for the item associated with this sales order
       * line is stored.
       */
      inventorySiteId?: string;

      /**
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this sales order line is stored.
       */
      inventorySiteLocationId?: string;

      /**
       * Indicates whether this sales order line has been manually marked as closed, even
       * if it has not been invoiced.
       */
      isManuallyClosed?: boolean;

      /**
       * The item associated with this sales order line. This can refer to any good or
       * service that the business buys or sells, including item types such as a service
       * item, inventory item, or special calculation item like a discount item or
       * sales-tax item.
       */
      itemId?: string;

      /**
       * The lot number of the item associated with this sales order line. Used for
       * tracking groups of inventory items that are purchased or manufactured together.
       */
      lotNumber?: string;

      /**
       * A built-in custom field for additional information specific to this sales order
       * line. Unlike the user-defined fields in the `customFields` array, this is a
       * standard QuickBooks field that exists for all sales order lines for convenience.
       * Developers often use this field for tracking information that doesn't fit into
       * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
       */
      otherCustomField1?: string;

      /**
       * A second built-in custom field for additional information specific to this sales
       * order line. Unlike the user-defined fields in the `customFields` array, this is
       * a standard QuickBooks field that exists for all sales order lines for
       * convenience. Like `otherCustomField1`, developers often use this field for
       * tracking information that doesn't fit into other standard QuickBooks fields.
       * Hidden by default in the QuickBooks UI.
       */
      otherCustomField2?: string;

      /**
       * Specifies an alternative unit-of-measure set when updating this sales order
       * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
       * select units from a different set than the item's default unit-of-measure set,
       * which remains unchanged on the item itself. The override applies only to this
       * specific line. For example, you can sell an item typically measured in volume
       * units using weight units in a specific transaction by specifying a different
       * unit-of-measure set with this field.
       */
      overrideUnitOfMeasureSetId?: string;

      /**
       * The price level applied to this sales order line. This overrides any price level
       * set on the corresponding customer. The resulting sales order line will not show
       * this price level, only the final `rate` calculated from it.
       */
      priceLevelId?: string;

      /**
       * Specifies how to resolve price rule conflicts when adding or modifying this
       * sales order line.
       */
      priceRuleConflictStrategy?: 'base_price' | 'zero';

      /**
       * The quantity of the item associated with this sales order line. This field
       * cannot be cleared.
       */
      quantity?: number;

      /**
       * The price per unit for this sales order line. If both `rate` and `amount` are
       * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
       * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
       * decimal string. This field cannot be cleared.
       */
      rate?: string;

      /**
       * The price of this sales order line expressed as a percentage. Typically used for
       * discount or markup items.
       */
      ratePercent?: string;

      /**
       * The sales-tax code for this sales order line, determining whether it is taxable
       * or non-taxable. If set, this overrides any sales-tax codes defined on the parent
       * transaction or the associated item.
       *
       * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
       * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
       * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
       * non-taxable code to all sales.
       */
      salesTaxCodeId?: string;

      /**
       * The serial number of the item associated with this sales order line. This is
       * used for tracking individual units of serialized inventory items.
       */
      serialNumber?: string;

      /**
       * The unit-of-measure used for the `quantity` in this sales order line. Must be a
       * valid unit within the item's available units of measure.
       */
      unitOfMeasure?: string;
    }
  }

  export interface Line {
    /**
     * The QuickBooks-assigned unique identifier of an existing sales order line you
     * wish to retain or update.
     *
     * **IMPORTANT**: Set this field to `-1` for new sales order lines you wish to add.
     */
    id: string;

    /**
     * The monetary amount of this sales order line, represented as a decimal string.
     * If both `quantity` and `rate` are specified but not `amount`, QuickBooks will
     * use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount?: string;

    /**
     * The sales order line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all sales order lines
     * unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * A description of this sales order line.
     */
    description?: string;

    /**
     * The site location where inventory for the item associated with this sales order
     * line is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this sales order line is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * Indicates whether this sales order line has been manually marked as closed, even
     * if it has not been invoiced.
     */
    isManuallyClosed?: boolean;

    /**
     * The item associated with this sales order line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    itemId?: string;

    /**
     * The lot number of the item associated with this sales order line. Used for
     * tracking groups of inventory items that are purchased or manufactured together.
     */
    lotNumber?: string;

    /**
     * A built-in custom field for additional information specific to this sales order
     * line. Unlike the user-defined fields in the `customFields` array, this is a
     * standard QuickBooks field that exists for all sales order lines for convenience.
     * Developers often use this field for tracking information that doesn't fit into
     * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
     */
    otherCustomField1?: string;

    /**
     * A second built-in custom field for additional information specific to this sales
     * order line. Unlike the user-defined fields in the `customFields` array, this is
     * a standard QuickBooks field that exists for all sales order lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2?: string;

    /**
     * Specifies an alternative unit-of-measure set when updating this sales order
     * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSetId?: string;

    /**
     * The price level applied to this sales order line. This overrides any price level
     * set on the corresponding customer. The resulting sales order line will not show
     * this price level, only the final `rate` calculated from it.
     */
    priceLevelId?: string;

    /**
     * Specifies how to resolve price rule conflicts when adding or modifying this
     * sales order line.
     */
    priceRuleConflictStrategy?: 'base_price' | 'zero';

    /**
     * The quantity of the item associated with this sales order line. This field
     * cannot be cleared.
     */
    quantity?: number;

    /**
     * The price per unit for this sales order line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate?: string;

    /**
     * The price of this sales order line expressed as a percentage. Typically used for
     * discount or markup items.
     */
    ratePercent?: string;

    /**
     * The sales-tax code for this sales order line, determining whether it is taxable
     * or non-taxable. If set, this overrides any sales-tax codes defined on the parent
     * transaction or the associated item.
     *
     * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
     * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
     * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
     * non-taxable code to all sales.
     */
    salesTaxCodeId?: string;

    /**
     * The serial number of the item associated with this sales order line. This is
     * used for tracking individual units of serialized inventory items.
     */
    serialNumber?: string;

    /**
     * The unit-of-measure used for the `quantity` in this sales order line. Must be a
     * valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  /**
   * The sales order's shipping address.
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
}

export interface SalesOrderListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for sales orders in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for sales orders created for these customers.
   */
  customerIds?: Array<string>;

  /**
   * Query param: Filter for specific sales orders by their QuickBooks-assigned
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
   * `false`. For example, a payment linked to the corresponding sales order.
   */
  includeLinkedTransactions?: boolean;

  /**
   * Query param: Filter for sales orders whose `refNumber` contains this substring.
   * NOTE: If you use this parameter, you cannot also use `refNumberStartsWith` or
   * `refNumberEndsWith`.
   */
  refNumberContains?: string;

  /**
   * Query param: Filter for sales orders whose `refNumber` ends with this substring.
   * NOTE: If you use this parameter, you cannot also use `refNumberContains` or
   * `refNumberStartsWith`.
   */
  refNumberEndsWith?: string;

  /**
   * Query param: Filter for sales orders whose `refNumber` is greater than or equal
   * to this value. If omitted, the range will begin with the first number of the
   * list. Uses a numerical comparison for values that contain only digits;
   * otherwise, uses a lexicographical comparison.
   */
  refNumberFrom?: string;

  /**
   * Query param: Filter for specific sales orders by their ref-number(s),
   * case-sensitive. In QuickBooks, ref-numbers are not required to be unique and can
   * be arbitrarily changed by the QuickBooks user.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  refNumbers?: Array<string>;

  /**
   * Query param: Filter for sales orders whose `refNumber` starts with this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberContains` or `refNumberEndsWith`.
   */
  refNumberStartsWith?: string;

  /**
   * Query param: Filter for sales orders whose `refNumber` is less than or equal to
   * this value. If omitted, the range will end with the last number of the list.
   * Uses a numerical comparison for values that contain only digits; otherwise, uses
   * a lexicographical comparison.
   */
  refNumberTo?: string;

  /**
   * Query param: Filter for sales orders created on or after this date, in ISO 8601
   * format (YYYY-MM-DD).
   */
  transactionDateFrom?: string;

  /**
   * Query param: Filter for sales orders created on or before this date, in ISO 8601
   * format (YYYY-MM-DD).
   */
  transactionDateTo?: string;

  /**
   * Query param: Filter for sales orders updated on or after this date and time, in
   * ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD),
   * the time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for sales orders updated on or before this date and time, in
   * ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD),
   * the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

SalesOrders.SalesOrdersCursorPage = SalesOrdersCursorPage;

export declare namespace SalesOrders {
  export {
    type SalesOrder as SalesOrder,
    SalesOrdersCursorPage as SalesOrdersCursorPage,
    type SalesOrderCreateParams as SalesOrderCreateParams,
    type SalesOrderRetrieveParams as SalesOrderRetrieveParams,
    type SalesOrderUpdateParams as SalesOrderUpdateParams,
    type SalesOrderListParams as SalesOrderListParams,
  };
}
