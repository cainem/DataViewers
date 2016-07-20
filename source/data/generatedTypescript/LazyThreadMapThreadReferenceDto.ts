 import {ThreadMapThreadKeyDto} from './ThreadMapThreadKeyDto'
 import {ThreadMapThreadDto} from './ThreadMapThreadDto'
 
 export class LazyThreadMapThreadReferenceDto { 
        public isConnected: boolean;
        public threadMapThreadKey: ThreadMapThreadKeyDto;
        public targetThreadMapThread: ThreadMapThreadDto;
    }
