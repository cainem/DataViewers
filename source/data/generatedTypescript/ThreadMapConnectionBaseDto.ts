 import {ThreadMapNodeKeyStoreDto} from './ThreadMapNodeKeyStoreDto';
 import {WoollyKeySearchDefinitionDto} from './WoollyKeySearchDefinitionDto';
 import {GeneSetKeyDto} from './GeneSetKeyDto'
 
 export class ThreadMapConnectionBaseDto { 
        public threadMapNodeKeyStore: ThreadMapNodeKeyStoreDto;
        public associatedConstant: number;
        public isConnectedToSearchedForNode: boolean;
        public connectionFunctionType: string;
        public threadMapConnectionType: string;
        public woollyKeySearchDefinition: WoollyKeySearchDefinitionDto;
        public newThreadThreadMapThreadKeyPosition: number;
        public geneSetSearchKey: GeneSetKeyDto;
    }
