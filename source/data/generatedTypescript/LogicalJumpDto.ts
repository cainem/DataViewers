 import {ContextBasedActionSwitchDto} from './ContextBasedActionSwitchDto';
 import {WoollyKeyDto} from './WoollyKeyDto';
 
 export class LogicalJumpDto { 
        public contextBasedActionSwitch: ContextBasedActionSwitchDto;
        public keySearchForward: boolean;
        public keyToSearchFor: WoollyKeyDto;
    }
