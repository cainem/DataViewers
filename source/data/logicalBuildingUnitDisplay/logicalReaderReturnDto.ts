import {LogicalConnectionDto} from "./logicalConnectionDto"
import {LogicalJumpDto} from "./logicalJumpDto"
import {LogicalNodeDto} from "./logicalNodeDto"
import {LogicalThreadControlDto} from "./logicalThreadControlDto"
import {LogicalThreadCreateDto} from "./logicalThreadCreateDto"
import {GenomePositionDto} from "../infrastructure/genomePositionDto"

export interface ILogicalReaderReturn {
    typeOfLogicalBuildingUnit : string;
    logicalBuildingUnit: LogicalConnectionDto | LogicalJumpDto | LogicalNodeDto | LogicalThreadControlDto | LogicalThreadCreateDto;
    nextGenomePosition : GenomePositionDto;
    currentPositionInGenome: GenomePositionDto;
    foodUnitsUsed: number;
}