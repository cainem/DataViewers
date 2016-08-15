import {Injectable, OpaqueToken} from '@angular/core';
import {ThreadViewDataset} from './threadViewDataset';
import {ThreadD3nodeInterface} from './ThreadD3node.interface';

export const ThreadViewDatasetCreatorToken = new OpaqueToken("ThreadViewDatasetCreator");

@Injectable()
export class ThreadViewDatasetCreator {
    create = (rootThread : ThreadD3nodeInterface) : ThreadViewDataset => {
        return new ThreadViewDataset(rootThread);
    }
}