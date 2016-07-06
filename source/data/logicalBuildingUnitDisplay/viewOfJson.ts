import {LogicalReaderReturnDto} from '../AllDtos';
import {Chromosome} from '../logicalBuildingUnitDisplay/chromosome';
import {Gene} from '../logicalBuildingUnitDisplay/gene';
import {Component, Input, Output, EventEmitter} from '@angular/core';

export class ViewOfJson {
	private _rawJson : any;

	@Output() rawJsonChanged : EventEmitter<Object> = new EventEmitter();

	get jsonAsLogicalStream(): Chromosome[] {
		let allLogicalReaderReturns = <LogicalReaderReturnDto[]>this.rawJson;
		let chromosomes : Chromosome[] = [];
		
		if (!allLogicalReaderReturns || allLogicalReaderReturns.length === 0) {
			return chromosomes;
		}
		
		let lastChromosomeNumber = allLogicalReaderReturns[0].currentPositionInGenome.chromosomePositionInGenome;
		let currentChromosome = new Chromosome();
		let lastGeneNumber = allLogicalReaderReturns[0].currentPositionInGenome.chromosomePosition.positionInChromosome;
		let currentGene = new Gene(); 
		for (let i = 0; i < allLogicalReaderReturns.length; i++) {
			let currentChromosomeNumber = allLogicalReaderReturns[i].currentPositionInGenome.chromosomePositionInGenome;
			let currentGeneNumber = allLogicalReaderReturns[i].currentPositionInGenome.chromosomePosition.positionInChromosome;
			if (lastChromosomeNumber !== currentChromosomeNumber) {
				// if the chromosome is changing then the gene certainly is
				lastGeneNumber = currentGeneNumber;
				currentChromosome.genes.push(currentGene);
				currentGene = new Gene();
											
				chromosomes.push(currentChromosome);
				lastChromosomeNumber = currentChromosomeNumber;
				currentChromosome = new Chromosome();
			}			
			else if (lastGeneNumber !== currentGeneNumber) {
				lastGeneNumber = currentGeneNumber;
				currentChromosome.genes.push(currentGene);
				currentGene = new Gene();
			}
			
			currentGene.logicalReaderReturns.push(allLogicalReaderReturns[i]);						
		}	
		
		//push on the last gene to the last chromosome and the last chromosome onto the chromosome array
		currentChromosome.genes.push(currentGene);
		chromosomes.push(currentChromosome);
		
		return chromosomes;			
	}
    			
    get rawJson(): any {
        return this._rawJson;
    }
	set rawJson(value : any) {
		this._rawJson = value;
		this.rawJsonChanged.next(value);
	}    	
}