import {Component, OnInit} from '@angular/core';
import {NodesAndConnections} from '../../viewMachineElements/nodesAndConnections/nodesAndConnections.component';
import {LinksAndNodesData} from '../../viewMachineElements/nodesAndConnections/linksAndNodesData';
import * as d3 from 'd3';

@Component({
    templateUrl: './app/routerMenus/viewThreadTree/viewThreadTree.html',
    directives: [NodesAndConnections],
    styleUrls: ['./app/routerMenus/viewThreadTree/viewThreadTree.css']
})
export class ViewThreadTree implements OnInit {
    
    public data : LinksAndNodesData;

    initData = () => {
        this.data = {
            nodes: [
                { 
                    name: "A",
                    x: 200,
                    y: 150
                },
                {
                    name: "B",
                    x: 140,
                    y: 300
                },
                {
                    name: "C",
                    x: 300,
                    y: 300
                },
                {
                    name: "D",
                    x: 300,
                    y: 180
                }],
            links: [
                {
                    source: 0,
                    target: 1
                },
                {
                    source: 1,
                    target: 2
                },
                {
                    source: 2,
                    target: 3
                }]
        }
    }
       
    ngOnInit () {               
        this.initData();                 
    }    
}
