
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

 document.addEventListener('wheel', function(event){
 	        // the Y location of the whole page
	  	 	var Yoffsetin_page = window.pageYOffset;
            
            if(Yoffsetin_page<3800){  // overview
            	map.flyTo([-14.867346,26.133576], 4);
            	
            	overview_marker(icon1_marker);
            	smaller_overview_marker(icon2_marker);
            	smaller_overview_marker(icon3_marker);
            	overview_marker(icon4_marker);
            	smaller_overview_marker(icon5_marker);
            	smaller_overview_marker(icon6_marker);
            	overview_marker(icon7_marker);
            	overview_marker(icon8_marker);
            	overview_marker(icon9_marker);
            	
            	function overview_marker(marker){
            		marker.valueOf()._icon.style.width = '50px';
            		marker.valueOf()._icon.style.height = '50px';
            		marker.valueOf()._icon.style.marginTop = '-25px';
            		marker.valueOf()._icon.style.marginLeft = '-25px';
            	}
            
            	
            }
            //1
            if(Yoffsetin_page>=3800 && Yoffsetin_page<5100){
            	map.flyTo([0.580610, 36.522751], 8);
            	
            	zoomein_marker(icon1_marker);
            	zoomein_marker(icon2_marker);
            	zoomein_marker(icon3_marker);
            	zoomein_marker(icon4_marker);
            	zoomein_marker(icon5_marker);
            	zoomein_marker(icon6_marker);
            	zoomein_marker(icon7_marker);
            	zoomein_marker(icon8_marker);
            	zoomein_marker(icon9_marker);

            }
            //2
            if(Yoffsetin_page>=5100 && Yoffsetin_page<6400){
            	map.flyTo([-2.650977, 37.558198], 10)
            }
            //3
            if(Yoffsetin_page>=6400 && Yoffsetin_page<7300){
            	map.flyTo([-2.337577, 34.433289], 10)
            }
            //4
            if(Yoffsetin_page>=7300 && Yoffsetin_page<8600){
            	map.flyTo([-13.031022, 31.945922], 10)
            }
            //5
            if(Yoffsetin_page>=8600 && Yoffsetin_page<9900){
            	map.flyTo([-19.160191, 26.188315], 10)
            }
            //6
            if(Yoffsetin_page>=9900 && Yoffsetin_page<11000){
            	map.flyTo([-18.711140, 24.899580], 10)
            }
            //7
            if(Yoffsetin_page>=11000 && Yoffsetin_page<12200){
            	map.flyTo([-18.928923, 15.374744], 8)
            }
            //8
            if(Yoffsetin_page>=12200 && Yoffsetin_page<13400){
            	map.flyTo([-24.076983, 32.551281], 8)
            }
            //9
            if(Yoffsetin_page>=13400 && Yoffsetin_page<15371){
            	map.flyTo([-33.491990, 24.743314], 8)
            }
         }, false);
         
    // different marker sizes     
	function overview_marker(marker){
		marker.valueOf()._icon.style.width = '50px';
		marker.valueOf()._icon.style.height = '50px';
		marker.valueOf()._icon.style.marginTop = '-25px';
		marker.valueOf()._icon.style.marginLeft = '-25px';
	}
	
	function smaller_overview_marker(marker){
		marker.valueOf()._icon.style.width = '30px';
		marker.valueOf()._icon.style.height = '30px';
		marker.valueOf()._icon.style.marginTop = '-15px';
		marker.valueOf()._icon.style.marginLeft = '-15px';
	}
            	
	function zoomein_marker(marker){
		marker.valueOf()._icon.style.width = '200px';
    	marker.valueOf()._icon.style.height = '200px';
    	marker.valueOf()._icon.style.marginTop = '-100px';
    	marker.valueOf()._icon.style.marginLeft = '-100px';
    }	  	
	            
	            
	  	 var map = L.map('leaf-map', {
               minZoom: 2,
               maxZoom: 5
          });

          map.setView([-14.867346,26.133576], 4);
          map.scrollWheelZoom.disable();
          map.dragging.disable();

