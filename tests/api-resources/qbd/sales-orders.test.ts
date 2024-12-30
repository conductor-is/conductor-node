// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Conductor from 'conductor-node';
import { Response } from 'node-fetch';

const client = new Conductor({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource salesOrders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.qbd.salesOrders.create({
      customerId: '80000001-1234567890',
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
    const response = await client.qbd.salesOrders.create({
      customerId: '80000001-1234567890',
      transactionDate: '2019-12-27',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
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
      classId: '80000001-1234567890',
      customerMessageId: '80000001-1234567890',
      documentTemplateId: '80000001-1234567890',
      dueDate: '2019-12-27',
      exchangeRate: 1.2345,
      externalId: '12345678-abcd-1234-abcd-1234567890ab',
      isManuallyClosed: true,
      isQueuedForEmail: true,
      isQueuedForPrint: true,
      lineGroups: [
        {
          itemGroupId: '80000011-1234567890',
          customFields: [{ name: 'Customer Rating', ownerId: '0', value: 'Premium' }],
          inventorySiteId: '80000001-1234567890',
          inventorySiteLocationId: '80000002-1234567890',
          quantity: 5,
          unitOfMeasure: 'Each',
        },
      ],
      lines: [
        {
          amount: '1000.00',
          classId: '80000001-1234567890',
          customFields: [{ name: 'Customer Rating', ownerId: '0', value: 'Premium' }],
          description: 'Widget Model X100 - Blue',
          inventorySiteId: '80000001-1234567890',
          inventorySiteLocationId: '80000002-1234567890',
          isManuallyClosed: true,
          itemId: '80000010-1234567890',
          lotNumber: 'LOT2023-001',
          otherCustomField1: 'Special handling required',
          otherCustomField2: 'Always ship with a spare',
          priceLevelId: '80000040-1234567890',
          priceRuleConflictStrategy: 'base_price',
          quantity: 5,
          rate: '10.00',
          ratePercent: '10.5',
          salesTaxCodeId: '80000004-1234567890',
          serialNumber: 'SN1234567890',
          unitOfMeasure: 'Each',
        },
      ],
      memo: 'Customer requested rush delivery',
      otherCustomField: 'Special handling required',
      purchaseOrderNumber: 'PO-1234',
      refNumber: 'SO-1234',
      salesChannelName: 'blank',
      salesRepresentativeId: '80000030-1234567890',
      salesStoreName: 'Store 1',
      salesStoreType: 'Retail',
      salesTaxCodeId: '80000004-1234567890',
      salesTaxItemId: '80000010-1234567890',
      shipmentOrigin: 'San Francisco, CA',
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
      shippingDate: '2019-12-27',
      shippingMethodId: '80000007-1234567890',
      termsId: '80000013-1234567890',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.qbd.salesOrders.retrieve('123ABC-1234567890', {
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
    const response = await client.qbd.salesOrders.retrieve('123ABC-1234567890', {
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.qbd.salesOrders.update('123ABC-1234567890', {
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
    const response = await client.qbd.salesOrders.update('123ABC-1234567890', {
      revisionNumber: '1721172183',
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
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
      classId: '80000001-1234567890',
      customerId: '80000001-1234567890',
      customerMessageId: '80000001-1234567890',
      documentTemplateId: '80000001-1234567890',
      dueDate: '2019-12-27',
      exchangeRate: 1.2345,
      isManuallyClosed: true,
      isQueuedForEmail: true,
      isQueuedForPrint: true,
      lineGroups: [
        {
          id: '456DEF-1234567890',
          itemGroupId: '80000011-1234567890',
          lines: [
            {
              id: '456DEF-1234567890',
              amount: '1000.00',
              classId: '80000001-1234567890',
              description: 'Widget Model X100 - Blue',
              inventorySiteId: '80000001-1234567890',
              inventorySiteLocationId: '80000002-1234567890',
              isManuallyClosed: true,
              itemId: '80000010-1234567890',
              lotNumber: 'LOT2023-001',
              otherCustomField1: 'Special handling required',
              otherCustomField2: 'Always ship with a spare',
              overrideUnitOfMeasureSetId: '80000003-1234567890',
              priceLevelId: '80000040-1234567890',
              priceRuleConflictStrategy: 'base_price',
              quantity: 5,
              rate: '10.00',
              ratePercent: '10.5',
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
      lines: [
        {
          id: '456DEF-1234567890',
          amount: '1000.00',
          classId: '80000001-1234567890',
          description: 'Widget Model X100 - Blue',
          inventorySiteId: '80000001-1234567890',
          inventorySiteLocationId: '80000002-1234567890',
          isManuallyClosed: true,
          itemId: '80000010-1234567890',
          lotNumber: 'LOT2023-001',
          otherCustomField1: 'Special handling required',
          otherCustomField2: 'Always ship with a spare',
          overrideUnitOfMeasureSetId: '80000003-1234567890',
          priceLevelId: '80000040-1234567890',
          priceRuleConflictStrategy: 'base_price',
          quantity: 5,
          rate: '10.00',
          ratePercent: '10.5',
          salesTaxCodeId: '80000004-1234567890',
          serialNumber: 'SN1234567890',
          unitOfMeasure: 'Each',
        },
      ],
      memo: 'Customer requested rush delivery',
      otherCustomField: 'Special handling required',
      purchaseOrderNumber: 'PO-1234',
      refNumber: 'SO-1234',
      salesChannelName: 'blank',
      salesRepresentativeId: '80000030-1234567890',
      salesStoreName: 'Store 1',
      salesStoreType: 'Retail',
      salesTaxCodeId: '80000004-1234567890',
      salesTaxItemId: '80000010-1234567890',
      shipmentOrigin: 'San Francisco, CA',
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
      shippingDate: '2019-12-27',
      shippingMethodId: '80000007-1234567890',
      termsId: '80000013-1234567890',
      transactionDate: '2019-12-27',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.qbd.salesOrders.list({
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
    const response = await client.qbd.salesOrders.list({
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      currencyIds: ['80000001-1234567890'],
      cursor: '12345678-abcd-abcd-example-1234567890ab',
      customerIds: ['80000001-1234567890'],
      ids: ['123ABC-1234567890'],
      includeLineItems: true,
      includeLinkedTransactions: false,
      limit: 150,
      refNumberContains: 'SO-1234',
      refNumberEndsWith: '1234',
      refNumberFrom: 'SO-0001',
      refNumbers: ['SALES ORDER-1234'],
      refNumberStartsWith: 'SO',
      refNumberTo: 'SO-9999',
      transactionDateFrom: '2019-12-27',
      transactionDateTo: '2019-12-27',
      updatedAfter: 'updatedAfter',
      updatedBefore: 'updatedBefore',
    });
  });
});
