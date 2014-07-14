function putObjetcBalcony (apartment) {
	/*flower*/
	var flowerObj = 'models/balcony/flowerBox/flowerBox.obj';
	var flowerMtl = 'models/balcony/flowerBox/flowerBox.mtl';
	var flower = importObjMtl(flowerObj,flowerMtl,true);
	flower.scale.set(.03, .03, .03);
	flower.rotation.x = Math.PI / 2;
	flower.rotation.x = Math.PI / 4;
	flower.position.set(2,5,.3);
	apartment.add(flower);
}