import {threadViewDatasetFactoryInterface} from './threadViewDatasetFactory.interface';
import {ThreadViewDataset} from './threadViewDataset';

export class ThreadViewDatasetFactory implements threadViewDatasetFactoryInterface {
    create = () => {
        return new ThreadViewDataset();
    }
}