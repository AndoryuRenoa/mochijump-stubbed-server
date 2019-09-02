    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute ("width", "100%");
    svg.setAttribute ("height", "100%");
    var npc = document.createElementNS;
    var x;
    var y;
    var mouseDown;
    var makeRect;
    var xmlns = "http://www.w3.org/2000/svg";
    var brushSize = 5;
    var allRects;
    var allHCNPCs;
    var allGooseNPCs;
    var objectType = "rect";
    var newgoalNPC = document.createElementNS("http://www.w3.org/2000/svg", "image");
	var newMochi = document.createElementNS("http://www.w3.org/2000/svg", "image");
    
    var pBRects = document.getElementById("paintBox").getBoundingClientRect();
document.getElementById("paintBox").style.cursor = "crosshair";
	function makeNewBox(){
		
		if (objectType==="rect"){
	        var newRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    	    newRect.setAttribute("x", (x*2-brushSize)/2);
        	newRect.setAttribute("y", (y*2-brushSize)/2);
        	newRect.setAttribute ("width", brushSize);
        	newRect.setAttribute ("height", brushSize);
        	newRect.setAttribute("fill", "#82571b");
        	newRect.setAttribute("class", "rect");
        	svg.appendChild(newRect);
        	document.getElementById("paintBox").appendChild(svg);
		}
		if (objectType==="hairClipNPC"){
			var newHCNPC = document.createElementNS('http://www.w3.org/2000/svg', 'image')
			newHCNPC.setAttribute("x", x);
			newHCNPC.setAttribute("y", y);
			newHCNPC.setAttributeNS("http://www.w3.org/1999/xlink","href","/images/hClipL1.png");
        	newHCNPC.setAttribute("class", "hairClipNPC");
			svg.appendChild(newHCNPC);
        	document.getElementById("paintBox").appendChild(svg);
			}
		if (objectType ==="gooseNPC"){
			var newGooseNPC = document.createElementNS("http://www.w3.org/2000/svg", "image");
			newGooseNPC.setAttribute("x", x);
			newGooseNPC.setAttribute("y", y);
			newGooseNPC.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'images/GooseFlyLeft1.png');
			newGooseNPC.setAttribute('class', 'gooseNPC');
			svg.appendChild(newGooseNPC);
			document.getElementById("paintBox").appendChild(svg);
		}
		if (objectType ==="goalNPC"){
			newgoalNPC.setAttribute("x", x);
			newgoalNPC.setAttribute("y",y);
			newgoalNPC.setAttributeNS("http://www.w3.org/1999/xlink", "href", "/images/ball.png");
			newgoalNPC.setAttribute("class", "goalNPC")
			svg.appendChild(newgoalNPC);
			document.getElementById("paintBox").appendChild(svg);
		}
		if (objectType ==="mochi"){
			
				newMochi.setAttribute("x", x);
				newMochi.setAttribute("y", y);
				newMochi.setAttributeNS("http://www.w3.org/1999/xlink","href","/images/mochirs.png");
        		newMochi.setAttribute("class", "mochi");
				svg.appendChild(newMochi);
        		document.getElementById("paintBox").appendChild(svg);
        		
			}
		
	}
	function cordsFunction(e){
		x = e.clientX -pBRects.left-5;
		y = e.clientY-pBRects.top-5;
		var output = "Coordinates : (" + x + "," + y +")";
		document.getElementById("demoOutput").innerHTML = output;
	}
    function mouseDn(){
    	mouseDown= true;
    	}
    function mouseUp(){
    	mouseDown= false;
		makeNewBox();
        }
	function mouseReset(){
		mouseDown= false;
	}
	function brushS(){
		brushSize = 5;
		objectType = "rect";
	}
	function brushM(){
		brushSize = 50;
		objectType = "rect";
	}
	function brushL(){
		brushSize = 150;
		objectType = "rect";
	}
	function hairClipNPC(){
		objectType = "hairClipNPC";
	}
	
	function gooseNPC(){
		objectType ="gooseNPC";
	}
	
	function mochiStart(){
		objectType = "mochi";
	}
	function goalNPC(){
		objectType ="goalNPC";
	}
	function clearAll(){
		while (svg.firstChild){
			svg.removeChild(svg.firstChild);
		}
	}
	function saveLevel(){
			allRects = svg.getElementsByClassName("rect");
			var levelName = document.getElementById("levelName").value;
			var startX= [];
			var startY =[];
			var height =[];
			var width = [];
			function fillRectArray (){
				for (var i=0; i<allRects.length; i++){
					startX [i] = Math.round(allRects[i].getBoundingClientRect().x), 
					startY [i] = Math.round(allRects[i].getBoundingClientRect().y), 
					height [i] = Math.round(allRects[i].getBoundingClientRect().height), 
					width [i] = Math.round(allRects[i].getBoundingClientRect().width)};	
				}
			allHCNPCs = svg.getElementsByClassName("hairClipNPC");
			var hairClipStartX =[];
			var hairClipStartY =[];
			function fillHCNPCArray(){
				for (var i=0; i<allHCNPCs.length; i++){
					hairClipStartX[i] = Math.round(allHCNPCs[i].getBoundingClientRect().x ),
					hairClipStartY[i] = Math.round(allHCNPCs[i].getBoundingClientRect().y );
					}
			}
			
			allGooseNPCs = svg.getElementsByClassName("gooseNPC");
			var gooseStartX = [];
			var gooseStartY = [];
			function fillGooseNPCArray(){
				for (var i=0; i<allGooseNPCs.length; i++){
					gooseStartX[i] = Math.round(allGooseNPCs[i].getBoundingClientRect().x);
					gooseStartY[i] = Math.round(allGooseNPCs[i].getBoundingClientRect().y);
				}
			}
			
			var gNPC = svg.getElementsByClassName("goalNPC");
			if (gNPC[0] == null){
					alert("Cannot save level without GoalNPC's location set");
			}else{
			var goalStartX = Math.round(gNPC[0].getBoundingClientRect().x);
			var goalStartY = Math.round(gNPC[0].getBoundingClientRect().y);
			var mochi = svg.getElementsByClassName("mochi");
				if (mochi[0] == null){
						alert("Cannot save level without Mochi's start location")
				}else{
					var mochiStartX = Math.round(mochi[0].getBoundingClientRect().x);
					var mochiStartY = Math.round(mochi[0].getBoundingClientRect().y);
					fillRectArray();
					fillHCNPCArray();
					fillGooseNPCArray();
					var collection = {levelName, startX, startY, width, height,
							hairClipStartX, hairClipStartY, gooseStartX, gooseStartY, goalStartX, goalStartY, mochiStartX, mochiStartY};
					var xhttp = new XMLHttpRequest();
					var rectsJson = JSON.stringify(collection);
					xhttp.open("POST", "/test/json");
					xhttp.setRequestHeader("Content-Type", "application/JSON");
					xhttp.onreadystatechange = function(){
						if (xhttp.readyState == 4 && xhttp.status == 200){
							alert("Level Saved");	
						}
					};
					xhttp.send(rectsJson);
				}
				}
	}
	
	function delLastAdded(){
		svg.removeChild(svg.lastChild);
		svg.removeChild(svg.lastChild);
	}
	
	

	function callLevel(){
		alert("Testing");
		var xhttp = new XMLHttpRequest();
		var name = document.getElementById("levelName").value;
			xhttp.open("GET", "/test/return?name="+name+"", true);
			xhttp.onload = function (){
				clearAll();
				var response = JSON.parse(xhttp.response);
				var startX = response[0].startX;
				var startY = response[0].startY;
				var width = response[0].width;
				var height = response[0].height;
				var hairClipStartX = response[0].hairClipStartX;
				var hairClipStartY = response[0].hairClipStartY;
				var gooseStartX = response[0].gooseStartX;
				var gooseStartY = response[0].gooseStartY;
				for (var i =0; i<startX.length; i++){
					
					console.log ("ready", startX.length == height.length );
					var newRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			        newRect.setAttribute("x", startX[i]-pBRects.left-5);
			        newRect.setAttribute("y", startY[i]-pBRects.top-5);
			        newRect.setAttribute ("width", width[i]);
			        newRect.setAttribute ("height", height[i]);
			        newRect.setAttribute ("class", "rect");
			        newRect.setAttribute("fill", "#82571b");

			        newRect.setAttribute("class", "rect");
			        svg.appendChild(newRect);
			        document.getElementById("paintBox").appendChild(svg);
					}
				for (var i=0; i<hairClipStartX.length; i++){
					var newHairClipNPC = document.createElementNS('http://www.w3.org/2000/svg', 'image');
					newHairClipNPC.setAttribute("x", hairClipStartX[i]-pBRects.left-5);
					newHairClipNPC.setAttribute("y", hairClipStartY[i]-pBRects.top-5);
					newHairClipNPC.setAttributeNS('http://www.w3.org/1999/xlink','href','/images/hClipL1.png');
		        	newHairClipNPC.setAttribute("class", "hairClipNPC");
		        	svg.appendChild(newHairClipNPC);
			        document.getElementById("paintBox").appendChild(svg);
				}
				
				for (var i=0; i< gooseStartX.length; i++){
					var newGooseNPC = document.createElementNS('http://www.w3.org/2000/svg', 'image');
					newGooseNPC.setAttribute('x', gooseStartX[i]-pBRects.left-5);
					newGooseNPC.setAttribute('y', gooseStartY[i]-pBRects.top-5);
					newGooseNPC.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'images/GooseFlyLeft1.png');
					newGooseNPC.setAttribute('class', 'gooseNPC');
					svg.appendChild(newGooseNPC);
					document.getElementById("paintBox").appendChild(svg);
				}
				newgoalNPC.setAttribute("x", response[0].goalStartX-pBRects.left-5);
				newgoalNPC.setAttribute("y", response[0].goalStartY-pBRects.top-5);
				newgoalNPC.setAttributeNS('http://www.w3.org/1999/xlink','href','/images/ball.png');
        		newgoalNPC.setAttribute("class", "goalNPC");
				svg.appendChild(newgoalNPC);
        		document.getElementById("paintBox").appendChild(svg);
				newMochi.setAttribute("x", response[0].mochiStartX-pBRects.left-5);
				newMochi.setAttribute("y", response[0].mochiStartY-pBRects.top-5);
				newMochi.setAttributeNS('http://www.w3.org/1999/xlink','href','/images/mochirs.png');
        		newMochi.setAttribute("class", "mochi");
				svg.appendChild(newMochi);
        		document.getElementById("paintBox").appendChild(svg);
				var recallName =response[0].levelName
				//callback required
				alert("You tried to retrieve "+recallName, recallName != null);
			};
			xhttp.send();
					
	}
document.getElementById("paintBox").addEventListener("mousemove",function(event){
		cordsFunction(event);
	});
document.getElementById("paintBox").addEventListener("mouseleave", mouseReset);
document.getElementById("paintBox").addEventListener("mousedown", mouseDn);
document.getElementById("paintBox").addEventListener("mouseup", mouseUp);
document.getElementById("paintBox").addEventListener("mousemove", mouseMoveDrawBox);
	function mouseMoveDrawBox(){
     if (mouseDown === true){
		makeNewBox();
      }
     }