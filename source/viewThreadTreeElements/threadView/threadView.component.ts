import {Component, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {ThreadViewDataset} from '../rootComponent/model/threadViewDataset';
import {ThreadD3node} from '../threadsView/model/threadD3node';
import {SvgHelper} from '../../utils/d3Helpers/svgHelper'
import {ViewProperties} from '../../propertyExplorer/viewProperties/viewProperties.component';
import {GeneSetD3node} from './model/geneSetD3node';
import {ThreadMapNodeD3node} from './model/threadMapNodeD3node';
import {ConnectionD3node} from './model/connectionD3node';
import {GeneSetKeyDto} from '../../data/AllDtos';
import {DrawGeneSetNodes} from './drawGeneSets';
import * as d3 from 'd3';

/*
    This component will be responsible drawing a linear representation of the nodes within a geneset
*/
@Component({
    selector: 'thread-view',
    templateUrl: './app/viewThreadTreeElements/threadView/threadView.html',
    directives: [ViewProperties],
    styleUrls: []
})
export class ThreadView implements OnChanges { 
    @Input() data : ThreadViewDataset;   
    @Input() selectedIndex : number;
    @Output() selectedThread : ThreadD3node;
    private svgHelper : SvgHelper; 
     
    constructor() {
        this.svgHelper = new SvgHelper();
    }

    ngOnChanges(data : {[key: string]: SimpleChange;}) {

        if (this.selectedIndex) {
            let divSelection = d3.select("#d3ThreadContainer");

            //find the thread that has been selected
            this.selectedThread = this.data.findThreadById(this.selectedIndex);

            //draw the selected threads nodes and connections
            if (divSelection && this.selectedThread) {

                // select and remove any exisiting svg 
                divSelection.select("svg").remove();

                // create a new svg
                divSelection.append("svg")
                    .attr("width", 800)
                    .attr("height", 10000)
                    .attr("class", "threadViewContainer");

                this.render(null);
            }
        }
    } 

    public render = (newValue : ThreadD3node) => {     

        // let height = Math.max(500, nodes.length * this.barHeight + this.margin.top + this.margin.bottom);
        // // recalculate the height of the required area (minimum 500)
        // d3.select("#d3ProperyExplorer").select("svg")
        //     .transition()
        //     .duration(this.duration)
        //     .attr("height", height);
        let geneSets = this.getGeneSetNode();

        DrawGeneSetNodes.drawGeneSets(geneSets);



    }

    // this is currently just test data
    getGeneSetNode = () => {

        /*
            Gene set 1
        */
        let geneSetNode1 = new GeneSetD3node();
        geneSetNode1.geneSetKeyDto = new GeneSetKeyDto();
        geneSetNode1.geneSetKeyDto.shortFormKey = "0.0";
        let threadMapNode1_1 = new ThreadMapNodeD3node();
        threadMapNode1_1.inputConnections = [
            new ConnectionD3node()
        ];
        threadMapNode1_1.outputConnections = [
            new ConnectionD3node(),
            new ConnectionD3node()
        ];
        let threadMapNode1_2 = new ThreadMapNodeD3node();
        threadMapNode1_2.inputConnections = [
            new ConnectionD3node()
        ];
        threadMapNode1_2.outputConnections = [
            new ConnectionD3node(),
            new ConnectionD3node()
        ];
        geneSetNode1.threadMapNodeD3nodes = 
        [
            threadMapNode1_1,
            threadMapNode1_2,
        ];

        /*
            Gene set 2
        */
        let geneSetNode2 = new GeneSetD3node();
        geneSetNode2.geneSetKeyDto = new GeneSetKeyDto();
        geneSetNode2.geneSetKeyDto.shortFormKey = "0.0";
        let threadMapNode2_1 = new ThreadMapNodeD3node();
        threadMapNode2_1.inputConnections = [
            new ConnectionD3node()
        ];
        threadMapNode2_1.outputConnections = [
            new ConnectionD3node(),
            new ConnectionD3node()
        ];
        let threadMapNode2_2 = new ThreadMapNodeD3node();
        threadMapNode2_2.inputConnections = [
            new ConnectionD3node()
        ];
        threadMapNode2_2.outputConnections = [
            new ConnectionD3node(),
            new ConnectionD3node()
        ];
        geneSetNode2.threadMapNodeD3nodes = 
        [
            threadMapNode2_1,
            threadMapNode2_2,
        ];


        let result : GeneSetD3node[] = 
        [
            geneSetNode1,
            geneSetNode2,
        ];

        return result;

    }

}