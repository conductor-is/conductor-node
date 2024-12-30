// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Classes extends APIResource {
  /**
   * Creates a new class.
   */
  create(params: ClassCreateParams, options?: Core.RequestOptions): Core.APIPromise<Class> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/classes', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a class by ID.
   */
  retrieve(id: string, params: ClassRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Class> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/classes/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing class.
   */
  update(id: string, params: ClassUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Class> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/classes/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of classes. NOTE: QuickBooks Desktop does not support pagination
   * for classes; hence, there is no `cursor` parameter. Users typically have few
   * classes.
   */
  list(params: ClassListParams, options?: Core.RequestOptions): Core.APIPromise<ClassListResponse> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.get('/quickbooks-desktop/classes', {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export interface Class {
  /**
   * The unique identifier assigned by QuickBooks to this class. This ID is unique
   * across all classes but not across different QuickBooks object types.
   */
  id: string;

  /**
   * The date and time when this class was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The case-insensitive fully-qualified unique name of this class, formed by
   * combining the names of its hierarchical parent objects with its own `name`,
   * separated by colons. For example, if a class is under "Department" and has the
   * `name` "Marketing", its `fullName` would be "Department:Marketing".
   *
   * **NOTE**: Unlike `name`, `fullName` is guaranteed to be unique across all class
   * objects. However, `fullName` can still be arbitrarily changed by the QuickBooks
   * user when they modify the underlying `name` field.
   */
  fullName: string;

  /**
   * Indicates whether this class is active. Inactive objects are typically hidden
   * from views and reports in QuickBooks.
   */
  isActive: boolean;

  /**
   * The case-insensitive name of this class. Not guaranteed to be unique because it
   * does not include the names of its hierarchical parent objects like `fullName`
   * does. For example, two classes could both have the `name` "Marketing", but they
   * could have unique `fullName` values, such as "Department:Marketing" and
   * "Internal:Marketing". Maximum length: 31 characters.
   */
  name: string;

  /**
   * The type of object. This value is always `"qbd_class"`.
   */
  objectType: 'qbd_class';

  /**
   * The parent class one level above this one in the hierarchy. For example, if this
   * class has a `fullName` of "Department:Marketing", its parent has a `fullName` of
   * "Department". If this class is at the top level, this field will be `null`.
   */
  parent: Class.Parent | null;

  /**
   * The current revision number of this class object, which changes each time the
   * object is modified. When updating this object, you must provide the most recent
   * `revisionNumber` to ensure you're working with the latest data; otherwise, the
   * update will return an error.
   */
  revisionNumber: string;

  /**
   * The depth level of this class in the hierarchy. A top-level class has a
   * `sublevel` of 0; each subsequent sublevel increases this number by 1. For
   * example, a class with a `fullName` of "Department:Marketing" would have a
   * `sublevel` of 1.
   */
  sublevel: number;

  /**
   * The date and time when this class was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace Class {
  /**
   * The parent class one level above this one in the hierarchy. For example, if this
   * class has a `fullName` of "Department:Marketing", its parent has a `fullName` of
   * "Department". If this class is at the top level, this field will be `null`.
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
}

export interface ClassListResponse {
  /**
   * The array of classes.
   */
  data: Array<Class>;

  /**
   * The type of object. This value is always `"list"`.
   */
  objectType: 'list';

  /**
   * The endpoint URL where this list can be accessed.
   */
  url: string;
}

export interface ClassCreateParams {
  /**
   * Body param: The case-insensitive name of this class. Not guaranteed to be unique
   * because it does not include the names of its hierarchical parent objects like
   * `fullName` does. For example, two classes could both have the `name`
   * "Marketing", but they could have unique `fullName` values, such as
   * "Department:Marketing" and "Internal:Marketing". Maximum length: 31 characters.
   */
  name: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: Indicates whether this class is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The parent class one level above this one in the hierarchy. For
   * example, if this class has a `fullName` of "Department:Marketing", its parent
   * has a `fullName` of "Department". If this class is at the top level, this field
   * will be `null`.
   */
  parentId?: string;
}

export interface ClassRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface ClassUpdateParams {
  /**
   * Body param: The current revision number of the class object you are updating,
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
   * Body param: Indicates whether this class is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: The case-insensitive name of this class. Not guaranteed to be unique
   * because it does not include the names of its hierarchical parent objects like
   * `fullName` does. For example, two classes could both have the `name`
   * "Marketing", but they could have unique `fullName` values, such as
   * "Department:Marketing" and "Internal:Marketing". Maximum length: 31 characters.
   */
  name?: string;

  /**
   * Body param: The parent class one level above this one in the hierarchy. For
   * example, if this class has a `fullName` of "Department:Marketing", its parent
   * has a `fullName` of "Department". If this class is at the top level, this field
   * will be `null`.
   */
  parentId?: string;
}

export interface ClassListParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for specific classes by their full-name(s),
   * case-insensitive. Like `id`, `fullName` is a unique identifier for a class,
   * formed by by combining the names of its parent objects with its own `name`,
   * separated by colons. For example, if a class is under "Department" and has the
   * `name` "Marketing", its `fullName` would be "Department:Marketing".
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  fullNames?: Array<string>;

  /**
   * Query param: Filter for specific classes by their QuickBooks-assigned unique
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
   * classes. Hence, this parameter will limit the response size, but you will not be
   * able to fetch the next set of results. If needed, you can paginate by fetching
   * batches via the name-range (e.g., `nameFrom=A&nameTo=B`) query parameters.
   */
  limit?: number;

  /**
   * Query param: Filter for classes whose `name` contains this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameStartsWith` or `nameEndsWith`.
   */
  nameContains?: string;

  /**
   * Query param: Filter for classes whose `name` ends with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameStartsWith`.
   */
  nameEndsWith?: string;

  /**
   * Query param: Filter for classes whose `name` is alphabetically greater than or
   * equal to this value.
   */
  nameFrom?: string;

  /**
   * Query param: Filter for classes whose `name` starts with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameEndsWith`.
   */
  nameStartsWith?: string;

  /**
   * Query param: Filter for classes whose `name` is alphabetically less than or
   * equal to this value.
   */
  nameTo?: string;

  /**
   * Query param: Filter for classes that are active, inactive, or both.
   */
  status?: 'active' | 'all' | 'inactive';

  /**
   * Query param: Filter for classes updated on or after this date and time, in ISO
   * 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD), the
   * time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for classes updated on or before this date and time, in ISO
   * 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD), the
   * time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

export declare namespace Classes {
  export {
    type Class as Class,
    type ClassListResponse as ClassListResponse,
    type ClassCreateParams as ClassCreateParams,
    type ClassRetrieveParams as ClassRetrieveParams,
    type ClassUpdateParams as ClassUpdateParams,
    type ClassListParams as ClassListParams,
  };
}
