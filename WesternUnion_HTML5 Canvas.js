(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



// stage content:
(lib.WesternUnion_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Partition_line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAp0hNXIAAJwEgpzhNXIAAJwEgN7hNXIAAJwEAN8hNXIAAJwEAN8gpHIAAJwEgN7gpHIAAJwAt7k3IAAJvAN8k3IAAJvEgpzgpHIAAJwEgpzgE3IAAJvEgpzAfYIAAJwEgpzBDoIAAJwAN8fYIAAJwAt7fYIAAJwEgN7BDoIAAJwEAN8BDoIAAJwEAp0gpHIAAJwEAp0gE3IAAJvEAp0AfYIAAJwEAp0BDoIAAJw");
	this.shape.setTransform(548.4,1072);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// currency
	this.text = new cjs.Text("$ 18", "700 40px 'Roboto'");
	this.text.textAlign = "center";
	this.text.lineHeight = -3;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(904.15,1527.85);

	this.text_1 = new cjs.Text("$ 17", "700 40px 'Roboto'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = -3;
	this.text_1.lineWidth = 124;
	this.text_1.parent = this;
	this.text_1.setTransform(726.95,1527.85);

	this.text_2 = new cjs.Text("$ 20", "700 40px 'Roboto'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = -3;
	this.text_2.lineWidth = 166;
	this.text_2.parent = this;
	this.text_2.setTransform(548.15,1527.85);

	this.text_3 = new cjs.Text("$ 15", "700 40px 'Roboto'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = -3;
	this.text_3.lineWidth = 123;
	this.text_3.parent = this;
	this.text_3.setTransform(378.2,1527.85);

	this.text_4 = new cjs.Text("$ 18", "700 40px 'Roboto'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = -3;
	this.text_4.lineWidth = 123;
	this.text_4.parent = this;
	this.text_4.setTransform(196,1527.85);

	this.text_5 = new cjs.Text("$ 16", "700 40px 'Roboto'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = -3;
	this.text_5.lineWidth = 124;
	this.text_5.parent = this;
	this.text_5.setTransform(903.15,1298.25);

	this.text_6 = new cjs.Text("$ 18", "700 40px 'Roboto'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = -3;
	this.text_6.lineWidth = 124;
	this.text_6.parent = this;
	this.text_6.setTransform(726.95,1298.25);

	this.text_7 = new cjs.Text("$ 17", "700 40px 'Roboto'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = -3;
	this.text_7.lineWidth = 168;
	this.text_7.parent = this;
	this.text_7.setTransform(548.75,1298.25);

	this.text_8 = new cjs.Text("$ 19", "700 40px 'Roboto'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = -3;
	this.text_8.lineWidth = 123;
	this.text_8.parent = this;
	this.text_8.setTransform(370.2,1298.25);

	this.text_9 = new cjs.Text("$ 20", "700 40px 'Roboto'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = -3;
	this.text_9.lineWidth = 123;
	this.text_9.parent = this;
	this.text_9.setTransform(196,1298.25);

	this.text_10 = new cjs.Text("₹ 90", "700 40px 'Roboto'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = -3;
	this.text_10.lineWidth = 124;
	this.text_10.parent = this;
	this.text_10.setTransform(904.15,1066.25);

	this.text_11 = new cjs.Text("₹ 85", "700 40px 'Roboto'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = -3;
	this.text_11.lineWidth = 124;
	this.text_11.parent = this;
	this.text_11.setTransform(725.95,1066.25);

	this.text_12 = new cjs.Text("₹ 80", "700 40px 'Roboto'");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = -3;
	this.text_12.lineWidth = 164;
	this.text_12.parent = this;
	this.text_12.setTransform(548.25,1066.25);

	this.text_13 = new cjs.Text("₹ 84", "700 40px 'Roboto'");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = -3;
	this.text_13.lineWidth = 123;
	this.text_13.parent = this;
	this.text_13.setTransform(370.2,1066.25);

	this.text_14 = new cjs.Text("₹ 80.05", "700 40px 'Roboto'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = -3;
	this.text_14.lineWidth = 148;
	this.text_14.parent = this;
	this.text_14.setTransform(191.55,1066.25);

	this.text_15 = new cjs.Text("€ 0.7", "700 40px 'Roboto'");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = -3;
	this.text_15.lineWidth = 124;
	this.text_15.parent = this;
	this.text_15.setTransform(903.15,834.25);

	this.text_16 = new cjs.Text("€1", "700 40px 'Roboto'");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = -3;
	this.text_16.lineWidth = 124;
	this.text_16.parent = this;
	this.text_16.setTransform(726.95,834.25);

	this.text_17 = new cjs.Text("€ 0.7", "700 40px 'Roboto'");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = -3;
	this.text_17.lineWidth = 164;
	this.text_17.parent = this;
	this.text_17.setTransform(549.25,834.25);

	this.text_18 = new cjs.Text("€ 0.9", "700 40px 'Roboto'");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = -3;
	this.text_18.lineWidth = 124;
	this.text_18.parent = this;
	this.text_18.setTransform(368.5,834.25);

	this.text_19 = new cjs.Text("€ 0.9", "700 40px 'Roboto'");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = -3;
	this.text_19.lineWidth = 123;
	this.text_19.parent = this;
	this.text_19.setTransform(196,834.25);

	this.text_20 = new cjs.Text("$ 16", "700 40px 'Roboto'");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = -3;
	this.text_20.lineWidth = 124;
	this.text_20.parent = this;
	this.text_20.setTransform(902.9,602.25);

	this.text_21 = new cjs.Text("$ 18", "700 40px 'Roboto'");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = -3;
	this.text_21.lineWidth = 124;
	this.text_21.parent = this;
	this.text_21.setTransform(725.1,602.25);

	this.text_22 = new cjs.Text("$ 17", "700 40px 'Roboto'");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = -3;
	this.text_22.lineWidth = 162;
	this.text_22.parent = this;
	this.text_22.setTransform(548.65,602.25);

	this.text_23 = new cjs.Text("$ 19", "700 40px 'Roboto'");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = -3;
	this.text_23.lineWidth = 123;
	this.text_23.parent = this;
	this.text_23.setTransform(377.6,602.25);

	this.text_24 = new cjs.Text("$ 20", "700 40px 'Roboto'");
	this.text_24.textAlign = "center";
	this.text_24.lineHeight = -3;
	this.text_24.lineWidth = 123;
	this.text_24.parent = this;
	this.text_24.setTransform(195.6,602.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// currency_title
	this.text_25 = new cjs.Text("API: Payout 5", "700 18px 'Roboto'");
	this.text_25.textAlign = "center";
	this.text_25.lineHeight = -29;
	this.text_25.lineWidth = 124;
	this.text_25.parent = this;
	this.text_25.setTransform(904.15,1499.05);

	this.text_26 = new cjs.Text("API: Payout 4", "700 18px 'Roboto'");
	this.text_26.textAlign = "center";
	this.text_26.lineHeight = -29;
	this.text_26.lineWidth = 124;
	this.text_26.parent = this;
	this.text_26.setTransform(726.95,1499.05);

	this.text_27 = new cjs.Text("Money in minutes**", "700 18px 'Roboto'");
	this.text_27.lineHeight = -29;
	this.text_27.lineWidth = 166;
	this.text_27.parent = this;
	this.text_27.setTransform(465.15,1499.05);

	this.text_28 = new cjs.Text("Direct to card", "700 18px 'Roboto'");
	this.text_28.textAlign = "center";
	this.text_28.lineHeight = -29;
	this.text_28.lineWidth = 123;
	this.text_28.parent = this;
	this.text_28.setTransform(378.2,1499.85);

	this.text_29 = new cjs.Text("Direct to bank", "700 18px 'Roboto'");
	this.text_29.textAlign = "center";
	this.text_29.lineHeight = -29;
	this.text_29.lineWidth = 123;
	this.text_29.parent = this;
	this.text_29.setTransform(196,1499.85);

	this.text_30 = new cjs.Text("API: Payout 5", "700 18px 'Roboto'");
	this.text_30.textAlign = "center";
	this.text_30.lineHeight = -29;
	this.text_30.lineWidth = 124;
	this.text_30.parent = this;
	this.text_30.setTransform(903.15,1267.05);

	this.text_31 = new cjs.Text("API: Payout 4", "700 18px 'Roboto'");
	this.text_31.textAlign = "center";
	this.text_31.lineHeight = -29;
	this.text_31.lineWidth = 124;
	this.text_31.parent = this;
	this.text_31.setTransform(726.95,1267.05);

	this.text_32 = new cjs.Text("Money in minutes**", "700 18px 'Roboto'");
	this.text_32.textAlign = "center";
	this.text_32.lineHeight = -29;
	this.text_32.lineWidth = 168;
	this.text_32.parent = this;
	this.text_32.setTransform(548.75,1267.05);

	this.text_33 = new cjs.Text("Direct to card", "700 18px 'Roboto'");
	this.text_33.textAlign = "center";
	this.text_33.lineHeight = -29;
	this.text_33.lineWidth = 123;
	this.text_33.parent = this;
	this.text_33.setTransform(370.2,1267.85);

	this.text_34 = new cjs.Text("Direct to bank", "700 18px 'Roboto'");
	this.text_34.textAlign = "center";
	this.text_34.lineHeight = -29;
	this.text_34.lineWidth = 123;
	this.text_34.parent = this;
	this.text_34.setTransform(196,1267.85);

	this.text_35 = new cjs.Text("API: Payout 5", "700 18px 'Roboto'");
	this.text_35.textAlign = "center";
	this.text_35.lineHeight = -29;
	this.text_35.lineWidth = 124;
	this.text_35.parent = this;
	this.text_35.setTransform(904.15,1035.05);

	this.text_36 = new cjs.Text("API: Payout 4", "700 18px 'Roboto'");
	this.text_36.textAlign = "center";
	this.text_36.lineHeight = -29;
	this.text_36.lineWidth = 124;
	this.text_36.parent = this;
	this.text_36.setTransform(725.95,1035.05);

	this.text_37 = new cjs.Text("Money in minutes**", "700 18px 'Roboto'");
	this.text_37.textAlign = "center";
	this.text_37.lineHeight = -29;
	this.text_37.lineWidth = 164;
	this.text_37.parent = this;
	this.text_37.setTransform(548.25,1035.05);

	this.text_38 = new cjs.Text("Direct to card", "700 18px 'Roboto'");
	this.text_38.textAlign = "center";
	this.text_38.lineHeight = -29;
	this.text_38.lineWidth = 123;
	this.text_38.parent = this;
	this.text_38.setTransform(370.2,1035.85);

	this.text_39 = new cjs.Text("Direct to bank", "700 18px 'Roboto'");
	this.text_39.textAlign = "center";
	this.text_39.lineHeight = -29;
	this.text_39.lineWidth = 148;
	this.text_39.parent = this;
	this.text_39.setTransform(191.55,1035.85);

	this.text_40 = new cjs.Text("API: Payout 5", "700 18px 'Roboto'");
	this.text_40.textAlign = "center";
	this.text_40.lineHeight = -29;
	this.text_40.lineWidth = 124;
	this.text_40.parent = this;
	this.text_40.setTransform(903.15,803.05);

	this.text_41 = new cjs.Text("API: Payout 4", "700 18px 'Roboto'");
	this.text_41.textAlign = "center";
	this.text_41.lineHeight = -29;
	this.text_41.lineWidth = 124;
	this.text_41.parent = this;
	this.text_41.setTransform(726.95,803.05);

	this.text_42 = new cjs.Text("Money in minutes**", "700 18px 'Roboto'");
	this.text_42.textAlign = "center";
	this.text_42.lineHeight = -29;
	this.text_42.lineWidth = 164;
	this.text_42.parent = this;
	this.text_42.setTransform(549.25,803.05);

	this.text_43 = new cjs.Text("Direct to card", "700 18px 'Roboto'");
	this.text_43.textAlign = "center";
	this.text_43.lineHeight = -29;
	this.text_43.lineWidth = 124;
	this.text_43.parent = this;
	this.text_43.setTransform(368.5,803.85);

	this.text_44 = new cjs.Text("Direct to bank", "700 18px 'Roboto'");
	this.text_44.textAlign = "center";
	this.text_44.lineHeight = -29;
	this.text_44.lineWidth = 123;
	this.text_44.parent = this;
	this.text_44.setTransform(196,803.85);

	this.text_45 = new cjs.Text("API: Payout 5", "700 18px 'Roboto'");
	this.text_45.textAlign = "center";
	this.text_45.lineHeight = -29;
	this.text_45.lineWidth = 124;
	this.text_45.parent = this;
	this.text_45.setTransform(902.9,571.05);

	this.text_46 = new cjs.Text("API: Payout 4", "700 18px 'Roboto'");
	this.text_46.textAlign = "center";
	this.text_46.lineHeight = -29;
	this.text_46.lineWidth = 124;
	this.text_46.parent = this;
	this.text_46.setTransform(725.1,571.05);

	this.text_47 = new cjs.Text("Money in minutes**", "700 18px 'Roboto'");
	this.text_47.textAlign = "center";
	this.text_47.lineHeight = -29;
	this.text_47.lineWidth = 162;
	this.text_47.parent = this;
	this.text_47.setTransform(548.65,571.05);

	this.text_48 = new cjs.Text("Direct to card", "700 18px 'Roboto'");
	this.text_48.textAlign = "center";
	this.text_48.lineHeight = -29;
	this.text_48.lineWidth = 123;
	this.text_48.parent = this;
	this.text_48.setTransform(377.6,571.85);

	this.text_49 = new cjs.Text("Direct to bank", "700 18px 'Roboto'");
	this.text_49.textAlign = "center";
	this.text_49.lineHeight = -29;
	this.text_49.lineWidth = 123;
	this.text_49.parent = this;
	this.text_49.setTransform(195.6,571.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_49},{t:this.text_48},{t:this.text_47},{t:this.text_46},{t:this.text_45},{t:this.text_44},{t:this.text_43},{t:this.text_42},{t:this.text_41},{t:this.text_40},{t:this.text_39},{t:this.text_38},{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34},{t:this.text_33},{t:this.text_32},{t:this.text_31},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25}]}).wait(1));

	// Flags
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AD6AAQAAAygRAsQgSAtgmAmQgsAsg3ASQglALgpAAQgwAAgqgQQgvgTgngmQglgmgTgtQgRgsAAgyQAAgxARgsQATgtAlgmQAngnAvgSQAqgQAwAAQApAAAlALQA3ASAsAsQAmAmASAtQARAsAAAxg");
	this.shape_1.setTransform(127.85,963);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008614").s().p("AhZA+QgwgSgngnQglgkgTguIHRAAQgSAugmAkQgsAsg3ASQglALgpAAQgvAAgqgQg");
	this.shape_2.setTransform(127.85,980.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000086").s().p("AgbBCQgNgFgKgKQgKgKgFgNQgGgOAAgOQAAgOAGgNQAFgNAKgKQAKgLANgFQANgGAOABQAPgBANAGQANAFAKALQAKAKAFANQAGANAAAOQAAAOgGAOQgFANgKAKQgKAKgNAFQgNAHgPAAQgOAAgNgHgAgFA7IABADIAAACIAEAAIAFAAIAAgCIABgDIACgBIACABIABADIAAABIAKgDIAAgCIABgCIACgBIACABIABABIAJgFQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIABgCIACgBIACABIABABIAHgHIgBgBIgBgCIABgCIACgBQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABIAFgKIAAAAIgCgBIgBgCIABgDIACAAIACAAIADgKIgBAAIgCAAIgBgDIABgCIACgBIACAAIAAgFIAAgEIgCAAIgCgBIgBgBIABgDIACgBIABABIgDgMIgCABIgCgBIgBgCIABgCIACgBIgFgJQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABgBAAIgCgBIgBgDIABgCIABgBIgHgIIgBADIgCAAIgCgBIgBgCIAAgCIABgBIgJgGIgBADIgCABIgCgBIgBgDIABgCIgLgCIAAAAIAAACIgDABIgCgBIgBgCIAAgBIgFAAIgEAAIAAABIgBACIgCABIgCgBIgBgCIgLACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIgBACIgDABIgCgBIgBgCIAAgBIgJAGIABABIAAACIgBACIgCABIgCgBIgBgCIgHAIIACABIAAACIgBADIgCABIgCgBIgBgBIgFAJIAAAAIACABIABACIgBACIgCABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgDALIABAAIACABIABACIgBACIgCABIgCgBIAAAFIAAAFIACAAIACABIABACIgBADIgCAAIgBAAIADALIACgBIACABIABACIgBADIgCAAIAAAAIAFAKIACgCIABAAIADABIABACIgBACIgCABIAIAIIABgCIACgBIACABIABACIAAACIgCACIAJAEIAAAAIABgCIACgBIADABIABACQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIALAEIAAgBIABgDIACgBIACABgAgCAaIACgOIADAOIgDAkgAAEAZIgBgNIgDAAIAAAAQgDABgCgCIgDgCIgBgCIgKAIIghAPIAegUIANgEQgDgDAAgDIABgCIACgDIABgDIADgCQACgCADAAIAAAAIgCgMIACglIADAlIgDAMIADABIABgNIALgjIgGAkIgFALIgBABQADABADACIAHgLIAcgYIgYAcIgLAHQADAEAAAEQAAAFgDAEIALAHIAYAcIgcgYIgHgLQgDACgDABIABAAIAFAMIAGAkgAgIAYIAGgMIgBANIgLAjgAAKAXIgEgMIAJAJIAQAhgAgOAUIAJgJIgEAMIgVAegAgTAQIALgHIgHALIgbAYgAAUAPIgJgJIAMAEIAeAUgAAYAKIgMgHIANABIAjANgAgYAEIANgBIgMAHIgkAHgAANAAIAMgCIAlACIglADgAg9AAIAlgCIAMACIgMADgAAMgDIAMgFIAkgHIgjAMIgNABgAgYgDIgjgMIAkAHIAMAFIAAABgAAUgOIAhgQIgeAVIgMAEgAgWgJIgegVIAhAQIAKAJgAgTgPIgXgcIAbAYIAHALgAAKgWIAVgeIgQAhIgJAJgAgOgTIgQghIAVAeIAEAMgAgIgXIgGgkIALAjIABAMg");
	this.shape_3.setTransform(127.875,963);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFA145").s().p("AjoBOQATgtAlglQAngnAwgSQAqgQAvAAQApAAAlALQA3ASAsAsQAmAlASAtg");
	this.shape_4.setTransform(127.85,945.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjoBdQgRgrAAgyQAAgxARgsIHRAAQARAsAAAxQAAAygRArgAgbhCQgNAFgKALQgKAKgFANQgFANAAAOQAAAOAFAOQAFANAKAKQAKAKANAFQANAHAOAAQAPAAANgHQANgFAKgKQAKgKAFgNQAGgOAAgOQAAgOgGgNQgFgNgKgKQgKgLgNgFQgNgGgPABQgOgBgNAGgAAABAIgEAAIAAgCIgBgDIgCgBIgCABIgBADIABABIgMgEQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIgBgCIgDgBIgCABIAAACIAAAAIgJgEIABgCIAAgCIgBgCIgCgBIgCABIgBACIgIgIIACgBIABgCIgBgCIgDgBIgBAAIgCACIgFgKIABAAIACAAIABgDIgBgCIgCgBIgDABIgDgLIABAAIACAAIABgDIgBgCIgCgBIgCAAIAAgFIAAgFIACABIACgBIABgCIgBgCIgCgBIgBAAIADgLQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAIACgBIABgCIgBgCIgCgBIgBAAIAFgJIABABIACABIADgBIABgDIgBgCIgCgBIAHgIIABACIADABIACgBIAAgCIAAgCIgBgBIAKgGIAAABIAAACIACABIADgBIABgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIALgCIABACIACABIACgBIABgCIAAgBIAEAAIAFAAIAAABIACACIACABIACgBIAAgCIAAAAIALACIgBACIABADIADABIACgBIABgDIAJAGIgBABIgBACIABACIACABIACAAIABgDIAHAIIgBABIAAACIAAADIACABQABAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAIAFAJIgCABIgBACIABACIACABIACgBIAEAMIgCgBIgCABIgBADIABABIACABIACAAIABAEIgBAFIgBAAIgDABIgBACIABADIADAAIABAAIgEAKIgCAAIgCAAIgBADIABACIACABIAAAAIgFAKQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgCABIgBACIABACIABABIgHAHIgBgBIgCgBIgCABIgBACQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAIgKAFIgBgBIgCgBIgCABIgBACIAAACIgKADIAAgBIgBgDIgBgBIgDABIgBADIAAACIgFAAgAgBAaIACAkIACgkIgCgOgAAQA8IgGgkIgGgMIgBAAQADgBADgCIAHALIAcAYIgYgcIgLgHQAEgEgBgFQABgEgEgEIALgHIAYgcIgcAYIgHALQgDgCgDgBIABgBIAGgLIAGgkIgMAjIgBANIgCgBIACgMIgCglIgCAlIACAMIgBAAQgCAAgDACIgDgMIgWgeIAQAhIAJAJIgCACIgIgLIgbgYIAYAcIALAHIgCADIgJgJIgigQIAeAVIANAEIgCADIAAgBIgMgFIgkgHIAjAMIANABIgBACQAAADADADIgNAEIgeAUIAigPIAJgIIACACIACACQADACACgBIABAAIACAAIABANIAMAjgAgIAYIgGAkIALgjIABgNgAAKAXIAVAeIgPghIgJgJgAgOAUIgQAhIAWgeIADgMgAgSAQIgYAcIAbgYIAIgLgAAUAPIAiAPIgfgUIgMgEgAAYAKIAkAHIgigNIgOgBgAgYAEIgjANIAkgHIAMgHgAANAAIANADIAkgDIgkgCgAg9AAIAlADIAMgDIgMgCgAAYgIIgMAFIAAABIAOgBIAigMgAAUgOIgJAJIAMgEIAfgVgAAKgWIgDAMIAJgJIAPghgAgIgXIAGALIgBgMIgLgjg");
	this.shape_5.setTransform(127.85,963);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#85340A").s().p("AgDANQgbgDgagSQA5AWAcgOIARgJQAGgDADAAQAEAAgDADQgEAFgPAIQgPAJgTAAIgGAAg");
	this.shape_6.setTransform(126.1032,1425.7272,0.104,0.104);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#85340A").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_7.setTransform(126.0602,1425.4994,0.104,0.104);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#843511").s().p("AgxAFQAPgYAgAAQAfAAAVAWQgXARgeAAQgeAAgQgPgAgpAFQARAOAWAAQAWgBAPgRQgCgGgLgEQgLgGgNAAQgaABgNATg");
	this.shape_8.setTransform(126.0006,1425.4541,0.1038,0.1038);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#85340A").s().p("AhBASQgGgDAUgPQAXgRAbAAQASAAAKAEQAGADAMAKQAIAGAHACIAHACQABABgBAEQgBAAAAABQgBAAAAABQgBAAgBAAQAAAAgBgBQgTgMgGgEQgNgLgZAAQgXAAgWAPQgQAOgDAAIAAAAg");
	this.shape_9.setTransform(126.0673,1425.3333,0.104,0.104);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#85340A").s().p("AA3BGQAdgogGgkQgEgTgMgRQgagYgpAFQgpAEglAgQAigtAtgEQAogDAmAfQAFANACALQAJAvgaAyQgEgFgFAAg");
	this.shape_10.setTransform(126.1243,1425.6016,0.104,0.104);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#85340A").s().p("AAZgCQgMgIgNAAQgNAAgLAIQgLAIgCANQAAgQALgKQALgLAPAAQAQAAALALQALAKAAAQQgDgNgKgIg");
	this.shape_11.setTransform(127.0455,1427.7456,0.104,0.104);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#85340A").s().p("AgjACQgNgOgWgCIAIAAIABAAQASAAANALQANALARAAQARAAAPgMQAOgMAZACQgWACgNAOQgMANgYAAQgXAAgMgNg");
	this.shape_12.setTransform(127.0429,1427.3816,0.104,0.104);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#85340A").s().p("AgXAAQgRgDgXAEQAXgFAMAAQAIgBAJACIALABQAGAAAPgCQARgBAaAGQgXgEgRADIgYAGIgXgGg");
	this.shape_13.setTransform(127.0429,1427.212,0.104,0.104);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#85340A").s().p("AA3AHIgTgLQgJgFgLADQgMAEgEAAIgPgEQgMgDgJAFIgSALQgKAHgGACIAYgTQANgMAMAAQAIAAANAGQAOgGAHAAQANAAANAMIAYATQgGgCgKgHg");
	this.shape_14.setTransform(127.0429,1427.0566,0.104,0.104);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#85340A").s().p("AAZALQgKAGgOAAIgBAAQgPAAgJgGQgFAIgKAAQgIAAgGgFQgFgGgBgIQAAgGAFgFQAFgGAGgBQgIADAAAJQAAAGAEACQADAEAGAAQAEAAAFgEQADgCAAgFQADAFAFAEQAJAGAJABQASgBAIgPQABAFADACQAFAEAEAAQAGAAADgEQAEgCAAgGQAAgJgIgDQAHABAEAGQAFAFAAAGQgBAIgFAGQgGAFgIAAQgKAAgFgIg");
	this.shape_15.setTransform(127.0559,1426.4977,0.104,0.104);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#85340A").s().p("AgkAEQgPgIgEgFQgDgDAEAAQADAAAGADIARAJQAcAOA5gWQgaASgbADIgGAAQgTAAgPgJg");
	this.shape_16.setTransform(127.946,1425.6893,0.1038,0.1038);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#85340A").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_17.setTransform(127.9579,1425.4618,0.1038,0.1038);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#85340A").s().p("AhQgWQACgLAFgNQAmgfAoADQAtAEAiAtQglgggpgEQgpgFgaAYQgMARgEATQgGAkAdAoQgFAAgEAFQgagyAJgvg");
	this.shape_18.setTransform(127.934,1425.5067,0.1038,0.1038);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#85340A").s().p("AAvAEQgWgPgXAAQgMAAgGACQgLACgJAHQgGAEgTAMQgBABgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQgBgEABgBIAHgCQAHgCAIgGQAMgKAGgDQAKgEASAAQAcAAAWARQAUAPgGADIgTgOg");
	this.shape_19.setTransform(127.9829,1425.2957,0.1038,0.1038);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#843511").s().p("AgyAFQAQgYAgAAQAfAAAVAWQgXARgeAAQgeAAgRgPgAgpAFQARAOAWAAQAWgBAQgRQgCgGgMgEQgMgGgMAAQgaABgNATg");
	this.shape_20.setTransform(128.0541,1425.4916,0.104,0.104);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#85340A").ss(1.5,0,0,4).p("AAAkVQBzAABRBSQBSBRAAByQAABzhSBRQhRBShzAAQhyAAhRhSQhShRAAhzQAAhyBShRQBRhSByAAg");
	this.shape_21.setTransform(127.0429,1425.8998,0.104,0.104);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F6B40E").s().p("AjDDEQhShRAAhzQAAhyBShRQBRhSByAAQBzAABRBSQBSBRAAByQAABzhSBRQhRBShzAAQhyAAhRhSg");
	this.shape_22.setTransform(127.0429,1425.8998,0.104,0.104);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#85340A").s().p("AAqBvQgyg1gSglIARgGQAPAqAxA6QAoAxADAkQgNgrgrgugAirivIAZgYIE9FWg");
	this.shape_23.setTransform(128.5962,1427.7902,0.1037,0.1037);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#85340A").s().p("ABXBNQhDgegdgbIAMgMQAfAhBDAjQA4AdAQAhQgcgjg6gagAjahpIANggIGoDCg");
	this.shape_24.setTransform(129.1537,1427.1056,0.1037,0.1037);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#85340A").s().p("AB4AfQhKgBgngOIAIgQQApASBMAHQA+AGAbAYQgmgWg/gCgAjpg2IHTARInTARg");
	this.shape_25.setTransform(129.3742,1426.2291,0.1037,0.1037);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#85340A").s().p("AjmBCIG2iiImqDCgAAUAVQAsABBJgWQA8gSAiAMQgrgGg8AXQhEAagpACg");
	this.shape_26.setTransform(129.313,1425.0054,0.1038,0.1038);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#85340A").ss(1.1,0,0,4).p("Ah8hOQAQAsA0A4QAyA2AMAoQAQAyAnAlQAWAUAgAaQAMAPACAVQACARAEABQAKAAABgVQABgYgQgbQgCgEgqgrQgfgggTg7QgQgxgqgxQgfgkgOgjQgFgLgDgLAhChMIEyEcIAGAEQAGADAEgEQAGgGgJgJInPnzAkDj/IDBCz");
	this.shape_27.setTransform(129.2987,1428.6856,0.1035,0.1035);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F6B40E").s().p("ACIEvQgEAAgCgRQgCgWgMgOQgggagWgUQgngmgQgxQgMgpgyg2Qg0g3gQgsIAngQIiuihIAxgxIHPHzQAJAKgGAGQgEAEgGgDIgGgEIkykcQAOAjAfAkQAqAxAQAxQATA6AfAgQAqAsACADQAQAcgBAYQgBAVgKAAIAAgBg");
	this.shape_28.setTransform(129.2896,1428.6765,0.1035,0.1035);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#85340A").ss(1.1,0,0,4).p("AiJgmQAgAiBGAfQBCAfAbAgQAiAoAzAUQAbAKAoAMQARAIAKAUQAIAPAEgBQAJgEgHgUQgIgWgagTQgDgDg3gYQgpgSgogvQghgng6gdQgqgVgbgbQgJgIgHgKAhSg7IGICRQAMAFADgIQADgIgLgFIprkcAlJiWID3Bb");
	this.shape_29.setTransform(130.135,1427.678,0.1035,0.1035);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F6B40E").s().p("ADvDIQgKgTgRgJQgogMgbgKQgzgTgigoQgbghhCgeQhGgfgggjIAegeIjehSIAbg/IJrEbQALAFgDAIQgDAIgMgFImIiQQAbAbAqAVQA6AdAhAnQAoAvApARQA3AZADACQAaATAIAXQAHAUgJADIgBAAQgEAAgHgOg");
	this.shape_30.setTransform(130.1164,1427.6754,0.1035,0.1035);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#85340A").ss(1.1,0,0,4).p("AiBAGQArAUBNADQBIACAmAUQAuAYA3gBQAdgBApgEQATABARAOQANALADgDQAHgGgOgQQgQgSgfgIQgEgBg8gBQgtgBg2gcQgugWhBgFQgwgEgjgPQgLgEgKgGAhXghIGjgPQAMAAAAgJQAAgFgGgDIgGgBIqpgZAldgXIEGgK");
	this.shape_31.setTransform(130.4823,1426.3883,0.1035,0.1035);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F6B40E").s().p("AE3BUQgRgOgTgBQgqAEgdABQg3ABgtgYQgmgUhIgCQhNgDgrgUIAQgmIjsAJIAAhEIKpAZIAGABQAGADAAAFQAAAJgMAAImjAPQAjAPAwAEQBAAFAvAWQA2AcAtABQA7ABAFABQAfAIAQASQAOAQgHAGIgCAAQgEAAgKgIg");
	this.shape_32.setTransform(130.4549,1426.3883,0.1035,0.1035);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#85340A").ss(1.1,0,0,4).p("AhSAqIF8iuQALgFgDgIQgCgFgHAAIgGACIp/DsAhqBfQAvACBHgbQBFgaAqAEQA0AEAygWQAagMAkgTQATgGAUAHQARAEABgEQAFgIgTgJQgWgKgfAFQgFAAg4AWQgpAPg9gFQgzgEg/AVQgsAPgmAAQgNAAgLgCAlBCXIDvht");
	this.shape_33.setTransform(130.419,1424.5951,0.1037,0.1037);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F6B40E").s().p("AlaBYIJ/jsIAGgCQAHAAACAFQADAIgLAFIl9CuQAngBAsgOQA/gVAzAEQA9AFApgPQA4gWAFAAQAfgFAWAKQATAJgFAIQgBAEgRgEQgUgHgTAGQgkATgaAMQgyAWg0gEQgqgEhFAaQhHAbgvgCIAAgqIjXBig");
	this.shape_34.setTransform(130.4004,1424.5977,0.1037,0.1037);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#85340A").s().p("AjHCTIFWk9Ik+FVgAAPAKQAqgPA6gxQAxgoAkgDQgrAMguAsQg1AyglASg");
	this.shape_35.setTransform(128.8113,1424.1314,0.1035,0.1035);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#85340A").s().p("AiJDOIDCmoIiiG1gAAIgCQAhgfAjhDQAdg4AhgQQgjAcgaA6QgeBDgbAdg");
	this.shape_36.setTransform(128.128,1423.5749,0.1035,0.1035);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#85340A").s().p("Ag2DqIARnTIARHTgAAAgOQASgoAHhNQAGg/AYgbQgWAngCA/QgBBKgOAng");
	this.shape_37.setTransform(127.2532,1423.3549,0.1035,0.1035);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#85340A").s().p("AhgjOIDCGpIggAMgAAVgSQABgtgWhJQgSg8AMgiQgGAsAXA7QAaBFABApg");
	this.shape_38.setTransform(126.0911,1423.4932,0.1037,0.1037);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#85340A").ss(1.1,0,0,4).p("AhMBDIEckyQAJgJgGgHQgDgDgHADIgFADInzHPAhOB9QAsgQA4g0QA2gyAogMQAygQAlgnQAUgWAaggQAPgMAVgCQARgCABgEQAAgKgVgBQgYgBgbAQQgEACgrAqQggAfg7ATQgxAQgxAqQgkAegjAPQgLAFgLADAj/EEICzjB");
	this.shape_39.setTransform(129.747,1423.3421,0.1035,0.1035);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F6B40E").s().p("AkvDSIHznPIAGgDQAGgDAEADQAGAHgJAJIkcEyQAjgPAkgeQAxgqAxgQQA6gTAggfQAsgqADgCQAcgQAYABQAVABgBAKQAAAEgRACQgWACgOAMQgaAggUAWQgmAngxAQQgpAMg2AyQg3A0gsAQIgQgnIihCug");
	this.shape_40.setTransform(129.7379,1423.3512,0.1035,0.1035);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#85340A").ss(1.1,0,0,4).p("Ag7BTICRmIQAFgMgIgDQgFgCgFAFIgDAFIkcJrAgmCKQAiggAfhGQAfhCAggbQAogiAUgzQAOgzAIgQQAIgRAUgKQAPgIgBgEQgEgJgUAHQgWAIgTAaQgDADgYA3QgSApgvAoQgnAhgdA6QgVAqgbAbQgIAJgKAHAiWFKIBbj3");
	this.shape_41.setTransform(128.7397,1422.5037,0.1035,0.1035);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F6B40E").s().p("AjVEtIEbprIAEgFQAEgFAFACQAIADgFAMIiQGIQAbgbAVgqQAdg6AnghQAvgoARgpQAZg3ACgDQATgaAXgIQAUgHADAJQACAEgQAIQgTAKgJARQgHAQgPAzQgTAzgoAiQghAbgeBCQgfBGgjAgIgegeIhSDeg");
	this.shape_42.setTransform(128.7371,1422.5222,0.1035,0.1035);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#85340A").ss(1.1,0,0,4).p("AghBYIgPmjQAAgMgJAAQgFAAgDAGQgBADAAADIgZKpAAGCCQAUgrADhNQAChIAUgmQAYgugBg3QgHg1ACgRQABgTAOgRQALgNgDgDQgGgHgQAOQgSAQgIAfQgBAEgBA8QgBAtgcA2QgWAugFBBQgEAwgPAjQgEALgGAKAgXFeIgKkG");
	this.shape_43.setTransform(127.4504,1422.1562,0.1035,0.1035);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F6B40E").s().p("AhbFbIAZqoIABgGQADgHAFAAQAJAAAAANIAPGiQAPgjAEgwQAFhAAWguQAcg3ABgsQABg9ABgEQAIgeASgRQAQgOAGAHQADAEgLAMQgOARgBATQgCARAHA2QABA3gYAtQgUAmgCBJQgDBMgUArIgmgQIAJDsg");
	this.shape_44.setTransform(127.4503,1422.1836,0.1035,0.1035);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#85340A").ss(1.1,0,0,4).p("AAqBTIiul8QgFgLgIADQgFACAAAHQABADABADIDsJ/ABfBrQACgvgbhGQgahGAEgqQAEg0gWgxQgagvgFgQQgGgTAHgUQAEgQgEgCQgIgFgJATQgKAWAFAfQAAAFAWA4QAPApgFA9QgEAzAVA+QAPAtAAAmQAAANgCALACXFCIhtjv");
	this.shape_45.setTransform(125.6223,1422.3121,0.1035,0.1035);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F6B40E").s().p("AiUkkIgCgGQAAgHAFgCQAIgDAFALICuF9QgBgmgOgtQgVg/AEgzQAFg9gPgpQgWg4AAgFQgFgfAKgWQAJgTAIAFQAEACgEAQQgHAUAGATQAFAQAaAvQAWAxgEA0QgEAqAaBGQAbBGgCAvIgrAAIBjDXIg/Abg");
	this.shape_46.setTransform(125.6249,1422.3307,0.1035,0.1035);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#85340A").s().p("AiriOIFWE+IgXAYgAg2hyQgogxgDgkQAMArAtAuQAxA2ARAkIgQAGQgPgqgxg6g");
	this.shape_47.setTransform(125.2059,1423.8338,0.1035,0.1035);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#85340A").s().p("Ajag4IG1CiIgNAggAhkhLQg4gdgQghQAcAjA6AaQBDAeAdAbIgMAMQgfghhDgjg");
	this.shape_48.setTransform(124.6494,1424.5171,0.1035,0.1035);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#85340A").s().p("AjpAmIHTgRIAAAigAiDgYQg+gGgcgYQAnAWBAACQBJABAmAOIgHAPQgogRhNgHg");
	this.shape_49.setTransform(124.4294,1425.3919,0.1035,0.1035);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#85340A").s().p("ADahgIAOAfIm2CigAjnAHQAtAFA7gWQBFgaApgCIgBASQgtgChJAWQgkAMgbAAQgSAAgOgFg");
	this.shape_50.setTransform(124.5974,1426.6829,0.1037,0.1037);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#85340A").ss(1.1,0,0,4).p("AB9BPQgQgsg0g4Qgyg2gMgoQgQgygnglQgqghgMgNQgMgPgCgVQgCgRgEgBQgKAAgBAVQgBAYAQAbQACAEAqArQAfAgATA7QAQAxAqAxQAeAkAPAjQAFALADALABDBNIkykcQgJgJgHAGQgDAEADAGQABADACACIHPHzAEEEAIjBiz");
	this.shape_51.setTransform(124.412,1422.8783,0.1035,0.1035);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F6B40E").s().p("Aj9jDIgDgGQgDgGADgEQAHgGAJAJIEyEcQgPgjgegkQgqgxgQgxQgTg6gfggQgqgsgCgDQgQgcABgYQABgVAKABQAEAAACARQACAWAMAOQAMANAqAhQAnAmAQAxQAMApAyA2QA0A3AQAsIgnAQICuChIgxAxg");
	this.shape_52.setTransform(124.4211,1422.8874,0.1035,0.1035);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#85340A").ss(1.1,0,0,4).p("AFKCXIj3hbImIiRQgDgBgDAAQgHgBgCAFQgCAFAFAFQACACADABIJrEcACKAnQgggihGgfQhCgfgbggQgigogzgUQgzgOgQgIQgRgIgKgUQgIgPgEABQgJAEAHAUQAIAWAaATQADADA3AYQApASAoAvQAhAnA6AdQAqAVAbAbQAJAIAHAK");
	this.shape_53.setTransform(123.5735,1423.8855,0.1035,0.1035);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F6B40E").s().p("Ak+hFQgDgBgCgDQgFgEACgFQACgFAHAAIAGACIGICQQgbgbgqgVQg6gdghgnQgogvgpgRQg3gZgDgCQgagTgIgXQgHgUAJgDQAEgCAIAQQAKATARAJQAQAIAzAOQAzATAiAoQAbAhBCAeQBGAfAgAjIgeAeIDeBSIgbA/g");
	this.shape_54.setTransform(123.5921,1423.8881,0.1035,0.1035);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#85340A").ss(1.1,0,0,4).p("ACCgFQgrgUhNgDQhIgCgmgUQgugYg3ACQg1AGgRgCQgTgBgRgOQgNgLgDADQgHAGAOAQQAQASAfAIQAEABA8ABQAtABA2AcQAuAWBBAFQAwAEAjAPImjAPQgDAAgDABQgGACAAAGQAAAJAMAAIKpAZABYAiQALAEAKAGAFeAYIkGAK");
	this.shape_55.setTransform(123.2261,1425.1749,0.1035,0.1035);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F6B40E").s().p("AlNBDQgNAAAAgJQAAgGAHgCIAGgBIGigPQgjgPgwgEQhBgFgtgWQg3gcgsgBQg9gBgEgBQgegIgRgSQgOgQAIgGQACgDANALQARAOATABQASACA0gGQA4gCAtAYQAmAUBJACQBMADArAUIgQAmIDsgJIAABEg");
	this.shape_56.setTransform(123.2535,1425.1749,0.1035,0.1035);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#85340A").ss(1.1,0,0,4).p("ABrheQgvgBhGAaQhGAagqgEQg0gEgxAWQgvAagQAFQgTAGgUgHQgQgEgCADQgFAJATAJQAWAKAfgFQAFAAA4gWQApgPA9AFQAzAEA+gVQAtgPAmAAIl8CuQgDACgCACQgFAEACAFQADAIAMgFIJ/jsABTgpQANAAALACAFCiWIjvBt");
	this.shape_57.setTransform(123.3866,1427.0247,0.1035,0.1035);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F6B40E").s().p("AkzCSQgCgFAFgEIAFgEIF9iuQgmAAgtAPQg/AVgzgEQg9gFgpAPQg4AWgFAAQgfAFgWgKQgTgJAFgJQACgDAQAEQAUAHATgGQAQgFAvgaQAxgWA0AEQAqAEBGgaQBGgaAvABIAAArIDXhjIAbA/Ip/DsQgEACgEAAQgFAAgCgFg");
	this.shape_58.setTransform(123.4051,1427.0221,0.1035,0.1035);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#85340A").s().p("ACwiqIAYAYIlWE9gAhuAqQA2gyAkgSIAGARQgqAPg6AxQgxAogkADQArgNAugrg");
	this.shape_59.setTransform(124.9838,1427.492,0.1037,0.1037);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#85340A").s().p("ABqjaIAgANIjCGogAhMBXQAehDAbgdIAMAMQghAfgjBDQgdA4ghAQQAjgcAag6g");
	this.shape_60.setTransform(125.6684,1428.0495,0.1037,0.1037);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#85340A").s().p("AAVjpIAiAAIgRHTgAgeB4QABhKAOgnIAPAIQgRApgHBMQgGA+gYAbQAWgmACg/g");
	this.shape_61.setTransform(126.5449,1428.2699,0.1037,0.1037);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#85340A").s().p("AgKCAQgahFgCgpIASACQgBAsAWBJQASA8gMAiQAFgrgWg8gAhgjaIAfgMICiG1g");
	this.shape_62.setTransform(127.8307,1428.2057,0.1038,0.1038);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#85340A").ss(1.1,0,0,4).p("ABPh8QgsAQg4A0Qg2AygoAMQgyAQglAnQghArgNALQgPAMgVACQgRACgBAEQAAAKAVABQAYABAbgQQAEgCArgqQAggfA7gTQAxgQAxgqQAkgfAjgOIkcEyIgEAGQgDAGAEAEQAGAGAJgJIHznPAEAkDIizDBQALgFALgD");
	this.shape_63.setTransform(123.9595,1428.2243,0.1035,0.1035);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F6B40E").s().p("AjTEBQgDgEADgGIADgGIEckyQgjAOgkAfQgxAqgxAQQg6ATggAfQgsAqgDACQgcAQgYgBQgVgBABgKQAAgEARgCQAWgCAOgMQANgLAhgrQAmgnAxgQQApgMA2gyQA3g0AsgQIAQAnIChiuIAxAxInzHPQgGAFgFAAQgDAAgCgCg");
	this.shape_64.setTransform(123.9686,1428.2152,0.1035,0.1035);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#85340A").ss(1.1,0,0,4).p("ACXlJIhbD3QAIgJAKgHAAniJQgiAggfBGQgfBCggAbQgoAigUAzQgKAbgMAoQgIARgUAKQgPAIABAEQAEAJAUgHQAWgIATgaQADgDAYg3QASgpAvgoQAnghAdg6QAVgqAbgbIiRGIIgBAGQgBAHAFACQAIADAFgLIEcpr");
	this.shape_65.setTransform(124.967,1429.0606,0.1035,0.1035);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F6B40E").s().p("AhSFHQgFgCAAgHIACgGICQmIQgaAbgWAqQgdA6gnAhQgvAogRApQgZA3gCADQgTAagXAIQgUAHgDgJQgCgEAQgIQATgKAJgRQAMgoAKgbQATgzAogiQAhgbAehCQAfhGAjggIAeAeIBSjeIA/AbIkbJrQgEAJgGAAIgDgBg");
	this.shape_66.setTransform(124.9696,1429.042,0.1035,0.1035);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#85340A").ss(1.1,0,0,4).p("AAYldIAKEGQAEgLAGgKAgFiBQgUArgDBNQgCBIgUAmQgYAuACA3QAAAdAEApQgBATgOARQgLANADADQAGAHAQgOQASgQAIgfQABgEABg8QABgtAcg2QAWguAFhBQAEgwAPgjIAPGjIABAGQACAGAGAAQAJAAAAgMIAZqp");
	this.shape_67.setTransform(126.2568,1429.4078,0.1035,0.1035);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F6B40E").s().p("AAyFVIgBgGIgPmjQgPAjgEAwQgFBAgWAvQgcA2gBAtQgBA8gBAEQgIAfgSAQQgQAOgGgHQgDgEALgMQAOgRABgTQgEgqAAgdQgCg3AYgtQAUgmAChIQADhNAUgrIAmAQIgJjsIBEAAIgZKpQAAAMgJAAQgGAAgCgGg");
	this.shape_68.setTransform(126.2568,1429.3804,0.1035,0.1035);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#85340A").ss(1.1,0,0,4).p("AgphSQAAgNACgLAhehqQgBAvAaBHQAaBFgEAqQgEA0AWAyQAMAaATAkQAGATgHAUQgEARADABQAJAFAJgTQAKgWgFgfQAAgFgWg4QgPgpAFg9QAEgzgVg/QgPgsAAgmICuF8IAEAFQAEAFAFgCQAIgDgFgMIjsp/AiWlBIBtDv");
	this.shape_69.setTransform(128.1809,1429.3148,0.1037,0.1037);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F6B40E").s().p("AAAFaQgDgBAEgRQAHgUgGgTQgTgkgMgaQgWgyAEg0QAEgqgahFQgahHABgvIAqAAIhijXIA/gbIDsJ/QAFAMgIADQgFACgEgFIgEgFIiul9QABAnAOAsQAVA/gEAzQgFA9APApQAWA4AAAFQAFAfgKAWQgHAPgIAAIgDgBg");
	this.shape_70.setTransform(128.1783,1429.2962,0.1037,0.1037);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(1,1,1).p("AD6AAQAAAvgPAoQgBADgBADQgIAUgLARQgPAZgWAWQgsAsg3ARQglAMgpAAQgwAAgqgQQgvgTgngmQgWgWgPgZQgLgRgIgUQgBgDgBgDQgPgoAAgvQAAgtAPgpQABgDABgEQASgtAmgmQAngmAvgTQAqgQAwAAQApAAAlALQA3ASAsAsQAlAmATAtQABAEACADQAOApAAAtg");
	this.shape_71.setTransform(127.05,1425.95);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#74ACDF").s().p("AhaDqQgvgTgngmQgWgWgPgZQgLgSgIgSIgCgHIHVAAIgCAHQgIASgLASQgPAZgWAWQgsAsg3ASQglALgpAAQgwAAgqgQgAjqhVIACgIQASgtAmgmQAngmAvgTQAqgQAwAAQApAAAlAMQA3ARAsAsQAlAmATAtIACAIg");
	this.shape_72.setTransform(127.075,1425.95);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AjqBXQgPgpAAguQAAguAPgoIHWAAQAOAoAAAuQAAAugPApg");
	this.shape_73.setTransform(127.05,1425.975);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(1,1,1).p("AD6AAQAAAygRArQgIATgKASQgQAZgWAWQgsAsg3ARQgkAMgqAAQgvAAgqgQQgwgTgmgmQgXgWgPgZQgLgSgIgTQgRgrAAgyQAAgyARgrQATgtAmgmQAmgnAwgSQAqgQAvAAQAqAAAkALQA3ASAsAsQAmAmASAtQARArAAAyg");
	this.shape_74.setTransform(127.8,1194.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#003087").s().p("AjVBBQgLgSgIgTQgRgpAAgzIHzAAQAAAzgRApQgIATgKASg");
	this.shape_75.setTransform(127.8,1200.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C8102E").s().p("AhaAsQgvgSgngmQgWgWgPgZIGrAAQgPAZgWAWQgsArg3ARQglAMgpAAQgwAAgqgQg");
	this.shape_76.setTransform(127.8125,1213.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCD00").s().p("Aj5B9QAAgzARgrQATgsAlgmQAngmAwgSQAqgRAvAAQAqAAAkALQA3ASAsAsQAmAmASAsQARArAAAzg");
	this.shape_77.setTransform(127.8,1181.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(1,1,1).p("AD6AAQAABohJBJQgsAsg3ASQglALgpAAQgwAAgqgQQgvgSgngnQhJhJAAhoQAAhnBJhJQAngnAvgSQAqgQAwAAQApAAAlALQA3ASAsAsQBJBJAABng");
	this.shape_78.setTransform(127.4,729.85);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#001D93").s().p("AgFCxQhKhJAAhoQAAhmBKhKQAmgnAvgSIAAHTQgvgSgmgng");
	this.shape_79.setTransform(110.375,729.85);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AhTDqIAAnTQAqgQAvAAQAqAAAkALIAAHcQgkAMgqAAQgvAAgqgQg");
	this.shape_80.setTransform(126.775,729.85);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FC4343").s().p("AhVjuQA3ASArAsQBJBKAABmQAABohJBJQgrAsg3ARg");
	this.shape_81.setTransform(143.8,729.85);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(1,1,1).p("AD6AAQAABohJBJQgOANgOALQhAAxhVAAQhUAAhAgxQgOgLgOgNQhJhJAAhoQAAhnBJhJQAOgNAOgLQBAgxBUAAQBVAABAAwQAOALAOAOQBJBJAABng");
	this.shape_82.setTransform(127.05,496.95);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#FFFFFF","#ED5D76"],[0,1],0,0,0,0,0,0.5).s().p("AACAGIgBAAIgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBIgBgCIABgBIAAgCIABAAIABgBIAAgBIAAAAIABAAIAAAAIACABIAAAAIABABIAAAAIABACIABADIAAAAIgBADIgBABIgBAAg");
	this.shape_83.setTransform(119.8,497.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C92C38").s().p("AgLAJIgBgBIACgCIADgDQAFgDAAgCIABgFIAAgDIABAAIAAAAIAAABIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIACABIAEACIADACIAEAEIgDgBIgCAAIgDgCIgCgBIgCgBIgBgCIgGAGIgEAEg");
	this.shape_84.setTransform(127.525,505.775);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#096749").s().p("AAJAJQgEAAgBgCIgCgCIACgCIACACIACABIADABIACABIgBABIgBACIgCgCgAgIACIAFgDIACgBIAAgBIAAgBIAAgBIAAAAIAAgDIAAgCIABAAIABAAIAAABIgBAIIgBABIgEADQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAIgCABIgCABQABgDADgDg");
	this.shape_85.setTransform(126.825,505.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#42BED7").s().p("AgBARIgDgBIgCAAIgDgCIABgBIABgBIABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAUABQABAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAIABgBIAAABIACAAIgDACIgCABIgNAAIgHAAgAAcAKQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAgBIgBgBIgBAAIABgBIABAAIAEAAQAFAAAGgCIAEgCIAAABIAAACIgJACIgBABIAAAAIgBAAIAAACIAEADIAAAAIAAABIgIACIgEACgAgQAJIgHAAIgBgBIgBgBIACgBIABgBIABgCIgBgCIgFgBIgHgBIgEAAIgBAAIAAgCIAAAAIABgBIABgCIAAgBIgCgCIgHgEIAAgBIAAgCIARAIIACAAIAAAAIABAAIAAgBIABgCIACgBIABADIADADIAEABIABAAIABACIAAABIAAABIgBACIABAEIABABIgBABIgBADg");
	this.shape_86.setTransform(126.45,502.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#91362B").s().p("AgJAMQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIgBgBIgBABIgBABIgBAAIgBAAIgDgBIgBgCIAAgBIABgDIABgBIAAgBIgCgDIABgDIABgBIgBgBIgBgBIAAgBIAAAAIABgDQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAAAAIADABIAAABIAPAAIAAAAIgGAAIgBABIABAAIABABIACAFIACADIABAFIAEAGIAAAAIAEAAIgEgGIgDgHIAKAAIAAAAIgBABIgIAAIADAFIAEAHIACgBIACgBIAAgBIABgBIACgBIABABIABACIgBAAIAAAAIAAgCIgBAAIgBAAIgBACIAAABIABABIACAAIACAAIABgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgBgBIAAgBIAAAAIABgBIAAgDIAAgCIAAgBIAAAAIABgDIgBgCIgBgBIgBAAIgBAAIgCABIAAABIABABIABAAIAAgBIABAAIAAABIgBABIgBAAIgBAAIgBgCIAAgBIgCADIAAACIAAgCIABgEIACABIABgBIACgBIABAAIABABIACADIAAACIgBABIAAAAIgBABIABAAIAAACQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABAAAAIAAABIgBACIgBAAIgBABIgBAAIgCAAIgBgBIgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgUgBgAgJgIIADAFIABAEIABAEIAEAGIAEAAIgDgGIgCgEIgBgEIgEgGIgBAAIAAgBIgCAAIgCAAgAgBALIgDgGIgCgEIgBgDQgBgEgEgDIAAAAIAAgBIgCAAIAAACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgBAAIgBAAIgBgBIAAgBIAAABIAAAAIABAAIAAABIABAAIAAgBIABgBIgBgCIgCgBIgCABIgBADIAAABIABACIAAABIAAAAIgBADQAAACACACIAAABIAAAAIgBABIgBACIABACIACABIACAAIABgBIABgBIgBgCIgBAAIgBAAIgBABIAAAAIAAAAIAAgBIACgBIABABIABACIABABQABABAKAAIAAAAg");
	this.shape_87.setTransform(127.075,502.875);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F5AC61").s().p("AAQALIgBAAIAAgBIABgCIABAAIABAAIAAABIAAABIABgBIgBgBIgBgCIgCABIgBABIAAACIgCABIgCAAIgEgHIgDgEIAIAAIABgCIAAAAIAAgBIAAgCIACgCIAAAAIABACIABAAIABAAIABAAIAAgBIgBAAIAAABIgBAAIgBgCIAAgBIACAAIABgBIABABIABABIABACIgBACIAAAAIAAABIAAACIAAADIgBABIAAAAIAAABIABABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgBACIgCAAIgCAAgAAFALIAAAAIgEgGIgBgEIgCgEIgCgEIgBgCIgBAAIABAAIAGAAIAAAGIAAABIABAAIADAHIAEAGgAAAALIgEgGIgBgEIgBgEIgDgEIgCgCIACAAIACAAIAAAAIABAAIAEAGIABAEIACAEIADAGgAgMAKIgBgBIgBgCIgBgBIgCABIAAABIAAABIAAgBIABAAIABgBIABABIABABIgBABIgBABIgCAAIgCAAIgBgCIABgDIABgBIAAAAIAAgBQgCgCAAgCIABgDIAAAAIAAgBIgBgBIAAgCIABgCIACgCIACABIABACIgBACIAAAAIgBAAIAAAAIgBAAIAAgBIAAAAIAAABIABABIABAAIABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAgBIACAAIAAAAIAAAAQAEAEABADIABADIACAEIADAGQgKAAgBgBg");
	this.shape_88.setTransform(127.075,502.85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2070A2").s().p("AgEASIgCAAIgEgDIABAAIADACIACAAIADABIAIAAIAMAAIACgBIADgCIACAAIgFADIgOABIgLgBgAAcAMIAFgCIAHgCIAAgBIAAAAIgEgDIAAgCIABAAIAAAAIABgBIAJgCIAAABIAAAAIgDAAIgGACIgBABIAAABIACABIABABQAAgBAAgBQABAAAAAAQABgBAAAAQABAAAAAAIADABIABADIgBADIgDAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgBAAIgGABIgFADgAAqAFIgBACIABACIABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgCIgCgBIgBABgAgRALIgGgBIgBAAIABAAIAHAAIACABIAAAAgAgaAIIABgBIACgBIABgCIgBgBIgBgBIgFgBIgJgBIgCABIgCABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIACgBIACABIABAAIABgBIABgBIAAgBIgBAAIgDgCIgGgDIABgBIAHAEIACACIABABIgBACIgBABIgBAAIABACIABAAIADAAIAIABIAEABIABACIgBACIgBABIgCABgAgsgCIAAACIAAAAIACABIACgBIAAAAIAAgCIgCAAIgCAAgAAcAAIAAgBIAEAAQAFAAAHgCIAEgBIgBAAIgDACQgGACgGAAIgEAAgAgPgEIgEgBIgDgDIgBgDIgCABIgBACIAAAAIAAABIgBAAIgCgBIgQgHIAAgBIAGADIAKAFIACAAIAAAAIABAAIAAgCIgCgBIgBgDIABgCIADgBIACABIABACIgBADIABABIAEAEIADACIABAAIAAAAgAgbgQIgBACIABABIACACIABgCIABgBIgBgCIgBAAIgCAAg");
	this.shape_89.setTransform(126.425,502.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#FFFFFF","#ED5D76"],[0,1],0,0,0,0,0,0.5).s().p("AAAAFQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIAAgDIAAAAIAAgBIACgDIABAAIAAAAIAAAAIAAAAIABAAIABAAIABAAIAAAAIAAABQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgBACIAAABIgCACIgBAAIAAAAg");
	this.shape_90.setTransform(123.4083,498.8875);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#4B413A").s().p("AAAAIQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAIABAAIACABIACAAIgCABIgBABIABgBgAgEAIIAAgBIACACIgCgBgAADAHQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIADABIABgBIABAAIgCACgAAAgFIABgCIABAAIAAAAIABAAIgBAAIgCACg");
	this.shape_91.setTransform(123.275,496.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#40421C").s().p("AAAgBIAAABIAAABIAAABg");
	this.shape_92.setTransform(124.55,496.45);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6D5C2C").s().p("AgBABIABgBIABAAIABgBIAAABIAAABIAAABIgBAAIgCgBg");
	this.shape_93.setTransform(124.3,496.475);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1F2220").s().p("AAKAYIgBAAIgBgCIgBgCIABgDIABAAIAAAAIAAgBIABAAIACADIAAABIAAAAIAAABIgBAAIgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAABABIgBgBgAAlAWQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBgBIgCgBIAAAAIABgCIACgBIAAAAIABAAIABABIABACIAAACQgBABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAgAADARIgBAAIAAgBIgBgCIAAAAIADgDIACAAIAAAAIABABIAAABIAAACIgCAAIgBAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAgAgmgHIgCgBIABgBQAAAAABAAQAAABABAAQAAAAAAAAQABAAABAAIgCABgAgkgIIgCgBIACgBIAAgBIABAAIABAAIABgCIABACIABABIgBABIgDgBQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAIgBABIgDAAgAgjgSIAAgBIAAgBIAAgBIACgCIABgBIABAAIABAAIgBABIAAABIAAAAIAAABIAAABIAAAAIAAABIgBABIgDABg");
	this.shape_94.setTransform(126.8875,498.275);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#302419").s().p("AACACIgBAAIgBAAIgCgCIAAgBIABABIABABIABABQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgCIABABIAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIAAgBg");
	this.shape_95.setTransform(128,497.7536);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#88472A").s().p("AAAANIAAgBIgCgEIAAgCIAAgBIgFgGIAEAFIgFgHIgGgEIAEACIABAAIABAAQAAACAEAEQAFAEACAAIgDgFIgCgEIAAAAQAFAIAAAAIACgCIABABIABACIABACIABAAIABABIAAABIAAABIgBAAIAAAAIgEgCIgBgBIAAADQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIgBgBIgBgCIgBgBIAAABIABADIgBABgAAJAEIgCgEIgDgFIgBgCIABgBQAGANACAAQABABgEgJIAAgCIABADIACADIAAABIABgBIAAgEIgCgGIgCgDIADAGIABACIACAFIgBgBIABACIAAABQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAgBgBg");
	this.shape_96.setTransform(127.75,496.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#8DBCBD").s().p("AALAXIgBgDIAAgBIACgHIACgEIAAAAIABAAIABABIABABIAAAAIABAAIAAgBIAAgCIADAAIADAAIABgCIABgCIADgBIADAAIACgBQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIACACIACACIgBABIgBAAIgBgBIgBAAIABAAIAAABIgCABIgBgBIgBgBIABgBIgBgBIgBAAIgCAAIgBAAIgBACIgBABIAAAAIAAgBIAAAAIgCAAIgEACIgBACIAAABIgCABIgBAAIgEAGIgBAEQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAIgBgCgAANALIAAACIABAAIABgBIgBAAIAAgCgAATALIAAAAIAAABIABgBIABgDgAAkAHIgBABIABAAIAAgBIACgCgAAdAEIgBAAIAAABIABgBIABgBgAAQAUIAAAAIAAgBIABgBIAAABIACAAIAAAAIgCACIgBgBgAA5AOIAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAIAAAAIAAABIgBABIABAAIABgBIAAAAIAAABIgBABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAAfANQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBABIAAABIgBgCgAAsANIAAgBIAAgBIgDAAIABAAIAAAAIAAgBIAEAAIACAAIACgCIACgDIAFgEIADgBIACAAIABABIgDABIgDADIgBgBIABgBIgBABQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIABAAIAAAAIAAACIgBAAIAAAAIgDADIgEABIAAABIAAABIgCABQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAgAAtAMQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIABgBIACgBgAA1ANIgBgBIAAgBIABAAIAAAAIAAABIABAAIABgBIAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAgAAZANIAAAAIgBgCIABAAIABABIABgBIAAABIAAABIgBAAgAA1ALIABAAIAAAAIAAAAIgBABIAAgBgAgBAKIABAAIAAAAIAAgBIgBAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAIAAABIABAAIAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAIgBgBgAgJAJIAAAAIABAAIAAgBIgBAAIgBAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIABAAIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAADAGIAAgBIAAABIABABIABgBIAAgBIgBAAIAAgBIABAAIAAABIABAAIAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgBgBgAgRAGIgBgDIABgCIADgEQADgCAEgBQAEABADABIAEADIADABIABAAIABABIAAABIABAAIAAAAIABAAIABgBIAEAAIAAAAIAAAAIAAABIAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAIgBAAIgJgEIgBgBIAAAAIgBABIgBAAIAAgBIABABIAAgBIAAAAIgCgBIAAAAIAAABIAAgBIgBAAIgEgCIAAAAIAAABIABABIAAAAIAAABIgBAAIgBAAIgBgBIAAgBIAAABIABAAIAAAAIABAAIgBgCIAAAAIAAAAIgCgBIAAABIgGACQgDABAAADIAAAEgAgDAEIABAAIAAgCIgBAAIABAAIABABIABAAIAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgBgBgAgcAFIAAgBIAAAAIABgBIAAAAIABABIgBABgAgMACIACAAIAAAAIgBgBIABAAIABABIAAAAIAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCgBgAglACIABAAIgBgBIACAAIAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBgBgAgYABIABAAIgBAAIAAAAIABgBIABABIAAABIgBAAIgBgBgAgsAAIAAgBIAAgCQABgDACgBQADgDAEAAIAAABIADAAIABADIgBAAIgDAAIgCgBIgBAAIABABQgFAAgBACIgBAEIACACIgDgCgAggABIABAAIAAgBIAAAAIgBAAIABgBIABABIAAAAIAAABIgBAAIgBAAgAgVAAIgEgDIACgDIACACIABABQABABAAABQAAAAAAABQAAAAAAAAQAAAAAAAAgAgngDIABAAIgBgBIABAAIABABIAAAAIgBABIgBgBgAgugMIAAgBIgBABIgBgBIAAgBIAAgBIAAABIABABIAAgBIAAgBIgBgBIgEgEIAAgBQgDgBgEABIABgDIABAAQAEAAAFAFIABABIAEAHIABAEIgBAAIgCADQABgEgCgEgAgjgGIAAAAIABAAIAAAAIABAAIAAAAIgBABIgBgBgAg2gFIAAgBIAAAAIAAAAIABAAIAAgBIAAAAIABAAIAAABIAAAAIgBABgAgxgHIABAAIAAgBIABABIABAAIAAABIgCAAIgBgBgAg0gLIgBAAIgBgBIABAAIAAgBIgBAAIAAgBIABAAIABAAIAAABIAAACgAg7gMIAAAAIAAgBIABABIAAgBIgBAAIABgBIABAAIAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBgAg1gSIABAAIAAABIAAgBIABAAIAAABIgBABIgBgCgAg6gQIAAgBIABAAIAAgBIABAAIAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAgAg6gSIABAAIAAAAgAg+gUIABAAIgBACg");
	this.shape_97.setTransform(126.175,499.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0D534D").s().p("AAIAaIAAgBIAAgGIAAgBIAAgDIAAgFIAAAAIgEACIgBAAIgBABIgBAAIgCAAIgEAAIgBAAIgHgBIgBgBIgBAAIgDgDQgCgCAAgDQgEADgGAAIgCgBIgBAAIgCAAIgBAAQgFgBgCgCIgCAAQgCgCAAgCIAAgBIgBAAIgFgBIgBAAQgEgBgDgCIAAAAIAAAAQgEgEgBgEIAAgBIAAgCIABgEIABABIAAABIgBAEQACAGAHADIAAABIABAAIAGACIACAAIAAgBIACgEIABAAIgBgDIgEgIIgBgBQgFgEgEAAIgBAAIAAAAIABAAIAEAAIABABIAEADIAEAFIABABIABAFIAEgCIACAAIACAAIAAAAIADAAIAAABIAAAAIgDAAIAAgBQgEABgDACQgCACgBADIAAABIAAACIADACQAEADAIAAQAGAAAFgCIABgEIgDgCIgCgBIgCgCIAAgBIADACIAFADIACgCIAAgBIACgBIADgCIACAAIAEACIAEABIABAAIAAABIABAAIACABIADACIAAAAIgCAAIgCgBIgEgCQgDgCgEAAQgFAAgCADIgDAEIgBACIABADIAAAAIAFAEQAEACAFAAQAFAAAFgBIAEgEIABAAIABgCIAAABIgBABIgBAFIgBAEIAAADIAAABIAAAFIABABIACAAIAGAAIAAgBIABgDQAAgDADgCQADgBADgBIAEAAIAEgBQADgCABgEIgBgCIgBgBIgCgCQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgCAAIgCAAIgDACIgCACIAAABIgDAAIgDAAIAAACIAAABIgBAAIAAgBIABABQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAIABgBIABAAIAAAAIABAAIABAAQABgBAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIABgBIADgBIABAAIABAAIAAAAIABAAIAAgBIAAABIACAAIABAAIAAgBIACABIABABIACACIACAAIABAAIABAAIAAADIABAAIgBACIAAABIAEAAIABgBIABgBIADgDIAAAAIACgBIAFgEIABAAIABAAIACAAIABABIACABIAAABIgCgBIgBgBIgCAAIgDABIgFAEIgDACIgCACIgBAAIgEAAIgBABIAAABIAAAAIgBACIgBABQAHADAFAAQAFAAAEgCIAGgDIACgDIAAgBIAAgCIAAAAIAAAAIABADIAAACIgBABIgBABIgFADIgBAAIgBABIgBAAIgGABIgBAAIgHgBIgIgDIgEABIgEABIgCAAIgEACIAAAAIgBADIgBADIgBACIAAABIgJAAIgBAAgAAPAUIACgCIAAACIgCAAgAAOAUIgBgBIABAAIABABgAA3ANQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIACgBQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAgAAqANIAAgBQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAIABgBIAAABIgBABIgCgBgAAzAMIgBgBIABABIABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAAgBIAAAAIAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgBgBgAAXAMIABAAIABAAIAAAAIgBABIgBgBgAAQAMIABAAIACgBIgCABIgBAAgAAWALIAAgBIAAACIAAgBgAgDAIIACABQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAIgCgCgAA4AIIAAgCIABABIABABQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgBAAIAAgBIACACQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCAAgAAhAHIgBgBIAAgBIABABIABABIACgBIAAABIgBAAIgBABIgBgBgAgLAHIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIAAgBIABABQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBgBgAAaAGIABgBIABgBIAAABIAAAAIgBABgAA1AFIAAAAIABAAIAAgBIAAAAIAAgBIABABIAAABIAAAAIgBABIgBgBgAABAFIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAgAgGADIABAAIABABQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQgBAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgCgBgAgOABIABABQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAgAgaAAIAAABIACgBQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAgAAJgBIABAAIABAAIACABIgDAAIgBAAIgBABQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAgAgiAAIAAAAIABAAIABgBIgBgBIABABIAAABIgCABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAgAAAAAIAAAAIABgBIAAAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAgAgpgDIgBgBIABAAIAAAAIACAAIAAAAIgBABIAAABIgBgBgAgmgGIABgBIABABIABgBIAAAAIAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAgAgzgHIAAgCIABACIABgBIAAABIgBABIgBgBgAg3gGIABgBIAAgBIAAgBIABABIgBABIgBABIAAAAgAg4gNIABABIABAAIgBAAIgBgBgAg9gNIAAABQABAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAIAAAAIgBgBIABABIABABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBgBgAgzgOIAAAAIABABIACgBIgBABIgBABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAgAg9gTIABABIAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIgBgBIABABIAAABIgCABQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBgAg2gSQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIABACIABgBIAAgBIABABIgBABIgBAAg");
	this.shape_98.setTransform(126.4,499.95);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1E8286").s().p("AAIAZIAAgBIAAgGIABADIAAABQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgEIAFgGIABAAIACgBIAAgBIABgCIAEgDIABAAIAAABIAAAAIABABIABgBIABgBIAAgBIAAAAIACAAIACAAIAAABIAAABIAAAAIAAACIABAAIACAAIAAgBIAAAAIAAgBIAAgBIAAAAIACABIABABIAAgCIABACQgBAEgEACIgDABIgFAAQgDABgCACQgDACgBACIAAAEIgBAAIgFABgAAPAOIgBACIgBAAIAAACIABABIABAAIABAAIABgCIgBgBIABAAIABgBIgDABIAAgBIABgBgAAcALQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAgBIABAAIABgCIgBABIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAgAAWAJIAAABIAAABIABAAIAAABIACgBIAAAAIAAgBIgBgBIADAAIgCAAIgBgBIAAgCIgBACIAAABIgBAAIAAAAgAAIAKIACgEIABgCIABABIgBAAIgBAFIgCAHgAAkAMIACgBIABgCIADAAIgBABIAAABIABABIABABIACgBIAAgBIABgBIgBgBIAFgBIADgDIAAAAIACAAIAAgBIgBgBIAEgDIADgBIABABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAABABQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAIAAADIAAABIgCACIgGADQgFADgEAAQgGgBgHgDgAA3ALIAAABQAAAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAIAAgBIAAgBIgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAgAAzAIIgBABIAAAAIAAABIAAABIABABQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIgBgBIAAAAIAAgBIgBAAIABgBgAA4AHIACABQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIgBgBIABgBIgBABIgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIABgBIABABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgBAAIgBgBIAAABgAgFAKQgFAAgEgCIgFgEIAAgDQAAgCACgCIAHgCIAAAAIAAABIAAABIACABIAAAAIABAAIAAgBIAAgBIAAAAIAAgBIADABIABABIACABIAAAAIAAABQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAJAEIABAAIgCACIAAABIgEADQgEABgEAAIgCAAgAgDAHIgBABIABAAIABABQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIgBgBIAAAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABgAgMAGIgBAAIABAAIABABIABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIgBgBQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABgAAAADIAAABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIAAAAIAAgBIgCAAIgBAAgAgHACIABAAIACABQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIAAAAIgBgBIgBAAIgCAAIABABIgCgBgAgOAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAAAIgBAAIgBAAIAAAAIgDgCIACACIAAAAIgCAAgAAOAHIgBgBIABABIABAAIgBAAIAAAAgAgfADQgIAAgFgDIgBgCIABgEQABgCAFgBIAAABIAAAAIAAABQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIgBgBIgBgBIADABIABAAQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIACAAIAEACIACACQABAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAgBIgCgBIACABIACADIgBADQgDACgFAAIgCAAgAghACIACABIABAAIAAAAIABgBIAAgBIgBAAIgBABIAAAAgAgoAAIgBAAIAAAAIABAAIABABQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIgBAAIgBgBIgCAAgAgbAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAgBIgBgBIgCABIgBAAgAgjgCIAAAAIgBABIABAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACAAIAAgBIgBgBIgBgBIAAAAIgCgBgAgqgFIABACIABAAIABgBIAAgBIAAAAIgCgBIAAAAIgCAAgAg4gHIACgBIABgBIgBAAIgBgBIgBAAIgBAAIAAABIAAABIABABIgBgBQgGgDgCgGIAAgDIABgCIACAAIABgBQADgBADABIAAACIgBABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAABAAIABAAIAAgBIgBgCIAAAAIAAgBIAEAEIAAABIgBABIAAABIAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIABgBQACAEAAAEIAAABIgCAAIgHgCgAgzgKIAAABIAAABIABABIABgBIAAgBIAAgBIAAAAIgBAAIgBgCIAAABIAAABIgBgBgAg5gPIAAABIABABIABAAIABAAIAAgCIAAgBIgCAAIAAAAIgBAAIAAAAgAg+gPIAAABIABAAIABABQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgBgBIgBgBIgBAAIAAABIgBgBgAg9gUIAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIACAAIAAgBIgBgBIAAgBIgBgBIAAABIAAABIgBgBg");
	this.shape_99.setTransform(126.425,500.03);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#231F20").s().p("AApAWIAAgCIABABIABADIgCgCgAAOAVIABgBIAAgBIAAACIAAAAIADAAIgCABIAAAAIgCABIAAgCgAA6AWIgBgBIABAAIABAAIABABIgCAAgAA7AVIAAgBIAAAAIADABIgCABIgBgBgAACASIABgBIAAABIgBABgAABASIAAAAIABAAIgBABIgBAAgAgGASIABAAIAAABIgCAAgAA4ASIAAgBIABgBIABAAIAAABIgBAAIgBABgAAqARQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIADgBIgCABIAAABIgBAAgAAdARQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIABAAIABgBIgBACIgBAAgAgRARIABAAIABgBIABAAIgBABIgCAAgAALARIAAgCIAAgCIAAADIABAAIAAABgAAyAPIAAAAIABgCIAAAAIAAABIgBABIAAABIABgBIABAAIAAAAIgBABIgBAAIAAgBgABCAQIABgBIAAAAIACAAIgCABgAAWAPIABgCIABgBIAAACIABABIABAAIgCAAIgBABIgBgBgAAQAPIAAgBIADgDIgCADIgBACIAAgBgAgDANIgBAAIABgBIAAAAIABABIgBAAgAgkAKIgCABIABgBIABAAIADAAIgBABIgCABIAAgCgAA5AKIABAAIABAAIgBAAIAAABIgBABQAAAAAAAAQgBAAAAAAQAAgBABAAQAAAAAAgBgAgMAMIgBAAIABgBIAAAAIABAAIAAABgAAhAKIACgBIgCABIAAABIgBAAIABgBgAABAKIgBgBIAAgBIABAAIABABIAAAAIAAABIgBAAIAAAAgAA0AJQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABgBIgBABIAAABIAAAAIgBAAgAAZAJIAAgBIABAAIACgBIgCABIgBABIAAAAgAgfAJIgCgBIACAAIAAAAIABAAIAAABgAgvAIIABgBIACAAIgBABIgDABIABgBgAgGAIIgBAAIgCgCIADABIgBgDIACACIAAAAIABACIgBAAgAAyAGIABgCIgBACIAAABIgBABIABgCgAgOAGIgCAAIACAAIAAgCIgCgCIADACIAAACIAAAAIgBAAIAAAAgAgpAGIAAAAIABgBIgBgCIACABIAAACIgBAAgAgbAEIgCAAIACAAIAAAAIACAAgAgBADIgBgBIgBgBIABAAIACABIAAABIAAABgAgjAEIgCgBIACAAIAAgBIgBgBIACABIAAAAIABABIAAABgAA4ABIACgBIAAAAIgBACIgBAAIAAgBgAg3ABIAAgBIABAAIgBABIgCABIACgBgAgJABIgBAAIAAgBIgBAAIAAAAIACAAIAAAAIABABIgBAAIAAABIAAgBgAgpAAIgBAAIgBAAIACAAIABAAIgBAAIAAAAgAAAAAIAAgBIAAgCIABACIgBABgAgTgBIAAgBIACABIABAAIgBABgAgCgBIAAgBIgBgCIABAAIABACIAAABgAgmgCIgBgBIAAgBIAAAAIACABIAAABIAAAAIgBAAgAg+gCIgCAAIAAgBIACABIABAAIAAAAgAg5gDIAAAAIAAgCIABABIAAACIgBgBgAgzgEIAAAAIgBgBIABAAIAAAAIAAgCIABACIgBABIAAABIAAgBgAgMgEIAAAAIgBgCIABAAIABACIgBgCIACABIAAABgAgogHIAAgBIAAAAIABABIgBAAgAg5gIIAAgBIAAgBIAAAAIAAABIABAAIAAABIAAAAIgBAAgAg+gJIgBgBIACABIAAAAIAAABIAAAAIgBgBgAgygKIAAgBIAAgCIAAABIABACIAAABIgBgBgAhEgKIAAgBIACAAIAAABIgCAAgAgvgLIABAAIABgCIgBADgAg9gOIAAgCIABABIAAAAIAAAAIAAgBIABABIgBABIAAABIgBgBgAg3gPIAAgCIAAABIAAABIAAABIAAgBgAg4gUIAAgDIABABQAAABAAAAQABAAAAAAQAAAAAAABQAAAAgBAAIAAABg");
	this.shape_100.setTransform(126.45,499.45);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#7E4227").s().p("AgDAGQgDgDgIgIIAAgCIABABIABAAIASASIAAABQgDgBgGgGgAAIAIIgHgGQgEgDgIgJIAAgCQATARAHAFIAAAAIgBABIgGgDg");
	this.shape_101.setTransform(131.1,497.725);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.rf(["#FFFFFF","#ED5D76"],[0,1],0,0,0,0,0,0.3).s().p("AgEAEQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAABgBIAAAAIACgBIADgCIABgBIABAAIABABIAAAAIAAABIAAABIAAABIgDADIgCABIAAAAIgCABIgCgBg");
	this.shape_102.setTransform(133.08,499.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F2E445").s().p("ABIARIAAgBIABAAIAAABIAAABgABIAPIAAAAIgBgBIAAAAIABAAIABAAIAAABgABFAOIAAgCIAAAAIABABIAAABIAAAAIgBAAgAgZAEIAAgBIABgBIABABIAAABIgBAAIgBAAgAgcACIAAAAIAAgCIABAAIABABIAAABIAAABIgBAAIgBgBgAgfACIAAgBIAAgBIACAAIAAACIgBABIgBgBgAhHgLIgBAAIAAgBIABgBIABAAIAAABIAAABIAAAAIgBAAgAhEgNIgBAAIAAgCIABgBIABABIAAABIAAABIgBAAgAhBgPIAAAAIgBgCIACAAIAAAAIAAACIAAAAg");
	this.shape_103.setTransform(126.375,498.05);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E53545").s().p("ABIATIAAgBIABABIAAgBIAAgBIgBAAIAAgBIABAAIAAgBIgBgBIgBABIAAAAIgBAAIgBABIgBgBIgBgBIAAgBIABgBIABAAIAAgBIABABIACAAIgBABIAAABIABAAIAAgBIABAAIABABIAAABIAAAAIgBABIAAAAIABABIAAgBIABABIAAACIgBAAIgBAAgABFAOIABAAIAAgBIgBAAIAAAAgAgYAGIgBgBIgBgBIAAAAIAAAAIgCAAIAAgBIgBAAIgBABIgBAAIgBgBIAAgCIABAAIAAgBIgBAAIADAAIAAAAIABABIABgBIgBAAIABAAIAAAAIABAAIABABIAAAAIAAABIABAAIAAgBIABABIABABIgBAAIABABIgBABIgBABgAgZAEIAAABIABAAIABgBIAAAAIgBgBIgBABgAgcACIAAABIABABIABgBIAAAAIAAgBIgBgBIgBAAIAAABgAgfACIAAABIABAAIABgBIAAgBIgCAAgAhIgJIgBgBIAAgCIgBAAIABgBIABgBIABAAIABAAIAAgBIgBAAIABgBIAAAAIABgBIABAAIABAAIAAABIAAAAIAAAAIABgBIgBAAIACgBIACAAIgBABIABAAIAAACIAAABIAAAAIgCABIAAgBIgBAAIAAAAIAAABIgBAAIAAABIgCAAIAAACIgBABIgBAAIgBAAgAhIgMIAAABIABABIABAAIAAgBIAAgBIgBgBIgBABgAhFgOIAAABIABAAIABAAIAAgBIAAgBIgBAAIgBABgAhCgQIABABIAAABIABAAIAAgBIAAgBIAAAAg");
	this.shape_104.setTransform(126.3688,497.9875);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#AD7538").s().p("AALAKIgDgDIgBADIgBgBIAAgCIgCgDIgDgCIAAADIgBgBIAAgCIgBgCIgDgCIAAABIAAABIgBgCIgJgKIAJAIIACAAIACABIgBAAIgBAAIACADIACABIADAAIABAAIgBAAIgBABIACACIACACIADAAIADAAIgCAAIgCABIADADIADACIAAABIgEgDg");
	this.shape_105.setTransform(131.5738,497.3542);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F8CC58").s().p("AA6AvIgBgBIABgCIABAAIACAAIAAACIgBABIgCAAIAAAAgAg4AuQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgBIgBgCIABgBIAAgBIACABIABACIAAACIAAAAIgBABgAg8AtIAAgBIAAgBIACAAIAAAAIABABIAAABIgCAAIgBAAgAA5AsIgDgBIgCgBIABgCIAEAEgAg5AsIAAAAgAg1ArIAAAAIADgBIABABgAgwApIAAAAIAAgEIAAAAIABAFgAAzAkIAAgBIACAEIgCABgAgyAkIgBAAIAAgBIAAgBIACAAIABAAIABgBIAAABIABAAIgBABIgBABIgCAAgAAwAhIAAgBIACgBQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIgBABIgBABIgCgCgABYAUQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAgBIAAgBIACgBIAAAAIABABIAAABIAAACIgBAAIgBAAgAhWATIgBAAIAAgBIABgBIAAgCIAAgBIAAAAIABAAIABABIABACIgBAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgBAAgAhPASIgDgBIAAAAIADgBIABACgABSARIAAAAIABgBIADABgAhZARIgBAAIABgBIACAAIABAAIAAABIgBAAIgCAAgABPAOIAAgCIADAEIgBABgAhNAPIAAgDIAAAAIABAAIAAAEgAhPAKIAAgBIAAgBIAAAAIACAAIAAgCIAAgBIABAAIABAAIAAABIAAACIgCAAIABAAIABAAIABAAIAAABIAAAAIAAABIgCABIgDgBgABLAKIAAgCIAAgBIABAAIACAAIAAACIAAAAIgBABIgCAAgABCgIIABAAIABgBIABAAIgCACgABHgKIgBgBIAAgBIABgBIACAAIAAABIAAABIgCABgAhigPIgDgDIAAAAIAEACIAAACgABjgRIAEgBIAAABIgCABIgDABgAhfgQIAAgBIACgDIAAABIgCAEgABfgTIAAgBIACACIAAACgABpgSQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACABIgBACIgBAAIgBgBgAhngSIgCAAIAAgBIABgBIABgBIAAgBIABAAIAAAAIABAAIAAABIgBACIgBABgABcgUIgCgBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAAIgBABIgBAAIAAAAgAhpgUIgCgBIAAgBIABAAIABAAIABABIAAABIAAAAIgBAAgAhcgVIgCgCIAAAAIAAgBIABgBIAAAAIACACIABAAIABAAIAAABIgBABIgBAAIgBAAgAghgZIABAAIABgBIAAABIAAABIgBABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBgAhbgYIgBAAIAAgBIABgBIABgBIABAAIAAABIgBABIAAABgAhNgoIAAgCIACACIgBABgAhPgsIgBgBIABgBIABAAIABAAIAAACIgBABIgBgBg");
	this.shape_106.setTransform(127.0333,500.225);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A78D3F").s().p("AA5AvIAAgBIAAgBIgFgDIAAAAIACABIADABIAAAAIgEgEIABAAIAEAEIABgBIACABIAAABIgBACIgBABIgCgBgAA6AsIgBACIABABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIABgBIAAgCIgCAAIgBAAgAg4AvIgBgBIAAAAIAAgBIgBABIgCgBIgBgBIABgBIACgBIAAAAIAAgBIABgBIAAABIgBABIABACIgBgBIAAAAIgCAAIAAABIAAABIABAAIACAAIAAgBIAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIABAAIABgBIAAAAIAAgCIgBgCIABABIAEAAIgDABIAAAAIAEAAIABABIgGAAIAAABIAAABIgBABgAAyAjIABgBIACAFIgCgEIAAABIAAAEIgBABgAAyAjIgCgBIAAgBIAAgCIACAAIACAAIAAACIgBABIABgBQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgCABIAAABIACACgAgzAhIABgCIAAACIAAABIgBgBgABXATQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIACAAIAAgCIAAgBIABABIgBACIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAgAhXATIAAgBIAAAAIAAAAIgDgBIABAAIACAAIABAAIAAgBIgBAAIgCAAIgBABIAAgBIABAAIACgBIABAAIgBAAIAAgBIABAAIABAAIgBAAIAAAAIAAABIAAACIgBABIAAABIABAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIABAAIgBgCIgBgBIABAAIABACIAEAAIgDABIAAAAIADABIABAAIABAAIgGAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBgBgABSARIAEAAIgDgBIAAAAIAEABIABgBIgBABIAAABgABRARIgEgGIgBAAIgBgBIgBgBIABgCIABgBIACABIgCAAIgBAAIAAABIAAACIACAAIABgBIAAABIAEAFIAAABIgDgEIAAACIACADgAhMAQIAAgEIgBAAIAAAAIAAADIgBAAIAAgEIgBgBIAAgBIAAABIADABIACgBIAAgBIAAAAIAAgBIgBAAIABAAIABABIAAAAIgBACIgCAAIAAAGgAhNAIIACAAIAAgCIAAACIgBAAgAhPAIIABgBIABAAIgBgBIABgBIABgBIABABIAAABIAAgBIgBAAIgBAAIAAABIAAACgABDgHIACgCIgBAAIgBABIgBAAIADgDIAAgBIAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABAAIABABIgCAAIgBABIAAABIABABIAAAAIACgBIAAgBIAAABIgCABIgBAAIgCADgAhmgSIgCABIgBAAIgBgBIABgBIgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIABgBIACABIAAAAIABAAIAAAAIAAABIgBABIgBABIAAABIACAAIAAAAIABgBIABgCIAAgBIgBAAIABAAIAAABIAAACIAEACIAAABIgEgCIAAAAIADADIABABIAAABgAhrgWIAAABIACABIABAAIAAgBIgBgBIgBAAIgBAAgABigPIADgBIACgBIAAgBIgEABIAAgBIAFAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIACAAIAAACIAAABIgCABIgBgBIgHACgABpgSIABABIABAAIABgCIgCgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABgAhfgPIACgEIAAgBIgCADIgBgBIADgDIgBgCIAAAAIACACQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABgBIAAgBIAAABIgBABIgBABIgBgBIgDAGgABdgTIgBAAIgBgBIgBgBIACABIABAAIABgBIAAAAIAAABIAEACIgBAAIgCgCIAAABIACADIAAABgAgjgSIAAAAIAAAAIAAAAIAAABgABegVIAAAAgABcgXQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABIABgCIABAAIACAAIAAACQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAgAghgWIAAAAIgBAAIABgBIgBgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIAAACgAgggZIgBAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIABgBIAAgBIAAgBIgBABgAhagXIgBAAIgCgCIAAAAIgBABIAAABIAAgBIABgBIABAAIAAABIABAAIABAAIAAgBIABgBIAAgBIgBAAIgBABIgBABIABgBIABgBIABAAIAAABIAAABIgBABIABABIgBAAgAhNgnIgBgDIgCgBIAAgCIAAgBIACgBIABABIgBAAIgBAAIgBABIABABQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgCIABACIgBABIACADIAAAAIgCgCIAAACIABABg");
	this.shape_107.setTransform(127.025,500.225);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6F7839").s().p("AAPA0IgBgBIgDgBIgFgCIAAgBIABABIAEABIAFADIABAAIABAAIABAAIAAAAIAAABIgCAAIgCgBgAgQA0IAAAAIABgBIABAAIACABIAFgDIAFgDIAAABIgGACIgEADIgCABIgCgBgAAVAyIgDgDIgDgCIgJgBIAAAAIAGAAQAFABACABIAEAEQADABADAAIAHgCIAJgDIAEAAIADACIgBAAIgGgBIgGACIgKADQgEAAgEgCgAgVAxIABgEIgDAAIgBgCIgCgCIAAgBIAAABIABACIABACIAAAAIgCAAIgCADIgDADIACgDQABgBAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgCAAIgBgBIgBgCIgDgDIACAEIABABIgCAAIgEAFIACgDIABgCIgDgBIgCgBIgDgCIABABIABABIABABIgHAAIgCAAIgBABIACgBIADgBIAAgBIAAgBIAAgBIADAAQAAgBAAAAQABABAAAAQABAAAAAAQABABAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAAgCIgCgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAADAEIADACQABAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgCgDQAAAAABAAQAAAAAAgBQABAAAAAAQABAAABAAQACAAACAEIACADIABgCIAAgBIACABIACACIABAAIABABIgCABIgCgCIgBgBIAAAAIAAABIABACIgBABIgCACIgCADgAAXAvIgCgBIABAAIAEgBIAGgDIAJgDIAEgBIAEABIAAABIABAAIAAAAIABABQgDgCgFACIgHADQgFADgFABIgDgBgAgNAtQADgCADAAIADABIACABIAAAAIgCAAIAAAAIgDgBIgFACIgDACIACgDgAASAsQADAAADgCIADgDIADgDQAEgBAFgBQACAAAEABIgGAAIgFADIgGAFQgDABgEAAgAAzAoIgBAAIABgBIACgDIAEgCIADgBIABAAIAEgBIAFgCQAEgDADgCIACgEIACAAIABgBIgEAFIgIAHQgEACgHAAIgBAAIgDACIgBAAIgBABIAAABIgCADgAg1AiIgBgBIgBgCIgBgDIABAFIgBAAIgEABIADgCIgCgBIgBgBIgBAAIgCABIgDAAIgCAAIAFgBIACgCIABgCIAAgDIAAgEIAAAFIgCADIgCgCIgGAAIgEgCIAFABIAEAAIgBgCIAAgFIAAgDIAAADIgBAEIgCgDIgBgBIgBAAIgDAAIADAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAAAIgBgBIgBgDIAAgCIAAAAIAAgBIABABIAAACIABAAIAAAAIABACIABABQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgDIACABIABADIAAADQAAABAAABQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBIAAgDIACAAIACADIABAFIAAADIACgBIABgBIAAACIABAEQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIgDAAgAA6AcIABgBIAAgDQABgCAEgEIAFgEIABgBIAAgBIAAgCIABADQAAADgDACIgIAIIgBAEIAAABIgBAAIgCACIACgFgABEAWIACgDIABgBIAEgCQADgDACABIAAAAIgCACIgBABIgBACIgEADIgEADIgIAGQACgEAGgFgAhJAQIgDgCIgBAAIgBgCIgEgEIACACIAFAEIADABIAAABgABRAOIABAAIgBABgABXAHIACAAIACgDIAEgFIAEgHQADgDACAAIACgBIgFADIgEAHIgEAFIgFAEIgCACIgCADIAAAAIgBABIAAAAIgBABIAFgHgABUAJIAAgFIgBgEIgBgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABgDADgCIAGgEIgDAFIgEAFIgBAGIAAAGIgBAEgAhRAHIgBgCIgHgCIAGAAIABgCIABgCIgCAEIgCgDIgJgCIAFABIADAAIACgJIgCAFIgBADIgDgEIgDgBIgCgBIACAAIADAAIAAgCIAAgBIAAgBIgBACIgBABIgCgCQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIABABIABABIABABIABgBIABgCQABAAAAAAQAAAAAAAAQAAAAABABQAAAAAAABIAAADIAAACIABgCIACgDIACABIABACIAAAFIAAADIACgBIABgBIgCAIQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIgBgBgABYgCQACgHAFgFIACgDIAAAAIABgBIABgDIABgCIABgGIgBgIIAAgCIABgIIACgEIACgBIAAAEIgBAFIgBAEIgBAEIAAAIIAFgJIABgDIAAgEIAAgCIACgCIAAABIgBAJIgCAEIgCADIgDADIgBACIAAABIgBACIAAABIgBACIAAABIgBAAIgBADIgCAEIgBAFIgCAFIgCABIgCADIgCAEQAAgGACgDgAhggSIAAAAIAAgCIAAgBQgBgEgCgCIgBgBIgCgBIgBgBIAAgBIgEgDQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABABAAAAIADABIgBgCIgCgEIAAgCIACgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIABABIAAgCIAAgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABgBIABABIAAABIACgBIACgCIABABIgBACIgCACIgDACIAAAAIAAgBIAAgCIgBADIAAABIABAAIgBADIAAACIAGgDIgEADIgCABIgCgCIgDgCIABABIACADIABACIABACIACAAIACgBIgCACIgCAAIgDAAIgDgCIAGAEIAAADIgBAAIgBgBIAAAAIABABIACABIABgCIgBACIAAABIACACIABAFIAAACIgBACIAAgCgABjgZIgBgEIgBgCIgCgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAIABABIACACIAAAGIAAADIABACIABABQABACgBAGg");
	this.shape_108.setTransform(126.9125,500.65);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#99A16D").s().p("AgdA1IAAgCQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBgBAAIgCACIgDADIgDABQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAABgBAAQAAAAAAABIgCACIgEAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIABgCQABgBAAAAQABAAAAgBQAAAAAAAAQAAAAgBAAIgDAAIgCABIgBAAIAAgBIgBAAIgBAAIgBABIgCgBIAAAAIABAAIACgCIACgBIAHAAIgCgBIgBgBIAAgBIACACIADACIADAAIgBACIgCADIAEgEIACAAIgBgCIgCgEIACADIACACIABABIACAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABIgCADIADgDIACgCIABAAIAAgBIgBgBIAAgDIAAgBIAAABIABACIACADIADAAIgBADIgCACIACgDIACgCIABAAIgBgDIAAgBIAAAAIABACIABABIACgBIAAAAIADgBIAFgBIAFABIAAACIgCAAIgEgBQgDAAgCACIgCACIgBAAIgBABIgDACIgBACIgEACIgBgBgAASAxQAEACADAAIAKgDIAHgCIAGABIABAAIgCAAIgEABIgHADQgFADgEAAQgEAAgFgFgAAOAzIAAAAIgBAAIgFgDIgEgBIgBgBIAAgBIAIACQAEACAAACIgBAAgAgRAyIgCAAIAEgCIAHgEIABABIACAAIAAABIgGACIgEADIgCgBgAAUAxIgFgDQgCgCgEAAIgGgBIAAgBIAFAAIAEABIACABIABAAIADAAQADAAADgCIAHgFIAFgDIAGABIgCACIgCABIgJADIgGADIgEABIgBABIACAAIADABQAFAAAFgDIAHgEQAFgCADACIgEACIgDADIACAAIACABIgDgBIgJADIgIACQgDAAgCgBgAg0AlQgDgDgEAAIgEAAIgCABIAAgBIAAgCQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgEACIgDgCQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQgBAAgBAAIgFAAQgDgDAAgCQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIADABQAAAAAAgBQABAAgBAAQAAAAgBgBQAAAAgBgBIgEgCQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABAAIABAAIAAgBIgDgBIgFgDIgCgCIgEgDIgDgBIgCAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAABAAIACAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEAAQgDgBgBgDQABgBAAAAQAAAAAAgBQAAAAABAAQAAAAABABIAEABQABgBgIgCQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIAAgCIACAAIACAAIgBgCIgBgBIABgBIACABIAAgCIAAgDIAAgCIgBgEIgBgDIgBgBIACgCIgCACIgBgBIgBgBIAAAAIABABIABAAIAAgDIgHgEIAEACIADABIABgBIADgBIgDABIgBAAIgBgDIgBgCIgDgDIAAgBIADACIACACIABgBIAFgDIgGADIAAgCIAAgCIAAgBIAAAAIAAgEIAAACIAAABIABAAIACgCIADgCIABgCIAAABIAAACIgBACIgCADIADgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgDADQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAQAAgBABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAABIgDADIAAAAIABAAIAAACIgBACIABAFIAAACIABABIAAAAIAAAFIgBgBQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAABIACADIABgCIABgCIAAABIAAABIAAADIgDAAIgDgBIADABIADABIADAEIABgDIACgFIgCAKIgDgBIgGgBIAJADIADACIACgEIgBACIgBACIgGAAIAHACIABACIABABIADADIAAAAIACABIAAABIADABIAAgDIAAABIABADIAAABIABAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIgDAAIADABIABAAIABAAIACADIABgDIAAgEIAAAEIAAAEIABACIgFAAIgEgBIAEACIAGAAIACADIABgEIAAgFIABAEIgBADIAAADIgCABIgGABIADAAIADAAIACgBIABAAIABABIACABIgEACIAFgBIABAAIgBgEIABACIABACIABABIACABIADACIABAAIAAAAIABABIABABIAAABIAAABIAAABgAAvAnIAAgCIABgBIABgBIACgBIABgCIABAAIACgCIABAAIAAgBIABgEIAIgIQACgCABgDIgBgDIABABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAAEIAAAAIgBAAIgCADQgHAFgBAEIAIgGIAEgDIADgDIACgCIABgBIACgCIAAAAIABgBIABAAIABgBIAAgBIABgBIAAgFIAAgGIACgFIAEgGIADgEIgBACIAAACIACgCIACgCIABAAIgCACQgGAGgBAGQgCADAAAGIACgEIACgCIACgCIABgFIACgFIACgEIABgCIgBAAIABgCIAAgBIAAgCIABAAIAAgCQAAgGAAgCIgBgBIgBgBIAAgEIAAgFIgCgDIgBgBIgBAAIACAAIACACIACAGIAAACIABAIIAAAGIgBACIgBAEIABAAIAAAAIAAADIAAAGIgEAHIgEAFIgCADIgCABIgFAGIgBAAIAAAAIAAABIgBAAIgBAGIACgBIABAAIgBABIgCAAIgCAEQgDADgEACIgGACIgDABIgBAAIgEABIgDADIgCACIgBABgABDAfIAIgGIAEgGIgBACIAAAEQgCAEgDACQgEADgNAAQAHgBAEgCgABPATgABaACIAEgFIADgGIAGgEIgBACIgEAFIgCAGQgCADgCACIgFABIgCABIAFgFgABhgZIABgCIAEgEIACgDIACgDIAAgJIACACIACAGQgBADgDADIgFAEIgEADgABigkIACgEIABgEIABgFIAAgEIAAABIACADIAAAFIAAAEIAAADIgGAJIAAgIg");
	this.shape_109.setTransform(127.25,500.7281);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CA2B36").s().p("AgyjIQAPALANANQBJBJgBBnQABBohJBJQgNANgPAMg");
	this.shape_110.setTransform(147,496.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#171717").s().p("AACADIgCgDIgBgDIABACIACAFg");
	this.shape_111.setTransform(126.95,495);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#5B391E").s().p("AgCAJIABgCIAAgFIAAgCIgBgFIAAgBIABAFIABACQAAABAAABQAAAAABAAQAAABAAAAQABAAAAgBIABgDIgBgDIgCgEIABgBIABAEIABAEIAAAAIAAACIAAABIAAABIgBAAIgCgBIAAgBIAAAEIgBADg");
	this.shape_112.setTransform(127.725,492.925);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#86512A").s().p("AgBAAIAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIgBABIAAAAIgBAAIgBgBg");
	this.shape_113.setTransform(127.625,490.2583);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#453A2E").s().p("AACAMIgCgIIAAgDIgBgCQAAgEADgGIAAABIgBADQgBAEAAACIAAACIABADIABAIIAAAAIAAAAg");
	this.shape_114.setTransform(124.4,493.4875);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#AC7338").s().p("AAHAZIAAgBIAAgBIgBgBIAAgBIAAAAIACABIABABIABABIgCgCIgCgBIABgCIADABIACABIAAAAIAAABIgBABIgBABIgCABgAALAUIgEgBIADAAIADAAIAAACIgCgBgAgCALIgBAEIgCAAIgCAAIAAgBIADgCIABgDIABACIAAAAIACACIgBABIgCABgAAAAOIAAgBIABABgAgJAOIAAgBIAAAAIADgCIABgEIAAAAIgBADIgDACIAAAAIgBAAIgBgCIABgBIABgBIACgBIAAgBIACABIABABIAAAEIgCACIgBAAIgCAAgAgLAJIAAgBIABgBIACgCIABABIgBABIgBABIgCACgAgMAGIABgBIACAAIAAAAIgCACgAgMAFIADgBIAAAAIgBABIgCAAgAgMADIACgBIAAAAIABABIgDABgAgMACIAAgBIAAAAIABAAIAAgBIABgBIAAABIAAABIgBABIgBAAgAgLgBIABgCIACgBIgCADIAAAAIgBABgAAEgRIABgCIAAgBIAAgBIACAAIAAAAIgBACIAAAAIgBACIgBABgAAFgWIABgBIABABIgBABIgBAAgAAFgXIgBAAIAAgBIABABIAAABg");
	this.shape_115.setTransform(123.3,494.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#503727").s().p("AgCABIACgBIADAAIgDAAIgBABg");
	this.shape_116.setTransform(123.95,490.575);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1D232E").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_117.setTransform(121.85,488.975);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#ECAA42").s().p("AAAABIAAgCIAAgBIABACQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIAAgCg");
	this.shape_118.setTransform(122.2,489.175);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D3D2CA").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_119.setTransform(123.575,489.6375);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FAF3DA").s().p("AgCAGQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgDAEgBIAAAAIABAAIgBAAIAAgBIABgCIACABIACACQgGADAAADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABIgCgBg");
	this.shape_120.setTransform(122.925,490.65);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#88532C").s().p("AAAABIAAAAIAAAAIgBAAIAAgBIABAAIAAAAIAAAAIAAAAIABAAIAAAAIgBAAIAAAAIAAABIABAAIABAAIgBAAIgBAAg");
	this.shape_121.setTransform(122.85,490.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABIAAAAg");
	this.shape_122.setTransform(123.6063,489.625);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#ED7438").s().p("AgBACIABgBIAAABIAAgBIABgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIABgCIABACIgBACIgBABIgBgBg");
	this.shape_123.setTransform(123.625,489.57);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F8CC57").s().p("AAEAbIAAAAIAAgCIABAAIACgBIgCAAIgBABIgBgBIABAAIAEgCIABgBIgEABIgCACIAAAAIgBgBIAEgEIABgBQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAAADIAAAAIAAABIAAACIgCAAgAACAXIgBAAIADgEIAAgDIAAgBIACACIAAACIgBABIgCACIgBABgAABAXIAAAAIgBgBIABgDIAAgDIAAgBIADAAIAAAAIAAABIgBADIgCADIAAABgAgBAWIAAgCIABgFIABAAIAAABIgBADIAAADgAgDAVIAAgBIAAgCIAAgCIAAgBIACAAIAAABIAAADIgBADgAgFATIAAgEIACAAIAAABIAAADIAAACgAgHARIAAgCIACAAIAAAEgAgIAPIABAAIAAABgAADgPIABAAIABgBIAAAAIAAACIgBAAgAABgQIgBAAIAAAAIAAgDIADgDIABACIgEAEIACgBIACgCIABADIgBAAIgCABIAAAAgAgBgUIgBAAIAAgBIAEgCIABABIAAAAIgDADgAgEgWIAEgCIAAgBIABABIgBACIgCABgAgGgYIABgBIAEgBIABAAIAAABIgEADg");
	this.shape_124.setTransform(123.625,493.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#BB833E").s().p("AgCABIACgBIACgBIgCABIgCAAIgBAAIABAAQAFgCAAACQABAAgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAIgCABg");
	this.shape_125.setTransform(124.0036,490.6179);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F5CA54").s().p("AgGAGIgDgBQgCgBgBgDIAAgBIABgCIABgBIAAgBIADgBIAAAAIABAAQgEABAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIACABQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgDAHgEIABABIACAAIABAAIAEgBQABAAAAAAQABABABAAQAAAAABAAQAAAAAAABIAAAAIABAAIgBABIgCACIgFABIgBAAIgBAAIADgBQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAgBgGACIgBAAIAAAAIgBAAIgBAAIgDABIgCACIAAABIAAAAIAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAIABAAIgBAAIgBABIgBgBg");
	this.shape_126.setTransform(123.525,490.8625);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FAEAB4").s().p("AAJACQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgEABIgBAAIgBAAIgBgBIgDAAIgCgBIgBABIAAAAIgBAAIAAAAIABAAIAAgBIABAAIABAAIABAAIAFABIAAAAIAEAAIABAAIAEAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAAg");
	this.shape_127.setTransform(123.8,490.175);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6A4322").s().p("AABACQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIAAgBIAAAAIABABIABAAIgBAAIgCACgAABACIgBAAIAAgCIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIACAAIACABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAAg");
	this.shape_128.setTransform(125.05,490.375);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#AE7438").s().p("AgMAKIACgEIABgDIABAAIgCAFIgBACgAgCAGIAAgDIAAAAIgBABIAAgDIAAgBIABABIABADIABgDIAAgDIAAAAIAAAEIAAAEIgCADIAAgDgAAEADIAAgEIgBABIgBADIAAgDIABgCIAAgCIAAABIgBAAIAAAAQAAAAAAgBQAAAAgBAAQAAgBAAgBQgBAAAAgBIADACIAAABIABABIAAgBIAAgBIAAgCIAAAAIAAgCIABABIACADIAAADIAAACIACABIACABIABgCIAAgFIABADIAAACIAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAIgCAAIgBgBIgBgCIgBAAIAAAAIAAAEIgBACIAAAAIgBgDg");
	this.shape_129.setTransform(126.1,490.25);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#1E2121").s().p("AgDAjIAAgBIAAABgAADAgIACgBIAAAAIAAABIAAAAIgCAAgAgCAeIAAgDIABACIgBACIAAABgAAHAbIAAgBIAAACQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgCgAAKAVIgBgCIgBgGIAAgCIACgDIACgEIAAAAIABABIABACIABACIABAEIABAFIgCgFIgCgFIAAABIgBABIAAABIABAFIgBgDIgBgDIAAABIgBABIACAFIgCgDIAAABIAAACIACADIgCgCIAAgBIAAACIAAACIACAFIgCgFgAgBAPIgBgCIACAAIADgEIABgBIAAABIABABIgDADIgCABIgBABIAAAAgAgKAOIgBgCIAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIADgCIAAACIgBAAIgDACIgCACIgBgBgAgOAMIAAgBIgBAAIAAAAIAAgBIACAAIABgBIABAAIAAACIAAAAIgCABgAARAIIAAgBIAAgEIACAFIACADgAAIgBIAAgDIgCAEIgBAAIgBAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAgBIAAAAIABgDIAAABIABAAIACABIAAABIAAACIAAACIAAAAQgBACgCADIABgFgAAOAAIgBgEIgBgCIgBAAIAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIADAAIABAAIAAABIABAEIAAADIAAABIAAABIAAABIgDgDgAAQgKIgBAAIgCgDIgDgFIgCgCIgBgBIABACIABABIABAEIgBgCIgDgDIgBgCIACAFIABACIABACIgDgEIgCgCIAAgBIgCgCIADgBIABgBIABgBIABACIADADIACADIAAABIABABIACADIABABgAgLgLIgBAAIgBABIgBAAIABgBIACgBIABACIgBgBgAgMgPQgEACgCgBIAJgDIgEADIgEACIAFgDgAgSgRIACgCIAAABIAAAAIABAAIgCABIgDABIACgBgAgKgaIABgCIAAAAIgBADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIADgCgAgOgeQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIgBAAIABAAIABABIAAACQAAAEgCACIABgGg");
	this.shape_130.setTransform(126.175,491.25);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8D4A2B").s().p("AAbAtIAAAAIAAgCIAAAAIACACIgBgFIgBgFIABACIABACIAAgDIAAgCIgBgBIAAgCIAAABIABACIAAAAIAAACIABAGIACABIAAgFIgBgHIgDgKIABADIACAHIABAJQAAABAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgBQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAgNgTQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIgCgBIgCgBIgEgBIgBABIgDAAIgBAAIgFgCIAAAAIABgBQAAABABAAQAAAAABAAQABAAAAgBQABAAAAAAIABgDIACAAIADgBIACgBIAAAAIABgBIADgDQACgCAAgCIAAgBIAAgBIAAgDIAAgCIABACIABAEIAAAAIAAABIAAABIgBACIgBABIAAABIgBACIgCABIgCACIACgBIADAAIgJADQACABAEgCIgFADIAEgBIAEgEIAAADIAAABIADABIAAABIAAABIAAAAIAAABIAAAAIgBAAIgBAAIAAAAIABgDIgBAAIAAACIgBgBIgCgBIAAAAIgBAAIgBABIgBABIABAAIABgBIABAAIABABIACABIAAABQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAgBABgAgLgWIAAAAgAgSglQACgCAAgEIAAgBIAAAEIAAAAIAAAEQgCACgHAEQAFgDACgEgAgZglIgBgCIAAgBIAAAAIABADIAAADIgBACIABgFg");
	this.shape_131.setTransform(126.4833,492.525);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#6B4121").s().p("AgDAHIAAgBIABgBIACgDIADgFIABgDQABADgCACIgEAFQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIAAABg");
	this.shape_132.setTransform(123.3313,489.175);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D7AE74").s().p("AAPAdIgBAAIAAgBIABABIACABgAAPAZIgBAAIAAAAIAAgCIABABIACACIgCgBgAAIARIAAgCIAAgCIgDADQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAIAAgBIAAAAIAAgDIACgHIACgCIACgCIABABIAAAAIgBACIgCACIAAACIABgBIABgBIAAACIgCADIACgCIABgCIAAABIABAEIABgEIAAgDIAAgBIAAAAIgCgCIAAgBIgBgBIAAgBIAAABIgCADIgBAAIgDABIAAAAIAAgCIACgEIACgCIABAAIAAAAIAAABIgDAEIADgDIABgBIAAgBIACgBIAAABIgBADIABgCIAAABIAAACIABACIABgCIABgDIAAgFIACAAIAAgBIABAAIAAgBIAAACIgBACIAAADIABgCIABgCIABAEIAAADIABgBIAAgEIABgBIAAABIABABIgBADIAAAAQAAAAAAABQgBABAAAAQAAABgBAAQAAAAAAAAIABAAIAAADIgBAGIgBACIgEAEIgCAAIgBgBgAAMAMIgCAFQADgCACgEIABgFIAAgDQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgBgBQAAAEgDABIABAAIABgBIABgBIABgBIAAABIgBACIgCAEIACgCIAAAFgAgDAOIAAgBIACgDIACgEIAAAAIgBAFIAAADIgBAAgAAFgFIAAAAIAAgBIABABQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIgCgDIgCgBIACAAIACAEIAAABIgBACIgBABIgBgBgAgQgHIgBAAIgBgCIACgDIAEgEIABgDIAAgDIAAABIABACIgBAEIgEAGIAAAAIgBACgAANgJIgBgBIgGgDIgBAAIgBgBIgDgBIABgCIABAAIAEACIADABIABABIAAAAIAAABQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAgAACgMIgCAAIgCAAIACgBIACAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIgCADIAAgDgAgKgMIAAgBQAHgDACgCIAAgEIACgDIABgDIAAABIAAADIgBADIgCACQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIABgCIAAABQAAADgCACIgCACIgBABIAAABIgBAAIAAgBIAAAAIgCABIgCABgAAPgOIgDgCIgEgBIABAAIgBAAIgDgBIgCAAIABgCIAAgBIACABIACABIADABIADACIACACIAAABgAgLgOIAEgDIABgBIACgCIABgDIABgBIAAgCIgBgCIAAgBIABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBAGQgCADgFADIgBgBgAANgSIgEgCIAAgBIgBABIgBgBIgDAAIAAgBIABAAIABAAIAEABIAFACIADAAIAAgBIABgBIAAAAIAAACIgBABIgBABIgEgBg");
	this.shape_133.setTransform(124.975,490.775);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#A87038").s().p("AgfA2IABAAIAFgBIAFgCIgCgFIgEABIACABIABAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAIABAAIgBABIgDABIgCABIgBABIAAgDIAAAAIACgCIgBgBIgCAAIgBgBIACAAIACAAIAAAAIgBAAIgBgBIAAAAIgEgBIAAgBIgBgBIABgBIABAAIABgBIAEgBIgEABIAAACIAEABIADABIgBgCIgBgCIAAgBIAAgBIgBgDIAAABIAAgBIAAgBIgBgCIABgDIAAABIAAACIACAJIABABIAAABIAAAAIABABIACAAIABAAIAAgIIABABIAAAAIACAEIgBAFIAAAEIAAABIAAAAIgGACIgEAAgAgjAvIgBAAIAAgBIgBAAIAAgBIABAAIAAABIACABIgBAAgAgbAlIABgCIAAAEIAAABIgBAAIAAgDgAgaAnIAAAAIABgBIABABIgCAAgAgTAkIgDgCIAAAAIgHgGIgCgCIgBgCIgBgBIAAAAIgDgEIAAgBIgBACIgCABIgBgIIgBgDIgBgDQAAgCACgEIABgCIABAAIAAABIgCAEIAAAAIgBADIABgCIAAADIABAHIABADIAAgBIABgDIABgCIAAAAIACAEIgBACIAAAAIACADIAFAHQAGAHAEABgAgUASIAAgCIgBgEIAAgBIABAAIABABIgBgCIAAgBIgBgBIAAgBIABAAIABABIABAAIgBgBIAAgEIAAgDIABgBIAAgBIABABQgBABABAFIAAACIAAAEIAAABIAAACIgBACIgBACIgBABgAgdASIgBgDIAAgDIAAACIABgDIAAgCIABgBIABAAIgBgBIgBgDIABgDIAAAAIABAEIAAADIABAFIAAABIgBADIgCACgAAgARIAAAAIgCgCIgDgEQAAAAgBgBQAAgBAAAAQgBgBAAAAQgBAAAAAAIAAgCIAAAAIACACIADADQACACACAEgAA3AQIgBgBIgCgGIgCgGIgBgDIABAAIABABIABACQACADACAJIAAABIAAAAgAAmAPIgDgFIgDgFIAAgCIAEAFIADAIgAAXAPIgBgCIgEgCIgBgBQADAAACACIADADIgCAAgAAFAOIgBgCQAAABABAAQAAAAABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAgBgBIgBgEIAAgBIADAEIgBAAQgBgCABACIABADIgBACIgCACIAAAAIgCAAgAArAMIgBgGIgBgEIAAgBIAAAAIACABIABABQABADgBAIgAgVALIAAgBIAAACgAgLgOIgBgEIAAgBIABACIAAADIAAAFIAAgFgAgGgQIgBgEIgBgBIACgCIgCgBIgBgDIgBgBIAAgEIAAgDIgDgEIgGgDIgEgBIgCgCIgBgCQAAgEADgBIAEgBIgEABQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIAGAAIAFABIgBAAIgBABIgBAAIAFABIADABIADABIABABIgCAAIgDAAIgBAAIAFABIACACIAAAAIABACIAAACIAAAAIgBgBIgDAAIgCABIAEABIACABIABADIAAACIAAAAIgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIADACIACABIABACQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBABIgCgBIgDgCIAEAEQgBADgDABgAgegYIAAgBIAAAAIgDgCIABgBIABgBIACABIAAgBIgCgBIACABIABADQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgBgBgAgigXIgCgCIABAAIACABIABAAIAAgBIABAAIgBACIgCAAgAgkgZIAAAAIgCABIACgBgAgYgZIAAAAIgDgBIgCgEIgCAAIABgBIAEACIADABIABABIAAABIAAAAIAAABgAgzgbIAAAAIAEgGIAAgCIADgEIAAgEIAAgBIABABIABACIgCAFIABgBIADgBIgCACIgCABIgDADIAAAAIgCACIAAABIAAAAIAAABIgBAAIgBABIAAABIgBABgAg3gaIAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIAGgGQABgCAAgDIAAADIgBADIgEAEIgCADIAAACgAgVgeIgDgBIAAAAIgCgBIgCgBIgEgCIAEABIAFABIADABIAAABIAAABgAgYgkIgDgBIAAgBIAFACIAEABIgDABgAgUglIgGgCIgDgBIAAgBIAFABIADABIACABIACgBIAAABIgBABIgCAAgAgngqIABgCIAAACIgBABIgBADIABgEgAglgpIACgDIACgCIgCADIgCADg");
	this.shape_134.setTransform(128.6,492.575);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CEA66F").s().p("AguA1IgFgBIAAgBIgBAAIABAAIACgBIACAAIABAAIADACIABABIgEAAgAgqAzIgCAAIgBAAIgCgCIACABIADAAIAAAAIABAAIABAAIAAABgAglAwIAAgBIAAgBIgBAAIgCgJIAAgDIADAEIAAABIgBACIAAADIABgBIAAgBIAAAAIACABIAAACIAAADIgBABgAgoAvIgEAAIAAgCIAEgCIABABIAAABIABABIABADIgDgCgAgoArIAAgBIAAgBIgDgBIgBgBIgBgBIACAAIABAAIAAABIACABIABADgAgZAoIgDgBIgHgJIgCgEIACADIAEAEIADACIAAgCIgBgDIADAEIACAEQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAABgBIAAgCIAAgCIAAACIAAADIAAACIgBAAIgCgBgAgPAlQgDAAgDgCIgBgBIAAAAIgBgBIgBgCIgEgFIgBgCIgBgBIABgBIABADIAEAEIAEAEIADACIgCgCIAAgBIgCgDIgBgDIACABIACACIAAgBIADACIgFgHIgCgFIABABIACADQAGAIAAgBIAAgCIgBgEIgCgDIACAAIABABIACACIgCAAIAAACIABACIACABIAAAEIAAAAIAAABIgCAAIAAAAIgBgBIgCgCIABAEIAAACIAAABIgBAAgAgIAaIgCgBIAAgBIADABQABAAgCgLIACAFIAAACQAAAFAAAAIgBAAIgBAAgAgoAZIgCgCIgDgDIgCgFIgBgBIAAgEIABgEIAAgBIABgBIACABIACgBIAAACIgBABIgBACIgCADIACgCIABgBIABADIgCADIAAADIABgDIABgBIAAAAIAAABIABADIABADIAAACIACgDIABgDIAAAEIgBABIAAACIgBABIAAAAgAghAVIgCgCIAAgBIgCgBIAAgBIAAABIgBgGIAAgCIgBgFIACAAIAAABIADAAIAAACIAAABIgBACIgBADIABgCIABgBIABACIABACIAAAAIAAACIABADIAAADIAAABIgCgCgAgyASIgBgGIAAgDIAAgBIACgBIgBADIAAADIABgBIAAAEIAAAEIAAAAIAAABIgBgDgAgDAUIgBAAIgBAAIAAAAIAAgDIACABIACgCIABgDIgBgDQgBgBABABIABABIAAABIAAAEQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgCABIAAAAgAAXAPIgCgHIADAGIADAFIgEgEgAAOAPIgBgEQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIADAEgAALATIgEgFIAEADIABACgAAoAOQgCgDABgEIACAFIACAGIgDgEgAAxARIAAgBIAAABIACAAgAAfAMIgBgHIABAFIABAGgAACANQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIgBAAIAAgBIgCgDIAAAAIACgBIABAAIgBgDIgBgDIADAFIABABIAAADIAAABIgBACIgBAAIAAAAIgBABgAAxAMIgBAAIgBAAIgBgCIACABIABAAIABABIgBAAgAgJAJIgBgBIACAAQAFgCAAgDIgBgCIgBgBIAAAAIAAgCIACADIABAAIABAAIABgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBgDIgBgCIAAgBIACADIABAAIABAAIABgBQABgBAAAAQAAAAAAAAQABAAAAgBQAAAAgBAAIgBgEIAAgBIABABIABABIAAADQABAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBACIgBAAIgBAAIAAAEQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBgBIAAADIgCACIgDACIgBAAIgBAAgAAMAJIgCgBIgBgBIACAAIACABIgBgBIABAAIgEgFIAAAAIABAAIACgBIgCgBIgBgDIAFAFIAAABIAIABIgDgCIAAgBIgBgBIgCgBIAAAAIACgBIABABIABABIAAAAIABACIABABIAAgDIAAgBIACABIABABIACABIADABIAAgDIAAAEIAAABIgDgBIgEgCIABABIgBACIAAABIgCAAIgCgBIgFgCQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABIAAAAIgCABgAgxACIABAAIAAABIgDAEIACgFgAAyAGIgFgBIgFgDIAEABIAEABIAFADgAAlADIgDgBIgDgCIgBAAIAHACIAAgFIgBgFIAAAAIABACIABACIABABIAAAAIABAEIAAABIgBABIgBABgAAYgDQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADABIgBABIAAACgAAqgFIAAgBIAAAAIACABIgBABgAgRgIQAAAAABAAQAAAAABgBQAAAAABgBQAAAAABgBQACgDAAgDQABgEgCgHIgCgHQgBgBACABIABABIACAGIACAJIgBAGIgEAEQgBACgDABgAAngMIABAAIAAABIACAAIgBACIgBAAgAAFgMIgBgBIACAAIADgBIABgCIgBgBIAAgBIAAgBQAAAAAAAAQABABAAAAQAAABABAAQAAABAAABIgBACIgDABgAAhgUIACAAIABAAIABgBIAAACIgBABIgBAAgAAHgUIgBgBIADAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBIgDgEIgDgDIgBgBIAAAAIAEACQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAAABIABAAQABABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIgCABIgCgBIACADIACADQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIAAABIgEgBgAgOgWIgDgBIAEABIABACIgCgCgAAYgdIADAAIACABIABACIAAACIgGgFgAgPgdIgEgBIACAAIADAAIABADIgCgCgAATghIADgDQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgCgCgAANgiIgBAAIAAAAIAAgBIABAAIADgCIADgCIACgBIABABIAAACIgFADIgDAAgAgOgiIgCgBIgFgBIACAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAgAAKgjIAAgEIgBgEIgCgBIACAAIACADIABADIAAACIgBABIAAAAIgBAAgAgTgmIgDgBIgFgBIADAAIAEAAIAEADgAAEgmIgCgGQgBgBgDgCIgCgDIADACIAEAEIABACIAAABIAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAgAgCgoIgBgEQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgCAAIAAAAIAFAEIACACIgFgDIgCAAIgFAAQgGAAgBgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAEgBIAIABQAEABADADIABABIAAABIABABIABAEgAgdgrIgGABIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgCIACAAIAAADIAAABIgCgBIgCAAIAAABIACAAIABABIABAAIgEABIgCABIgBABIAEgBIAFAAIACABIgFgBg");
	this.shape_135.setTransform(129.7,492.225);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#202020").s().p("AAPA+QgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgCgBIgBgBIgGgIIAAgCIgCgEIgBgCIAAAEIABADIAAADIACAAIAAAAIABACIgBACIgDgCIAAADIAAABIAAAAIgDgJIgBgFIgBAAIgBABIAAABIAAgBIgBgDIgBgBQADADACAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQABABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgKIAAADIALALIAGAFIABAAIAFAFIAAAAIAGADQADABACgCIACgDIACACQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBABQgDACgEgBIgBAAQgEADgEgBIgBAAIgDABIgBAAgAgCAqIgBACIABABIAJAJIAIAHIADAAIAAgBIgSgTIgBAAIgBgBgAgBAyQAHAKACABQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIgLgMgAAAAlIAAABIAAACQARATAEABQADAAACgBIABgBIAAAAQgHgFgUgSgAgGAzIACAEIABAAIgCgGQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAAFgAgIA5IgCgFIgBADIgDgFIgBgCIgBgBIAEACIABAAIAEAHIAAAFIgBgEgAgRA4IgEgEIABgCIgBgCIADACIADAJIABAAIgBABIAAAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBgAAuA2IABgJIAAgEIgBgEIAAgMIgBgIIgCgEIABAAIABADIABAKIABALIAAABIAAgEIABgGIAAgIIgBgHIgBgGIAAgBIABADIABABIABAAIgCAAIAAgBIAAABIACAKIAAAGIgBAMIABAFIABgFIABgKIACgIIABgGIgCgIIgCgFIgDgBIgFAAIgEgEIAAgBIAAABIAFADIAFABIADAAIACAAIABAAIgBAAIgDgCIgEgKQgFgKgDgEQgIgLgIgFIAFADIALAMIAHAMIAEAIIABADIACABIACACIABABIgBAAIgCAAQACAGAAAIIAAAHIgCAHIgCANIgBAKIgBACIAAADIgBABQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBgAAoAuIAAgIIgBgDIgBgBIAAgHIgCgJIgCgFQAAABABAAQAAAAABABQAAAAAAABQAAABABAAIABAIQAAAHABABIABACIABADIAAgKIAAgLIgDgGQgCgFAAgDIgBgEIgBAAIgDgCIgDgEIABABIADACIADABIABABIABACQgBAEACADIADAEIABABIABAUQABAUgDAAQgBAAAAgGgAggAyIACABQACgBAAgHIgBgBIgDgDIgCgFIgBgDIAAAAIAFAEIACACIAEAHIAAABIAAACIACADIgGgGQAAAHgCABIgCgCgAAjAsIAAgGIgCgDIgDgHIgBgIIAAgEIABAFIABAGIABAGIADAFIgBgOIgCgLIgCgCIgCgDIgBgFIgBgDIAAgBIgBAAIgDgCIgBgBIAEACIADABIAAAAIAAAGIACAEIAEAEIACAVIAAAIIAAAGQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBgAgxAuIAEABIABAAIAAABgAg1AtIgBgBIABAAIAAABIACABIgCgBgAgZAnQgFgEAAgDIAAAAIADABIADABIAAgCIAAABIAAABIACAEIAFAGQgDAAgFgFgAgQAoIgDgFIgCgEIgBgDIgBAAQADACADAAIAAAAIABACIACAGIgBAEgAgNAgQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAAAAAIAAgCIgBgEIACACIgBgBIADAFIABAEIABABIABAFIgDgHgAAbAdIgDgIIgCgEIgCgCIAAgBIABAAQACACACAFIABAEIABADQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIgBgFIgCgHIgEgFIgDgHIAAgCIgCAAIgDgCIgBgBIAFACIACABIAAAAIAAABIACAHIAEAEIABABIAAAAQAAAIACADIACAHIAAAEIAAAAQgBAAgCgGgAgIAgIgBgDIgCgDIgBgBIAAAAIAAgEIAAgCIAAgBIACABIACAAQAAAAAAgFIABABIAAgBIABgBIABAAIAAAAIAAAEQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIAAAAIgBAAIAAABIABAGIABAIIAAgCIAAAAIgBgBIAAgBIAAgBIgCgFIgCAAIAAgBIABAFIACAKgAgqAbIAAAAIgCgCIAAgBIgFgFIgBgDIABgBIAAAAIADAEIAAABIABABIABADIAIAJgAgmAXIgEgFIABAAIAAAAIABAAIABABIACAEIAHAJIgIgJgAAZAfIgDgCIgCgFIgCgEIAAgCIACAGIACAEIAAgCIgBgGIgCgFQgHgFgCgEIgCgDIAAgBIABAAIABAAIABAAIAAABIAAABIABAEIAFAEIACABIAAABIADAIIABAEIABADIABACIAAAAgAgBAUIgEgHIACgBIADAGIAAAIIAAAEIgBgKgAAPAbIgBgCIAAgBIgBgDIAAAAIgCgEIgBgDIgHgHIAAgBIAAAAIABAAIAAABIABAAIAEAFIABAAIACAAIAEADIACADIgDgDIgEgCIgBAAIAAAAIACAEIACAFIACADIABABIAAABIgBAAIgBAAgAgOAaIACAAIAAgBIgBABIgBAAgAgjAQIgBgDIgBgCIAAABIACACIACACIABAAIAAADIABADIgEgGgAgcAQIgDgDQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgCIAAgCIAFADIABAAIABgBIABgDIAAgEIABABIADABIAAAAIAAgBIABgBIAAgCIAAAAIAAgBIACAAIAAgBIAAgBIAAABIACgCIABgCIgCgBIgBgCIAAgBIABABIABACIADAAIACgCIACgDIgDAAIgBgCIACABIACAAIAAAAQADgEAAgBIgDgBIgBgCIAAgBIABABIABABIACAAIABgCQABgFgBgBIgEAAIgBgBIAAgBIABAAIABABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIABgCIgBgCIgBgBIgBgCIgCABIgDgCIAAgBIABABIACABQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIgBgBIgBgCIAAgCIgBABIgCAAIgCgBIgBgBIACAAIABABQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBIgBgCIgCgCIgFgEIACABIAEADIADAEIACAAIABAAIgBgEIgBgCIACACIAAAEIADABIACABIAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBIABACIgBABIADACIADABIABAAIABgCIAAACIAAABIAAAAIABAAIgBABIgBgBIgHgCIgDgCIABACIADADIADADIABABIgEgCIgFgDIABAAIABABIgBABIAAABIAEAGIAAABIgBABIgCgCIgBgBIABADIAAABIAAABIABACIABACIAAABIgBACIABABIAAAAIABABIACAAIADgBIABgCQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIACAAIAAgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgCgDIgCgDIACABIACgBQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAgBgBIgBAAIAAgBIABAAIADAAIAFgDIAAAAIAAABIgDADIACACIABABIAFABIgDAAIAGAFIACACIABABIACABIgCAAIAFAGIABABIABABIgBAAIABADIgHgIIgGgGIAGAJIABACQgFgIgEgDIgHgHIgCgBIgBACIAAAEIAEAEIAGAHIAHAJIgFgGIgDgCQgIgKgCABIAAAAIgBACIgBABIgBAAIACAEIAFADIACABIACABIgCgBIgCAAIADAEIACADIADAAIADACIgDgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAEAFIAAAAIgDgCIgHgIIgGgEIgBgBIgBABIAAABIgDABIACACIAGAHIABAAIACACIgFgEIgEgEIgBABIABACIAFAHIgFgGIAAAAIgCgCIgBAAIgBABIgBABIAFAGIAEAEIgBAAIgIgGIACAEIABACIAAABIAAgBIgBAAIgDgFIAAAAIgBACIgCAAIgBABIAFAGIAAABIgCgEIgEgCIAAAAIAAABIADAEIgBAAIgDgEIAAABIgBABIgBAAIgBABIACACIAAADIgBgDIgCgCIgBABIACAIIgCgFIgCgDIgCgEIgBAAIgBAAIAAADIACAFIACAEIgDgDIgBgCIgDgCIgCgBIgBAAIAFALIgDgDIgCgEIAAAAIgBACIgBABIAAAAIACAFIgDgEIgCgBQAAgBgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAACIABABIACAEIgDgCgAgMgCIgCAAIAAABIACACIABABIACAAIADgCIACgBIAAgDIABABQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgEIABAAIABAAIABgCQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBAAIAAgDIgBgBIgBgBIgCgCIAAAAIgBABIAAACIAAABIABACIAAACIAAACIgDgDIgBAAIAAABIgBABIgBACIABABIABABIgBADIAAABIgCgEIgCACIgCACIABABIABABIgBAAIgCABgAAigPIABABIAAABgAgRgtIgHgEIgEgDIAAAAQAJAEACACIADAFgAAJgwIAAABIABACgAAWgvIgBgBIgDABIgFgCIgCgCQgHgFgLgDIgPgBQgEgBgCACIgCABIADgCIAHgBQANABAKAEIAJAFIAEADIADAAIACAAIABAAQABAAAAABQAAAAAAAAQgBAAAAABQAAAAgBABg");
	this.shape_136.setTransform(129.9,492.93);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#8C492B").s().p("AgUA3IgBgCIAAAAIAAgFIABgEIADADIAAABQAAAHgBABIgCgBgAghA3IABAAIADgCIACgBIABgBIgBAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIgBgBIgBAAIADgCIACAFIgFACIgFABgAghA0IgBAAIgDgBIgBAAIgBAAIgDgBIAGABIADAAIgBgBIgCgCIABABIAAAAIABAAIACABIACAAIgDACIAAABIAAgBgAgbAvIABgBIAAgDIAAgCIgBgBIAAAAIAAgDIAAgBIADADIAAAHIgBABIgBAAIgBAAgAgfApIgEgCIgBgCIAAgBIAAgBIACABIgBAAIAAABIABABIADABIABABIAAABIABABgAAzAmQgBgBgBgHIgBgIQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIgCgDQABgIgBgCIgBgCIAAgBIABABIABABIADAJQACAGACADIACAHIgBALgAgeAmIgGgHIgBgHIAEAFIAAABIAAACIADAEIAAACIAAAAgAArAgIgBgGIgBgFQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIAAAAIgCgIIgFgFIAAgBIADAAIACADIABACIACAFIADAEIACADIABAFIABAGIgBAGIgBgGgAgTAlQgFgBgFgGIgGgHIgBgDIAAgBIABgBIACADIgBAAIADAEIAFAGQAEAEAEACIAAAAgAgPAkIgCgEIgCgEIABADIAAACIgDgCIgFgEIgBgDIgBgBIAAgBIAAgCIABAAIAAAAIADAFQADAFABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIADAEIABABIABAAIAAgBIABABIABAAIAAAAIAAACIgBACIAAABIgCgBgAgKAfIgFgEIgDgEIgBgDIAAAAIgBgBIABgBIAAABIACADIADAFIAFAEIAAAAIABACIgCgCgAAlAeIgBgEQgCgFgBgCIgBAAIgCgBIABAAQgBgDgDgCIgCgEIgCgBIAAAAIAAgBIACgBIAEAHIAGAHIACAGIABAHIgBgDgAA9AZIgCgKIACAAIgBAAIgCgBIgBgDIgBAAIAAgBIABAAIACAAIABAAIgBgBIgCAAIgCgCIAAgBIACABIAEACQABABAAAJIAAAJIgBADgAAgAdIgDgGIgCgDIgDgDIgEgEQgCgBgCAAIAAgBIABgCIABACIAGAEIAGAGIACADIABAFIAAACgAgOAeIgBgBIABACgAASAUIgCgBIgCAAIgDgDIgCgCIAAAAIAAgEIAAgBIAAAAIgCgFIAAgBIAAAAIADADIAEAEIABAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIADABQgBABAFAEQAEADABAEIABABIAAACIABADIgHgKgAgIAaIgBgDIgBgCIAEAHIAAAAIgCgCgAgJAUIgCgDIgBgBIgBAAIACgBIABgCQgBADADAEIACADIACACIABACIAAAAQgBAAgFgHgAgCAZIgBgCIAAgCIACAAIgCgCIgBgCIgBgDIgEgFIABABIADACIACACIABADIABACIABABIAAgDIAAgFIAAAAQACALgBAAIgBgBIAAABIAAABIAAACIgCgBgAACATIAAgCIgCgIIABgBIACACIACADIAAgDIgDgCIABgBIACAAIABgBIABADQAAABAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAIABABIAAADIAAAAIAAABIAAABIAAAAIgBgBgAgnASIAAgEIgBgEIgBABIAAgDIABgDIgCABIAAABIgBABIABgCIAAgBIAEgEIAAgBIACAAIAAAAIAAABIAAABIgBABIAAABIgBAEIAAAEIABABIAAABIgBACIgBACgAA2ARQgBgJgCgDIgCgDIgBgBIABgBIAFALIABAGIgBAAgAgjANIACgDIgBgDIgBABIgBACIABgDIABgCIABgBIAAgCIAEgCIAAAAIAAAAIACACIgCAAIgBADIABAEIABAAIgBABIgBABIgBABIgBADIAAgCIgBAAIAAgBIAAAAIgBABIgBADIAAgDgAgOAPIgEgDIAAgEIABgBIABAAIABADIADAEIAAAAIABAAIgBABIgCAAgAgXAMIgBgCIgBgCIgBABIgBACIABgDIABgCIAAgBIAAgCIACgCIAEgCIgBgBIgBgBIABgGIAAgDIABAAIACgDIAAACIAAAHIgCADIABgBIABgCIAAADIAAACIABgCQACgDAAgEIgBgGIAAgBIABAAIAAAAIAAABIABAEIABAFIAAgFIAAgDIAAABIACAGIABADQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAAABIgBABIAAAAIgCgCIgBgBIAAgBIgBgBIgCAEIgCADIgBAAIAAAAIgBAAIAAAAIgBABIAAADIAAAEIABABIgCgBIgCgBIAAABIAAABIAAABIABABIABABIABABIgBgBIgCAAIAAAAIAAACgAAUAHIgCAAIAAAAIgBgCIgBgDIgCgDIAIAGIABABIgDgBIgCAAIABABIADABgAAIACIABgBIABAAIACgBIAAAAIACACIABADIgCAAIgCABIAAAAgAAAAGIgCgDIAAgBIACACQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAAAgBIABgEIACACIABABQAAADgGACIAAAAgAA/AFIgGgDIgDgBIAAgBIAAgDIgCgEIABABIABgBIgCgBIgBAAIAAgBIAAgBIgBgBIABAAIABgCIgCAAIAAgBIgCgBIgBgBIgDgEIABAAIABgBIAAgCIgBABIgBAAIgBgBIgBgBIgDgCIAAgCIgBgCIgCgBIgEgBIgCgBQABAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIAAgBIgBAAIAAgCIgBgBIgCABIgCACIgDACIgCAAIAAgBIAAgCIgBgCIAAgBIgCgDIgBAAIABABIABAEIAAAEIgCgBIgDgCIABgBIgBgCIAAAAIAAgBIgCgCIgEgEIgDgCIACADQAEACAAABIACAGIgDgBIgCgBIAAgEIgCgBIAAgBIgBgBQgDgDgDgBIgIgBIgFABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQACAEAGAAIAEAAIADAAIADADIABACQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgBgBIAAAAIAAABIABABIACAAIACgBIAAACIABACIABABQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIgCgBIgBgBIAAABIADACIADgBIABACIABABIAAACIAAACQgBABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCgBIgBAAIAAABIACABIAEAAQAAABAAAFIgBACIgCAAIgCgBIgBgBIAAABIACACIADABQAAABgDAEIgBAAIgCAAIgCgBIABACIADAAIgCADIgCACIgBAAIgBgCIgBgBIAAABIABACIACABIgBABIgCACIAAgBIgBgBIgCgDIgCgEIAAgBQADgBACgCIADgEIAAgGIAAgJIgCgGIgEgFQgCgCgJgEIgBgBIAAgBIAAgDIAAAAIAAgBIABgBQADgCAEABIANABQANADAHAFIACACIAEACIAEgBIABABIgBACIgBABIACABIAAABQAIAFAIALQADAEAEAKIAFAJIACACIABAAIgBABgAAYABIAAgBIgCgDQAAgBAFAEIABAAIAAAAIADACIgBAAIgGgBgAA+AAIgBgCIACADgAAkAAIgBAAIgBgBIAAgBIABAAIACACIAAAAIAAgDIABgBIgCgCIgDAAIgDgDIgDgEIACAAIADABIgDgBIgCgBIgEgDIgDgEIABAAIACgBIABgCQADACADAFIAGAHIACAEIAEADQAAABAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQACgCgIgMQgFgHgIgHIABgCIABABIAIAHQAEAEAEAHIABABIABADIAAAAIABAFIAAAFIgHgCIAAABIAAACIgBAAIgCgBgAAeAAIgBgBIAAgBIgBgBIgBgBIgEgEIgEgFIAAgBIAIAHIAEAEIABACIAAACIgBAAIgBgBgAANgFIACgBIABgBIABAAIABACIAAAAIABADIACACIgCAAIgBAAIAAAAIgFgFgAgZgEIAAgEIACgCQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAACIgBAGQgCADgDABIACgEgAAHAAIgBAAIAAgBQADABAAgDQABgCgDgFIABAAIAAABIABACIABADQABABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABIgBABIgBAAIAAAAgAgqgBIADgFIACgEIADgBIABgBIACgDIABAAIAAABIAAABIAAAAIACACIABAAIAAACIgBACIgBAFIAAgFIgBAAIgBABIgCADIACgDIAAgCIgBAAIgBABIAAgBIACgDIABgBIAAgBIAAAAIgDACIgCABIgCAIIAAAAIABgDIABgFIgBAAIgDAEIgCADIAAACgAALgHQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgCgCgEIACACIAAABIACAEQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgCABIgBAAgAg+gKIgBgCIgBgBIAAgBQABADACABIADACIACAAIABAAIgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIABABIAAAAIABACIABABIAAAAIABAAIAAABIgCABQgDAAgDgDgAg6gNIgBAAIABgBIACgDIADgBIACAAIgBABIgBAAIgDABIgBABIAAACIgBAAgAgggSIAAgBIAAgBIgBAAIABgBIAAAAIADAAIABgDIAAgBIACABIAAAEIgBAEIgBgEIgBgBIgBABIAAABIgCACIgDADIADgEgAgvgOIABgBIAFgCIACgBIABgBIgBAAIABgBIAAABIAAAAIAAABIgCABIgDACIgEABgAAOgPIAAAAQAEAAAAgDIgCgEIgCgCQAAAAABAAQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgDgCQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACgBIABABIACADIADAEQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgCAAIABABIADABIgCAAIAAABIAAABIABABIgBACIgCABIgBABIgBgBgAgPgTIgCgBIgBgBIAAgDIAAgCIgCgEIACACIACAEIgBgCIgBgCIgCgFIACACIACADIABADIgBgFIgBgBIACADIABACIAAAEIAAADIgBAAgAg+gUIACgBIABAAIAAAAIgBAAIgCACgAg5gYIAAAAIABAAIABAAIgBAAIgBABgAgXgZIAAgCIgDgCIAAAAIADAAIACAAIAAACIAAACIgBABIgBgBgAASgfIAAgBQAAABABAAQABAAAAAAQABgBAAAAQABAAAAgBIAAgCIABgBQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAgAAFgqIgEgEIgCgDIgCgBIAAAAIACAAQABAAAAAAQAAAAAAAAQABAAAAABQABAAAAAAQABABABAAQAAAAABABQAAAAAAAAQAAABABAAIABAEg");
	this.shape_137.setTransform(128.75,492.4188);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#4C2B1A").s().p("AgIA6IgCgCIgDgEIACADIAAACIAAAAIgBAAIgEgJIABABIABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAgBIACACIACAFIABgDIACAFIABAEIAAABgAARA7IgIgHIgJgJIAAgBIAAgCQAHAJADADQAHAGADABIgCAAIgBAAgAAKA7QgCgBgIgKIAAgDIAMAMQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIAAAAgAgDA6IAAgBIgCgDIgEgHIABgBIAAAAIAAgBIABgBIABAAIABAFIADAJIgBAAgAAXA6QgEgBgSgTIABgCIAAgBQAIAJAFAEIAIAGIAFADIgDABIgCAAgAAfA3IgFgDIABgCIADADIAEACIgDgDIgDgDIACAAIACAAIgDgBIgDAAIgCgCIgCgCIABAAIABAAIgBgBIgDAAIgDgCIgCgCIABAAIABgBIgCAAIgCgBIgJgHIAJAJIABADIgMgLIgBgDQABAKgCAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAABQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIAAgJIgCgHIgBgDIADAKIAAAHIAAAFIgBgBIgBgGIAAgCIAAAAIgBgIIgCgGIAAgBIABAAIAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAABIAAgFIAAAAIACAHIABAKIABgEIAkAbIgCADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgCgBgAgDAxIgBgFQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAIABAGIgBAAIgBgEgAAAA0IAAAAIgBgDIAAgDIAAgEIABACIAAAEIAAACIAAABIAAABIAAAAgAAUAvIAAgCIADABIACADIAAADIgFgFgAAOAqIAAgBIAAgBIADACIACACIAAADgAgJAsIgCAAIgBgCIAAgCIAAgEIADAFIAAABIABADIgBgBgAgOAcIAAgBQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIADAHIgBgFQAEAKgBAAQgCAAgGgOgAAzApIAAgFIAAgMIACgDIAAgJQAAgJgBgBIgEgCIgCAAIAAAAIACACIgCgBIABADIABABIACAGIABAHIgBAIIAAAGIgBAEIAAgBIgBgLIgBgKIgBgDIgBAAIAAgBIABAAIgBgGIgFgKIAEAEIAFABIADABIACAEIACAIIgBAGIgCAIIgBAKIgBAFIAAAAgAgVAfIAAgBIAAgDIgBgCIAAAAIACABIAAAAIABADIACAEIAEAFIgCACQgBAAgFgJgAgEAlIgBgFIgCgKIgBgFIAAABIACAAIACAFIAAABIABABIAAACIABABIAAACIAAADIgBgCIgBgCIABAFIABAFIgCgCgAgGAmIAAgBIgCgDIgBgDIgCgEIgDgFIACABIAAABIABAAIABAAIABgBIAAABIACADIACAGIAAAEIgBABIAAAAgAAsAkIgBgDIAAgLIgBgHQgCgDgCgGIgDgIIgBgBIgBgBIgBABIgCgBIAAgEIAAgBIADAEIADACIABAAIABAEQAAADADAFIACAGIABALIAAAKIAAAAgAAjAfIABgGIgBgGIgBgFIgCgDIgDgEIgCgFIgCgCIgCgCIABgBIAAgCIADACIABAAIAAABIABADIACAFIACADIACACIABALIABAOIgCgFgAghAgIgBgBIgIgJIgBgDIABACIACACIAHAGIAAAAIAAAAIABADIAAABgAgjAYIgFgGIgDgEIABAAIADACIADAFIAJAJQgFgCgDgEgAgqAZIAAgCIACACIgBACIABACIgCgEgAAcATIgCgGIgGgHIgFgGIAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBIAAABIADACIACABIAAABIAEAHIADAFIACAHIABAFQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgBgHgAAYAYIAAgCIgCgFIgBgDIgHgGIgFgEIgCgCIAAgBIAAgCIABABIAAgBIABABIAAAAIACAAIgBAAIAAABIACADQACAEAHAFIACAFIACAGIgBACgAgZAYIgEgEQAAAAAAABQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAgDgFIgEgFIABgDIgBgCIAAAAIAAgBIABABIABABIABACIABADIAEAGIAAgDIAAgDIAAABIACADIADAEIAAAAIABABIAAABIAAABIgBAAIgBgBgAAQAXIgCgDIAAgCIAAgBQgBgEgEgDQgFgEAAgBIACgBIgBABIAHAHIACADIABAEIABAAIAAADIAAABIABACgAgTAYIgEgEIgDgFIgCgDIAAgBIACADIADACIgCgEIgBgBIAAgCQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIACABIAEAEIAAACIABADIAAABIgCgCIgBgBIABADIABADIABABgAgPAQIgCgDQgDgEAAgDIABAAIABAEIADADIgEgLIABAAIAEAFIABADIABACIgCgBIgCAAIACADIABAEgAgKAMIgCgCIAAgDIACADIgBgEIgCgFIgBgCIABgBIABABIACADIACADIAAAAIAAAFIgBADIAAAAIgBgBgAgWAHIgCgEIAAgDIAAgBIAAABIACABIgCgCIAAgCIAAgBIACADIgCgEIABgCIAAgBIABADIABADIABACIgBAFIAAACgAgUAAIAAgDIgCgFIABgBIAAgBIACAFIACAFIgBgFIgBgEIABAAIABAEIABAEIgBACIAAABIgDgCgAgcAAQgBgGABgBIABABIABgBIAAADIABAEIgBAAIgBABgAgQgGIgBgEIAEAEIAAABIAAABIAAABIgCAAIAAACIgBgFgAgJgCIgCgCIABAAIACgBIABAAIgBgBIgBgBIACgCIACgCIAAACIAAAAIgBAFQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgBAAgAApgGIgBgBIgBgFIAAAAIgBgBIgBgDIgBgBIgBgDIgBgBIgBgCIgGgJIAHAGIAHAIIAAABIAAABIABABIABAAIgBAAIABABIABAEIABAEIgBABgAAJgNIgBgCIABgBIAFAEIAEAFQgFgEAAABIABAEgAgCgIIABgDIgBgBIgBgBIAAgCIABgBIAAgBQADAFgBACQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgBgBgAAWgKIgEgEIgIgHIABgBIACABIAFAEIAIAIIgBAAIAAABgAgagKIAAgDIgBACIgBABIABgDQACgDABgEIAAAAIAAgBIAAgCIABAGQAAAEgCADIgCACIABgCgAAggKIgDgDIgCgEIgGgHQgEgFgDgCIABAAQABgBAJAKIACACIAFAGIgGgJIgHgHIgEgEIAAgEQAJAHAFAHQAIAMgCACIgBABIgCgBgAAQgKIgBgCIgGgFIgCgCIADgBIADAFIAFAEIgCABIAAAAgAgSgMIgCgDIgBgGIgBgBIgBgCIABAAIABABIABAEIADAFIAAADIAAAAIgBgBgAABgOIAAgCIAAgCIgBgCIAAgBIAAgCIABgBIABAAQACAEAAACQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAgAgigSIABgBIAAgBIgBAAIgBABIgBABIgBAAQADgBAAgFIABADQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgEADIACgEgAgRgSQADgCABgCIgEgEIADACIACABQABgBAAgBQAAgBABAAQAAgBAAAAQAAgBgBAAIAAgBIgCgCIgEgBQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIABABIABAAIAAgCIgBgDIgCgDIgDAAIgBAAIABAAIADAAIABAAIABABIgBgCIgBgDQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgBAAIABgBIACAAIACABIgBgBIgDgDIgFAAIgDAAIABgBIABgBIABAAIgCgBIgFAAIgEABIABgBIACgBIAEgBIAAAAIgBgBIgDAAIAAgBIADAAIACABIABABIAAAAIAEADIAHAEIAEAEIgCgBQgBgBAAABIADAHQABAHAAAEQgBADgCADQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAgAADgXIABgCIABgBIgCgCIgCgCIABgBIAAgBIgCgDIACABIACACIABgBIABgBIgGgGIAAgBIABgBIgBgBIAAAAIAGADIAAAAIgCABQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIACACQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIADACIACAEQgBADgEAAgAgWgcIAAgCIgBgDIgBgCIgCgDIgBgCIABABIACACIADAGIACACIABAAIABAAIgCABIgDAAgAgsghIACgCQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAIgDAAIACgBIADABIABAAIABAAIAGAEIgDgBIgEgCIgBAAIACACIAAABIgCgBIgBAAIgBACgAgVgjIAAgCIAAgDIgDgEQgCgCgEgBIgEgBIgCgCIgBgDQAAgEADgBIAFgBIACAAIgBAAIgCAAIgEABQgCACAAADIAAADIACABIAFABIAFADIADAEIABAEIgBADgAgignIgEgBIgFAAIgBAAIAAgBIABgBIACABIADAAIABAAIgBABIAEABIADACIgDgCgAAIgnIgCgDIgEgDIgCgCIAEACIAHACIACABIAAACIgDACIgCgBgAg1guIgBgCIgBgBIABAAIABADIgBAEIAAAAIABgEgAgogsIgCAAIAAAAIAAgBIADABIABAAIABAAIAAABIgBAAIgCgBgAgpguIgBAAIAAAAIABAAIABgBIAAABIAAAAg");
	this.shape_138.setTransform(129.675,493.125);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#096748").s().p("AAXCxQhJhJABhoQgBhnBJhJQAOgNANgLIAAGRQgNgLgOgNg");
	this.shape_139.setTransform(107.1,496.95);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#7F6D34").s().p("AAMAcIgBgBIgBgBIgBAAIABAAIACABIABACgAAPAaIgCgBIgDgBIAAAAIABAAIADABIACABIgBAAgAAHAYIAAgBIABgCIAAgBIAAAAIAAAAIAAAAIAAABIABAAIAAAAIAAACIgBAAIAAABIAAAAIgBAAgAAKAWIACgBIACAAIgCABIgCAAgAAPAVIABAAIAAABgAAKAVIACgCIADgBIgBABIgEACIAAAAgAAIAUIABgBIADgCIABgBIAAgCIAAABIAAABIgEAEgAgCAUQgEABgDgDIABABIAEAAIAAABIACAAIACAAIAAgEIAAAAIAAgEIABAAIgBAEIAAAEIACgBIAAgBIAAgCIABgDIgBgBIABAAIAAABIAAACIAAACIgBABIAAABIACAAIAAgDIABgDIAAgBIAAAAIAAAFIgBACIABAAIACgDIAAgDIAAgBIABABIgBADIgBADIABABIgDAAIgEAAIgBAAgAAIATIACgDIAAgDIAAgBIABABIgBADIgCAEgAgEATIABAAIACgCIAAgEIAAgBIABAAIAAACIgBADIgDACgAgPAGIAAgBQAAgFADgDQABgDAEgCIACgBIAAAAIgBAAIgDACIgBABIgCADIgCADIAAAFIAAABIAAABIAAABIABADIAAABIABABIACAEIAAAAIABABQgFgEgBgIgAgGARIAAAAIABAAIACgCIABgDIAAAAIgBAEIgDACgAgHAPIACgCIAAgBIABgBIAAABIgBABIgBABIgBABgAgIAMIADgCIAAAAIgCACIgBABgAgIAKIABAAIABgBIABABIgCAAIgBABgAgIAJIACgBIAAABIgCABgAgIAHIABAAIABgBIAAABIgBAAIgBABgAgIAGIAAgBIABgCIABAAIAAAAIgCACIAAABgAgBgNIAEgFIAAgCIAAABIAAAAIAAABIAAAAIAAAAIgBACIgBABIgBACIgBAAIAAABIgDACIADgDgAAIgQIABAAIABgBIABAAIAAAAIAAABIgBAAIgBAAIgBABgAAJgSIAAAAIACgBIABAAIgCABIgBAAIgBABgAALgXIAAABIgCACIgCABgAACgUIAAAAIAAAAIgBgBIACABIAAAAgAAFgWIAEgDIABAAIgFADgAADgYIADgBIACgCIAAABIgFACgAACgZIAEgDIABAAIgBABIgEACg");
	this.shape_140.setTransform(122.975,493.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F4CA56").s().p("AgWA5QAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIABgCIADgCIAEAAIABABIABABIAAABIAAAAIgDADIgBAAIgDAAgAgWA1IgBACIACAAIABAAIABgBIABABIAAAAIABgBIAAgBIgBgBIgBAAIgDABgAA4ArIgBgBIABgCIAAgBIAAAAIAEgCQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIgBACIgCACIgCACIgBAAIgCgBgAA8AoIABABQABAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAgBAAIgBgBIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAIABAAIACAAgAgpAfIgEgCQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQABAAAAAAQABAAABABQAEABABABIAAABIAAABIAAACIAAABIgBAAIgBAAIgCAAgAgsAaIABABIACABIAAABIAAAAQAAAAAAAAQABABAAAAQAAAAAAgBQABAAAAAAIABgBIgCgCIgCgBIgCABgAAZAVIAAgCIgCgCIgBAAIABgBIABgBIABgBIABABIACABIABAAIABgBIAAgBIADgBIgCABIgBAAIAAgBIgBgBIAAAAIAAAAIACgBIABgBIAAAAIABABIABAAIgBACIABgCIABAAIgCAAIgBgBIAAgDIADACIAAgBIAAgFIACADIAAACIAAACIgCABIACAAIAAgBIABAAIAAABIABAAIABABIAAgBIgBAAIACgCIAAAAIABAAIABABIgCACIgBAAIABABIABABIACABIABgBIAAgBIABgBIACAAIABAAIABABIAAACIABAAIgCACIgBABIAAAAIgBABIgBAAIgBAAIgCgCIAAgBIgBAAIAAgBIgCAAIAAgBIAAAAIAAABIgCABIgBgBIAAgBIgBAAIAAAAIAAABIgCAAIAAgBIgBAAIAAABIgEADIAAAAIAAABIgBABIgCABgAAcAQIgCgCIAAAAIAAgBIgBAAIgCABIgBACIAAAAIgCgBIAAgBIAAgBIgBgCIABgBIACgBIAAAAIABAAIABABIAAAAIAAABIAAABIABABIABgBIgBAAIAAAAIgBgBIAAgBIADAAIAAgBIAAABIABABIgCABIACgBIABABIgBAAIABAAIAAABIABABIAAABIgBABgAAsAOIgBAAIgBgBIAAgBIABgBIACAAIABABIgBACIgBAAgAAdAMgAAcALIAAgBIAAgBIAEgCIAAACIgCABIgBABgAAmAKIgBgBIAAgCIABAAIAAAAIACABIABABIgCABgAgOgIIgCAAIgDgDIAAgBIAAAAIACgCIACgBIABACIABACIAAgBIABgBIABAAIAAgBIAAAAIABAAIABgBIABAAIAAAAIABABIAAAAIgBABIgCABIAAgBIgBAAIAAAAIABABIAAABIgDADIAAgCIAAABIgBABgAgcgIIgBgCIAAgBIAAAAIgBgBIAAgBIABAAIABABIAAABIgBAAIACAAIAAABIABABIgBABIAAAAgAgIgJIABgBIABAAIABABIAAAAIgDAAgAgEgJIgBgBIgBAAIAAgBIACAAIADACIgBAAIgCAAgAgagJIgBgCIABgCIABAAIABAAIgBAAIABABIABABIgCACgAgKgKIAAgBIABgBIAAAAIABAAIABgBIAAABIABABIAAAAIgDABIgBAAgAgXgLIgBgBIAAgBIABgBIABAAIABABIABABIgBABIgBAAIgBAAgAgGgLIAAgCIgBAAIABgBIABgBIABABIgBACIAAABgAgcgMIAAgBIAAgBIAAAAIACgBIAAAAIABABIAAAAIgBABIgBABgAgKgMgAgOgOIgBgBIACAAIABABIABAAIAAABIgCAAgAgTgNIgCAAIgBgCIAAgBIAAgBIADgBIABgBIABAAIABAAIABACIAAABIgBABIgBABIgCABgAgYgNIAAAAgAgYgNIgBgBIAAgCIAAgBIACgBIABgBIAAACIAAABIAAABIgBABIgBABgAgegOIAAgCIABAAIAAAAIAAACIgBABgAgHgOIAAgBIgBgBIgBAAIACgCIABAAIgBAAIgBABIgBgBIAAgBIAAgCIAAgCIACADIABABIAAABIABAAIAAABIAAABIgCACgAgdgQIAAAAIABgCIABgBIABAAIAAADIAAAAIgCABIAAABgAgWgQgAgagTIABgCQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABAAIgBACIAAABIAAABIgCABIgBABIgBABgAg3gvIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIABAAIABgBIABAAIAAgBIABAAIABAAIAAABIgBABIgBABIAAABIABACIAAABIgBAAgAg7gwIAAgDIgBAAIAAgBIAAgBIABAAIABAAIAAgBIABgBIAAAAIABAAIABABIAAAAIAAABIgBABIgBABIAAABIABABIAAABIgCAAIgBAAgAg9gxIgBAAIAAgCIAAAAIgBgBIAAgBIABgBIABAAIAAAAIABgBIABgBIABABIAAAAIAAABIAAAAIgBAAIgBABIAAABIAAABIABABIAAABg");
	this.shape_141.setTransform(125.5583,498.2375);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#947E3A").s().p("AAfAnIABAAIABAAIABgBIABgBIAAgBIABAAIAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgBAAgAAzAlIgCgDIgBgBIgCAAIAAgBIABAAIAAABIABAAIABABIAAAAIABABIABACIACAAIABAAIAAgBIABAAIAAABIgBAAIgBAAgAAoAhIAAgBIAAAAIAAABIAAAAIgDACIgBABgAAdAiIgBAAIgCgBIACABIABAAIABgCIACgBIABAAIgBABIABAAIACACIAAAAIABgBIABgBIAAAAIACgBIgCABIAAABIgCABIAAAAIgCgBIgBgBIgCABIgBABIAAABgAArAhIAAAAIAAAAIgBABIgBAAIgBgBIACAAIABgBIAAAAIAAAAIAAABIACABIgCgBgAAuAhIAAAAIgBABIABgBgAA5AhIAAAAIAAgCIgBgBIgCAAIgCAAIgBgBIgBAAIgCABIAAABIABABIABAAIABAAIAAAAIABgCIAAABIgBABIgBABIgBgBIgBgBIgBgBIABAAIACgCIACABIAAABIACAAIACAAIABABIAAABIAAABIABAAIAAAAgAAjAfIAAgBIAAAAIAAAAIAAAAIABABIABABgAAoAdIAAAAIgBgBIgBAAIgBABIgBABIgBAAIgBgBIgCABIACgBIAAgBIAAgBIAEgCIABAAIAAADIABABIABAAIAAAAIgCACIABgCgAAiAbIAAABIABABIABAAIABgBIABgBIAAgCgAAfAeIgBgBIAAgBIAAAAIAAgBIgBAAIgBAAIgBABIgBABIgBAAIACgBIABgBIABAAIABAAIAEAAIgBABIgCAAIAAABIAAABIABAAIAAAAIAAABIgBgBgAAuAdIAAAAIAAABIAAgBgAArAcIAAgCIAAgCIABABIAAACIAAABIAAAAIgBABIgBAAIABgBgAAtAdIgBgBIACAAIABgBIAAAAIgBACgAAvAbIAAgBIgCgBIAAgBIABABIABABIACABIgCAAgAgIAKIgBgBIgCgBIAAAAIgBgCIgBgBIgBgBIgCgBIgBAAIgBABIABABIAAABIABAAIAAAAIgBABIgCABIAAAAIgBABIgBAAIABAAIAAgBIAAgBIgBgBIgBAAIABAAIgBgBIAAgBIgBAAIAAABIAAABIABAAIAAABIABACIAAAAIAAAAIgBAAIAAAAIAAgBIgBgBIAAgBIAAAAIgBgBIAAgCIAAAAIABgCIAAgBIAAABIABgBIACgBIAAAAIACgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIACAAIAAAAIgCAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABIgBACIAAACIAAgBIABAAIADgBIAAAAIgCABIgCAAIAAABIABACIAAABIAAAAIgBAAIgBACIAAACIABAAIACgCIgBgBIAAgBIAAAAIABgBIABgBIAAgBIABABIABACIABAAIABAAIABgBIACgBIAAgBIAAgBIgBgBIAAAAIAAAAIABAAIABABIAAABIAAABIABABIABABIABAAIAAgBIAAAAIgBgBIgCAAIABAAIACABIABgBIABAAIAAAAIABgBIAAgBIgBAAIAAgBIABABIAAAAIACAAIAAAAIAAAAIgCABIAAAAIABABIAAABIABAAIAAgCIABgBIgBAAIAAAAIABAAIAAAAIAAAAIAAABIgBABIACABIgBAAIgBgBIAAABIAAABIAAAAIAAACIABAAIAAAAIgBAAIAAABIAAAAIAAAAIAAAAIgCABIAAAAIgCgBIAAgBIABABIABAAIACgBIAAAAIAAgBIgBgBIgBABIgBAAIAAAAIgBABIgCADIgCABgAgMAGIADADIABAAIABAAIAAgBIABgBIgBACIADgDIABgBIACgBIAAgBIAAAAIAAgBIgBAAIgBAAIAAABIgBAAIAAAAIgBABIgBAAIAAABIAAABIgBgCIgCgCIgBABIgCACIgBAAgAgVADIgBAAIAAABIABABIAAAAIACgBIABgBIgBAAIAAgBIgBAAgAgXABIgBACIABABIABgBIgBgCIAAAAgAgUgBIgCABIAAABIAAAAIAAACIABgBIACgBIgBAAIAAgCgAgQAGIABAAIACgBIgCABgAgEAEIgBAAIABAAIABABgAgQABIABgBIAAAAIgBABIAAAAgAAAgCIgCgDIAAAAIABACIABACgAgLgBIABAAIgBAAgAgwgcIgBgBIAAgBIgBAAIgBABIgBgBIgBAAIgCAAIAAgBIgBgBIAAgBIABAAIAAACIAAAAIACAAIAAgBIAAgBIgBgBIABABIABAAIAAADIABAAIABAAIAAgBIAAgBIgBgBIABgBIABgBIABgBIgBAAIgBgBIAAAAIAAAAIACABIAAAAIAAABIABgBIAAgBIABAAIABABIgCAAIAAAAIgBABIAAAAIgBABIgBAAIAAABIAAABIABABIAAABIAAABIABAAIAAAAIABAAIABgBIAAABIAAAAIgCABgAgvggIAAgBIABgBIABgBIAAgBIAAABIAAABIAAAAIgBAAIgBABIAAABIAAABIABABIgBgCgAg4ghIgBgCIABABIAAABgAg1gjIABgBIAAAAIABAAIAAgBIgBAAIgBgBIgBABIAAABIgBAAIgBAAIgBABIABgBIABAAIABAAIAAgBIAAgBIABAAIACABIAAAAIAAABIgBABIgBAAIAAAAIgBABIABgBg");
	this.shape_142.setTransform(124.925,496.425);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#777437").s().p("AgCAtIgEgBIgDgDIgBgEIgCgHIgCgCIgDgCIADACIABAAIAAABIADgBIgBADIAAABIABACIACABIgCACIAAABIAFABIgDADIABABIAEgBIgBACIABAAIADAAIADgCIAAAAIABAAIAAAAIAAABIgCABIgEABgAgBAmIAAgCIgBAAIgCACIABgDIAAgBIgBAAIgCABIAAAAIACgEIgBgCIAAAAIAAgBIgEgBIACgCIAAAAIAAAAIgDgCIgBgBIgBgBIgBgBIAAgBIgBgBIAAgBIAAgBIAAgCIABgBIAAgCIABgBIAAgDIAAABIAAADIgBABIgBAEIAAABQAAACAEADIAFAFIABAFIACADIACABIABAAIAAACIAAABIgDACgAAVAjIAAAAIAAgCIABgDIAAgCIAAgBIAAgBIgBgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIAAAAIgDgCIAAAAIgDAAIgCAAIAAAAIgDAAIAAAAIgCAAIAAAAIgBAAIgBAAIgBAAIgCgBIgBgBIAAAAIAAgBIAAgBIAAAAIgBgCIAAAAIAAgBIAAgCIAAAAIABgDIgBABIgBgBIADgBIAAgBIgBgDIAEABIABgBIgBgCIAEAAIAAAAIAAgCIgBgCIAGAAIABgBIABgCIAAAAIABgDIAAAAIABgBIAAgBQAAAFgGAFIgFAEIgEAEQgDADAAADIABAEIACACIABABIACAAIAEAAIAEgBQAEAAADADQACADAAAFIAAAAIAAACIAAACIAAABIgBADIAAAAgAgTAYIgCgEIAAgCIABACIAAACIABACIABABIgBgBgAgGASIACABIAAACIgCgDgAgVARIABgGIACgFIAAgBIgCgCIABAAIAAABIABAAIAAABIAAAAIAAABIAAACIgBABIgBADIAAABIgBADIAAACIAAAAgAgIANIACACIABAAIgCABgAgEAPIAAAAIABgDIAAACIAAAAIAAABgAgJAKIAAAAIABgGQABAEACABIABABIgEABgAgEAKIACgCIgBACIAAABIgBgBgAgMAFIgBgDIgCgBIgCgBIgBAAIgBgBIgBAAIAAgBIAEACQAEACAAADgAgEAEQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIABgCIACgCIABAFIAAAAgAgVADIAAgBIAAAAIAAAAIABABgAgDgCIADgCIAAABIAAADIgDgCgAAAgFIABgBIADgBIgBAEIgDgCgAALgJIgBgCIABAAIACgCIAAAAIAAAAIAAACIAAABIAAABIAAACIgCgCgAAFgIIACgCIAAADgAAIgNIABAAIAAgBIAEABIgCABIgBABgAAHgLIABgCIACACIgDAAgAARgPIgBgCIAAgBIgBgCIAAAAIAAgBIgBgBIgBAAIAAgBIgBAAIgBgBIABgBIAAAAIABABIAAAAIAAABIABABIABABIAAAAIADAGIgBABgAAJgOIAAgBIABgDIABABIAAAAIACACIAAABgAgJgTQgDgBAAgJIAAAFQABAEABABIACgDIAAAAIAAgBIADAEIABAAIAAAAIABgDIACACIABABIgFAAIgEAAgAgEgZIgBgBIgCADIgBAAIABgDIABgBIAAAAIAAgCIADgBIABgBIACAAIgBABIgCABIgCABIAAABIACABIAEAAIgBAAIAAABIgBAAIAAAAIAAAAIgBABIgBABIAAAAIAAAAgAgMgeQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgCIAAACQgBAAAAABQAAAAABABQAAAAAAABQABABAAAAIAAABgAgGgfIAAgBIAAgBIAAABIABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABgBIABgBIABgBIAAABIAAAAIgCACIgDAAIgCAAgAgEgjIAAgBIABgCIAAgBIACgDIAAAAIAAgBIAAABIgBACIgBABIAAABIAAACIgBABIgCACIACgCgAgEgqIgBAAIgBAAIABAAIACAAgAgCgsIABABIgBAAIgBABIABgCg");
	this.shape_143.setTransform(122.4,493.125);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C4C7A7").s().p("AgCAEQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAABgBIACgBIACgBIABgCIABAAIABAAIAAABIABAAIgBACIgBAAQgCADgBAAIgCABIAAAAg");
	this.shape_144.setTransform(121.4438,489.3333);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AiUDJIAAmRQBAgxBUAAQBVAABAAxIAAGSQhAAwhVAAQhUAAhAgxgAAABeIABACQACABAEABIABABIABgBIACgBIgDgBIgCgBIgCgBIgDgDgAACBQIAAAFQgBADgDADIgEAEIgBACIABABIABABIAEgEIAFgGIACACIACABIACABIADADIACAAIACAAIgDgEIgEgCIgDgBIgCgDIAAgBIAFACIADABIABABIACABIABAAIAAgBIAAAAQAAgDgEgBIgIgDIAAgBIAJABIADACIADADQAFAEAEAAQAEAAAFgCIAHgDIAEgBIACAAIgEgCIgCgBIgCAAIADgCIAEgCIACgDIAEADIAAABIABABIACAAIABAAIABgCIAAgBIgCgBIgBABIgFgEIAEgCIABAAQANAAAEgCQADgCACgEIAAgEIABgCIgBAAIgCABIABgGIABAAIAAgBIABAAIAAgBIAGABIAAABQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAIABAAIAAgCIAAgBIgBgBIAAAAIgCABIABgBIgBABIgEgBIACgDIACgCIACAAIAFgBQACgCACgFIACgFIAEgFIABgCIgCABQgDAAgCADIAAgGIAAgDIAAgBIAAgBIAAAAIAHgCIABABIABgBIABgBIgBgCIgBgBQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIgFAAIAAgCIAEgEIAFgDQADgDABgCIgCgGIgCgDIAAgBIgBACIgBACIAAgFIgCgDIAAgBIgCABIgCAEIgCAIIgCgGIgCgCIgCAAIABAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAAFQgBABAAAAQAAAAAAAAQAAABABAAQAAABAAAAIACADIABACIABAEIAAABIAAACIgEgDIAAgBIAAgBIgCgBIgCABIAAABIAAACIACABIABAAIAEAEIgBACIAAAAIgBAAIgCADIgCACIAAgCIABgDIgGAEQgDACgBADQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAABIABADIAAAFIAAAFIABAAIgBACIgEgFIAAgBIAAAAIAAgCIgCgBIgCABIAAACIAAABIACABIABAAIADAGIgBABQgCgBgEADIgDACIAAAAIAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgBIAAACIAAABIgBABIgGAEQgDAEgBACIAAADIgBABIgCAFIgBAAIgBABIgCgEIABgCIAAgBIgCgBIgCABIgBABIABACIACABIAAAAIAAAFIgBABIAAADIgBAAIgBgBIgDgBIgEABIACgCIACgCQgEgBgDAAQgFABgDABIgDADIgDADQgDACgDAAIgBAAIgCgBIgEAAIgFAAIAAgBIAAgBIgBAAIgCAAgAgDBWIgDABIgEADQgDADgCAEIADgBIACgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIAFgCIACgCIABgIIAAgBIgCAAIgBAAIAAACIgFgBIgFABIgDAAIgCAAIgBgCIgCgBIAAABIgBACIgDgDQgCgEgBAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAAAIACADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgDgCQgDgEgBAAQgBAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIACABIAAACQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAgBQgBAAAAAAQgBAAAAgBQAAAAgBABIgCAAIgBgBIgBgFIAAAAIAAADIgBAAIgDgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgBgEIAAgCIgBABIgCABIAAgDIgBgFIgCgDIgCAAIAAADQgBABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABgBIAAgDIgBgDIgCgBIgBADQABAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgCgBIAAgCIgBAAIAAAAIAAgCIgBgBIAAABIAAAAIAAAEIgDgBIAAgGIACAAIABgCIAAAAIgBgBIgBAAIAAgCIAAgCIgBAAIgCAAIAAACIAAABIAAAAIgBABIgBAAIAAABIABABIABABIAAAEIgDgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIACgJIgBABIgCABIAAgDIAAgFIgBgCIgCgBIgCACIgBADIgBgDIAAgCQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgBACIgBABIgBgBIgBgBIAAgFIADgGIABAAIABAAIABgBIgBgBIAAgBIAAgBIABgBIgBgBIAAAAIgBABIgBABIAAABIAAgBIgBAAIgBABIAAAAIABACIgDAEIgBgGIABgBIAAgCIgBAAIAAAAIADgEQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQgBABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIADgDQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDABIACgDIABgCIAAgCIAAgBIgBgBIgDACIgBABIgBgBIAAgBQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIAAACIAAACIgBgBQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBABIAAACIABAEIABACIgCgBQAAAAgBgBQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAQAAABABAAIADADIABABIABABIACABIABABQACACAAAEIgDgCIAAgCIAAgBIgBgBIAAAAIgBABIAAgBIgBABIgBgBIgBAAIgCAAIAAABQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAAAIAAABIAAABIABABIABAAIACgBIAFAEIAAACIAAgCIAAADIAAACIgCgBIAAABIAAABIABABIgCAAIgCABIAAACQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAHADgBABIgEgBQgBgBAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAADADABIAEAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIgCABQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABABIACAAIADABIAEACIADAEIgDAAIgBgCIgBgBIgCAAIAAABIAAAAIAAABIgBAAIgCABIAAAAIAAABIACABIABAAIgBAAIABABIABABQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABAAIAFAAIAEACQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIAEADQABABAAAAQABAAAAABQABAAgBAAQAAAAAAABIgDgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAACADACIAFABQABAAABAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBgBQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIADABIAEgBQAAAAAAAAQABgBAAAAQAAAAAAABQAAAAABAAIAAACIAAABIACgBIAEgBQAEABADADIgEAAIgBgBIgCgBIgBAAIAAABIAAABIgDABIAAABIAAABIADABIABgBIAAABIAAAAIABABIABAAIABgBIAAgBIAAgBIAGAAIgBgBIgBgBIAEAEIgDABIgDABIACgBIgCACIgBAAIAAABIACAAIABAAIABgBIABAAIAAABIABABIACgBIADgBQABABAAAAQAAAAAAAAQAAAAgBABQAAAAgBABIgBACQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIAEAAIACgCQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAIADgBIADgCIACgCQABAAAAABQAAAAgBAAQAAAAAAABQAAAAgBABIAAACQABACAEgDIABgCIADgCIABgBIABAAIADgCIAEgCIADABIgHAEIgEACIgBABIABAAIABABIADgBIAEgDIAGgCgAgdBDIAFABIAEAAIABACIACABIABAAIAEADIACAAIAKABIAPgBIAEgDIABgBIACAAIAEgDIAHgCIABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIADgBIABgDIgBgCIgDgBQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABIgBAAIgCgBIAAgBIABgBIAGgDIADgBIAAAAQAAABABAAQAAAAAAAAQABABAAAAQABAAAAgBIACgBIADgCIAAgCQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIgDACIgFABQgHABgEAAIgEAAIAAgBIgCgDIgBgBIgBAAIgCAAIgBABIgBAAIABgDIAAAAIADgCIACAAIAFgBIADgBIAIADIgBgBIAAACIACACIgBgDIAIABIAAAAIAHgBIABABIACAAIgBgBIgBAAIABgBIAAABIADAAIgDgBIAGgDIABgBIABAAIACgBIgCAAIAAAAIAAgCIgBgDIAAAAIACgCIADgEIACAAIABAAIAAAAIAAgCIAAgBIgBABIAAgBIAAAAIABgBIAAAAIACgDIABAAIACgBIAAgBIgBgCIAAAAIgBgBQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAIAAABIAAAAIgDAEIgBAAIAAAAIgBAAIAAgBIABAAIgCgBIgBAAIAAAAIgBABIAAABIAAAAIAAABIABABIgDACIgDABIgCgBIgBgBIgBAAIgBAAIABgCIAAAAIgCABIAAABIgGAFIAAgBIABgCIgBACIgBACIAAAAIgDADIgBABIgCABIgDAAIAAgBIABgCIgBAAIAAgDIABAAIABABQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQABABABAAQAAgBABAAQAAAAAAAAQABgBAAAAIAAgDIgBgCIgBgBIgBAAIAAgBIAAAAIAAAAIgBgCIAAAAIgCAAIgCAAIAAgBIgDgBIgBgBIgBgBIgBgBIgBgBIAAgDIACABIABgBIgBgCIAAgBIAAgCIAIAJIABAAIABACQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAABQABAAAAAAQABAAAAABQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIACABQADABAFgEIABABQADAAADgCQABAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAIgDgCIgkgaIgBgIIgCgGQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAAAIACACIADACIACABIACABIAHAJIACADIAAAAIABAAIAAgBIgBgCIgBgDIgCgEIgCgEIgBgBIACAAIAEACIACAEIAAACIACADIADAGIACACIAAgCIgBgDIgBgEIgEgJIAAAAIAAAAIACABIAAAAIACADIACADIACAJQACAHACgBIAAgEIgDgHQgBgDgBgIQABAAABAAQAAABABAAQAAAAAAABQAAAAABABIAAAEIABAIIACAHIACADIAAAFQAAABAAAAQAAABAAABQABAAAAABQAAAAAAAAIAAgGIAAgIIgCgUIACAFIACAJIABAGIABACIABADIAAAHQAAAGABAAQADAAgCgUIAAgTIAAAAIACAFIABAIIAAAMIACADIAAAEIgCAJQAAABABAAQAAABAAAAQAAABAAAAQABAAAAAAIABgBIAAgDIABgDIABgJIABgMIACgHIAAgHQAAgIgCgGIACAAIABgBIgBgBIgCgCIgCgEIgFgIIgGgMIgMgNIgEgCIAAgBIgCgBIABgBQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgBgBIgDABIgDgBIgDgCIgJgFQgMgEgMgBIgIABIgBABIAAABIgCAAIgFABQgCACAAAEIAAADIACABIAFACQADABABACIADADIABAEIgBACIgCgDIgCgDIgBgCIAAgBIAAgBIgCABIgDAAIgDgCIgFAAIAAgBIgBABIgBAAIgBgFIgBgBIgBACIgCAEIgBgFIgBgBIgBAAIAAAAIABACIgBADIgBAEIgCAAIAAgDIAAgDIgBgBIAAABIAAAEIgDAEIABgCIgBgDIgBAAIgBADIgDAGIgDADIgBABIAAABIAAABIgBAAIAAAAIgBAAIAAABIgBABIAAABIgCABIAAABIgFAAIgCgBIAAgBIADgBIACgCIABgBIABgCIAAAAIAAAAIgCACQgBAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBgBIAAAAIACgCIABgBIABgCIAAgCIABgBIABADIgBADQAAgBABAAQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgEIAAgBIgBgBIgCACIgCgBIgBABIAAAAIgBABIgDADIgDACIgBACQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABIABABIAAAAQgBAJAEABIAJAAIABACQADADADgBIACgBIAAAAIAAAAIABgBIAAgBIAAAAIAAADIgBgBIAAACIgFAGIgDACIgBABIADACIABgEIAAgBIABAAIADABIAAgDIAAgBIACAAIgBgCIgBACIABgDIABADIABgBIACgCIgCADIgBAAIABACIACACIAAAAIgFAAIABACIAAADIAAAAIgFAAIABADIgBABIgDgBIAAADIAAAAIgDABIABACIgBACIgDACIADgDIgBgDIgCABIgCgBIgBgBIABAEIABACIABABIACAAIAAABIgCgBIgDACIAAAAIACACIABAAIACgDIAAAAIAAABIgCADIAAAAIACAAIAAABIgDgBIgCACIAAgBIACgBIgBAAIgBgDIAAgBIADgBIgBgBQgCgCAAgDIABgDIgBABQABABAAAAQAAAAABABQAAAAABAAQAAAAAAAAIACAAIgBgBIgBgFIABgBIAEACIAAgDIAAgCIAAAAIAAAAIgBABQgFADgBADQgDADABAGIAAAAQAAAJAGADQADADADAAIABAAIADAAIADAAIADAAIABAAIAAAAIABABIgCACIAAAAIAAgBIABAAIgBAAIgBAAIgBAAIAAAAIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgCACIgBAAIgBABIgBADIAAgBIgBABIAAACIAAAAIgBAAIgCgBIgDgEIgBgEIgEgFQgFgDAAgCIAAgBIABgEIABgCIABgCIAAgBIAAgBIgEgBIgCABIAAgBIAAAAIACgCIADABIABABQgBgDgEgDIgDgCIAAgBIgBgBIgBAAIgBAAIgBACIAAgBIAAgBIgBgBIgBAAIAAABIAAgBIgCgBIgBABIAAABIAAAAIgBAAIgBAAIgBACIAAACIABAAIAAABIABABIAAAAIACAAIABABIABAAIABAAIAAAAIAAABIABAAIABAAIACAAIAAgBIABABIACACIAAABIgCAEIgBAHIAAABIAAACIACAEIABABIgBgBIACgDIADgCIABABIgDABIgCAEIABABIACACIADACIACAHIABACIACAEIAFABIAAAAIAEgBIACgBIADABIAAAAIADgBIABgBIABAAIAAAAIACgCIACACIABABIAAAAIACgBIACgDIAAAAIABABIABAAIgCACIgBAAIABABIADABIABAAIABAAIAEACIAAACIABAAIAFAAIAFgCIABAAIABABIACACQABAAAAgHIAGAGIAAABIABAAIADAFQACAFABgBIABgBIABgBIAAgBIgCgDIADADIABACIAAAAIgEADIgEAAIgBAAIgBAAIgBABIgCABIgCABIgCACIgCgCIgDgBIABgBIgCgCIAAACIAAABIgBgBIAAgBIgBgCIgBAAIABACIAAABIgDgBIgFgCIAAgBIgCgBIABACIgBgCIgBAAIABACIAAAAIgCACIgCABIgBAAIgCgBIAAABIACABIgCACIgEgDIgDgCIABgCQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABAAIABAAIABgBIAAAAIAAgBIABgBIgBgBIgCgBIABABIgBABIgBgCIABAAIgCgBIAAgBQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAABAAIAAgBQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAIAAABIAAACIgBAAIABAAIgBABIgBgBIAAAAIgCAAIAAAAIAAABIgBAAIAAACIACACIgCACIgEAAIAAAAIgCAAIgBgBIAAAAIAAABIAAAAIgFACIgBgFIABgDIgBACIgBAAIgDgFIgFgDIAAgBQABAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAgBIgBgBIAAADIgDAAIgBAAIgBgEIgCgBIAAAAIgBgBIAAAAIgCgBIACAAIAAgBIAAgBIAAgCIgBAAIABgBIgCAAIgBABIABAAIgBABIAAAAIgBAAIAAgBIgBAAIgCgDIABgBIgBgCIgCgBIgBABIgBABIABACIABABIACADIgBABIABAAIAAACIgBAAIgBgBIgBABIgBACIABAAIAAABIABAAIADAAIABAEQAAAAAAABQABAAAAABQABAAAAABQABAAAAAAIAAAEIAAACIgCAAIAAABIACAAQABAEADAEIgCgBIAAABIACAAIABAAQACACAEABIAAABIgCABIACgBIABgBIAGABIAAAAIAAABQABADABACIgBABIgBABIADgBIABgBQACACAFABIgBABIACgBIAAACIACgBIABgBIABAAIACABQAFAAAEgDQABADABACIAEADIgBABIgBAAIACAAIABgBIABABIAHABIgBABIACAAIAAgBIADAAIAEAAIAAAAIgCABIACAAIABgBIAAABIABgBIAAgBIABAAIACgCIAAAAIAAAFIAAADIgPAAIAAgBIgDgBIAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAIgBADIAAABIgBAAIgEgCIgDgFIgBgBIABgCIgBgDIgCgBIgDABIgBADIAAACIACABIAAACIAAAAIAAABIgCgBIgKgEIgHgDIAAgBQgBgCgEgBQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQAAABABAAQAAABAAAAQABABAAABIAEACIADAAIAGADIACADIABAAIAAABIAAABIgBABIgBAAIgCgBIgDABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAIACgBIABgDIAKACIAFACIABABIABABIgBABIgCABIgBABIgEgBIgDACIAAADQAAAAAAABQAAAAABAAQAAAAAAAAQABABABAAIADAAIADgDgAg0BEIABABIABAAIACAAIABgBIABgBIgBAAIAAgBIgBABIgBAAIgDAAgAgzBBIAAACIAAgCIAAgBIAAABgAgyglIABADIAAABIAEgBIgBgDIgDgBIgBgBgAgugmIAEABIgBgDIgCgCIgBAAgAgqgpIAEAAIAAgEIAAAAIgEgBgAgmgtIAEAAIgBgCIgBgCIgCAAgAAxBNIABAAIAAABgAgmBEIACgCIACgCIABABIACABIAAABIgCABIAAAAIgBgBIgBABIgBAAIgBAAIgBAAgAAjBBIAAgCIAAgBIACgBIACABIABABQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgCAAgAgyA4IgBgBIABgCIACAAIACAAIAAACIAAABIgCACIgCgCgAAtA1IgBAAIgCAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIABAAIABABQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBAAgAABAtIABgEIgBAHgAghArIgBgBIABgCIACAAIABAAIABACIgBABIgBABIgCgBgAg4AqIAAAAIABgBIgCgBIgCgCIADAAIACABIABACIgBABIgBAAIgBAAgAAGAkIAAAAIgBgBIAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAAABIgBACIAAACIABACgAATAkIAAAAIABAAIgBAAgAgNAZIgBAAIAEABIgDgBgAgQAZIAAAAIAAABgAgPAZIAAAAIAAAAgAhgAOIAAABIAAABgAgjAOIAAAAIAAABgAg/AOIAAAAIAAABgAgkAOIAAAAIAAAAIAAAAIAAAAgAhDAKIAAAAIABABgAgiAKIABAAIAAAAgAgzAGIACgCIgFABIAAgBIACgEIgEAAIAAAAIACgCIgCgBIACABIAAgBIACgEIAAgBIABABIgCAFIAAAAIACgBIABAAIABABIgCACIADgBIABAAIAAABIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIgBABIgCADIACAAIAEgCIABgCIgBACIADgCIAAABIgDADIgBACIABAAIADgBIABgCIAAABIABAAIgCACIgFAAgAg3AAIABAAIACAAIABgBIAAgBIgDAAgAAAgCIgBgCIAEAGgAgUgCIABgBIAAgBIAAAAIAAgCIgBAAIAAAAIgCgDIgCgBQAAgFgCgEQgDgCgEAAIgDABIgEAAIgDAAIgBgBIgBgCIgCgEQAAgDADgEIAFgEIAEgEQAHgGAAgFIABAAIgDgGIAEgCIADgCIACAAIAAgBIAAAAIAAgBIABAAIABACIABAAIgBADIgCAEIABAAIAAABIgCADIgDAGIABAAIAAABQgDAFAAAEIAAADIABADIACAIIAAAAIADgBIABADIABAHIAGAGIgDgBIAAAAIgBgBIgCAAIAAAAIAAACIABACIAEACIgEABIAAABgAgNgDIABAAIAAABgAhIgDIAAAAIAAAAgAgZgGIAAgBIABAAIgBADgAg5gGIABgDIgEAAIAAAAIABgBIADAAIAAAAIACgCIAAAAIAAAAIgBACIADABIAAAAIgEAAIgBAEgAgKgIIgDgEIAFAGIABAAgAgfgHIgCgBIAAgBIABAAIABAAIAAAAIAAAAIABgCIAAAAIAAAAIABABIgCACIABABIAAAAIAAABgAAQgNIACADIABACgAAXgLIAAAAIAAACgAg/gLIABABIAAgCIABgCIAEgCIABABIgDADIgCADgAAxgQIABADIABACgAgwgOIgBgBIAAAAIABgDIgCAAIgBACIAAAAIAAgCIgCgBIACAAIABAAIABAAIABgBIAAABIgBAAIABAAIAAABIAAAAIAAABIAAACIACAAIAAABgAhCgRIACgCIADAAIABABIgCAAIgBAAIgDACgAhDgVIADgCQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAABIgDgBQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABgAgugYIAAAAIAAABgAg/gZIgDAAIAAgBIABAAIACgBIADACIgBABIgCgBgAgKgZIAAgCIAAADgAAUgaIABAAIgBABgAA7geIABABIACADgAg+gcIgCAAIgBAAIABgBIACAAIADACIgBABIgCgCgAgwgdIAAACIgBAAgAgQgfIABAAIAAADgAgwgdgABJgiIABABIAAAAgAhBgiIACgCIABAAIACABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABAAAAgABJgiIgBgCIABABIAAABgAhCgiIAAgBIAAgCIABgBIABAAIABAAIgCACIAAACgAgDgjIgBgBIACABgAhDgkIAAABIgBgBIABgCIABgBIAAAAIABAAIgCACIAAACgAAZgrIADAFIADACgAgMgqIACgBIgCABgAAsgtIgEgFIAEAEIABABgAAjg3IAGAFIABACgAgmgxIAAAAgAA/g1IAAgBIABACIgBgBgAghg0IgDAAIAAgBIADAAIAAAAIAAABgAgGg3IgCABIgCACgAglg4IAAAAIABgBIAAABIgBAAIAAAAgAgog5IAAAAIACABgAgmg6IACABIAAAAgAg0g5IgCgEIAAAAIAAgCIAAgBIAAgBIgCABIgCABIAAgEIAAADIACgBIADAAIAAAAIgBABIAAACIAAAAIAAABIADADIABgDIABgBIAAABIACACIAAABIgCgDIgCAEIAAAAgAgmg6IgCgDIACACIAAABgAA8hDIABACIADAEgAgzg/IAAgBIgBABIgCABIACgCIABAAIABADIgBgCgAgvhAIABAAIABAAIgBABgAgwg/IABgBIAAAAIAAABgAgBhBIAAgBIABACgAgghDIABAAIAEAAIgEABgAg2hFIAAgCIABgCIABgCIAAABIgBACIgBABIAAACIAAACIABAAIgBABQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBABAAgAgkhGIAAgBQABABAAAAQABAAAAAAQABAAAAAAQABgBAAAAIABgCIgBgCIAAgBIABACIABABIgBACIgDABIgCAAgAg5hMIAAAAgAg3hOIABgBIACgBIABAAIAAABIgBAAIgBAAIAAAAIgBABIgDACQAAgBABAAQAAAAAAAAQABAAAAgBQAAAAAAAAg");
	this.shape_145.setTransform(127.05,496.95);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#A6AC76").s().p("AAAAsIAAgCIAEgCIABAAIAAABIgCACIgCABgAgEAqIACgCIABgBQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAAABIgBACIgCABgAgEAmIgBAAIABgDIADAAIAAABIgBADIgCgBgAgHAiIAAgBIABgFIAEABIAAABIAAABIgCADIAAABgAARAfIgBAAIAAAAIAAgBIACABgAARAeIACgDIAAAAIAAACIAAAAIAAACgAASAaIAAAAIgBAAIAAgBIABAAIAAABIAAACIAAgCgAgLAcIACgDIACgCIADACIgCACIgBAAIgCAAIgBABgAgOAaIAAgBIACgDIADgBIABABIgDACIgBABIAAACgAAEAYIAAAAIAAABgAAAAYIADAAIABAAIgEAAgAgQAWIACgCIACAAIACAAIAAAAIgDACIgCACIgBgCgAAAAXIAAgCIABgBIABACIAAABIAAAAgAAAAXIgBgBIABgCIAAAAIAAADgAgSASIABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIADABIAAABIgEAAIgCADgAAAATIAAgBIABABgAgBATIgCgBIgBgBIACgCIACABIAAABIAAABIAAABgAgOAPIgDABIAAgDIADAAIADABIAAACQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAgAgCAPIgCgCIAAAAIADgCIABABIgBADgAgOALIgBABIgBAAIABgDIABAAIACAAIACADIAAABIgEgCgAgCAJIgBgCIgBgDIABABIACABIABgBIABACIgCADgAgMAIIgDAAIABgCIACAAIADAAIAAABIAAADIgDgCgAgPAFQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABIABACIgDgBIgDACgAAAAEIAAgEIAAgBIAAABIADAAIABAEIgEABgAgQAEIABgDIABgBIACABIgCABIgBACgAgRADIAAgDIACgBIABABIgBAAIgBAAIAAADIAAABgAgSAAIAAAAIABgBIAAAAIABAAIgBAAIgBABIAAACIAAgCgAADAAIAAgDIABAAIACABIABACIgEAAgAAHgDIAAgFIADACIAAAAIABADIgCABIgCgBgAALgHIAAgEIACAAIABACIABACIgCAAIgCAAgAAKgQIgBgBIgBgCIADABIgDgBIAAgBIAAAAIABgCIACACIABABIAAABIgBAAIACAAIgBABIAAACIgCgBgAgIgYIACgCIACgBIgBACIAAABIAAACIAAABIgBACQgCgBAAgEgAgEgWIAAgBIACgBIABgBIAAABIABACIgBACIgDgCgAAAgWIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABABIgBADIAAABIgCgCgAgJgdIAAAAIAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgCQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIACAAQADgBACgDIAAAAIgBACIgBADIgBACQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAIABgBIgBAAIAAgBIAAgCIABgCIABgCIAAgBIABgDIAAAAIAAgBIgBAAIgCABIgBABQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIADgCIABgBIAAAAIABAAIABAAIABAAIABgCIABABIAAAAIgBABIgBACIAAABIgBACIAAABIgCADIAAAAIAAACIACAAIACgBIADgCIAAAAIgBACIgCABIgBABIgDAAIAAACIgDAAIgCACg");
	this.shape_146.setTransform(122.075,493.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FFFFFF").ss(1,1,1).p("AD6AAQAAAygRArQgIAUgLARQgPAZgWAWQgsAsg3ARQglAMgpAAQgwAAgqgQQgvgTgngmQgWgWgPgZQgLgRgIgUQgRgrAAgyQAAgxARgsQASgtAmgmQAngmAvgTQAqgQAwAAQApAAAlALQA3ASAsAsQAlAmATAtQARAsAAAxg");
	this.shape_147.setTransform(127.05,1425.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Titles
	this.text_50 = new cjs.Text("Argentina", "600 60px 'Darker Grotesque'", "#FFDD00");
	this.text_50.lineHeight = 31;
	this.text_50.lineWidth = 217;
	this.text_50.parent = this;
	this.text_50.setTransform(182.15,1399.25);

	this.text_51 = new cjs.Text("Colombia", "600 60px 'Darker Grotesque'", "#FFDD00");
	this.text_51.lineHeight = 31;
	this.text_51.lineWidth = 210;
	this.text_51.parent = this;
	this.text_51.setTransform(182.15,1166.65);

	this.text_52 = new cjs.Text("India", "600 60px 'Darker Grotesque'", "#FFDD00");
	this.text_52.lineHeight = 31;
	this.text_52.lineWidth = 163;
	this.text_52.parent = this;
	this.text_52.setTransform(182.15,934);

	this.text_53 = new cjs.Text("France", "600 60px 'Darker Grotesque'", "#FFDD00");
	this.text_53.lineHeight = 15;
	this.text_53.lineWidth = 163;
	this.text_53.parent = this;
	this.text_53.setTransform(182.15,701.35);
	if(!lib.properties.webfonts['Darker Grotesque']) {
		lib.webFontTxtInst['Darker Grotesque'] = lib.webFontTxtInst['Darker Grotesque'] || [];
		lib.webFontTxtInst['Darker Grotesque'].push(this.text_53);
	}

	this.text_54 = new cjs.Text("Mexico", "600 60px 'Darker Grotesque'", "#FFDD00");
	this.text_54.lineHeight = 31;
	this.text_54.lineWidth = 163;
	this.text_54.parent = this;
	this.text_54.setTransform(182.15,468.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_54},{t:this.text_53},{t:this.text_52},{t:this.text_51},{t:this.text_50}]}).wait(1));

	// White_BG
	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("EhEhAIIQhAAAAAg6IAAubQAAg6BAAAMCJEAAAQA/AAAAA6IAAObQAAA6g/AAg");
	this.shape_148.setTransform(548.8,1536.65);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("EhEhAIIQhAAAAAg6IAAubQAAg6BAAAMCJEAAAQA/AAAAA6IAAObQAAA6g/AAg");
	this.shape_149.setTransform(548.8,1304.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("EhEhAIIQhAAAAAg6IAAubQAAg6BAAAMCJEAAAQA/AAAAA6IAAObQAAA6g/AAg");
	this.shape_150.setTransform(548.8,1072.25);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("EhEhAIIQhAAAAAg6IAAubQAAg6BAAAMCJEAAAQA/AAAAA6IAAObQAAA6g/AAg");
	this.shape_151.setTransform(548.8,840.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("EhEhAIIQhAAAAAg6IAAubQAAg6BAAAMCJEAAAQA/AAAAA6IAAObQAAA6g/AAg");
	this.shape_152.setTransform(548.8,607.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148}]}).wait(1));

	// Disclaimer
	this.text_55 = new cjs.Text("* Legal disclaimer.", "400 20px 'Roboto'", "#FFFFFF");
	this.text_55.textAlign = "center";
	this.text_55.lineHeight = -27;
	this.text_55.lineWidth = 164;
	this.text_55.parent = this;
	this.text_55.setTransform(185,1802.6);

	this.timeline.addTween(cjs.Tween.get(this.text_55).wait(1));

	// Bottom_Title
	this.text_56 = new cjs.Text("04/09/2024 1:00 PM", "500 42px 'Roboto'", "#FFFFFF");
	this.text_56.textAlign = "center";
	this.text_56.lineHeight = -1;
	this.text_56.parent = this;
	this.text_56.setTransform(597.6,1701.45);

	this.text_57 = new cjs.Text("as of ", "500 42px 'Roboto'", "#FFDD00");
	this.text_57.textAlign = "center";
	this.text_57.lineHeight = -1;
	this.text_57.parent = this;
	this.text_57.setTransform(341.6,1701.45);

	this.text_58 = new cjs.Text("FX rates based on $ 100 cash transfer", "500 44px 'Roboto'", "#FFDD00");
	this.text_58.textAlign = "center";
	this.text_58.lineHeight = 2;
	this.text_58.lineWidth = 796;
	this.text_58.parent = this;
	this.text_58.setTransform(540,1650.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_58},{t:this.text_57},{t:this.text_56}]}).wait(1));

	// Title
	this.text_59 = new cjs.Text("Get the best rates\non your money transfer", "900 80px 'Darker Grotesque'", "#FFDD00");
	this.text_59.textAlign = "center";
	this.text_59.lineHeight = 59;
	this.text_59.lineWidth = 796;
	this.text_59.parent = this;
	this.text_59.setTransform(540,248.65);

	this.timeline.addTween(cjs.Tween.get(this.text_59).wait(1));

	// WesternUnion_logo
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AATEzIAAiEQAAg/g1AAQgbAAgQASQgPARAAAfIAACBIg5AAIAAjwIAxAAIAAAiQALgTAXgKQAVgKAaAAQAnAAAaAYQAeAbAAA2IAACMgAg5hbQgjgjAAg3QAAg2AigjQAigkA0AAQA1AAAgAiQAnAmgDBGIAAACIi4AAQADAZATARQASAPAbAAQAaAAATgOQANgJAHgNIAAgCIABAAIArAXQgNAcgeASQgfARgjAAQg2AAgjgigABbjOQgCgXgRgPQgSgPgaAAQgZAAgRAPQgSAPgDAXIB+AAIAAAAg");
	this.shape_153.setTransform(344.3912,108.9728,1.101,1.0997);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#0A0B09").s().p("AguCDQgkgjAAg2QAAg0AkgkQAkgkA1AAQA3AAAkAkQAkAkAAA0QAAA2gkAjQgkAjg3AAQg2AAgjgjgAgGgJQgVAUAAAfQAAAfAVAVQATAVAeAAQAfAAAVgVQAUgVAAgfQAAgfgUgUQgVgVgfAAQgeAAgTAVgAighuQgJgKAAgNQAAgNAJgKQAKgJAOAAQANAAAKAJQAJAKAAANQAAANgJAKQgKAJgNAAQgOAAgKgJg");
	this.shape_154.setTransform(306.2623,124.8907,1.101,1.0997);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("ABnB7IAAjwIA4AAIAADwgAAKB7IAAiEQAAgjgRgQQgNgLgXgBQgbAAgPASQgQASAAAeIAACBIg5AAIAAjwIAxAAIAAAjQAMgTAWgKQAVgKAaAAQAnAAAZAXQAfAcAAA1IAACMg");
	this.shape_155.setTransform(276.7293,129.262,1.101,1.0997);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#0A0B09").s().p("AsGEQQgkgmABhCIAAi8IA5AAIAAC+QAAApATAXQATAWAjAAQAkAAATgWQATgXAAgpIAAi+IA5AAIAAC8QAABCgjAmQgiAlg+AAQg9AAgiglgALyhAIAAiDQAAg/g3AAQgbAAgPASQgQARAAAfIAACAIg4AAIAAjvIAwAAIAAAiQAMgTAWgKQAVgKAaAAQAoAAAaAYQAeAbABA2IAACLg");
	this.shape_156.setTransform(315.9232,109.1927,1.101,1.0997);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("ADTCXQgMgNgBgVIAAiVIgcAAIAAguIAcAAIAAg3IA2gNIAABEIAkAAIABAuIglAAIAACJQAAAMAOAAQANAAAKgCIAAAuQgKAEgjAAQgVAAgMgOgAgKCSQgigWAAgiIAygKIABADQACARAOAKQAOAKAWAAQATAAAKgHQALgHAAgMQAAgMgQgIQgJgEgbgIQgogKgQgLQgcgTAAghQAAgfAZgUQAYgUApAAQAnAAAaAVQAbAWgBAiIgvAHIgCABIgBgJQgDgPgLgIQgKgJgSAAQgQAAgKAHQgKAGABALQAAALAPAHQAJAEAaAHQApALASALQAdATAAAkQAAAigaAUQgbATgtAAQgnAAgcgTgAkLCDQgigjAAg3QAAg0AigkQAhgkA2AAQA0AAAhAiQAmAmgCBFIAAADIi5AAQADAZATAQQASAPAcAAQAbAAASgOQAOgJAFgNIABgBIABAAIArAWQgOAcgeASQgeARgkAAQg3AAgjgigAh1AQQgCgWgRgPQgTgPgZAAQgZAAgTAPQgRAPgDAWIB/AAIAAAAgAI6ChIAAjvIAvAAIAAAeQALgSAWgIQAUgIAbAEIACAAIAAAyIgEAAQgkgFgTAPQgNALgBAVIABCTgAmrChIgBgCQgyi/gIgxQgIAvg1DBIAAACIg/AAIhYlFIA8AAIABACQA0DIAJAxQAJgxA0jIIAAgCIA9AAIAAACQAxC7ALA6QAIgtA0jIIABgCIA6AAIhZFFg");
	this.shape_157.setTransform(300.7851,84.4223,1.101,1.0997);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("ACRELIljpoIEvAAIDbF7QASAeAhAAQAiAAARgeIjbl7IEwAAIB1DMIjuGcQgwBThEAAQhFAAgwhTgAkEELIljpoIEvAAIFAIqIgjA+QgwBThEAAQhFAAgwhTg");
	this.shape_158.setTransform(143.8437,105.5558,1.1011,1.0998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]}).wait(1));

	// Logo_BG
	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFDD00").s().p("Egr/AQ4MAAAghvMBX/AAAIt1XpQnnJLqJA7g");
	this.shape_159.setTransform(281.575,108.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_159).wait(1));

	// BG
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("EhUXCWAMAAAkr/MCovAAAMAAAEr/g");
	this.shape_160.setTransform(540,960);

	this.timeline.addTween(cjs.Tween.get(this.shape_160).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(540,960,540,960);
// library properties:
lib.properties = {
	id: 'F151777B57594A68B33C452229AB69BC',
	width: 1080,
	height: 1920,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F151777B57594A68B33C452229AB69BC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;