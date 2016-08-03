import {ThreadMapThreadDto, LazyThreadMapThreadReferenceDto, ThreadMapThreadKeyDto} from '../../data/AllDtos';
import {KeyedThreadMapInterface} from './keyedThreadMap.interface';

export interface MapCreatorInterface {
    createThreadMapThreadDtoWithChildrenMap : (allThreads : ThreadMapThreadDto[]) => KeyedThreadMapInterface;
}