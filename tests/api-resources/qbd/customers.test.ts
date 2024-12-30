// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Conductor from 'conductor-node';
import { Response } from 'node-fetch';

const client = new Conductor({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.qbd.customers.create({
      name: 'Website Redesign Project',
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
    const response = await client.qbd.customers.create({
      name: 'Website Redesign Project',
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
      alternateShippingAddresses: [
        {
          name: 'Alternate shipping address',
          city: 'San Francisco',
          country: 'United States',
          isDefaultShippingAddress: true,
          line1: 'Conductor Labs Inc.',
          line2: '540 Market St.',
          line3: 'Suite 100',
          line4: '',
          line5: '',
          note: 'Conductor HQ',
          postalCode: '94110',
          state: 'CA',
        },
      ],
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
      ccEmail: 'manager@example.com',
      classId: '80000001-1234567890',
      companyName: 'Acme Corporation',
      contact: 'Jane Smith',
      creditCard: {
        address: '1234 Main St, Anytown, USA, 12345',
        expirationMonth: 12,
        expirationYear: 2024,
        name: 'John Doe',
        number: 'xxxxxxxxxxxx1234',
        postalCode: '12345',
      },
      creditLimit: '5000.00',
      currencyId: '80000012-1234567890',
      customContactFields: [{ name: 'Main Phone', value: '555-123-4567' }],
      customerTypeId: '80000025-1234567890',
      email: 'customer@example.com',
      externalId: '12345678-abcd-1234-abcd-1234567890ab',
      fax: '+1-555-555-1212',
      firstName: 'John',
      isActive: true,
      jobDescription: 'Kitchen renovation project for residential client.',
      jobEndDate: '2019-12-27',
      jobProjectedEndDate: '2019-12-27',
      jobStartDate: '2019-12-27',
      jobStatus: 'awarded',
      jobTitle: 'Purchasing Manager',
      jobTypeId: '80000035-1234567890',
      lastName: 'Doe',
      middleName: 'A.',
      note: 'Our favorite customer.',
      openingBalance: '1000.00',
      openingBalanceDate: '2019-12-27',
      parentId: '80000002-1234567890',
      phone: '+1-555-123-4567',
      preferredDeliveryMethod: 'email',
      preferredPaymentMethodId: '80000014-1234567890',
      priceLevelId: '80000040-1234567890',
      resaleNumber: '123456789',
      salesRepresentativeId: '80000030-1234567890',
      salesTaxCodeId: '80000004-1234567890',
      salesTaxCountry: 'australia',
      salesTaxItemId: '80000010-1234567890',
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
      taxRegistrationNumber: 'GB123456789',
      termsId: '80000013-1234567890',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.qbd.customers.retrieve('80000001-1234567890', {
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
    const response = await client.qbd.customers.retrieve('80000001-1234567890', {
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.qbd.customers.update('80000001-1234567890', {
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
    const response = await client.qbd.customers.update('80000001-1234567890', {
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
      alternateShippingAddresses: [
        {
          name: 'Alternate shipping address',
          city: 'San Francisco',
          country: 'United States',
          isDefaultShippingAddress: true,
          line1: 'Conductor Labs Inc.',
          line2: '540 Market St.',
          line3: 'Suite 100',
          line4: '',
          line5: '',
          note: 'Conductor HQ',
          postalCode: '94110',
          state: 'CA',
        },
      ],
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
      ccEmail: 'manager@example.com',
      classId: '80000001-1234567890',
      companyName: 'Acme Corporation',
      contact: 'Jane Smith',
      creditCard: {
        address: '1234 Main St, Anytown, USA, 12345',
        expirationMonth: 12,
        expirationYear: 2024,
        name: 'John Doe',
        number: 'xxxxxxxxxxxx1234',
        postalCode: '12345',
      },
      creditLimit: '5000.00',
      currencyId: '80000012-1234567890',
      customContactFields: [{ name: 'Main Phone', value: '555-123-4567' }],
      customerTypeId: '80000025-1234567890',
      email: 'customer@example.com',
      fax: '+1-555-555-1212',
      firstName: 'John',
      isActive: true,
      jobDescription: 'Kitchen renovation project for residential client.',
      jobEndDate: '2019-12-27',
      jobProjectedEndDate: '2019-12-27',
      jobStartDate: '2019-12-27',
      jobStatus: 'awarded',
      jobTitle: 'Purchasing Manager',
      jobTypeId: '80000035-1234567890',
      lastName: 'Doe',
      middleName: 'A.',
      name: 'Website Redesign Project',
      note: 'Our favorite customer.',
      parentId: '80000002-1234567890',
      phone: '+1-555-123-4567',
      preferredDeliveryMethod: 'email',
      preferredPaymentMethodId: '80000014-1234567890',
      priceLevelId: '80000040-1234567890',
      resaleNumber: '123456789',
      salesRepresentativeId: '80000030-1234567890',
      salesTaxCodeId: '80000004-1234567890',
      salesTaxCountry: 'australia',
      salesTaxItemId: '80000010-1234567890',
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
      taxRegistrationNumber: 'GB123456789',
      termsId: '80000013-1234567890',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.qbd.customers.list({ 'Conductor-End-User-Id': 'end_usr_1234567abcdefg' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.qbd.customers.list({
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      classIds: ['80000001-1234567890'],
      currencyIds: ['80000001-1234567890'],
      cursor: '12345678-abcd-abcd-example-1234567890ab',
      fullNames: ['ABC Corporation:Website Redesign Project'],
      ids: ['80000001-1234567890'],
      limit: 150,
      nameContains: 'ABC',
      nameEndsWith: 'ABC',
      nameFrom: 'A',
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
