import {Injectable, OpaqueToken} from '@angular/core';
import {ThreadViewDataset} from './threadViewDataset';
import {ThreadD3node} from './ThreadD3node';

export const ThreadViewDatasetCreatorToken = new OpaqueToken("ThreadViewDatasetCreator");

@Injectable()
export class ThreadViewDatasetCreator {
    create = (rootThread : ThreadD3node) : ThreadViewDataset => {
        return new ThreadViewDataset(rootThread);
    }
}