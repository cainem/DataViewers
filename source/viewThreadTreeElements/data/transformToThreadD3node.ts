import {ThreadMapRootDto, ThreadMapThreadDto} from '../../data/AllDtos';
import {keyGeneratorInterface} from './keyGenerator.interface';
import {ThreadD3node} from './ThreadD3node';
import {transformToThreadD3nodeInterface} from './transformToThreadD3node.interface'
import {ThreadMapThreadDtoWithChildren} from './threadMapThreadDtoWithChildren';
import {keyedThreadMapInterface} from './keyedThreadMap.interface';

export class TransformToThreadD3node implements transformToThreadD3nodeInterface {

    constructor(private keyGeneratorService : keyGeneratorInterface) {
    }

    createThreadD3nodes = (allThreads :keyedThreadMapInterface,
        rootThreadMapThreadDto : ThreadMapThreadDtoWithChildren) => {
            return this.createThreadD3node(allThreads, rootThreadMapThreadDto, 0);
    }    

    createThreadD3node = (allThreads :keyedThreadMapInterface,
        threadMapThreadDtoWithChildren : ThreadMapThreadDtoWithChildren, depth : number) : ThreadD3node => {

        let threadD3Node = new ThreadD3node();
        threadD3Node.depth = depth;
        threadD3Node.id = this.keyGeneratorService.getNextKey();
        threadD3Node.threadMapThread = threadMapThreadDtoWithChildren.threadMapThreadDto;
        threadD3Node.childThreads = [];

        if (threadMapThreadDtoWithChildren.children && threadMapThreadDtoWithChildren.children.length > 0) {
            for(let i = 0; i < threadMapThreadDtoWithChildren.children.length; i++) {
                threadD3Node.childThreads.push(this.createThreadD3node(allThreads,
                    threadMapThreadDtoWithChildren.children[i], depth + 1));
            }
        }  

        return threadD3Node;
    }

}