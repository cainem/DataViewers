import {ThreadMapThreadDto, LazyThreadMapThreadReferenceDto, ThreadMapThreadKeyDto} from '../../data/AllDtos'

export class TransformHelper {
    static isKeyMatch (thread: ThreadMapThreadDto, key: ThreadMapThreadKeyDto) : boolean {
        if (key === undefined || thread.key === undefined) {
            return false;
        }
        return thread.key.shortForm === key.shortForm;
    }

    static findParentThread(allThreads : ThreadMapThreadDto[], parentReference : LazyThreadMapThreadReferenceDto ) : ThreadMapThreadDto {
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
}