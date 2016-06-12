import { IThreadViewDataset  } from '../../viewThreadTreeElements/data/IThreadViewDataset';
import { ThreadViewContainer } from '../../viewThreadTreeElements/threadViewcontainer/threadViewContainer.component';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    templateUrl: './app/routerMenus/viewThreadTree/viewThreadTree.html',
    directives: [ ThreadViewContainer ],
    styleUrls: ['./app/routerMenus/viewThreadTree/viewThreadTree.css']
})
export class ViewThreadTree implements OnInit {
    
    public data : IThreadViewDataset

    initData = () => {
        this.data = {
            rootThread : {
                geneSets : [],
                childThreads : [
                    {
                        childThreads : 
                        [
                            {
                                geneSets : [],
                                childThreads : [
                                    {
                                        geneSets : [],
                                        childThreads : [
                                            {
                                                geneSets : [],
                                                childThreads :  []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        geneSets : []
                    }
                ]
            }
        };

    }
       
    ngOnInit () {               
        this.initData();                 
    }    
}
