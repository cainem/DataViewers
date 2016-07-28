import {Component, Input, Output, EventEmitter, Injectable} from '@angular/core';
import {JsonTransformationService} from '../../service/jsonTransformationService';
import {ThreadMapRootDto} from '../../data/AllDtos';
import {ThreadViewDataset} from './threadViewDataset';

/*
    This class is responsible is transforming a ThreadMapRootDto into a ThreadViewDataset

    A ThreadMapRootDto is a flat view of threads where as ThreadViewDataset needs to be a hierarchical
    parent -> child view (for display purposes).
*/

export class TransformJsonToThreadViewDataset implements JsonTransformationService  {
    transformJson : (json :any) => any = (json: any) => {
        return null;
    } 

    typedTransformJson : (json : ThreadMapRootDto) => ThreadViewDataset = (json: ThreadMapRootDto) => {
        return null;
    }

    

}
