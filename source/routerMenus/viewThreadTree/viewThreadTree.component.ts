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
                debugText : "level 0",
                depth: 0,
                geneSets : [],
                childThreads : [
                    {
                        depth: 1,
                        debugText : "level 1",
                        geneSets : [],
                        childThreads : 
                        [
                            {
                                depth : 2,
                                debugText : "level 2",
                                geneSets : [],
                                childThreads : [
                                    {
                                        depth : 3,
                                        debugText : "level 3",
                                        geneSets : [],
                                        childThreads : [
                                            {
                                                depth : 4,
                                                debugText : "level 4",
                                                geneSets : [],
                                                childThreads :  []
                                            },
                                            {
                                                depth : 4,
                                                debugText : "level 4",
                                                geneSets: [],
                                                childThreads : []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                    }
                ]
            }
        };

    }
       
    ngOnInit () {               
        this.initData();                 
    }    
}
