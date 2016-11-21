import {Injectable, Inject} from '@angular/core';
import {ThreadMapRootDto, ThreadMapThreadDto} from '../../../data/AllDtos';
import {KeyGenerator} from '../../../service/keyGenerator/keyGenerator';
import {ThreadD3node} from '../threadD3node';
import {ThreadMapThreadDtoWithChildren} from '../threadMapThreadDtoWithChildren';
import {KeyedThreadMapInterface} from '../keyedThreadMap.interface';

/*
    This class is responsible for turning the hierarchical threadMapThreadDtoWithChildren into the hierarchical
    structure of d3 nodes.
    Not much work is required here, arguably not enough to justify transformation.
    It's just setting up a unique id and the depth.
*/
@Injectable()
export class TransformToThreadD3node {

    constructor(public keyGeneratorService : KeyGenerator) {
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
        threadD3Node.geneSets = [];

        if (threadMapThreadDtoWithChildren.children && threadMapThreadDtoWithChildren.children.length > 0) {
            for(let i = 0; i < threadMapThreadDtoWithChildren.children.length; i++) {
                threadD3Node.childThreads.push(this.createThreadD3node(allThreads,
                    threadMapThreadDtoWithChildren.children[i], depth + 1));
            }
        }  

        return threadD3Node;
    }

}