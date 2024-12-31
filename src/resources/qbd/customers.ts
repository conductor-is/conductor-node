// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class Customers extends APIResource {
  /**
   * Creates a new customer.
   */
  create(params: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<Customer> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/customers', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a customer by ID.
   */
  retrieve(
    id: string,
    params: CustomerRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Customer> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/customers/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing customer.
   */
  update(id: string, params: CustomerUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Customer> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/customers/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of customers. Use the `cursor` parameter to paginate through the
   * results.
   */
  list(
    params: CustomerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomersCursorPage, Customer> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/customers', CustomersCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class CustomersCursorPage extends CursorPage<Customer> {}

export interface Customer {
  /**
   * The unique identifier assigned by QuickBooks to this customer. This ID is unique
   * across all customers but not across different QuickBooks object types.
   */
  id: string;

  /**
   * The customer's account number, which appears in the QuickBooks chart of
   * accounts, reports, and graphs. Note that if the "Use Account Numbers" preference
   * is turned off in QuickBooks, the account number may not be visible in the user
   * interface, but it can still be set and retrieved through the API.
   */
  accountNumber: string | null;

  /**
   * Additional alternate contacts for this customer.
   */
  additionalContacts: Array<Customer.AdditionalContact>;

  /**
   * Additional notes about this customer.
   */
  additionalNotes: Array<Customer.AdditionalNote>;

  /**
   * The name of a alternate contact person for this customer.
   */
  alternateContact: string | null;

  /**
   * The customer's alternate telephone number.
   */
  alternatePhone: string | null;

  /**
   * A list of additional shipping addresses for this customer. Useful when the
   * customer has multiple shipping locations.
   */
  alternateShippingAddresses: Array<Customer.AlternateShippingAddress>;

  /**
   * The current balance owed by this customer, excluding balances from any jobs
   * (i.e., sub-customers), represented as a decimal string. Compare with
   * `totalBalance`. A positive number indicates money owed by the customer.
   */
  balance: string | null;

  /**
   * The customer's billing address.
   */
  billingAddress: Customer.BillingAddress | null;

  /**
   * An email address to carbon copy (CC) on communications with this customer.
   */
  ccEmail: string | null;

  /**
   * The customer's class. Classes can be used to categorize objects into meaningful
   * segments, such as department, location, or type of work. In QuickBooks, class
   * tracking is off by default.
   */
  class: Customer.Class | null;

  /**
   * The name of the company associated with this customer. This name is used on
   * invoices, checks, and other forms.
   */
  companyName: string | null;

  /**
   * The name of the primary contact person for this customer.
   */
  contact: string | null;

  /**
   * The date and time when this customer was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The customer's credit card information, including card type, number, and
   * expiration date, used for processing credit card payments.
   */
  creditCard: Customer.CreditCard | null;

  /**
   * The customer's credit limit, represented as a decimal string. This is the
   * maximum amount of money this customer can spend before being billed. If `null`,
   * there is no credit limit.
   */
  creditLimit: string | null;

  /**
   * The customer's currency. For built-in currencies, the name and code are standard
   * international values. For user-defined currencies, all values are editable.
   */
  currency: Customer.Currency | null;

  /**
   * Additional custom contact fields for this customer, such as phone numbers or
   * email addresses.
   */
  customContactFields: Array<Customer.CustomContactField>;

  /**
   * The customer's type, used for categorizing customers into meaningful segments,
   * such as industry or region.
   */
  customerType: Customer.CustomerType | null;

  /**
   * The custom fields for the customer object, added as user-defined data
   * extensions, not included in the standard QuickBooks object.
   */
  customFields: Array<Customer.CustomField>;

  /**
   * The customer's email address.
   */
  email: string | null;

  /**
   * A globally unique identifier (GUID) you, the developer, can provide for tracking
   * this object in your external system.
   */
  externalId: string | null;

  /**
   * The customer's fax number.
   */
  fax: string | null;

  /**
   * The first name of the contact person for this customer.
   */
  firstName: string | null;

  /**
   * The case-insensitive fully-qualified unique name of this customer, formed by
   * combining the names of its hierarchical parent objects with its own `name`,
   * separated by colons. For example, if a customer is under "ABC Corporation" and
   * has the `name` "Website Redesign Project", its `fullName` would be "ABC
   * Corporation:Website Redesign Project".
   *
   * **NOTE**: Unlike `name`, `fullName` is guaranteed to be unique across all
   * customer objects. However, `fullName` can still be arbitrarily changed by the
   * QuickBooks user when they modify the underlying `name` field.
   *
   * **IMPORTANT**: If this object is a job (i.e., a sub-customer), this value would
   * likely be the job's `name` prefixed by the customer's `name`.
   */
  fullName: string;

  /**
   * Indicates whether this customer is active. Inactive objects are typically hidden
   * from views and reports in QuickBooks.
   */
  isActive: boolean;

  /**
   * A brief description of this customer's job, if this object is a job (i.e.,
   * sub-customer).
   */
  jobDescription: string | null;

  /**
   * The actual completion date of this customer's job, if applicable, in ISO 8601
   * format (YYYY-MM-DD).
   */
  jobEndDate: string | null;

  /**
   * The projected completion date for this customer's job, if applicable, in ISO
   * 8601 format (YYYY-MM-DD).
   */
  jobProjectedEndDate: string | null;

  /**
   * The date when work on this customer's job began, if applicable, in ISO 8601
   * format (YYYY-MM-DD).
   */
  jobStartDate: string | null;

  /**
   * The status of this customer's job, if this object is a job (i.e., sub-customer).
   */
  jobStatus: 'awarded' | 'closed' | 'in_progress' | 'none' | 'not_awarded' | 'pending' | null;

  /**
   * The job title of the contact person for this customer.
   */
  jobTitle: string | null;

  /**
   * The type or category of this customer's job, if this object is a job (i.e.,
   * sub-customer). Useful for classifying into meaningful segments (e.g., repair,
   * installation, consulting).
   */
  jobType: Customer.JobType | null;

  /**
   * The last name of the contact person for this customer.
   */
  lastName: string | null;

  /**
   * The middle name of the contact person for this customer.
   */
  middleName: string | null;

  /**
   * The case-insensitive name of this customer. Not guaranteed to be unique because
   * it does not include the names of its hierarchical parent objects like `fullName`
   * does. For example, two customers could both have the `name` "Website Redesign
   * Project", but they could have unique `fullName` values, such as "ABC
   * Corporation:Website Redesign Project" and "Baker:Website Redesign Project".
   * Maximum length: 41 characters.
   */
  name: string;

  /**
   * Additional notes or comments about this customer.
   */
  note: string | null;

  /**
   * The type of object. This value is always `"qbd_customer"`.
   */
  objectType: 'qbd_customer';

  /**
   * The parent customer one level above this one in the hierarchy. For example, if
   * this customer has a `fullName` of "ABC Corporation:Website Redesign Project",
   * its parent has a `fullName` of "ABC Corporation". If this customer is at the top
   * level, this field will be `null`.
   */
  parent: Customer.Parent | null;

  /**
   * The customer's primary telephone number.
   */
  phone: string | null;

  /**
   * The preferred method for delivering invoices and other documents to this
   * customer.
   */
  preferredDeliveryMethod: 'email' | 'mail' | 'none' | null;

  /**
   * The customer's preferred payment method (e.g., cash, check, credit card).
   */
  preferredPaymentMethod: Customer.PreferredPaymentMethod | null;

  /**
   * The customer's custom price level that QuickBooks automatically applies to
   * calculate item rates in new transactions (e.g., invoices, sales receipts, sales
   * orders, and credit memos) for this customer. While applied automatically, this
   * can be overridden when creating individual transactions. Note that transactions
   * will not show the price level itself, only the final `rate` calculated from it.
   */
  priceLevel: Customer.PriceLevel | null;

  /**
   * The customer's resale number, used if the customer is purchasing items for
   * resale. This number does not affect sales tax calculations or reports in
   * QuickBooks.
   */
  resaleNumber: string | null;

  /**
   * The current revision number of this customer object, which changes each time the
   * object is modified. When updating this object, you must provide the most recent
   * `revisionNumber` to ensure you're working with the latest data; otherwise, the
   * update will return an error.
   */
  revisionNumber: string;

  /**
   * The customer's sales representative. Sales representatives can be employees,
   * vendors, or other names in QuickBooks.
   */
  salesRepresentative: Customer.SalesRepresentative | null;

  /**
   * The default sales-tax code for transactions with this customer, determining
   * whether the transactions are taxable or non-taxable. This can be overridden at
   * the transaction or transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCode: Customer.SalesTaxCode | null;

  /**
   * The country for which sales tax is collected for this customer.
   */
  salesTaxCountry: 'australia' | 'canada' | 'uk' | 'us' | null;

  /**
   * The sales-tax item used to calculate the actual tax amount for this customer's
   * transactions by applying a specific tax rate collected for a single tax agency.
   * Unlike `salesTaxCode`, which only indicates general taxability, this field
   * drives the actual tax calculation and reporting.
   */
  salesTaxItem: Customer.SalesTaxItem | null;

  /**
   * The formal salutation title that precedes the name of the contact person for
   * this customer, such as "Mr.", "Ms.", or "Dr.".
   */
  salutation: string | null;

  /**
   * The customer's shipping address.
   */
  shippingAddress: Customer.ShippingAddress | null;

  /**
   * The depth level of this customer in the hierarchy. A top-level customer has a
   * `sublevel` of 0; each subsequent sublevel increases this number by 1. For
   * example, a customer with a `fullName` of "ABC Corporation:Website Redesign
   * Project" would have a `sublevel` of 1. When `sublevel` is 0, this object is a
   * customer; when `sublevel` is greater than 0, this object is typically a job
   * (i.e., a sub-customer).
   */
  sublevel: number;

  /**
   * The customer's tax registration number, for use in Canada or the UK.
   */
  taxRegistrationNumber: string | null;

  /**
   * The customer's payment terms, defining when payment is due and any applicable
   * discounts.
   */
  terms: Customer.Terms | null;

  /**
   * The combined balance of this customer and all of this customer's jobs (i.e.,
   * sub-customers), represented as a decimal string. If there are no sub-customers,
   * `totalBalance` and `balance` are equal. A positive number indicates money owed
   * by the customer.
   */
  totalBalance: string | null;

  /**
   * The date and time when this customer was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;
}

export namespace Customer {
  export interface AdditionalContact {
    /**
     * The unique identifier assigned by QuickBooks to this contact. This ID is unique
     * across all contacts but not across different QuickBooks object types.
     */
    id: string;

    /**
     * The date and time when this contact was created, in ISO 8601 format
     * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
     * in QuickBooks.
     */
    createdAt: string;

    /**
     * Additional custom contact fields for this contact, such as phone numbers or
     * email addresses.
     */
    customContactFields: Array<AdditionalContact.CustomContactField>;

    /**
     * The contact's first name.
     */
    firstName: string;

    /**
     * The contact's job title.
     */
    jobTitle: string | null;

    /**
     * The contact's last name.
     */
    lastName: string | null;

    /**
     * The contact's middle name.
     */
    middleName: string | null;

    /**
     * The contact's full name.
     */
    name: string | null;

    /**
     * The type of object. This value is always `"qbd_contact"`.
     */
    objectType: 'qbd_contact';

    /**
     * The current revision number of this contact object, which changes each time the
     * object is modified. When updating this object, you must provide the most recent
     * `revisionNumber` to ensure you're working with the latest data; otherwise, the
     * update will return an error.
     */
    revisionNumber: string;

    /**
     * The contact's formal salutation title that precedes their name, such as "Mr.",
     * "Ms.", or "Dr.".
     */
    salutation: string | null;

    /**
     * The date and time when this contact was last updated, in ISO 8601 format
     * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
     * in QuickBooks.
     */
    updatedAt: string;
  }

  export namespace AdditionalContact {
    export interface CustomContactField {
      /**
       * The name of the custom contact field (e.g., "old address", "secondary phone").
       */
      name: string;

      /**
       * The value of the custom contact field.
       */
      value: string;
    }
  }

  export interface AdditionalNote {
    /**
     * The auto-incrementing identifier assigned by QuickBooks to this note.
     */
    id: number;

    /**
     * The date this note was last updated, in ISO 8601 format (YYYY-MM-DD).
     */
    date: string;

    /**
     * The text of this note.
     */
    note: string;
  }

  export interface AlternateShippingAddress {
    /**
     * The city, district, suburb, town, or village name of the shipping address.
     */
    city: string | null;

    /**
     * The country name of the shipping address.
     */
    country: string | null;

    /**
     * Indicates whether this shipping address is the default shipping address.
     */
    isDefaultShippingAddress: boolean | null;

    /**
     * The first line of the shipping address (e.g., street, PO Box, or company name).
     */
    line1: string | null;

    /**
     * The second line of the shipping address, if needed (e.g., apartment, suite,
     * unit, or building).
     */
    line2: string | null;

    /**
     * The third line of the shipping address, if needed.
     */
    line3: string | null;

    /**
     * The fourth line of the shipping address, if needed.
     */
    line4: string | null;

    /**
     * The fifth line of the shipping address, if needed.
     */
    line5: string | null;

    /**
     * The case-insensitive unique name of this shipping address, unique across all
     * shipping addresses.
     *
     * **NOTE**: Shipping addresses do not have a `fullName` field because they are not
     * hierarchical objects, which is why `name` is unique for them but not for objects
     * that have parents. Maximum length: 41 characters.
     */
    name: string;

    /**
     * A note written at the bottom of the shipping address in the form in which it
     * appears, such as the invoice form.
     */
    note: string | null;

    /**
     * The postal code or ZIP code of the shipping address.
     */
    postalCode: string | null;

    /**
     * The state, county, province, or region name of the shipping address.
     */
    state: string | null;
  }

  /**
   * The customer's billing address.
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
   * The customer's class. Classes can be used to categorize objects into meaningful
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
   * The customer's credit card information, including card type, number, and
   * expiration date, used for processing credit card payments.
   */
  export interface CreditCard {
    /**
     * The card's billing address.
     */
    address: string | null;

    /**
     * The month when the credit card expires.
     */
    expirationMonth: number | null;

    /**
     * The year when the credit card expires.
     */
    expirationYear: number | null;

    /**
     * The cardholder's name on the card.
     */
    name: string | null;

    /**
     * The credit card number. Must be masked with lower case "x" and no dashes.
     */
    number: string | null;

    /**
     * The card's billing address ZIP or postal code.
     */
    postalCode: string | null;
  }

  /**
   * The customer's currency. For built-in currencies, the name and code are standard
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

  export interface CustomContactField {
    /**
     * The name of the custom contact field (e.g., "old address", "secondary phone").
     */
    name: string;

    /**
     * The value of the custom contact field.
     */
    value: string;
  }

  /**
   * The customer's type, used for categorizing customers into meaningful segments,
   * such as industry or region.
   */
  export interface CustomerType {
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
   * The type or category of this customer's job, if this object is a job (i.e.,
   * sub-customer). Useful for classifying into meaningful segments (e.g., repair,
   * installation, consulting).
   */
  export interface JobType {
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
   * The parent customer one level above this one in the hierarchy. For example, if
   * this customer has a `fullName` of "ABC Corporation:Website Redesign Project",
   * its parent has a `fullName` of "ABC Corporation". If this customer is at the top
   * level, this field will be `null`.
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
   * The customer's preferred payment method (e.g., cash, check, credit card).
   */
  export interface PreferredPaymentMethod {
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
   * The customer's custom price level that QuickBooks automatically applies to
   * calculate item rates in new transactions (e.g., invoices, sales receipts, sales
   * orders, and credit memos) for this customer. While applied automatically, this
   * can be overridden when creating individual transactions. Note that transactions
   * will not show the price level itself, only the final `rate` calculated from it.
   */
  export interface PriceLevel {
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
   * The customer's sales representative. Sales representatives can be employees,
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
   * The default sales-tax code for transactions with this customer, determining
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
   * The sales-tax item used to calculate the actual tax amount for this customer's
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
   * The customer's shipping address.
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
   * The customer's payment terms, defining when payment is due and any applicable
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

export interface CustomerCreateParams {
  /**
   * Body param: The case-insensitive name of this customer. Not guaranteed to be
   * unique because it does not include the names of its hierarchical parent objects
   * like `fullName` does. For example, two customers could both have the `name`
   * "Website Redesign Project", but they could have unique `fullName` values, such
   * as "ABC Corporation:Website Redesign Project" and "Baker:Website Redesign
   * Project". Maximum length: 41 characters.
   */
  name: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The customer's account number, which appears in the QuickBooks chart
   * of accounts, reports, and graphs. Note that if the "Use Account Numbers"
   * preference is turned off in QuickBooks, the account number may not be visible in
   * the user interface, but it can still be set and retrieved through the API.
   */
  accountNumber?: string;

  /**
   * Body param: Additional alternate contacts for this customer.
   */
  additionalContacts?: Array<CustomerCreateParams.AdditionalContact>;

  /**
   * Body param: Additional notes about this customer.
   */
  additionalNotes?: Array<CustomerCreateParams.AdditionalNote>;

  /**
   * Body param: The name of a alternate contact person for this customer.
   */
  alternateContact?: string;

  /**
   * Body param: The customer's alternate telephone number.
   */
  alternatePhone?: string;

  /**
   * Body param: A list of additional shipping addresses for this customer. Useful
   * when the customer has multiple shipping locations.
   */
  alternateShippingAddresses?: Array<CustomerCreateParams.AlternateShippingAddress>;

  /**
   * Body param: The customer's billing address.
   */
  billingAddress?: CustomerCreateParams.BillingAddress;

  /**
   * Body param: An email address to carbon copy (CC) on communications with this
   * customer.
   */
  ccEmail?: string;

  /**
   * Body param: The customer's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: The name of the company associated with this customer. This name is
   * used on invoices, checks, and other forms.
   */
  companyName?: string;

  /**
   * Body param: The name of the primary contact person for this customer.
   */
  contact?: string;

  /**
   * Body param: The customer's credit card information, including card type, number,
   * and expiration date, used for processing credit card payments.
   */
  creditCard?: CustomerCreateParams.CreditCard;

  /**
   * Body param: The customer's credit limit, represented as a decimal string. This
   * is the maximum amount of money this customer can spend before being billed. If
   * `null`, there is no credit limit.
   */
  creditLimit?: string;

  /**
   * Body param: The customer's currency. For built-in currencies, the name and code
   * are standard international values. For user-defined currencies, all values are
   * editable.
   */
  currencyId?: string;

  /**
   * Body param: Additional custom contact fields for this customer, such as phone
   * numbers or email addresses.
   */
  customContactFields?: Array<CustomerCreateParams.CustomContactField>;

  /**
   * Body param: The customer's type, used for categorizing customers into meaningful
   * segments, such as industry or region.
   */
  customerTypeId?: string;

  /**
   * Body param: The customer's email address.
   */
  email?: string;

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
   * Body param: The customer's fax number.
   */
  fax?: string;

  /**
   * Body param: The first name of the contact person for this customer.
   */
  firstName?: string;

  /**
   * Body param: Indicates whether this customer is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: A brief description of this customer's job, if this object is a job
   * (i.e., sub-customer).
   */
  jobDescription?: string;

  /**
   * Body param: The actual completion date of this customer's job, if applicable, in
   * ISO 8601 format (YYYY-MM-DD).
   */
  jobEndDate?: string;

  /**
   * Body param: The projected completion date for this customer's job, if
   * applicable, in ISO 8601 format (YYYY-MM-DD).
   */
  jobProjectedEndDate?: string;

  /**
   * Body param: The date when work on this customer's job began, if applicable, in
   * ISO 8601 format (YYYY-MM-DD).
   */
  jobStartDate?: string;

  /**
   * Body param: The status of this customer's job, if this object is a job (i.e.,
   * sub-customer).
   */
  jobStatus?: 'awarded' | 'closed' | 'in_progress' | 'none' | 'not_awarded' | 'pending';

  /**
   * Body param: The job title of the contact person for this customer.
   */
  jobTitle?: string;

  /**
   * Body param: The type or category of this customer's job, if this object is a job
   * (i.e., sub-customer). Useful for classifying into meaningful segments (e.g.,
   * repair, installation, consulting).
   */
  jobTypeId?: string;

  /**
   * Body param: The last name of the contact person for this customer.
   */
  lastName?: string;

  /**
   * Body param: The middle name of the contact person for this customer.
   */
  middleName?: string;

  /**
   * Body param: Additional notes or comments about this customer.
   */
  note?: string;

  /**
   * Body param: The opening balance of this customer's account, indicating the
   * amount owed by this customer, represented as a decimal string.
   */
  openingBalance?: string;

  /**
   * Body param: The date of the opening balance of this customer, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  openingBalanceDate?: string;

  /**
   * Body param: The parent customer one level above this one in the hierarchy. For
   * example, if this customer has a `fullName` of "ABC Corporation:Website Redesign
   * Project", its parent has a `fullName` of "ABC Corporation". If this customer is
   * at the top level, this field will be `null`.
   */
  parentId?: string;

  /**
   * Body param: The customer's primary telephone number.
   */
  phone?: string;

  /**
   * Body param: The preferred method for delivering invoices and other documents to
   * this customer.
   */
  preferredDeliveryMethod?: 'email' | 'mail' | 'none';

  /**
   * Body param: The customer's preferred payment method (e.g., cash, check, credit
   * card).
   */
  preferredPaymentMethodId?: string;

  /**
   * Body param: The customer's custom price level that QuickBooks automatically
   * applies to calculate item rates in new transactions (e.g., invoices, sales
   * receipts, sales orders, and credit memos) for this customer. While applied
   * automatically, this can be overridden when creating individual transactions.
   * Note that transactions will not show the price level itself, only the final
   * `rate` calculated from it.
   */
  priceLevelId?: string;

  /**
   * Body param: The customer's resale number, used if the customer is purchasing
   * items for resale. This number does not affect sales tax calculations or reports
   * in QuickBooks.
   */
  resaleNumber?: string;

  /**
   * Body param: The customer's sales representative. Sales representatives can be
   * employees, vendors, or other names in QuickBooks.
   */
  salesRepresentativeId?: string;

  /**
   * Body param: The default sales-tax code for transactions with this customer,
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
   * Body param: The country for which sales tax is collected for this customer.
   */
  salesTaxCountry?: 'australia' | 'canada' | 'uk' | 'us';

  /**
   * Body param: The sales-tax item used to calculate the actual tax amount for this
   * customer's transactions by applying a specific tax rate collected for a single
   * tax agency. Unlike `salesTaxCode`, which only indicates general taxability, this
   * field drives the actual tax calculation and reporting.
   */
  salesTaxItemId?: string;

  /**
   * Body param: The formal salutation title that precedes the name of the contact
   * person for this customer, such as "Mr.", "Ms.", or "Dr.".
   */
  salutation?: string;

  /**
   * Body param: The customer's shipping address.
   */
  shippingAddress?: CustomerCreateParams.ShippingAddress;

  /**
   * Body param: The customer's tax registration number, for use in Canada or the UK.
   */
  taxRegistrationNumber?: string;

  /**
   * Body param: The customer's payment terms, defining when payment is due and any
   * applicable discounts.
   */
  termsId?: string;
}

export namespace CustomerCreateParams {
  export interface AdditionalContact {
    /**
     * The contact's first name.
     */
    firstName: string;

    /**
     * Additional custom contact fields for this contact, such as phone numbers or
     * email addresses.
     */
    customContactFields?: Array<AdditionalContact.CustomContactField>;

    /**
     * The contact's job title.
     */
    jobTitle?: string;

    /**
     * The contact's last name.
     */
    lastName?: string;

    /**
     * The contact's middle name.
     */
    middleName?: string;

    /**
     * The contact's formal salutation title that precedes their name, such as "Mr.",
     * "Ms.", or "Dr.".
     */
    salutation?: string;
  }

  export namespace AdditionalContact {
    export interface CustomContactField {
      /**
       * The name of the custom contact field (e.g., "old address", "secondary phone").
       */
      name: string;

      /**
       * The value of the custom contact field.
       */
      value: string;
    }
  }

  export interface AdditionalNote {
    /**
     * The text of this note.
     */
    note: string;
  }

  export interface AlternateShippingAddress {
    /**
     * The case-insensitive unique name of this shipping address, unique across all
     * shipping addresses.
     *
     * **NOTE**: Shipping addresses do not have a `fullName` field because they are not
     * hierarchical objects, which is why `name` is unique for them but not for objects
     * that have parents. Maximum length: 41 characters.
     */
    name: string;

    /**
     * The city, district, suburb, town, or village name of the shipping address.
     */
    city?: string;

    /**
     * The country name of the shipping address.
     */
    country?: string;

    /**
     * Indicates whether this shipping address is the default shipping address.
     */
    isDefaultShippingAddress?: boolean;

    /**
     * The first line of the shipping address (e.g., street, PO Box, or company name).
     */
    line1?: string;

    /**
     * The second line of the shipping address, if needed (e.g., apartment, suite,
     * unit, or building).
     */
    line2?: string;

    /**
     * The third line of the shipping address, if needed.
     */
    line3?: string;

    /**
     * The fourth line of the shipping address, if needed.
     */
    line4?: string;

    /**
     * The fifth line of the shipping address, if needed.
     */
    line5?: string;

    /**
     * A note written at the bottom of the shipping address in the form in which it
     * appears, such as the invoice form.
     */
    note?: string;

    /**
     * The postal code or ZIP code of the shipping address.
     */
    postalCode?: string;

    /**
     * The state, county, province, or region name of the shipping address.
     */
    state?: string;
  }

  /**
   * The customer's billing address.
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
   * The customer's credit card information, including card type, number, and
   * expiration date, used for processing credit card payments.
   */
  export interface CreditCard {
    /**
     * The card's billing address.
     */
    address?: string;

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
  }

  export interface CustomContactField {
    /**
     * The name of the custom contact field (e.g., "old address", "secondary phone").
     */
    name: string;

    /**
     * The value of the custom contact field.
     */
    value: string;
  }

  /**
   * The customer's shipping address.
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

export interface CustomerRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface CustomerUpdateParams {
  /**
   * Body param: The current revision number of the customer object you are updating,
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
   * Body param: The customer's account number, which appears in the QuickBooks chart
   * of accounts, reports, and graphs. Note that if the "Use Account Numbers"
   * preference is turned off in QuickBooks, the account number may not be visible in
   * the user interface, but it can still be set and retrieved through the API.
   */
  accountNumber?: string;

  /**
   * Body param: Additional alternate contacts for this customer.
   */
  additionalContacts?: Array<CustomerUpdateParams.AdditionalContact>;

  /**
   * Body param: Additional notes about this customer.
   */
  additionalNotes?: Array<CustomerUpdateParams.AdditionalNote>;

  /**
   * Body param: The name of a alternate contact person for this customer.
   */
  alternateContact?: string;

  /**
   * Body param: The customer's alternate telephone number.
   */
  alternatePhone?: string;

  /**
   * Body param: A list of additional shipping addresses for this customer. Useful
   * when the customer has multiple shipping locations.
   */
  alternateShippingAddresses?: Array<CustomerUpdateParams.AlternateShippingAddress>;

  /**
   * Body param: The customer's billing address.
   */
  billingAddress?: CustomerUpdateParams.BillingAddress;

  /**
   * Body param: An email address to carbon copy (CC) on communications with this
   * customer.
   */
  ccEmail?: string;

  /**
   * Body param: The customer's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: The name of the company associated with this customer. This name is
   * used on invoices, checks, and other forms.
   */
  companyName?: string;

  /**
   * Body param: The name of the primary contact person for this customer.
   */
  contact?: string;

  /**
   * Body param: The customer's credit card information, including card type, number,
   * and expiration date, used for processing credit card payments.
   */
  creditCard?: CustomerUpdateParams.CreditCard;

  /**
   * Body param: The customer's credit limit, represented as a decimal string. This
   * is the maximum amount of money this customer can spend before being billed. If
   * `null`, there is no credit limit.
   */
  creditLimit?: string;

  /**
   * Body param: The customer's currency. For built-in currencies, the name and code
   * are standard international values. For user-defined currencies, all values are
   * editable.
   */
  currencyId?: string;

  /**
   * Body param: Additional custom contact fields for this customer, such as phone
   * numbers or email addresses.
   */
  customContactFields?: Array<CustomerUpdateParams.CustomContactField>;

  /**
   * Body param: The customer's type, used for categorizing customers into meaningful
   * segments, such as industry or region.
   */
  customerTypeId?: string;

  /**
   * Body param: The customer's email address.
   */
  email?: string;

  /**
   * Body param: The customer's fax number.
   */
  fax?: string;

  /**
   * Body param: The first name of the contact person for this customer.
   */
  firstName?: string;

  /**
   * Body param: Indicates whether this customer is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: A brief description of this customer's job, if this object is a job
   * (i.e., sub-customer).
   */
  jobDescription?: string;

  /**
   * Body param: The actual completion date of this customer's job, if applicable, in
   * ISO 8601 format (YYYY-MM-DD).
   */
  jobEndDate?: string;

  /**
   * Body param: The projected completion date for this customer's job, if
   * applicable, in ISO 8601 format (YYYY-MM-DD).
   */
  jobProjectedEndDate?: string;

  /**
   * Body param: The date when work on this customer's job began, if applicable, in
   * ISO 8601 format (YYYY-MM-DD).
   */
  jobStartDate?: string;

  /**
   * Body param: The status of this customer's job, if this object is a job (i.e.,
   * sub-customer).
   */
  jobStatus?: 'awarded' | 'closed' | 'in_progress' | 'none' | 'not_awarded' | 'pending';

  /**
   * Body param: The job title of the contact person for this customer.
   */
  jobTitle?: string;

  /**
   * Body param: The type or category of this customer's job, if this object is a job
   * (i.e., sub-customer). Useful for classifying into meaningful segments (e.g.,
   * repair, installation, consulting).
   */
  jobTypeId?: string;

  /**
   * Body param: The last name of the contact person for this customer.
   */
  lastName?: string;

  /**
   * Body param: The middle name of the contact person for this customer.
   */
  middleName?: string;

  /**
   * Body param: The case-insensitive name of this customer. Not guaranteed to be
   * unique because it does not include the names of its hierarchical parent objects
   * like `fullName` does. For example, two customers could both have the `name`
   * "Website Redesign Project", but they could have unique `fullName` values, such
   * as "ABC Corporation:Website Redesign Project" and "Baker:Website Redesign
   * Project". Maximum length: 41 characters.
   */
  name?: string;

  /**
   * Body param: Additional notes or comments about this customer.
   */
  note?: string;

  /**
   * Body param: The parent customer one level above this one in the hierarchy. For
   * example, if this customer has a `fullName` of "ABC Corporation:Website Redesign
   * Project", its parent has a `fullName` of "ABC Corporation". If this customer is
   * at the top level, this field will be `null`.
   */
  parentId?: string;

  /**
   * Body param: The customer's primary telephone number.
   */
  phone?: string;

  /**
   * Body param: The preferred method for delivering invoices and other documents to
   * this customer.
   */
  preferredDeliveryMethod?: 'email' | 'mail' | 'none';

  /**
   * Body param: The customer's preferred payment method (e.g., cash, check, credit
   * card).
   */
  preferredPaymentMethodId?: string;

  /**
   * Body param: The customer's custom price level that QuickBooks automatically
   * applies to calculate item rates in new transactions (e.g., invoices, sales
   * receipts, sales orders, and credit memos) for this customer. While applied
   * automatically, this can be overridden when creating individual transactions.
   * Note that transactions will not show the price level itself, only the final
   * `rate` calculated from it.
   */
  priceLevelId?: string;

  /**
   * Body param: The customer's resale number, used if the customer is purchasing
   * items for resale. This number does not affect sales tax calculations or reports
   * in QuickBooks.
   */
  resaleNumber?: string;

  /**
   * Body param: The customer's sales representative. Sales representatives can be
   * employees, vendors, or other names in QuickBooks.
   */
  salesRepresentativeId?: string;

  /**
   * Body param: The default sales-tax code for transactions with this customer,
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
   * Body param: The country for which sales tax is collected for this customer.
   */
  salesTaxCountry?: 'australia' | 'canada' | 'uk' | 'us';

  /**
   * Body param: The sales-tax item used to calculate the actual tax amount for this
   * customer's transactions by applying a specific tax rate collected for a single
   * tax agency. Unlike `salesTaxCode`, which only indicates general taxability, this
   * field drives the actual tax calculation and reporting.
   */
  salesTaxItemId?: string;

  /**
   * Body param: The formal salutation title that precedes the name of the contact
   * person for this customer, such as "Mr.", "Ms.", or "Dr.".
   */
  salutation?: string;

  /**
   * Body param: The customer's shipping address.
   */
  shippingAddress?: CustomerUpdateParams.ShippingAddress;

  /**
   * Body param: The customer's tax registration number, for use in Canada or the UK.
   */
  taxRegistrationNumber?: string;

  /**
   * Body param: The customer's payment terms, defining when payment is due and any
   * applicable discounts.
   */
  termsId?: string;
}

export namespace CustomerUpdateParams {
  export interface AdditionalContact {
    /**
     * The QuickBooks-assigned unique identifier of the contact to update.
     */
    id: string;

    /**
     * The current revision number of the contact object you are updating, which you
     * can get by fetching the object first. Provide the most recent `revisionNumber`
     * to ensure you're working with the latest data; otherwise, the update will return
     * an error.
     */
    revisionNumber: string;

    /**
     * Additional custom contact fields for this contact, such as phone numbers or
     * email addresses.
     */
    customContactFields?: Array<AdditionalContact.CustomContactField>;

    /**
     * The contact's first name.
     */
    firstName?: string;

    /**
     * The contact's job title.
     */
    jobTitle?: string;

    /**
     * The contact's last name.
     */
    lastName?: string;

    /**
     * The contact's middle name.
     */
    middleName?: string;

    /**
     * The contact's formal salutation title that precedes their name, such as "Mr.",
     * "Ms.", or "Dr.".
     */
    salutation?: string;
  }

  export namespace AdditionalContact {
    export interface CustomContactField {
      /**
       * The name of the custom contact field (e.g., "old address", "secondary phone").
       */
      name: string;

      /**
       * The value of the custom contact field.
       */
      value: string;
    }
  }

  export interface AdditionalNote {
    /**
     * The ID of the note to update.
     */
    id: number;

    /**
     * The text of this note.
     */
    note?: string;
  }

  export interface AlternateShippingAddress {
    /**
     * The case-insensitive unique name of this shipping address, unique across all
     * shipping addresses.
     *
     * **NOTE**: Shipping addresses do not have a `fullName` field because they are not
     * hierarchical objects, which is why `name` is unique for them but not for objects
     * that have parents. Maximum length: 41 characters.
     */
    name: string;

    /**
     * The city, district, suburb, town, or village name of the shipping address.
     */
    city?: string;

    /**
     * The country name of the shipping address.
     */
    country?: string;

    /**
     * Indicates whether this shipping address is the default shipping address.
     */
    isDefaultShippingAddress?: boolean;

    /**
     * The first line of the shipping address (e.g., street, PO Box, or company name).
     */
    line1?: string;

    /**
     * The second line of the shipping address, if needed (e.g., apartment, suite,
     * unit, or building).
     */
    line2?: string;

    /**
     * The third line of the shipping address, if needed.
     */
    line3?: string;

    /**
     * The fourth line of the shipping address, if needed.
     */
    line4?: string;

    /**
     * The fifth line of the shipping address, if needed.
     */
    line5?: string;

    /**
     * A note written at the bottom of the shipping address in the form in which it
     * appears, such as the invoice form.
     */
    note?: string;

    /**
     * The postal code or ZIP code of the shipping address.
     */
    postalCode?: string;

    /**
     * The state, county, province, or region name of the shipping address.
     */
    state?: string;
  }

  /**
   * The customer's billing address.
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
   * The customer's credit card information, including card type, number, and
   * expiration date, used for processing credit card payments.
   */
  export interface CreditCard {
    /**
     * The card's billing address.
     */
    address?: string;

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
  }

  export interface CustomContactField {
    /**
     * The name of the custom contact field (e.g., "old address", "secondary phone").
     */
    name: string;

    /**
     * The value of the custom contact field.
     */
    value: string;
  }

  /**
   * The customer's shipping address.
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

export interface CustomerListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for customers of these classes. A class is a way end-users
   * can categorize customers in QuickBooks.
   */
  classIds?: Array<string>;

  /**
   * Query param: Filter for customers in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for specific customers by their full-name(s),
   * case-insensitive. Like `id`, `fullName` is a unique identifier for a customer,
   * formed by by combining the names of its parent objects with its own `name`,
   * separated by colons. For example, if a customer is under "ABC Corporation" and
   * has the `name` "Website Redesign Project", its `fullName` would be "ABC
   * Corporation:Website Redesign Project".
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  fullNames?: Array<string>;

  /**
   * Query param: Filter for specific customers by their QuickBooks-assigned unique
   * identifier(s).
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  ids?: Array<string>;

  /**
   * Query param: Filter for customers whose `name` contains this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameStartsWith` or `nameEndsWith`.
   */
  nameContains?: string;

  /**
   * Query param: Filter for customers whose `name` ends with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameStartsWith`.
   */
  nameEndsWith?: string;

  /**
   * Query param: Filter for customers whose `name` is alphabetically greater than or
   * equal to this value.
   */
  nameFrom?: string;

  /**
   * Query param: Filter for customers whose `name` starts with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameEndsWith`.
   */
  nameStartsWith?: string;

  /**
   * Query param: Filter for customers whose `name` is alphabetically less than or
   * equal to this value.
   */
  nameTo?: string;

  /**
   * Query param: Filter for customers that are active, inactive, or both.
   */
  status?: 'active' | 'all' | 'inactive';

  /**
   * Query param: Filter for customers whose `totalBalance` equals this amount,
   * represented as a decimal string. You can only use one total-balance filter at a
   * time.
   */
  totalBalance?: string;

  /**
   * Query param: Filter for customers whose `totalBalance` is greater than this
   * amount, represented as a decimal string. You can only use one total-balance
   * filter at a time.
   */
  totalBalanceGreaterThan?: string;

  /**
   * Query param: Filter for customers whose `totalBalance` is greater than or equal
   * to this amount, represented as a decimal string. You can only use one
   * total-balance filter at a time.
   */
  totalBalanceGreaterThanOrEqualTo?: string;

  /**
   * Query param: Filter for customers whose `totalBalance` is less than this amount,
   * represented as a decimal string. You can only use one total-balance filter at a
   * time.
   */
  totalBalanceLessThan?: string;

  /**
   * Query param: Filter for customers whose `totalBalance` is less than or equal to
   * this amount, represented as a decimal string. You can only use one total-balance
   * filter at a time.
   */
  totalBalanceLessThanOrEqualTo?: string;

  /**
   * Query param: Filter for customers updated on or after this date and time, in ISO
   * 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD), the
   * time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for customers updated on or before this date and time, in
   * ISO 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD),
   * the time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

Customers.CustomersCursorPage = CustomersCursorPage;

export declare namespace Customers {
  export {
    type Customer as Customer,
    CustomersCursorPage as CustomersCursorPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };
}
