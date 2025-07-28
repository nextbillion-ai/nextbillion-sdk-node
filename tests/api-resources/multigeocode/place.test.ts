// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from '@nbai/sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource place', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.multigeocode.place.create({
      key: 'key=API_KEY',
      place: [{ geopoint: {} }],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.multigeocode.place.create({
      key: 'key=API_KEY',
      place: [
        {
          geopoint: { lat: 0, lng: 0 },
          address: 'address',
          building: 'building',
          city: 'city',
          country: '"country":"IND"',
          district: 'district',
          house: 'house',
          poi: { title: 'title' },
          postalCode: 'postalCode',
          state: 'state',
          street: 'street',
          subDistrict: 'subDistrict',
        },
      ],
      dataSource: { refId: 'refId', source: 'source', status: 'enable' },
      force: true,
      score: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.multigeocode.place.retrieve('docId', { key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.multigeocode.place.retrieve('docId', { key: 'key=API_KEY' });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.multigeocode.place.update('docId', { key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.multigeocode.place.update('docId', {
      key: 'key=API_KEY',
      dataSource: { refId: 'refId', source: 'source', status: 'enable' },
      place: [
        {
          address: 'address',
          building: 'building',
          city: 'city',
          country: 'country',
          district: 'district',
          geopoint: { lat: 0, lng: 0 },
          house: 'house',
          poi: { title: 'title' },
          postalCode: 'postalCode',
          state: 'state',
          street: 'street',
          subDistrict: 'subDistrict',
        },
      ],
      score: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.multigeocode.place.delete('docId', { key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.multigeocode.place.delete('docId', { key: 'key=API_KEY' });
  });
});
