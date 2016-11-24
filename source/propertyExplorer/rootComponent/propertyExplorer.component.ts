import * as d3 from 'd3';
import {Component, ClassProvider, Input, OnChanges, Inject} from '@angular/core';
import {SvgHelper} from '../../utils/d3Helpers/svgHelper';
import {TransformToCollapsibleIndentedNode} from '../model/transformToCollapsibleIndentedNode';
import {KeyGenerator} from '../../service/keyGenerator/keyGenerator';
import {CollapsibleIndentedNode} from '../model/collapsibleIndentedNode'
import {JsonTransformationToken, JsonTransformationInterface} from '../../service/JsonTransformationService';

@Component({
    selector: 'property-explorer',
    templateUrl: './propertyExplorer/rootComponent/propertyExplorer.html',
    providers: 
    [
        TransformToCollapsibleIndentedNode,
        { provide : JsonTransformationToken, useClass: TransformToCollapsibleIndentedNode },
        KeyGenerator
    ],
})
export class PropertyExplorerComponent {
    
    @Input() public data : any;

    public onJsonChanged : (value : any) => void = (value: any) => {
        this.data = value; //this.transformationService.transformJson(value);
    }      
}