import {Component, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {ThreadViewDataset} from '../services/threadViewDataset';
import {ThreadD3node} from '../services/threadD3node';
import {SvgHelper} from '../../utils/d3Helpers/svgHelper'
import {ViewPropertiesComponent} from '../../propertyExplorer/viewProperties/viewProperties.component';
import {GeneSetD3node} from '../services/geneSetD3node';
import {ThreadMapNodeD3node} from '../services/threadMapNodeD3node';
import {ConnectionD3node} from '../services/connectionD3node';
import {GeneSetKeyDto} from '../../data/AllDtos';
import {DrawGeneSetNodes} from './drawGeneSets';
import {DrawThreadMapNode} from './drawThreadMapNode';
import {SvgAssets} from './svgAssets';
import {SelectedAssetTrackerService} from '../services/assetTracker/selectedAssetTracker.service';
import * as d3 from 'd3';

/*
    This component will be responsible drawing a linear representation of the nodes within a geneset
*/
@Component({
    selector: 'thread-view',
    templateUrl: './app/viewThreadTreeElements/threadView/threadView.html',
    styleUrls: [ './app/viewThreadTreeElements/threadView/threadView.css'],
    providers: [        
    ]
})
export class ThreadViewComponent implements OnChanges { 
    public selectedThread : ThreadD3node;    
    @Input() data : ThreadViewDataset;   
    @Input() selectedIndex : number;
    @Output() hidingChanged : EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input() public set showOuterLeft(value : boolean) {
        this._showOuterLeft = value;
        if (this._showOuterLeft && this.showRight) {
            this.toggleRight(null);
        }
    }
    public get showOuterLeft() : boolean {
        return this._showOuterLeft;
    }

    public showRight : boolean = false;
    public showLeft : boolean = true;
    public class6 : string = "col-md-6 expanded";
    public collapsedClass : string = "col-md-1 collapsed";
    public class11 : string = "col-md-11 expanded"
    public classLeft : string;
    public classRight : string;
    public leftButtonText : string;
    public rightButtonText : string;
    private _showOuterLeft: boolean;
    private svgHelper : SvgHelper; 
    private lastSelectedIndex : number;
    private currentGeneSets : GeneSetD3node[] = null;

    constructor(private _selectedAssetTracker : SelectedAssetTrackerService) {
        this.svgHelper = new SvgHelper();

        this._selectedAssetTracker.selectedChanged.subscribe(item => { 
            this.selectedThread = <ThreadD3node>item.selected;
            });

        this.classLeft = this.class6;
        this.classRight = this.class6;
        this.rightButtonText = "hide right";
        this.leftButtonText = "hide left";       
        this.onShowChange(); 
    }

    ngOnChanges(data : {[key: string]: SimpleChange;}) {

        // an external change could have driven the ngOnChanges so recheck.
        this.onShowChange();

        if (this.selectedIndex) {
            let divSelection = d3.select("#d3ThreadContainer");

            //find the thread that has been selected
            this.selectedThread = this.data.findThreadById(this.selectedIndex);

            //draw the selected threads nodes and connections
            if (divSelection && this.selectedThread) {

                if (this.selectedIndex != this.lastSelectedIndex)
                {
                    this.lastSelectedIndex = this.selectedIndex;

                    console.log("removing and adding svg");

                    // select and remove any exisiting svg 
                    divSelection.select("svg").remove();

                    this.currentGeneSets = this.getGeneSetNode();
                    let height = 10;
                    this.currentGeneSets.forEach((g, i) => {
                        height += g.heightOfGeneSet()
                        height += 10; // gene set spacing
                    }) 

                    // create a new svg
                    let svg = divSelection.append("svg")
                        .attr("width", "100%")
                        .attr("preserveAspectRatio", "none")
                        .attr("class", "threadViewContainer")
                        .attr("height", height)
                        .attr("viewBox", "0 0 1000 " + height);

                    SvgAssets.addArrowHead("threadViewContainer");
                }

                this.render(null);
            }
        }
    } 

    public render = (newValue : ThreadD3node[]) => {     
        DrawGeneSetNodes.drawGeneSets(this._selectedAssetTracker, this.currentGeneSets);
    }

    public toggleLeft = (event) => {
        this.showLeft = !this.showLeft;
        this.onShowChange();
    }

    public toggleRight = (event) => {
        this.showRight = !this.showRight;
        this.hidingChanged.emit(this.showRight);
        this.onShowChange();
    }      

    private onShowChange = () => {
        this.classLeft = !this.showLeft ? this.collapsedClass : this.showRight ? this.class6 : this.class11;  
        this.leftButtonText = this.showLeft ? "hide left" : "show left";
        this.classRight = !this.showRight ? this.collapsedClass : this.showLeft ? this.class6 : this.class11;
        this.rightButtonText =this.showRight ? "hide right" : "show right";
        this.hidingChanged.emit(this.showRight);
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
            // new ConnectionD3node(),
            // new ConnectionD3node()
        ];
        let threadMapNode1_2 = new ThreadMapNodeD3node();
        threadMapNode1_2.inputConnections = [
            // new ConnectionD3node()
        ];
        threadMapNode1_2.outputConnections = [
            // new ConnectionD3node(),
            // new ConnectionD3node()
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
        geneSetNode2.geneSetKeyDto.shortFormKey = "0.1";
        let threadMapNode2_1 = new ThreadMapNodeD3node();
        threadMapNode2_1.inputConnections = [
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
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
        let threadMapNode2_3 = new ThreadMapNodeD3node();
        threadMapNode2_3.inputConnections = [
            new ConnectionD3node()
        ];
        threadMapNode2_3.outputConnections = [
            new ConnectionD3node(),
            new ConnectionD3node()
        ];
        
        geneSetNode2.threadMapNodeD3nodes = 
        [
            threadMapNode2_1,
            threadMapNode2_2,
            threadMapNode2_3,
        ];


        /*
            Gene set 3
        */
        let geneSetNode3 = new GeneSetD3node();
        geneSetNode3.geneSetKeyDto = new GeneSetKeyDto();
        geneSetNode3.geneSetKeyDto.shortFormKey = "0.2";
        let threadMapNode3_1 = new ThreadMapNodeD3node();
        threadMapNode3_1.inputConnections = [
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node(),
            new ConnectionD3node()
        ];
        threadMapNode3_1.outputConnections = [
            new ConnectionD3node(),
            new ConnectionD3node()
        ];
        let threadMapNode3_2 = new ThreadMapNodeD3node();
        threadMapNode3_2.inputConnections = [
            new ConnectionD3node()
        ];
        threadMapNode3_2.outputConnections = [
            new ConnectionD3node(),
            new ConnectionD3node()
        ];
        geneSetNode3.threadMapNodeD3nodes = 
        [
            threadMapNode3_1,
            threadMapNode3_2,
        ];


        /*
            Combine all gene sets into one array
        */
        let result : GeneSetD3node[] = 
        [
            geneSetNode1,
            geneSetNode2,
            geneSetNode3,
        ];

        return result;

    }

}