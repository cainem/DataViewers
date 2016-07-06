 import {PendingConnectionListDto} from './PendingConnectionListDto';
 import {ThreadMapNodeFunctionDto} from './ThreadMapNodeFunctionDto';
 import {ThreadMapNodeKeyDto} from './ThreadMapNodeKeyDto';
 import {WoollyKeyDto} from './WoollyKeyDto';
 import {ImplicitThreadMapConnectionSettingsDto} from './ImplicitThreadMapConnectionSettingsDto';
 
 export class ThreadMapNodeDto { 
        public pendingConnectionList: PendingConnectionListDto;
        public nodeFunctions: ThreadMapNodeFunctionDto[];
        public threadMapNodeKey: ThreadMapNodeKeyDto;
        public nodeKey: WoollyKeyDto;
        public isSynchronizing: boolean;
        public implicitThreadMapConnectionSettings: ImplicitThreadMapConnectionSettingsDto;
    }
