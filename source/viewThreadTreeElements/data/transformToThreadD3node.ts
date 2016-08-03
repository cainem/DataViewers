import {ThreadMapRootDto, ThreadMapThreadDto} from '../../data/AllDtos';
import {IKeyGenerator} from './IKeyGenerator';
import {ThreadD3node} from './ThreadD3node';
import {ITransformToThreadD3node} from './ITransformToThreadD3node'
import {ThreadMapThreadDtoWithChildren} from './threadMapThreadDtoWithChildren';
import {IStringToThreadMapThreadDtoWithChildrenMap} from './IStringToThreadMapThreadDtoWithChildrenMap';

export class TransformToThreadD3node implements ITransformToThreadD3node {

    constructor(private keyGeneratorService : IKeyGenerator) {
    }

    createThreadD3nodes = (allThreads :IStringToThreadMapThreadDtoWithChildrenMap,
        rootThreadMapThreadDto : ThreadMapThreadDtoWithChildren) => {
            return this.createThreadD3node(allThreads, rootThreadMapThreadDto, 0);
    }    

    createThreadD3node = (allThreads :IStringToThreadMapThreadDtoWithChildrenMap,
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