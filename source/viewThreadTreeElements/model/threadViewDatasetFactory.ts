import {ThreadViewDatasetFactoryInterface} from './threadViewDatasetFactory.interface';
import {ThreadViewDataset} from './threadViewDataset';
import {ThreadD3nodeInterface} from './ThreadD3node.interface';

export class ThreadViewDatasetFactory implements ThreadViewDatasetFactoryInterface {
    create = (rootThread : ThreadD3nodeInterface) => {
        return new ThreadViewDataset(rootThread);
    }
}