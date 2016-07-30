import {ThreadMapThreadDto, LazyThreadMapThreadReferenceDto, ThreadMapThreadKeyDto} from '../../data/AllDtos'
import {ThreadMapThreadDtoWithChildren} from './ThreadMapThreadDtoWithChildren';

export class TransformHelper {
    static isKeyMatch (thread: ThreadMapThreadDtoWithChildren, key: ThreadMapThreadKeyDto) : boolean {
        if (key === undefined || thread.threadMapThreadDto.key === undefined) {
            return false;
        }
        
        return thread.threadMapThreadDto.key.shortForm === key.shortForm;
    }

    static findParentThread(allThreads : ThreadMapThreadDtoWithChildren[], 
        parentReference : LazyThreadMapThreadReferenceDto ) : ThreadMapThreadDtoWithChildren {

        if (allThreads === null || parentReference === null) {
            return null;
        }
        for (let i = 0; i < allThreads.length; i++) {
            if (TransformHelper.isKeyMatch(allThreads[i], parentReference.threadMapThreadKey)) {
                return allThreads[i];
            }
        }
        //no match
        return null;
    }

    static createThreadMapThreadDtoWithChildrenArray(allThreads : ThreadMapThreadDtoWithChildren[]) : ThreadMapThreadDtoWithChildren[] {
        let result : ThreadMapThreadDtoWithChildren[] = [];
        // build the array completely with no child relationships
        for (let i = 0; i < allThreads.length; i++) {
            let element = allThreads[i];
            result.push(element);
        }

        // loop over a second time filling in the child relationships
        for (let i = 0; i < result.length; i++) {
            let element = result[i];
            if (element.threadMapThreadDto.lazyParentThread !== null) {
                let parent = TransformHelper.findParentThread(result, element.threadMapThreadDto.lazyParentThread);
                parent.addChild(element);
            }
        }
        
        return result;
    }

}