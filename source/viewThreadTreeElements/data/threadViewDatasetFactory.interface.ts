import {ThreadViewDataset} from './threadViewDataset';
import {ThreadD3nodeInterface} from './ThreadD3node.interface';

export interface ThreadViewDatasetFactoryInterface {
    create : (root : ThreadD3nodeInterface) => ThreadViewDataset;
} 