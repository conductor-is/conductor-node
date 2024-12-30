// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class Transfers extends APIResource {
  /**
   * Creates a new transfer.
   */
  create(params: TransferCreateParams, options?: Core.RequestOptions): Core.APIPromise<Transfer> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/transfers', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a transfer by ID.
   */
  retrieve(
    id: string,
    params: TransferRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Transfer> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/transfers/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing transfer.
   */
  update(id: string, params: TransferUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Transfer> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/transfers/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of transfers. Use the `cursor` parameter to paginate through the
   * results.
   */
  list(
    params: TransferListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransfersCursorPage, Transfer> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/transfers', TransfersCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class TransfersCursorPage extends CursorPage<Transfer> {}

export interface Transfer {
  /**
   * The unique identifier assigned by QuickBooks to this transfer. This ID is unique
   * across all transaction types.
   */
  id: string;

  /**
   * The monetary amount of this transfer, represented as a decimal string.
   */
  amount: string;

  /**
   * The transfer's class. Classes can be used to categorize objects into meaningful
   * segments, such as department, location, or type of work. In QuickBooks, class
   * tracking is off by default.
   */
  class: Transfer.Class | null;

  /**
   * The date and time when this transfer was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * A memo or note for this transfer.
   */
  memo: string | null;

  /**
   * The type of object. This value is always `"qbd_transfer"`.
   */
  objectType: 'qbd_transfer';

  /**
   * The current revision number of this transfer object, which changes each time the
   * object is modified. When updating this object, you must provide the most recent
   * `revisionNumber` to ensure you're working with the latest data; otherwise, the
   * update will return an error.
   */
  revisionNumber: string;

  /**
   * The account from which money will be transferred.
   */
  sourceAccount: Transfer.SourceAccount;

  /**
   * The balance of the account from which money will be transferred.
   */
  sourceAccountBalance: string | null;

  /**
   * The account to which money will be transferred.
   */
  targetAccount: Transfer.TargetAccount;

  /**
   * The balance of the account to which money will be transferred.
   */
  targetAccountBalance: string | null;

  /**
   * The date of this transfer, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * The date and time when this transfer was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace Transfer {
  /**
   * The transfer's class. Classes can be used to categorize objects into meaningful
   * segments, such as department, location, or type of work. In QuickBooks, class
   * tracking is off by default.
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
   * The account from which money will be transferred.
   */
  export interface SourceAccount {
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
   * The account to which money will be transferred.
   */
  export interface TargetAccount {
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

export interface TransferCreateParams {
  /**
   * Body param: The monetary amount of this transfer, represented as a decimal
   * string.
   */
  amount: string;

  /**
   * Body param: The account from which money will be transferred.
   */
  sourceAccountId: string;

  /**
   * Body param: The account to which money will be transferred.
   */
  targetAccountId: string;

  /**
   * Body param: The date of this transfer, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The transfer's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: A memo or note for this transfer.
   */
  memo?: string;
}

export interface TransferRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface TransferUpdateParams {
  /**
   * Body param: The current revision number of the transfer object you are updating,
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
   * Body param: The monetary amount of this transfer, represented as a decimal
   * string.
   */
  amount?: string;

  /**
   * Body param: The transfer's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: A memo or note for this transfer.
   */
  memo?: string;

  /**
   * Body param: The account from which money will be transferred.
   */
  sourceAccountId?: string;

  /**
   * Body param: The account to which money will be transferred.
   */
  targetAccountId?: string;

  /**
   * Body param: The date of this transfer, in ISO 8601 format (YYYY-MM-DD).
   */
  transactionDate?: string;
}

export interface TransferListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for specific transfers by their QuickBooks-assigned unique
   * identifier(s).
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  ids?: Array<string>;

  /**
   * Query param: Filter for transfers created on or after this date, in ISO 8601
   * format (YYYY-MM-DD).
   */
  transactionDateFrom?: string;

  /**
   * Query param: Filter for transfers created on or before this date, in ISO 8601
   * format (YYYY-MM-DD).
   */
  transactionDateTo?: string;

  /**
   * Query param: Filter for transfers updated on or after this date and time, in ISO
   * 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD), the
   * time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for transfers updated on or before this date and time, in
   * ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD),
   * the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

Transfers.TransfersCursorPage = TransfersCursorPage;

export declare namespace Transfers {
  export {
    type Transfer as Transfer,
    TransfersCursorPage as TransfersCursorPage,
    type TransferCreateParams as TransferCreateParams,
    type TransferRetrieveParams as TransferRetrieveParams,
    type TransferUpdateParams as TransferUpdateParams,
    type TransferListParams as TransferListParams,
  };
}
