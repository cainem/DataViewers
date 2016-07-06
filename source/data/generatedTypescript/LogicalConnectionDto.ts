 import {WoollyKeyDto} from './WoollyKeyDto';
 
 export class LogicalConnectionDto { 
        public keyToSearchFor: WoollyKeyDto;
        public connectionFunctionType: string;
        public isLocal: boolean;
        public isConnectToSearchedForNode: boolean;
        public associatedConstant: number;
        public searchRange: number;
    }
