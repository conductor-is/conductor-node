// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Conductor from 'conductor-node';
import { Response } from 'node-fetch';

const client = new Conductor({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.qbd.checks.create({
      bankAccountId: '80000001-1234567890',
      transactionDate: '2019-12-27',
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
    const response = await client.qbd.checks.create({
      bankAccountId: '80000001-1234567890',
      transactionDate: '2019-12-27',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      address: {
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
      applyToTransactions: [{ transactionId: '123ABC-1234567890', amount: '1000.00' }],
      exchangeRate: 1.2345,
      expenseLines: [
        {
          accountId: '80000001-1234567890',
          amount: '1000.00',
          billingStatus: 'billable',
          classId: '80000001-1234567890',
          customFields: [{ name: 'Customer Rating', ownerId: '0', value: 'Premium' }],
          memo: 'New office chair',
          payeeId: '80000001-1234567890',
          salesRepresentativeId: '80000030-1234567890',
          salesTaxCodeId: '80000004-1234567890',
        },
      ],
      externalId: '12345678-abcd-1234-abcd-1234567890ab',
      isQueuedForPrint: true,
      itemLineGroups: [
        {
          itemGroupId: '80000011-1234567890',
          customFields: [{ name: 'Customer Rating', ownerId: '0', value: 'Premium' }],
          inventorySiteId: '80000001-1234567890',
          inventorySiteLocationId: '80000002-1234567890',
          quantity: 5,
          unitOfMeasure: 'Each',
        },
      ],
      itemLines: [
        {
          amount: '1000.00',
          billingStatus: 'billable',
          classId: '80000001-1234567890',
          cost: '1000.00',
          customerId: '80000001-1234567890',
          customFields: [{ name: 'Customer Rating', ownerId: '0', value: 'Premium' }],
          description: 'High-quality widget with custom engraving',
          expirationDate: '2019-12-27',
          inventorySiteId: '80000001-1234567890',
          inventorySiteLocationId: '80000002-1234567890',
          itemId: '80000010-1234567890',
          linkToTransactionLine: {
            transactionId: '123ABC-1234567890',
            transactionLineId: '456DEF-1234567890',
          },
          lotNumber: 'LOT2023-001',
          overrideItemAccountId: '80000001-1234567890',
          quantity: 5,
          salesRepresentativeId: '80000030-1234567890',
          salesTaxCodeId: '80000004-1234567890',
          serialNumber: 'SN1234567890',
          unitOfMeasure: 'Each',
        },
      ],
      memo: 'Payment for office supplies - Invoice INV-1234',
      payeeId: '80000001-1234567890',
      refNumber: 'CHECK-1234',
      salesTaxCodeId: '80000004-1234567890',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.qbd.checks.retrieve('123ABC-1234567890', {
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
    const response = await client.qbd.checks.retrieve('123ABC-1234567890', {
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.qbd.checks.update('123ABC-1234567890', {
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
    const response = await client.qbd.checks.update('123ABC-1234567890', {
      revisionNumber: '1721172183',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      address: {
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
      applyToTransactions: [{ transactionId: '123ABC-1234567890', amount: '1000.00' }],
      bankAccountId: '80000001-1234567890',
      clearExpenseLines: false,
      clearItemLines: false,
      exchangeRate: 1.2345,
      expenseLines: [
        {
          id: '456DEF-1234567890',
          accountId: '80000001-1234567890',
          amount: '1000.00',
          billingStatus: 'billable',
          classId: '80000001-1234567890',
          memo: 'New office chair',
          payeeId: '80000001-1234567890',
          salesRepresentativeId: '80000030-1234567890',
          salesTaxCodeId: '80000004-1234567890',
        },
      ],
      isQueuedForPrint: true,
      itemLineGroups: [
        {
          id: '456DEF-1234567890',
          itemGroupId: '80000011-1234567890',
          itemLines: [
            {
              id: '456DEF-1234567890',
              amount: '1000.00',
              billingStatus: 'billable',
              classId: '80000001-1234567890',
              cost: '1000.00',
              customerId: '80000001-1234567890',
              description: 'High-quality widget with custom engraving',
              expirationDate: '2019-12-27',
              inventorySiteId: '80000001-1234567890',
              inventorySiteLocationId: '80000002-1234567890',
              itemId: '80000010-1234567890',
              lotNumber: 'LOT2023-001',
              overrideItemAccountId: '80000001-1234567890',
              overrideUnitOfMeasureSetId: '80000003-1234567890',
              quantity: 5,
              salesRepresentativeId: '80000030-1234567890',
              salesTaxCodeId: '80000004-1234567890',
              serialNumber: 'SN1234567890',
              unitOfMeasure: 'Each',
            },
          ],
          overrideUnitOfMeasureSetId: '80000003-1234567890',
          quantity: 5,
          unitOfMeasure: 'Each',
        },
      ],
      itemLines: [
        {
          id: '456DEF-1234567890',
          amount: '1000.00',
          billingStatus: 'billable',
          classId: '80000001-1234567890',
          cost: '1000.00',
          customerId: '80000001-1234567890',
          description: 'High-quality widget with custom engraving',
          expirationDate: '2019-12-27',
          inventorySiteId: '80000001-1234567890',
          inventorySiteLocationId: '80000002-1234567890',
          itemId: '80000010-1234567890',
          lotNumber: 'LOT2023-001',
          overrideItemAccountId: '80000001-1234567890',
          overrideUnitOfMeasureSetId: '80000003-1234567890',
          quantity: 5,
          salesRepresentativeId: '80000030-1234567890',
          salesTaxCodeId: '80000004-1234567890',
          serialNumber: 'SN1234567890',
          unitOfMeasure: 'Each',
        },
      ],
      memo: 'Payment for office supplies - Invoice INV-1234',
      payeeId: '80000001-1234567890',
      refNumber: 'CHECK-1234',
      salesTaxCodeId: '80000004-1234567890',
      transactionDate: '2019-12-27',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.qbd.checks.list({ 'Conductor-End-User-Id': 'end_usr_1234567abcdefg' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.qbd.checks.list({
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      accountIds: ['80000001-1234567890'],
      currencyIds: ['80000001-1234567890'],
      cursor: '12345678-abcd-abcd-example-1234567890ab',
      ids: ['123ABC-1234567890'],
      includeLineItems: true,
      includeLinkedTransactions: false,
      limit: 150,
      payeeIds: ['80000001-1234567890'],
      refNumberContains: 'CHECK-1234',
      refNumberEndsWith: '1234',
      refNumberFrom: 'CHECK-0001',
      refNumbers: ['CHECK-1234'],
      refNumberStartsWith: 'CHECK',
      refNumberTo: 'CHECK-9999',
      transactionDateFrom: '2019-12-27',
      transactionDateTo: '2019-12-27',
      updatedAfter: 'updatedAfter',
      updatedBefore: 'updatedBefore',
    });
  });
});