import {OpaqueToken} from '@angular/core';

// for use in dependency injection
export const JsonTransformationService = new OpaqueToken("JsonTransformationService");

export interface JsonTransformationService {
    transformJson : (json :any) => any;    			
}