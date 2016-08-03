import {ThreadMapThreadDto, LazyThreadMapThreadReferenceDto, ThreadMapThreadKeyDto} from '../../data/AllDtos'
import {ThreadMapThreadDtoWithChildren} from './ThreadMapThreadDtoWithChildren';
import {IStringToThreadMapThreadDtoWithChildrenMap} from './IStringToThreadMapThreadDtoWithChildrenMap';
import {IMapCreator} from './IMapCreator';

export class MapCreator implements IMapCreator {
    createThreadMapThreadDtoWithChildrenMap = (allThreads : ThreadMapThreadDto[]) :IStringToThreadMapThreadDtoWithChildrenMap => {
        let result : IStringToThreadMapThreadDtoWithChildrenMap = {};
        // build the array completely with no child relationships
        for (let i = 0; i < allThreads.length; i++) {
            let element = allThreads[i];
            result[element.key.shortForm] = new ThreadMapThreadDtoWithChildren(element);
        }

        // loop over a second time filling in the child relationships
        for(let key in result) {
            let element = result[key];
            if (element.threadMapThreadDto.lazyParentThread) {
                let parent = result[element.threadMapThreadDto.lazyParentThread.threadMapThreadKey.shortForm];
                parent.addChild(element);
            }
            
        }
        
        return result;
    }
    
}