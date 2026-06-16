import { test, expect, request } from '@playwright/test';
import config from '../../config/config.json' with {type: 'json'}

export class ApiCommons {

    private requestContext: any;
    private response: any;

    //create the request context
    async initializeRequestContext() {
        this.requestContext = await request.newContext({
            baseURL: config.api.base_url,
            extraHTTPHeaders: {
                'Authorization': config.api.token
            }
        });
    }

    //send request and get response
    async getResponse(requestType: string, endpoint: string, payload?: any) {
        switch (requestType.toLowerCase()) {
            case 'get':
                this.response = await this.requestContext.get(endpoint);
                break;
            case 'post':
                this.response = await this.requestContext.post(endpoint, { data: payload });
                break;
            case 'patch':
                this.response = await this.requestContext.patch(endpoint, { data: payload });
                break;
            case 'delete':
                this.response = await this.requestContext.delete(endpoint);
                break;
            default:
                throw new Error(`unsupported request type: ${requestType}`);
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        return this.response;

    }

    async validateStatusCode(expectedStatusCode: number) {
        const actualStatusCode = await this.response.status();
        expect(actualStatusCode).toBe(expectedStatusCode);        
      
    }

    async validatestatusMessage(expectedStatusMessage: string) {
        const actualStatusMessage =  await this.response.statusText();
        expect(actualStatusMessage).toBe(expectedStatusMessage);
    }

    async validateResponseBody(key: string, expectedValue:any) {
        const responseBody = await this.response.json();
        const actualValue = responseBody[key.toLowerCase()] ?? responseBody[key];
        expect(actualValue).toBe(expectedValue);
    }

    async validateResponseHeaders(headerKey: string, expectedValue: string) {
        const headers = await this.response.headers();
        const actualHeaders = await headers[headerKey.toLowerCase()]
        expect(actualHeaders).toBe(expectedValue);
    }

    async validateResponseSchema(key: string, expectedValue: string) {
        const responseBody = await this.response.json();
        const actualValue = await responseBody[key.toLowerCase()]
        expect(typeof actualValue).toBe(expectedValue)
    }

}
