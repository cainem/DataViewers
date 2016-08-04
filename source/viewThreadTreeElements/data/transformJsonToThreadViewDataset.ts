import {Component, Input, Output, EventEmitter, Injectable} from '@angular/core';
import {JsonTransformationService} from '../../service/jsonTransformationService';
import {ThreadMapRootDto} from '../../data/AllDtos';
import {ThreadViewDataset} from './threadViewDataset';
import {TransformToThreadD3nodeInterface} from './transformToThreadD3node.interface';
import {MapCreatorInterface} from './mapCreator.interface';
import {ThreadViewDatasetFactoryInterface} from './threadViewDatasetFactory.interface';

/*
    This class is responsible is transforming a ThreadMapRootDto into a ThreadViewDataset

    A ThreadMapRootDto is a flat view of threads where as ThreadViewDataset needs to be a hierarchical
    parent -> child view (for display purposes).
*/

export class TransformJsonToThreadViewDataset implements JsonTransformationService  {

    constructor(private _transformToThreadD3node : TransformToThreadD3nodeInterface,
        private _mapCreator : MapCreatorInterface,
        private _threadViewDatasetFactory : ThreadViewDatasetFactoryInterface) {        
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
