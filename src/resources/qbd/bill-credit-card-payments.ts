// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class BillCreditCardPayments extends APIResource {
  /**
   * Creates a new bill credit card payment.
   */
  create(
    params: BillCreditCardPaymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillCreditCardPayment> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/bill-credit-card-payments', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a bill credit card payment by ID.
   */
  retrieve(
    id: string,
    params: BillCreditCardPaymentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillCreditCardPayment> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/bill-credit-card-payments/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of bill credit card payments. Use the `cursor` parameter to
   * paginate through the results.
   */
  list(
    params: BillCreditCardPaymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillCreditCardPaymentsCursorPage, BillCreditCardPayment> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList(
      '/quickbooks-desktop/bill-credit-card-payments',
      BillCreditCardPaymentsCursorPage,
      { query, ...options, headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers } },
    );
  }
}

export class BillCreditCardPaymentsCursorPage extends CursorPage<BillCreditCardPayment> {}

export interface BillCreditCardPayment {
  /**
   * The unique identifier assigned by QuickBooks to this bill credit card payment.
   * This ID is unique across all transaction types.
   */
  id: string;

  /**
   * The monetary amount of this bill credit card payment, represented as a decimal
   * string.
   */
  amount: string;

  /**
   * The monetary amount for this bill credit card payment converted to the home
   * currency of the QuickBooks company file. Represented as a decimal string.
   */
  amountInHomeCurrency: string | null;

  /**
   * The bill(s) paid by this bill credit card payment.
   */
  appliedToTransactions: Array<BillCreditCardPayment.AppliedToTransaction>;

  /**
   * The date and time when this bill credit card payment was created, in ISO 8601
   * format (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time
   * zone in QuickBooks.
   */
  createdAt: string;

  /**
   * The credit card account to which this bill credit card payment is being charged.
   * This bill credit card payment will decrease the balance of this account.
   */
  creditCardAccount: BillCreditCardPayment.CreditCardAccount;

  /**
   * The bill credit card payment's currency. For built-in currencies, the name and
   * code are standard international values. For user-defined currencies, all values
   * are editable.
   */
  currency: BillCreditCardPayment.Currency | null;

  /**
   * The custom fields for the bill credit card payment object, added as user-defined
   * data extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<BillCreditCardPayment.CustomField>;

  /**
   * The market exchange rate between this bill credit card payment's currency and
   * the home currency in QuickBooks at the time of this transaction. Represented as
   * a decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home
   * currency).
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
   * A memo or note for this bill credit card payment.
   */
  memo: string | null;

  /**
   * The type of object. This value is always `"qbd_bill_credit_card_payment"`.
   */
  objectType: 'qbd_bill_credit_card_payment';

  /**
   * The Accounts-Payable (A/P) account to which this bill credit card payment is
   * assigned, used to track the amount owed. If not specified, QuickBooks Desktop
   * will use its default A/P account.
   *
   * **IMPORTANT**: If this bill credit card payment is linked to other transactions,
   * this A/P account must match the `payablesAccount` used in those other
   * transactions.
   */
  payablesAccount: BillCreditCardPayment.PayablesAccount | null;

  /**
   * The case-sensitive user-defined reference number for this bill credit card
   * payment, which can be used to identify the transaction in QuickBooks. This value
   * is not required to be unique and can be arbitrarily changed by the QuickBooks
   * user.
   *
   * **IMPORTANT**: For checks, this field is the check number.
   */
  refNumber: string | null;

  /**
   * The current revision number of this bill credit card payment object, which
   * changes each time the object is modified. When updating this object, you must
   * provide the most recent `revisionNumber` to ensure you're working with the
   * latest data; otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The date of this bill credit card payment, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * The date and time when this bill credit card payment was last updated, in ISO
   * 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's
   * time zone in QuickBooks.
   */
  updatedAt: string;

  /**
   * The vendor who sent the bill(s) that this bill credit card payment is paying and
   * who will receive this payment.
   *
   * **IMPORTANT**: This vendor must match the `vendor` on the bill(s) specified in
   * `applyToTransactions`.
   */
  vendor: BillCreditCardPayment.Vendor | null;
}

export namespace BillCreditCardPayment {
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
   * The credit card account to which this bill credit card payment is being charged.
   * This bill credit card payment will decrease the balance of this account.
   */
  export interface CreditCardAccount {
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
   * The bill credit card payment's currency. For built-in currencies, the name and
   * code are standard international values. For user-defined currencies, all values
   * are editable.
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
   * The Accounts-Payable (A/P) account to which this bill credit card payment is
   * assigned, used to track the amount owed. If not specified, QuickBooks Desktop
   * will use its default A/P account.
   *
   * **IMPORTANT**: If this bill credit card payment is linked to other transactions,
   * this A/P account must match the `payablesAccount` used in those other
   * transactions.
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
   * The vendor who sent the bill(s) that this bill credit card payment is paying and
   * who will receive this payment.
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

export interface BillCreditCardPaymentCreateParams {
  /**
   * Body param: The bills to be paid by this bill credit card payment. This will
   * create a link between this bill credit card payment and the specified bills.
   *
   * **IMPORTANT**: In each `applyToTransactions` object, you must specify either
   * `paymentAmount`, `applyCredits`, `discountAmount`, or any combination of these;
   * if none of these are specified, you will receive an error for an empty
   * transaction.
   *
   * **IMPORTANT**: The target bill must have `isPaid=false`, otherwise, QuickBooks
   * will report this object as "cannot be found".
   */
  applyToTransactions: Array<BillCreditCardPaymentCreateParams.ApplyToTransaction>;

