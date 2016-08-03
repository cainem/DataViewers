import {ThreadMapRootDto, ThreadMapThreadDto} from '../../data/AllDtos';
import {keyGeneratorInterface} from './keyGenerator.interface';
import {ThreadD3node} from './ThreadD3node';
import {ThreadMapThreadDtoWithChildren} from './threadMapThreadDtoWithChildren';
import {keyedThreadMapInterface} from './keyedThreadMap.interface';


export interface ITransformToThreadD3node {
    createThreadD3nodes: (allThreads :keyedThreadMapInterface,
        rootThreadMapThreadDto : ThreadMapThreadDtoWithChildren) => ThreadD3node;

    createThreadD3node:  (allThreads :keyedThreadMapInterface,
        threadMapThreadDtoWithChildren : ThreadMapThreadDtoWithChildren, depth : number) => ThreadD3node;
}