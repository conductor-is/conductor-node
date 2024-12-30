// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Conductor from 'conductor-node';
import { Response } from 'node-fetch';

const client = new Conductor({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inventoryItems', () => {
  test('create: only required params', async () => {
    const responsePromise = client.qbd.inventoryItems.create({
      assetAccountId: '80000009-1234567890',
      cogsAccountId: '80000007-1234567890',
      incomeAccountId: '80000005-1234567890',
      name: 'Cabinet',
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
    const response = await client.qbd.inventoryItems.create({
      assetAccountId: '80000009-1234567890',
      cogsAccountId: '80000007-1234567890',
      incomeAccountId: '80000005-1234567890',
      name: 'Cabinet',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      barcode: { allowOverride: false, assignEvenIfUsed: false, value: '012345678905' },
      classId: '80000001-1234567890',
      externalId: '12345678-abcd-1234-abcd-1234567890ab',
      inventoryDate: '2019-12-27',
      isActive: true,
      maximumQuantityOnHand: 200,
      parentId: '80000002-1234567890',
      preferredVendorId: '80000008-1234567890',
      purchaseCost: '15.75',
      purchaseDescription: 'Bulk purchase of steel bolts for inventory',
      purchaseTaxCodeId: '80000006-1234567890',
      quantityOnHand: 150,
      reorderPoint: 50,
      salesDescription: 'High-quality steel bolts suitable for construction',
      salesPrice: '19.99',
      salesTaxCodeId: '80000004-1234567890',
      sku: 'MPN-123456',
      totalValue: '1500.00',
      unitOfMeasureSetId: '80000003-1234567890',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.qbd.inventoryItems.retrieve('80000001-1234567890', {
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
    const response = await client.qbd.inventoryItems.retrieve('80000001-1234567890', {
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.qbd.inventoryItems.update('80000001-1234567890', {
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
    const response = await client.qbd.inventoryItems.update('80000001-1234567890', {
      revisionNumber: '1721172183',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      assetAccountId: '80000009-1234567890',
      barcode: { allowOverride: false, assignEvenIfUsed: false, value: '012345678905' },
      classId: '80000001-1234567890',
      cogsAccountId: '80000007-1234567890',
      forceUnitOfMeasureChange: false,
      incomeAccountId: '80000005-1234567890',
      isActive: true,
      maximumQuantityOnHand: 200,
      name: 'Cabinet',
      parentId: '80000002-1234567890',
      preferredVendorId: '80000008-1234567890',
      purchaseCost: '15.75',
      purchaseDescription: 'Bulk purchase of steel bolts for inventory',
      purchaseTaxCodeId: '80000006-1234567890',
      reorderPoint: 50,
      salesDescription: 'High-quality steel bolts suitable for construction',
      salesPrice: '19.99',
      salesTaxCodeId: '80000004-1234567890',
      sku: 'MPN-123456',
      unitOfMeasureSetId: '80000003-1234567890',
      updateExistingTransactionsCogsAccount: false,
      updateExistingTransactionsIncomeAccount: false,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.qbd.inventoryItems.list({
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
    const response = await client.qbd.inventoryItems.list({
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      classIds: ['80000001-1234567890'],
      cursor: '12345678-abcd-abcd-example-1234567890ab',
      fullNames: ['Kitchen:Cabinet'],
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
