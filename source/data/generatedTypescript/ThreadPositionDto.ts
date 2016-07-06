 import {RangeDto} from './RangeDto';
 
 export class ThreadPositionDto { 
        public upperRange: RangeDto;
        public lowerRange: RangeDto;
        public depth: number;
        public isUpperNext: boolean;
        public position: number;
    }
