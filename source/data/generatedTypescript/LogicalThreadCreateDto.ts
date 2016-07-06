 import {ContextBasedActionSwitchDto} from './ContextBasedActionSwitchDto';
 import {WoollyKeyDto} from './WoollyKeyDto';
 
 export class LogicalThreadCreateDto { 
        public contextBasedActionSwitch: ContextBasedActionSwitchDto;
        public keySearchForward: boolean;
        public keyToSearchFor: WoollyKeyDto;
        public threadLifetime: number;
    }
