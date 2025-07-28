// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-ai';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource namespacedApikeys', () => {
  // skipped: tests are disabled for the time being
  test.skip('deleteNamespacedApikeys: only required params', async () => {
    const responsePromise = client.skynet.namespacedApikeys.deleteNamespacedApikeys({
      key: 'key=API_KEY',
      key_to_delete: 'key_to_delete',
      namespace: 'namespace',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteNamespacedApikeys: required and optional params', async () => {
    const response = await client.skynet.namespacedApikeys.deleteNamespacedApikeys({
      key: 'key=API_KEY',
      key_to_delete: 'key_to_delete',
      namespace: 'namespace',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('namespacedApikeys: only required params', async () => {
    const responsePromise = client.skynet.namespacedApikeys.namespacedApikeys({
      key: 'key=API_KEY',
      namespace: 'namespace=test_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('namespacedApikeys: required and optional params', async () => {
    const response = await client.skynet.namespacedApikeys.namespacedApikeys({
      key: 'key=API_KEY',
      namespace: 'namespace=test_name',
    });
  });
});
