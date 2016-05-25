import {WoollyKeyDto} from '../infrastructure/WoollyKeyDto'
import {LogicalNodeFunctionDto} from './logicalNodeFunctionDto'
import {LogicalImplicitConnectionSettingsDto} from './logicalImplicitConnectionSettingsDto'

export interface LogicalNodeDto {
    logicalNodeFunctions : LogicalNodeFunctionDto[];
    logicalImplicitConnectionSettings : LogicalImplicitConnectionSettingsDto;
    isSynchronising : boolean;
    key : WoollyKeyDto 
}