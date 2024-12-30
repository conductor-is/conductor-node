// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Conductor from 'conductor-node';
import { Response } from 'node-fetch';

const client = new Conductor({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource receivePayments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.qbd.receivePayments.create({
      customerId: '80000001-1234567890',
      totalAmount: '1000.00',
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
    const response = await client.qbd.receivePayments.create({
      customerId: '80000001-1234567890',
      totalAmount: '1000.00',
      transactionDate: '2019-12-27',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
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
      creditCardTransaction: {
        request: {
          expirationMonth: 12,
          expirationYear: 2024,
          name: 'John Doe',
          number: 'xxxxxxxxxxxx1234',
          address: '1234 Main St, Anytown, USA, 12345',
          commercialCardCode: 'corporate',
          postalCode: '12345',
          transactionMode: 'card_not_present',
          transactionType: 'authorization',
        },
        response: {
          creditCardTransactionId: '1234567890',
          merchantAccountNumber: '1234567890',
          paymentStatus: 'completed',
          statusCode: 0,
          statusMessage: 'Success',
          transactionAuthorizedAt: 'transactionAuthorizedAt',
          authorizationCode: '1234567890',
          avsStreetStatus: 'fail',
          avsZipStatus: 'fail',
          cardSecurityCodeMatch: 'fail',
          clientTransactionId: '1234567890',
          paymentGroupingCode: 2,
          reconBatchId: '1234567890',
          transactionAuthorizationStamp: 2,
        },
      },
      depositToAccountId: '80000008-1234567890',
      exchangeRate: 1.2345,
      externalId: '12345678-abcd-1234-abcd-1234567890ab',
      isAutoApply: false,
      memo: 'Payment received at store location - cash',
      paymentMethodId: '80000014-1234567890',
      receivablesAccountId: '80000002-1234567890',
      refNumber: 'PAYMENT-1234',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.qbd.receivePayments.retrieve('123ABC-1234567890', {
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
    const response = await client.qbd.receivePayments.retrieve('123ABC-1234567890', {
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.qbd.receivePayments.update('123ABC-1234567890', {
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
    const response = await client.qbd.receivePayments.update('123ABC-1234567890', {
      revisionNumber: '1721172183',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
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
      creditCardTransaction: {
        request: {
          address: '1234 Main St, Anytown, USA, 12345',
          commercialCardCode: 'corporate',
          expirationMonth: 12,
          expirationYear: 2024,
          name: 'John Doe',
          number: 'xxxxxxxxxxxx1234',
          postalCode: '12345',
          transactionMode: 'card_not_present',
          transactionType: 'authorization',
        },
        response: {
          authorizationCode: '1234567890',
          avsStreetStatus: 'fail',
          avsZipStatus: 'fail',
          cardSecurityCodeMatch: 'fail',
          clientTransactionId: '1234567890',
          creditCardTransactionId: '1234567890',
          merchantAccountNumber: '1234567890',
          paymentGroupingCode: 2,
          paymentStatus: 'completed',
          reconBatchId: '1234567890',
          statusCode: 0,
          statusMessage: 'Success',
          transactionAuthorizationStamp: 2,
          transactionAuthorizedAt: 'transactionAuthorizedAt',
        },
      },
      customerId: '80000001-1234567890',
      depositToAccountId: '80000008-1234567890',
      exchangeRate: 1.2345,
      memo: 'Payment received at store location - cash',
      paymentMethodId: '80000014-1234567890',
      receivablesAccountId: '80000002-1234567890',
      refNumber: 'PAYMENT-1234',
      totalAmount: '1000.00',
      transactionDate: '2019-12-27',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.qbd.receivePayments.list({
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
    const response = await client.qbd.receivePayments.list({
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      accountIds: ['80000001-1234567890'],
      currencyIds: ['80000001-1234567890'],
      cursor: '12345678-abcd-abcd-example-1234567890ab',
      customerIds: ['80000001-1234567890'],
      ids: ['123ABC-1234567890'],
      includeLineItems: true,
      limit: 150,
      refNumberContains: 'PAYMENT-1234',
      refNumberEndsWith: '1234',
      refNumberFrom: 'PAYMENT-0001',
      refNumbers: ['RECEIVE-PAYMENT-1234'],
      refNumberStartsWith: 'PAYMENT',
      refNumberTo: 'PAYMENT-9999',
      transactionDateFrom: '2019-12-27',
      transactionDateTo: '2019-12-27',
      updatedAfter: 'updatedAfter',
      updatedBefore: 'updatedBefore',
    });
  });
});
