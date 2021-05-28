function getLocation(){
    navigator.geolocation.getCurrentPosition(showLocation,errorHandler)
}
let output = document.getElementById('mapArea')
function showLocation(position){
   
    
    let myLatitude = position.coords.latitude
    let myLongitude = position.coords.longitude
    
    // output.innerHTML = `Latitude = ${myLatitude} , Longitude =  ${myLongitude}`


    let options = {
         center : {lat:myLatitude, lng:myLongitude},
         zoom:10
    }
    
    let myMap = new google.maps.Map(output,options)
    let myMarker = new google.maps.Marker({
         position: {lat:myLatitude, lng:myLongitude},
         map: myMap
    })

}

function errorHandler(error){
      switch(error.code){
          case error.PERMISSION_DENIED:
              output.innerHTML = "The application does not have permission to make use of Location services"
              break;

          case error.POSITION_UNAVAILABLE:
                output.innerHTML = "The location of the device is uncertain"
                break;

          case error.TIMEOUT:
              output.innerHTML = "The request to get user location timeout"
              break;

      }
}
