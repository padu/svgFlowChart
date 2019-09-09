
//
// Define the 'app' module.
//
angular.module('app', ['flowChart',])

	//
	// Simple service to create a prompt.
	//
	.factory('prompt', function () {

		/* Uncomment the following to test that the prompt service is working as expected.
		return function () {
			return "Test!";
		}
		*/

		// Return the browsers prompt function.
		return prompt;
	})

	//
	// Application controller.
	//
	.controller('AppCtrl', ['$scope', 'prompt', function AppCtrl($scope, prompt) {

		//
		// Code for the delete key.
		//
		var deleteKeyCode = 46;

		//
		// Code for control key.
		//
		var ctrlKeyCode = 17;

		//
		// Set to true when the ctrl key is down.
		//
		var ctrlDown = false;

		//
		// Code for A key.
		//
		var aKeyCode = 65;

		//
		// Code for esc key.
		//
		var escKeyCode = 27;

		//
		// Selects the next node id.
		//
		var nextNodeID = 10;

		//
		// Setup the data-model for the chart.
		//
		var chartDataModel = {
			"nodes": [
				{
					"name": "Input File",
					"id": 0,
					"x": 52,
					"y": 28,
					"width": 40,
					"text_position": "down",
					"outputConnectors": [
						{
							"name": "Read"
						}
					]
				},
				{
					"name": "Apply Business Rule",
					"id": 1,
					"x": 229,
					"y": 15,
					"type": "rule-block",
					"inputConnectors": [
						{
							"name": "in"
						}
					],
					"outputConnectors": [
						{
							"name": "reject"
						},
						{
							"name": "error"
						},
						{
							"name": "log"
						},
						{
							"name": "out"
						}
					],
					"width": 250
				},
				{
					"name": "Bad Data Cleanup Rules",
					"id": 2,
					"x": 233,
					"y": 127,
					"type": "rule-block",
					"inputConnectors": [
						{
							"name": "in"
						}
					],
					"outputConnectors": [
						{
							"name": "reject"
						},
						{
							"name": "error"
						},
						{
							"name": "log"
						},
						{
							"name": "out"
						}
					],
					"width": 250
				},
				{
					"name": "Generate Report of Bad Data",
					"id": 4,
					"x": 48,
					"y": 362,
					"type": "rule-block",
					"inputConnectors": [
						{
							"name": "in"
						}
					],
					"outputConnectors": [
						{
							"name": "reject"
						},
						{
							"name": "error"
						},
						{
							"name": "log"
						},
						{
							"name": "out"
						}
					],
					"width": 250
				},
				{
					"name": "Sort",
					"id": 5,
					"x": 575,
					"y": 22,
					"inputConnectors": [
						{
							"name": "in1"
						},
						{
							"name": "in2"
						}
					],
					"outputConnectors": [
						{
							"name": "out"
						}
					],
					"width": 100
				},
				{
					"name": "",
					"id": 6,
					"x": 49,
					"y": 105,
					"type": "rule-block",
					"inputConnectors": [
						{
							"name": "in1"
						}
					],
					"outputConnectors": [
						{
							"name": "out 1"
						},
						{
							"name": "out 2"
						},
						{
							"name": "out 3"
						}
					],
					"width": 100
				},
				{
					"name": "All Records that failed business rules",
					"id": 7,
					"x": 81,
					"y": 220,
					"text_position": "down",
					"inputConnectors": [
						{
							"name": "in"
						}
					],
					"width": 40
				},
				{
					"name": "Records that could not be cleanup",
					"id": 8,
					"x": 583,
					"y": 129,
					"text_position": "down",
					"inputConnectors": [
						{
							"name": "in"
						}
					],
					"width": 40
				},
				{
					"name": "MQ Publish Bad Record Report",
					"id": 9,
					"x": 391,
					"y": 365,
					"inputConnectors": [
						{
							"name": "in"
						}
					],
					"outputConnectors": [
						{
							"name": "reject"
						},
						{
							"name": "error"
						},
						{
							"name": "log"
						}
					],
					"width": 250
				},
				{
					"name": "Aggregate Dollars For Bad Records",
					"id": 3,
					"x": 237,
					"y": 240,
					"inputConnectors": [
						{
							"name": "in"
						}
					],
					"outputConnectors": [
						{
							"name": "reject"
						},
						{
							"name": "error"
						},
						{
							"name": "log"
						},
						{
							"name": "out"
						}
					],
					"width": 270
				}
			],
			"connections": [
				{
					"name": "Connection 1",
					"source": {
						"nodeID": 0,
						"connectorIndex": 0
					},
					"dest": {
						"nodeID": 1,
						"connectorIndex": 0
					}
				},
				{
					"source": {
						"nodeID": 1,
						"connectorIndex": 0
					},
					"dest": {
						"nodeID": 6,
						"connectorIndex": 0
					}
				},
				{
					"source": {
						"nodeID": 6,
						"connectorIndex": 0
					},
					"dest": {
						"nodeID": 2,
						"connectorIndex": 0
					}
				},
				{
					"source": {
						"nodeID": 6,
						"connectorIndex": 1
					},
					"dest": {
						"nodeID": 3,
						"connectorIndex": 0
					}
				},
				{
					"source": {
						"nodeID": 6,
						"connectorIndex": 2
					},
					"dest": {
						"nodeID": 7,
						"connectorIndex": 0
					}
				},
				{
					"source": {
						"nodeID": 2,
						"connectorIndex": 0
					},
					"dest": {
						"nodeID": 8,
						"connectorIndex": 0
					}
				},
				{
					"source": {
						"nodeID": 1,
						"connectorIndex": 3
					},
					"dest": {
						"nodeID": 5,
						"connectorIndex": 0
					}
				},
				{
					"source": {
						"nodeID": 2,
						"connectorIndex": 3
					},
					"dest": {
						"nodeID": 5,
						"connectorIndex": 1
					}
				},
				{
					"source": {
						"nodeID": 3,
						"connectorIndex": 3
					},
					"dest": {
						"nodeID": 4,
						"connectorIndex": 0
					}
				},
				{
					"source": {
						"nodeID": 4,
						"connectorIndex": 3
					},
					"dest": {
						"nodeID": 9,
						"connectorIndex": 0
					}
				}
			]
		};

		//
		// Event handler for key-down on the flowchart.
		//
		$scope.keyDown = function (evt) {
			if (evt.keyCode === ctrlKeyCode) {
				ctrlDown = true;
				evt.stopPropagation();
				evt.preventDefault();
			}
		};

		//
		// Event handler for key-up on the flowchart.
		//
		$scope.keyUp = function (evt) {

			if (evt.keyCode === deleteKeyCode) {
				//
				// Delete key.
				//
				$scope.chartViewModel.deleteSelected();
			}

			if (evt.keyCode == aKeyCode && ctrlDown) {
				// 
				// Ctrl + A
				//
				$scope.chartViewModel.selectAll();
			}

			if (evt.keyCode == escKeyCode) {
				// Escape.
				$scope.chartViewModel.deselectAll();
			}

			if (evt.keyCode === ctrlKeyCode) {
				ctrlDown = false;

				evt.stopPropagation();
				evt.preventDefault();
			}
		};

		//
		// Add a new node to the chart.
		//
		$scope.addNewNode = function () {

			var nodeName = prompt("Enter a node name:", "New node");
			if (!nodeName) {
				return;
			}

			//
			// Template for a new node.
			//
			var newNodeDataModel = {
				name: nodeName,
				id: nextNodeID++,
				x: 0,
				y: 0,
				inputConnectors: [
					{
						name: "X"
					},
					{
						name: "Y"
					},
					{
						name: "Z"
					}
				],
				outputConnectors: [
					{
						name: "1"
					},
					{
						name: "2"
					},
					{
						name: "3"
					}
				],
			};

			$scope.chartViewModel.addNode(newNodeDataModel);
		};

		//
		// Add an input connector to selected nodes.
		//
		$scope.addNewInputConnector = function () {
			var connectorName = prompt("Enter a connector name:", "New connector");
			if (!connectorName) {
				return;
			}

			var selectedNodes = $scope.chartViewModel.getSelectedNodes();
			for (var i = 0; i < selectedNodes.length; ++i) {
				var node = selectedNodes[i];
				node.addInputConnector({
					name: connectorName,
				});
			}
		};

		//
		// Add an output connector to selected nodes.
		//
		$scope.addNewOutputConnector = function () {
			var connectorName = prompt("Enter a connector name:", "New connector");
			if (!connectorName) {
				return;
			}

			var selectedNodes = $scope.chartViewModel.getSelectedNodes();
			for (var i = 0; i < selectedNodes.length; ++i) {
				var node = selectedNodes[i];
				node.addOutputConnector({
					name: connectorName,
				});
			}
		};

		//
		// Delete selected nodes and connections.
		//
		$scope.deleteSelected = function () {
			$scope.chartViewModel.deleteSelected();
		};

		//
		// Create the view-model for the chart and attach to the scope.
		//
		$scope.chartViewModel = new flowchart.ChartViewModel(chartDataModel);
		console.log('chart View Model : ',$scope.chartViewModel);
	}])
	;