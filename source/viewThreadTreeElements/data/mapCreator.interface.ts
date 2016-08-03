import {ThreadMapThreadDto, LazyThreadMapThreadReferenceDto, ThreadMapThreadKeyDto} from '../../data/AllDtos';
import {keyedThreadMapInterface} from './keyedThreadMap.interface';

export interface mapCreatorInterface {
    createThreadMapThreadDtoWithChildrenMap : (allThreads : ThreadMapThreadDto[]) => keyedThreadMapInterface;
}