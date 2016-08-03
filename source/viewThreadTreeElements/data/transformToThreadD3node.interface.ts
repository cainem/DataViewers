import {ThreadMapRootDto, ThreadMapThreadDto} from '../../data/AllDtos';
import {KeyGeneratorInterface} from './keyGenerator.interface';
import {ThreadD3node} from './ThreadD3node';
import {ThreadMapThreadDtoWithChildren} from './threadMapThreadDtoWithChildren';
import {KeyedThreadMapInterface} from './keyedThreadMap.interface';


export interface TransformToThreadD3nodeInterface {
    createThreadD3nodes: (allThreads :KeyedThreadMapInterface,
        rootThreadMapThreadDto : ThreadMapThreadDtoWithChildren) => ThreadD3node;

    createThreadD3node:  (allThreads :KeyedThreadMapInterface,
        threadMapThreadDtoWithChildren : ThreadMapThreadDtoWithChildren, depth : number) => ThreadD3node;
}