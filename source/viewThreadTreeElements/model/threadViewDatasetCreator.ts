import {Injectable} from '@angular/core';
import {ThreadViewDataset} from './threadViewDataset';
import {ThreadD3nodeInterface} from './ThreadD3node.interface';

@Injectable()
export class ThreadViewDatasetCreator {

    constructor() {       
    }

    create = (rootThread : ThreadD3nodeInterface) => {
        return new ThreadViewDataset(rootThread);
    }
}