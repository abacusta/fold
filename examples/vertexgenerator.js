var fs = require("browserify-fs");
var slider = document.getElementById("myRange");
var slidertext= document.getElementById("slidervalue");
var FOLD = activatefold('fold');
slider.oninput = function() {
    slidertext.innerHTML = this.value;
    var angle1 = this.value;
    angle1 = angle1+90
    var angle2 = 45+angle1/2;
    angle1 = angle1 * Math.PI/180;
    angle2 = angle2 * Math.PI/180;
    var v0 = [(Math.sqrt(2))*(Math.sin(angle2)),0,1-(Math.sqrt(2)*Math.cos(angle2))];
    var v1 = [Math.sin(angle1)/Math.sqrt(2),Math.sin(angle1)/Math.sqrt(2),1-Math.cos(angle1)];
    var v2 = [0,Math.sqrt(2)*Math.sin(angle2),1- (Math.sqrt(2)*Math.cos(angle2))];
    var v3 = [Math.sin(angle1)/Math.sqrt(2),-1*Math.sin(angle1)/Math.sqrt(2),1-Math.cos(angle1)];
    var v4 = [0,0,1];
    var v5 = [-1*Math.sin(angle1)/Math.sqrt(2),Math.sin(angle1)/Math.sqrt(2),1-Math.cos(angle1)];
    var v6 = [0,-Math.sqrt(2)*Math.sin(angle2),1-(Math.sqrt(2)*Math.cos(angle2))];
    var v7 = [-Math.sin(angle1)/Math.sqrt(2),-Math.sin(angle1)/Math.sqrt(2),1-Math.cos(angle1)];
    var v8 = [-Math.sqrt(2)*Math.sin(angle2),0,1-Math.sqrt(2)*Math.cos(angle2)];
    var allcoords = "[".concat(v0.toString(),"],[",v1.toString(),"],[",v2.toString(),"],\n      [",v3.toString(),"],[",v4.toString(),"],[",v5.toString(),"],\n      [",v6.toString(),"],[",v7.toString(),"],[",v8.toString(),"]");
    var generic = "{\n" +
        "  \"file_spec\": 1,\n" +
        "  \"file_creator\": \"text editor\",\n" +
        "  \"file_author\": \"Aaron Yu\",\n" +
        "  \"file_title\": \"Preliminary Base 3D Full\",\n" +
        "  \"file_classes\": [\"singleModel\"],\n" +
        "  \"frame_title\": \"Preliminary Base Crease Pattern - 3D Fully Folded\",\n" +
        "  \"frame_classes\": [\"foldedForm\"],\n" +
        "  \"frame_attributes\": [\"3D\"],\n" +
        "  \"vertices_coords\": [\n" +
        "      [1.2247448713915892,0,0.2928932188134523],[0.3535533905932737,0.3535533905932737,0.1339745962155613],[0,1.2247448713915892,0.4999999999999999],\n" +
        "      [0.3535533905932737,-0.3535533905932737,0.1339745962155613],[0,0,1],[-0.3535533905932737,0.3535533905932737,0.1339745962155613],\n" +
        "      [0,-1.2247448713915892,0.4999999999999999],[-0.3535533905932737,-0.3535533905932737,0.1339745962155613],[-1.2247448713915892,0,0.2928932188134523]\n" +
        "    ],\n" +
        "    \"faces_vertices\": [\n" +
        "      [1,4,0], [2,4,1], [2,5,4], [8,4,5],\n" +
        "      [8,7,4], [7,6,4], [6,3,4], [3,0,4]\n" +
        "    ],\n" +
        "    \"edges_vertices\": [\n" +
        "      [0, 1], [1, 2], [2, 5], [5, 8], [8, 7], [7, 6], [6, 3], [3, 0],\n" +
        "      [4, 0], [4, 1], [4, 2], [4, 3], [4, 5], [4, 6], [4, 7], [4, 8]\n" +
        "    ],\n" +
        "    \"edges_assignment\": [\n" +
        "    \"B\",\n" +
        "    \"B\",\n" +
        "    \"B\",\n" +
        "    \"B\",\n" +
        "    \"B\",\n" +
        "    \"B\",\n" +
        "    \"B\",\n" +
        "    \"B\",\n" +
        "    \"M\",\n" +
        "    \"V\",\n" +
        "    \"M\",\n" +
        "    \"V\",\n" +
        "    \"V\",\n" +
        "    \"M\",\n" +
        "    \"V\",\n" +
        "    \"M\"\n" +
        "    ],\n" +
        "  \"faceOrders\": [\n" +
        "  [7,0,-1], [1,2,-1], [3,4,-1], [5,6,-1]\n" +
        "  ]\n" +
        "}";
    var startpos = generic.indexOf("[1.224");
    var endpos = generic.indexOf("559]");
    var coords = generic.slice(startpos, endpos+4);
    var beginning = generic.slice(0,startpos);
    var end = generic.slice(endpos+4);
    generic = beginning.concat(allcoords,end);
    console.log(generic);

    fs.writeFile("/home/variable_preliminarybase.fold", generic, function(err) {
        if (err) throw err;


    });
    FOLD.fold.vertices_coords = [v0,v1,v2,v3,v4,v5,v6,v7,v8]

};