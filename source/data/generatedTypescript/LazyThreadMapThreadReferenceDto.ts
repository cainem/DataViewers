 import {ThreadMapThreadKeyDto} from './ThreadMapThreadKeyDto'
 import {ThreadMapThreadDto} from './ThreadMapThreadDto'
 
 export class LazyThreadMapThreadReferenceDto { 
        public containingThread: ThreadMapThreadDto;
        public threadMapThreadKey: ThreadMapThreadKeyDto;
        public targetThreadMapThread: ThreadMapThreadDto;
    }
