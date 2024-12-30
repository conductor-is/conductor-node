// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class Invoices extends APIResource {
  /**
   * Creates a new invoice.
   */
  create(params: InvoiceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Invoice> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/invoices', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves an invoice by ID.
   */
  retrieve(
    id: string,
    params: InvoiceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Invoice> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/invoices/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing invoice.
   */
  update(id: string, params: InvoiceUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Invoice> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/invoices/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of invoices. Use the `cursor` parameter to paginate through the
   * results.
   */
  list(
    params: InvoiceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoicesCursorPage, Invoice> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/invoices', InvoicesCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class InvoicesCursorPage extends CursorPage<Invoice> {}

export interface Invoice {
  /**
   * The unique identifier assigned by QuickBooks to this invoice. This ID is unique
   * across all transaction types.
   */
  id: string;

  /**
   * The amount of credit applied to this invoice. This could include customer
   * deposits, payments, or credits. Represented as a decimal string.
   */
  appliedAmount: string | null;

  /**
   * The outstanding balance of this invoice after applying any credits or payments.
   * Calculated as `subtotal` + `salesTaxTotal` - `appliedAmount`. Represented as a
   * decimal string.
   */
  balanceRemaining: string | null;

  /**
   * The outstanding balance of this invoice converted to the home currency of the
   * QuickBooks company file. Represented as a decimal string.
   */
  balanceRemainingInHomeCurrency: string | null;

  /**
   * The invoice's billing address.
   */
  billingAddress: Invoice.BillingAddress | null;

  /**
   * The invoice's class. Classes can be used to categorize objects into meaningful
   * segments, such as department, location, or type of work. In QuickBooks, class
   * tracking is off by default. A class defined here is automatically used in this
   * invoice's line items unless overridden at the line item level.
   */
  class: Invoice.Class | null;

  /**
   * The date and time when this invoice was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The invoice's currency. For built-in currencies, the name and code are standard
   * international values. For user-defined currencies, all values are editable.
   */
  currency: Invoice.Currency | null;

  /**
   * The customer or customer-job associated with this invoice.
   */
  customer: Invoice.Customer;

  /**
   * The message to display to the customer on the invoice.
   */
  customerMessage: Invoice.CustomerMessage | null;

  /**
   * The custom fields for the invoice object, added as user-defined data extensions,
   * not included in the standard QuickBooks object.
   */
  customFields: Array<Invoice.CustomField>;

  /**
   * The predefined template in QuickBooks that determines the layout and formatting
   * for this invoice when printed or displayed.
   */
  documentTemplate: Invoice.DocumentTemplate | null;

  /**
   * The date by which this invoice must be paid, in ISO 8601 format (YYYY-MM-DD).
   */
  dueDate: string | null;

  /**
   * The market exchange rate between this invoice's currency and the home currency
   * in QuickBooks at the time of this transaction. Represented as a decimal value
   * (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home currency).
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
   * Whether this invoice includes a finance charge. This field is immutable and can
   * only be set during invoice creation.
   */
  isFinanceCharge: boolean | null;

  /**
   * Indicates whether this invoice has been paid in full. When `true`, `openAmount`
   * will be 0.
   */
  isPaid: boolean | null;

  /**
   * Indicates whether this invoice has not been completed or is in a draft version.
   */
  isPending: boolean | null;

  /**
   * Indicates whether this invoice is included in the queue of documents for
   * QuickBooks to email to the customer.
   */
  isQueuedForEmail: boolean | null;

  /**
   * Indicates whether this invoice is included in the queue of documents for
   * QuickBooks to print.
   */
  isQueuedForPrint: boolean | null;

  /**
   * The invoice's line item groups, each representing a predefined set of related
   * items.
   */
  lineGroups: Array<Invoice.LineGroup>;

  /**
   * The invoice's line items, each representing a single product or service sold.
   */
  lines: Array<Invoice.Line>;

  /**
   * The invoice's linked transactions, such as payments applied, credits used, or
   * associated purchase orders.
   *
   * **IMPORTANT**: You must specify the parameter `includeLinkedTransactions` when
   * fetching a list of invoices to receive this field because it is not returned by
   * default.
   */
  linkedTransactions: Array<Invoice.LinkedTransaction>;

  /**
   * A memo or note for this invoice that appears in reports, but not on the invoice.
   * Use `customerMessage` to add a note to this invoice.
   */
  memo: string | null;

  /**
   * The type of object. This value is always `"qbd_invoice"`.
   */
  objectType: 'qbd_invoice';

  /**
   * A built-in custom field for additional information specific to this invoice.
   * Unlike the user-defined fields in the `customFields` array, this is a standard
   * QuickBooks field that exists for all invoices for convenience. Developers often
   * use this field for tracking information that doesn't fit into other standard
   * QuickBooks fields. Unlike `otherCustomField1` and `otherCustomField2`, which are
   * line item fields, this exists at the transaction level. Hidden by default in the
   * QuickBooks UI.
   */
  otherCustomField: string | null;

  /**
   * The customer's Purchase Order (PO) number associated with this invoice. This
   * field is often used to cross-reference the invoice with the customer's
   * purchasing system.
   */
  purchaseOrderNumber: string | null;

  /**
   * The Accounts-Receivable (A/R) account to which this invoice is assigned, used to
   * track the amount owed. If not specified, QuickBooks Desktop will use its default
   * A/R account.
   *
   * **IMPORTANT**: If this invoice is linked to other transactions, this A/R account
   * must match the `receivablesAccount` used in all linked transactions. For
   * example, when refunding a credit card payment, the A/R account must match the
   * one used in the original credit transactions being refunded.
   */
  receivablesAccount: Invoice.ReceivablesAccount | null;

  /**
   * The case-sensitive user-defined reference number for this invoice, which can be
   * used to identify the transaction in QuickBooks. This value is not required to be
   * unique and can be arbitrarily changed by the QuickBooks user.
   */
  refNumber: string | null;

  /**
   * The current revision number of this invoice object, which changes each time the
   * object is modified. When updating this object, you must provide the most recent
   * `revisionNumber` to ensure you're working with the latest data; otherwise, the
   * update will return an error.
   */
  revisionNumber: string;

  /**
   * The invoice's sales representative. Sales representatives can be employees,
   * vendors, or other names in QuickBooks.
   */
  salesRepresentative: Invoice.SalesRepresentative | null;

  /**
   * The sales-tax code for this invoice, determining whether it is taxable or
   * non-taxable. This can be overridden at the transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCode: Invoice.SalesTaxCode | null;

  /**
   * The sales-tax item used to calculate the actual tax amount for this invoice's
   * transactions by applying a specific tax rate collected for a single tax agency.
   * Unlike `salesTaxCode`, which only indicates general taxability, this field
   * drives the actual tax calculation and reporting.
   *
   * For invoices, while using this field to specify a single tax item/group that
   * applies uniformly is recommended, complex tax scenarios may require alternative
   * approaches. In such cases, you can set this field to a 0% tax item
   * (conventionally named "Tax Calculated On Invoice") and handle tax calculations
   * through line items instead. When using line items for taxes, note that only
   * individual tax items (not tax groups) can be used, subtotals can help apply a
   * tax to multiple items but only the first tax line after a subtotal is calculated
   * automatically (subsequent tax lines require manual amounts), and the rate column
   * will always display the actual tax amount rather than the rate percentage.
   */
  salesTaxItem: Invoice.SalesTaxItem | null;

  /**
   * The sales tax percentage applied to this invoice, represented as a decimal
   * string.
   */
  salesTaxPercentage: string | null;

  /**
   * The total amount of sales tax charged for this invoice, represented as a decimal
   * string.
   */
  salesTaxTotal: string;

  /**
   * The origin location from where the product associated with this invoice is
   * shipped. This is the point at which ownership and liability for goods transfer
   * from seller to buyer. Internally, QuickBooks uses the term "FOB" for this field,
   * which stands for "freight on board". This field is informational and has no
   * accounting implications.
   */
  shipmentOrigin: string | null;

  /**
   * The invoice's shipping address.
   */
  shippingAddress: Invoice.ShippingAddress | null;

  /**
   * The date when the products or services for this invoice were shipped or are
   * expected to be shipped, in ISO 8601 format (YYYY-MM-DD).
   */
  shippingDate: string | null;

  /**
   * The shipping method used for this invoice, such as standard mail or overnight
   * delivery.
   */
  shippingMethod: Invoice.ShippingMethod | null;

  /**
   * The subtotal of this invoice, which is the sum of all invoice lines before taxes
   * and payments are applied, represented as a decimal string.
   */
  subtotal: string;

  /**
   * The suggested discount amount for this invoice, represented as a decimal string.
   */
  suggestedDiscountAmount: string | null;

  /**
   * The date when the `suggestedDiscountAmount` for this invoice would apply, in ISO
   * 8601 format (YYYY-MM-DD).
   */
  suggestedDiscountDate: string | null;

  /**
   * The invoice's payment terms, defining when payment is due and any applicable
   * discounts.
   */
  terms: Invoice.Terms | null;

  /**
   * The date of this invoice, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * The date and time when this invoice was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace Invoice {
  /**
   * The invoice's billing address.
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
   * The invoice's class. Classes can be used to categorize objects into meaningful
   * segments, such as department, location, or type of work. In QuickBooks, class
   * tracking is off by default. A class defined here is automatically used in this
   * invoice's line items unless overridden at the line item level.
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
   * The invoice's currency. For built-in currencies, the name and code are standard
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
   * The customer or customer-job associated with this invoice.
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
   * The message to display to the customer on the invoice.
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
   * for this invoice when printed or displayed.
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
     * The unique identifier assigned by QuickBooks to this invoice line group. This ID
     * is unique across all transaction line types.
     */
    id: string;

    /**
     * The custom fields for the invoice line group object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields: Array<LineGroup.CustomField>;

    /**
     * A description of this invoice line group.
     */
    description: string | null;

    /**
     * The invoice line group's item group, representing a predefined set of items
     * bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroup: LineGroup.ItemGroup;

    /**
     * The invoice line group's line items, each representing a single product or
     * service sold.
     */
    lines: Array<LineGroup.Line>;

    /**
     * The type of object. This value is always `"qbd_invoice_line_group"`.
     */
    objectType: 'qbd_invoice_line_group';

    /**
     * Specifies an alternative unit-of-measure set when updating this invoice line
     * group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSet: LineGroup.OverrideUnitOfMeasureSet | null;

    /**
     * The quantity of the item group associated with this invoice line group. This
     * field cannot be cleared.
     */
    quantity: number | null;

    /**
     * Indicates whether the individual items in this invoice line group and their
     * separate amounts appear on printed forms.
     */
    shouldPrintItemsInGroup: boolean;

    /**
     * The total monetary amount of this invoice line group, equivalent to the sum of
     * the amounts in `lines`, represented as a decimal string.
     */
    totalAmount: string;

    /**
     * The unit-of-measure used for the `quantity` in this invoice line group. Must be
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
     * The invoice line group's item group, representing a predefined set of items
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
       * The unique identifier assigned by QuickBooks to this invoice line. This ID is
       * unique across all transaction line types.
       */
      id: string;

      /**
       * The monetary amount of this invoice line, represented as a decimal string. If
       * both `quantity` and `rate` are specified but not `amount`, QuickBooks will use
       * them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
       * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
       * `1` and the suggested `rate`. This field cannot be cleared.
       */
      amount: string | null;

      /**
       * The invoice line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all invoice lines
       * unless overridden here, at the transaction line level.
       */
      class: Line.Class | null;

      /**
       * The custom fields for the invoice line object, added as user-defined data
       * extensions, not included in the standard QuickBooks object.
       */
      customFields: Array<Line.CustomField>;

      /**
       * A description of this invoice line.
       */
      description: string | null;

      /**
       * The expiration date for the serial number or lot number of the item associated
       * with this invoice line, in ISO 8601 format (YYYY-MM-DD). This is particularly
       * relevant for perishable or time-sensitive inventory items. Note that this field
       * is only supported on QuickBooks Desktop 2023 or later.
       */
      expirationDate: string | null;

      /**
       * The site location where inventory for the item associated with this invoice line
       * is stored.
       */
      inventorySite: Line.InventorySite | null;

      /**
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this invoice line is stored.
       */
      inventorySiteLocation: Line.InventorySiteLocation | null;

      /**
       * The item associated with this invoice line. This can refer to any good or
       * service that the business buys or sells, including item types such as a service
       * item, inventory item, or special calculation item like a discount item or
       * sales-tax item.
       */
      item: Line.Item | null;

      /**
       * The lot number of the item associated with this invoice line. Used for tracking
       * groups of inventory items that are purchased or manufactured together.
       */
      lotNumber: string | null;

      /**
       * The type of object. This value is always `"qbd_invoice_line"`.
       */
      objectType: 'qbd_invoice_line';

      /**
       * A built-in custom field for additional information specific to this invoice
       * line. Unlike the user-defined fields in the `customFields` array, this is a
       * standard QuickBooks field that exists for all invoice lines for convenience.
       * Developers often use this field for tracking information that doesn't fit into
       * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
       */
      otherCustomField1: string | null;

      /**
       * A second built-in custom field for additional information specific to this
       * invoice line. Unlike the user-defined fields in the `customFields` array, this
       * is a standard QuickBooks field that exists for all invoice lines for
       * convenience. Like `otherCustomField1`, developers often use this field for
       * tracking information that doesn't fit into other standard QuickBooks fields.
       * Hidden by default in the QuickBooks UI.
       */
      otherCustomField2: string | null;

      /**
       * Specifies an alternative unit-of-measure set when updating this invoice line's
       * `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to select
       * units from a different set than the item's default unit-of-measure set, which
       * remains unchanged on the item itself. The override applies only to this specific
       * line. For example, you can sell an item typically measured in volume units using
       * weight units in a specific transaction by specifying a different unit-of-measure
       * set with this field.
       */
      overrideUnitOfMeasureSet: Line.OverrideUnitOfMeasureSet | null;

      /**
       * The quantity of the item associated with this invoice line. This field cannot be
       * cleared.
       */
      quantity: number | null;

      /**
       * The price per unit for this invoice line. If both `rate` and `amount` are
       * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
       * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
       * decimal string. This field cannot be cleared.
       */
      rate: string | null;

      /**
       * The price of this invoice line expressed as a percentage. Typically used for
       * discount or markup items.
       */
      ratePercent: string | null;

      /**
       * The sales-tax code for this invoice line, determining whether it is taxable or
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
       * The serial number of the item associated with this invoice line. This is used
       * for tracking individual units of serialized inventory items.
       */
      serialNumber: string | null;

      /**
       * The date on which the service for this invoice line was or will be performed, in
       * ISO 8601 format (YYYY-MM-DD). This is particularly relevant for service items.
       */
      serviceDate: string | null;

      /**
       * The unit-of-measure used for the `quantity` in this invoice line. Must be a
       * valid unit within the item's available units of measure.
       */
      unitOfMeasure: string | null;
    }

    export namespace Line {
      /**
       * The invoice line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all invoice lines
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
       * The site location where inventory for the item associated with this invoice line
       * is stored.
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
       * item associated with this invoice line is stored.
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
       * The item associated with this invoice line. This can refer to any good or
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
       * Specifies an alternative unit-of-measure set when updating this invoice line's
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
       * The sales-tax code for this invoice line, determining whether it is taxable or
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
     * Specifies an alternative unit-of-measure set when updating this invoice line
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
     * The unique identifier assigned by QuickBooks to this invoice line. This ID is
     * unique across all transaction line types.
     */
    id: string;

    /**
     * The monetary amount of this invoice line, represented as a decimal string. If
     * both `quantity` and `rate` are specified but not `amount`, QuickBooks will use
     * them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount: string | null;

    /**
     * The invoice line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all invoice lines
     * unless overridden here, at the transaction line level.
     */
    class: Line.Class | null;

    /**
     * The custom fields for the invoice line object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields: Array<Line.CustomField>;

    /**
     * A description of this invoice line.
     */
    description: string | null;

    /**
     * The expiration date for the serial number or lot number of the item associated
     * with this invoice line, in ISO 8601 format (YYYY-MM-DD). This is particularly
     * relevant for perishable or time-sensitive inventory items. Note that this field
     * is only supported on QuickBooks Desktop 2023 or later.
     */
    expirationDate: string | null;

    /**
     * The site location where inventory for the item associated with this invoice line
     * is stored.
     */
    inventorySite: Line.InventorySite | null;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this invoice line is stored.
     */
    inventorySiteLocation: Line.InventorySiteLocation | null;

    /**
     * The item associated with this invoice line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    item: Line.Item | null;

    /**
     * The lot number of the item associated with this invoice line. Used for tracking
     * groups of inventory items that are purchased or manufactured together.
     */
    lotNumber: string | null;

    /**
     * The type of object. This value is always `"qbd_invoice_line"`.
     */
    objectType: 'qbd_invoice_line';

    /**
     * A built-in custom field for additional information specific to this invoice
     * line. Unlike the user-defined fields in the `customFields` array, this is a
     * standard QuickBooks field that exists for all invoice lines for convenience.
     * Developers often use this field for tracking information that doesn't fit into
     * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
     */
    otherCustomField1: string | null;

    /**
     * A second built-in custom field for additional information specific to this
     * invoice line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all invoice lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2: string | null;

    /**
     * Specifies an alternative unit-of-measure set when updating this invoice line's
     * `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to select
     * units from a different set than the item's default unit-of-measure set, which
     * remains unchanged on the item itself. The override applies only to this specific
     * line. For example, you can sell an item typically measured in volume units using
     * weight units in a specific transaction by specifying a different unit-of-measure
     * set with this field.
     */
    overrideUnitOfMeasureSet: Line.OverrideUnitOfMeasureSet | null;

    /**
     * The quantity of the item associated with this invoice line. This field cannot be
     * cleared.
     */
    quantity: number | null;

    /**
     * The price per unit for this invoice line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate: string | null;

    /**
     * The price of this invoice line expressed as a percentage. Typically used for
     * discount or markup items.
     */
    ratePercent: string | null;

    /**
     * The sales-tax code for this invoice line, determining whether it is taxable or
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
     * The serial number of the item associated with this invoice line. This is used
     * for tracking individual units of serialized inventory items.
     */
    serialNumber: string | null;

    /**
     * The date on which the service for this invoice line was or will be performed, in
     * ISO 8601 format (YYYY-MM-DD). This is particularly relevant for service items.
     */
    serviceDate: string | null;

    /**
     * The unit-of-measure used for the `quantity` in this invoice line. Must be a
     * valid unit within the item's available units of measure.
     */
    unitOfMeasure: string | null;
  }

  export namespace Line {
    /**
     * The invoice line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all invoice lines
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
     * The site location where inventory for the item associated with this invoice line
     * is stored.
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
     * item associated with this invoice line is stored.
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
     * The item associated with this invoice line. This can refer to any good or
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
     * Specifies an alternative unit-of-measure set when updating this invoice line's
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
     * The sales-tax code for this invoice line, determining whether it is taxable or
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
   * The Accounts-Receivable (A/R) account to which this invoice is assigned, used to
   * track the amount owed. If not specified, QuickBooks Desktop will use its default
   * A/R account.
   *
   * **IMPORTANT**: If this invoice is linked to other transactions, this A/R account
   * must match the `receivablesAccount` used in all linked transactions. For
   * example, when refunding a credit card payment, the A/R account must match the
   * one used in the original credit transactions being refunded.
   */
  export interface ReceivablesAccount {
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
   * The invoice's sales representative. Sales representatives can be employees,
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
   * The sales-tax code for this invoice, determining whether it is taxable or
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
   * The sales-tax item used to calculate the actual tax amount for this invoice's
   * transactions by applying a specific tax rate collected for a single tax agency.
   * Unlike `salesTaxCode`, which only indicates general taxability, this field
   * drives the actual tax calculation and reporting.
   *
   * For invoices, while using this field to specify a single tax item/group that
   * applies uniformly is recommended, complex tax scenarios may require alternative
   * approaches. In such cases, you can set this field to a 0% tax item
   * (conventionally named "Tax Calculated On Invoice") and handle tax calculations
   * through line items instead. When using line items for taxes, note that only
   * individual tax items (not tax groups) can be used, subtotals can help apply a
   * tax to multiple items but only the first tax line after a subtotal is calculated
   * automatically (subsequent tax lines require manual amounts), and the rate column
   * will always display the actual tax amount rather than the rate percentage.
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
   * The invoice's shipping address.
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
   * The shipping method used for this invoice, such as standard mail or overnight
   * delivery.
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
   * The invoice's payment terms, defining when payment is due and any applicable
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

export interface InvoiceCreateParams {
  /**
   * Body param: The customer or customer-job associated with this invoice.
   */
  customerId: string;

  /**
   * Body param: The date of this invoice, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: Credit memos to apply to this invoice, reducing its balance. This
   * creates a link between this invoice and the specified credit memos.
   *
   * **IMPORTANT**: By default, QuickBooks will not return any information about the
   * linked transactions in this endpoint's response even when this request is
   * successful. To see the transactions linked via this field, refetch the invoice
   * and check the `linkedTransactions` response field. If fetching a list of
   * invoices, you must also specify the parameter `includeLinkedTransactions=true`
   * to see the `linkedTransactions` response field.
   */
  applyCredits?: Array<InvoiceCreateParams.ApplyCredit>;

  /**
   * Body param: The invoice's billing address.
   */
  billingAddress?: InvoiceCreateParams.BillingAddress;

  /**
   * Body param: The invoice's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this invoice's line items unless overridden at the line
   * item level.
   */
  classId?: string;

  /**
   * Body param: The message to display to the customer on the invoice.
   */
  customerMessageId?: string;

  /**
   * Body param: The predefined template in QuickBooks that determines the layout and
   * formatting for this invoice when printed or displayed.
   */
  documentTemplateId?: string;

  /**
   * Body param: The date by which this invoice must be paid, in ISO 8601 format
   * (YYYY-MM-DD).
   *
   * **NOTE:** If `dueDate` is excluded when creating this invoice, QuickBooks might
   * determine the due date according to the terms set for this customer.
   */
  dueDate?: string;

  /**
   * Body param: The market exchange rate between this invoice's currency and the
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
   * Body param: Whether this invoice includes a finance charge. This field is
   * immutable and can only be set during invoice creation.
   */
  isFinanceCharge?: boolean;

  /**
   * Body param: Indicates whether this invoice has not been completed or is in a
   * draft version.
   */
  isPending?: boolean;

  /**
   * Body param: Indicates whether this invoice is included in the queue of documents
   * for QuickBooks to email to the customer.
   */
  isQueuedForEmail?: boolean;

  /**
   * Body param: Indicates whether this invoice is included in the queue of documents
   * for QuickBooks to print.
   */
  isQueuedForPrint?: boolean;

  /**
   * Body param: The invoice's line item groups, each representing a predefined set
   * of related items.
   */
  lineGroups?: Array<InvoiceCreateParams.LineGroup>;

  /**
   * Body param: The invoice's line items, each representing a single product or
   * service sold.
   */
  lines?: Array<InvoiceCreateParams.Line>;

  /**
   * Body param: IDs of existing transactions that you wish to link to this invoice,
   * such as payments applied, credits used, or associated purchase orders. Note that
   * this links entire transactions, not individual transaction lines. If you want to
   * link individual lines in a transaction, instead use the field
   * `linkToTransactionLine` on this invoice's lines, if available.
   *
   * Transactions can only be linked when creating this invoice and cannot be
   * unlinked later.
   *
   * You can use both `linkToTransactionIds` (on this invoice) and
   * `linkToTransactionLine` (on its transaction lines) as long as they do NOT link
   * to the same transaction (otherwise, QuickBooks will return an error). QuickBooks
   * will also return an error if you attempt to link a transaction that is empty or
   * already closed.
   *
   * **IMPORTANT**: By default, QuickBooks will not return any information about the
   * linked transactions in this endpoint's response even when this request is
   * successful. To see the transactions linked via this field, refetch the invoice
   * and check the `linkedTransactions` response field. If fetching a list of
   * invoices, you must also specify the parameter `includeLinkedTransactions=true`
   * to see the `linkedTransactions` response field.
   */
  linkToTransactionIds?: Array<string>;

  /**
   * Body param: A memo or note for this invoice that appears in reports, but not on
   * the invoice. Use `customerMessage` to add a note to this invoice.
   */
  memo?: string;

  /**
   * Body param: A built-in custom field for additional information specific to this
   * invoice. Unlike the user-defined fields in the `customFields` array, this is a
   * standard QuickBooks field that exists for all invoices for convenience.
   * Developers often use this field for tracking information that doesn't fit into
   * other standard QuickBooks fields. Unlike `otherCustomField1` and
   * `otherCustomField2`, which are line item fields, this exists at the transaction
   * level. Hidden by default in the QuickBooks UI.
   */
  otherCustomField?: string;

  /**
   * Body param: The customer's Purchase Order (PO) number associated with this
   * invoice. This field is often used to cross-reference the invoice with the
   * customer's purchasing system.
   */
  purchaseOrderNumber?: string;

  /**
   * Body param: The Accounts-Receivable (A/R) account to which this invoice is
   * assigned, used to track the amount owed. If not specified, QuickBooks Desktop
   * will use its default A/R account.
   *
   * **IMPORTANT**: If this invoice is linked to other transactions, this A/R account
   * must match the `receivablesAccount` used in all linked transactions. For
   * example, when refunding a credit card payment, the A/R account must match the
   * one used in the original credit transactions being refunded.
   */
  receivablesAccountId?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this invoice,
   * which can be used to identify the transaction in QuickBooks. This value is not
   * required to be unique and can be arbitrarily changed by the QuickBooks user.
   */
  refNumber?: string;

  /**
   * Body param: The invoice's sales representative. Sales representatives can be
   * employees, vendors, or other names in QuickBooks.
   */
  salesRepresentativeId?: string;

  /**
   * Body param: The sales-tax code for this invoice, determining whether it is
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
   * invoice's transactions by applying a specific tax rate collected for a single
   * tax agency. Unlike `salesTaxCode`, which only indicates general taxability, this
   * field drives the actual tax calculation and reporting.
   *
   * For invoices, while using this field to specify a single tax item/group that
   * applies uniformly is recommended, complex tax scenarios may require alternative
   * approaches. In such cases, you can set this field to a 0% tax item
   * (conventionally named "Tax Calculated On Invoice") and handle tax calculations
   * through line items instead. When using line items for taxes, note that only
   * individual tax items (not tax groups) can be used, subtotals can help apply a
   * tax to multiple items but only the first tax line after a subtotal is calculated
   * automatically (subsequent tax lines require manual amounts), and the rate column
   * will always display the actual tax amount rather than the rate percentage.
   */
  salesTaxItemId?: string;

  /**
   * Body param: The origin location from where the product associated with this
   * invoice is shipped. This is the point at which ownership and liability for goods
   * transfer from seller to buyer. Internally, QuickBooks uses the term "FOB" for
   * this field, which stands for "freight on board". This field is informational and
   * has no accounting implications.
   */
  shipmentOrigin?: string;

  /**
   * Body param: The invoice's shipping address.
   */
  shippingAddress?: InvoiceCreateParams.ShippingAddress;

  /**
   * Body param: The date when the products or services for this invoice were shipped
   * or are expected to be shipped, in ISO 8601 format (YYYY-MM-DD).
   */
  shippingDate?: string;

  /**
   * Body param: The shipping method used for this invoice, such as standard mail or
   * overnight delivery.
   */
  shippingMethodId?: string;

  /**
   * Body param: The invoice's payment terms, defining when payment is due and any
   * applicable discounts.
   */
  termsId?: string;
}

export namespace InvoiceCreateParams {
  export interface ApplyCredit {
    /**
     * The amount of credit applied to this transaction. This could include customer
     * deposits, payments, or credits. Represented as a decimal string.
     */
    appliedAmount: string;

    /**
     * The unique identifier of the credit memo or vendor credit to apply to this
     * transaction.
     */
    creditMemoId: string;

    /**
     * Indicates whether to override the credit.
     */
    overrideCreditApplication?: boolean;
  }

  /**
   * The invoice's billing address.
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
     * The invoice line group's item group, representing a predefined set of items
     * bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroupId: string;

    /**
     * The custom fields for the invoice line group object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields?: Array<LineGroup.CustomField>;

    /**
     * The site location where inventory for the item group associated with this
     * invoice line group is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item group associated with this invoice line group is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The quantity of the item group associated with this invoice line group. This
     * field cannot be cleared.
     */
    quantity?: number;

    /**
     * The unit-of-measure used for the `quantity` in this invoice line group. Must be
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
     * The monetary amount of this invoice line, represented as a decimal string. If
     * both `quantity` and `rate` are specified but not `amount`, QuickBooks will use
     * them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount?: string;

    /**
     * The invoice line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all invoice lines
     * unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * The custom fields for the invoice line object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields?: Array<Line.CustomField>;

    /**
     * A description of this invoice line.
     */
    description?: string;

    /**
     * The site location where inventory for the item associated with this invoice line
     * is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this invoice line is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The item associated with this invoice line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    itemId?: string;

    /**
     * An existing transaction line that you wish to link to this invoice line. Note
     * that this only links to a single transaction line item, not an entire
     * transaction. If you want to link an entire transaction and bring in all its
     * lines, instead use the field `linkToTransactionIds` on the parent transaction,
     * if available. For invoice lines, you can only link to sales orders; QuickBooks
     * does not support linking invoice lines to other transaction types.
     *
     * Transaction lines can only be linked when creating this invoice line and cannot
     * be unlinked later.
     *
     * **IMPORTANT**: If you use `linkToTransactionLine` on this invoice line, you
     * cannot use the field `item` on this line (QuickBooks will return an error)
     * because this field brings in all of the item information you need. You can,
     * however, specify whatever `quantity` or `rate` that you want, or any other
     * transaction line element other than `item`.
     *
     * If the parent transaction supports the `linkToTransactionIds` field, you can use
     * both `linkToTransactionLine` (on this invoice line) and `linkToTransactionIds`
     * (on its parent transaction) in the same request as long as they do NOT link to
     * the same transaction (otherwise, QuickBooks will return an error). QuickBooks
     * will also return an error if you attempt to link a transaction that is empty or
     * already closed.
     *
     * **IMPORTANT**: By default, QuickBooks will not return any information about the
     * linked transaction line in this endpoint's response even when this request is
     * successful. To see the transaction line linked via this field, refetch the
     * parent invoice and check the `linkedTransactions` response field. If fetching a
     * list of invoices, you must also specify the parameter
     * `includeLinkedTransactions=true` to see the `linkedTransactions` response field.
     */
    linkToTransactionLine?: Line.LinkToTransactionLine;

    /**
     * The lot number of the item associated with this invoice line. Used for tracking
     * groups of inventory items that are purchased or manufactured together.
     */
    lotNumber?: string;

    /**
     * A built-in custom field for additional information specific to this invoice
     * line. Unlike the user-defined fields in the `customFields` array, this is a
     * standard QuickBooks field that exists for all invoice lines for convenience.
     * Developers often use this field for tracking information that doesn't fit into
     * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
     */
    otherCustomField1?: string;

    /**
     * A second built-in custom field for additional information specific to this
     * invoice line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all invoice lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2?: string;

    /**
     * The account to use for this invoice line, overriding the default account
     * associated with the item.
     */
    overrideItemAccountId?: string;

    /**
     * The price level applied to this invoice line. This overrides any price level set
     * on the corresponding customer. The resulting invoice line will not show this
     * price level, only the final `rate` calculated from it.
     */
    priceLevelId?: string;

    /**
     * Specifies how to resolve price rule conflicts when adding or modifying this
     * invoice line.
     */
    priceRuleConflictStrategy?: 'base_price' | 'zero';

    /**
     * The quantity of the item associated with this invoice line. This field cannot be
     * cleared.
     */
    quantity?: number;

    /**
     * The price per unit for this invoice line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate?: string;

    /**
     * The price of this invoice line expressed as a percentage. Typically used for
     * discount or markup items.
     */
    ratePercent?: string;

    /**
     * The sales-tax code for this invoice line, determining whether it is taxable or
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
     * The serial number of the item associated with this invoice line. This is used
     * for tracking individual units of serialized inventory items.
     */
    serialNumber?: string;

    /**
     * The date on which the service for this invoice line was or will be performed, in
     * ISO 8601 format (YYYY-MM-DD). This is particularly relevant for service items.
     */
    serviceDate?: string;

    /**
     * The unit-of-measure used for the `quantity` in this invoice line. Must be a
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

    /**
     * An existing transaction line that you wish to link to this invoice line. Note
     * that this only links to a single transaction line item, not an entire
     * transaction. If you want to link an entire transaction and bring in all its
     * lines, instead use the field `linkToTransactionIds` on the parent transaction,
     * if available. For invoice lines, you can only link to sales orders; QuickBooks
     * does not support linking invoice lines to other transaction types.
     *
     * Transaction lines can only be linked when creating this invoice line and cannot
     * be unlinked later.
     *
     * **IMPORTANT**: If you use `linkToTransactionLine` on this invoice line, you
     * cannot use the field `item` on this line (QuickBooks will return an error)
     * because this field brings in all of the item information you need. You can,
     * however, specify whatever `quantity` or `rate` that you want, or any other
     * transaction line element other than `item`.
     *
     * If the parent transaction supports the `linkToTransactionIds` field, you can use
     * both `linkToTransactionLine` (on this invoice line) and `linkToTransactionIds`
     * (on its parent transaction) in the same request as long as they do NOT link to
     * the same transaction (otherwise, QuickBooks will return an error). QuickBooks
     * will also return an error if you attempt to link a transaction that is empty or
     * already closed.
     *
     * **IMPORTANT**: By default, QuickBooks will not return any information about the
     * linked transaction line in this endpoint's response even when this request is
     * successful. To see the transaction line linked via this field, refetch the
     * parent invoice and check the `linkedTransactions` response field. If fetching a
     * list of invoices, you must also specify the parameter
     * `includeLinkedTransactions=true` to see the `linkedTransactions` response field.
     */
    export interface LinkToTransactionLine {
      /**
       * The ID of the transaction to which to link this transaction.
       */
      transactionId: string;

      /**
       * The ID of the transaction line to which to link this transaction.
       */
      transactionLineId: string;
    }
  }

  /**
   * The invoice's shipping address.
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

export interface InvoiceRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface InvoiceUpdateParams {
  /**
   * Body param: The current revision number of the invoice object you are updating,
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
   * Body param: Credit memos to apply to this invoice, reducing its balance. This
   * creates a link between this invoice and the specified credit memos.
   *
   * **IMPORTANT**: By default, QuickBooks will not return any information about the
   * linked transactions in this endpoint's response even when this request is
   * successful. To see the transactions linked via this field, refetch the invoice
   * and check the `linkedTransactions` response field. If fetching a list of
   * invoices, you must also specify the parameter `includeLinkedTransactions=true`
   * to see the `linkedTransactions` response field.
   */
  applyCredits?: Array<InvoiceUpdateParams.ApplyCredit>;

  /**
   * Body param: The invoice's billing address.
   */
  billingAddress?: InvoiceUpdateParams.BillingAddress;

  /**
   * Body param: The invoice's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this invoice's line items unless overridden at the line
   * item level.
   */
  classId?: string;

  /**
   * Body param: The customer or customer-job associated with this invoice.
   */
  customerId?: string;

  /**
   * Body param: The message to display to the customer on the invoice.
   */
  customerMessageId?: string;

  /**
   * Body param: The predefined template in QuickBooks that determines the layout and
   * formatting for this invoice when printed or displayed.
   */
  documentTemplateId?: string;

  /**
   * Body param: The date by which this invoice must be paid, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  dueDate?: string;

  /**
   * Body param: The market exchange rate between this invoice's currency and the
   * home currency in QuickBooks at the time of this transaction. Represented as a
   * decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home currency).
   */
  exchangeRate?: number;

  /**
   * Body param: Indicates whether this invoice has not been completed or is in a
   * draft version.
   */
  isPending?: boolean;

  /**
   * Body param: Indicates whether this invoice is included in the queue of documents
   * for QuickBooks to email to the customer.
   */
  isQueuedForEmail?: boolean;

  /**
   * Body param: Indicates whether this invoice is included in the queue of documents
   * for QuickBooks to print.
   */
  isQueuedForPrint?: boolean;

  /**
   * Body param: The invoice's line item groups, each representing a predefined set
   * of related items.
   *
   * **IMPORTANT**: When updating an invoice's line item groups, this array
   * completely REPLACES all existing line item groups for that invoice. To retain
   * any current line item groups, include them in this array, even if they have not
   * changed. Any line item groups not included will be removed. To add a new line
   * item group, include it with its `id` set to `-1`. If you do not wish to modify
   * the line item groups, you can omit this field entirely to keep them unchanged.
   */
  lineGroups?: Array<InvoiceUpdateParams.LineGroup>;

  /**
   * Body param: The invoice's line items, each representing a single product or
   * service sold.
   *
   * **IMPORTANT**: When updating an invoice's line items, this array completely
   * REPLACES all existing line items for that invoice. To retain any current line
   * items, include them in this array, even if they have not changed. Any line items
   * not included will be removed. To add a new line item, include it with its `id`
   * set to `-1`. If you do not wish to modify the line items, you can omit this
   * field entirely to keep them unchanged.
   */
  lines?: Array<InvoiceUpdateParams.Line>;

  /**
   * Body param: A memo or note for this invoice that appears in reports, but not on
   * the invoice. Use `customerMessage` to add a note to this invoice.
   */
  memo?: string;

  /**
   * Body param: A built-in custom field for additional information specific to this
   * invoice. Unlike the user-defined fields in the `customFields` array, this is a
   * standard QuickBooks field that exists for all invoices for convenience.
   * Developers often use this field for tracking information that doesn't fit into
   * other standard QuickBooks fields. Unlike `otherCustomField1` and
   * `otherCustomField2`, which are line item fields, this exists at the transaction
   * level. Hidden by default in the QuickBooks UI.
   */
  otherCustomField?: string;

  /**
   * Body param: The customer's Purchase Order (PO) number associated with this
   * invoice. This field is often used to cross-reference the invoice with the
   * customer's purchasing system.
   */
  purchaseOrderNumber?: string;

  /**
   * Body param: The Accounts-Receivable (A/R) account to which this invoice is
   * assigned, used to track the amount owed. If not specified, QuickBooks Desktop
   * will use its default A/R account.
   *
   * **IMPORTANT**: If this invoice is linked to other transactions, this A/R account
   * must match the `receivablesAccount` used in all linked transactions. For
   * example, when refunding a credit card payment, the A/R account must match the
   * one used in the original credit transactions being refunded.
   */
  receivablesAccountId?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this invoice,
   * which can be used to identify the transaction in QuickBooks. This value is not
   * required to be unique and can be arbitrarily changed by the QuickBooks user.
   */
  refNumber?: string;

  /**
   * Body param: The invoice's sales representative. Sales representatives can be
   * employees, vendors, or other names in QuickBooks.
   */
  salesRepresentativeId?: string;

  /**
   * Body param: The sales-tax code for this invoice, determining whether it is
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
   * invoice's transactions by applying a specific tax rate collected for a single
   * tax agency. Unlike `salesTaxCode`, which only indicates general taxability, this
   * field drives the actual tax calculation and reporting.
   *
   * For invoices, while using this field to specify a single tax item/group that
   * applies uniformly is recommended, complex tax scenarios may require alternative
   * approaches. In such cases, you can set this field to a 0% tax item
   * (conventionally named "Tax Calculated On Invoice") and handle tax calculations
   * through line items instead. When using line items for taxes, note that only
   * individual tax items (not tax groups) can be used, subtotals can help apply a
   * tax to multiple items but only the first tax line after a subtotal is calculated
   * automatically (subsequent tax lines require manual amounts), and the rate column
   * will always display the actual tax amount rather than the rate percentage.
   */
  salesTaxItemId?: string;

  /**
   * Body param: The origin location from where the product associated with this
   * invoice is shipped. This is the point at which ownership and liability for goods
   * transfer from seller to buyer. Internally, QuickBooks uses the term "FOB" for
   * this field, which stands for "freight on board". This field is informational and
   * has no accounting implications.
   */
  shipmentOrigin?: string;

  /**
   * Body param: The invoice's shipping address.
   */
  shippingAddress?: InvoiceUpdateParams.ShippingAddress;

  /**
   * Body param: The date when the products or services for this invoice were shipped
   * or are expected to be shipped, in ISO 8601 format (YYYY-MM-DD).
   */
  shippingDate?: string;

  /**
   * Body param: The shipping method used for this invoice, such as standard mail or
   * overnight delivery.
   */
  shippingMethodId?: string;

  /**
   * Body param: The invoice's payment terms, defining when payment is due and any
   * applicable discounts.
   */
  termsId?: string;

  /**
   * Body param: The date of this invoice, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate?: string;
}

export namespace InvoiceUpdateParams {
  export interface ApplyCredit {
    /**
     * The amount of credit applied to this transaction. This could include customer
     * deposits, payments, or credits. Represented as a decimal string.
     */
    appliedAmount: string;

    /**
     * The unique identifier of the credit memo or vendor credit to apply to this
     * transaction.
     */
    creditMemoId: string;

    /**
     * Indicates whether to override the credit.
     */
    overrideCreditApplication?: boolean;
  }

  /**
   * The invoice's billing address.
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
     * The QuickBooks-assigned unique identifier of an existing invoice line group you
     * wish to retain or update.
     *
     * **IMPORTANT**: Set this field to `-1` for new invoice line groups you wish to
     * add.
     */
    id: string;

    /**
     * The invoice line group's item group, representing a predefined set of items
     * bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroupId?: string;

    /**
     * The invoice line group's line items, each representing a single product or
     * service sold.
     *
     * **IMPORTANT**: When updating an invoice line group's line items, this array
     * completely REPLACES all existing line items for that invoice line group. To
     * retain any current line items, include them in this array, even if they have not
     * changed. Any line items not included will be removed. To add a new line item,
     * include it with its `id` set to `-1`. If you do not wish to modify the line
     * items, you can omit this field entirely to keep them unchanged.
     */
    lines?: Array<LineGroup.Line>;

    /**
     * Specifies an alternative unit-of-measure set when updating this invoice line
     * group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSetId?: string;

    /**
     * The quantity of the item group associated with this invoice line group. This
     * field cannot be cleared.
     */
    quantity?: number;

    /**
     * The unit-of-measure used for the `quantity` in this invoice line group. Must be
     * a valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  export namespace LineGroup {
    export interface Line {
      /**
       * The QuickBooks-assigned unique identifier of an existing invoice line you wish
       * to retain or update.
       *
       * **IMPORTANT**: Set this field to `-1` for new invoice lines you wish to add.
       */
      id: string;

      /**
       * The monetary amount of this invoice line, represented as a decimal string. If
       * both `quantity` and `rate` are specified but not `amount`, QuickBooks will use
       * them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
       * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
       * `1` and the suggested `rate`. This field cannot be cleared.
       */
      amount?: string;

      /**
       * The invoice line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all invoice lines
       * unless overridden here, at the transaction line level.
       */
      classId?: string;

      /**
       * A description of this invoice line.
       */
      description?: string;

      /**
       * The site location where inventory for the item associated with this invoice line
       * is stored.
       */
      inventorySiteId?: string;

      /**
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this invoice line is stored.
       */
      inventorySiteLocationId?: string;

      /**
       * The item associated with this invoice line. This can refer to any good or
       * service that the business buys or sells, including item types such as a service
       * item, inventory item, or special calculation item like a discount item or
       * sales-tax item.
       */
      itemId?: string;

      /**
       * The lot number of the item associated with this invoice line. Used for tracking
       * groups of inventory items that are purchased or manufactured together.
       */
      lotNumber?: string;

      /**
       * A built-in custom field for additional information specific to this invoice
       * line. Unlike the user-defined fields in the `customFields` array, this is a
       * standard QuickBooks field that exists for all invoice lines for convenience.
       * Developers often use this field for tracking information that doesn't fit into
       * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
       */
      otherCustomField1?: string;

      /**
       * A second built-in custom field for additional information specific to this
       * invoice line. Unlike the user-defined fields in the `customFields` array, this
       * is a standard QuickBooks field that exists for all invoice lines for
       * convenience. Like `otherCustomField1`, developers often use this field for
       * tracking information that doesn't fit into other standard QuickBooks fields.
       * Hidden by default in the QuickBooks UI.
       */
      otherCustomField2?: string;

      /**
       * The account to use for this invoice line, overriding the default account
       * associated with the item.
       */
      overrideItemAccountId?: string;

      /**
       * Specifies an alternative unit-of-measure set when updating this invoice line's
       * `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to select
       * units from a different set than the item's default unit-of-measure set, which
       * remains unchanged on the item itself. The override applies only to this specific
       * line. For example, you can sell an item typically measured in volume units using
       * weight units in a specific transaction by specifying a different unit-of-measure
       * set with this field.
       */
      overrideUnitOfMeasureSetId?: string;

      /**
       * The price level applied to this invoice line. This overrides any price level set
       * on the corresponding customer. The resulting invoice line will not show this
       * price level, only the final `rate` calculated from it.
       */
      priceLevelId?: string;

      /**
       * Specifies how to resolve price rule conflicts when adding or modifying this
       * invoice line.
       */
      priceRuleConflictStrategy?: 'base_price' | 'zero';

      /**
       * The quantity of the item associated with this invoice line. This field cannot be
       * cleared.
       */
      quantity?: number;

      /**
       * The price per unit for this invoice line. If both `rate` and `amount` are
       * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
       * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
       * decimal string. This field cannot be cleared.
       */
      rate?: string;

      /**
       * The price of this invoice line expressed as a percentage. Typically used for
       * discount or markup items.
       */
      ratePercent?: string;

      /**
       * The sales-tax code for this invoice line, determining whether it is taxable or
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
       * The serial number of the item associated with this invoice line. This is used
       * for tracking individual units of serialized inventory items.
       */
      serialNumber?: string;

      /**
       * The date on which the service for this invoice line was or will be performed, in
       * ISO 8601 format (YYYY-MM-DD). This is particularly relevant for service items.
       */
      serviceDate?: string;

      /**
       * The unit-of-measure used for the `quantity` in this invoice line. Must be a
       * valid unit within the item's available units of measure.
       */
      unitOfMeasure?: string;
    }
  }

  export interface Line {
    /**
     * The QuickBooks-assigned unique identifier of an existing invoice line you wish
     * to retain or update.
     *
     * **IMPORTANT**: Set this field to `-1` for new invoice lines you wish to add.
     */
    id: string;

    /**
     * The monetary amount of this invoice line, represented as a decimal string. If
     * both `quantity` and `rate` are specified but not `amount`, QuickBooks will use
     * them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount?: string;

    /**
     * The invoice line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all invoice lines
     * unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * A description of this invoice line.
     */
    description?: string;

    /**
     * The site location where inventory for the item associated with this invoice line
     * is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this invoice line is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The item associated with this invoice line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    itemId?: string;

    /**
     * The lot number of the item associated with this invoice line. Used for tracking
     * groups of inventory items that are purchased or manufactured together.
     */
    lotNumber?: string;

    /**
     * A built-in custom field for additional information specific to this invoice
     * line. Unlike the user-defined fields in the `customFields` array, this is a
     * standard QuickBooks field that exists for all invoice lines for convenience.
     * Developers often use this field for tracking information that doesn't fit into
     * other standard QuickBooks fields. Hidden by default in the QuickBooks UI.
     */
    otherCustomField1?: string;

    /**
     * A second built-in custom field for additional information specific to this
     * invoice line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all invoice lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2?: string;

    /**
     * The account to use for this invoice line, overriding the default account
     * associated with the item.
     */
    overrideItemAccountId?: string;

    /**
     * Specifies an alternative unit-of-measure set when updating this invoice line's
     * `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to select
     * units from a different set than the item's default unit-of-measure set, which
     * remains unchanged on the item itself. The override applies only to this specific
     * line. For example, you can sell an item typically measured in volume units using
     * weight units in a specific transaction by specifying a different unit-of-measure
     * set with this field.
     */
    overrideUnitOfMeasureSetId?: string;

    /**
     * The price level applied to this invoice line. This overrides any price level set
     * on the corresponding customer. The resulting invoice line will not show this
     * price level, only the final `rate` calculated from it.
     */
    priceLevelId?: string;

    /**
     * Specifies how to resolve price rule conflicts when adding or modifying this
     * invoice line.
     */
    priceRuleConflictStrategy?: 'base_price' | 'zero';

    /**
     * The quantity of the item associated with this invoice line. This field cannot be
     * cleared.
     */
    quantity?: number;

    /**
     * The price per unit for this invoice line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate?: string;

    /**
     * The price of this invoice line expressed as a percentage. Typically used for
     * discount or markup items.
     */
    ratePercent?: string;

    /**
     * The sales-tax code for this invoice line, determining whether it is taxable or
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
     * The serial number of the item associated with this invoice line. This is used
     * for tracking individual units of serialized inventory items.
     */
    serialNumber?: string;

    /**
     * The date on which the service for this invoice line was or will be performed, in
     * ISO 8601 format (YYYY-MM-DD). This is particularly relevant for service items.
     */
    serviceDate?: string;

    /**
     * The unit-of-measure used for the `quantity` in this invoice line. Must be a
     * valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  /**
   * The invoice's shipping address.
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

export interface InvoiceListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for invoices associated with these accounts.
   */
  accountIds?: Array<string>;

  /**
   * Query param: Filter for invoices in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for invoices created for these customers.
   */
  customerIds?: Array<string>;

  /**
   * Query param: Filter for specific invoices by their QuickBooks-assigned unique
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
   * `false`. For example, a payment linked to the corresponding invoice.
   */
  includeLinkedTransactions?: boolean;

  /**
   * Query param: Filter for invoices that are paid, not paid, or both.
   */
  paymentStatus?: 'all' | 'paid' | 'not_paid';

  /**
   * Query param: Filter for invoices whose `refNumber` contains this substring.
   * NOTE: If you use this parameter, you cannot also use `refNumberStartsWith` or
   * `refNumberEndsWith`.
   */
  refNumberContains?: string;

  /**
   * Query param: Filter for invoices whose `refNumber` ends with this substring.
   * NOTE: If you use this parameter, you cannot also use `refNumberContains` or
   * `refNumberStartsWith`.
   */
  refNumberEndsWith?: string;

  /**
   * Query param: Filter for invoices whose `refNumber` is greater than or equal to
   * this value. If omitted, the range will begin with the first number of the list.
   * Uses a numerical comparison for values that contain only digits; otherwise, uses
   * a lexicographical comparison.
   */
  refNumberFrom?: string;

  /**
   * Query param: Filter for specific invoices by their ref-number(s),
   * case-sensitive. In QuickBooks, ref-numbers are not required to be unique and can
   * be arbitrarily changed by the QuickBooks user.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  refNumbers?: Array<string>;

  /**
   * Query param: Filter for invoices whose `refNumber` starts with this substring.
   * NOTE: If you use this parameter, you cannot also use `refNumberContains` or
   * `refNumberEndsWith`.
   */
  refNumberStartsWith?: string;

  /**
   * Query param: Filter for invoices whose `refNumber` is less than or equal to this
   * value. If omitted, the range will end with the last number of the list. Uses a
   * numerical comparison for values that contain only digits; otherwise, uses a
   * lexicographical comparison.
   */
  refNumberTo?: string;

  /**
   * Query param: Filter for invoices created on or after this date, in ISO 8601
   * format (YYYY-MM-DD).
   */
  transactionDateFrom?: string;

  /**
   * Query param: Filter for invoices created on or before this date, in ISO 8601
   * format (YYYY-MM-DD).
   */
  transactionDateTo?: string;

  /**
   * Query param: Filter for invoices updated on or after this date and time, in ISO
   * 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD), the
   * time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for invoices updated on or before this date and time, in ISO
   * 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD), the
   * time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

Invoices.InvoicesCursorPage = InvoicesCursorPage;

export declare namespace Invoices {
  export {
    type Invoice as Invoice,
    InvoicesCursorPage as InvoicesCursorPage,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };
}
