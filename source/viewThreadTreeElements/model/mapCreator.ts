import {Injectable} from '@angular/core';
import {ThreadMapThreadDto, LazyThreadMapThreadReferenceDto, ThreadMapThreadKeyDto} from '../../data/AllDtos'
import {ThreadMapThreadDtoWithChildren} from './ThreadMapThreadDtoWithChildren';
import {KeyedThreadMapInterface} from './keyedThreadMap.interface';
import {MapCreatorInterface} from './mapCreator.interface';

@Injectable()
export class MapCreator implements MapCreatorInterface {
    createThreadMapThreadDtoWithChildrenMap = (allThreads : ThreadMapThreadDto[]) :KeyedThreadMapInterface => {
        let result : KeyedThreadMapInterface = {};
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