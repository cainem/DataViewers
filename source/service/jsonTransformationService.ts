import {OpaqueToken} from '@angular/core';

// for use in dependency injection
export const JsonTransformationToken = new OpaqueToken("JsonTransformationInterface");

export interface JsonTransformationInterface {
    transformJson : (json :any) => any;    			
}