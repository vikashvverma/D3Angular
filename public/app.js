// create module for custom directives
var d3DemoApp = angular.module('d3DemoApp', []);

// controller business logic
d3DemoApp.controller('AppCtrl', function AppCtrl($scope) {
  $scope.chartData = [{
      "name": "muESP",
      "type": "platform",
      "icon": "platform.jpg"
  }, {
      "name": "mkennedy0",
      "ip": "230.110.80.252",
      "state": "OFF",
      "type": "device",
      "icon": "workstation.jpg",
      "subType": "Workstation"
  }, {
      "name": "dhart1",
      "ip": "160.244.92.225",
      "state": "OFF",
      "type": "device",
      "icon": "odroid.png",
      "subType": "Odroid"
  }, {
      "name": "psnyder2",
      "ip": "196.6.114.66",
      "state": "ON",
      "type": "device",
      "icon": "workstation.jpg",
      "subType": "Workstation"
  }, {
      "name": "wmason3",
      "ip": "159.133.212.242",
      "state": "ON",
      "type": "device",
      "icon": "workstation.jpg",
      "subType": "Workstation"
  }, {
      "name": "dwelch4",
      "ip": "129.221.38.250",
      "state": "ON",
      "type": "device",
      "icon": "workstation.jpg",
      "subType": "Workstation"
  }, {
      "name": "gjames5",
      "ip": "109.185.173.250",
      "state": "OFF",
      "type": "device",
      "icon": "workstation.jpg",
      "subType": "Workstation"
  }, {
      "name": "mhudson6",
      "ip": "120.195.120.36",
      "state": "OFF",
      "type": "device",
      "icon": "odroid.png",
      "subType": "Odroid"
  }, {
      "name": "jmitchell7",
      "ip": "39.9.43.102",
      "state": "OFF",
      "type": "device",
      "icon": "odroid.png",
      "subType": "Odroid"
  }, {
      "name": "epeterson8",
      "ip": "244.7.14.0",
      "state": "ON",
      "type": "device",
      "icon": "workstation.jpg",
      "subType": "Workstation"
  }, {
      "name": "wholmes9",
      "ip": "44.43.25.30",
      "state": "ON",
      "type": "device",
      "icon": "odroid.png",
      "subType": "Odroid"
  }, {
      "id": 27,
      "name": "dmartinez0",
      "icon": "eco123.jpg",
      "type": "ecosystem"
  }, {
      "id": 86,
      "name": "jsimmons1",
      "icon": "eco123.jpg",
      "type": "ecosystem"
  }, {
      "id": 72,
      "name": "aowens2",
      "icon": "eco123.jpg",
      "type": "ecosystem"
  }, {
      "id": 7,
      "name": "twest3",
      "icon": "eco123.jpg",
      "type": "ecosystem"
  }, {
      "id": 15,
      "name": "lray4",
      "icon": "eco123.jpg",
      "type": "ecosystem"
  }, {
      "id": 93,
      "state": "Dead",
      "name": "ereid0",
      "icon": "agency123.png",
      "type": "agency"
  }, {
      "id": 65,
      "state": "Exception",
      "name": "mwelch1",
      "icon": "agency123.png",
      "type": "agency"
  }, {
      "id": 66,
      "state": "Dead",
      "name": "lford3",
      "icon": "agency123.png",
      "type": "agency"
  }, {
      "id": 71,
      "state": "Publishing",
      "name": "jbarnes5",
      "icon": "agency123.png",
      "type": "agency"
  }, {
      "id": 1,
      "state": "Dead",
      "name": "wtucker6",
      "icon": "agency123.png",
      "type": "agency"
  }, {
      "id": 64,
      "state": "Live",
      "name": "lmills7",
      "icon": "agency123.png",
      "type": "agency"
  }, {
      "id": 42,
      "state": "Dead",
      "name": "welliott8",
      "icon": "agency123.png",
      "type": "agency"
  }, {
      "id": 53,
      "state": "Publishing",
      "name": "kbishop9",
      "icon": "agency123.png",
      "type": "agency"
  }, {
      "id": 95,
      "mainFileType": "groovyFile",
      "icon": "groovyAgent.png",
      "name": "ggilbert2s",
      "type": "agent",
      "agencyName": "kbishop9",
      "ecosystemName": "lray4",
      "deviceIP": "230.110.80.252"
  }, {
      "id": 195,
      "mainFileType": "groovyFile",
      "icon": "groovyAgent.png",
      "name": "test",
      "type": "agent",
      "agencyName": "kbishop9",
      "ecosystemName": "lray4",
      "deviceIP": "230.110.80.252"
  }, {
      "id": 13,
      "mainFileType": "rFile",
      "icon": "RAgent.png",
      "name": "kcunningham2t",
      "type": "agent",
      "agencyName": "kbishop9",
      "ecosystemName": "lray4",
      "deviceIP": "160.244.92.225"
  }, {
      "id": 43,
      "mainFileType": "rFile",
      "icon": "RAgent.png",
      "name": "bpowell2u",
      "type": "agent",
      "agencyName": "ereid0",
      "ecosystemName": "lray4",
      "deviceIP": "196.6.114.66"
  }, {
      "id": 62,
      "mainFileType": "rFile",
      "icon": "RAgent.png",
      "name": "flawson2v",
      "type": "agent",
      "agencyName": "ereid0",
      "ecosystemName": "lray4",
      "deviceIP": "159.133.212.242"
  }, {
      "id": 34,
      "mainFileType": "groovyFile",
      "icon": "groovyAgent.png",
      "name": "lflores2w",
      "type": "agent",
      "agencyName": "mwelch1",
      "ecosystemName": "twest3",
      "deviceIP": "129.221.38.250"
  }, {
      "id": 75,
      "mainFileType": "pyFile",
      "icon": "pyAgent.png",
      "name": "wroberts2x",
      "type": "agent",
      "agencyName": "welliott8",
      "ecosystemName": "aowens2",
      "deviceIP": "109.185.173.250"
  }, {
      "id": 68,
      "mainFileType": "pyFile",
      "icon": "pyAgent.png",
      "name": "mkelley2y",
      "type": "agent",
      "agencyName": "lmills7",
      "ecosystemName": "aowens2",
      "deviceIP": "120.195.120.36"
  }, {
      "id": 48,
      "mainFileType": "rFile",
      "icon": "RAgent.png",
      "name": "tgriffin2z",
      "type": "agent",
      "agencyName": "wtucker6",
      "ecosystemName": "jsimmons1",
      "deviceIP": "39.9.43.102"
  }, {
      "id": 67,
      "mainFileType": "rFile",
      "icon": "RAgent.png",
      "name": "jvasquez30",
      "type": "agent",
      "agencyName": "jbarnes5",
      "ecosystemName": "dmartinez0",
      "deviceIP": "244.7.14.0"
  }, {
      "id": 20,
      "mainFileType": "groovyFile",
      "icon": "groovyAgent.png",
      "name": "jcox31",
      "type": "agent",
      "agencyName": "lford3",
      "ecosystemName": "dmartinez0",
      "deviceIP": "44.43.25.30"
  }];
});
d3DemoApp.directive('forceCollapisble', function() {

      function fCollapsible(scope, element, attrs) {
        this.param = ['ecosystem', 'agency', 'agent'];
          this.parentId=element[0];
          var params = this.param;
          $(this.parentId).html("");
          // $(this.parentId).append(this.template);
          var width = '1000'; // set width to container width
          var height = '700'; // set height to container height
          //  Use this.parentId for refernce to DOM element to create visualization.
          //  Use this.model.attributes.properties.get('count').attributes.propertyValue
          //  to link to property in "PROP.js" file

          var bubble = {
            radius: 20,
            stroke: 'aqua',
            colors: 'white',
            width: 25,
            height: 25
          };

          var bubbleLink = {
            distance: 80,
            strength:1,
            charge: -300,
            gravity: 0.05
          };


          // var radius =40 / 2 ,
          //     root;
          var root,
            n = 60;




          d3.behavior.zoom();
          var zoom = d3.behavior.zoom()
            .scaleExtent([1, 10])
            .on("zoom", zoomed);


          var drag = d3.behavior.drag()
            .origin(function(d) {
              return d;
            })
            .on("dragstart", dragstarted)
            .on("drag", dragged)
            .on("dragend", dragended);


          var force = d3.layout.force()
            .size([width, height]);
          //.on("tick", tick);

          /*
      		var force = d3.layout.force(),
      		safety = 10;
      		while(force.alpha() > 0.05) { // You'll want to try out different, "small" values for this
      		    force.tick();
      		    if(safety++ > 500) {
      		      break;// Avoids infinite looping in case this solution was a bad idea
      		    }
      		}

      		if(safety < 500) {
      		  console.log('success??');
      		}

      	*/

          var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([0, 0])
            .html(function(d) {
              return d.type + ": <span style='color:orangered'>" + d.name + "</span>";
            });
          // .style("stroke-width", 4);

          var svg = d3.select(this.parentId).append("svg")
            .attr('class', 'svg-body')
            .attr("width", width)
            .attr("height", height)
            .style("pointer-events", "all")
            //.on("mouseover", mouseover)
            //.on("mouseout", mouseout)
            .append("g");

          /*
                  $(this.parentId).mouseenter(mouseover);
                  $(this.parentId).mouseleave(mouseout);
              */
          var rect = svg.append("rect")
            .attr("width", width)
            //.attr("id", "panzoom")
            .attr("height", height)
            .style("fill", "none")
            .style("pointer-events", "all")
            .call(zoom).on('mousedown.drag', null).on("dblclick.zoom", null);

          var container = svg.append("g")
            .attr("class", "undraggable")
            .style("pointer-events", "all");

          // container.append("g")
          //     .attr("class", "x axis")
          //   .selectAll("line")
          //     .data(d3.range(0, width, 10))
          //   .enter().append("line")
          //     .attr("x1", function(d) { return d; })
          //     .attr("y1", 0)
          //     .attr("x2", function(d) { return d; })
          //     .attr("y2", height);

          // container.append("g")
          //     .attr("class", "y axis")
          //   .selectAll("line")
          //     .data(d3.range(0, height, 10))
          //   .enter().append("line")
          //     .attr("x1", 0)
          //     .attr("y1", function(d) { return d; })
          //     .attr("x2", width)
          //     .attr("y2", function(d) { return d; });


          var button1 = document.createElement('a');
          button1.setAttribute("href", "javascript:void(0);");
          button1.setAttribute("class", "zoomPanDefault");
          /*
                  var button2 = document.createElement('a');
      		button2.setAttribute("href", "javascript:void(0);");
      		button2.setAttribute("class", "zoomIn");

      	    var button3 = document.createElement('a');
      		button3.setAttribute("href", "javascript:void(0);");
      		button3.setAttribute("class", "zoomOut");
      	*/
          var parentDiv = document.createElement('div');
          parentDiv.setAttribute("class", "overLay");
          //parentDiv.setAttribute("id", "panzoom");
          parentDiv.appendChild(button1);
          //	parentDiv.appendChild(button2);
          //	parentDiv.appendChild(button3);

          // button.innerHTML = 'Default Pan/Zoom';
          // button.classList.add("ui-wedget-icon-chat");
          //button.className = "ui-wedget icon chat";
          //newSpan = document.createElement('span');
          // newSpan.innerHTML = 'Default Pan/Zoom';
          // button.appendChild(newSpan);
          // newSpan.setAttribute('class', 'icon chat');
          button1.style = {
              "position": "absolute",
              "left": "0",
              "botton": "0",
              "z-index": "1000"
            }
            //	button2.style = {"position": "absolute", "left": "0", "botton": "0", "z-index": "1000"}
            //	button3.style = {"position": "absolute", "left": "0", "botton": "0", "z-index": "1000"}

          button1.onclick = function() {
            //d3.select(".forceGraph").attr("transform", "translate(0,0)scale(1)");
            container.attr("transform", "translate(0,0)scale(1)");
            zoom.translate([0, 0]);
            zoom.scale([1]);
          };


          $(this.parentId).append(parentDiv);


          /*
      		function mouseover(event){
      			document.getElementsByClassName('overLay')[0].style.display = "block";
      		}

      		function mouseout(event){
      			//console.log(window.event.currentTarget);
      			document.getElementsByClassName('overLay')[0].style.display = "none";
      		}
      	*/
          //Toggle stores whether the highlighting is on
          var toggle = 0;
          //Create an array logging what is connected to what
          /*
      		var linkedByIndex = {};
      		for (i = 0; i < graph.nodes.length; i++) {
      		    linkedByIndex[i + "," + i] = 1;
      		};
      		graph.links.forEach(function (d) {
      		    linkedByIndex[d.source.index + "," + d.target.index] = 1;
      		});
      		//This function looks up whether a pair are neighbours
      		function neighboring(a, b) {
      		    return linkedByIndex[a.index + "," + b.index];
      		}
      		*/
          function connectedNodes(d) {
            console.log(d);
            if (toggle == 0) {
              node.style("opacity", 0.07)
              a = node[0].filter(function(obj) {
                obj.children[0].style.setProperty("stroke-width", "3", "important");
                return obj.__data__ === d;
              })[0];
              a.style.opacity = 1;
              a.children[0].style.setProperty("stroke-width", "9", "important");

              toggle = 0;

            } else {
              //Put them back to opacity=1
              node[0].filter(function(obj) {
                obj.children[0].style.setProperty("stroke-width", "3", "important");
                return obj.__data__ === d;
              });
              node.style("opacity", 1);
              toggle = 0;

            }
          }

          function defaultPanZoom() {
            //d3.select(".forceGraph").attr("transform", "translate(0,0)scale(1)");
            container.attr("transform", "translate(0,0)scale(1)");
            zoom.translate([0, 0]);
            zoom.scale([1]);
          }

          svg.call(tip);

          var link = container.selectAll(".link"),
            node = container.selectAll(".node");




          // d3.json("json/test.json", function(error, flare) {
          var json = JSON.parse(JSON.stringify(scope.chartData));
          root = transform(params, json);
          // root = flare;
          update();
          // });
          var theView = this;

          function update() {
            var nodes = flatten(root),
              links = d3.layout.tree().links(nodes);

            // Restart the force layout.
            force.nodes(nodes)
              .links(links)
              .linkDistance(bubbleLink.distance)
              .charge(bubbleLink.charge)
              .linkStrength(bubbleLink.strength)
              .gravity(bubbleLink.gravity)
              .friction(0.7)
              .on('start', start)
              .start();




            // .nodes(nodes)
            // .links(links)
            // .linkDistance(80)
            // .charge(-300)
            // .linkStrength(1)
            // .gravity(0.05)
            // .start();

            // Update the links
            link = link.data(links) //, function(d) { return d.target.id; });

            // Exit any old links.
            link.exit().remove();

            // Enter any new links.
            link.enter().insert("line", ".node")
              .attr("class", "link")
              .attr("x1", function(d) {
                return d.source.x;
              })
              .attr("y1", function(d) {
                return d.source.y;
              })
              .attr("x2", function(d) {
                return d.target.x;
              })
              .attr("y2", function(d) {
                return d.target.y;
              });

            // Update the nodes
            node = node.data(nodes)

            // Exit any old nodes.
            node.exit().remove();

            // Enter any new nodes.
            node.enter().append("g")
              .attr("class", "node")
              .on("dblclick", click)
              .on("click", function(d) {
                mouseclick(d);
                connectedNodes(d);
              })
              .on('mouseover', tip.show)
              .on('mouseout',
                tip.hide)
              .call(force.drag);

            node.append("circle")
              .attr("r", bubble.radius)
              .attr('class', 'circle')
              .style("fill", bubble.colors)
              //.style("stroke-width", 2);
              .style("stroke-width", bubble.stroke)
              .style("stroke", function(d) {
                console.log(d.state);
                if (d.state == "LIVE") {
                  return "#008000";
                } else if (d.state == "DYING") {
                  return "#A52A2A";
                } else if (d.state == "INIT") {
                  return "#90EE90";
                } else if (d.state == "ON") {
                  return "#008000";

                } else if (d.state == "PUBLISHED") {
                  return "#A52A2A";

                } else {
                  //return "#3182bd";
                  return "grey";
                }
              });

            node.append('image')
              .attr("xlink:href", function(d) {
                return  d.icon
                  // return "./img/vcl/usercomponents"+d.icon
              })
              .attr('class', 'img')
              .attr("width", bubble.width)
              .attr("height", bubble.height)
              .attr('x', -12)
              .attr('y', -12)

            svg.style("opacity", 0.2)
              .transition()
              .duration(500)
              .style("opacity", 1);
          }

          function start() {
            var ticksPerRender = 6;

            requestAnimationFrame(function render() {

              for (var i = 0; i < ticksPerRender; i++) {
                force.tick();
              }

              link.attr("x1", function(d) {
                  return d.source.x;
                })
                .attr("y1", function(d) {
                  return d.source.y;
                })
                .attr("x2", function(d) {
                  return d.target.x;
                })
                .attr("y2", function(d) {
                  return d.target.y;
                });


              node.attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
              });
              // node.attr("transform", function(d) { return "translate(" + (Math.max(radius, Math.min(width - radius, d.x))) + "," +
              //   (Math.max(radius, Math.min(height - radius, d.y))) + ")"; });

              if (force.alpha() > 0.005) {
                requestAnimationFrame(render);
              }
            });
          }

          /*
      	    function thisTick(){
        		for (var i = n * n; i > 0; --i) force.tick();
      	    }
      	    */
          /*
      force.start();
      for (var i = 0; i < n; ++i) force.tick();
      force.stop();
      */


          function tick() {

            //console.log(e.alpha);
            link.attr("x1", function(d) {
                return d.source.x;
              })
              .attr("y1", function(d) {
                return d.source.y;
              })
              .attr("x2", function(d) {
                return d.target.x;
              })
              .attr("y2", function(d) {
                return d.target.y;
              });


            node.attr("transform", function(d) {
              return "translate(" + d.x + "," + d.y + ")";
            });
            // node.attr("transform", function(d) { return "translate(" + (Math.max(radius, Math.min(width - radius, d.x))) + "," +
            //   (Math.max(radius, Math.min(height - radius, d.y))) + ")"; });
          }

          // Toggle children on click.
          function click(d) {
            if (!d3.event.defaultPrevented) {
              if (d.children) {
                d._children = d.children;
                d.children = null;
              } else {
                d.children = d._children;
                d._children = null;
              }
              update();
            }
          }

          function mouseclick(d) {
            console.log(d);
            mydata = d;
            //console.log(mydata);
            //Events.trigger('NodeChange', mydata);
            //$(theView.parentId).parent().parent().get(0).style.width = "70%";
            //$(theView.parentId).parent().get(0).style.left="30%";


          }



          // Returns a list of all nodes under the root.
          function flatten(root) {
              var nodes = [],
                i = 0;

              function recurse(node) {
                if (typeof(node) != "undefined") {
                  if (node.children) node.children.forEach(recurse);
                  if (!node.id) node.id = ++i;
                  nodes.push(node);
                }
              }

              recurse(root);
              return nodes;
            }
            /*
            function styleToNodes(nodes){
                console.log('images to nodes added here');
            }*/

          function zoomed() {
            container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
          }

          function dragstarted(d) {
            d3.event.sourceEvent.stopPropagation();
            d3.select(this).classed("dragging", true);
          }

          function dragged(d) {
            d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
          }

          function dragended(d) {
            d3.select(this).classed("dragging", false);
          }

          function transform(params, json) {

            params = params.filter(function(d) {
              return d != 'platform'
            })

            var baseJson = json;
            var graphJSON = baseJson[0];
            graphJSON.children = [];
            var childNode = [];

            // get the all the agents in the baseJson to get details of hierarchy
            var agentList = baseJson.filter(function(obj) {
              return obj.type == 'agent';
            });

            //get the first child of the base parent 'Platform' using the parameters list
            //append the first child of the json to the 'platform'
            var firstChild = graphJSON.children = baseJson.filter(function(obj) {
              return obj.type == params[0];
            });

            //find the child elements of the first child using agent list
            var remain_params = params.splice(1);

            remain_params.forEach(function(param) {
              firstChild.forEach(function(levelOne) {
                levelOne.children = [];
                var setOfAgent = agentList.filter(function(d) {
                  switch (levelOne.type) {
                    case 'device':
                      return d.deviceIP == levelOne.ip;
                      break;
                    case 'ecosystem':
                      return d.ecosystemName == levelOne.name;
                      break;
                    case 'agency':
                      return d.agencyName == levelOne.name;
                      break;
                    case 'agent':
                      return d.name == levelOne.name;
                      break;
                    case 'default':
                      return false;
                      break;
                  }
                });

                var appendChild;
                switch (param) {
                  case 'device':
                    var devices = setOfAgent.map(function(d) {
                      return d.deviceIP;
                    });
                    var uniqueDevices = [];
                    devices.forEach(function(d) {
                      if (uniqueDevices.indexOf(d) == -1) uniqueDevices.push(d)
                    });
                    uniqueDevices.forEach(function(d) {
                      appendChild = baseJson.filter(function(obj) {
                        return obj.ip == d;
                      });
                      if (typeof(appendChild[0]) != "undefined") {
                        appendChild = appendChild[0];
                        levelOne.children.push(appendChild);
                      }

                    });
                    break;
                  case 'ecosystem':
                    var eco = setOfAgent.map(function(d) {
                      return d.ecosystemName;
                    });
                    var uniqueEco = [];
                    eco.forEach(function(d) {
                      if (uniqueEco.indexOf(d) == -1) uniqueEco.push(d)
                    });
                    uniqueEco.forEach(function(d) {
                      appendChild = baseJson.filter(function(obj) {
                        return obj.name == d;
                      });
                      if (typeof(appendChild[0]) != "undefined") {
                        appendChild = appendChild[0];
                        levelOne.children.push(appendChild);
                      }

                    });
                    break;
                  case 'agency':
                    var agency = setOfAgent.map(function(d) {
                      return d.agencyName;
                    });
                    var uniqueAgency = [];
                    agency.forEach(function(d) {
                      if (uniqueAgency.indexOf(d) == -1) uniqueAgency.push(d)
                    });
                    uniqueAgency.forEach(function(d) {
                      appendChild = baseJson.filter(function(obj) {
                        return obj.name == d;
                      });
                      if (typeof(appendChild[0]) != "undefined") {
                        appendChild = appendChild[0];
                        levelOne.children.push(appendChild);
                      }
                    });
                    break;
                  case 'agent':
                    var agent = setOfAgent.map(function(d) {
                      return d.name;
                    });
                    var uniqueAgent = [];
                    agent.forEach(function(d) {
                      if (uniqueAgent.indexOf(d) == -1) uniqueAgent.push(d)
                    });
                    uniqueAgent.forEach(function(d) {
                      appendChild = baseJson.filter(function(obj) {
                        return obj.name == d;
                      });
                      if (typeof(appendChild[0]) != "undefined") {
                        appendChild = appendChild[0];
                        levelOne.children.push(appendChild);
                      }

                    });
                    break;
                  case 'default':
                    break;
                }
              });
              childNode = [];
              firstChild.forEach(function(d) {
                d.children.forEach(function(obj) {
                  childNode.push(obj)
                })
              });
              firstChild = [];
              firstChild = childNode;
            });
            return baseJson[0];
          }
          $(".svg-body").bind("click", function(event) {
            if (event.target.classList.toString() == 'img' || event.target.classList.toString() == 'circle' || event.target.classList.toString() == 'node' || event.target.classList.toString() == 'link') return;
            console.log('hi');
            toggle = 1;
            if (toggle == "1") {
              //Put them back to opacity=1
              node[0].filter(function(obj) {
                obj.children[0].style.setProperty("stroke-width", "3", "important");
                //return obj.__data__===d;
              });
              node.style("opacity", 1);
              toggle = 0;

            }
            //Events.trigger('PaneRemove');
            //$(this.parentId).parent().parent().get(0).style.width = "100%";
          }.bind(this));


    }
    return {
        restrict:'E',
        scope:{val:"=charData"},
        controller:'AppCtrl',
        transclude:true,
        link:fCollapsible,
        template:''
    }
});
