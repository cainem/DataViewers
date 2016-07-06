 import {GenomePositionDto} from './GenomePositionDto';
 import {LogicalConnectionDto} from './LogicalConnectionDto';
 import {LogicalJumpDto} from './LogicalJumpDto';
 import {LogicalNodeDto} from './LogicalNodeDto';
 import {LogicalThreadControlDto} from './LogicalThreadControlDto';
 import {LogicalThreadCreateDto} from './LogicalThreadCreateDto';

  export class LogicalReaderReturnDto { 
        public typeOfLogicalBuildingUnit: string;
        public logicalBuildingUnit: LogicalConnectionDto | LogicalJumpDto | LogicalNodeDto | LogicalThreadControlDto | LogicalThreadCreateDto;;
        public nextGenomePosition: GenomePositionDto;
        public currentPositionInGenome: GenomePositionDto;
        public foodUnitsUsed: number;
    }
