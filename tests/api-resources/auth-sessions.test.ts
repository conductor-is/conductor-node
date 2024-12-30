// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Conductor from 'conductor-node';
import { Response } from 'node-fetch';

const client = new Conductor({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource authSessions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.authSessions.create({
      endUserId: 'end_usr_1234567abcdefg',
      publishableKey: '{{YOUR_PUBLISHABLE_KEY}}',
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
    const response = await client.authSessions.create({
      endUserId: 'end_usr_1234567abcdefg',
      publishableKey: '{{YOUR_PUBLISHABLE_KEY}}',
      linkExpiryMins: 0,
      redirectUrl: 'https://example.com/auth/conductor-callback',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.authSessions.retrieve('auth_sess_1234567abcdefg');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.authSessions.retrieve('auth_sess_1234567abcdefg', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Conductor.NotFoundError);
  });
});
