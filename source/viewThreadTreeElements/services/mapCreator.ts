import {Injectable} from '@angular/core';
import {ThreadMapThreadDto, LazyThreadMapThreadReferenceDto, ThreadMapThreadKeyDto} from '../../data/AllDtos'
import {ThreadMapThreadDtoWithChildren} from './threadMapThreadDtoWithChildren';
import {KeyedThreadMapInterface} from './keyedThreadMap.interface';

@Injectable()
/*
This class is responsible for creating KeyedThreadMapInterface.
This maps a ThreadMapThreadDto to its short form key, a string keyed dictionary in essence

It is also responsible for contructing the threadMapThreadDtoWithChildren.
It constructs the all important child array

*/
export class MapCreator {
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