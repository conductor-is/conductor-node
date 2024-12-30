// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class BillCheckPayments extends APIResource {
  /**
   * Creates a new bill check payment.
   */
  create(
    params: BillCheckPaymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillCheckPayment> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/bill-check-payments', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a bill check payment by ID.
   */
  retrieve(
    id: string,
    params: BillCheckPaymentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillCheckPayment> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/bill-check-payments/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing bill check payment.
   */
  update(
    id: string,
    params: BillCheckPaymentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillCheckPayment> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/bill-check-payments/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of bill check payments. Use the `cursor` parameter to paginate
   * through the results.
   */
  list(
    params: BillCheckPaymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillCheckPaymentsCursorPage, BillCheckPayment> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/bill-check-payments', BillCheckPaymentsCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class BillCheckPaymentsCursorPage extends CursorPage<BillCheckPayment> {}

export interface BillCheckPayment {
  /**
   * The unique identifier assigned by QuickBooks to this bill check payment. This ID
   * is unique across all transaction types.
   */
  id: string;

  /**
   * The address that is printed on the bill check payment.
   */
  address: BillCheckPayment.Address | null;

  /**
   * The monetary amount of this bill check payment, represented as a decimal string.
   */
  amount: string;

  /**
   * The monetary amount for this bill check payment converted to the home currency
   * of the QuickBooks company file. Represented as a decimal string.
   */
  amountInHomeCurrency: string | null;

  /**
   * The bill(s) paid by this bill check payment.
   */
  appliedToTransactions: Array<BillCheckPayment.AppliedToTransaction>;

  /**
   * The bank account from which the funds are being drawn for this bill check
   * payment; e.g., Checking or Savings. This bill check payment will decrease the
   * balance of this account.
   */
  bankAccount: BillCheckPayment.BankAccount;

  /**
   * The date and time when this bill check payment was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The bill check payment's currency. For built-in currencies, the name and code
   * are standard international values. For user-defined currencies, all values are
   * editable.
   */
  currency: BillCheckPayment.Currency | null;

  /**
   * The custom fields for the bill check payment object, added as user-defined data
   * extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<BillCheckPayment.CustomField>;

  /**
   * The market exchange rate between this bill check payment's currency and the home
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
   * Indicates whether this bill check payment is included in the queue of documents
   * for QuickBooks to print.
   */
  isQueuedForPrint: boolean | null;

  /**
   * A memo or note for this bill check payment.
   */
  memo: string | null;

  /**
   * The type of object. This value is always `"qbd_bill_check_payment"`.
   */
  objectType: 'qbd_bill_check_payment';

  /**
   * The Accounts-Payable (A/P) account to which this bill check payment is assigned,
   * used to track the amount owed. If not specified, QuickBooks Desktop will use its
   * default A/P account.
   *
   * **IMPORTANT**: If this bill check payment is linked to other transactions, this
   * A/P account must match the `payablesAccount` used in those other transactions.
   */
  payablesAccount: BillCheckPayment.PayablesAccount | null;

  /**
   * The case-sensitive user-defined reference number for this bill check payment,
   * which can be used to identify the transaction in QuickBooks. This value is not
   * required to be unique and can be arbitrarily changed by the QuickBooks user.
   *
   * **IMPORTANT**: For checks, this field is the check number.
   */
  refNumber: string | null;

  /**
   * The current revision number of this bill check payment object, which changes
   * each time the object is modified. When updating this object, you must provide
   * the most recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The date of this bill check payment, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * The date and time when this bill check payment was last updated, in ISO 8601
   * format (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time
   * zone in QuickBooks.
   */
  updatedAt: string;

  /**
   * The vendor who sent the bill(s) that this bill check payment is paying and who
   * will receive this payment.
   *
   * **IMPORTANT**: This vendor must match the `vendor` on the bill(s) specified in
   * `applyToTransactions`.
   */
  vendor: BillCheckPayment.Vendor | null;
}

export namespace BillCheckPayment {
  /**
   * The address that is printed on the bill check payment.
   */
  export interface Address {
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

  export interface AppliedToTransaction {
    /**
     * The monetary amount of this receivable transaction, represented as a decimal
     * string.
     */
    amount: string | null;

    /**
     * The outstanding balance of this receivable transaction after applying any
     * credits or payments. Represented as a decimal string.
     */
    balanceRemaining: string | null;

    /**
     * The financial account used to track this receivable transaction's discount.
     */
    discountAccount: AppliedToTransaction.DiscountAccount | null;

    /**
     * The monetary amount by which to reduce the receivable transaction's receivable
     * amount, represented as a decimal string.
     */
    discountAmount: string | null;

    /**
     * The class used to track this receivable transaction's discount.
     */
    discountClass: AppliedToTransaction.DiscountClass | null;

    /**
     * The receivable transaction's linked transactions, such as payments applied,
     * credits used, or associated purchase orders.
     *
     * **IMPORTANT**: You must specify the parameter `includeLinkedTransactions` when
     * fetching a list of receivable transactions to receive this field because it is
     * not returned by default.
     */
    linkedTransactions: Array<AppliedToTransaction.LinkedTransaction>;

    /**
     * The case-sensitive user-defined reference number for this receivable
     * transaction, which can be used to identify the transaction in QuickBooks. This
     * value is not required to be unique and can be arbitrarily changed by the
     * QuickBooks user.
     */
    refNumber: string | null;

    /**
     * The date of this receivable transaction, in ISO 8601 format (YYYY-MM-DD).
     */
    transactionDate: string;

    /**
     * The ID of the receivable transaction to which this payment is applied.
     */
    transactionId: string;

    /**
     * The type of transaction for this receivable transaction.
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

  export namespace AppliedToTransaction {
    /**
     * The financial account used to track this receivable transaction's discount.
     */
    export interface DiscountAccount {
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
     * The class used to track this receivable transaction's discount.
     */
    export interface DiscountClass {
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
  }

  /**
   * The bank account from which the funds are being drawn for this bill check
   * payment; e.g., Checking or Savings. This bill check payment will decrease the
   * balance of this account.
   */
  export interface BankAccount {
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
   * The bill check payment's currency. For built-in currencies, the name and code
   * are standard international values. For user-defined currencies, all values are
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
   * The Accounts-Payable (A/P) account to which this bill check payment is assigned,
   * used to track the amount owed. If not specified, QuickBooks Desktop will use its
   * default A/P account.
   *
   * **IMPORTANT**: If this bill check payment is linked to other transactions, this
   * A/P account must match the `payablesAccount` used in those other transactions.
   */
  export interface PayablesAccount {
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
   * The vendor who sent the bill(s) that this bill check payment is paying and who
   * will receive this payment.
   *
   * **IMPORTANT**: This vendor must match the `vendor` on the bill(s) specified in
   * `applyToTransactions`.
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
}

export interface BillCheckPaymentCreateParams {
  /**
   * Body param: The bills to be paid by this bill check payment. This will create a
   * link between this bill check payment and the specified bills.
   *
   * **IMPORTANT**: In each `applyToTransactions` object, you must specify either
   * `paymentAmount`, `applyCredits`, `discountAmount`, or any combination of these;
   * if none of these are specified, you will receive an error for an empty
   * transaction.
   *
   * **IMPORTANT**: The target bill must have `isPaid=false`, otherwise, QuickBooks
   * will report this object as "cannot be found".
   */
  applyToTransactions: Array<BillCheckPaymentCreateParams.ApplyToTransaction>;

  /**
   * Body param: The bank account from which the funds are being drawn for this bill
   * check payment; e.g., Checking or Savings. This bill check payment will decrease
   * the balance of this account.
   */
  bankAccountId: string;

  /**
   * Body param: The date of this bill check payment, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * Body param: The vendor who sent the bill(s) that this bill check payment is
   * paying and who will receive this payment.
   *
   * **IMPORTANT**: This vendor must match the `vendor` on the bill(s) specified in
   * `applyToTransactions`; otherwise, QuickBooks will say the `transactionId` in
   * `applyToTransactions` "does not exist".
   */
  vendorId: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The market exchange rate between this bill check payment's currency
   * and the home currency in QuickBooks at the time of this transaction. Represented
   * as a decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home
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
   * Body param: Indicates whether this bill check payment is included in the queue
   * of documents for QuickBooks to print.
   */
  isQueuedForPrint?: boolean;

  /**
   * Body param: A memo or note for this bill check payment.
   */
  memo?: string;

  /**
   * Body param: The Accounts-Payable (A/P) account to which this bill check payment
   * is assigned, used to track the amount owed. If not specified, QuickBooks Desktop
   * will use its default A/P account.
   *
   * **IMPORTANT**: If this bill check payment is linked to other transactions, this
   * A/P account must match the `payablesAccount` used in those other transactions.
   */
  payablesAccountId?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this bill check
   * payment, which can be used to identify the transaction in QuickBooks. This value
   * is not required to be unique and can be arbitrarily changed by the QuickBooks
   * user.
   *
   * **IMPORTANT**: For checks, this field is the check number.
   */
  refNumber?: string;
}

export namespace BillCheckPaymentCreateParams {
  export interface ApplyToTransaction {
    /**
     * The ID of the receivable transaction to which this payment is applied.
     */
    transactionId: string;

    /**
     * Credit memos to apply to this receivable transaction, reducing its balance. This
     * creates a link between this receivable transaction and the specified credit
     * memos.
     *
     * **IMPORTANT**: By default, QuickBooks will not return any information about the
     * linked transactions in this endpoint's response even when this request is
     * successful. To see the transactions linked via this field, refetch the
     * receivable transaction and check the `linkedTransactions` response field. If
     * fetching a list of receivable transactions, you must also specify the parameter
     * `includeLinkedTransactions=true` to see the `linkedTransactions` response field.
     */
    applyCredits?: Array<ApplyToTransaction.ApplyCredit>;

    /**
     * The financial account used to track this receivable transaction's discount.
     */
    discountAccountId?: string;

    /**
     * The monetary amount by which to reduce the receivable transaction's receivable
     * amount, represented as a decimal string.
     */
    discountAmount?: string;

    /**
     * The class used to track this receivable transaction's discount.
     */
    discountClassId?: string;

    /**
     * The monetary amount to apply to the receivable transaction, represented as a
     * decimal string.
     */
    paymentAmount?: string;
  }

  export namespace ApplyToTransaction {
    export interface ApplyCredit {
      /**
       * The amount of credit applied to this transaction. This could include customer
       * deposits, payments, or credits. Represented as a decimal string.
       */
      appliedAmount: string;

      /**
       * The unique identifier of the credit memo to apply to this transaction.
       */
      creditMemoId: string;

      /**
       * Indicates whether to override the credit.
       */
      overrideCreditApplication?: boolean;
    }
  }
}

export interface BillCheckPaymentRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface BillCheckPaymentUpdateParams {
  /**
   * Body param: The current revision number of the bill check payment object you are
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
   * Body param: The monetary amount of this bill check payment, represented as a
   * decimal string.
   */
  amount?: string;

  /**
   * Body param: The bills to be paid by this bill check payment. This will create a
   * link between this bill check payment and the specified bills.
   *
   * **IMPORTANT**: In each `applyToTransactions` object, you must specify either
   * `paymentAmount`, `applyCredits`, `discountAmount`, or any combination of these;
   * if none of these are specified, you will receive an error for an empty
   * transaction.
   *
   * **IMPORTANT**: The target bill must have `isPaid=false`, otherwise, QuickBooks
   * will report this object as "cannot be found".
   */
  applyToTransactions?: Array<BillCheckPaymentUpdateParams.ApplyToTransaction>;

  /**
   * Body param: The bank account from which the funds are being drawn for this bill
   * check payment; e.g., Checking or Savings. This bill check payment will decrease
   * the balance of this account.
   */
  bankAccountId?: string;

  /**
   * Body param: The market exchange rate between this bill check payment's currency
   * and the home currency in QuickBooks at the time of this transaction. Represented
   * as a decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home
   * currency).
   */
  exchangeRate?: number;

  /**
   * Body param: Indicates whether this bill check payment is included in the queue
   * of documents for QuickBooks to print.
   */
  isQueuedForPrint?: boolean;

  /**
   * Body param: A memo or note for this bill check payment.
   */
  memo?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this bill check
   * payment, which can be used to identify the transaction in QuickBooks. This value
   * is not required to be unique and can be arbitrarily changed by the QuickBooks
   * user.
   *
   * **IMPORTANT**: For checks, this field is the check number.
   */
  refNumber?: string;

  /**
   * Body param: The date of this bill check payment, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  transactionDate?: string;
}

export namespace BillCheckPaymentUpdateParams {
  export interface ApplyToTransaction {
    /**
     * The ID of the receivable transaction to which this payment is applied.
     */
    transactionId: string;

    /**
     * Credit memos to apply to this receivable transaction, reducing its balance. This
     * creates a link between this receivable transaction and the specified credit
     * memos.
     *
     * **IMPORTANT**: By default, QuickBooks will not return any information about the
     * linked transactions in this endpoint's response even when this request is
     * successful. To see the transactions linked via this field, refetch the
     * receivable transaction and check the `linkedTransactions` response field. If
     * fetching a list of receivable transactions, you must also specify the parameter
     * `includeLinkedTransactions=true` to see the `linkedTransactions` response field.
     */
    applyCredits?: Array<ApplyToTransaction.ApplyCredit>;

    /**
     * The financial account used to track this receivable transaction's discount.
     */
    discountAccountId?: string;

    /**
     * The monetary amount by which to reduce the receivable transaction's receivable
     * amount, represented as a decimal string.
     */
    discountAmount?: string;

    /**
     * The class used to track this receivable transaction's discount.
     */
    discountClassId?: string;

    /**
     * The monetary amount to apply to the receivable transaction, represented as a
     * decimal string.
     */
    paymentAmount?: string;
  }

  export namespace ApplyToTransaction {
    export interface ApplyCredit {
      /**
       * The amount of credit applied to this transaction. This could include customer
       * deposits, payments, or credits. Represented as a decimal string.
       */
      appliedAmount: string;

      /**
       * The unique identifier of the credit memo to apply to this transaction.
       */
      creditMemoId: string;

      /**
       * Indicates whether to override the credit.
       */
      overrideCreditApplication?: boolean;
    }
  }
}

export interface BillCheckPaymentListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for bill check payments associated with these accounts.
   */
  accountIds?: Array<string>;

  /**
   * Query param: Filter for bill check payments in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for specific bill check payments by their
   * QuickBooks-assigned unique identifier(s).
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
   * Query param: Filter for bill check payments whose `refNumber` contains this
   * substring. For checks, this is the check number. NOTE: If you use this
   * parameter, you cannot also use `refNumberStartsWith` or `refNumberEndsWith`.
   */
  refNumberContains?: string;

  /**
   * Query param: Filter for bill check payments whose `refNumber` ends with this
   * substring. For checks, this is the check number. NOTE: If you use this
   * parameter, you cannot also use `refNumberContains` or `refNumberStartsWith`.
   */
  refNumberEndsWith?: string;

  /**
   * Query param: Filter for bill check payments whose `refNumber` is greater than or
   * equal to this value. If omitted, the range will begin with the first number of
   * the list. Uses a numerical comparison for values that contain only digits;
   * otherwise, uses a lexicographical comparison.
   */
  refNumberFrom?: string;

  /**
   * Query param: Filter for specific bill check payments by their ref-number(s),
   * case-sensitive. In QuickBooks, ref-numbers are not required to be unique and can
   * be arbitrarily changed by the QuickBooks user.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  refNumbers?: Array<string>;

  /**
   * Query param: Filter for bill check payments whose `refNumber` starts with this
   * substring. For checks, this is the check number. NOTE: If you use this
   * parameter, you cannot also use `refNumberContains` or `refNumberEndsWith`.
   */
  refNumberStartsWith?: string;

  /**
   * Query param: Filter for bill check payments whose `refNumber` is less than or
   * equal to this value. If omitted, the range will end with the last number of the
   * list. Uses a numerical comparison for values that contain only digits;
   * otherwise, uses a lexicographical comparison.
   */
  refNumberTo?: string;

  /**
   * Query param: Filter for bill check payments created on or after this date, in
   * ISO 8601 format (YYYY-MM-DD).
   */
  transactionDateFrom?: string;

  /**
   * Query param: Filter for bill check payments created on or before this date, in
   * ISO 8601 format (YYYY-MM-DD).
   */
  transactionDateTo?: string;

  /**
   * Query param: Filter for bill check payments updated on or after this date and
   * time, in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for bill check payments updated on or before this date and
   * time, in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;

  /**
   * Query param: Filter for bill check payments sent to these vendors. These are the
   * vendors who sent the bills paid by these checks.
   */
  vendorIds?: Array<string>;
}

BillCheckPayments.BillCheckPaymentsCursorPage = BillCheckPaymentsCursorPage;

export declare namespace BillCheckPayments {
  export {
    type BillCheckPayment as BillCheckPayment,
    BillCheckPaymentsCursorPage as BillCheckPaymentsCursorPage,
    type BillCheckPaymentCreateParams as BillCheckPaymentCreateParams,
    type BillCheckPaymentRetrieveParams as BillCheckPaymentRetrieveParams,
    type BillCheckPaymentUpdateParams as BillCheckPaymentUpdateParams,
    type BillCheckPaymentListParams as BillCheckPaymentListParams,
  };
}
