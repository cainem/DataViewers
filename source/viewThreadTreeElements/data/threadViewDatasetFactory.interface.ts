import {ThreadViewDataset} from './threadViewDataset';

export interface threadViewDatasetFactoryInterface {
    create : () => ThreadViewDataset;
} 