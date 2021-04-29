
const canvas = document.getElementById('canvas');


var fieldObj = {
	grassHeight:332,
	tilesHeight:700,
	tilesWidth:1087,
	grassWidth:521,
	barrel: 0,
	grass: 0,
	mapTilesFields : function(inputHeight, inputWidth){

		//if tiles are greater current height x width
		if( parseInt(inputHeight) > this.tilesHeight || 
			parseInt(inputWidth) > this.tilesWidth)
		{
			this.updateValueMap(inputHeight, inputWidth);
		}else{
			this.updateValueMap(inputHeight, inputWidth);
		}
	},
	updateValueMap:function(h, w){
		console.log('Hello');

		//update styles
		canvas.style.height = `${h}px`; 
		canvas.style.width = `${w}px`;

		//update obj
		this.tilesHeight = h;
		this.tilesWidth = w;
	},
	exportMapFields:function(){
		
		const mapToJson = JSON.stringify([this]);
		let type = "application/json", name="map.json";
		this.dowloader(mapToJson, type, name);

	},
	dowloader(data, type, name){

		let blob = new Blob([data], {type});
		let url = window.URL.createObjectURL(blob);
		this.downloadURI(url, name);
		window.URL.revokeObjectURL(url);

	},
	downloadURI(uri, name){	

	 	let link = document.createElement("a");
	    link.download = name;
	    link.href = uri;
	    link.click();
	},
	importMapFields:function(json){	
		let parseToJSON = (JSON.parse(json));
		console.log(parseToJSON);

		let {tilesHeight, tilesWidth, barrel, grass} = (parseToJSON[0]);

		//update map
		this.updateValueMap(tilesHeight, tilesWidth);

		//update barrell
		for(var b = 0 ; b < barrel; b++){
			this.addItems('barrel', barrelContainer)
		}

		//update grass
		for(var g = 0 ; g < grass; g++){
			this.addItems('tree', treeContainer)
		}

	},
	addItems:function(type, parent){

	 	var img = document.createElement("img");
	 	img.src= './assets/'+type +'.png';
	 	img.alt= type + '__img';
	 	parent.appendChild(img);

	 	//update barrels && grass
	 	if(type === 'tree'){
	 		this.barrel +=1;
	 	}else if( type === 'barrel' ){
	 		this.grass +=1;
	 	}

		return this;
	}

}

	
