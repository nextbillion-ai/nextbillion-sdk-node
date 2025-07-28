// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource restrictions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.restrictions.create('turn', {
      key: 'key=API_KEY',
      area: 'area',
      name: 'name',
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
    const response = await client.restrictions.create('turn', {
      key: 'key=API_KEY',
      area: 'area',
      name: 'name',
      latlon: true,
      comment: 'comment',
      direction: '`forward`',
      end_time: 0,
      geofence: [[0]],
      height: 0,
      length: 0,
      mode: ['0w'],
      repeat_on: 'repeatOn="Mo-Fr 07:00-09:00,17:00-19:00"',
      segments: [{ from: 0, to: 0 }],
      speed: 0,
      speed_limit: 0,
      start_time: 0,
      tracks: [[0]],
      turns: [{ from: 0, to: 0, via: 0 }],
      weight: 0,
      width: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.restrictions.retrieve(0, { key: 'key=API_KEY' });
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
    const response = await client.restrictions.retrieve(0, { key: 'key=API_KEY', transform: true });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.restrictions.update(0, { key: 'key=API_KEY', area: 'area', name: 'name' });
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
    const response = await client.restrictions.update(0, {
      key: 'key=API_KEY',
      area: 'area',
      name: 'name',
      latlon: true,
      comment: 'comment',
      direction: '`forward`',
      end_time: 0,
      geofence: [[0]],
      height: 0,
      length: 0,
      mode: ['0w'],
      repeat_on: 'repeatOn="Mo-Fr 07:00-09:00,17:00-19:00"',
      segments: [{ from: 0, to: 0 }],
      speed: 0,
      speed_limit: 0,
      start_time: 0,
      tracks: [[0]],
      turns: [{ from: 0, to: 0, via: 0 }],
      weight: 0,
      width: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.restrictions.list({
      area: 'area',
      key: 'key=API_KEY',
      limit: 0,
      offset: 0,
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
  test.skip('list: required and optional params', async () => {
    const response = await client.restrictions.list({
      area: 'area',
      key: 'key=API_KEY',
      limit: 0,
      offset: 0,
      mode: '`0w`',
      name: 'name',
      restriction_type: '`turn`',
      source: 'rrt',
      state: '`enabled`',
      status: '`active`',
      transform: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.restrictions.delete(0, { key: 'key=API_KEY' });
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
    const response = await client.restrictions.delete(0, { key: 'key=API_KEY' });
  });

  // skipped: tests are disabled for the time being
  test.skip('listByBbox: only required params', async () => {
    const responsePromise = client.restrictions.listByBbox({
      key: 'key=API_KEY',
      max_lat: 0,
      max_lon: 0,
      min_lat: 0,
      min_lon: 0,
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
  test.skip('listByBbox: required and optional params', async () => {
    const response = await client.restrictions.listByBbox({
      key: 'key=API_KEY',
      max_lat: 0,
      max_lon: 0,
      min_lat: 0,
      min_lon: 0,
      mode: ['0w'],
      restriction_type: 'turn',
      source: 'rrt',
      state: '`enabled`',
      status: '`active`',
      transform: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('setState: only required params', async () => {
    const responsePromise = client.restrictions.setState(0, { key: 'key=API_KEY', state: '`enabled`' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('setState: required and optional params', async () => {
    const response = await client.restrictions.setState(0, { key: 'key=API_KEY', state: '`enabled`' });
  });
});
