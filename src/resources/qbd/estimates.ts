// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class Estimates extends APIResource {
  /**
   * Creates a new estimate.
   */
  create(params: EstimateCreateParams, options?: Core.RequestOptions): Core.APIPromise<Estimate> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/estimates', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves an estimate by ID.
   */
  retrieve(
    id: string,
    params: EstimateRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Estimate> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/estimates/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing estimate.
   */
  update(id: string, params: EstimateUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Estimate> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/estimates/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of estimates. Use the `cursor` parameter to paginate through the
   * results.
   */
  list(
    params: EstimateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EstimatesCursorPage, Estimate> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/estimates', EstimatesCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class EstimatesCursorPage extends CursorPage<Estimate> {}

export interface Estimate {
  /**
   * The unique identifier assigned by QuickBooks to this estimate. This ID is unique
   * across all transaction types.
   */
  id: string;

  /**
   * The estimate's billing address.
   */
  billingAddress: Estimate.BillingAddress | null;

  /**
   * The estimate's class. Classes can be used to categorize objects into meaningful
   * segments, such as department, location, or type of work. In QuickBooks, class
   * tracking is off by default. A class defined here is automatically used in this
   * estimate's line items unless overridden at the line item level.
   */
  class: Estimate.Class | null;

  /**
   * The date and time when this estimate was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The estimate's currency. For built-in currencies, the name and code are standard
   * international values. For user-defined currencies, all values are editable.
   */
  currency: Estimate.Currency | null;

  /**
   * The customer or customer-job associated with this estimate.
   */
  customer: Estimate.Customer;

  /**
   * The message to display to the customer on the estimate.
   */
  customerMessage: Estimate.CustomerMessage | null;

  /**
   * The custom fields for the estimate object, added as user-defined data
   * extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<Estimate.CustomField>;

  /**
   * The predefined template in QuickBooks that determines the layout and formatting
   * for this estimate when printed or displayed.
   */
  documentTemplate: Estimate.DocumentTemplate | null;

  /**
   * The date by which this estimate must be paid, in ISO 8601 format (YYYY-MM-DD).
   */
  dueDate: string | null;

  /**
   * The market exchange rate between this estimate's currency and the home currency
   * in QuickBooks at the time of this transaction. Represented as a decimal value
   * (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home currency).
   */
  exchangeRate: number | null;

  /**
   * A globally unique identifier (GUID) you, the developer, can provide for tracking
   * this object in your external system.
   */
  externalId: string | null;

  /**
   * Indicates whether this estimate is active. Inactive objects are typically hidden
   * from views and reports in QuickBooks.
   */
  isActive: boolean;

  /**
   * Indicates whether this estimate is included in the queue of documents for
   * QuickBooks to email to the customer.
   */
  isQueuedForEmail: boolean | null;

  /**
   * The estimate's line item groups, each representing a predefined set of related
   * items.
   */
  lineGroups: Array<Estimate.LineGroup>;

  /**
   * The estimate's line items, each representing a single product or service quoted.
   */
  lines: Array<Estimate.Line>;

  /**
   * The estimate's linked transactions, such as payments applied, credits used, or
   * associated purchase orders.
   *
   * **IMPORTANT**: You must specify the parameter `includeLinkedTransactions` when
   * fetching a list of estimates to receive this field because it is not returned by
   * default.
   */
  linkedTransactions: Array<Estimate.LinkedTransaction>;

  /**
   * A memo or note for this estimate that appears in reports, but not on the
   * estimate. Use `customerMessage` to add a note to this estimate.
   */
  memo: string | null;

  /**
   * The type of object. This value is always `"qbd_estimate"`.
   */
  objectType: 'qbd_estimate';

  /**
   * A built-in custom field for additional information specific to this estimate.
   * Unlike the user-defined fields in the `customFields` array, this is a standard
   * QuickBooks field that exists for all estimates for convenience. Developers often
   * use this field for tracking information that doesn't fit into other standard
   * QuickBooks fields. Unlike `otherCustomField1` and `otherCustomField2`, which are
   * line item fields, this exists at the transaction level. Hidden by default in the
   * QuickBooks UI.
   */
  otherCustomField: string | null;

  /**
   * The customer's Purchase Order (PO) number associated with this estimate. This
   * field is often used to cross-reference the estimate with the customer's
   * purchasing system.
   */
  purchaseOrderNumber: string | null;

  /**
   * The case-sensitive user-defined reference number for this estimate, which can be
   * used to identify the transaction in QuickBooks. This value is not required to be
   * unique and can be arbitrarily changed by the QuickBooks user.
   */
  refNumber: string | null;

  /**
   * The current revision number of this estimate object, which changes each time the
   * object is modified. When updating this object, you must provide the most recent
   * `revisionNumber` to ensure you're working with the latest data; otherwise, the
   * update will return an error.
   */
  revisionNumber: string;

  /**
   * The estimate's sales representative. Sales representatives can be employees,
   * vendors, or other names in QuickBooks.
   */
  salesRepresentative: Estimate.SalesRepresentative | null;

  /**
   * The sales-tax code for this estimate, determining whether it is taxable or
   * non-taxable. This can be overridden at the transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCode: Estimate.SalesTaxCode | null;

  /**
   * The sales-tax item used to calculate the actual tax amount for this estimate's
   * transactions by applying a specific tax rate collected for a single tax agency.
   * Unlike `salesTaxCode`, which only indicates general taxability, this field
   * drives the actual tax calculation and reporting.
   */
  salesTaxItem: Estimate.SalesTaxItem | null;

  /**
   * The sales tax percentage applied to this estimate, represented as a decimal
   * string.
   */
  salesTaxPercentage: string | null;

  /**
   * The total amount of sales tax charged for this estimate, represented as a
   * decimal string.
   */
  salesTaxTotal: string;

  /**
   * The origin location from where the product associated with this estimate is
   * shipped. This is the point at which ownership and liability for goods transfer
   * from seller to buyer. Internally, QuickBooks uses the term "FOB" for this field,
   * which stands for "freight on board". This field is informational and has no
   * accounting implications.
   */
  shipmentOrigin: string | null;

  /**
   * The estimate's shipping address.
   */
  shippingAddress: Estimate.ShippingAddress | null;

  /**
   * The subtotal of this estimate, which is the sum of all estimate lines before
   * taxes and payments are applied, represented as a decimal string.
   */
  subtotal: string;

  /**
   * The estimate's payment terms, defining when payment is due and any applicable
   * discounts.
   */
  terms: Estimate.Terms | null;

  /**
   * The total monetary amount of this estimate, equivalent to the sum of the amounts
   * in `lines` and `lineGroups`, represented as a decimal string.
   */
  totalAmount: string;

  /**
   * The total monetary amount of this estimate converted to the home currency of the
   * QuickBooks company file. Represented as a decimal string.
   */
  totalAmountInHomeCurrency: string | null;

  /**
   * The date of this estimate, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * The date and time when this estimate was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace Estimate {
  /**
   * The estimate's billing address.
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
   * The estimate's class. Classes can be used to categorize objects into meaningful
   * segments, such as department, location, or type of work. In QuickBooks, class
   * tracking is off by default. A class defined here is automatically used in this
   * estimate's line items unless overridden at the line item level.
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
   * The estimate's currency. For built-in currencies, the name and code are standard
   * international values. For user-defined currencies, all values are editable.
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
   * The customer or customer-job associated with this estimate.
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
   * The message to display to the customer on the estimate.
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
   * for this estimate when printed or displayed.
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
     * The unique identifier assigned by QuickBooks to this estimate line group. This
     * ID is unique across all transaction line types.
     */
    id: string;

    /**
     * The custom fields for the estimate line group object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields: Array<LineGroup.CustomField>;

    /**
     * A description of this estimate line group.
     */
    description: string | null;

    /**
     * The estimate line group's item group, representing a predefined set of items
     * bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroup: LineGroup.ItemGroup;

    /**
     * The estimate line group's line items, each representing a single product or
     * service quoted.
     */
    lines: Array<LineGroup.Line>;

    /**
     * The type of object. This value is always `"qbd_estimate_line_group"`.
     */
    objectType: 'qbd_estimate_line_group';

    /**
     * Specifies an alternative unit-of-measure set when updating this estimate line
     * group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSet: LineGroup.OverrideUnitOfMeasureSet | null;

    /**
     * The quantity of the item group associated with this estimate line group. This
     * field cannot be cleared.
     */
    quantity: number | null;

    /**
     * Indicates whether the individual items in this estimate line group and their
     * separate amounts appear on printed forms.
     */
    shouldPrintItemsInGroup: boolean;

    /**
     * The total monetary amount of this estimate line group, equivalent to the sum of
     * the amounts in `lines`, represented as a decimal string.
     */
    totalAmount: string;

    /**
     * The unit-of-measure used for the `quantity` in this estimate line group. Must be
     * a valid unit within the item's available units of measure.
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
     * The estimate line group's item group, representing a predefined set of items
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
       * The unique identifier assigned by QuickBooks to this estimate line. This ID is
       * unique across all transaction line types.
       */
      id: string;

      /**
       * The monetary amount of this estimate line, represented as a decimal string. If
       * both `quantity` and `rate` are specified but not `amount`, QuickBooks will use
       * them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
       * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
       * `1` and the suggested `rate`. This field cannot be cleared.
       */
      amount: string | null;

      /**
       * The estimate line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all estimate lines
       * unless overridden here, at the transaction line level.
       */
      class: Line.Class | null;

      /**
       * The custom fields for the estimate line object, added as user-defined data
       * extensions, not included in the standard QuickBooks object.
       */
      customFields: Array<Line.CustomField>;

      /**
       * A description of this estimate line.
       */
      description: string | null;

      /**
       * The site location where inventory for the item associated with this estimate
       * line is stored.
       */
      inventorySite: Line.InventorySite | null;

      /**
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this estimate line is stored.
       */
      inventorySiteLocation: Line.InventorySiteLocation | null;

      /**
       * The item associated with this estimate line. This can refer to any good or
       * service that the business buys or sells, including item types such as a service
       * item, inventory item, or special calculation item like a discount item or
       * sales-tax item.
       */
      item: Line.Item | null;

      /**
       * The markup that will be passed on to the customer for this item on this estimate
       * line. `amount = (quantity * rate) * (1 + markupRate)`
       */
      markupRate: string | null;

      /**
       * The markup, expressed as a percentage, that will be passed on to the customer
       * for this item on this estimate line.
       * `amount = (quantity * rate) * (1 + markupRatePercent/100)`
       */
      markupRatePercent: string | null;

      /**
       * The type of object. This value is always `"qbd_estimate_line"`.
       */
      objectType: 'qbd_estimate_line';

      /**
       * A built-in custom field for additional information specific to this estimate
       * line. Unlike the user-defined fields in the `customFields` array, this is a
       * standard QuickBooks field that exists for all estimate lines for convenience.
       * Developers often use this field for tracking information that doesn't fit into
       * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
       */
      otherCustomField1: string | null;

      /**
       * A second built-in custom field for additional information specific to this
       * estimate line. Unlike the user-defined fields in the `customFields` array, this
       * is a standard QuickBooks field that exists for all estimate lines for
       * convenience. Like `otherCustomField1`, developers often use this field for
       * tracking information that doesn't fit into other standard QuickBooks fields.
       * Hidden by default in the QuickBooks UI.
       */
      otherCustomField2: string | null;

      /**
       * Specifies an alternative unit-of-measure set when updating this estimate line's
       * `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to select
       * units from a different set than the item's default unit-of-measure set, which
       * remains unchanged on the item itself. The override applies only to this specific
       * line. For example, you can sell an item typically measured in volume units using
       * weight units in a specific transaction by specifying a different unit-of-measure
       * set with this field.
       */
      overrideUnitOfMeasureSet: Line.OverrideUnitOfMeasureSet | null;

      /**
       * The quantity of the item associated with this estimate line. This field cannot
       * be cleared.
       */
      quantity: number | null;

      /**
       * The price per unit for this estimate line. If both `rate` and `amount` are
       * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
       * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
       * decimal string. This field cannot be cleared.
       */
      rate: string | null;

      /**
       * The price of this estimate line expressed as a percentage. Typically used for
       * discount or markup items.
       */
      ratePercent: string | null;

      /**
       * The sales-tax code for this estimate line, determining whether it is taxable or
       * non-taxable. If set, this overrides any sales-tax codes defined on the parent
       * transaction or the associated item.
       *
       * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
       * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
       * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
       * non-taxable code to all sales.
       */
      salesTaxCode: Line.SalesTaxCode | null;

      /**
       * The unit-of-measure used for the `quantity` in this estimate line. Must be a
       * valid unit within the item's available units of measure.
       */
      unitOfMeasure: string | null;
    }

    export namespace Line {
      /**
       * The estimate line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all estimate lines
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
       * The site location where inventory for the item associated with this estimate
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
       * item associated with this estimate line is stored.
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
       * The item associated with this estimate line. This can refer to any good or
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
       * Specifies an alternative unit-of-measure set when updating this estimate line's
       * `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to select
       * units from a different set than the item's default unit-of-measure set, which
       * remains unchanged on the item itself. The override applies only to this specific
       * line. For example, you can sell an item typically measured in volume units using
       * weight units in a specific transaction by specifying a different unit-of-measure
       * set with this field.
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
       * The sales-tax code for this estimate line, determining whether it is taxable or
       * non-taxable. If set, this overrides any sales-tax codes defined on the parent
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
     * Specifies an alternative unit-of-measure set when updating this estimate line
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
     * The unique identifier assigned by QuickBooks to this estimate line. This ID is
     * unique across all transaction line types.
     */
    id: string;

    /**
     * The monetary amount of this estimate line, represented as a decimal string. If
     * both `quantity` and `rate` are specified but not `amount`, QuickBooks will use
     * them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount: string | null;

    /**
     * The estimate line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all estimate lines
     * unless overridden here, at the transaction line level.
     */
    class: Line.Class | null;

    /**
     * The custom fields for the estimate line object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields: Array<Line.CustomField>;

    /**
     * A description of this estimate line.
     */
    description: string | null;

    /**
     * The site location where inventory for the item associated with this estimate
     * line is stored.
     */
    inventorySite: Line.InventorySite | null;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this estimate line is stored.
     */
    inventorySiteLocation: Line.InventorySiteLocation | null;

    /**
     * The item associated with this estimate line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    item: Line.Item | null;

    /**
     * The markup that will be passed on to the customer for this item on this estimate
     * line. `amount = (quantity * rate) * (1 + markupRate)`
     */
    markupRate: string | null;

    /**
     * The markup, expressed as a percentage, that will be passed on to the customer
     * for this item on this estimate line.
     * `amount = (quantity * rate) * (1 + markupRatePercent/100)`
     */
    markupRatePercent: string | null;

    /**
     * The type of object. This value is always `"qbd_estimate_line"`.
     */
    objectType: 'qbd_estimate_line';

    /**
     * A built-in custom field for additional information specific to this estimate
     * line. Unlike the user-defined fields in the `customFields` array, this is a
     * standard QuickBooks field that exists for all estimate lines for convenience.
     * Developers often use this field for tracking information that doesn't fit into
     * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
     */
    otherCustomField1: string | null;

    /**
     * A second built-in custom field for additional information specific to this
     * estimate line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all estimate lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2: string | null;

    /**
     * Specifies an alternative unit-of-measure set when updating this estimate line's
     * `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to select
     * units from a different set than the item's default unit-of-measure set, which
     * remains unchanged on the item itself. The override applies only to this specific
     * line. For example, you can sell an item typically measured in volume units using
     * weight units in a specific transaction by specifying a different unit-of-measure
     * set with this field.
     */
    overrideUnitOfMeasureSet: Line.OverrideUnitOfMeasureSet | null;

    /**
     * The quantity of the item associated with this estimate line. This field cannot
     * be cleared.
     */
    quantity: number | null;

    /**
     * The price per unit for this estimate line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate: string | null;

    /**
     * The price of this estimate line expressed as a percentage. Typically used for
     * discount or markup items.
     */
    ratePercent: string | null;

    /**
     * The sales-tax code for this estimate line, determining whether it is taxable or
     * non-taxable. If set, this overrides any sales-tax codes defined on the parent
     * transaction or the associated item.
     *
     * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
     * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
     * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
     * non-taxable code to all sales.
     */
    salesTaxCode: Line.SalesTaxCode | null;

    /**
     * The unit-of-measure used for the `quantity` in this estimate line. Must be a
     * valid unit within the item's available units of measure.
     */
    unitOfMeasure: string | null;
  }

  export namespace Line {
    /**
     * The estimate line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all estimate lines
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
     * The site location where inventory for the item associated with this estimate
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
     * item associated with this estimate line is stored.
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
     * The item associated with this estimate line. This can refer to any good or
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
     * Specifies an alternative unit-of-measure set when updating this estimate line's
     * `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to select
     * units from a different set than the item's default unit-of-measure set, which
     * remains unchanged on the item itself. The override applies only to this specific
     * line. For example, you can sell an item typically measured in volume units using
     * weight units in a specific transaction by specifying a different unit-of-measure
     * set with this field.
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
     * The sales-tax code for this estimate line, determining whether it is taxable or
     * non-taxable. If set, this overrides any sales-tax codes defined on the parent
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
   * The estimate's sales representative. Sales representatives can be employees,
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
   * The sales-tax code for this estimate, determining whether it is taxable or
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
   * The sales-tax item used to calculate the actual tax amount for this estimate's
   * transactions by applying a specific tax rate collected for a single tax agency.
   * Unlike `salesTaxCode`, which only indicates general taxability, this field
   * drives the actual tax calculation and reporting.
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
   * The estimate's shipping address.
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
   * The estimate's payment terms, defining when payment is due and any applicable
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

export interface EstimateCreateParams {
  /**
   * Body param: The customer or customer-job associated with this estimate.
   */
  customerId: string;

  /**
   * Body param: The date of this estimate, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The estimate's billing address.
   */
  billingAddress?: EstimateCreateParams.BillingAddress;

  /**
   * Body param: The estimate's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this estimate's line items unless overridden at the line
   * item level.
   */
  classId?: string;

  /**
   * Body param: The message to display to the customer on the estimate.
   */
  customerMessageId?: string;

  /**
   * Body param: The predefined template in QuickBooks that determines the layout and
   * formatting for this estimate when printed or displayed.
   */
  documentTemplateId?: string;

  /**
   * Body param: The date by which this estimate must be paid, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  dueDate?: string;

  /**
   * Body param: The market exchange rate between this estimate's currency and the
   * home currency in QuickBooks at the time of this transaction. Represented as a
   * decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home currency).
   */
  exchangeRate?: number;

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
   * Body param: Indicates whether this estimate is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: Indicates whether this estimate is included in the queue of
   * documents for QuickBooks to email to the customer.
   */
  isQueuedForEmail?: boolean;

  /**
   * Body param: The estimate's line item groups, each representing a predefined set
   * of related items.
   *
   * **IMPORTANT**: You must specify `lines`, `lineGroups`, or both when creating an
   * estimate.
   */
  lineGroups?: Array<EstimateCreateParams.LineGroup>;

  /**
   * Body param: The estimate's line items, each representing a single product or
   * service quoted.
   *
   * **IMPORTANT**: You must specify `lines`, `lineGroups`, or both when creating an
   * estimate.
   */
  lines?: Array<EstimateCreateParams.Line>;

  /**
   * Body param: A memo or note for this estimate that appears in reports, but not on
   * the estimate. Use `customerMessage` to add a note to this estimate.
   */
  memo?: string;

  /**
   * Body param: A built-in custom field for additional information specific to this
   * estimate. Unlike the user-defined fields in the `customFields` array, this is a
   * standard QuickBooks field that exists for all estimates for convenience.
   * Developers often use this field for tracking information that doesn't fit into
   * other standard QuickBooks fields. Unlike `otherCustomField1` and
   * `otherCustomField2`, which are line item fields, this exists at the transaction
   * level. Hidden by default in the QuickBooks UI.
   */
  otherCustomField?: string;

  /**
   * Body param: The customer's Purchase Order (PO) number associated with this
   * estimate. This field is often used to cross-reference the estimate with the
   * customer's purchasing system.
   */
  purchaseOrderNumber?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this estimate,
   * which can be used to identify the transaction in QuickBooks. This value is not
   * required to be unique and can be arbitrarily changed by the QuickBooks user.
   */
  refNumber?: string;

  /**
   * Body param: The estimate's sales representative. Sales representatives can be
   * employees, vendors, or other names in QuickBooks.
   */
  salesRepresentativeId?: string;

  /**
   * Body param: The sales-tax code for this estimate, determining whether it is
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
   * estimate's transactions by applying a specific tax rate collected for a single
   * tax agency. Unlike `salesTaxCode`, which only indicates general taxability, this
   * field drives the actual tax calculation and reporting.
   */
  salesTaxItemId?: string;

  /**
   * Body param: The origin location from where the product associated with this
   * estimate is shipped. This is the point at which ownership and liability for
   * goods transfer from seller to buyer. Internally, QuickBooks uses the term "FOB"
   * for this field, which stands for "freight on board". This field is informational
   * and has no accounting implications.
   */
  shipmentOrigin?: string;

  /**
   * Body param: The estimate's shipping address.
   */
  shippingAddress?: EstimateCreateParams.ShippingAddress;

  /**
   * Body param: The estimate's payment terms, defining when payment is due and any
   * applicable discounts.
   */
  termsId?: string;
}

export namespace EstimateCreateParams {
  /**
   * The estimate's billing address.
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
     * The estimate line group's item group, representing a predefined set of items
     * bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroupId: string;

    /**
     * The custom fields for the estimate line group object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields?: Array<LineGroup.CustomField>;

    /**
     * The site location where inventory for the item group associated with this
     * estimate line group is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item group associated with this estimate line group is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The quantity of the item group associated with this estimate line group. This
     * field cannot be cleared.
     */
    quantity?: number;

    /**
     * The unit-of-measure used for the `quantity` in this estimate line group. Must be
     * a valid unit within the item's available units of measure.
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
     * The monetary amount of this estimate line, represented as a decimal string. If
     * both `quantity` and `rate` are specified but not `amount`, QuickBooks will use
     * them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount?: string;

    /**
     * The estimate line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all estimate lines
     * unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * The custom fields for the estimate line object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields?: Array<Line.CustomField>;

    /**
     * A description of this estimate line.
     */
    description?: string;

    /**
     * The site location where inventory for the item associated with this estimate
     * line is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this estimate line is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The item associated with this estimate line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    itemId?: string;

    /**
     * The markup that will be passed on to the customer for this item on this estimate
     * line. `amount = (quantity * rate) * (1 + markupRate)`
     */
    markupRate?: string;

    /**
     * The markup, expressed as a percentage, that will be passed on to the customer
     * for this item on this estimate line.
     * `amount = (quantity * rate) * (1 + markupRatePercent/100)`
     */
    markupRatePercent?: string;

    /**
     * A built-in custom field for additional information specific to this estimate
     * line. Unlike the user-defined fields in the `customFields` array, this is a
     * standard QuickBooks field that exists for all estimate lines for convenience.
     * Developers often use this field for tracking information that doesn't fit into
     * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
     */
    otherCustomField1?: string;

    /**
     * A second built-in custom field for additional information specific to this
     * estimate line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all estimate lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2?: string;

    /**
     * The account to use for this estimate line, overriding the default account
     * associated with the item.
     */
    overrideItemAccountId?: string;

    /**
     * The price level applied to this estimate line. This overrides any price level
     * set on the corresponding customer. The resulting estimate line will not show
     * this price level, only the final `rate` calculated from it.
     */
    priceLevelId?: string;

    /**
     * Specifies how to resolve price rule conflicts when adding or modifying this
     * estimate line.
     */
    priceRuleConflictStrategy?: 'base_price' | 'zero';

    /**
     * The quantity of the item associated with this estimate line. This field cannot
     * be cleared.
     */
    quantity?: number;

    /**
     * The price per unit for this estimate line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate?: string;

    /**
     * The price of this estimate line expressed as a percentage. Typically used for
     * discount or markup items.
     */
    ratePercent?: string;

    /**
     * The sales-tax code for this estimate line, determining whether it is taxable or
     * non-taxable. If set, this overrides any sales-tax codes defined on the parent
     * transaction or the associated item.
     *
     * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
     * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
     * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
     * non-taxable code to all sales.
     */
    salesTaxCodeId?: string;

    /**
     * The unit-of-measure used for the `quantity` in this estimate line. Must be a
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
   * The estimate's shipping address.
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

export interface EstimateRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface EstimateUpdateParams {
  /**
   * Body param: The current revision number of the estimate object you are updating,
   * which you can get by fetching the object first. Provide the most recent
   * `revisionNumber` to ensure you're working with the latest data; otherwise, the
   * update will return an error.
   */
  revisionNumber: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The estimate's billing address.
   */
  billingAddress?: EstimateUpdateParams.BillingAddress;

  /**
   * Body param: The estimate's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this estimate's line items unless overridden at the line
   * item level.
   */
  classId?: string;

  /**
   * Body param: When `true`, creates a “change order” that appears in this
   * estimate's description field in QuickBooks's estimate form, specifying exactly
   * what changed in this update request, the dollar amount of each change, and the
   * net dollar change to this estimate.
   */
  createChangeOrder?: boolean;

  /**
   * Body param: The customer or customer-job associated with this estimate.
   */
  customerId?: string;

  /**
   * Body param: The message to display to the customer on the estimate.
   */
  customerMessageId?: string;

  /**
   * Body param: The predefined template in QuickBooks that determines the layout and
   * formatting for this estimate when printed or displayed.
   */
  documentTemplateId?: string;

  /**
   * Body param: The date by which this estimate must be paid, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  dueDate?: string;

  /**
   * Body param: The market exchange rate between this estimate's currency and the
   * home currency in QuickBooks at the time of this transaction. Represented as a
   * decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home currency).
   */
  exchangeRate?: number;

  /**
   * Body param: Indicates whether this estimate is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: Indicates whether this estimate is included in the queue of
   * documents for QuickBooks to email to the customer.
   */
  isQueuedForEmail?: boolean;

  /**
   * Body param: The estimate's line item groups, each representing a predefined set
   * of related items.
   *
   * **IMPORTANT**:
   *
   * 1. Including this array in your update request will **REPLACE** all existing
   *    line item groups for the estimate with this array. To keep any existing line
   *    item groups, you must include them in this array even if they have not
   *    changed. **Any line item groups not included will be removed.**
   *
   * 2. To add a new line item group, include it here with the `id` field set to
   *    `-1`.
   *
   * 3. If you do not wish to modify any line item groups, omit this field entirely
   *    to keep them unchanged.
   */
  lineGroups?: Array<EstimateUpdateParams.LineGroup>;

  /**
   * Body param: The estimate's line items, each representing a single product or
   * service quoted.
   *
   * **IMPORTANT**:
   *
   * 1. Including this array in your update request will **REPLACE** all existing
   *    line items for the estimate with this array. To keep any existing line items,
   *    you must include them in this array even if they have not changed. **Any line
   *    items not included will be removed.**
   *
   * 2. To add a new line item, include it here with the `id` field set to `-1`.
   *
   * 3. If you do not wish to modify any line items, omit this field entirely to keep
   *    them unchanged.
   */
  lines?: Array<EstimateUpdateParams.Line>;

  /**
   * Body param: A memo or note for this estimate that appears in reports, but not on
   * the estimate. Use `customerMessage` to add a note to this estimate.
   */
  memo?: string;

  /**
   * Body param: A built-in custom field for additional information specific to this
   * estimate. Unlike the user-defined fields in the `customFields` array, this is a
   * standard QuickBooks field that exists for all estimates for convenience.
   * Developers often use this field for tracking information that doesn't fit into
   * other standard QuickBooks fields. Unlike `otherCustomField1` and
   * `otherCustomField2`, which are line item fields, this exists at the transaction
   * level. Hidden by default in the QuickBooks UI.
   */
  otherCustomField?: string;

  /**
   * Body param: The customer's Purchase Order (PO) number associated with this
   * estimate. This field is often used to cross-reference the estimate with the
   * customer's purchasing system.
   */
  purchaseOrderNumber?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this estimate,
   * which can be used to identify the transaction in QuickBooks. This value is not
   * required to be unique and can be arbitrarily changed by the QuickBooks user.
   */
  refNumber?: string;

  /**
   * Body param: The estimate's sales representative. Sales representatives can be
   * employees, vendors, or other names in QuickBooks.
   */
  salesRepresentativeId?: string;

  /**
   * Body param: The sales-tax code for this estimate, determining whether it is
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
   * estimate's transactions by applying a specific tax rate collected for a single
   * tax agency. Unlike `salesTaxCode`, which only indicates general taxability, this
   * field drives the actual tax calculation and reporting.
   */
  salesTaxItemId?: string;

  /**
   * Body param: The origin location from where the product associated with this
   * estimate is shipped. This is the point at which ownership and liability for
   * goods transfer from seller to buyer. Internally, QuickBooks uses the term "FOB"
   * for this field, which stands for "freight on board". This field is informational
   * and has no accounting implications.
   */
  shipmentOrigin?: string;

  /**
   * Body param: The estimate's shipping address.
   */
  shippingAddress?: EstimateUpdateParams.ShippingAddress;

  /**
   * Body param: The estimate's payment terms, defining when payment is due and any
   * applicable discounts.
   */
  termsId?: string;

  /**
   * Body param: The date of this estimate, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate?: string;
}

export namespace EstimateUpdateParams {
  /**
   * The estimate's billing address.
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
     * The QuickBooks-assigned unique identifier of an existing estimate line group you
     * wish to retain or update.
     *
     * **IMPORTANT**: Set this field to `-1` for new estimate line groups you wish to
     * add.
     */
    id: string;

    /**
     * The estimate line group's item group, representing a predefined set of items
     * bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroupId?: string;

    /**
     * The estimate line group's line items, each representing a single product or
     * service quoted.
     *
     * **IMPORTANT**:
     *
     * 1. Including this array in your update request will **REPLACE** all existing
     *    line items for the estimate line group with this array. To keep any existing
     *    line items, you must include them in this array even if they have not
     *    changed. **Any line items not included will be removed.**
     *
     * 2. To add a new line item, include it here with the `id` field set to `-1`.
     *
     * 3. If you do not wish to modify any line items, omit this field entirely to keep
     *    them unchanged.
     */
    lines?: Array<LineGroup.Line>;

    /**
     * Specifies an alternative unit-of-measure set when updating this estimate line
     * group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSetId?: string;

    /**
     * The quantity of the item group associated with this estimate line group. This
     * field cannot be cleared.
     */
    quantity?: number;

    /**
     * The unit-of-measure used for the `quantity` in this estimate line group. Must be
     * a valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  export namespace LineGroup {
    export interface Line {
      /**
       * The QuickBooks-assigned unique identifier of an existing estimate line you wish
       * to retain or update.
       *
       * **IMPORTANT**: Set this field to `-1` for new estimate lines you wish to add.
       */
      id: string;

      /**
       * The monetary amount of this estimate line, represented as a decimal string. If
       * both `quantity` and `rate` are specified but not `amount`, QuickBooks will use
       * them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
       * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
       * `1` and the suggested `rate`. This field cannot be cleared.
       */
      amount?: string;

      /**
       * The estimate line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all estimate lines
       * unless overridden here, at the transaction line level.
       */
      classId?: string;

      /**
       * A description of this estimate line.
       */
      description?: string;

      /**
       * The site location where inventory for the item associated with this estimate
       * line is stored.
       */
      inventorySiteId?: string;

      /**
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this estimate line is stored.
       */
      inventorySiteLocationId?: string;

      /**
       * The item associated with this estimate line. This can refer to any good or
       * service that the business buys or sells, including item types such as a service
       * item, inventory item, or special calculation item like a discount item or
       * sales-tax item.
       */
      itemId?: string;

      /**
       * The markup that will be passed on to the customer for this item on this estimate
       * line. `amount = (quantity * rate) * (1 + markupRate)`
       */
      markupRate?: string;

      /**
       * The markup, expressed as a percentage, that will be passed on to the customer
       * for this item on this estimate line.
       * `amount = (quantity * rate) * (1 + markupRatePercent/100)`
       */
      markupRatePercent?: string;

      /**
       * A built-in custom field for additional information specific to this estimate
       * line. Unlike the user-defined fields in the `customFields` array, this is a
       * standard QuickBooks field that exists for all estimate lines for convenience.
       * Developers often use this field for tracking information that doesn't fit into
       * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
       */
      otherCustomField1?: string;

      /**
       * A second built-in custom field for additional information specific to this
       * estimate line. Unlike the user-defined fields in the `customFields` array, this
       * is a standard QuickBooks field that exists for all estimate lines for
       * convenience. Like `otherCustomField1`, developers often use this field for
       * tracking information that doesn't fit into other standard QuickBooks fields.
       * Hidden by default in the QuickBooks UI.
       */
      otherCustomField2?: string;

      /**
       * Specifies an alternative unit-of-measure set when updating this estimate line's
       * `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to select
       * units from a different set than the item's default unit-of-measure set, which
       * remains unchanged on the item itself. The override applies only to this specific
       * line. For example, you can sell an item typically measured in volume units using
       * weight units in a specific transaction by specifying a different unit-of-measure
       * set with this field.
       */
      overrideUnitOfMeasureSetId?: string;

      /**
       * The price level applied to this estimate line. This overrides any price level
       * set on the corresponding customer. The resulting estimate line will not show
       * this price level, only the final `rate` calculated from it.
       */
      priceLevelId?: string;

      /**
       * Specifies how to resolve price rule conflicts when adding or modifying this
       * estimate line.
       */
      priceRuleConflictStrategy?: 'base_price' | 'zero';

      /**
       * The quantity of the item associated with this estimate line. This field cannot
       * be cleared.
       */
      quantity?: number;

      /**
       * The price per unit for this estimate line. If both `rate` and `amount` are
       * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
       * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
       * decimal string. This field cannot be cleared.
       */
      rate?: string;

      /**
       * The price of this estimate line expressed as a percentage. Typically used for
       * discount or markup items.
       */
      ratePercent?: string;

      /**
       * The sales-tax code for this estimate line, determining whether it is taxable or
       * non-taxable. If set, this overrides any sales-tax codes defined on the parent
       * transaction or the associated item.
       *
       * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
       * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
       * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
       * non-taxable code to all sales.
       */
      salesTaxCodeId?: string;

      /**
       * The unit-of-measure used for the `quantity` in this estimate line. Must be a
       * valid unit within the item's available units of measure.
       */
      unitOfMeasure?: string;
    }
  }

  export interface Line {
    /**
     * The QuickBooks-assigned unique identifier of an existing estimate line you wish
     * to retain or update.
     *
     * **IMPORTANT**: Set this field to `-1` for new estimate lines you wish to add.
     */
    id: string;

    /**
     * The monetary amount of this estimate line, represented as a decimal string. If
     * both `quantity` and `rate` are specified but not `amount`, QuickBooks will use
     * them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount?: string;

    /**
     * The estimate line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all estimate lines
     * unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * A description of this estimate line.
     */
    description?: string;

    /**
     * The site location where inventory for the item associated with this estimate
     * line is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this estimate line is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The item associated with this estimate line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    itemId?: string;

    /**
     * The markup that will be passed on to the customer for this item on this estimate
     * line. `amount = (quantity * rate) * (1 + markupRate)`
     */
    markupRate?: string;

    /**
     * The markup, expressed as a percentage, that will be passed on to the customer
     * for this item on this estimate line.
     * `amount = (quantity * rate) * (1 + markupRatePercent/100)`
     */
    markupRatePercent?: string;

    /**
     * A built-in custom field for additional information specific to this estimate
     * line. Unlike the user-defined fields in the `customFields` array, this is a
     * standard QuickBooks field that exists for all estimate lines for convenience.
     * Developers often use this field for tracking information that doesn't fit into
     * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
     */
    otherCustomField1?: string;

    /**
     * A second built-in custom field for additional information specific to this
     * estimate line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all estimate lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2?: string;

    /**
     * Specifies an alternative unit-of-measure set when updating this estimate line's
     * `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to select
     * units from a different set than the item's default unit-of-measure set, which
     * remains unchanged on the item itself. The override applies only to this specific
     * line. For example, you can sell an item typically measured in volume units using
     * weight units in a specific transaction by specifying a different unit-of-measure
     * set with this field.
     */
    overrideUnitOfMeasureSetId?: string;

    /**
     * The price level applied to this estimate line. This overrides any price level
     * set on the corresponding customer. The resulting estimate line will not show
     * this price level, only the final `rate` calculated from it.
     */
    priceLevelId?: string;

    /**
     * Specifies how to resolve price rule conflicts when adding or modifying this
     * estimate line.
     */
    priceRuleConflictStrategy?: 'base_price' | 'zero';

    /**
     * The quantity of the item associated with this estimate line. This field cannot
     * be cleared.
     */
    quantity?: number;

    /**
     * The price per unit for this estimate line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate?: string;

    /**
     * The price of this estimate line expressed as a percentage. Typically used for
     * discount or markup items.
     */
    ratePercent?: string;

    /**
     * The sales-tax code for this estimate line, determining whether it is taxable or
     * non-taxable. If set, this overrides any sales-tax codes defined on the parent
     * transaction or the associated item.
     *
     * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
     * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
     * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
     * non-taxable code to all sales.
     */
    salesTaxCodeId?: string;

    /**
     * The unit-of-measure used for the `quantity` in this estimate line. Must be a
     * valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  /**
   * The estimate's shipping address.
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

export interface EstimateListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for estimates associated with these accounts.
   */
  accountIds?: Array<string>;

  /**
   * Query param: Filter for estimates in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for estimates created for these customers.
   */
  customerIds?: Array<string>;

  /**
   * Query param: Filter for specific estimates by their QuickBooks-assigned unique
   * identifier(s).
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
   * `false`. For example, a payment linked to the corresponding estimate.
   */
  includeLinkedTransactions?: boolean;

  /**
   * Query param: Filter for estimates whose `refNumber` contains this substring.
   * NOTE: If you use this parameter, you cannot also use `refNumberStartsWith` or
   * `refNumberEndsWith`.
   */
  refNumberContains?: string;

  /**
   * Query param: Filter for estimates whose `refNumber` ends with this substring.
   * NOTE: If you use this parameter, you cannot also use `refNumberContains` or
   * `refNumberStartsWith`.
   */
  refNumberEndsWith?: string;

  /**
   * Query param: Filter for estimates whose `refNumber` is greater than or equal to
   * this value. If omitted, the range will begin with the first number of the list.
   * Uses a numerical comparison for values that contain only digits; otherwise, uses
   * a lexicographical comparison.
   */
  refNumberFrom?: string;

  /**
   * Query param: Filter for specific estimates by their ref-number(s),
   * case-sensitive. In QuickBooks, ref-numbers are not required to be unique and can
   * be arbitrarily changed by the QuickBooks user.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  refNumbers?: Array<string>;

  /**
   * Query param: Filter for estimates whose `refNumber` starts with this substring.
   * NOTE: If you use this parameter, you cannot also use `refNumberContains` or
   * `refNumberEndsWith`.
   */
  refNumberStartsWith?: string;

  /**
   * Query param: Filter for estimates whose `refNumber` is less than or equal to
   * this value. If omitted, the range will end with the last number of the list.
   * Uses a numerical comparison for values that contain only digits; otherwise, uses
   * a lexicographical comparison.
   */
  refNumberTo?: string;

  /**
   * Query param: Filter for estimates created on or after this date, in ISO 8601
   * format (YYYY-MM-DD).
   */
  transactionDateFrom?: string;

  /**
   * Query param: Filter for estimates created on or before this date, in ISO 8601
   * format (YYYY-MM-DD).
   */
  transactionDateTo?: string;

  /**
   * Query param: Filter for estimates updated on or after this date and time, in ISO
   * 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD), the
   * time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for estimates updated on or before this date and time, in
   * ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD),
   * the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

Estimates.EstimatesCursorPage = EstimatesCursorPage;

export declare namespace Estimates {
  export {
    type Estimate as Estimate,
    EstimatesCursorPage as EstimatesCursorPage,
    type EstimateCreateParams as EstimateCreateParams,
    type EstimateRetrieveParams as EstimateRetrieveParams,
    type EstimateUpdateParams as EstimateUpdateParams,
    type EstimateListParams as EstimateListParams,
  };
}
