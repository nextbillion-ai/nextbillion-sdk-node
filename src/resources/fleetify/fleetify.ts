// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentTemplatesAPI from './document-templates';
import {
  DocumentTemplateContentRequest,
  DocumentTemplateContentResponse,
  DocumentTemplateCreateParams,
  DocumentTemplateCreateResponse,
  DocumentTemplateDeleteParams,
  DocumentTemplateDeleteResponse,
  DocumentTemplateListParams,
  DocumentTemplateListResponse,
  DocumentTemplateRetrieveParams,
  DocumentTemplateRetrieveResponse,
  DocumentTemplateUpdateParams,
  DocumentTemplateUpdateResponse,
  DocumentTemplates,
} from './document-templates';
import * as RoutesAPI from './routes/routes';
import {
  Response,
  RouteCreateParams,
  RouteCreateResponse,
  RouteRedispatchParams,
  RouteRedispatchResponse,
  Routes,
} from './routes/routes';

export class Fleetify extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  documentTemplates: DocumentTemplatesAPI.DocumentTemplates = new DocumentTemplatesAPI.DocumentTemplates(
    this._client,
  );
}

Fleetify.Routes = Routes;
Fleetify.DocumentTemplates = DocumentTemplates;

export declare namespace Fleetify {
  export {
    Routes as Routes,
    type Response as Response,
    type RouteCreateResponse as RouteCreateResponse,
    type RouteRedispatchResponse as RouteRedispatchResponse,
    type RouteCreateParams as RouteCreateParams,
    type RouteRedispatchParams as RouteRedispatchParams,
  };

  export {
    DocumentTemplates as DocumentTemplates,
    type DocumentTemplateContentRequest as DocumentTemplateContentRequest,
    type DocumentTemplateContentResponse as DocumentTemplateContentResponse,
    type DocumentTemplateCreateResponse as DocumentTemplateCreateResponse,
    type DocumentTemplateRetrieveResponse as DocumentTemplateRetrieveResponse,
    type DocumentTemplateUpdateResponse as DocumentTemplateUpdateResponse,
    type DocumentTemplateListResponse as DocumentTemplateListResponse,
    type DocumentTemplateDeleteResponse as DocumentTemplateDeleteResponse,
    type DocumentTemplateCreateParams as DocumentTemplateCreateParams,
    type DocumentTemplateRetrieveParams as DocumentTemplateRetrieveParams,
    type DocumentTemplateUpdateParams as DocumentTemplateUpdateParams,
    type DocumentTemplateListParams as DocumentTemplateListParams,
    type DocumentTemplateDeleteParams as DocumentTemplateDeleteParams,
  };
}
