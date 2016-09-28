import {ThreadMapThreadDtoWithChildren} from './threadMapThreadDtoWithChildren';

/*
This interface is necessary to define who a javascript object is used to store string keyed information
*/
export interface KeyedThreadMapInterface {
    [key : string] : ThreadMapThreadDtoWithChildren;
}
