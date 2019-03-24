
var width = 800;
var height = 400;  
var active = d3.select(null);
var mouseover = d3.select(null);

// initial projection
// this is the conic conformal projection
var projection = d3.geoConicConformal();

var pathGenerator = d3.geoPath()
    //d3.geoPath() creates a function that converts geographic geometries into SVG path attributes
    .projection(projection);
    
var zoom = d3.zoom()
    .scaleExtent([1, 8])
    .extent([[0, 0], [width, height]])
    .on("zoom", zoomed);

// uncomment this to allow manual (mouse-wheel) zooming    
//d3.select(".map").call(zoom);

// overall
var type = 0;
d3.json("bezirke_income.geojson", function(error, geometry) {

    projection.fitExtent([[15,15],[width-15,height-15]], geometry);
    

    // draw intial map
    drawMap(geometry.features, overallColor);
    
    // set up event handlers
    d3.select("#overallIncomeButton").on("click", function() {
        drawMap(geometry.features, overallColor);
        type = 0;// 0 represent overall
    });

    d3.select("#medianIncomeM_Button").on("click", function() {
        drawMap(geometry.features, maleIncomeColor);
        type = 1 // 1 represent male
    });
    
    d3.select("#medianIncomeF_Button").on("click", function() {
        drawMap(geometry.features, femaleIncomeColor);
        type = 2// 2 represent female
    });

});


// color Scale
var colorScale = d3.scaleQuantize()
    // after I tried several times I think the result of 1300-2800 is fine.
    .domain([1300,2800])
    .range(['#B2DFDB','#80CBC4','#4DB6AC','#26A69A','#00897B','#00695C','#004D40'])
;

//overall color
var overallColor = function(d) {
    return colorScale(d.properties.income_med);
};

var maleIncomeColor = function(d) {
    return colorScale(d.properties.income_med_m);
};

var femaleIncomeColor = function(d) {
    return colorScale(d.properties.income_med_f);
};

var tooltip = d3.select("body")
	.append("pre")
	.style("position", "absolute")
	.style("z-index", "10")
	.style("visibility", "hidden")
	.style("font-size","1.1rem")
	.style("color","white")
	.style("font-weight","500")
	.style("background-color","rgb(120,144,156)")
	.style("opacity", "0.8")

function drawMap(data, colorFunction) {
    
    d3.select(".map .mapRoot")
        .selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr("fill", colorFunction)
        // draw path via 'd' attribute
        .attr("d", pathGenerator)
        .on("click", zoomToObject)
        .on("mouseover", popupAttributes)
		.on("mousemove", function(d){
			return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
		})
		.on("mouseout", function(){
			return tooltip.style("visibility", "hidden");}
		);
    ;
    // the existing elements  
    var selection = d3.select(".map .mapRoot")
        .selectAll("path")
        .data(data);

    // what to do with EXISTING elements
    selection
        .transition()
        .duration(800)
        .attr("fill", colorFunction)
    ;
}

function popupAttributes(d){
	var d_area = d.properties.area;
	var d_code = d.properties.code;
	var d_name = d.properties.name;
	var d_population = d.properties.population;
	var d_income_med = d.properties.income_med;
	var d_income_med_f = d.properties.income_med_f;
	var d_income_med_m = d.properties.income_med_m;
	
	tooltip.style("visibility", "visible");
	if(type == 0){
	tooltip.text("Name: "+ d_name + "\nArea: " + d_area + "\nPopulation: " + d_population +"\nMedian Income: " + d_income_med)
   }
	if(type == 1){
	tooltip.text("Name: "+ d_name + "\nArea: " + d_area + "\nPopulation: " + d_population +"\nMale Median Income: " + d_income_med_m)
   }
	if(type == 2){
	tooltip.text("Name: "+ d_name + "\nArea: " + d_area + "\nPopulation: " + d_population +"\nFemale Median Income: " + d_income_med_f)
   }
	
	
	// toggle "active" class from old to new selection// highlight the region
    mouseover.classed("mouseover",false)
    mouseover = d3.select(this).classed("mouseover",true);
	
}

function zoomToObject(d) {

    // if path is already the selected one, reset zoom
    if (active.node() === this) {
        reset();
        return;
    }


    // toggle "active" class from old to new selection
    active.classed("active", false);
    active = d3.select(this).classed("active", true);

    // calculate zoom bounds
    var bounds = pathGenerator.bounds(d),
        dx = bounds[1][0] - bounds[0][0],
        dy = bounds[1][1] - bounds[0][1],
        x = (bounds[0][0] + bounds[1][0]) / 2,
        y = (bounds[0][1] + bounds[1][1]) / 2,
        scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
        translate = [width / 2 - scale * x, height / 2 - scale * y];

    // animate transform attribute of map element
    d3.select(".map").transition()
        .duration(1200)
        .call(zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1]).scale(scale));
}

function reset() {
    active.classed("active", false);
    active = d3.select(null);

    d3.select(".map").transition()
      .duration(1200)
      .call(zoom.transform, d3.zoomIdentity);
}

function zoomed() {
    // d3.event will contain the transformation calculated for us
    d3.select(".map .mapRoot").attr("transform", d3.event.transform);

}


var legend = d3.select('#legend')
  .append('ul')
  .attr('class', 'list-inline');

var keys = legend.selectAll('li.key')
                 .data(colorScale.range());

keys.enter().append('li')
    .attr('class', 'key')
    .style('border-top-color', String)
    .text(function(d) {
        var r = colorScale.invertExtent(d);
        return formats.percent(r[0]);
    });
 
