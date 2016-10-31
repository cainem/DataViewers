import {ThreadMapThreadDto, ThreadMapThreadKeyDto} from '../../data/AllDtos'

/*
    This class is responsible for holding the ThreadMapThreadDto and its children
*/
export class ThreadMapThreadDtoWithChildren {
    threadMapThreadDto : ThreadMapThreadDto;
    private _internalChildren : ThreadMapThreadDtoWithChildren[];

    constructor(threadMapThreadDto : ThreadMapThreadDto) {
        this.threadMapThreadDto = threadMapThreadDto;
        this._internalChildren = [];
    }

    get children() : ThreadMapThreadDtoWithChildren[] {
        return this._internalChildren;
    }

    addChild = (child : ThreadMapThreadDtoWithChildren) => {
        this._internalChildren.push(child);
    }

    isKeyMatch = (key: ThreadMapThreadKeyDto) => {
        if (key === undefined || this.threadMapThreadDto.key === undefined) {
            return false;
        }
        
        return this.threadMapThreadDto.key.shortForm === key.shortForm;
    }

}