/*
           var OpenMapSurfer_Roads = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
	maxZoom: 20,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

           OpenMapSurfer_Roads.addTo(map);
  */
  

 var OpenStreetMap_DE = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
         OpenStreetMap_DE.addTo(map);
     
          map.zoomControl.disable();
         
         // draw markers
          var icon1 = L.icon({
                      iconUrl: 'img/elephant-facing-right.png',
                      iconSize: [50, 50],
                      iconAnchor: [25, 25],
                      className: 'blinking'
                     });         

           var icon1_pos = [0.580610, 37.522751];
           var icon1_marker = L.marker(icon1_pos, {
                            title: "Samburu National Reserve - Kenya",
                            icon: icon1
                        });
           icon1_marker.addTo(map); 
           
           var icon2 = L.icon({
                      iconUrl: 'img/elephant-facing-right.png',
                      iconSize: [30, 30],
                      iconAnchor: [15, 15],
                      className: 'blinking'
                     });         
                      
           var icon2_pos = [-2.650977, 37.258198];
           var icon2_marker = L.marker(icon2_pos, {
                            title: "Amboseli National Park - Kenya",
                            icon: icon2
                        });
           icon2_marker.addTo(map); 
           
           var icon3 = L.icon({
                      iconUrl: 'img/elephant-facing-right.png',
                      iconSize: [30, 30],
                      iconAnchor: [15, 15],
                      className: 'blinking'
                     });         
                      
           var icon3_pos = [-2.337577, 34.833289];
           var icon3_marker = L.marker(icon3_pos, {
                            title: "Serengeti National Park - Tanzania",
                            icon: icon3
                        });
           icon3_marker.addTo(map); 
           
           var icon4 = L.icon({
                      iconUrl: 'img/elephant-facing-right.png',
                      iconSize: [50, 50],
                      iconAnchor: [25, 25],
                      className: 'blinking'
                     });         
                      
           var icon4_pos = [-13.031022, 31.545922];
           var icon4_marker = L.marker(icon4_pos, {
                            title: "South Luangwa National Park - Zambia",
                            icon: icon4
                        });
           icon4_marker.addTo(map); 
           
           var icon5 = L.icon({
                      iconUrl: 'img/elephant-facing-right.png',
                      iconSize: [30, 30],
                      iconAnchor: [15, 15],
                      className: 'blinking'
                     });         
                      
           var icon5_pos = [-19.160191, 26.588315];
           var icon5_marker = L.marker(icon5_pos, {
                            title: "Hwange National Park - Zimbabwe",
                            icon: icon5
                        });
           icon5_marker.addTo(map); 
           
           var icon6 = L.icon({
                      iconUrl: 'img/elephant-facing-right.png',
                      iconSize: [30, 30],
                      iconAnchor: [15, 15],
                      className: 'blinking'
                     });         
                      
           var icon6_pos = [-18.711140, 24.499580];
           var icon6_marker = L.marker(icon6_pos, {
                            title: "Chobe National Park & Delta - Botswana",
                            icon: icon6
                        });
           icon6_marker.addTo(map); 
           
           var icon7 = L.icon({
                      iconUrl: 'img/elephant-facing-right.png',
                      iconSize: [50, 50],
                      iconAnchor: [25, 25],
                      className: 'blinking'
                     });         
                      
           var icon7_pos = [-18.928923, 16.374744];
           var icon7_marker = L.marker(icon7_pos, {
                            title: "Etosha National Park - Namibia",
                            icon: icon7
                        });
           icon7_marker.addTo(map); 
           
           var icon8 = L.icon({
                      iconUrl: 'img/elephant-facing-right.png',
                      iconSize: [50, 50],
                      iconAnchor: [25, 25],
                      className: 'blinking'
                     });         
                      
           var icon8_pos = [-24.076983, 31.551281];
           var icon8_marker = L.marker(icon8_pos, {
                            title: "Kruger National Park - South Africa",
                            icon: icon8
                        });
           icon8_marker.addTo(map); 
           
           var icon9 = L.icon({
                      iconUrl: 'img/elephant-facing-right.png',
                      iconSize: [50, 50],
                      iconAnchor: [25, 25],
                      className: 'blinking'
                     });         
                      
           var icon9_pos = [-33.491990, 25.743314];
           var icon9_marker = L.marker(icon9_pos, {
                            title: "Addo Elephant National Park - South Africa",
                            icon: icon9
                        });
           icon9_marker.addTo(map); 


