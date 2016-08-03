import {ThreadMapRootDto, ThreadMapThreadDto} from '../../data/AllDtos';
import {IKeyGenerator} from './IKeyGenerator';
import {ThreadD3node} from './ThreadD3node';
import {ThreadMapThreadDtoWithChildren} from './threadMapThreadDtoWithChildren';
import {IStringToThreadMapThreadDtoWithChildrenMap} from './IStringToThreadMapThreadDtoWithChildrenMap';


export interface ITransformToThreadD3node {
    createThreadD3nodes: (allThreads :IStringToThreadMapThreadDtoWithChildrenMap,
        rootThreadMapThreadDto : ThreadMapThreadDtoWithChildren) => ThreadD3node;

    createThreadD3node:  (allThreads :IStringToThreadMapThreadDtoWithChildrenMap,
        threadMapThreadDtoWithChildren : ThreadMapThreadDtoWithChildren, depth : number) => ThreadD3node;
}