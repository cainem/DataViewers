import { IThreadViewDataset  } from '../../viewThreadTreeElements/data/IThreadViewDataset';
import { ThreadViewDataset  } from '../../viewThreadTreeElements/data/ThreadViewDataset';
import { ThreadsView } from '../../viewThreadTreeElements/threadsView/threadsView.component';
import { ThreadView } from '../../viewThreadTreeElements/threadView/threadView.component'
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    templateUrl: './app/routerMenus/viewThreadTree/viewThreadTree.html',
    directives: [ ThreadsView, ThreadView ],
    styleUrls: ['./app/routerMenus/viewThreadTree/viewThreadTree.css']
})
export class ViewThreadTree implements OnInit {
    
    public data : IThreadViewDataset
    public selectedIndex : number;

    public selectionChanged(event : number) {
        this.selectedIndex = event;
    }

    initData = () => {
        this.data = new ThreadViewDataset({
                id : 1,
                debugText : "level 0",
                depth: 0,
                geneSets : [],
                childThreads : [
                    {
                        id : 2,
                        depth: 1,
                        debugText : "level 1",
                        geneSets : [],
                        childThreads : 
                        [
                            {
                                id : 3,
                                depth : 2,
                                debugText : "level 2",
                                geneSets : [],
                                childThreads : [
                                    {
                                        id : 4,
                                        depth : 3,
                                        debugText : "level 3",
                                        geneSets : [],
                                        childThreads : [
                                            {
                                                id : 5,
                                                depth : 4,
                                                debugText : "level 4",
                                                geneSets : [],
                                                childThreads :  []
                                            },
                                            {
                                                id : 6,
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
                    },
                    {
                        id : 7,
                        depth : 1,
                        debugText : "level 1",
                        geneSets : [],
                        childThreads: []
                    }
                ]
            }
        );

    }
       
    ngOnInit () {               
        this.initData();                 
    }    
}
