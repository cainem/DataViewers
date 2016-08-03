import {ThreadMapThreadDto, LazyThreadMapThreadReferenceDto, ThreadMapThreadKeyDto} from '../../data/AllDtos';
import {IStringToThreadMapThreadDtoWithChildrenMap} from './IStringToThreadMapThreadDtoWithChildrenMap';

export interface mapCreatorInterface {
    createThreadMapThreadDtoWithChildrenMap : (allThreads : ThreadMapThreadDto[]) => IStringToThreadMapThreadDtoWithChildrenMap;
}