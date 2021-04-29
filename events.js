

const barrel = document.getElementById('barrel');
const tree = document.getElementById('tree');
const customize = document.getElementById('customize');
const exportFileBtn = document.getElementById('export__file');
const inputFile = document.getElementById('input_file');
const treeContainer = document.querySelector('.tree__container');
const barrelContainer = document.querySelector('.barrel__container');
const inputHeight = document.querySelector('input[name="heigth"]');
const inputWidth = document.querySelector('input[name="width"]');


/*
* Adding Barrel actions...
*/
barrel.addEventListener('click',(e)=>{
 	e.preventDefault();	
 	return fieldObj.addItems('barrel', barrelContainer);
});
			
/*			
* Adding tree actions...
*/
tree.addEventListener('click',(e)=>{
 	e.preventDefault();
 	return fieldObj.addItems('tree', treeContainer);
});

/*			
* Export Button
*/
exportFileBtn.addEventListener('click', (e)=>{
	return fieldObj.exportMapFields();
});
	
/*
* Import Button
*/

inputFile.addEventListener('change', (e)=>{

	const files = (inputFile.files);
	let map_json ={};

	for (var i = 0, f; f = files[i]; i++) {
		var reader = new FileReader();

		// Closure to capture the file information.
		reader.onload = (function (theFile) {
			return function (e) {
				try {
					map_json = JSON.parse(e.target.result);
					return fieldObj.importMapFields(JSON.stringify(map_json));
				} catch (ex) {
					console.log(ex);
				}
			}
		})(f);
		reader.readAsText(f);
	}
})


/*	
* Triggger when user press customize button
*/
customize.addEventListener('click', (e)=>{
	e.preventDefault();

	if(!isNaN(parseInt(inputHeight.value)) && 
		!isNaN(parseInt(inputHeight.value)) )
	{
		return fieldObj.mapTilesFields(inputHeight.value, inputWidth.value);
	}else{
		alert('It should be number format');
	}
});




