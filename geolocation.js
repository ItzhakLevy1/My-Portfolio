if('geolocation' in navigator){
    // console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
        console.log( position.coords.latitude,  position.coords.longitude);

        var myLatitude =  position.coords.latitude;
        var myLongitude =  position.coords.longitude;

//  The following codewould show my current location :

// Making a map and tiles
      // Setting a higher initial zoom to make effect more obvious
      const mymap = L.map('myMap').setView([10, 10], 6);
      const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';  //This is how leafelet.js indicates how the map tiles would be shown 
      const tiles = L.tileLayer(tileUrl, { attribution });
      tiles.addTo(mymap);

      // Making a marker with a custom icon
      const myIcon = L.icon({
        iconUrl: './images/smiley.png',
        iconSize: [100, 100],
        iconAnchor: [25, 16],
        popupAnchor: [-3, -76] ,
        // shadowUrl: 'new.png', 
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
      });
      let marker = L.marker([myLatitude, myLongitude], { icon: myIcon }).addTo(mymap);  //Adding the curent live altitude and logitude to the live map div

      const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

      let firstTime = true; //Sets the soom once the map is first loaded

      async function getISS() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude } = data;

        // Always set the view to current lat lon and zoom!
        mymap.setView([myLatitude, myLongitude], mymap.getZoom());
        marker.setLatLng([myLatitude, myLongitude]);

        document.getElementById('latMy').textContent = myLatitude.toFixed(2);
        document.getElementById('lonMy').textContent = myLongitude.toFixed(2);
        
      }

      
// const control = L.controls({
//   setPosition:'bottomleft'
// })

      getISS();
      // setInterval(getISS, 1000);

});
}else{
    alert('please enable your location')

}

function project3ImageFunc(){
    window.location.href = "WhereTheISSApi.html";
  
  }

  //---------- Time / clock-----------
  function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "PM";
    
    if(h == 0){
        h = 24;
    }
    
    if(h > 24){
        h = h - 24;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();