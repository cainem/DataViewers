import {WoollyKeyDto} from '../infrastructure/woollyKeyDto';
import {ContextBasedActionSwitchDto} from './contextBasedActionSwitchDto';

export interface LogicalJumpDto {
    contextBasedActionSwitch : ContextBasedActionSwitchDto;
    keySearchForward : boolean;
    keyToSearchFor : WoollyKeyDto;
}