var iScrollPos = 0;

$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        //Scrolling Down
        /*
        var curvePath = L.curve(['M',[46.86019101567027,-29.047851562500004],
					   
					              'T',[46.6795944656402,-11.0302734375]], {color:'red',dashArray: 5, animate: {duration: 3000, iterations: Infinity}}).addTo(map);
        
        */
    } else {
       //Scrolling Up
    }
    iScrollPos = iCurScrollPos;
});

// draw stright polylines between points
/*
var point1 = new L.LatLng(0.580610, 37.522751);
var point2 = new L.LatLng(-2.650977, 37.258198);
var point3 = new L.LatLng(-2.337577, 34.833289);
var point4 = new L.LatLng(-13.031022, 31.545922);
var point5 = new L.LatLng(-19.160191, 26.588315);
var point6 = new L.LatLng(-18.711140, 24.499580);
var point7 = new L.LatLng(-18.928923, 16.374744);
var point8 = new L.LatLng(-24.076983, 31.551281);
var point9 = new L.LatLng(-33.491990, 25.743314);
var pointList = [point1, point2,point3, point4,point5, point6,point7, point8,point9];

var elephantPolyline = new L.polyline(pointList, {
color: 'red',
weight: 7,
opacity: 0.5,
smoothFactor: 1
});
elephantPolyline.addTo(map);
*/


//draw curve lines between points
var path1 = L.curve(['M',[0.580610, 37.522751],
					   'Q',[-1.133780,38.072780],
						   [-1.699401,38.012355],
					   'T',[-2.650977, 37.258198]], {color:'rgba(36,147,110,0.7)',opacity: 1,weight:13}).addTo(map);

var path2= L.curve(['M',[-2.650977, 37.258198],
					   'Q',[-2.885677,35.942133],
						   [-2.852759,35.601557],
					   'T',[-2.337577, 34.833289]], {color:'rgba(36,147,110,0.7)',opacity: 1,weight:13}).addTo(map);
					   
var path3= L.curve(['M',[-2.337577, 34.833289],
					   'Q',[-6.398851,30.448495],
						   [-5.069384,30.712624],
					   'T',[-13.031022, 31.545922]], {color:'rgba(36,147,110,0.7)',opacity: 1,weight:13}).addTo(map);
					   
var path4= L.curve(['M',[-13.031022, 31.545922],
					   'Q',[-14.722237,27.641084],
						   [-15.674258,26.975171],
					   'T',[-19.160191, 26.588315]], {color:'rgba(36,147,110,0.7)',opacity: 1,weight:13}).addTo(map);
					   
var path5= L.curve(['M',[-19.160191, 26.588315],
					   'Q',[-19.141327,25.433809],
						   [-19.096856,25.161490],
					   'T',[-18.711140, 24.499580]], {color:'rgba(36,147,110,0.7)',opacity: 1,weight:13}).addTo(map);

var path6= L.curve(['M',[-18.711140, 24.499580],
					   'Q',[-17.831440,20.382014],
						   [-17.871954,21.358608],
					   'T',[-18.928923, 16.374744]], {color:'rgba(36,147,110,0.7)',opacity: 1,weight:13}).addTo(map);

var path7= L.curve(['M',[-18.928923, 16.374744],
					   'Q',[-22.957180,23.074625],
						   [-23.341047,24.942301],
					   'T',[-24.076983, 31.551281]], {color:'rgba(36,147,110,0.7)',opacity: 1,weight:13}).addTo(map);
					   
var path8= L.curve(['M',[-24.076983, 31.551281],
					   'Q',[-29.284119,30.106446],
						   [-30.313731,29.557130],
					   'T',[-33.491990, 25.743314]], {color:'rgba(36,147,110,0.7)',opacity: 1,weight:13}).addTo(map);
					   
// Click to get the coordinates in cosole.
/*
function onMapClick(e) {
    console.log(e.latlng);
}
map.on('click', onMapClick);
*/