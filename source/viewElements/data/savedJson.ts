[{
	"typeOfLogicalBuildingUnit": "LogicalNode",
	"logicalBuildingUnit": {
		"logicalNodeFunctions": [],
		"logicalImplicitConnectionSettings": {
			"createsAnImplicitConnection" : true,
			"isConnectedToSearchNode" : true,
			"associatedConstant" : 99,
			"connectionFunctionType" : "identity"
		},
		"isSynchronising": false,
		"key": {
			"internalKey": 0,
			"keyLength": 3
		}
	},
	"nextGenomePosition": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 2
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 1
			}
		}
	},
	"foodUnitsUsed": 1
},

{
	"typeOfLogicalBuildingUnit": "LogicalNode",
	"logicalBuildingUnit": {
		"logicalNodeFunctions": [],
		"logicalImplicitConnectionSettings": null,
		"isSynchronising": false,
		"key": {
			"internalKey": 0,
			"keyLength": 3
		}
	},
	"nextGenomePosition": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 3
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 2
			}
		}
	},
	"foodUnitsUsed": 1
},

{
	"typeOfLogicalBuildingUnit": "LogicalConnection",
	"logicalBuildingUnit": {
		"keyToSearchFor": {
			"internalKey": 0,
			"keyLength": 2
		},
		"connectionFunctionType": "Identity",
		"isLocal": false,
		"isConnectToSearchedForNode": false,
		"associatedConstant": 0.0,
		"searchRange": 255
	},
	"nextGenomePosition": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 4
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 3
			}
		}
	},
	"foodUnitsUsed": 1
},

{
	"typeOfLogicalBuildingUnit": "LogicalNode",
	"logicalBuildingUnit": {
		"logicalNodeFunctions": [{
			"functionType": "Identity",
			"associatedConstant": 0.0
		}],
		"logicalImplicitConnectionSettings": null,
		"isSynchronising": false,
		"key": {
			"internalKey": 0,
			"keyLength": 3
		}
	},
	"nextGenomePosition": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 6
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 5
			}
		}
	},
	"foodUnitsUsed": 2
},
{
	"typeOfLogicalBuildingUnit": "LogicalConnection",
	"logicalBuildingUnit": {
		"keyToSearchFor": {
			"internalKey": 0,
			"keyLength": 2
		},
		"connectionFunctionType": "Identity",
		"isLocal": false,
		"isConnectToSearchedForNode": false,
		"associatedConstant": 0.0,
		"searchRange": 255
	},
	"nextGenomePosition": null,
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 1,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 0
			}
		}
	},
	"foodUnitsUsed": 1
},

	{
		"typeOfLogicalBuildingUnit": "LogicalJump",
		"logicalBuildingUnit": {
			"keySearchForward": false,
			"keyToSearchFor": {
				"internalKey": 0,
				"keyLength": 3
			},
			"contextBasedActionSwitch" : {
				"contextSwitchType" : "something",
				"isUpperLimit" : true,
				"contextLimit" : 99
			}
		},
		"nextGenomePosition": {
			"chromosomePositionInGenome": 0,
			"chromosomePosition": {
				"positionInChromosome": 0,
				"genePairPosition": {
					"isMother": true,
					"genePosition": 3
				}
			}
		},
		"currentPositionInGenome": {
			"chromosomePositionInGenome": 0,
			"chromosomePosition": {
				"positionInChromosome": 1,
				"genePairPosition": {
					"isMother": true,
					"genePosition": 1
				}
			}
		},
		"foodUnitsUsed": 1
	},

	{
		"typeOfLogicalBuildingUnit": "LogicalThreadControl",
		"logicalBuildingUnit": {
			"markThreadComplete": false,
			"returnControlFoodLimit": 100,
			"contextBasedActionSwitch" : {
				"contextSwitchType" : "something",
				"isUpperLimit" : true,
				"contextLimit" : 99
			}
		},
		"nextGenomePosition": {
			"chromosomePositionInGenome": 1,
			"chromosomePosition": {
				"positionInChromosome": 0,
				"genePairPosition": {
					"isMother": true,
					"genePosition": 1
				}
			}
		},
		"currentPositionInGenome": {
			"chromosomePositionInGenome": 1,
			"chromosomePosition": {
				"positionInChromosome": 0,
				"genePairPosition": {
					"isMother": true,
					"genePosition": 0
				}
			}
		},
		"foodUnitsUsed": 1
	}  

]