  /**
   * Body param: The credit card account to which this bill credit card payment is
   * being charged. This bill credit card payment will decrease the balance of this
   * account.
   */
  creditCardAccountId: string;

  /**
   * Body param: The date of this bill credit card payment, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * Body param: The vendor who sent the bill(s) that this bill credit card payment
   * is paying and who will receive this payment.
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
   * Body param: The market exchange rate between this bill credit card payment's
   * currency and the home currency in QuickBooks at the time of this transaction.
   * Represented as a decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is
   * the home currency).
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
   * Body param: A memo or note for this bill credit card payment.
   */
  memo?: string;

  /**
   * Body param: The Accounts-Payable (A/P) account to which this bill credit card
   * payment is assigned, used to track the amount owed. If not specified, QuickBooks
   * Desktop will use its default A/P account.
   *
   * **IMPORTANT**: If this bill credit card payment is linked to other transactions,
   * this A/P account must match the `payablesAccount` used in those other
   * transactions.
   */
  payablesAccountId?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this bill
   * credit card payment, which can be used to identify the transaction in
   * QuickBooks. This value is not required to be unique and can be arbitrarily
   * changed by the QuickBooks user.
   */
  refNumber?: string;
}

export namespace BillCreditCardPaymentCreateParams {
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
       * The unique identifier of the credit transaction (credit memo or vendor credit)
       * to apply to this transaction.
       */
      creditTransactionId: string;

      /**
       * Indicates whether to override the credit.
       */
      overrideCreditApplication?: boolean;
    }
  }
}

export interface BillCreditCardPaymentRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface BillCreditCardPaymentListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for bill credit card payments associated with these
   * accounts.
   */
  accountIds?: Array<string>;

  /**
   * Query param: Filter for bill credit card payments in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for specific bill credit card payments by their
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
   * Query param: Filter for bill credit card payments whose `refNumber` contains
   * this substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberStartsWith` or `refNumberEndsWith`.
   */
  refNumberContains?: string;

  /**
   * Query param: Filter for bill credit card payments whose `refNumber` ends with
   * this substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberContains` or `refNumberStartsWith`.
   */
  refNumberEndsWith?: string;

  /**
   * Query param: Filter for bill credit card payments whose `refNumber` is greater
   * than or equal to this value. If omitted, the range will begin with the first
   * number of the list. Uses a numerical comparison for values that contain only
   * digits; otherwise, uses a lexicographical comparison.
   */
  refNumberFrom?: string;

  /**
   * Query param: Filter for specific bill credit card payments by their
   * ref-number(s), case-sensitive. In QuickBooks, ref-numbers are not required to be
   * unique and can be arbitrarily changed by the QuickBooks user.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  refNumbers?: Array<string>;

  /**
   * Query param: Filter for bill credit card payments whose `refNumber` starts with
   * this substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberContains` or `refNumberEndsWith`.
   */
  refNumberStartsWith?: string;

  /**
   * Query param: Filter for bill credit card payments whose `refNumber` is less than
   * or equal to this value. If omitted, the range will end with the last number of
   * the list. Uses a numerical comparison for values that contain only digits;
   * otherwise, uses a lexicographical comparison.
   */
  refNumberTo?: string;

  /**
   * Query param: Filter for bill credit card payments created on or after this date,
   * in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDateFrom?: string;

  /**
   * Query param: Filter for bill credit card payments created on or before this
   * date, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDateTo?: string;

  /**
   * Query param: Filter for bill credit card payments updated on or after this date
   * and time, in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for bill credit card payments updated on or before this date
   * and time, in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;

  /**
   * Query param: Filter for bill credit card payments sent to these vendors. These
   * are the vendors who sent the bills paid by these credit card payments.
   */
  vendorIds?: Array<string>;
}

BillCreditCardPayments.BillCreditCardPaymentsCursorPage = BillCreditCardPaymentsCursorPage;

export declare namespace BillCreditCardPayments {
  export {
    type BillCreditCardPayment as BillCreditCardPayment,
    BillCreditCardPaymentsCursorPage as BillCreditCardPaymentsCursorPage,
    type BillCreditCardPaymentCreateParams as BillCreditCardPaymentCreateParams,
    type BillCreditCardPaymentRetrieveParams as BillCreditCardPaymentRetrieveParams,
    type BillCreditCardPaymentListParams as BillCreditCardPaymentListParams,
  };
}
