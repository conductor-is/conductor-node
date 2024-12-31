// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class Vendors extends APIResource {
  /**
   * Creates a new vendor.
   */
  create(params: VendorCreateParams, options?: Core.RequestOptions): Core.APIPromise<Vendor> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post('/quickbooks-desktop/vendors', {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Retrieves a vendor by ID.
   */
  retrieve(id: string, params: VendorRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Vendor> {
    const { 'Conductor-End-User-Id': conductorEndUserId } = params;
    return this._client.get(`/quickbooks-desktop/vendors/${id}`, {
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Updates an existing vendor.
   */
  update(id: string, params: VendorUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Vendor> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...body } = params;
    return this._client.post(`/quickbooks-desktop/vendors/${id}`, {
      body,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }

  /**
   * Returns a list of vendors. Use the `cursor` parameter to paginate through the
   * results.
   */
  list(params: VendorListParams, options?: Core.RequestOptions): Core.PagePromise<VendorsCursorPage, Vendor> {
    const { 'Conductor-End-User-Id': conductorEndUserId, ...query } = params;
    return this._client.getAPIList('/quickbooks-desktop/vendors', VendorsCursorPage, {
      query,
      ...options,
      headers: { 'Conductor-End-User-Id': conductorEndUserId, ...options?.headers },
    });
  }
}

export class VendorsCursorPage extends CursorPage<Vendor> {}

export interface Vendor {
  /**
   * The unique identifier assigned by QuickBooks to this vendor. This ID is unique
   * across all vendors but not across different QuickBooks object types.
   */
  id: string;

  /**
   * The vendor's account number, which appears in the QuickBooks chart of accounts,
   * reports, and graphs. Note that if the "Use Account Numbers" preference is turned
   * off in QuickBooks, the account number may not be visible in the user interface,
   * but it can still be set and retrieved through the API.
   */
  accountNumber: string | null;

  /**
   * Additional alternate contacts for this vendor.
   */
  additionalContacts: Array<Vendor.AdditionalContact>;

  /**
   * Additional notes about this vendor.
   */
  additionalNotes: Array<Vendor.AdditionalNote>;

  /**
   * The name of a alternate contact person for this vendor.
   */
  alternateContact: string | null;

  /**
   * The vendor's alternate telephone number.
   */
  alternatePhone: string | null;

  /**
   * The current balance owed to this vendor, represented as a decimal string. A
   * positive number indicates money owed to the vendor.
   */
  balance: string | null;

  /**
   * The vendor's billing address.
   */
  billingAddress: Vendor.BillingAddress | null;

  /**
   * The vendor's billing rate, used to override service item rates in time tracking
   * transactions.
   */
  billingRate: Vendor.BillingRate | null;

  /**
   * An email address to carbon copy (CC) on communications with this vendor.
   */
  ccEmail: string | null;

  /**
   * The vendor's class. Classes can be used to categorize objects into meaningful
   * segments, such as department, location, or type of work. In QuickBooks, class
   * tracking is off by default.
   */
  class: Vendor.Class | null;

  /**
   * The name of the company associated with this vendor. This name is used on
   * invoices, checks, and other forms.
   */
  companyName: string | null;

  /**
   * The name of the primary contact person for this vendor.
   */
  contact: string | null;

  /**
   * The date and time when this vendor was created, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  createdAt: string;

  /**
   * The vendor's credit limit, represented as a decimal string. This is the maximum
   * amount of money that can be spent being before billed by this vendor. If `null`,
   * there is no credit limit.
   */
  creditLimit: string | null;

  /**
   * The vendor's currency. For built-in currencies, the name and code are standard
   * international values. For user-defined currencies, all values are editable.
   */
  currency: Vendor.Currency | null;

  /**
   * Additional custom contact fields for this vendor, such as phone numbers or email
   * addresses.
   */
  customContactFields: Array<Vendor.CustomContactField>;

  /**
   * The custom fields for the vendor object, added as user-defined data extensions,
   * not included in the standard QuickBooks object.
   */
  customFields: Array<Vendor.CustomField>;

  /**
   * The expense accounts to prefill when entering bills for this vendor.
   */
  defaultExpenseAccounts: Array<Vendor.DefaultExpenseAccount>;

  /**
   * The vendor's email address.
   */
  email: string | null;

  /**
   * A globally unique identifier (GUID) you, the developer, can provide for tracking
   * this object in your external system.
   */
  externalId: string | null;

  /**
   * The vendor's fax number.
   */
  fax: string | null;

  /**
   * The first name of the contact person for this vendor.
   */
  firstName: string | null;

  /**
   * Indicates whether this vendor is active. Inactive objects are typically hidden
   * from views and reports in QuickBooks.
   */
  isActive: boolean;

  /**
   * Indicates whether tax is charged on top of tax for this vendor, for use in
   * Canada or the UK.
   */
  isCompoundingTax: boolean | null;

  /**
   * Indicates whether this vendor is eligible to receive a 1099 form for tax
   * reporting purposes. When `true`, then the fields `taxId` and `billingAddress`
   * are required.
   */
  isEligibleFor1099: boolean | null;

  /**
   * Indicates whether this vendor is a sales tax agency.
   */
  isSalesTaxAgency: boolean | null;

  /**
   * Indicates whether tax is tracked on purchases for this vendor, for use in Canada
   * or the UK.
   */
  isTrackingPurchaseTax: boolean | null;

  /**
   * Indicates whether tax is tracked on sales for this vendor, for use in Canada or
   * the UK.
   */
  isTrackingSalesTax: boolean | null;

  /**
   * The job title of the contact person for this vendor.
   */
  jobTitle: string | null;

  /**
   * The last name of the contact person for this vendor.
   */
  lastName: string | null;

  /**
   * The middle name of the contact person for this vendor.
   */
  middleName: string | null;

  /**
   * The case-insensitive unique name of this vendor, unique across all vendors.
   *
   * **NOTE**: Vendors do not have a `fullName` field because they are not
   * hierarchical objects, which is why `name` is unique for them but not for objects
   * that have parents. Maximum length: 41 characters.
   */
  name: string;

  /**
   * The vendor's name as it should appear on checks issued to this vendor.
   */
  nameOnCheck: string | null;

  /**
   * Additional notes or comments about this vendor.
   */
  note: string | null;

  /**
   * The type of object. This value is always `"qbd_vendor"`.
   */
  objectType: 'qbd_vendor';

  /**
   * The vendor's primary telephone number.
   */
  phone: string | null;

  /**
   * The account used for tracking taxes on purchases for this vendor, for use in
   * Canada or the UK.
   */
  purchaseTaxAccount: Vendor.PurchaseTaxAccount | null;

  /**
   * The vendor's tax reporting period, for use in Canada or the UK.
   */
  reportingPeriod: 'monthly' | 'quarterly' | null;

  /**
   * The current revision number of this vendor object, which changes each time the
   * object is modified. When updating this object, you must provide the most recent
   * `revisionNumber` to ensure you're working with the latest data; otherwise, the
   * update will return an error.
   */
  revisionNumber: string;

  /**
   * The account used for tracking taxes on sales for this vendor, for use in Canada
   * or the UK.
   */
  salesTaxAccount: Vendor.SalesTaxAccount | null;

  /**
   * The default sales-tax code for transactions with this vendor, determining
   * whether the transactions are taxable or non-taxable. This can be overridden at
   * the transaction or transaction-line level.
   *
   * Default codes include "Non" (non-taxable) and "Tax" (taxable), but custom codes
   * can also be created in QuickBooks. If QuickBooks is not set up to charge sales
   * tax (via the "Do You Charge Sales Tax?" preference), it will assign the default
   * non-taxable code to all sales.
   */
  salesTaxCode: Vendor.SalesTaxCode | null;

  /**
   * The country for which sales tax is collected for this vendor.
   */
  salesTaxCountry: 'australia' | 'canada' | 'uk' | 'us' | null;

  /**
   * The vendor's sales tax return information, used for tracking and reporting sales
   * tax liabilities.
   */
  salesTaxReturn: Vendor.SalesTaxReturn | null;

  /**
   * The formal salutation title that precedes the name of the contact person for
   * this vendor, such as "Mr.", "Ms.", or "Dr.".
   */
  salutation: string | null;

  /**
   * The vendor's shipping address.
   */
  shippingAddress: Vendor.ShippingAddress | null;

  /**
   * The vendor's tax identification number (e.g., EIN or SSN).
   */
  taxIdentificationNumber: string | null;

  /**
   * The vendor's tax registration number, for use in Canada or the UK.
   */
  taxRegistrationNumber: string | null;

  /**
   * The vendor's payment terms, defining when payment is due and any applicable
   * discounts.
   */
  terms: Vendor.Terms | null;

  /**
   * The date and time when this vendor was last updated, in ISO 8601 format
   * (YYYY-MM-DDThh:mm:ss±hh:mm). The time zone is the same as the user's time zone
   * in QuickBooks.
   */
  updatedAt: string;

  /**
   * The vendor's type, used for categorizing vendors into meaningful segments, such
   * as industry or region.
   */
  vendorType: Vendor.VendorType | null;
}

export namespace Vendor {
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

  /**
   * The vendor's billing address.
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
   * The vendor's billing rate, used to override service item rates in time tracking
   * transactions.
   */
  export interface BillingRate {
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
   * The vendor's class. Classes can be used to categorize objects into meaningful
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
   * The vendor's currency. For built-in currencies, the name and code are standard
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

  export interface DefaultExpenseAccount {
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
   * The account used for tracking taxes on purchases for this vendor, for use in
   * Canada or the UK.
   */
  export interface PurchaseTaxAccount {
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
   * The account used for tracking taxes on sales for this vendor, for use in Canada
   * or the UK.
   */
  export interface SalesTaxAccount {
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
   * The default sales-tax code for transactions with this vendor, determining
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
   * The vendor's sales tax return information, used for tracking and reporting sales
   * tax liabilities.
   */
  export interface SalesTaxReturn {
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
   * The vendor's shipping address.
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
   * The vendor's payment terms, defining when payment is due and any applicable
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

  /**
   * The vendor's type, used for categorizing vendors into meaningful segments, such
   * as industry or region.
   */
  export interface VendorType {
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

export interface VendorCreateParams {
  /**
   * Body param: The case-insensitive unique name of this vendor, unique across all
   * vendors.
   *
   * **NOTE**: Vendors do not have a `fullName` field because they are not
   * hierarchical objects, which is why `name` is unique for them but not for objects
   * that have parents. Maximum length: 41 characters.
   */
  name: string;

  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Body param: The vendor's account number, which appears in the QuickBooks chart
   * of accounts, reports, and graphs. Note that if the "Use Account Numbers"
   * preference is turned off in QuickBooks, the account number may not be visible in
   * the user interface, but it can still be set and retrieved through the API.
   */
  accountNumber?: string;

  /**
   * Body param: Additional alternate contacts for this vendor.
   */
  additionalContacts?: Array<VendorCreateParams.AdditionalContact>;

  /**
   * Body param: Additional notes about this vendor.
   */
  additionalNotes?: Array<VendorCreateParams.AdditionalNote>;

  /**
   * Body param: The name of a alternate contact person for this vendor.
   */
  alternateContact?: string;

  /**
   * Body param: The vendor's alternate telephone number.
   */
  alternatePhone?: string;

  /**
   * Body param: The vendor's billing address.
   */
  billingAddress?: VendorCreateParams.BillingAddress;

  /**
   * Body param: The vendor's billing rate, used to override service item rates in
   * time tracking transactions.
   */
  billingRateId?: string;

  /**
   * Body param: An email address to carbon copy (CC) on communications with this
   * vendor.
   */
  ccEmail?: string;

  /**
   * Body param: The vendor's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: The name of the company associated with this vendor. This name is
   * used on invoices, checks, and other forms.
   */
  companyName?: string;

  /**
   * Body param: The name of the primary contact person for this vendor.
   */
  contact?: string;

  /**
   * Body param: The vendor's credit limit, represented as a decimal string. This is
   * the maximum amount of money that can be spent being before billed by this
   * vendor. If `null`, there is no credit limit.
   */
  creditLimit?: string;

  /**
   * Body param: The vendor's currency. For built-in currencies, the name and code
   * are standard international values. For user-defined currencies, all values are
   * editable.
   */
  currencyId?: string;

  /**
   * Body param: Additional custom contact fields for this vendor, such as phone
   * numbers or email addresses.
   */
  customContactFields?: Array<VendorCreateParams.CustomContactField>;

  /**
   * Body param: The expense accounts to prefill when entering bills for this vendor.
   */
  defaultExpenseAccountIds?: Array<string>;

  /**
   * Body param: The vendor's email address.
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
   * Body param: The vendor's fax number.
   */
  fax?: string;

  /**
   * Body param: The first name of the contact person for this vendor.
   */
  firstName?: string;

  /**
   * Body param: Indicates whether this vendor is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: Indicates whether tax is charged on top of tax for this vendor, for
   * use in Canada or the UK.
   */
  isCompoundingTax?: boolean;

  /**
   * Body param: Indicates whether this vendor is eligible to receive a 1099 form for
   * tax reporting purposes. When `true`, then the fields `taxId` and
   * `billingAddress` are required.
   */
  isEligibleFor1099?: boolean;

  /**
   * Body param: Indicates whether this vendor is a sales tax agency.
   */
  isSalesTaxAgency?: boolean;

  /**
   * Body param: Indicates whether tax is tracked on purchases for this vendor, for
   * use in Canada or the UK.
   */
  isTrackingPurchaseTax?: boolean;

  /**
   * Body param: Indicates whether tax is tracked on sales for this vendor, for use
   * in Canada or the UK.
   */
  isTrackingSalesTax?: boolean;

  /**
   * Body param: The job title of the contact person for this vendor.
   */
  jobTitle?: string;

  /**
   * Body param: The last name of the contact person for this vendor.
   */
  lastName?: string;

  /**
   * Body param: The middle name of the contact person for this vendor.
   */
  middleName?: string;

  /**
   * Body param: The vendor's name as it should appear on checks issued to this
   * vendor.
   */
  nameOnCheck?: string;

  /**
   * Body param: Additional notes or comments about this vendor.
   */
  note?: string;

  /**
   * Body param: The opening balance of this vendor's account, indicating the amount
   * owed to this vendor, represented as a decimal string.
   */
  openingBalance?: string;

  /**
   * Body param: The date of the opening balance of this vendor, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  openingBalanceDate?: string;

  /**
   * Body param: The vendor's primary telephone number.
   */
  phone?: string;

  /**
   * Body param: The account used for tracking taxes on purchases for this vendor,
   * for use in Canada or the UK.
   */
  purchaseTaxAccountId?: string;

  /**
   * Body param: The vendor's tax reporting period, for use in Canada or the UK.
   */
  reportingPeriod?: 'monthly' | 'quarterly';

  /**
   * Body param: The account used for tracking taxes on sales for this vendor, for
   * use in Canada or the UK.
   */
  salesTaxAccountId?: string;

  /**
   * Body param: The default sales-tax code for transactions with this vendor,
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
   * Body param: The country for which sales tax is collected for this vendor.
   */
  salesTaxCountry?: 'australia' | 'canada' | 'uk' | 'us';

  /**
   * Body param: The vendor's sales tax return information, used for tracking and
   * reporting sales tax liabilities.
   */
  salesTaxReturnId?: string;

  /**
   * Body param: The formal salutation title that precedes the name of the contact
   * person for this vendor, such as "Mr.", "Ms.", or "Dr.".
   */
  salutation?: string;

  /**
   * Body param: The vendor's shipping address.
   */
  shippingAddress?: VendorCreateParams.ShippingAddress;

  /**
   * Body param: The vendor's tax identification number (e.g., EIN or SSN).
   */
  taxIdentificationNumber?: string;

  /**
   * Body param: The vendor's tax registration number, for use in Canada or the UK.
   */
  taxRegistrationNumber?: string;

  /**
   * Body param: The vendor's payment terms, defining when payment is due and any
   * applicable discounts.
   */
  termsId?: string;

  /**
   * Body param: The vendor's type, used for categorizing vendors into meaningful
   * segments, such as industry or region.
   */
  vendorTypeId?: string;
}

export namespace VendorCreateParams {
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

  /**
   * The vendor's billing address.
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
   * The vendor's shipping address.
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

export interface VendorRetrieveParams {
  /**
   * The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;
}

export interface VendorUpdateParams {
  /**
   * Body param: The current revision number of the vendor object you are updating,
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
   * Body param: The vendor's account number, which appears in the QuickBooks chart
   * of accounts, reports, and graphs. Note that if the "Use Account Numbers"
   * preference is turned off in QuickBooks, the account number may not be visible in
   * the user interface, but it can still be set and retrieved through the API.
   */
  accountNumber?: string;

  /**
   * Body param: Additional alternate contacts for this vendor.
   */
  additionalContacts?: Array<VendorUpdateParams.AdditionalContact>;

  /**
   * Body param: Additional notes about this vendor.
   */
  additionalNotes?: Array<VendorUpdateParams.AdditionalNote>;

  /**
   * Body param: The name of a alternate contact person for this vendor.
   */
  alternateContact?: string;

  /**
   * Body param: The vendor's alternate telephone number.
   */
  alternatePhone?: string;

  /**
   * Body param: The vendor's billing address.
   */
  billingAddress?: VendorUpdateParams.BillingAddress;

  /**
   * Body param: The vendor's billing rate, used to override service item rates in
   * time tracking transactions.
   */
  billingRateId?: string;

  /**
   * Body param: An email address to carbon copy (CC) on communications with this
   * vendor.
   */
  ccEmail?: string;

  /**
   * Body param: The vendor's class. Classes can be used to categorize objects into
   * meaningful segments, such as department, location, or type of work. In
   * QuickBooks, class tracking is off by default.
   */
  classId?: string;

  /**
   * Body param: The name of the company associated with this vendor. This name is
   * used on invoices, checks, and other forms.
   */
  companyName?: string;

  /**
   * Body param: The name of the primary contact person for this vendor.
   */
  contact?: string;

  /**
   * Body param: The vendor's credit limit, represented as a decimal string. This is
   * the maximum amount of money that can be spent being before billed by this
   * vendor. If `null`, there is no credit limit.
   */
  creditLimit?: string;

  /**
   * Body param: The vendor's currency. For built-in currencies, the name and code
   * are standard international values. For user-defined currencies, all values are
   * editable.
   */
  currencyId?: string;

  /**
   * Body param: Additional custom contact fields for this vendor, such as phone
   * numbers or email addresses.
   */
  customContactFields?: Array<VendorUpdateParams.CustomContactField>;

  /**
   * Body param: The expense accounts to prefill when entering bills for this vendor.
   */
  defaultExpenseAccountIds?: Array<string>;

  /**
   * Body param: The vendor's email address.
   */
  email?: string;

  /**
   * Body param: The vendor's fax number.
   */
  fax?: string;

  /**
   * Body param: The first name of the contact person for this vendor.
   */
  firstName?: string;

  /**
   * Body param: Indicates whether this vendor is active. Inactive objects are
   * typically hidden from views and reports in QuickBooks.
   */
  isActive?: boolean;

  /**
   * Body param: Indicates whether tax is charged on top of tax for this vendor, for
   * use in Canada or the UK.
   */
  isCompoundingTax?: boolean;

  /**
   * Body param: Indicates whether this vendor is eligible to receive a 1099 form for
   * tax reporting purposes. When `true`, then the fields `taxId` and
   * `billingAddress` are required.
   */
  isEligibleFor1099?: boolean;

  /**
   * Body param: Indicates whether this vendor is a sales tax agency.
   */
  isSalesTaxAgency?: boolean;

  /**
   * Body param: Indicates whether tax is tracked on purchases for this vendor, for
   * use in Canada or the UK.
   */
  isTrackingPurchaseTax?: boolean;

  /**
   * Body param: Indicates whether tax is tracked on sales for this vendor, for use
   * in Canada or the UK.
   */
  isTrackingSalesTax?: boolean;

  /**
   * Body param: The job title of the contact person for this vendor.
   */
  jobTitle?: string;

  /**
   * Body param: The last name of the contact person for this vendor.
   */
  lastName?: string;

  /**
   * Body param: The middle name of the contact person for this vendor.
   */
  middleName?: string;

  /**
   * Body param: The case-insensitive unique name of this vendor, unique across all
   * vendors.
   *
   * **NOTE**: Vendors do not have a `fullName` field because they are not
   * hierarchical objects, which is why `name` is unique for them but not for objects
   * that have parents. Maximum length: 41 characters.
   */
  name?: string;

  /**
   * Body param: The vendor's name as it should appear on checks issued to this
   * vendor.
   */
  nameOnCheck?: string;

  /**
   * Body param: Additional notes or comments about this vendor.
   */
  note?: string;

  /**
   * Body param: The vendor's primary telephone number.
   */
  phone?: string;

  /**
   * Body param: The account used for tracking taxes on purchases for this vendor,
   * for use in Canada or the UK.
   */
  purchaseTaxAccountId?: string;

  /**
   * Body param: The vendor's tax reporting period, for use in Canada or the UK.
   */
  reportingPeriod?: 'monthly' | 'quarterly';

  /**
   * Body param: The account used for tracking taxes on sales for this vendor, for
   * use in Canada or the UK.
   */
  salesTaxAccountId?: string;

  /**
   * Body param: The default sales-tax code for transactions with this vendor,
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
   * Body param: The country for which sales tax is collected for this vendor.
   */
  salesTaxCountry?: 'australia' | 'canada' | 'uk' | 'us';

  /**
   * Body param: The vendor's sales tax return information, used for tracking and
   * reporting sales tax liabilities.
   */
  salesTaxReturnId?: string;

  /**
   * Body param: The formal salutation title that precedes the name of the contact
   * person for this vendor, such as "Mr.", "Ms.", or "Dr.".
   */
  salutation?: string;

  /**
   * Body param: The vendor's shipping address.
   */
  shippingAddress?: VendorUpdateParams.ShippingAddress;

  /**
   * Body param: The vendor's tax identification number (e.g., EIN or SSN).
   */
  taxIdentificationNumber?: string;

  /**
   * Body param: The vendor's tax registration number, for use in Canada or the UK.
   */
  taxRegistrationNumber?: string;

  /**
   * Body param: The vendor's payment terms, defining when payment is due and any
   * applicable discounts.
   */
  termsId?: string;

  /**
   * Body param: The vendor's type, used for categorizing vendors into meaningful
   * segments, such as industry or region.
   */
  vendorTypeId?: string;
}

export namespace VendorUpdateParams {
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

  /**
   * The vendor's billing address.
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
   * The vendor's shipping address.
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

export interface VendorListParams extends CursorPageParams {
  /**
   * Header param: The ID of the EndUser to receive this request (e.g.,
   * `"Conductor-End-User-Id: {{END_USER_ID}}"`).
   */
  'Conductor-End-User-Id': string;

  /**
   * Query param: Filter for vendors of these classes. A class is a way end-users can
   * categorize vendors in QuickBooks.
   */
  classIds?: Array<string>;

  /**
   * Query param: Filter for vendors in these currencies.
   */
  currencyIds?: Array<string>;

  /**
   * Query param: Filter for specific vendors by their QuickBooks-assigned unique
   * identifier(s).
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  ids?: Array<string>;

  /**
   * Query param: Filter for vendors whose `name` contains this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameStartsWith` or `nameEndsWith`.
   */
  nameContains?: string;

  /**
   * Query param: Filter for vendors whose `name` ends with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameStartsWith`.
   */
  nameEndsWith?: string;

  /**
   * Query param: Filter for vendors whose `name` is alphabetically greater than or
   * equal to this value.
   */
  nameFrom?: string;

  /**
   * Query param: Filter for specific vendors by their name(s), case-insensitive.
   * Like `id`, `name` is a unique identifier for a vendor.
   *
   * **IMPORTANT**: If you include this parameter, QuickBooks will ignore all other
   * query parameters for this request.
   */
  names?: Array<string>;

  /**
   * Query param: Filter for vendors whose `name` starts with this substring,
   * case-insensitive. NOTE: If you use this parameter, you cannot also use
   * `nameContains` or `nameEndsWith`.
   */
  nameStartsWith?: string;

  /**
   * Query param: Filter for vendors whose `name` is alphabetically less than or
   * equal to this value.
   */
  nameTo?: string;

  /**
   * Query param: Filter for vendors that are active, inactive, or both.
   */
  status?: 'active' | 'all' | 'inactive';

  /**
   * Query param: Filter for vendors whose `totalBalance` equals this amount,
   * represented as a decimal string. You can only use one total-balance filter at a
   * time.
   */
  totalBalance?: string;

  /**
   * Query param: Filter for vendors whose `totalBalance` is greater than this
   * amount, represented as a decimal string. You can only use one total-balance
   * filter at a time.
   */
  totalBalanceGreaterThan?: string;

  /**
   * Query param: Filter for vendors whose `totalBalance` is greater than or equal to
   * this amount, represented as a decimal string. You can only use one total-balance
   * filter at a time.
   */
  totalBalanceGreaterThanOrEqualTo?: string;

  /**
   * Query param: Filter for vendors whose `totalBalance` is less than this amount,
   * represented as a decimal string. You can only use one total-balance filter at a
   * time.
   */
  totalBalanceLessThan?: string;

  /**
   * Query param: Filter for vendors whose `totalBalance` is less than or equal to
   * this amount, represented as a decimal string. You can only use one total-balance
   * filter at a time.
   */
  totalBalanceLessThanOrEqualTo?: string;

  /**
   * Query param: Filter for vendors updated on or after this date and time, in ISO
   * 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD), the
   * time is assumed to be 00:00:00 of that day.
   */
  updatedAfter?: string;

  /**
   * Query param: Filter for vendors updated on or before this date and time, in ISO
   * 8601 format (YYYY-MM-DDTHH:mm:ss). If you only provide a date (YYYY-MM-DD), the
   * time is assumed to be 23:59:59 of that day.
   */
  updatedBefore?: string;
}

Vendors.VendorsCursorPage = VendorsCursorPage;

export declare namespace Vendors {
  export {
    type Vendor as Vendor,
    VendorsCursorPage as VendorsCursorPage,
    type VendorCreateParams as VendorCreateParams,
    type VendorRetrieveParams as VendorRetrieveParams,
    type VendorUpdateParams as VendorUpdateParams,
    type VendorListParams as VendorListParams,
  };
}
