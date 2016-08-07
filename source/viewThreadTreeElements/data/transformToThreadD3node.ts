import {Injectable, Inject} from '@angular/core';
import {ThreadMapRootDto, ThreadMapThreadDto} from '../../data/AllDtos';
import {KeyGeneratorInterface} from './keyGenerator.interface';
import {ThreadD3node} from './ThreadD3node';
import {TransformToThreadD3nodeInterface} from './transformToThreadD3node.interface'
import {ThreadMapThreadDtoWithChildren} from './threadMapThreadDtoWithChildren';
import {KeyedThreadMapInterface} from './keyedThreadMap.interface';

@Injectable()
export class TransformToThreadD3node implements TransformToThreadD3nodeInterface {

    constructor(@Inject("KeyGeneratorInterface") private keyGeneratorService : KeyGeneratorInterface) {
    }

    createThreadD3nodes = (allThreads :KeyedThreadMapInterface,
        rootThreadMapThreadDto : ThreadMapThreadDtoWithChildren) => {
            return this.createThreadD3node(allThreads, rootThreadMapThreadDto, 0);
    }    

    createThreadD3node = (allThreads :KeyedThreadMapInterface,
        threadMapThreadDtoWithChildren : ThreadMapThreadDtoWithChildren, depth : number) : ThreadD3node => {

        let threadD3Node = new ThreadD3node();
        threadD3Node.depth = depth;
        threadD3Node.id = this.keyGeneratorService.getNextKey();
        threadD3Node.threadMapThread = threadMapThreadDtoWithChildren.threadMapThreadDto;
        threadD3Node.childThreads = [];
        threadD3Node.geneSets = null;

        if (threadMapThreadDtoWithChildren.children && threadMapThreadDtoWithChildren.children.length > 0) {
            for(let i = 0; i < threadMapThreadDtoWithChildren.children.length; i++) {
                threadD3Node.childThreads.push(this.createThreadD3node(allThreads,
                    threadMapThreadDtoWithChildren.children[i], depth + 1));
            }
        }  

        return threadD3Node;
    }

}