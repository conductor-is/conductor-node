// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Conductor from 'conductor-node';
import { Response } from 'node-fetch';

const client = new Conductor({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource billCreditCardPayments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.qbd.billCreditCardPayments.create({
      applyToTransactions: [{ transactionId: '123ABC-1234567890' }],
      creditCardAccountId: '80000007-1234567890',
      transactionDate: '2019-12-27',
      vendorId: '80000001-1234567890',
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
    const response = await client.qbd.billCreditCardPayments.create({
      applyToTransactions: [
        {
          transactionId: '123ABC-1234567890',
          applyCredits: [
            {
              appliedAmount: '100.00',
              creditTransactionId: 'ABCDEF-1234567890',
              overrideCreditApplication: false,
            },
          ],
          discountAccountId: '80000008-1234567890',
          discountAmount: '50.00',
          discountClassId: '80000008-1234567890',
          paymentAmount: '25.00',
        },
      ],
      creditCardAccountId: '80000007-1234567890',
      transactionDate: '2019-12-27',
      vendorId: '80000001-1234567890',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      exchangeRate: 1.2345,
      externalId: '12345678-abcd-1234-abcd-1234567890ab',
      memo: 'Payment for office supplies - Invoice INV-1234',
      payablesAccountId: '80000002-1234567890',
      refNumber: 'CARD-1234',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.qbd.billCreditCardPayments.retrieve('123ABC-1234567890', {
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
    const response = await client.qbd.billCreditCardPayments.retrieve('123ABC-1234567890', {
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.qbd.billCreditCardPayments.list({
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
    const response = await client.qbd.billCreditCardPayments.list({
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      accountIds: ['80000001-1234567890'],
      currencyIds: ['80000001-1234567890'],
      cursor: '12345678-abcd-abcd-example-1234567890ab',
      ids: ['123ABC-1234567890'],
      includeLineItems: true,
      limit: 150,
      refNumberContains: 'CARD-1234',
      refNumberEndsWith: '1234',
      refNumberFrom: 'CARD-0001',
      refNumbers: ['BILL CREDIT CARD PAYMENT-1234'],
      refNumberStartsWith: 'CARD',
      refNumberTo: 'CARD-9999',
      transactionDateFrom: '2019-12-27',
      transactionDateTo: '2019-12-27',
      updatedAfter: 'updatedAfter',
      updatedBefore: 'updatedBefore',
      vendorIds: ['80000001-1234567890'],
    });
  });
});
