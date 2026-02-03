// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from '@nbai/sdk';

export const parseAuthHeaders = (req: IncomingMessage, required?: boolean): Partial<ClientOptions> => {
  const apiKey =
    Array.isArray(req.headers['x-nextbillion-sdk-api-key']) ?
      req.headers['x-nextbillion-sdk-api-key'][0]
    : req.headers['x-nextbillion-sdk-api-key'];
  return { apiKey };
};
