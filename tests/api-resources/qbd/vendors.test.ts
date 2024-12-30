// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Conductor from 'conductor-node';
import { Response } from 'node-fetch';

const client = new Conductor({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vendors', () => {
  test('create: only required params', async () => {
    const responsePromise = client.qbd.vendors.create({
      name: 'Acme Supplies Inc.',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.qbd.vendors.create({
      name: 'Acme Supplies Inc.',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      accountNumber: '1010',
      additionalContacts: [
        {
          firstName: 'John',
          customContactFields: [{ name: 'Main Phone', value: '555-123-4567' }],
          jobTitle: 'Purchasing Manager',
          lastName: 'Doe',
          middleName: 'A.',
          salutation: 'Dr.',
        },
      ],
      additionalNotes: [{ note: 'This is a fun note.' }],
      alternateContact: 'Bob Johnson',
      alternatePhone: '+1-555-987-6543',
      billingAddress: {
        city: 'San Francisco',
        country: 'United States',
        line1: 'Conductor Labs Inc.',
        line2: '540 Market St.',
        line3: 'Suite 100',
        line4: '',
        line5: '',
        note: 'Conductor HQ',
        postalCode: '94110',
        state: 'CA',
      },
      billingRateId: '80000015-1234567890',
      ccEmail: 'manager@example.com',
      classId: '80000001-1234567890',
      companyName: 'Acme Corporation',
      contact: 'Jane Smith',
      creditLimit: '5000.00',
      currencyId: '80000012-1234567890',
      customContactFields: [{ name: 'Main Phone', value: '555-123-4567' }],
      defaultExpenseAccountIds: ['80000029-1234567890'],
      email: 'vendor@example.com',
      externalId: '12345678-abcd-1234-abcd-1234567890ab',
      fax: '+1-555-555-1212',
      firstName: 'John',
      isActive: true,
      isCompoundingTax: false,
      isEligibleFor1099: true,
      isSalesTaxAgency: false,
      isTrackingPurchaseTax: true,
      isTrackingSalesTax: true,
      jobTitle: 'Purchasing Manager',
      lastName: 'Doe',
      middleName: 'A.',
      nameOnCheck: 'Acme Supplies Ltd.',
      note: 'Preferred vendor for office supplies.',
      openingBalance: '1000.00',
      openingBalanceDate: '2019-12-27',
      phone: '+1-555-123-4567',
      purchaseTaxAccountId: '80000027-1234567890',
      reportingPeriod: 'monthly',
      salesTaxAccountId: '80000028-1234567890',
      salesTaxCodeId: '80000004-1234567890',
      salesTaxCountry: 'australia',
      salesTaxReturnId: '80000026-1234567890',
      salutation: 'Dr.',
      shippingAddress: {
        city: 'San Francisco',
        country: 'United States',
        line1: 'Conductor Labs Inc.',
        line2: '540 Market St.',
        line3: 'Suite 100',
        line4: '',
        line5: '',
        note: 'Conductor HQ',
        postalCode: '94110',
        state: 'CA',
      },
      taxIdentificationNumber: '12-3456789',
      taxRegistrationNumber: 'GB123456789',
      termsId: '80000013-1234567890',
      vendorTypeId: '80000025-1234567890',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.qbd.vendors.retrieve('80000001-1234567890', {
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.qbd.vendors.retrieve('80000001-1234567890', {
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.qbd.vendors.update('80000001-1234567890', {
      revisionNumber: '1721172183',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.qbd.vendors.update('80000001-1234567890', {
      revisionNumber: '1721172183',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      accountNumber: '1010',
      additionalContacts: [
        {
          id: '80000001-1234567890',
          revisionNumber: '1721172183',
          customContactFields: [{ name: 'Main Phone', value: '555-123-4567' }],
          firstName: 'John',
          jobTitle: 'Purchasing Manager',
          lastName: 'Doe',
          middleName: 'A.',
          salutation: 'Dr.',
        },
      ],
      additionalNotes: [{ id: 1, note: 'This is a fun note.' }],
      alternateContact: 'Bob Johnson',
      alternatePhone: '+1-555-987-6543',
      billingAddress: {
        city: 'San Francisco',
        country: 'United States',
        line1: 'Conductor Labs Inc.',
        line2: '540 Market St.',
        line3: 'Suite 100',
        line4: '',
        line5: '',
        note: 'Conductor HQ',
        postalCode: '94110',
        state: 'CA',
      },
      billingRateId: '80000015-1234567890',
      ccEmail: 'manager@example.com',
      classId: '80000001-1234567890',
      companyName: 'Acme Corporation',
      contact: 'Jane Smith',
      creditLimit: '5000.00',
      currencyId: '80000012-1234567890',
      customContactFields: [{ name: 'Main Phone', value: '555-123-4567' }],
      defaultExpenseAccountIds: ['80000029-1234567890'],
      email: 'vendor@example.com',
      fax: '+1-555-555-1212',
      firstName: 'John',
      isActive: true,
      isCompoundingTax: false,
      isEligibleFor1099: true,
      isSalesTaxAgency: false,
      isTrackingPurchaseTax: true,
      isTrackingSalesTax: true,
      jobTitle: 'Purchasing Manager',
      lastName: 'Doe',
      middleName: 'A.',
      name: 'Acme Supplies Inc.',
      nameOnCheck: 'Acme Supplies Ltd.',
      note: 'Preferred vendor for office supplies.',
      phone: '+1-555-123-4567',
      purchaseTaxAccountId: '80000027-1234567890',
      reportingPeriod: 'monthly',
      salesTaxAccountId: '80000028-1234567890',
      salesTaxCodeId: '80000004-1234567890',
      salesTaxCountry: 'australia',
      salesTaxReturnId: '80000026-1234567890',
      salutation: 'Dr.',
      shippingAddress: {
        city: 'San Francisco',
        country: 'United States',
        line1: 'Conductor Labs Inc.',
        line2: '540 Market St.',
        line3: 'Suite 100',
        line4: '',
        line5: '',
        note: 'Conductor HQ',
        postalCode: '94110',
        state: 'CA',
      },
      taxIdentificationNumber: '12-3456789',
      taxRegistrationNumber: 'GB123456789',
      termsId: '80000013-1234567890',
      vendorTypeId: '80000025-1234567890',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.qbd.vendors.list({ 'Conductor-End-User-Id': 'end_usr_1234567abcdefg' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.qbd.vendors.list({
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      classIds: ['80000001-1234567890'],
      currencyIds: ['80000001-1234567890'],
      cursor: '12345678-abcd-abcd-example-1234567890ab',
      ids: ['80000001-1234567890'],
      limit: 150,
      nameContains: 'ABC',
      nameEndsWith: 'ABC',
      nameFrom: 'A',
      names: ['Acme Supplies Inc.'],
      nameStartsWith: 'ABC',
      nameTo: 'Z',
      status: 'active',
      totalBalance: '123.45',
      totalBalanceGreaterThan: '123.45',
      totalBalanceGreaterThanOrEqualTo: '123.45',
      totalBalanceLessThan: '123.45',
      totalBalanceLessThanOrEqualTo: '123.45',
      updatedAfter: 'updatedAfter',
      updatedBefore: 'updatedBefore',
    });
  });
});
