import {GenePairPositionDto} from "./genePairPositionDto"

export interface ChromosomePositionDto
{
    positionInChromosome : number;
    genePairPosition : GenePairPositionDto;
}