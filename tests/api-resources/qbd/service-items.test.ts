// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Conductor from 'conductor-node';
import { Response } from 'node-fetch';

const client = new Conductor({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource serviceItems', () => {
  test('create: only required params', async () => {
    const responsePromise = client.qbd.serviceItems.create({
      name: 'Web-Design',
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
    const response = await client.qbd.serviceItems.create({
      name: 'Web-Design',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      barcode: { allowOverride: false, assignEvenIfUsed: false, value: '012345678905' },
      classId: '80000001-1234567890',
      externalId: '12345678-abcd-1234-abcd-1234567890ab',
      isActive: true,
      parentId: '80000002-1234567890',
      salesAndPurchaseDetails: {
        expenseAccountId: '80000006-1234567890',
        incomeAccountId: '80000005-1234567890',
        preferredVendorId: '80000008-1234567890',
        purchaseCost: '15.75',
        purchaseDescription: 'Bulk purchase of steel bolts for inventory',
        purchaseTaxCodeId: '80000006-1234567890',
        salesDescription: 'High-quality steel bolts suitable for construction',
        salesPrice: '19.99',
      },
      salesOrPurchaseDetails: {
        postingAccountId: '80000001-1234567890',
        description: 'Hourly Consulting Service',
        price: '19.99',
        pricePercentage: '10.5',
      },
      salesTaxCodeId: '80000004-1234567890',
      unitOfMeasureSetId: '80000003-1234567890',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.qbd.serviceItems.retrieve('80000001-1234567890', {
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
    const response = await client.qbd.serviceItems.retrieve('80000001-1234567890', {
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.qbd.serviceItems.update('80000001-1234567890', {
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
    const response = await client.qbd.serviceItems.update('80000001-1234567890', {
      revisionNumber: '1721172183',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      barcode: { allowOverride: false, assignEvenIfUsed: false, value: '012345678905' },
      classId: '80000001-1234567890',
      forceUnitOfMeasureChange: false,
      isActive: true,
      name: 'Web-Design',
      parentId: '80000002-1234567890',
      salesAndPurchaseDetails: {
        expenseAccountId: '80000006-1234567890',
        incomeAccountId: '80000005-1234567890',
        preferredVendorId: '80000008-1234567890',
        purchaseCost: '15.75',
        purchaseDescription: 'Bulk purchase of steel bolts for inventory',
        purchaseTaxCodeId: '80000006-1234567890',
        salesDescription: 'High-quality steel bolts suitable for construction',
        salesPrice: '19.99',
        updateExistingTransactionsExpenseAccount: false,
        updateExistingTransactionsIncomeAccount: false,
      },
      salesOrPurchaseDetails: {
        description: 'Hourly Consulting Service',
        postingAccountId: '80000001-1234567890',
        price: '19.99',
        pricePercentage: '10.5',
        updateExistingTransactionsAccount: false,
      },
      salesTaxCodeId: '80000004-1234567890',
      unitOfMeasureSetId: '80000003-1234567890',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.qbd.serviceItems.list({
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

  test('list: required and optional params', async () => {
    const response = await client.qbd.serviceItems.list({
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      classIds: ['80000001-1234567890'],
      cursor: '12345678-abcd-abcd-example-1234567890ab',
      fullNames: ['Consulting:Web-Design'],
      ids: ['80000001-1234567890'],
      limit: 150,
      nameContains: 'ABC',
      nameEndsWith: 'ABC',
      nameFrom: 'A',
      nameStartsWith: 'ABC',
      nameTo: 'Z',
      status: 'active',
      updatedAfter: 'updatedAfter',
      updatedBefore: 'updatedBefore',
    });
  });
});