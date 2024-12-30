// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class SalesReceipts extends APIResource {
  /**
   * Creates a new sales receipt.
   */
  create(params: SalesReceiptCreateParams, options?: Core.RequestOptions): Core.APIPromise<SalesReceipt> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/sales-receipts', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a sales receipt by ID.
   */
  retrieve(
    id: string,
    params: SalesReceiptRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SalesReceipt> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/sales-receipts/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing sales receipt.
   */
  update(
    id: string,
    params: SalesReceiptUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SalesReceipt> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/sales-receipts/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of sales receipts. Use the `cursor` parameter to paginate through
   * the results.
   */
  list(
    params: SalesReceiptListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SalesReceiptsCursorPage, SalesReceipt> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/sales-receipts', SalesReceiptsCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class SalesReceiptsCursorPage extends CursorPage<SalesReceipt> {}

export interface SalesReceipt {
  /**
   * The unique identifier assigned by QuickBooks to this sales receipt. This ID is
   * unique across all transaction types.
   */
  id: string;

  /**
   * The sales receipt's billing address.
   */
  billingAddress: SalesReceipt.BillingAddress | null;

  /**
   * The check number of a check received for this sales receipt.
   */
  checkNumber: string | null;

  /**
   * The sales receipt's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this sales receipt's line items unless overridden at the
   * line item level.
   */
  class: SalesReceipt.Class | null;

  /**
   * The date and time when this sales receipt was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The credit card transaction data for this sales receipt's payment when using
   * QuickBooks Merchant Services (QBMS).
   */
  creditCardTransaction: SalesReceipt.CreditCardTransaction | null;

  /**
   * The sales receipt's currency. For built-in currencies, the name and code are
   * standard international values. For user-defined currencies, all values are
   * editable.
   */
  currency: SalesReceipt.Currency | null;

  /**
   * The customer or customer-job to which the payment for this sales receipt is
   * credited.
   */
  customer: SalesReceipt.Customer;

  /**
   * The message to display to the customer on the sales receipt.
   */
  customerMessage: SalesReceipt.CustomerMessage | null;

  /**
   * The custom fields for the sales receipt object, added as user-defined data
   * extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<SalesReceipt.CustomField>;

  /**
   * The account where the funds for this sales receipt will be or have been
   * deposited.
   */
  depositToAccount: SalesReceipt.DepositToAccount | null;

  /**
   * The predefined template in QuickBooks that determines the layout and formatting
   * for this sales receipt when printed or displayed.
   */
  documentTemplate: SalesReceipt.DocumentTemplate | null;

  /**
   * The date by which this sales receipt must be paid, in ISO 8601 format
   * (YYYY-MM-DD).
   *
   * **NOTE:** For sales receipts, this field is often `null` because sales receipts
   * are generally used for point-of-sale payments, where full payment is received at
   * the time of purchase.
   */
  dueDate: string | null;

  /**
   * The market exchange rate between this sales receipt's currency and the home
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
   * Indicates whether this sales receipt has not been completed.
   */
  isPending: boolean | null;

  /**
   * Indicates whether this sales receipt is included in the queue of documents for
   * QuickBooks to email to the customer.
   */
  isQueuedForEmail: boolean | null;

  /**
   * Indicates whether this sales receipt is included in the queue of documents for
   * QuickBooks to print.
   */
  isQueuedForPrint: boolean | null;

  /**
   * The sales receipt's line item groups, each representing a predefined set of
   * related items.
   */
  lineGroups: Array<SalesReceipt.LineGroup>;

  /**
   * The sales receipt's line items, each representing a single product or service
   * sold.
   */
  lines: Array<SalesReceipt.Line>;

  /**
   * A memo or note for this sales receipt that appears in reports, but not on the
   * sales receipt.
   */
  memo: string | null;

  /**
   * The type of object. This value is always `"qbd_sales_receipt"`.
   */
  objectType: 'qbd_sales_receipt';

  /**
   * A built-in custom field for additional information specific to this sales
   * receipt. Unlike the user-defined fields in the `customFields` array, this is a
   * standard QuickBooks field that exists for all sales receipts for convenience.
   * Developers often use this field for tracking information that doesn't fit into
   * other standard QuickBooks fields. Unlike `otherCustomField1` and
   * `otherCustomField2`, which are line item fields, this exists at the transaction
   * level. Hidden by default in the QuickBooks UI.
   */
  otherCustomField: string | null;

  /**
   * The sales receipt's payment method (e.g., cash, check, credit card).
   */
  paymentMethod: SalesReceipt.PaymentMethod | null;

  /**
   * The case-sensitive user-defined reference number for this sales receipt, which
   * can be used to identify the transaction in QuickBooks. This value is not
   * required to be unique and can be arbitrarily changed by the QuickBooks user.
   */
  refNumber: string | null;

  /**
   * The current revision number of this sales receipt object, which changes each
   * time the object is modified. When updating this object, you must provide the
   * most recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The sales receipt's sales representative. Sales representatives can be
   * employees, vendors, or other names in QuickBooks.
   */
  salesRepresentative: SalesReceipt.SalesRepresentative | null;

  /**
   * The sales-tax code for this sales receipt, determining whether it is taxable or
   * non-taxable. This can be overridden at the transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCode: SalesReceipt.SalesTaxCode | null;

  /**
   * The sales-tax item used to calculate the actual tax amount for this sales
   * receipt's transactions by applying a specific tax rate collected for a single
   * tax agency. Unlike `salesTaxCode`, which only indicates general taxability, this
   * field drives the actual tax calculation and reporting.
   *
   * For sales receipts, while using this field to specify a single tax item/group
   * that applies uniformly is recommended, complex tax scenarios may require
   * alternative approaches. In such cases, you can set this field to a 0% tax item
   * (conventionally named "Tax Calculated On Invoice") and handle tax calculations
   * through line items instead. When using line items for taxes, note that only
   * individual tax items (not tax groups) can be used, subtotals can help apply a
   * tax to multiple items but only the first tax line after a subtotal is calculated
   * automatically (subsequent tax lines require manual amounts), and the rate column
   * will always display the actual tax amount rather than the rate percentage.
   */
  salesTaxItem: SalesReceipt.SalesTaxItem | null;

  /**
   * The sales tax percentage applied to this sales receipt, represented as a decimal
   * string.
   */
  salesTaxPercentage: string | null;

  /**
   * The total amount of sales tax charged for this sales receipt, represented as a
   * decimal string.
   */
  salesTaxTotal: string;

  /**
   * The origin location from where the product associated with this sales receipt is
   * shipped. This is the point at which ownership and liability for goods transfer
   * from seller to buyer. Internally, QuickBooks uses the term "FOB" for this field,
   * which stands for "freight on board". This field is informational and has no
   * accounting implications.
   */
  shipmentOrigin: string | null;

  /**
   * The sales receipt's shipping address.
   */
  shippingAddress: SalesReceipt.ShippingAddress | null;

  /**
   * The date when the products or services for this sales receipt were shipped or
   * are expected to be shipped, in ISO 8601 format (YYYY-MM-DD).
   */
  shippingDate: string | null;

  /**
   * The shipping method used for this sales receipt, such as standard mail or
   * overnight delivery.
   */
  shippingMethod: SalesReceipt.ShippingMethod | null;

  /**
   * The subtotal of this sales receipt, which is the sum of all sales receipt lines
   * before taxes and payments are applied, represented as a decimal string.
   */
  subtotal: string;

  /**
   * The total monetary amount of this sales receipt, equivalent to the sum of the
   * amounts in `lines` and `lineGroups`, represented as a decimal string.
   */
  totalAmount: string;

  /**
   * The total monetary amount for this sales receipt converted to the home currency
   * of the QuickBooks company file. Represented as a decimal string.
   */
  totalAmountInHomeCurrency: string | null;

  /**
   * The date of this sales receipt, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * The date and time when this sales receipt was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace SalesReceipt {
  /**
   * The sales receipt's billing address.
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
   * The sales receipt's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this sales receipt's line items unless overridden at the
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
   * The credit card transaction data for this sales receipt's payment when using
   * QuickBooks Merchant Services (QBMS).
   */
  export interface CreditCardTransaction {
    /**
     * The transaction request data originally supplied for this credit card
     * transaction when using QuickBooks Merchant Services (QBMS).
     */
    request: CreditCardTransaction.Request | null;

    /**
     * The transaction response data for this credit card transaction when using
     * QuickBooks Merchant Services (QBMS).
     */
    response: CreditCardTransaction.Response | null;
  }

  export namespace CreditCardTransaction {
    /**
     * The transaction request data originally supplied for this credit card
     * transaction when using QuickBooks Merchant Services (QBMS).
     */
    export interface Request {
      /**
       * The card's billing address.
       */
      address: string | null;

      /**
       * The commercial card code identifies the type of business credit card being used
       * (purchase, corporate, or business) for Visa and Mastercard transactions only.
       * When provided, this code may qualify the transaction for lower processing fees
       * compared to the standard rates that apply when no code is specified.
       */
      commercialCardCode: string | null;

      /**
       * The month when the credit card expires.
       */
      expirationMonth: number;

      /**
       * The year when the credit card expires.
       */
      expirationYear: number;

      /**
       * The cardholder's name on the card.
       */
      name: string;

      /**
       * The credit card number. Must be masked with lower case "x" and no dashes.
       */
      number: string;

      /**
       * The card's billing address ZIP or postal code.
       */
      postalCode: string | null;

      /**
       * Indicates whether this credit card transaction came from a card swipe
       * (`card_present`) or not (`card_not_present`).
       */
      transactionMode: 'card_not_present' | 'card_present' | null;

      /**
       * The QBMS transaction type from which the current transaction data originated.
       */
      transactionType: 'authorization' | 'capture' | 'charge' | 'refund' | 'voice_authorization' | null;
    }

    /**
     * The transaction response data for this credit card transaction when using
     * QuickBooks Merchant Services (QBMS).
     */
    export interface Response {
      /**
       * The authorization code returned from the credit card processor to indicate that
       * this charge will be paid by the card issuer.
       */
      authorizationCode: string | null;

      /**
       * Indicates whether the street address supplied in the transaction request matches
       * the customer's address on file at the card issuer.
       */
      avsStreetStatus: 'fail' | 'not_available' | 'pass' | null;

      /**
       * Indicates whether the customer postal ZIP code supplied in the transaction
       * request matches the customer's postal code recognized at the card issuer.
       */
      avsZipStatus: 'fail' | 'not_available' | 'pass' | null;

      /**
       * Indicates whether the card security code supplied in the transaction request
       * matches the card security code recognized for that credit card number at the
       * card issuer.
       */
      cardSecurityCodeMatch: 'fail' | 'not_available' | 'pass' | null;

      /**
       * A value returned from QBMS transactions for future use by the QuickBooks
       * Reconciliation feature.
       */
      clientTransactionId: string | null;

      /**
       * The ID returned from the credit card processor for this credit card transaction.
       */
      creditCardTransactionId: string;

      /**
       * The QBMS account number of the merchant who is running this transaction using
       * the customer's credit card.
       */
      merchantAccountNumber: string;

      /**
       * An internal code returned by QuickBooks Merchant Services (QBMS) from the
       * transaction request, needed for the QuickBooks reconciliation feature.
       */
      paymentGroupingCode: number | null;

      /**
       * Indicates whether this credit card transaction is known to have been
       * successfully processed by the card issuer.
       */
      paymentStatus: 'completed' | 'unknown';

      /**
       * An internal ID returned by QuickBooks Merchant Services (QBMS) from the
       * transaction request, needed for the QuickBooks reconciliation feature.
       */
      reconBatchId: string | null;

      /**
       * The status code returned in the original QBMS transaction response for this
       * credit card transaction.
       */
      statusCode: number;

      /**
       * The status message returned in the original QBMS transaction response for this
       * credit card transaction.
       */
      statusMessage: string;

      /**
       * An internal value for this credit card transaction, needed for the QuickBooks
       * reconciliation feature.
       */
      transactionAuthorizationStamp: number | null;

      /**
       * The date and time when the credit card processor authorized this credit card
       * transaction.
       */
      transactionAuthorizedAt: string;
    }
  }

  /**
   * The sales receipt's currency. For built-in currencies, the name and code are
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
   * The customer or customer-job to which the payment for this sales receipt is
   * credited.
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
   * The message to display to the customer on the sales receipt.
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
   * The account where the funds for this sales receipt will be or have been
   * deposited.
   */
  export interface DepositToAccount {
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
   * The predefined template in QuickBooks that determines the layout and formatting
   * for this sales receipt when printed or displayed.
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
     * The unique identifier assigned by QuickBooks to this sales receipt line group.
     * This ID is unique across all transaction line types.
     */
    id: string;

    /**
     * The custom fields for the sales receipt line group object, added as user-defined
     * data extensions, not included in the standard QuickBooks object.
     */
    customFields: Array<LineGroup.CustomField>;

    /**
     * A description of this sales receipt line group.
     */
    description: string | null;

    /**
     * The sales receipt line group's item group, representing a predefined set of
     * items bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroup: LineGroup.ItemGroup;

    /**
     * The sales receipt line group's line items, each representing a single product or
     * service sold.
     */
    lines: Array<LineGroup.Line>;

    /**
     * The type of object. This value is always `"qbd_sales_receipt_line_group"`.
     */
    objectType: 'qbd_sales_receipt_line_group';

    /**
     * Specifies an alternative unit-of-measure set when updating this sales receipt
     * line group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows
     * you to select units from a different set than the item's default unit-of-measure
     * set, which remains unchanged on the item itself. The override applies only to
     * this specific line. For example, you can sell an item typically measured in
     * volume units using weight units in a specific transaction by specifying a
     * different unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSet: LineGroup.OverrideUnitOfMeasureSet | null;

    /**
     * The quantity of the item group associated with this sales receipt line group.
     * This field cannot be cleared.
     */
    quantity: number | null;

    /**
     * Indicates whether the individual items in this sales receipt line group and
     * their separate amounts appear on printed forms.
     */
    shouldPrintItemsInGroup: boolean;

    /**
     * The total monetary amount of this sales receipt line group, equivalent to the
     * sum of the amounts in `lines`, represented as a decimal string.
     */
    totalAmount: string;

    /**
     * The unit-of-measure used for the `quantity` in this sales receipt line group.
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
     * The sales receipt line group's item group, representing a predefined set of
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
       * The unique identifier assigned by QuickBooks to this sales receipt line. This ID
       * is unique across all transaction line types.
       */
      id: string;

      /**
       * The monetary amount of this sales receipt line, represented as a decimal string.
       * If both `quantity` and `rate` are specified but not `amount`, QuickBooks will
       * use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
       * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
       * `1` and the suggested `rate`. This field cannot be cleared.
       */
      amount: string | null;

      /**
       * The sales receipt line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all sales receipt
       * lines unless overridden here, at the transaction line level.
       */
      class: Line.Class | null;

      /**
       * The credit card transaction data for this sales receipt line's payment when
       * using QuickBooks Merchant Services (QBMS).
       */
      creditCardTransaction: Line.CreditCardTransaction | null;

      /**
       * The custom fields for the sales receipt line object, added as user-defined data
       * extensions, not included in the standard QuickBooks object.
       */
      customFields: Array<Line.CustomField>;

      /**
       * A description of this sales receipt line.
       */
      description: string | null;

      /**
       * The expiration date for the serial number or lot number of the item associated
       * with this sales receipt line, in ISO 8601 format (YYYY-MM-DD). This is
       * particularly relevant for perishable or time-sensitive inventory items. Note
       * that this field is only supported on QuickBooks Desktop 2023 or later.
       */
      expirationDate: string | null;

      /**
       * The site location where inventory for the item associated with this sales
       * receipt line is stored.
       */
      inventorySite: Line.InventorySite | null;

      /**
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this sales receipt line is stored.
       */
      inventorySiteLocation: Line.InventorySiteLocation | null;

      /**
       * The item associated with this sales receipt line. This can refer to any good or
       * service that the business buys or sells, including item types such as a service
       * item, inventory item, or special calculation item like a discount item or
       * sales-tax item.
       */
      item: Line.Item | null;

      /**
       * The lot number of the item associated with this sales receipt line. Used for
       * tracking groups of inventory items that are purchased or manufactured together.
       */
      lotNumber: string | null;

      /**
       * The type of object. This value is always `"qbd_sales_receipt_line"`.
       */
      objectType: 'qbd_sales_receipt_line';

      /**
       * A built-in custom field for additional information specific to this sales
       * receipt line. Unlike the user-defined fields in the `customFields` array, this
       * is a standard QuickBooks field that exists for all sales receipt lines for
       * convenience. Developers often use this field for tracking information that
       * doesn't fit into other standard QuickBooks fields. Hidden by default in the
       * QuickBooks UI.
       */
      otherCustomField1: string | null;

      /**
       * A second built-in custom field for additional information specific to this sales
       * receipt line. Unlike the user-defined fields in the `customFields` array, this
       * is a standard QuickBooks field that exists for all sales receipt lines for
       * convenience. Like `otherCustomField1`, developers often use this field for
       * tracking information that doesn't fit into other standard QuickBooks fields.
       * Hidden by default in the QuickBooks UI.
       */
      otherCustomField2: string | null;

      /**
       * Specifies an alternative unit-of-measure set when updating this sales receipt
       * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
       * select units from a different set than the item's default unit-of-measure set,
       * which remains unchanged on the item itself. The override applies only to this
       * specific line. For example, you can sell an item typically measured in volume
       * units using weight units in a specific transaction by specifying a different
       * unit-of-measure set with this field.
       */
      overrideUnitOfMeasureSet: Line.OverrideUnitOfMeasureSet | null;

      /**
       * The quantity of the item associated with this sales receipt line. This field
       * cannot be cleared.
       */
      quantity: number | null;

      /**
       * The price per unit for this sales receipt line. If both `rate` and `amount` are
       * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
       * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
       * decimal string. This field cannot be cleared.
       */
      rate: string | null;

      /**
       * The price of this sales receipt line expressed as a percentage. Typically used
       * for discount or markup items.
       */
      ratePercent: string | null;

      /**
       * The sales-tax code for this sales receipt line, determining whether it is
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
       * The serial number of the item associated with this sales receipt line. This is
       * used for tracking individual units of serialized inventory items.
       */
      serialNumber: string | null;

      /**
       * The date on which the service for this sales receipt line was or will be
       * performed, in ISO 8601 format (YYYY-MM-DD). This is particularly relevant for
       * service items.
       */
      serviceDate: string | null;

      /**
       * The unit-of-measure used for the `quantity` in this sales receipt line. Must be
       * a valid unit within the item's available units of measure.
       */
      unitOfMeasure: string | null;
    }

    export namespace Line {
      /**
       * The sales receipt line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all sales receipt
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

      /**
       * The credit card transaction data for this sales receipt line's payment when
       * using QuickBooks Merchant Services (QBMS).
       */
      export interface CreditCardTransaction {
        /**
         * The transaction request data originally supplied for this credit card
         * transaction when using QuickBooks Merchant Services (QBMS).
         */
        request: CreditCardTransaction.Request | null;

        /**
         * The transaction response data for this credit card transaction when using
         * QuickBooks Merchant Services (QBMS).
         */
        response: CreditCardTransaction.Response | null;
      }

      export namespace CreditCardTransaction {
        /**
         * The transaction request data originally supplied for this credit card
         * transaction when using QuickBooks Merchant Services (QBMS).
         */
        export interface Request {
          /**
           * The card's billing address.
           */
          address: string | null;

          /**
           * The commercial card code identifies the type of business credit card being used
           * (purchase, corporate, or business) for Visa and Mastercard transactions only.
           * When provided, this code may qualify the transaction for lower processing fees
           * compared to the standard rates that apply when no code is specified.
           */
          commercialCardCode: string | null;

          /**
           * The month when the credit card expires.
           */
          expirationMonth: number;

          /**
           * The year when the credit card expires.
           */
          expirationYear: number;

          /**
           * The cardholder's name on the card.
           */
          name: string;

          /**
           * The credit card number. Must be masked with lower case "x" and no dashes.
           */
          number: string;

          /**
           * The card's billing address ZIP or postal code.
           */
          postalCode: string | null;

          /**
           * Indicates whether this credit card transaction came from a card swipe
           * (`card_present`) or not (`card_not_present`).
           */
          transactionMode: 'card_not_present' | 'card_present' | null;

          /**
           * The QBMS transaction type from which the current transaction data originated.
           */
          transactionType: 'authorization' | 'capture' | 'charge' | 'refund' | 'voice_authorization' | null;
        }

        /**
         * The transaction response data for this credit card transaction when using
         * QuickBooks Merchant Services (QBMS).
         */
        export interface Response {
          /**
           * The authorization code returned from the credit card processor to indicate that
           * this charge will be paid by the card issuer.
           */
          authorizationCode: string | null;

          /**
           * Indicates whether the street address supplied in the transaction request matches
           * the customer's address on file at the card issuer.
           */
          avsStreetStatus: 'fail' | 'not_available' | 'pass' | null;

          /**
           * Indicates whether the customer postal ZIP code supplied in the transaction
           * request matches the customer's postal code recognized at the card issuer.
           */
          avsZipStatus: 'fail' | 'not_available' | 'pass' | null;

          /**
           * Indicates whether the card security code supplied in the transaction request
           * matches the card security code recognized for that credit card number at the
           * card issuer.
           */
          cardSecurityCodeMatch: 'fail' | 'not_available' | 'pass' | null;

          /**
           * A value returned from QBMS transactions for future use by the QuickBooks
           * Reconciliation feature.
           */
          clientTransactionId: string | null;

          /**
           * The ID returned from the credit card processor for this credit card transaction.
           */
          creditCardTransactionId: string;

          /**
           * The QBMS account number of the merchant who is running this transaction using
           * the customer's credit card.
           */
          merchantAccountNumber: string;

          /**
           * An internal code returned by QuickBooks Merchant Services (QBMS) from the
           * transaction request, needed for the QuickBooks reconciliation feature.
           */
          paymentGroupingCode: number | null;

          /**
           * Indicates whether this credit card transaction is known to have been
           * successfully processed by the card issuer.
           */
          paymentStatus: 'completed' | 'unknown';

          /**
           * An internal ID returned by QuickBooks Merchant Services (QBMS) from the
           * transaction request, needed for the QuickBooks reconciliation feature.
           */
          reconBatchId: string | null;

          /**
           * The status code returned in the original QBMS transaction response for this
           * credit card transaction.
           */
          statusCode: number;

          /**
           * The status message returned in the original QBMS transaction response for this
           * credit card transaction.
           */
          statusMessage: string;

          /**
           * An internal value for this credit card transaction, needed for the QuickBooks
           * reconciliation feature.
           */
          transactionAuthorizationStamp: number | null;

          /**
           * The date and time when the credit card processor authorized this credit card
           * transaction.
           */
          transactionAuthorizedAt: string;
        }
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
       * The site location where inventory for the item associated with this sales
       * receipt line is stored.
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
       * item associated with this sales receipt line is stored.
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
       * The item associated with this sales receipt line. This can refer to any good or
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
       * Specifies an alternative unit-of-measure set when updating this sales receipt
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
       * The sales-tax code for this sales receipt line, determining whether it is
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
     * Specifies an alternative unit-of-measure set when updating this sales receipt
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
     * The unique identifier assigned by QuickBooks to this sales receipt line. This ID
     * is unique across all transaction line types.
     */
    id: string;

    /**
     * The monetary amount of this sales receipt line, represented as a decimal string.
     * If both `quantity` and `rate` are specified but not `amount`, QuickBooks will
     * use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount: string | null;

    /**
     * The sales receipt line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all sales receipt
     * lines unless overridden here, at the transaction line level.
     */
    class: Line.Class | null;

    /**
     * The credit card transaction data for this sales receipt line's payment when
     * using QuickBooks Merchant Services (QBMS).
     */
    creditCardTransaction: Line.CreditCardTransaction | null;

    /**
     * The custom fields for the sales receipt line object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields: Array<Line.CustomField>;

    /**
     * A description of this sales receipt line.
     */
    description: string | null;

    /**
     * The expiration date for the serial number or lot number of the item associated
     * with this sales receipt line, in ISO 8601 format (YYYY-MM-DD). This is
     * particularly relevant for perishable or time-sensitive inventory items. Note
     * that this field is only supported on QuickBooks Desktop 2023 or later.
     */
    expirationDate: string | null;

    /**
     * The site location where inventory for the item associated with this sales
     * receipt line is stored.
     */
    inventorySite: Line.InventorySite | null;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this sales receipt line is stored.
     */
    inventorySiteLocation: Line.InventorySiteLocation | null;

    /**
     * The item associated with this sales receipt line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    item: Line.Item | null;

    /**
     * The lot number of the item associated with this sales receipt line. Used for
     * tracking groups of inventory items that are purchased or manufactured together.
     */
    lotNumber: string | null;

    /**
     * The type of object. This value is always `"qbd_sales_receipt_line"`.
     */
    objectType: 'qbd_sales_receipt_line';

    /**
     * A built-in custom field for additional information specific to this sales
     * receipt line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all sales receipt lines for
     * convenience. Developers often use this field for tracking information that
     * doesn't fit into other standard QuickBooks fields. Hidden by default in the
     * QuickBooks UI.
     */
    otherCustomField1: string | null;

    /**
     * A second built-in custom field for additional information specific to this sales
     * receipt line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all sales receipt lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2: string | null;

    /**
     * Specifies an alternative unit-of-measure set when updating this sales receipt
     * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSet: Line.OverrideUnitOfMeasureSet | null;

    /**
     * The quantity of the item associated with this sales receipt line. This field
     * cannot be cleared.
     */
    quantity: number | null;

    /**
     * The price per unit for this sales receipt line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate: string | null;

    /**
     * The price of this sales receipt line expressed as a percentage. Typically used
     * for discount or markup items.
     */
    ratePercent: string | null;

    /**
     * The sales-tax code for this sales receipt line, determining whether it is
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
     * The serial number of the item associated with this sales receipt line. This is
     * used for tracking individual units of serialized inventory items.
     */
    serialNumber: string | null;

    /**
     * The date on which the service for this sales receipt line was or will be
     * performed, in ISO 8601 format (YYYY-MM-DD). This is particularly relevant for
     * service items.
     */
    serviceDate: string | null;

    /**
     * The unit-of-measure used for the `quantity` in this sales receipt line. Must be
     * a valid unit within the item's available units of measure.
     */
    unitOfMeasure: string | null;
  }

  export namespace Line {
    /**
     * The sales receipt line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all sales receipt
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

    /**
     * The credit card transaction data for this sales receipt line's payment when
     * using QuickBooks Merchant Services (QBMS).
     */
    export interface CreditCardTransaction {
      /**
       * The transaction request data originally supplied for this credit card
       * transaction when using QuickBooks Merchant Services (QBMS).
       */
      request: CreditCardTransaction.Request | null;

      /**
       * The transaction response data for this credit card transaction when using
       * QuickBooks Merchant Services (QBMS).
       */
      response: CreditCardTransaction.Response | null;
    }

    export namespace CreditCardTransaction {
      /**
       * The transaction request data originally supplied for this credit card
       * transaction when using QuickBooks Merchant Services (QBMS).
       */
      export interface Request {
        /**
         * The card's billing address.
         */
        address: string | null;

        /**
         * The commercial card code identifies the type of business credit card being used
         * (purchase, corporate, or business) for Visa and Mastercard transactions only.
         * When provided, this code may qualify the transaction for lower processing fees
         * compared to the standard rates that apply when no code is specified.
         */
        commercialCardCode: string | null;

        /**
         * The month when the credit card expires.
         */
        expirationMonth: number;

        /**
         * The year when the credit card expires.
         */
        expirationYear: number;

        /**
         * The cardholder's name on the card.
         */
        name: string;

        /**
         * The credit card number. Must be masked with lower case "x" and no dashes.
         */
        number: string;

        /**
         * The card's billing address ZIP or postal code.
         */
        postalCode: string | null;

        /**
         * Indicates whether this credit card transaction came from a card swipe
         * (`card_present`) or not (`card_not_present`).
         */
        transactionMode: 'card_not_present' | 'card_present' | null;

        /**
         * The QBMS transaction type from which the current transaction data originated.
         */
        transactionType: 'authorization' | 'capture' | 'charge' | 'refund' | 'voice_authorization' | null;
      }

      /**
       * The transaction response data for this credit card transaction when using
       * QuickBooks Merchant Services (QBMS).
       */
      export interface Response {
        /**
         * The authorization code returned from the credit card processor to indicate that
         * this charge will be paid by the card issuer.
         */
        authorizationCode: string | null;

        /**
         * Indicates whether the street address supplied in the transaction request matches
         * the customer's address on file at the card issuer.
         */
        avsStreetStatus: 'fail' | 'not_available' | 'pass' | null;

        /**
         * Indicates whether the customer postal ZIP code supplied in the transaction
         * request matches the customer's postal code recognized at the card issuer.
         */
        avsZipStatus: 'fail' | 'not_available' | 'pass' | null;

        /**
         * Indicates whether the card security code supplied in the transaction request
         * matches the card security code recognized for that credit card number at the
         * card issuer.
         */
        cardSecurityCodeMatch: 'fail' | 'not_available' | 'pass' | null;

        /**
         * A value returned from QBMS transactions for future use by the QuickBooks
         * Reconciliation feature.
         */
        clientTransactionId: string | null;

        /**
         * The ID returned from the credit card processor for this credit card transaction.
         */
        creditCardTransactionId: string;

        /**
         * The QBMS account number of the merchant who is running this transaction using
         * the customer's credit card.
         */
        merchantAccountNumber: string;

        /**
         * An internal code returned by QuickBooks Merchant Services (QBMS) from the
         * transaction request, needed for the QuickBooks reconciliation feature.
         */
        paymentGroupingCode: number | null;

        /**
         * Indicates whether this credit card transaction is known to have been
         * successfully processed by the card issuer.
         */
        paymentStatus: 'completed' | 'unknown';

        /**
         * An internal ID returned by QuickBooks Merchant Services (QBMS) from the
         * transaction request, needed for the QuickBooks reconciliation feature.
         */
        reconBatchId: string | null;

        /**
         * The status code returned in the original QBMS transaction response for this
         * credit card transaction.
         */
        statusCode: number;

        /**
         * The status message returned in the original QBMS transaction response for this
         * credit card transaction.
         */
        statusMessage: string;

        /**
         * An internal value for this credit card transaction, needed for the QuickBooks
         * reconciliation feature.
         */
        transactionAuthorizationStamp: number | null;

        /**
         * The date and time when the credit card processor authorized this credit card
         * transaction.
         */
        transactionAuthorizedAt: string;
      }
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
     * The site location where inventory for the item associated with this sales
     * receipt line is stored.
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
     * item associated with this sales receipt line is stored.
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
     * The item associated with this sales receipt line. This can refer to any good or
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
     * Specifies an alternative unit-of-measure set when updating this sales receipt
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
     * The sales-tax code for this sales receipt line, determining whether it is
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
   * The sales receipt's payment method (e.g., cash, check, credit card).
   */
  export interface PaymentMethod {
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
   * The sales receipt's sales representative. Sales representatives can be
   * employees, vendors, or other names in QuickBooks.
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
   * The sales-tax code for this sales receipt, determining whether it is taxable or
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
   * receipt's transactions by applying a specific tax rate collected for a single
   * tax agency. Unlike `salesTaxCode`, which only indicates general taxability, this
   * field drives the actual tax calculation and reporting.
   *
   * For sales receipts, while using this field to specify a single tax item/group
   * that applies uniformly is recommended, complex tax scenarios may require
   * alternative approaches. In such cases, you can set this field to a 0% tax item
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
   * The sales receipt's shipping address.
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
   * The shipping method used for this sales receipt, such as standard mail or
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
}

export interface SalesReceiptCreateParams {
  /**
   * Body param: The customer or customer-job to which the payment for this sales
   * receipt is credited.
   */
  customerId: string;

  /**
   * Body param: The date of this sales receipt, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The sales receipt's billing address.
   */
  billingAddress?: SalesReceiptCreateParams.BillingAddress;

  /**
   * Body param: The check number of a check received for this sales receipt.
   */
  checkNumber?: string;

  /**
   * Body param: The sales receipt's class. Classes can be used to categorize objects
   * into meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this sales receipt's line items unless overridden at the
   * line item level.
   */
  classId?: string;

  /**
   * Body param: The credit card transaction data for this sales receipt's payment
   * when using QuickBooks Merchant Services (QBMS). If specifying this field, you
   * must also specify the `paymentMethod` field.
   */
  creditCardTransaction?: SalesReceiptCreateParams.CreditCardTransaction;

  /**
   * Body param: The message to display to the customer on the sales receipt.
   */
  customerMessageId?: string;

  /**
   * Body param: The account where the funds for this sales receipt will be or have
   * been deposited.
   */
  depositToAccountId?: string;

  /**
   * Body param: The predefined template in QuickBooks that determines the layout and
   * formatting for this sales receipt when printed or displayed.
   */
  documentTemplateId?: string;

  /**
   * Body param: The date by which this sales receipt must be paid, in ISO 8601
   * format (YYYY-MM-DD).
   *
   * **NOTE:** For sales receipts, this field is often `null` because sales receipts
   * are generally used for point-of-sale payments, where full payment is received at
   * the time of purchase.
   */
  dueDate?: string;

  /**
   * Body param: The market exchange rate between this sales receipt's currency and
   * the home currency in QuickBooks at the time of this transaction. Represented as
   * a decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home
   * currency).
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
   * Body param: Indicates whether this sales receipt has not been completed.
   */
  isPending?: boolean;

  /**
   * Body param: Indicates whether this sales receipt is included in the queue of
   * documents for QuickBooks to email to the customer.
   */
  isQueuedForEmail?: boolean;

  /**
   * Body param: Indicates whether this sales receipt is included in the queue of
   * documents for QuickBooks to print.
   */
  isQueuedForPrint?: boolean;

  /**
   * Body param: The sales receipt's line item groups, each representing a predefined
   * set of related items.
   *
   * **IMPORTANT**: You must specify `lines`, `lineGroups`, or both when creating a
   * sales receipt.
   */
  lineGroups?: Array<SalesReceiptCreateParams.LineGroup>;

  /**
   * Body param: The sales receipt's line items, each representing a single product
   * or service sold.
   *
   * **IMPORTANT**: You must specify `lines`, `lineGroups`, or both when creating a
   * sales receipt.
   */
  lines?: Array<SalesReceiptCreateParams.Line>;

  /**
   * Body param: A memo or note for this sales receipt that appears in reports, but
   * not on the sales receipt.
   */
  memo?: string;

  /**
   * Body param: A built-in custom field for additional information specific to this
   * sales receipt. Unlike the user-defined fields in the `customFields` array, this
   * is a standard QuickBooks field that exists for all sales receipts for
   * convenience. Developers often use this field for tracking information that
   * doesn't fit into other standard QuickBooks fields. Unlike `otherCustomField1`
   * and `otherCustomField2`, which are line item fields, this exists at the
   * transaction level. Hidden by default in the QuickBooks UI.
   */
  otherCustomField?: string;

  /**
   * Body param: The sales receipt's payment method (e.g., cash, check, credit card).
   *
   * **NOTE**: If this sales receipt contains credit card transaction data supplied
   * from QuickBooks Merchant Services (QBMS) transaction responses, you must specify
   * a credit card payment method (e.g., "Visa", "MasterCard", etc.).
   */
  paymentMethodId?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this sales
   * receipt, which can be used to identify the transaction in QuickBooks. This value
   * is not required to be unique and can be arbitrarily changed by the QuickBooks
   * user.
   */
  refNumber?: string;

  /**
   * Body param: The sales receipt's sales representative. Sales representatives can
   * be employees, vendors, or other names in QuickBooks.
   */
  salesRepresentativeId?: string;

  /**
   * Body param: The sales-tax code for this sales receipt, determining whether it is
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
   * sales receipt's transactions by applying a specific tax rate collected for a
   * single tax agency. Unlike `salesTaxCode`, which only indicates general
   * taxability, this field drives the actual tax calculation and reporting.
   *
   * For sales receipts, while using this field to specify a single tax item/group
   * that applies uniformly is recommended, complex tax scenarios may require
   * alternative approaches. In such cases, you can set this field to a 0% tax item
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
   * sales receipt is shipped. This is the point at which ownership and liability for
   * goods transfer from seller to buyer. Internally, QuickBooks uses the term "FOB"
   * for this field, which stands for "freight on board". This field is informational
   * and has no accounting implications.
   */
  shipmentOrigin?: string;

  /**
   * Body param: The sales receipt's shipping address.
   */
  shippingAddress?: SalesReceiptCreateParams.ShippingAddress;

  /**
   * Body param: The date when the products or services for this sales receipt were
   * shipped or are expected to be shipped, in ISO 8601 format (YYYY-MM-DD).
   */
  shippingDate?: string;

  /**
   * Body param: The shipping method used for this sales receipt, such as standard
   * mail or overnight delivery.
   */
  shippingMethodId?: string;
}

export namespace SalesReceiptCreateParams {
  /**
   * The sales receipt's billing address.
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

  /**
   * The credit card transaction data for this sales receipt's payment when using
   * QuickBooks Merchant Services (QBMS). If specifying this field, you must also
   * specify the `paymentMethod` field.
   */
  export interface CreditCardTransaction {
    /**
     * The transaction request data originally supplied for this credit card
     * transaction when using QuickBooks Merchant Services (QBMS).
     */
    request?: CreditCardTransaction.Request;

    /**
     * The transaction response data for this credit card transaction when using
     * QuickBooks Merchant Services (QBMS).
     */
    response?: CreditCardTransaction.Response;
  }

  export namespace CreditCardTransaction {
    /**
     * The transaction request data originally supplied for this credit card
     * transaction when using QuickBooks Merchant Services (QBMS).
     */
    export interface Request {
      /**
       * The month when the credit card expires.
       */
      expirationMonth: number;

      /**
       * The year when the credit card expires.
       */
      expirationYear: number;

      /**
       * The cardholder's name on the card.
       */
      name: string;

      /**
       * The credit card number. Must be masked with lower case "x" and no dashes.
       */
      number: string;

      /**
       * The card's billing address.
       */
      address?: string;

      /**
       * The commercial card code identifies the type of business credit card being used
       * (purchase, corporate, or business) for Visa and Mastercard transactions only.
       * When provided, this code may qualify the transaction for lower processing fees
       * compared to the standard rates that apply when no code is specified.
       */
      commercialCardCode?: string;

      /**
       * The card's billing address ZIP or postal code.
       */
      postalCode?: string;

      /**
       * Indicates whether this credit card transaction came from a card swipe
       * (`card_present`) or not (`card_not_present`).
       */
      transactionMode?: 'card_not_present' | 'card_present';

      /**
       * The QBMS transaction type from which the current transaction data originated.
       */
      transactionType?: 'authorization' | 'capture' | 'charge' | 'refund' | 'voice_authorization';
    }

    /**
     * The transaction response data for this credit card transaction when using
     * QuickBooks Merchant Services (QBMS).
     */
    export interface Response {
      /**
       * The ID returned from the credit card processor for this credit card transaction.
       */
      creditCardTransactionId: string;

      /**
       * The QBMS account number of the merchant who is running this transaction using
       * the customer's credit card.
       */
      merchantAccountNumber: string;

      /**
       * Indicates whether this credit card transaction is known to have been
       * successfully processed by the card issuer.
       */
      paymentStatus: 'completed' | 'unknown';

      /**
       * The status code returned in the original QBMS transaction response for this
       * credit card transaction.
       */
      statusCode: number;

      /**
       * The status message returned in the original QBMS transaction response for this
       * credit card transaction.
       */
      statusMessage: string;

      /**
       * The date and time when the credit card processor authorized this credit card
       * transaction.
       */
      transactionAuthorizedAt: string;

      /**
       * The authorization code returned from the credit card processor to indicate that
       * this charge will be paid by the card issuer.
       */
      authorizationCode?: string;

      /**
       * Indicates whether the street address supplied in the transaction request matches
       * the customer's address on file at the card issuer.
       */
      avsStreetStatus?: 'fail' | 'not_available' | 'pass';

      /**
       * Indicates whether the customer postal ZIP code supplied in the transaction
       * request matches the customer's postal code recognized at the card issuer.
       */
      avsZipStatus?: 'fail' | 'not_available' | 'pass';

      /**
       * Indicates whether the card security code supplied in the transaction request
       * matches the card security code recognized for that credit card number at the
       * card issuer.
       */
      cardSecurityCodeMatch?: 'fail' | 'not_available' | 'pass';

      /**
       * A value returned from QBMS transactions for future use by the QuickBooks
       * Reconciliation feature.
       */
      clientTransactionId?: string;

      /**
       * An internal code returned by QuickBooks Merchant Services (QBMS) from the
       * transaction request, needed for the QuickBooks reconciliation feature.
       */
      paymentGroupingCode?: number;

      /**
       * An internal ID returned by QuickBooks Merchant Services (QBMS) from the
       * transaction request, needed for the QuickBooks reconciliation feature.
       */
      reconBatchId?: string;

      /**
       * An internal value for this credit card transaction, needed for the QuickBooks
       * reconciliation feature.
       */
      transactionAuthorizationStamp?: number;
    }
  }

  export interface LineGroup {
    /**
     * The sales receipt line group's item group, representing a predefined set of
     * items bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroupId: string;

    /**
     * The custom fields for the sales receipt line group object, added as user-defined
     * data extensions, not included in the standard QuickBooks object.
     */
    customFields?: Array<LineGroup.CustomField>;

    /**
     * The site location where inventory for the item group associated with this sales
     * receipt line group is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item group associated with this sales receipt line group is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The quantity of the item group associated with this sales receipt line group.
     * This field cannot be cleared.
     */
    quantity?: number;

    /**
     * The unit-of-measure used for the `quantity` in this sales receipt line group.
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
     * The monetary amount of this sales receipt line, represented as a decimal string.
     * If both `quantity` and `rate` are specified but not `amount`, QuickBooks will
     * use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount?: string;

    /**
     * The sales receipt line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all sales receipt
     * lines unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * The credit card transaction data for this sales receipt line's payment when
     * using QuickBooks Merchant Services (QBMS). If specifying this field, you must
     * also specify the `paymentMethod` field.
     */
    creditCardTransaction?: Line.CreditCardTransaction;

    /**
     * The custom fields for the sales receipt line object, added as user-defined data
     * extensions, not included in the standard QuickBooks object.
     */
    customFields?: Array<Line.CustomField>;

    /**
     * A description of this sales receipt line.
     */
    description?: string;

    /**
     * The site location where inventory for the item associated with this sales
     * receipt line is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this sales receipt line is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The item associated with this sales receipt line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    itemId?: string;

    /**
     * The lot number of the item associated with this sales receipt line. Used for
     * tracking groups of inventory items that are purchased or manufactured together.
     */
    lotNumber?: string;

    /**
     * A built-in custom field for additional information specific to this sales
     * receipt line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all sales receipt lines for
     * convenience. Developers often use this field for tracking information that
     * doesn't fit into other standard QuickBooks fields. Hidden by default in the
     * QuickBooks UI.
     */
    otherCustomField1?: string;

    /**
     * A second built-in custom field for additional information specific to this sales
     * receipt line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all sales receipt lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2?: string;

    /**
     * The account to use for this sales receipt line, overriding the default account
     * associated with the item.
     */
    overrideItemAccountId?: string;

    /**
     * The price level applied to this sales receipt line. This overrides any price
     * level set on the corresponding customer. The resulting sales receipt line will
     * not show this price level, only the final `rate` calculated from it.
     */
    priceLevelId?: string;

    /**
     * Specifies how to resolve price rule conflicts when adding or modifying this
     * sales receipt line.
     */
    priceRuleConflictStrategy?: 'base_price' | 'zero';

    /**
     * The quantity of the item associated with this sales receipt line. This field
     * cannot be cleared.
     */
    quantity?: number;

    /**
     * The price per unit for this sales receipt line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate?: string;

    /**
     * The price of this sales receipt line expressed as a percentage. Typically used
     * for discount or markup items.
     */
    ratePercent?: string;

    /**
     * The sales-tax code for this sales receipt line, determining whether it is
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
     * The serial number of the item associated with this sales receipt line. This is
     * used for tracking individual units of serialized inventory items.
     */
    serialNumber?: string;

    /**
     * The date on which the service for this sales receipt line was or will be
     * performed, in ISO 8601 format (YYYY-MM-DD). This is particularly relevant for
     * service items.
     */
    serviceDate?: string;

    /**
     * The unit-of-measure used for the `quantity` in this sales receipt line. Must be
     * a valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  export namespace Line {
    /**
     * The credit card transaction data for this sales receipt line's payment when
     * using QuickBooks Merchant Services (QBMS). If specifying this field, you must
     * also specify the `paymentMethod` field.
     */
    export interface CreditCardTransaction {
      /**
       * The transaction request data originally supplied for this credit card
       * transaction when using QuickBooks Merchant Services (QBMS).
       */
      request?: CreditCardTransaction.Request;

      /**
       * The transaction response data for this credit card transaction when using
       * QuickBooks Merchant Services (QBMS).
       */
      response?: CreditCardTransaction.Response;
    }

    export namespace CreditCardTransaction {
      /**
       * The transaction request data originally supplied for this credit card
       * transaction when using QuickBooks Merchant Services (QBMS).
       */
      export interface Request {
        /**
         * The month when the credit card expires.
         */
        expirationMonth: number;

        /**
         * The year when the credit card expires.
         */
        expirationYear: number;

        /**
         * The cardholder's name on the card.
         */
        name: string;

        /**
         * The credit card number. Must be masked with lower case "x" and no dashes.
         */
        number: string;

        /**
         * The card's billing address.
         */
        address?: string;

        /**
         * The commercial card code identifies the type of business credit card being used
         * (purchase, corporate, or business) for Visa and Mastercard transactions only.
         * When provided, this code may qualify the transaction for lower processing fees
         * compared to the standard rates that apply when no code is specified.
         */
        commercialCardCode?: string;

        /**
         * The card's billing address ZIP or postal code.
         */
        postalCode?: string;

        /**
         * Indicates whether this credit card transaction came from a card swipe
         * (`card_present`) or not (`card_not_present`).
         */
        transactionMode?: 'card_not_present' | 'card_present';

        /**
         * The QBMS transaction type from which the current transaction data originated.
         */
        transactionType?: 'authorization' | 'capture' | 'charge' | 'refund' | 'voice_authorization';
      }

      /**
       * The transaction response data for this credit card transaction when using
       * QuickBooks Merchant Services (QBMS).
       */
      export interface Response {
        /**
         * The ID returned from the credit card processor for this credit card transaction.
         */
        creditCardTransactionId: string;

        /**
         * The QBMS account number of the merchant who is running this transaction using
         * the customer's credit card.
         */
        merchantAccountNumber: string;

        /**
         * Indicates whether this credit card transaction is known to have been
         * successfully processed by the card issuer.
         */
        paymentStatus: 'completed' | 'unknown';

        /**
         * The status code returned in the original QBMS transaction response for this
         * credit card transaction.
         */
        statusCode: number;

        /**
         * The status message returned in the original QBMS transaction response for this
         * credit card transaction.
         */
        statusMessage: string;

        /**
         * The date and time when the credit card processor authorized this credit card
         * transaction.
         */
        transactionAuthorizedAt: string;

        /**
         * The authorization code returned from the credit card processor to indicate that
         * this charge will be paid by the card issuer.
         */
        authorizationCode?: string;

        /**
         * Indicates whether the street address supplied in the transaction request matches
         * the customer's address on file at the card issuer.
         */
        avsStreetStatus?: 'fail' | 'not_available' | 'pass';

        /**
         * Indicates whether the customer postal ZIP code supplied in the transaction
         * request matches the customer's postal code recognized at the card issuer.
         */
        avsZipStatus?: 'fail' | 'not_available' | 'pass';

        /**
         * Indicates whether the card security code supplied in the transaction request
         * matches the card security code recognized for that credit card number at the
         * card issuer.
         */
        cardSecurityCodeMatch?: 'fail' | 'not_available' | 'pass';

        /**
         * A value returned from QBMS transactions for future use by the QuickBooks
         * Reconciliation feature.
         */
        clientTransactionId?: string;

        /**
         * An internal code returned by QuickBooks Merchant Services (QBMS) from the
         * transaction request, needed for the QuickBooks reconciliation feature.
         */
        paymentGroupingCode?: number;

        /**
         * An internal ID returned by QuickBooks Merchant Services (QBMS) from the
         * transaction request, needed for the QuickBooks reconciliation feature.
         */
        reconBatchId?: string;

        /**
         * An internal value for this credit card transaction, needed for the QuickBooks
         * reconciliation feature.
         */
        transactionAuthorizationStamp?: number;
      }
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
       * The value of this custom field. The maximum length depends on the field's data
       * type.
       */
      value: string;
    }
  }

  /**
   * The sales receipt's shipping address.
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

export interface SalesReceiptRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface SalesReceiptUpdateParams {
  /**
   * Body param: The current revision number of the sales receipt object you are
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
   * Body param: The sales receipt's billing address.
   */
  billingAddress?: SalesReceiptUpdateParams.BillingAddress;

  /**
   * Body param: The check number of a check received for this sales receipt.
   */
  checkNumber?: string;

  /**
   * Body param: The sales receipt's class. Classes can be used to categorize objects
   * into meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default. A class defined here is
   * automatically used in this sales receipt's line items unless overridden at the
   * line item level.
   */
  classId?: string;

  /**
   * Body param: The customer or customer-job to which the payment for this sales
   * receipt is credited.
   */
  customerId?: string;

  /**
   * Body param: The message to display to the customer on the sales receipt.
   */
  customerMessageId?: string;

  /**
   * Body param: The account where the funds for this sales receipt will be or have
   * been deposited.
   */
  depositToAccountId?: string;

  /**
   * Body param: The predefined template in QuickBooks that determines the layout and
   * formatting for this sales receipt when printed or displayed.
   */
  documentTemplateId?: string;

  /**
   * Body param: The date by which this sales receipt must be paid, in ISO 8601
   * format (YYYY-MM-DD).
   *
   * **NOTE:** For sales receipts, this field is often `null` because sales receipts
   * are generally used for point-of-sale payments, where full payment is received at
   * the time of purchase.
   */
  dueDate?: string;

  /**
   * Body param: The market exchange rate between this sales receipt's currency and
   * the home currency in QuickBooks at the time of this transaction. Represented as
   * a decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home
   * currency).
   */
  exchangeRate?: number;

  /**
   * Body param: Indicates whether this sales receipt has not been completed.
   */
  isPending?: boolean;

  /**
   * Body param: Indicates whether this sales receipt is included in the queue of
   * documents for QuickBooks to email to the customer.
   */
  isQueuedForEmail?: boolean;

  /**
   * Body param: Indicates whether this sales receipt is included in the queue of
   * documents for QuickBooks to print.
   */
  isQueuedForPrint?: boolean;

  /**
   * Body param: The sales receipt's line item groups, each representing a predefined
   * set of related items.
   *
   * **IMPORTANT**: When updating a sales receipt's line item groups, this array
   * completely REPLACES all existing line item groups for that sales receipt. To
   * retain any current line item groups, include them in this array, even if they
   * have not changed. Any line item groups not included will be removed. To add a
   * new line item group, include it with its `id` set to `-1`. If you do not wish to
   * modify the line item groups, you can omit this field entirely to keep them
   * unchanged.
   */
  lineGroups?: Array<SalesReceiptUpdateParams.LineGroup>;

  /**
   * Body param: The sales receipt's line items, each representing a single product
   * or service sold.
   *
   * **IMPORTANT**: When updating a sales receipt's line items, this array completely
   * REPLACES all existing line items for that sales receipt. To retain any current
   * line items, include them in this array, even if they have not changed. Any line
   * items not included will be removed. To add a new line item, include it with its
   * `id` set to `-1`. If you do not wish to modify the line items, you can omit this
   * field entirely to keep them unchanged.
   */
  lines?: Array<SalesReceiptUpdateParams.Line>;

  /**
   * Body param: A memo or note for this sales receipt that appears in reports, but
   * not on the sales receipt.
   */
  memo?: string;

  /**
   * Body param: A built-in custom field for additional information specific to this
   * sales receipt. Unlike the user-defined fields in the `customFields` array, this
   * is a standard QuickBooks field that exists for all sales receipts for
   * convenience. Developers often use this field for tracking information that
   * doesn't fit into other standard QuickBooks fields. Unlike `otherCustomField1`
   * and `otherCustomField2`, which are line item fields, this exists at the
   * transaction level. Hidden by default in the QuickBooks UI.
   */
  otherCustomField?: string;

  /**
   * Body param: The sales receipt's payment method (e.g., cash, check, credit card).
   */
  paymentMethodId?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this sales
   * receipt, which can be used to identify the transaction in QuickBooks. This value
   * is not required to be unique and can be arbitrarily changed by the QuickBooks
   * user.
   */
  refNumber?: string;

  /**
   * Body param: The sales receipt's sales representative. Sales representatives can
   * be employees, vendors, or other names in QuickBooks.
   */
  salesRepresentativeId?: string;

  /**
   * Body param: The sales-tax code for this sales receipt, determining whether it is
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
   * sales receipt's transactions by applying a specific tax rate collected for a
   * single tax agency. Unlike `salesTaxCode`, which only indicates general
   * taxability, this field drives the actual tax calculation and reporting.
   *
   * For sales receipts, while using this field to specify a single tax item/group
   * that applies uniformly is recommended, complex tax scenarios may require
   * alternative approaches. In such cases, you can set this field to a 0% tax item
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
   * sales receipt is shipped. This is the point at which ownership and liability for
   * goods transfer from seller to buyer. Internally, QuickBooks uses the term "FOB"
   * for this field, which stands for "freight on board". This field is informational
   * and has no accounting implications.
   */
  shipmentOrigin?: string;

  /**
   * Body param: The sales receipt's shipping address.
   */
  shippingAddress?: SalesReceiptUpdateParams.ShippingAddress;

  /**
   * Body param: The date when the products or services for this sales receipt were
   * shipped or are expected to be shipped, in ISO 8601 format (YYYY-MM-DD).
   */
  shippingDate?: string;

  /**
   * Body param: The shipping method used for this sales receipt, such as standard
   * mail or overnight delivery.
   */
  shippingMethodId?: string;

  /**
   * Body param: The date of this sales receipt, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate?: string;
}

export namespace SalesReceiptUpdateParams {
  /**
   * The sales receipt's billing address.
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
     * The QuickBooks-assigned unique identifier of an existing sales receipt line
     * group you wish to retain or update.
     *
     * **IMPORTANT**: Set this field to `-1` for new sales receipt line groups you wish
     * to add.
     */
    id: string;

    /**
     * The sales receipt line group's item group, representing a predefined set of
     * items bundled because they are commonly purchased together or grouped for faster
     * entry.
     */
    itemGroupId?: string;

    /**
     * The sales receipt line group's line items, each representing a single product or
     * service sold.
     *
     * **IMPORTANT**: When updating a sales receipt line group's line items, this array
     * completely REPLACES all existing line items for that sales receipt line group.
     * To retain any current line items, include them in this array, even if they have
     * not changed. Any line items not included will be removed. To add a new line
     * item, include it with its `id` set to `-1`. If you do not wish to modify the
     * line items, you can omit this field entirely to keep them unchanged.
     */
    lines?: Array<LineGroup.Line>;

    /**
     * Specifies an alternative unit-of-measure set when updating this sales receipt
     * line group's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows
     * you to select units from a different set than the item's default unit-of-measure
     * set, which remains unchanged on the item itself. The override applies only to
     * this specific line. For example, you can sell an item typically measured in
     * volume units using weight units in a specific transaction by specifying a
     * different unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSetId?: string;

    /**
     * The quantity of the item group associated with this sales receipt line group.
     * This field cannot be cleared.
     */
    quantity?: number;

    /**
     * The unit-of-measure used for the `quantity` in this sales receipt line group.
     * Must be a valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  export namespace LineGroup {
    export interface Line {
      /**
       * The QuickBooks-assigned unique identifier of an existing sales receipt line you
       * wish to retain or update.
       *
       * **IMPORTANT**: Set this field to `-1` for new sales receipt lines you wish to
       * add.
       */
      id: string;

      /**
       * The monetary amount of this sales receipt line, represented as a decimal string.
       * If both `quantity` and `rate` are specified but not `amount`, QuickBooks will
       * use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
       * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
       * `1` and the suggested `rate`. This field cannot be cleared.
       */
      amount?: string;

      /**
       * The sales receipt line's class. Classes can be used to categorize objects into
       * meaningful segments, such as department, location, or type of work. In
       * QuickBooks, class tracking is off by default. If a class is specified for the
       * entire parent transaction, it is automatically applied to all sales receipt
       * lines unless overridden here, at the transaction line level.
       */
      classId?: string;

      /**
       * A description of this sales receipt line.
       */
      description?: string;

      /**
       * The site location where inventory for the item associated with this sales
       * receipt line is stored.
       */
      inventorySiteId?: string;

      /**
       * The specific location (e.g., bin or shelf) within the inventory site where the
       * item associated with this sales receipt line is stored.
       */
      inventorySiteLocationId?: string;

      /**
       * The item associated with this sales receipt line. This can refer to any good or
       * service that the business buys or sells, including item types such as a service
       * item, inventory item, or special calculation item like a discount item or
       * sales-tax item.
       */
      itemId?: string;

      /**
       * The lot number of the item associated with this sales receipt line. Used for
       * tracking groups of inventory items that are purchased or manufactured together.
       */
      lotNumber?: string;

      /**
       * A built-in custom field for additional information specific to this sales
       * receipt line. Unlike the user-defined fields in the `customFields` array, this
       * is a standard QuickBooks field that exists for all sales receipt lines for
       * convenience. Developers often use this field for tracking information that
       * doesn't fit into other standard QuickBooks fields. Hidden by default in the
       * QuickBooks UI.
       */
      otherCustomField1?: string;

      /**
       * A second built-in custom field for additional information specific to this sales
       * receipt line. Unlike the user-defined fields in the `customFields` array, this
       * is a standard QuickBooks field that exists for all sales receipt lines for
       * convenience. Like `otherCustomField1`, developers often use this field for
       * tracking information that doesn't fit into other standard QuickBooks fields.
       * Hidden by default in the QuickBooks UI.
       */
      otherCustomField2?: string;

      /**
       * The account to use for this sales receipt line, overriding the default account
       * associated with the item.
       */
      overrideItemAccountId?: string;

      /**
       * Specifies an alternative unit-of-measure set when updating this sales receipt
       * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
       * select units from a different set than the item's default unit-of-measure set,
       * which remains unchanged on the item itself. The override applies only to this
       * specific line. For example, you can sell an item typically measured in volume
       * units using weight units in a specific transaction by specifying a different
       * unit-of-measure set with this field.
       */
      overrideUnitOfMeasureSetId?: string;

      /**
       * The price level applied to this sales receipt line. This overrides any price
       * level set on the corresponding customer. The resulting sales receipt line will
       * not show this price level, only the final `rate` calculated from it.
       */
      priceLevelId?: string;

      /**
       * Specifies how to resolve price rule conflicts when adding or modifying this
       * sales receipt line.
       */
      priceRuleConflictStrategy?: 'base_price' | 'zero';

      /**
       * The quantity of the item associated with this sales receipt line. This field
       * cannot be cleared.
       */
      quantity?: number;

      /**
       * The price per unit for this sales receipt line. If both `rate` and `amount` are
       * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
       * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
       * decimal string. This field cannot be cleared.
       */
      rate?: string;

      /**
       * The price of this sales receipt line expressed as a percentage. Typically used
       * for discount or markup items.
       */
      ratePercent?: string;

      /**
       * The sales-tax code for this sales receipt line, determining whether it is
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
       * The serial number of the item associated with this sales receipt line. This is
       * used for tracking individual units of serialized inventory items.
       */
      serialNumber?: string;

      /**
       * The date on which the service for this sales receipt line was or will be
       * performed, in ISO 8601 format (YYYY-MM-DD). This is particularly relevant for
       * service items.
       */
      serviceDate?: string;

      /**
       * The unit-of-measure used for the `quantity` in this sales receipt line. Must be
       * a valid unit within the item's available units of measure.
       */
      unitOfMeasure?: string;
    }
  }

  export interface Line {
    /**
     * The QuickBooks-assigned unique identifier of an existing sales receipt line you
     * wish to retain or update.
     *
     * **IMPORTANT**: Set this field to `-1` for new sales receipt lines you wish to
     * add.
     */
    id: string;

    /**
     * The monetary amount of this sales receipt line, represented as a decimal string.
     * If both `quantity` and `rate` are specified but not `amount`, QuickBooks will
     * use them to calculate `amount`. If `amount`, `rate`, and `quantity` are all
     * unspecified, then QuickBooks will calculate `amount` based on a `quantity` of
     * `1` and the suggested `rate`. This field cannot be cleared.
     */
    amount?: string;

    /**
     * The sales receipt line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all sales receipt
     * lines unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * A description of this sales receipt line.
     */
    description?: string;

    /**
     * The site location where inventory for the item associated with this sales
     * receipt line is stored.
     */
    inventorySiteId?: string;

    /**
     * The specific location (e.g., bin or shelf) within the inventory site where the
     * item associated with this sales receipt line is stored.
     */
    inventorySiteLocationId?: string;

    /**
     * The item associated with this sales receipt line. This can refer to any good or
     * service that the business buys or sells, including item types such as a service
     * item, inventory item, or special calculation item like a discount item or
     * sales-tax item.
     */
    itemId?: string;

    /**
     * The lot number of the item associated with this sales receipt line. Used for
     * tracking groups of inventory items that are purchased or manufactured together.
     */
    lotNumber?: string;

    /**
     * A built-in custom field for additional information specific to this sales
     * receipt line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all sales receipt lines for
     * convenience. Developers often use this field for tracking information that
     * doesn't fit into other standard QuickBooks fields. Hidden by default in the
     * QuickBooks UI.
     */
    otherCustomField1?: string;

    /**
     * A second built-in custom field for additional information specific to this sales
     * receipt line. Unlike the user-defined fields in the `customFields` array, this
     * is a standard QuickBooks field that exists for all sales receipt lines for
     * convenience. Like `otherCustomField1`, developers often use this field for
     * tracking information that doesn't fit into other standard QuickBooks fields.
     * Hidden by default in the QuickBooks UI.
     */
    otherCustomField2?: string;

    /**
     * The account to use for this sales receipt line, overriding the default account
     * associated with the item.
     */
    overrideItemAccountId?: string;

    /**
     * Specifies an alternative unit-of-measure set when updating this sales receipt
     * line's `unitOfMeasure` field (e.g., "pound" or "kilogram"). This allows you to
     * select units from a different set than the item's default unit-of-measure set,
     * which remains unchanged on the item itself. The override applies only to this
     * specific line. For example, you can sell an item typically measured in volume
     * units using weight units in a specific transaction by specifying a different
     * unit-of-measure set with this field.
     */
    overrideUnitOfMeasureSetId?: string;

    /**
     * The price level applied to this sales receipt line. This overrides any price
     * level set on the corresponding customer. The resulting sales receipt line will
     * not show this price level, only the final `rate` calculated from it.
     */
    priceLevelId?: string;

    /**
     * Specifies how to resolve price rule conflicts when adding or modifying this
     * sales receipt line.
     */
    priceRuleConflictStrategy?: 'base_price' | 'zero';

    /**
     * The quantity of the item associated with this sales receipt line. This field
     * cannot be cleared.
     */
    quantity?: number;

    /**
     * The price per unit for this sales receipt line. If both `rate` and `amount` are
     * specified, `rate` will be ignored. If both `quantity` and `amount` are specified
     * but not `rate`, QuickBooks will use them to calculate `rate`. Represented as a
     * decimal string. This field cannot be cleared.
     */
    rate?: string;

    /**
     * The price of this sales receipt line expressed as a percentage. Typically used
     * for discount or markup items.
     */
    ratePercent?: string;

    /**
     * The sales-tax code for this sales receipt line, determining whether it is
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
     * The serial number of the item associated with this sales receipt line. This is
     * used for tracking individual units of serialized inventory items.
     */
    serialNumber?: string;

    /**
     * The date on which the service for this sales receipt line was or will be
     * performed, in ISO 8601 format (YYYY-MM-DD). This is particularly relevant for
     * service items.
     */
    serviceDate?: string;

    /**
     * The unit-of-measure used for the `quantity` in this sales receipt line. Must be
     * a valid unit within the item's available units of measure.
     */
    unitOfMeasure?: string;
  }

  /**
   * The sales receipt's shipping address.
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

export interface SalesReceiptListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for sales receipts associated with these accounts.
   */
  accountIds?: Array<string>;

  /**
   * Query param: Filter for sales receipts in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for sales receipts created for these customers.
   */
  customerIds?: Array<string>;

  /**
   * Query param: Filter for specific sales receipts by their QuickBooks-assigned
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
   * Query param: Filter for sales receipts whose `refNumber` contains this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberStartsWith` or `refNumberEndsWith`.
   */
  refNumberContains?: string;

  /**
   * Query param: Filter for sales receipts whose `refNumber` ends with this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberContains` or `refNumberStartsWith`.
   */
  refNumberEndsWith?: string;

  /**
   * Query param: Filter for sales receipts whose `refNumber` is greater than or
   * equal to this value. If omitted, the range will begin with the first number of
   * the list. Uses a numerical comparison for values that contain only digits;
   * otherwise, uses a lexicographical comparison.
   */
  refNumberFrom?: string;

  /**
   * Query param: Filter for specific sales receipts by their ref-number(s),
   * case-sensitive. In QuickBooks, ref-numbers are not required to be unique and can
   * be arbitrarily changed by the QuickBooks user.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  refNumbers?: Array<string>;

  /**
   * Query param: Filter for sales receipts whose `refNumber` starts with this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberContains` or `refNumberEndsWith`.
   */
  refNumberStartsWith?: string;

  /**
   * Query param: Filter for sales receipts whose `refNumber` is less than or equal
   * to this value. If omitted, the range will end with the last number of the list.
   * Uses a numerical comparison for values that contain only digits; otherwise, uses
   * a lexicographical comparison.
   */
  refNumberTo?: string;

  /**
   * Query param: Filter for sales receipts created on or after this date, in ISO
   * 8601 format (YYYY-MM-DD).
   */
  transactionDateFrom?: string;

  /**
   * Query param: Filter for sales receipts created on or before this date, in ISO
   * 8601 format (YYYY-MM-DD).
   */
  transactionDateTo?: string;

  /**
   * Query param: Filter for sales receipts updated on or after this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for sales receipts updated on or before this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

SalesReceipts.SalesReceiptsCursorPage = SalesReceiptsCursorPage;

export declare namespace SalesReceipts {
  export {
    type SalesReceipt as SalesReceipt,
    SalesReceiptsCursorPage as SalesReceiptsCursorPage,
    type SalesReceiptCreateParams as SalesReceiptCreateParams,
    type SalesReceiptRetrieveParams as SalesReceiptRetrieveParams,
    type SalesReceiptUpdateParams as SalesReceiptUpdateParams,
    type SalesReceiptListParams as SalesReceiptListParams,
  };
}
