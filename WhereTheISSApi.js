 // Making a map and tiles
      // Setting a higher initial zoom to make effect more obvious
      const mymap = L.map('issMap').setView([10, 10], 6);
      const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';  //This is how leafelet.js indicates how the map tiles would be shown 
      const tiles = L.tileLayer(tileUrl, { attribution });
      tiles.addTo(mymap);

      // Making a marker with a custom icon
      const issIcon = L.icon({
        iconUrl: './images/iss200.png',
        iconSize: [50, 32],
        iconAnchor: [25, 16],
        popupAnchor: [-3, -76] ,
        // shadowUrl: 'new.png', 
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
      });
      let marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);  //Adding the curent live altitude and logitude to the live map div

      const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

      let firstTime = true; //Sets the soom once the map is first loaded

      async function getISS() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude } = data;

        // Always set the view to current lat lon and zoom!
        mymap.setView([latitude, longitude], mymap.getZoom());
        marker.setLatLng([latitude, longitude]);

        document.getElementById('lat').textContent = latitude.toFixed(2); /*  Displays only the 2 first numbers after the . */
        document.getElementById('lon').textContent = longitude.toFixed(2); /*  Displays only the 2 first numbers after the . */
      }

      
// const control = L.controls({
//   setPosition:'bottomleft'
// })

      getISS();
      setInterval(getISS, 1000);

      function goToMyCurrentLocationFunc(){
        window.location.href = "geolocation.html";
      
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