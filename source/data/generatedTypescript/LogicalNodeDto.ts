 import {LogicalNodeFunctionDto} from './LogicalNodeFunctionDto';
 import {LogicalImplicitConnectionSettingsDto} from './LogicalImplicitConnectionSettingsDto';
 import {WoollyKeyDto} from './WoollyKeyDto';
 
 export class LogicalNodeDto { 
        public logicalNodeFunctions: LogicalNodeFunctionDto[];
        public logicalImplicitConnectionSettings: LogicalImplicitConnectionSettingsDto;
        public isSynchronising: boolean;
        public key: WoollyKeyDto;
    }
