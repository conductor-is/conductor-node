// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Conductor from 'conductor-node';
import { Response } from 'node-fetch';

const client = new Conductor({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource estimates', () => {
  test('create: only required params', async () => {
    const responsePromise = client.qbd.estimates.create({
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
    const response = await client.qbd.estimates.create({
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
      isActive: true,
      isQueuedForEmail: true,
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
          description: 'Graphic illustrations for website redesign',
          inventorySiteId: '80000001-1234567890',
          inventorySiteLocationId: '80000002-1234567890',
          itemId: '80000010-1234567890',
          markupRate: '0.2',
          markupRatePercent: '20',
          otherCustomField1: 'Special handling required',
          otherCustomField2: 'Always ship with a spare',
          overrideItemAccountId: '80000001-1234567890',
          priceLevelId: '80000040-1234567890',
          priceRuleConflictStrategy: 'base_price',
          quantity: 5,
          rate: '10.00',
          ratePercent: '10.5',
          salesTaxCodeId: '80000004-1234567890',
          unitOfMeasure: 'Each',
        },
      ],
      memo: 'Proposal for website redesign',
      otherCustomField: 'Special handling required',
      purchaseOrderNumber: 'PO-1234',
      refNumber: 'EST-1234',
      salesRepresentativeId: '80000030-1234567890',
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
      termsId: '80000013-1234567890',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.qbd.estimates.retrieve('123ABC-1234567890', {
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
    const response = await client.qbd.estimates.retrieve('123ABC-1234567890', {
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.qbd.estimates.update('123ABC-1234567890', {
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
    const response = await client.qbd.estimates.update('123ABC-1234567890', {
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
      createChangeOrder: false,
      customerId: '80000001-1234567890',
      customerMessageId: '80000001-1234567890',
      documentTemplateId: '80000001-1234567890',
      dueDate: '2019-12-27',
      exchangeRate: 1.2345,
      isActive: true,
      isQueuedForEmail: true,
      lineGroups: [
        {
          id: '456DEF-1234567890',
          itemGroupId: '80000011-1234567890',
          lines: [
            {
              id: '456DEF-1234567890',
              amount: '1000.00',
              classId: '80000001-1234567890',
              description: 'Graphic illustrations for website redesign',
              inventorySiteId: '80000001-1234567890',
              inventorySiteLocationId: '80000002-1234567890',
              itemId: '80000010-1234567890',
              markupRate: '0.2',
              markupRatePercent: '20',
              otherCustomField1: 'Special handling required',
              otherCustomField2: 'Always ship with a spare',
              overrideUnitOfMeasureSetId: '80000003-1234567890',
              priceLevelId: '80000040-1234567890',
              priceRuleConflictStrategy: 'base_price',
              quantity: 5,
              rate: '10.00',
              ratePercent: '10.5',
              salesTaxCodeId: '80000004-1234567890',
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
          description: 'Graphic illustrations for website redesign',
          inventorySiteId: '80000001-1234567890',
          inventorySiteLocationId: '80000002-1234567890',
          itemId: '80000010-1234567890',
          markupRate: '0.2',
          markupRatePercent: '20',
          otherCustomField1: 'Special handling required',
          otherCustomField2: 'Always ship with a spare',
          overrideUnitOfMeasureSetId: '80000003-1234567890',
          priceLevelId: '80000040-1234567890',
          priceRuleConflictStrategy: 'base_price',
          quantity: 5,
          rate: '10.00',
          ratePercent: '10.5',
          salesTaxCodeId: '80000004-1234567890',
          unitOfMeasure: 'Each',
        },
      ],
      memo: 'Proposal for website redesign',
      otherCustomField: 'Special handling required',
      purchaseOrderNumber: 'PO-1234',
      refNumber: 'EST-1234',
      salesRepresentativeId: '80000030-1234567890',
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
      termsId: '80000013-1234567890',
      transactionDate: '2019-12-27',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.qbd.estimates.list({ 'Conductor-End-User-Id': 'end_usr_1234567abcdefg' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.qbd.estimates.list({
      'Conductor-End-User-Id': 'end_usr_1234567abcdefg',
      accountIds: ['80000001-1234567890'],
      currencyIds: ['80000001-1234567890'],
      cursor: '12345678-abcd-abcd-example-1234567890ab',
      customerIds: ['80000001-1234567890'],
      ids: ['123ABC-1234567890'],
      includeLineItems: true,
      includeLinkedTransactions: false,
      limit: 150,
      refNumberContains: 'EST-1234',
      refNumberEndsWith: '1234',
      refNumberFrom: 'EST-0001',
      refNumbers: ['ESTIMATE-1234'],
      refNumberStartsWith: 'EST',
      refNumberTo: 'EST-9999',
      transactionDateFrom: '2019-12-27',
      transactionDateTo: '2019-12-27',
      updatedAfter: 'updatedAfter',
      updatedBefore: 'updatedBefore',
    });
  });
});
