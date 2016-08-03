import {ThreadMapThreadDto, LazyThreadMapThreadReferenceDto, ThreadMapThreadKeyDto} from '../../data/AllDtos';
import {IStringToThreadMapThreadDtoWithChildrenMap} from './IStringToThreadMapThreadDtoWithChildrenMap';

export interface IMapCreator {
    createThreadMapThreadDtoWithChildrenMap : (allThreads : ThreadMapThreadDto[]) => IStringToThreadMapThreadDtoWithChildrenMap;
}