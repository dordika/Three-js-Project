function putObjetcBalcony (apartment) {
	/*CROW*/
	var crowObj = 'models/balcony/flowerBox/flowerBox.obj';
	var crowMtl = 'models/balcony/flowerBox/flowerBox.mtl';
	var crow = importObjMtl(crowObj,crowMtl,true);
	crow.scale.set(.03, .03, .03);
	crow.rotation.x = Math.PI / 2;
	crow.position.set(10,0,1.8);
	apartment.add(crow);

	/*PLANTS*/
	var plantsObj = 'models/balcony/Plants/plants.obj';
	var plantsMtl = 'models/balcony/Plants/plants.mtl';
	var plants = importObjMtl(plantsObj,plantsMtl);
	plants.scale.set(.02, .02, .02);
	plants.rotation.x = Math.PI / 2;
	plants.position.set(.8,5.7,.3);
	apartment.add(plants);

}