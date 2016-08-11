import {Component, Input, Output, EventEmitter, Injectable, Inject} from '@angular/core';
import {JsonTransformationService} from '../../service/jsonTransformationService';
import {ThreadMapRootDto} from '../../data/AllDtos';
import {ThreadViewDataset} from './threadViewDataset';
import {MapCreatorInterface} from './mapCreator.interface';
import {TransformToThreadD3node} from './transformToThreadD3node';
import {ThreadViewDatasetFactoryInterface} from './threadViewDatasetFactory.interface';

/*
    This class is responsible is transforming a ThreadMapRootDto into a ThreadViewDataset

    A ThreadMapRootDto is a flat view of threads where as ThreadViewDataset needs to be a hierarchical
    parent -> child view (for display purposes).
*/

@Injectable()
export class TransformJsonToThreadViewDataset implements JsonTransformationService  {

    constructor(@Inject(TransformToThreadD3node) private _transformToThreadD3node : TransformToThreadD3node,
        @Inject("MapCreatorInterface") private _mapCreator : MapCreatorInterface,
        @Inject("ThreadViewDatasetFactoryInterface") private _threadViewDatasetFactory : ThreadViewDatasetFactoryInterface) {        
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
 
        var result = this._threadViewDatasetFactory.create(transformed);

        return result;
    }

}
