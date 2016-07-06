 import {GeneSetKeyDto} from './GeneSetKeyDto';
 import {LazyThreadMapThreadReferenceDto} from './LazyThreadMapThreadReferenceDto';
 import {GeneSetDto} from './GeneSetDto';
 import {ThreadMapThreadKeyDto} from './ThreadMapThreadKeyDto';
 import {ThreadLifeManagerDto} from './ThreadLifeManagerDto';
 import {ThreadPositionDto} from './ThreadPositionDto';

  export class ThreadMapThreadDto { 
        public creationGeneSet: GeneSetKeyDto;
        public lazyThreadMapThreadReference: LazyThreadMapThreadReferenceDto;
        public internalGeneSets: GeneSetDto[];
        public key: ThreadMapThreadKeyDto;
        public lifeManager: ThreadLifeManagerDto;
        public threadPosition: ThreadPositionDto;
    }
