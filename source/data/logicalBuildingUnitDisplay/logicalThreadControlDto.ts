import { ContextBasedActionSwitchDto } from './contextBasedActionSwitchDto';

export interface LogicalThreadControlDto
{
     contextBasedActionSwitch : ContextBasedActionSwitchDto;
     markThreadComplete : boolean;
     returnControlFoodLimit : number;
}