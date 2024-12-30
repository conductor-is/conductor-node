// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class ReceivePayments extends APIResource {
  /**
   * Creates a new receive-payment.
   */
  create(params: ReceivePaymentCreateParams, options?: Core.RequestOptions): Core.APIPromise<ReceivePayment> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/receive-payments', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a receive-payment by ID.
   */
  retrieve(
    id: string,
    params: ReceivePaymentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReceivePayment> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/receive-payments/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing receive-payment.
   */
  update(
    id: string,
    params: ReceivePaymentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReceivePayment> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/receive-payments/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of receive-payments. Use the `cursor` parameter to paginate
   * through the results.
   */
  list(
    params: ReceivePaymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReceivePaymentsCursorPage, ReceivePayment> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/receive-payments', ReceivePaymentsCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class ReceivePaymentsCursorPage extends CursorPage<ReceivePayment> {}

export interface ReceivePayment {
  /**
   * The unique identifier assigned by QuickBooks to this receive-payment. This ID is
   * unique across all transaction types.
   */
  id: string;

  /**
   * The invoice(s) paid by this receive-payment.
   */
  appliedToTransactions: Array<ReceivePayment.AppliedToTransaction>;

  /**
   * The date and time when this receive-payment was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The credit card transaction data for this receive-payment's payment when using
   * QuickBooks Merchant Services (QBMS).
   */
  creditCardTransaction: ReceivePayment.CreditCardTransaction | null;

  /**
   * The receive-payment's currency. For built-in currencies, the name and code are
   * standard international values. For user-defined currencies, all values are
   * editable.
   */
  currency: ReceivePayment.Currency | null;

  /**
   * The customer or customer-job to which the payment for this receive-payment is
   * credited.
   */
  customer: ReceivePayment.Customer;

  /**
   * The custom fields for the receive-payment object, added as user-defined data
   * extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<ReceivePayment.CustomField>;

  /**
   * The account where the funds for this receive-payment will be or have been
   * deposited.
   */
  depositToAccount: ReceivePayment.DepositToAccount | null;

  /**
   * The market exchange rate between this receive-payment's currency and the home
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
   * A memo or note for this receive-payment that will be displayed at the beginning
   * of reports containing details about this receive-payment.
   */
  memo: string | null;

  /**
   * The type of object. This value is always `"qbd_receive_payment"`.
   */
  objectType: 'qbd_receive_payment';

  /**
   * The receive-payment's payment method (e.g., cash, check, credit card).
   */
  paymentMethod: ReceivePayment.PaymentMethod | null;

  /**
   * The Accounts-Receivable (A/R) account to which this receive-payment is assigned,
   * used to track the amount owed. If not specified, QuickBooks Desktop will use its
   * default A/R account.
   *
   * **IMPORTANT**: If this receive-payment is linked to other transactions, this A/R
   * account must match the `receivablesAccount` used in all linked transactions. For
   * example, when refunding a credit card payment, the A/R account must match the
   * one used in the original credit transactions being refunded.
   */
  receivablesAccount: ReceivePayment.ReceivablesAccount | null;

  /**
   * The case-sensitive user-defined reference number for this receive-payment, which
   * can be used to identify the transaction in QuickBooks. This value is not
   * required to be unique and can be arbitrarily changed by the QuickBooks user.
   */
  refNumber: string | null;

  /**
   * The current revision number of this receive-payment object, which changes each
   * time the object is modified. When updating this object, you must provide the
   * most recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The total monetary amount of this receive-payment, represented as a decimal
   * string.
   */
  totalAmount: string;

  /**
   * The total monetary amount for this receive-payment converted to the home
   * currency of the QuickBooks company file. Represented as a decimal string.
   */
  totalAmountInHomeCurrency: string | null;

  /**
   * The date of this receive-payment, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * The amount of credit that remains unused after applying credits to this
   * receive-payment. This occurs when the `applyCredit.appliedAmount` specified for
   * a credit memo (`applyCredit.creditMemoId`) in the `applyToTransactions` array is
   * less than the total available credit amount for that credit memo.
   */
  unusedCredits: string | null;

  /**
   * The amount of this receive-payment that remains unapplied to any transactions.
   * This occurs in two cases: (1) When the sum of `paymentAmount` amounts in
   * `applyToTransactions` is less than `totalAmount`, leaving a portion of the
   * payment unused, or (2) When a payment is received that equals the exact amount
   * of an invoice, but credits or discounts are also applied, resulting in excess
   * payment.
   */
  unusedPayment: string | null;

  /**
   * The date and time when this receive-payment was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace ReceivePayment {
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
   * The credit card transaction data for this receive-payment's payment when using
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
   * The receive-payment's currency. For built-in currencies, the name and code are
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
   * The customer or customer-job to which the payment for this receive-payment is
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
   * The account where the funds for this receive-payment will be or have been
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
   * The receive-payment's payment method (e.g., cash, check, credit card).
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
   * The Accounts-Receivable (A/R) account to which this receive-payment is assigned,
   * used to track the amount owed. If not specified, QuickBooks Desktop will use its
   * default A/R account.
   *
   * **IMPORTANT**: If this receive-payment is linked to other transactions, this A/R
   * account must match the `receivablesAccount` used in all linked transactions. For
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
}

export interface ReceivePaymentCreateParams {
  /**
   * Body param: The customer or customer-job to which the payment for this
   * receive-payment is credited.
   */
  customerId: string;

  /**
   * Body param: The total monetary amount of this receive-payment, represented as a
   * decimal string.
   *
   * **NOTE:** The sum of the `paymentAmount` amounts in the `applyToTransactions`
   * array cannot exceed the `totalAmount`, or you will receive an error.
   */
  totalAmount: string;

  /**
   * Body param: The date of this receive-payment, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The invoices to be paid by this receive-payment. This will create a
   * link between this receive-payment and the specified invoices.
   *
   * **IMPORTANT**: In each `applyToTransactions` object, you must specify either
   * `paymentAmount`, `applyCredits`, `discountAmount`, or any combination of these;
   * if none of these are specified, you will receive an error for an empty
   * transaction.
   *
   * **IMPORTANT**: The target invoice must have `isPaid=false`, otherwise,
   * QuickBooks will report this object as "cannot be found".
   *
   * **NOTE**: You must specify either `isAutoApply` or `applyToTransactions` when
   * creating a receive-payment, but never both.
   */
  applyToTransactions?: Array<ReceivePaymentCreateParams.ApplyToTransaction>;

  /**
   * Body param: The credit card transaction data for this receive-payment's payment
   * when using QuickBooks Merchant Services (QBMS). If specifying this field, you
   * must also specify the `paymentMethod` field.
   */
  creditCardTransaction?: ReceivePaymentCreateParams.CreditCardTransaction;

  /**
   * Body param: The account where the funds for this receive-payment will be or have
   * been deposited. If omitted, QuickBooks will use the default Undeposited Funds
   * account.
   */
  depositToAccountId?: string;

  /**
   * Body param: The market exchange rate between this receive-payment's currency and
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
   * Body param: When `true`, QuickBooks applies `totalAmount` to any outstanding
   * transaction that exactly matches `totalAmount`. If no exact match is found, this
   * receive-payment is applied to the oldest outstanding transaction for the
   * customer-job. When `false`, QuickBooks records the payment but does not apply it
   * to any specific transaction, causing the amount to appear as a credit on the
   * customer-job's next transaction.
   *
   * **IMPORTANT**: You must specify either `isAutoApply` or `applyToTransactions`
   * when creating a receive-payment, but never both.
   */
  isAutoApply?: boolean;

  /**
   * Body param: A memo or note for this receive-payment that will be displayed at
   * the beginning of reports containing details about this receive-payment.
   */
  memo?: string;

  /**
   * Body param: The receive-payment's payment method (e.g., cash, check, credit
   * card).
   *
   * **NOTE**: If this receive-payment contains credit card transaction data supplied
   * from QuickBooks Merchant Services (QBMS) transaction responses, you must specify
   * a credit card payment method (e.g., "Visa", "MasterCard", etc.).
   */
  paymentMethodId?: string;

  /**
   * Body param: The Accounts-Receivable (A/R) account to which this receive-payment
   * is assigned, used to track the amount owed. If not specified, QuickBooks Desktop
   * will use its default A/R account.
   *
   * **IMPORTANT**: If this receive-payment is linked to other transactions, this A/R
   * account must match the `receivablesAccount` used in all linked transactions. For
   * example, when refunding a credit card payment, the A/R account must match the
   * one used in the original credit transactions being refunded.
   */
  receivablesAccountId?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this
   * receive-payment, which can be used to identify the transaction in QuickBooks.
   * This value is not required to be unique and can be arbitrarily changed by the
   * QuickBooks user.
   */
  refNumber?: string;
}

export namespace ReceivePaymentCreateParams {
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

  /**
   * The credit card transaction data for this receive-payment's payment when using
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
}

export interface ReceivePaymentRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface ReceivePaymentUpdateParams {
  /**
   * Body param: The current revision number of the receive-payment object you are
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
   * Body param: The invoices to be paid by this receive-payment. This will create a
   * link between this receive-payment and the specified invoices.
   *
   * **IMPORTANT**: In each `applyToTransactions` object, you must specify either
   * `paymentAmount`, `applyCredits`, `discountAmount`, or any combination of these;
   * if none of these are specified, you will receive an error for an empty
   * transaction.
   *
   * **IMPORTANT**: The target invoice must have `isPaid=false`, otherwise,
   * QuickBooks will report this object as "cannot be found".
   */
  applyToTransactions?: Array<ReceivePaymentUpdateParams.ApplyToTransaction>;

  /**
   * Body param: The credit card transaction data for this receive-payment's payment
   * when using QuickBooks Merchant Services (QBMS). If specifying this field, you
   * must also specify the `paymentMethod` field.
   */
  creditCardTransaction?: ReceivePaymentUpdateParams.CreditCardTransaction;

  /**
   * Body param: The customer or customer-job to which the payment for this
   * receive-payment is credited.
   */
  customerId?: string;

  /**
   * Body param: The account where the funds for this receive-payment will be or have
   * been deposited.
   */
  depositToAccountId?: string;

  /**
   * Body param: The market exchange rate between this receive-payment's currency and
   * the home currency in QuickBooks at the time of this transaction. Represented as
   * a decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home
   * currency).
   */
  exchangeRate?: number;

  /**
   * Body param: A memo or note for this receive-payment that will be displayed at
   * the beginning of reports containing details about this receive-payment.
   */
  memo?: string;

  /**
   * Body param: The receive-payment's payment method (e.g., cash, check, credit
   * card).
   */
  paymentMethodId?: string;

  /**
   * Body param: The Accounts-Receivable (A/R) account to which this receive-payment
   * is assigned, used to track the amount owed. If not specified, QuickBooks Desktop
   * will use its default A/R account.
   *
   * **IMPORTANT**: If this receive-payment is linked to other transactions, this A/R
   * account must match the `receivablesAccount` used in all linked transactions. For
   * example, when refunding a credit card payment, the A/R account must match the
   * one used in the original credit transactions being refunded.
   */
  receivablesAccountId?: string;

  /**
   * Body param: The case-sensitive user-defined reference number for this
   * receive-payment, which can be used to identify the transaction in QuickBooks.
   * This value is not required to be unique and can be arbitrarily changed by the
   * QuickBooks user.
   */
  refNumber?: string;

  /**
   * Body param: The total monetary amount of this receive-payment, represented as a
   * decimal string.
   *
   * **NOTE:** The sum of the `paymentAmount` amounts in the `applyToTransactions`
   * array cannot exceed the `totalAmount`, or you will receive an error.
   */
  totalAmount?: string;

  /**
   * Body param: The date of this receive-payment, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate?: string;
}

export namespace ReceivePaymentUpdateParams {
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

  /**
   * The credit card transaction data for this receive-payment's payment when using
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
       * The month when the credit card expires.
       */
      expirationMonth?: number;

      /**
       * The year when the credit card expires.
       */
      expirationYear?: number;

      /**
       * The cardholder's name on the card.
       */
      name?: string;

      /**
       * The credit card number. Must be masked with lower case "x" and no dashes.
       */
      number?: string;

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
       * The ID returned from the credit card processor for this credit card transaction.
       */
      creditCardTransactionId?: string;

      /**
       * The QBMS account number of the merchant who is running this transaction using
       * the customer's credit card.
       */
      merchantAccountNumber?: string;

      /**
       * An internal code returned by QuickBooks Merchant Services (QBMS) from the
       * transaction request, needed for the QuickBooks reconciliation feature.
       */
      paymentGroupingCode?: number;

      /**
       * Indicates whether this credit card transaction is known to have been
       * successfully processed by the card issuer.
       */
      paymentStatus?: 'completed' | 'unknown';

      /**
       * An internal ID returned by QuickBooks Merchant Services (QBMS) from the
       * transaction request, needed for the QuickBooks reconciliation feature.
       */
      reconBatchId?: string;

      /**
       * The status code returned in the original QBMS transaction response for this
       * credit card transaction.
       */
      statusCode?: number;

      /**
       * The status message returned in the original QBMS transaction response for this
       * credit card transaction.
       */
      statusMessage?: string;

      /**
       * An internal value for this credit card transaction, needed for the QuickBooks
       * reconciliation feature.
       */
      transactionAuthorizationStamp?: number;

      /**
       * The date and time when the credit card processor authorized this credit card
       * transaction.
       */
      transactionAuthorizedAt?: string;
    }
  }
}

export interface ReceivePaymentListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for receive-payments associated with these accounts.
   */
  accountIds?: Array<string>;

  /**
   * Query param: Filter for receive-payments in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for receive-payments received from these customers.
   */
  customerIds?: Array<string>;

  /**
   * Query param: Filter for specific receive-payments by their QuickBooks-assigned
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
   * Query param: Filter for receive-payments whose `refNumber` contains this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberStartsWith` or `refNumberEndsWith`.
   */
  refNumberContains?: string;

  /**
   * Query param: Filter for receive-payments whose `refNumber` ends with this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberContains` or `refNumberStartsWith`.
   */
  refNumberEndsWith?: string;

  /**
   * Query param: Filter for receive-payments whose `refNumber` is greater than or
   * equal to this value. If omitted, the range will begin with the first number of
   * the list. Uses a numerical comparison for values that contain only digits;
   * otherwise, uses a lexicographical comparison.
   */
  refNumberFrom?: string;

  /**
   * Query param: Filter for specific receive-payments by their ref-number(s),
   * case-sensitive. In QuickBooks, ref-numbers are not required to be unique and can
   * be arbitrarily changed by the QuickBooks user.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  refNumbers?: Array<string>;

  /**
   * Query param: Filter for receive-payments whose `refNumber` starts with this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberContains` or `refNumberEndsWith`.
   */
  refNumberStartsWith?: string;

  /**
   * Query param: Filter for receive-payments whose `refNumber` is less than or equal
   * to this value. If omitted, the range will end with the last number of the list.
   * Uses a numerical comparison for values that contain only digits; otherwise, uses
   * a lexicographical comparison.
   */
  refNumberTo?: string;

  /**
   * Query param: Filter for receive-payments created on or after this date, in ISO
   * 8601 format (YYYY-MM-DD).
   */
  transactionDateFrom?: string;

  /**
   * Query param: Filter for receive-payments created on or before this date, in ISO
   * 8601 format (YYYY-MM-DD).
   */
  transactionDateTo?: string;

  /**
   * Query param: Filter for receive-payments updated on or after this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for receive-payments updated on or before this date and
   * time, in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

ReceivePayments.ReceivePaymentsCursorPage = ReceivePaymentsCursorPage;

export declare namespace ReceivePayments {
  export {
    type ReceivePayment as ReceivePayment,
    ReceivePaymentsCursorPage as ReceivePaymentsCursorPage,
    type ReceivePaymentCreateParams as ReceivePaymentCreateParams,
    type ReceivePaymentRetrieveParams as ReceivePaymentRetrieveParams,
    type ReceivePaymentUpdateParams as ReceivePaymentUpdateParams,
    type ReceivePaymentListParams as ReceivePaymentListParams,
  };
}
