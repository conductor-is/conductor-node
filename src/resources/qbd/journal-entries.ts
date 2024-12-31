// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class JournalEntries extends APIResource {
  /**
   * Creates a new journal entry.
   */
  create(params: JournalEntryCreateParams, options?: Core.RequestOptions): Core.APIPromise<JournalEntry> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/journal-entries', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a journal entry by ID.
   */
  retrieve(
    id: string,
    params: JournalEntryRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JournalEntry> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/journal-entries/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing journal entry.
   */
  update(
    id: string,
    params: JournalEntryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JournalEntry> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/journal-entries/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of journal entries. Use the `cursor` parameter to paginate
   * through the results.
   */
  list(
    params: JournalEntryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<JournalEntriesCursorPage, JournalEntry> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/journal-entries', JournalEntriesCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class JournalEntriesCursorPage extends CursorPage<JournalEntry> {}

export interface JournalEntry {
  /**
   * The unique identifier assigned by QuickBooks to this journal entry. This ID is
   * unique across all transaction types.
   */
  id: string;

  /**
   * Indicates whether the amounts in this journal entry were entered in the
   * company's home currency rather than a foreign currency. When `true`, amounts are
   * in the home currency regardless of the `currency` field.
   */
  areAmountsEnteredInHomeCurrency: boolean | null;

  /**
   * The date and time when this journal entry was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The journal entry's credit lines.
   */
  creditLines: Array<JournalEntry.CreditLine>;

  /**
   * The journal entry's currency. For built-in currencies, the name and code are
   * standard international values. For user-defined currencies, all values are
   * editable.
   */
  currency: JournalEntry.Currency | null;

  /**
   * The custom fields for the journal entry object, added as user-defined data
   * extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<JournalEntry.CustomField>;

  /**
   * The journal entry's debit lines.
   */
  debitLines: Array<JournalEntry.DebitLine>;

  /**
   * The market exchange rate between this journal entry's currency and the home
   * currency in QuickBooks at the time of this transaction. Represented as a decimal
   * value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home currency).
   */
  exchangeRate: number | null;

  /**
   * A globally unique identifier (GUID) you, the developer, can provide for tracking
   * this object in your external system.
   */
  externalId: string | null;

  /**
   * Indicates whether this journal entry is an adjustment entry. When `true`,
   * QuickBooks retains the original entry information to maintain an audit trail of
   * the adjustments.
   */
  isAdjustment: boolean | null;

  /**
   * Indicates whether this journal entry is an adjustment made in the company's home
   * currency for a transaction that was originally recorded in a foreign currency.
   */
  isHomeCurrencyAdjustment: boolean | null;

  /**
   * The type of object. This value is always `"qbd_journal_entry"`.
   */
  objectType: 'qbd_journal_entry';

  /**
   * The case-sensitive user-defined reference number for this journal entry, which
   * can be used to identify the transaction in QuickBooks. This value is not
   * required to be unique and can be arbitrarily changed by the QuickBooks user.
   */
  refNumber: string | null;

  /**
   * The current revision number of this journal entry object, which changes each
   * time the object is modified. When updating this object, you must provide the
   * most recent `revisionNumber` to ensure you're working with the latest data;
   * otherwise, the update will return an error.
   */
  revisionNumber: string;

  /**
   * The date of this journal entry, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * The date and time when this journal entry was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace JournalEntry {
  export interface CreditLine {
    /**
     * The unique identifier assigned by QuickBooks to this journal credit line. This
     * ID is unique across all transaction line types.
     */
    id: string;

    /**
     * The account to which this journal credit line is being credited. This will
     * increase the balance of this account.
     */
    account: CreditLine.Account;

    /**
     * The monetary amount of this journal credit line, represented as a decimal
     * string.
     */
    amount: string | null;

    /**
     * The billing status of this journal credit line.
     */
    billingStatus: 'billable' | 'has_been_billed' | 'not_billable' | null;

    /**
     * The journal credit line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all journal credit
     * lines unless overridden here, at the transaction line level.
     */
    class: CreditLine.Class | null;

    /**
     * The customer, vendor, employee, or other entity associated with this journal
     * credit line.
     *
     * **IMPORTANT**: If the journal credit line's `account` is an Accounts Receivable
     * (A/R) account, this field must refer to a customer. If the journal credit line's
     * `account` is an Accounts Payable (A/P) account, this field must refer to a
     * vendor. If these requirements are not met, QuickBooks Desktop will not record
     * the transaction.
     */
    entity: CreditLine.Entity | null;

    /**
     * A memo or note for this journal credit line.
     */
    memo: string | null;

    /**
     * The type of object. This value is always `"qbd_journal_credit_line"`.
     */
    objectType: 'qbd_journal_credit_line';

    /**
     * The sales-tax item used to calculate the actual tax amount for this journal
     * credit line's transactions by applying a specific tax rate collected for a
     * single tax agency. Unlike `salesTaxCode`, which only indicates general
     * taxability, this field drives the actual tax calculation and reporting.
     */
    salesTaxItem: CreditLine.SalesTaxItem | null;
  }

  export namespace CreditLine {
    /**
     * The account to which this journal credit line is being credited. This will
     * increase the balance of this account.
     */
    export interface Account {
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
     * The journal credit line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all journal credit
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
     * The customer, vendor, employee, or other entity associated with this journal
     * credit line.
     *
     * **IMPORTANT**: If the journal credit line's `account` is an Accounts Receivable
     * (A/R) account, this field must refer to a customer. If the journal credit line's
     * `account` is an Accounts Payable (A/P) account, this field must refer to a
     * vendor. If these requirements are not met, QuickBooks Desktop will not record
     * the transaction.
     */
    export interface Entity {
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
     * The sales-tax item used to calculate the actual tax amount for this journal
     * credit line's transactions by applying a specific tax rate collected for a
     * single tax agency. Unlike `salesTaxCode`, which only indicates general
     * taxability, this field drives the actual tax calculation and reporting.
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
  }

  /**
   * The journal entry's currency. For built-in currencies, the name and code are
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

  export interface DebitLine {
    /**
     * The unique identifier assigned by QuickBooks to this journal debit line. This ID
     * is unique across all transaction line types.
     */
    id: string;

    /**
     * The account to which this journal debit line is being debited. This will
     * decrease the balance of this account.
     */
    account: DebitLine.Account;

    /**
     * The monetary amount of this journal debit line, represented as a decimal string.
     */
    amount: string | null;

    /**
     * The billing status of this journal debit line.
     */
    billingStatus: 'billable' | 'has_been_billed' | 'not_billable' | null;

    /**
     * The journal debit line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all journal debit
     * lines unless overridden here, at the transaction line level.
     */
    class: DebitLine.Class | null;

    /**
     * The customer, vendor, employee, or other entity associated with this journal
     * debit line.
     *
     * **IMPORTANT**: If the journal debit line's `account` is an Accounts Receivable
     * (A/R) account, this field must refer to a customer. If the journal debit line's
     * `account` is an Accounts Payable (A/P) account, this field must refer to a
     * vendor. If these requirements are not met, QuickBooks Desktop will not record
     * the transaction.
     */
    entity: DebitLine.Entity | null;

    /**
     * A memo or note for this journal debit line.
     */
    memo: string | null;

    /**
     * The type of object. This value is always `"qbd_journal_debit_line"`.
     */
    objectType: 'qbd_journal_debit_line';

    /**
     * The sales-tax item used to calculate the actual tax amount for this journal
     * debit line's transactions by applying a specific tax rate collected for a single
     * tax agency. Unlike `salesTaxCode`, which only indicates general taxability, this
     * field drives the actual tax calculation and reporting.
     */
    salesTaxItem: DebitLine.SalesTaxItem | null;
  }

  export namespace DebitLine {
    /**
     * The account to which this journal debit line is being debited. This will
     * decrease the balance of this account.
     */
    export interface Account {
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
     * The journal debit line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all journal debit
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
     * The customer, vendor, employee, or other entity associated with this journal
     * debit line.
     *
     * **IMPORTANT**: If the journal debit line's `account` is an Accounts Receivable
     * (A/R) account, this field must refer to a customer. If the journal debit line's
     * `account` is an Accounts Payable (A/P) account, this field must refer to a
     * vendor. If these requirements are not met, QuickBooks Desktop will not record
     * the transaction.
     */
    export interface Entity {
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
     * The sales-tax item used to calculate the actual tax amount for this journal
     * debit line's transactions by applying a specific tax rate collected for a single
     * tax agency. Unlike `salesTaxCode`, which only indicates general taxability, this
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
  }
}

export interface JournalEntryCreateParams {
  /**
   * Body param: The date of this journal entry, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: Indicates whether the amounts in this journal entry were entered in
   * the company's home currency rather than a foreign currency. When `true`, amounts
   * are in the home currency regardless of the `currency` field.
   */
  areAmountsEnteredInHomeCurrency?: boolean;

  /**
   * Body param: The journal entry's credit lines.
   */
  creditLines?: Array<JournalEntryCreateParams.CreditLine>;

  /**
   * Body param: The journal entry's currency. For built-in currencies, the name and
   * code are standard international values. For user-defined currencies, all values
   * are editable.
   */
  currencyId?: string;

  /**
   * Body param: The journal entry's debit lines.
   */
  debitLines?: Array<JournalEntryCreateParams.DebitLine>;

  /**
   * Body param: The market exchange rate between this journal entry's currency and
   * the home currency in QuickBooks at the time of this transaction. Represented as
   * a decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home
   * currency).
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
   * Body param: Indicates whether this journal entry is an adjustment entry. When
   * `true`, QuickBooks retains the original entry information to maintain an audit
   * trail of the adjustments.
   */
  isAdjustment?: boolean;

  /**
   * Body param: Indicates whether this journal entry is an adjustment made in the
   * company's home currency for a transaction that was originally recorded in a
   * foreign currency.
   */
  isHomeCurrencyAdjustment?: boolean;

  /**
   * Body param: The case-sensitive user-defined reference number for this journal
   * entry, which can be used to identify the transaction in QuickBooks. This value
   * is not required to be unique and can be arbitrarily changed by the QuickBooks
   * user.
   */
  refNumber?: string;
}

export namespace JournalEntryCreateParams {
  export interface CreditLine {
    /**
     * The account to which this journal credit line is being credited. This will
     * increase the balance of this account.
     */
    accountId: string;

    /**
     * The monetary amount of this journal credit line, represented as a decimal
     * string.
     */
    amount?: string;

    /**
     * The billing status of this journal credit line.
     */
    billingStatus?: 'billable' | 'has_been_billed' | 'not_billable';

    /**
     * The journal credit line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all journal credit
     * lines unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * The customer, vendor, employee, or other entity associated with this journal
     * credit line.
     *
     * **IMPORTANT**: If the journal credit line's `account` is an Accounts Receivable
     * (A/R) account, this field must refer to a customer. If the journal credit line's
     * `account` is an Accounts Payable (A/P) account, this field must refer to a
     * vendor. If these requirements are not met, QuickBooks Desktop will not record
     * the transaction.
     */
    entityId?: string;

    /**
     * A memo or note for this journal credit line.
     */
    memo?: string;

    /**
     * The sales-tax item used to calculate the actual tax amount for this journal
     * credit line's transactions by applying a specific tax rate collected for a
     * single tax agency. Unlike `salesTaxCode`, which only indicates general
     * taxability, this field drives the actual tax calculation and reporting.
     */
    salesTaxItemId?: string;
  }

  export interface DebitLine {
    /**
     * The account to which this journal debit line is being debited. This will
     * decrease the balance of this account.
     */
    accountId: string;

    /**
     * The monetary amount of this journal debit line, represented as a decimal string.
     */
    amount?: string;

    /**
     * The billing status of this journal debit line.
     */
    billingStatus?: 'billable' | 'has_been_billed' | 'not_billable';

    /**
     * The journal debit line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all journal debit
     * lines unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * The customer, vendor, employee, or other entity associated with this journal
     * debit line.
     *
     * **IMPORTANT**: If the journal debit line's `account` is an Accounts Receivable
     * (A/R) account, this field must refer to a customer. If the journal debit line's
     * `account` is an Accounts Payable (A/P) account, this field must refer to a
     * vendor. If these requirements are not met, QuickBooks Desktop will not record
     * the transaction.
     */
    entityId?: string;

    /**
     * A memo or note for this journal debit line.
     */
    memo?: string;

    /**
     * The sales-tax item used to calculate the actual tax amount for this journal
     * debit line's transactions by applying a specific tax rate collected for a single
     * tax agency. Unlike `salesTaxCode`, which only indicates general taxability, this
     * field drives the actual tax calculation and reporting.
     */
    salesTaxItemId?: string;
  }
}

export interface JournalEntryRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface JournalEntryUpdateParams {
  /**
   * Body param: The current revision number of the journal entry object you are
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
   * Body param: Indicates whether the amounts in this journal entry were entered in
   * the company's home currency rather than a foreign currency. When `true`, amounts
   * are in the home currency regardless of the `currency` field.
   */
  areAmountsEnteredInHomeCurrency?: boolean;

  /**
   * Body param: The journal entry's currency. For built-in currencies, the name and
   * code are standard international values. For user-defined currencies, all values
   * are editable.
   */
  currencyId?: string;

  /**
   * Body param: The market exchange rate between this journal entry's currency and
   * the home currency in QuickBooks at the time of this transaction. Represented as
   * a decimal value (e.g., 1.2345 for 1 EUR = 1.2345 USD if USD is the home
   * currency).
   */
  exchangeRate?: number;

  /**
   * Body param: Indicates whether this journal entry is an adjustment entry. When
   * `true`, QuickBooks retains the original entry information to maintain an audit
   * trail of the adjustments.
   */
  isAdjustment?: boolean;

  /**
   * Body param: The journal entry's credit and debit lines.
   *
   * **IMPORTANT:** When updating journal entries, you must include ALL existing
   * journal lines (both credit and debit) in your update request, even if you only
   * want to modify a single line. QuickBooks will automatically delete any existing
   * lines that are not included in the update request, which is why all lines must
   * be provided in a single array when updating.
   */
  lines?: Array<JournalEntryUpdateParams.Line>;

  /**
   * Body param: The case-sensitive user-defined reference number for this journal
   * entry, which can be used to identify the transaction in QuickBooks. This value
   * is not required to be unique and can be arbitrarily changed by the QuickBooks
   * user.
   */
  refNumber?: string;

  /**
   * Body param: The date of this journal entry, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate?: string;
}

export namespace JournalEntryUpdateParams {
  export interface Line {
    /**
     * The QuickBooks-assigned unique identifier of an existing journal line you wish
     * to retain or update.
     *
     * **IMPORTANT**: Set this field to `-1` for new journal lines you wish to add.
     */
    id: string;

    /**
     * The account to which this journal line is being credited or debited.
     */
    accountId?: string;

    /**
     * The monetary amount of this journal line, represented as a decimal string.
     */
    amount?: string;

    /**
     * The billing status of this journal line.
     */
    billingStatus?: 'billable' | 'has_been_billed' | 'not_billable';

    /**
     * The journal line's class. Classes can be used to categorize objects into
     * meaningful segments, such as department, location, or type of work. In
     * QuickBooks, class tracking is off by default. If a class is specified for the
     * entire parent transaction, it is automatically applied to all journal lines
     * unless overridden here, at the transaction line level.
     */
    classId?: string;

    /**
     * The customer, vendor, employee, or other entity associated with this journal
     * line.
     *
     * **IMPORTANT**: If the journal line's `account` is an Accounts Receivable (A/R)
     * account, this field must refer to a customer. If the journal line's `account` is
     * an Accounts Payable (A/P) account, this field must refer to a vendor. If these
     * requirements are not met, QuickBooks Desktop will not record the transaction.
     */
    entityId?: string;

    /**
     * The type of journal line (debit or credit).
     */
    journalLineType?: 'debit' | 'credit';

    /**
     * A memo or note for this journal line.
     */
    memo?: string;

    /**
     * The sales-tax item used to calculate the actual tax amount for this journal
     * line's transactions by applying a specific tax rate collected for a single tax
     * agency. Unlike `salesTaxCode`, which only indicates general taxability, this
     * field drives the actual tax calculation and reporting.
     */
    salesTaxItemId?: string;
  }
}

export interface JournalEntryListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for journal entries associated with these accounts.
   */
  accountIds?: Array<string>;

  /**
   * Query param: Filter for journal entries in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for journal entries associated with these entities
   * (customers, vendors, employees, etc.).
   */
  entityIds?: Array<string>;

  /**
   * Query param: Filter for specific journal entries by their QuickBooks-assigned
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
   * Query param: Filter for journal entries whose `refNumber` contains this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberStartsWith` or `refNumberEndsWith`.
   */
  refNumberContains?: string;

  /**
   * Query param: Filter for journal entries whose `refNumber` ends with this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberContains` or `refNumberStartsWith`.
   */
  refNumberEndsWith?: string;

  /**
   * Query param: Filter for journal entries whose `refNumber` is greater than or
   * equal to this value. If omitted, the range will begin with the first number of
   * the list. Uses a numerical comparison for values that contain only digits;
   * otherwise, uses a lexicographical comparison.
   */
  refNumberFrom?: string;

  /**
   * Query param: Filter for specific journal entries by their ref-number(s),
   * case-sensitive. In QuickBooks, ref-numbers are not required to be unique and can
   * be arbitrarily changed by the QuickBooks user.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  refNumbers?: Array<string>;

  /**
   * Query param: Filter for journal entries whose `refNumber` starts with this
   * substring. NOTE: If you use this parameter, you cannot also use
   * `refNumberContains` or `refNumberEndsWith`.
   */
  refNumberStartsWith?: string;

  /**
   * Query param: Filter for journal entries whose `refNumber` is less than or equal
   * to this value. If omitted, the range will end with the last number of the list.
   * Uses a numerical comparison for values that contain only digits; otherwise, uses
   * a lexicographical comparison.
   */
  refNumberTo?: string;

  /**
   * Query param: Filter for journal entries created on or after this date, in ISO
   * 8601 format (YYYY-MM-DD).
   */
  transactionDateFrom?: string;

  /**
   * Query param: Filter for journal entries created on or before this date, in ISO
   * 8601 format (YYYY-MM-DD).
   */
  transactionDateTo?: string;

  /**
   * Query param: Filter for journal entries updated on or after this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for journal entries updated on or before this date and time,
   * in ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date
   * (YYYY-MM-DD), the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

JournalEntries.JournalEntriesCursorPage = JournalEntriesCursorPage;

export declare namespace JournalEntries {
  export {
    type JournalEntry as JournalEntry,
    JournalEntriesCursorPage as JournalEntriesCursorPage,
    type JournalEntryCreateParams as JournalEntryCreateParams,
    type JournalEntryRetrieveParams as JournalEntryRetrieveParams,
    type JournalEntryUpdateParams as JournalEntryUpdateParams,
    type JournalEntryListParams as JournalEntryListParams,
  };
}
