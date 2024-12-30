// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Accounts extends APIResource {
  /**
   * Creates a new financial account.
   */
  create(params: AccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/accounts', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves an account by ID.
   */
  retrieve(
    id: string,
    params: AccountRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Account> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/accounts/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing financial account.
   */
  update(id: string, params: AccountUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/accounts/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of accounts. NOTE: QuickBooks Desktop does not support pagination
   * for accounts; hence, there is no `cursor` parameter. Users typically have few
   * accounts.
   */
  list(params: AccountListParams, options?: Core.RequestOptions): Core.APIPromise<AccountListResponse> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.get('/quickbooks-desktop/accounts', {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export interface Account {
  /**
   * The unique identifier assigned by QuickBooks to this account. This ID is unique
   * across all accounts but not across different QuickBooks object types.
   */
  id: string;

  /**
   * The account's account number, which appears in the QuickBooks chart of accounts,
   * reports, and graphs. Note that if the "Use Account Numbers" preference is turned
   * off in QuickBooks, the account number may not be visible in the user interface,
   * but it can still be set and retrieved through the API.
   */
  accountNumber: string | null;

  /**
   * The classification of this account, indicating its purpose within the chart of
   * accounts.
   *
   * **NOTE**: You cannot create an account of type `non_posting` through the API
   * because QuickBooks creates these accounts behind the scenes.
   */
  accountType:
    | 'accounts_payable'
    | 'accounts_receivable'
    | 'bank'
    | 'cost_of_goods_sold'
    | 'credit_card'
    | 'equity'
    | 'expense'
    | 'fixed_asset'
    | 'income'
    | 'long_term_liability'
    | 'non_posting'
    | 'other_asset'
    | 'other_current_asset'
    | 'other_current_liability'
    | 'other_expense'
    | 'other_income';

  /**
   * The current balance of this account only, excluding balances from any
   * subordinate accounts, represented as a decimal string. Compare with
   * `totalBalance`. Note that income accounts and balance sheet accounts may not
   * have balances.
   */
  balance: string | null;

  /**
   * The bank account number or identifying note for this account. Access to this
   * field may be restricted based on permissions.
   */
  bankAccountNumber: string | null;

  /**
   * Indicates how this account is classified for cash flow reporting. If `none`, the
   * account has not been classified. If `not_applicable`, the account does not
   * qualify to be classified (e.g., a bank account tracking cash transactions is not
   * part of a cash flow report).
   */
  cashFlowClassification: 'financing' | 'investing' | 'none' | 'not_applicable' | 'operating' | null;

  /**
   * The date and time when this account was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The account's currency. For built-in currencies, the name and code are standard
   * international values. For user-defined currencies, all values are editable.
   */
  currency: Account.Currency | null;

  /**
   * The custom fields for the account object, added as user-defined data extensions,
   * not included in the standard QuickBooks object.
   */
  customFields: Array<Account.CustomField>;

  /**
   * A description of this account.
   */
  description: string | null;

  /**
   * The case-insensitive fully-qualified unique name of this account, formed by
   * combining the names of its hierarchical parent objects with its own `name`,
   * separated by colons. For example, if an account is under "Corporate" and has the
   * `name` "Accounts-Payable", its `fullName` would be "Corporate:Accounts-Payable".
   *
   * **NOTE**: Unlike `name`, `fullName` is guaranteed to be unique across all
   * account objects. However, `fullName` can still be arbitrarily changed by the
   * QuickBooks user when they modify the underlying `name` field.
   */
  fullName: string;

  /**
   * Indicates whether this account is active. Inactive objects are typically hidden
   * from views and reports in QuickBooks.
   */
  isActive: boolean;

  /**
   * Indicates whether this account is used for tracking taxes.
   */
  isTaxAccount: boolean | null;

  /**
   * The case-insensitive name of this account. Not guaranteed to be unique because
   * it does not include the names of its hierarchical parent objects like `fullName`
   * does. For example, two accounts could both have the `name` "Accounts-Payable",
   * but they could have unique `fullName` values, such as
   * "Corporate:Accounts-Payable" and "Finance:Accounts-Payable". Maximum length: 31
   * characters.
   */
  name: string;

  /**
   * The type of object. This value is always `"qbd_account"`.
   */
  objectType: 'qbd_account';

  /**
   * The parent account one level above this one in the hierarchy. For example, if
   * this account has a `fullName` of "Corporate:Accounts-Payable", its parent has a
   * `fullName` of "Corporate". If this account is at the top level, this field will
   * be `null`.
   */
  parent: Account.Parent | null;

  /**
   * The current revision number of this account object, which changes each time the
   * object is modified. When updating this object, you must provide the most recent
   * `revisionNumber` to ensure you're working with the latest data; otherwise, the
   * update will return an error.
   */
  revisionNumber: string;

  /**
   * The default sales-tax code for transactions with this account, determining
   * whether the transactions are taxable or non-taxable. This can be overridden at
   * the transaction or transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCode: Account.SalesTaxCode | null;

  /**
   * Indicates if this account is a special account automatically created by
   * QuickBooks for specific purposes.
   */
  specialAccountType:
    | 'accounts_payable'
    | 'accounts_receivable'
    | 'condense_item_adjustment_expenses'
    | 'cost_of_goods_sold'
    | 'direct_deposit_liabilities'
    | 'estimates'
    | 'exchange_gain_loss'
    | 'inventory_assets'
    | 'item_receipt_account'
    | 'opening_balance_equity'
    | 'payroll_expenses'
    | 'payroll_liabilities'
    | 'petty_cash'
    | 'purchase_orders'
    | 'reconciliation_differences'
    | 'retained_earnings'
    | 'sales_orders'
    | 'sales_tax_payable'
    | 'uncategorized_expenses'
    | 'uncategorized_income'
    | 'undeposited_funds'
    | null;

  /**
   * The depth level of this account in the hierarchy. A top-level account has a
   * `sublevel` of 0; each subsequent sublevel increases this number by 1. For
   * example, an account with a `fullName` of "Corporate:Accounts-Payable" would have
   * a `sublevel` of 1.
   */
  sublevel: number;

  /**
   * The account's tax line details, used for tax reporting purposes.
   */
  taxLineDetails: Account.TaxLineDetails | null;

  /**
   * The combined balance of this account and all its sub-accounts, represented as a
   * decimal string. For example, the `totalBalance` for XYZ Bank would be the total
   * of the balances of all its sub-accounts (checking, savings, and so on). If XYZ
   * Bank did not have any sub-accounts, `totalBalance` and `balance` would be the
   * same.
   */
  totalBalance: string | null;

  /**
   * The date and time when this account was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace Account {
  /**
   * The account's currency. For built-in currencies, the name and code are standard
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
   * The parent account one level above this one in the hierarchy. For example, if
   * this account has a `fullName` of "Corporate:Accounts-Payable", its parent has a
   * `fullName` of "Corporate". If this account is at the top level, this field will
   * be `null`.
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
   * The default sales-tax code for transactions with this account, determining
   * whether the transactions are taxable or non-taxable. This can be overridden at
   * the transaction or transaction-line level.
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
   * The account's tax line details, used for tax reporting purposes.
   */
  export interface TaxLineDetails {
    /**
     * The identifier of the tax line associated with this account.
     */
    taxLineId: number;

    /**
     * The name of the tax line associated with this account, as it appears on the tax
     * form.
     */
    taxLineName: string | null;
  }
}

export interface AccountListResponse {
  /**
   * The array of accounts.
   */
  data: Array<Account>;

  /**
   * The type of object. This value is always `"list"`.
   */
  objectType: 'list';

  /**
   * The endpoint URL where this list can be accessed.
   */
  url: string;
}

export interface AccountCreateParams {
  /**
   * Body param: The classification of this account, indicating its purpose within
   * the chart of accounts.
   *
   * **NOTE**: You cannot create an account of type `non_posting` through the API
   * because QuickBooks creates these accounts behind the scenes.
   */
  accountType:
    | 'accounts_payable'
    | 'accounts_receivable'
    | 'bank'
    | 'cost_of_goods_sold'
    | 'credit_card'
    | 'equity'
    | 'expense'
    | 'fixed_asset'
    | 'income'
    | 'long_term_liability'
    | 'non_posting'
    | 'other_asset'
    | 'other_current_asset'
    | 'other_current_liability'
    | 'other_expense'
    | 'other_income';

  /**
   * Body param: The case-insensitive name of this account. Not guaranteed to be
   * unique because it does not include the names of its hierarchical parent objects
   * like `fullName` does. For example, two accounts could both have the `name`
   * "Accounts-Payable", but they could have unique `fullName` values, such as
   * "Corporate:Accounts-Payable" and "Finance:Accounts-Payable". Maximum length: 31
   * characters.
   */
  name: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The account's account number, which appears in the QuickBooks chart
   * of accounts, reports, and graphs. Note that if the "Use Account Numbers"
   * preference is turned off in QuickBooks, the account number may not be visible in
   * the user interface, but it can still be set and retrieved through the API.
   */
  accountNumber?: string;

  /**
   * Body param: The bank account number or identifying note for this account. Access
   * to this field may be restricted based on permissions.
   */
  bankAccountNumber?: string;

  /**
   * Body param: The account's currency. For built-in currencies, the name and code
   * are standard international values. For user-defined currencies, all values are
   * editable.
   */
  currencyId?: string;

  /**
   * Body param: A description of this account.
   */
  description?: string;

  /**
   * Body param: Indicates whether this account is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The amount of money in, or the value of, this account as of
   * `openingBalanceDate`. On a bank statement, this would be the amount of money in
   * the account at the beginning of the statement period.
   */
  openingBalance?: string;

  /**
   * Body param: The date of the opening balance of this account, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  openingBalanceDate?: string;

  /**
   * Body param: The parent account one level above this one in the hierarchy. For
   * example, if this account has a `fullName` of "Corporate:Accounts-Payable", its
   * parent has a `fullName` of "Corporate". If this account is at the top level,
   * this field will be `null`.
   */
  parentId?: string;

  /**
   * Body param: The default sales-tax code for transactions with this account,
   * determining whether the transactions are taxable or non-taxable. This can be
   * overridden at the transaction or transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCodeId?: string;

  /**
   * Body param: The identifier of the tax line associated with this account.
   */
  taxLineId?: number;
}

export interface AccountRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface AccountUpdateParams {
  /**
   * Body param: The current revision number of the account object you are updating,
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
   * Body param: The account's account number, which appears in the QuickBooks chart
   * of accounts, reports, and graphs. Note that if the "Use Account Numbers"
   * preference is turned off in QuickBooks, the account number may not be visible in
   * the user interface, but it can still be set and retrieved through the API.
   */
  accountNumber?: string;

  /**
   * Body param: The classification of this account, indicating its purpose within
   * the chart of accounts.
   *
   * **NOTE**: You cannot create an account of type `non_posting` through the API
   * because QuickBooks creates these accounts behind the scenes.
   */
  accountType?:
    | 'accounts_payable'
    | 'accounts_receivable'
    | 'bank'
    | 'cost_of_goods_sold'
    | 'credit_card'
    | 'equity'
    | 'expense'
    | 'fixed_asset'
    | 'income'
    | 'long_term_liability'
    | 'non_posting'
    | 'other_asset'
    | 'other_current_asset'
    | 'other_current_liability'
    | 'other_expense'
    | 'other_income';

  /**
   * Body param: The bank account number or identifying note for this account. Access
   * to this field may be restricted based on permissions.
   */
  bankAccountNumber?: string;

  /**
   * Body param: The account's currency. For built-in currencies, the name and code
   * are standard international values. For user-defined currencies, all values are
   * editable.
   */
  currencyId?: string;

  /**
   * Body param: A description of this account.
   */
  description?: string;

  /**
   * Body param: Indicates whether this account is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The case-insensitive name of this account. Not guaranteed to be
   * unique because it does not include the names of its hierarchical parent objects
   * like `fullName` does. For example, two accounts could both have the `name`
   * "Accounts-Payable", but they could have unique `fullName` values, such as
   * "Corporate:Accounts-Payable" and "Finance:Accounts-Payable". Maximum length: 31
   * characters.
   */
  name?: string;

  /**
   * Body param: The amount of money in, or the value of, this account as of
   * `openingBalanceDate`. On a bank statement, this would be the amount of money in
   * the account at the beginning of the statement period.
   */
  openingBalance?: string;

  /**
   * Body param: The date of the opening balance of this account, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  openingBalanceDate?: string;

  /**
   * Body param: The parent account one level above this one in the hierarchy. For
   * example, if this account has a `fullName` of "Corporate:Accounts-Payable", its
   * parent has a `fullName` of "Corporate". If this account is at the top level,
   * this field will be `null`.
   */
  parentId?: string;

  /**
   * Body param: The default sales-tax code for transactions with this account,
   * determining whether the transactions are taxable or non-taxable. This can be
   * overridden at the transaction or transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCodeId?: string;

  /**
   * Body param: The identifier of the tax line associated with this account.
   */
  taxLineId?: number;
}

export interface AccountListParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for accounts of this type.
   */
  accountType?:
    | 'accounts_payable'
    | 'accounts_receivable'
    | 'bank'
    | 'cost_of_goods_sold'
    | 'credit_card'
    | 'equity'
    | 'expense'
    | 'fixed_asset'
    | 'income'
    | 'long_term_liability'
    | 'non_posting'
    | 'other_asset'
    | 'other_current_asset'
    | 'other_current_liability'
    | 'other_expense'
    | 'other_income';

  /**
   * Query param: Filter for accounts in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for specific accounts by their full-name(s),
   * case-insensitive. Like `id`, `fullName` is a unique identifier for an account,
   * formed by by combining the names of its parent objects with its own `name`,
   * separated by colons. For example, if an account is under "Corporate" and has the
   * `name` "Accounts-Payable", its `fullName` would be "Corporate:Accounts-Payable".
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  fullNames?: Array<string>;

  /**
   * Query param: Filter for specific accounts by their QuickBooks-assigned unique
   * identifier(s).
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  ids?: Array<string>;

  /**
   * Query param: The maximum number of objects to return.
   *
   * **IMPORTANT**: QuickBooks Desktop does not support cursor-based pagination for
   * accounts. Hence, this parameter will limit the response size, but you will not
   * be able to fetch the next set of results. If needed, you can paginate by
   * fetching batches via the name-range (e.g., `nameFrom=A&nameTo=B`) query
   * parameters.
   */
  limit?: number;

  /**
   * Query param: Filter for accounts whose `name` contains this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameStartsWith` or `nameEndsWith`.
   */
  nameContains?: string;

  /**
   * Query param: Filter for accounts whose `name` ends with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameStartsWith`.
   */
  nameEndsWith?: string;

  /**
   * Query param: Filter for accounts whose `name` is alphabetically greater than or
   * equal to this value.
   */
  nameFrom?: string;

  /**
   * Query param: Filter for accounts whose `name` starts with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameEndsWith`.
   */
  nameStartsWith?: string;

  /**
   * Query param: Filter for accounts whose `name` is alphabetically less than or
   * equal to this value.
   */
  nameTo?: string;

  /**
   * Query param: Filter for accounts that are active, inactive, or both.
   */
  status?: 'active' | 'all' | 'inactive';

  /**
   * Query param: Filter for accounts updated on or after this date and time, in ISO
   * 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD), the
   * time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for accounts updated on or before this date and time, in ISO
   * 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD), the
   * time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountListResponse as AccountListResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
  };
}
