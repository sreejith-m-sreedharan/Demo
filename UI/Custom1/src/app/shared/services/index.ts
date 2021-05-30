import { RestApiService } from './rest-api.service';
import { UIRenderService } from './UIRender.service';
import { UtilService } from './util.service';

export const services = [RestApiService, UtilService, UIRenderService];

export * from './rest-api.service';
export * from './util.service';
export * from './UIRender.service';
