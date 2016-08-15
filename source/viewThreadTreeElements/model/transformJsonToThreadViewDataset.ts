import {Component, Input, Output, EventEmitter, Injectable, Inject, Injector} from '@angular/core';
import {JsonTransformationInterface} from '../../service/jsonTransformationService';
import {ThreadMapRootDto} from '../../data/AllDtos';
import {ThreadViewDataset} from './threadViewDataset';
import {MapCreator} from './mapCreator';
import {TransformToThreadD3node} from './transformToThreadD3node';
import {ThreadViewDatasetCreator, ThreadViewDatasetCreatorToken} from './threadViewDatasetCreator';
/*
    This class is responsible is transforming a ThreadMapRootDto into a ThreadViewDataset

    A ThreadMapRootDto is a flat view of threads where as ThreadViewDataset needs to be a hierarchical
    parent -> child view (for display purposes).
*/

@Injectable()
export class TransformJsonToThreadViewDataset implements JsonTransformationInterface  {

    constructor(
        @Inject("TransformToThreadD3node") private _transformToThreadD3node : TransformToThreadD3node,
        private _mapCreator : MapCreator,
        @Inject("ThreadViewDatasetCreatorToken") private _threadViewDatasetCreator : ThreadViewDatasetCreator) {      
            console.log("here");  
    }

    transformJson : (json :any) => any = (json: any) => {
        return this.typedTransformJson(<ThreadMapRootDto>json);
    } 

    typedTransformJson : (json : ThreadMapRootDto) => ThreadViewDataset = (json: ThreadMapRootDto) => {
        if (!json) {
            throw ("json not valid");            
        }

        let map = this._mapCreator.createThreadMapThreadDtoWithChildrenMap(json.allThreads);

        let transformed = this._transformToThreadD3node.createThreadD3nodes(map,
             map[json.rootThreadMapThread.key.shortForm]);
 
        var result = this._threadViewDatasetCreator.create(transformed);

        return result;
    }

}
