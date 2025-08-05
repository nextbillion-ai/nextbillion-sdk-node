// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from '@nbai/sdk/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey =
    req.headers['x-nextbillion-sdk-api-key'] instanceof Array ?
      req.headers['x-nextbillion-sdk-api-key'][0]
    : req.headers['x-nextbillion-sdk-api-key'];
  return { apiKey };
};
