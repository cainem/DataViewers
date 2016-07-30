import {ThreadMapThreadDto} from '../../data/AllDtos'

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
}