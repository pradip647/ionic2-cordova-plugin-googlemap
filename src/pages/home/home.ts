import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;
  marker:any;

  constructor(public navCtrl: NavController) {

  }

// Load map only after view is initialized
ngAfterViewInit() {
 this.loadMap();
}

/*
     <plugin name="plugin.google.maps" spec="~1.3.9">
        <variable name="API_KEY_FOR_ANDROID" value="AIzaSyDS7AxBMmoeRanMxs4-VJJ87I9hMKp-d1E" />
        <variable name="API_KEY_FOR_IOS" value="AIzaSyCMKcHCSyv6WT4tK0eKs7aTSWNI07dsfdM" />
    </plugin>
*/



loadMap() {
 
        let location =new LatLng(43.0741904,-89.3809802);

        this.map = new GoogleMap('map', {
            'backgroundColor': 'white',
            'controls': {
                'compass': false,
                'myLocationButton': false,
                'indoorPicker': false,
                'zoom': true
            },
            'gestures': {
                'scroll': true,
                'tilt': true,
                'rotate': true,
                'zoom': true
            },
            'camera': {
                'latLng': location,
                'tilt': 30,
                'zoom': 15//,
               // 'bearing': 50
            }
        });

 let markerOptions: MarkerOptions = {
   position: location,
   title: 'Ionic'
 };

 this.marker = this.map.addMarker(markerOptions)
   .then((marker: Marker) => {
      marker.showInfoWindow();
    });

 }
 
markerSetTo:any;
/*loadMap(){

        let location = new LatLng(43.0741904,-89.3809802);

        this.map = new GoogleMap('map', {
            'backgroundColor': 'white',
            'controls': {
                'compass': false,
                'myLocationButton': false,
                'indoorPicker': false,
                'zoom': true
            },
            'gestures': {
                'scroll': true,
                'tilt': true,
                'rotate': true,
                'zoom': true
            },
            'camera': {
                'latLng': location,
                'tilt': 30,
                'zoom': 15//,
               // 'bearing': 50
            }
        });
        let info = "hello";
        this.map.on(GoogleMapsEvent.CAMERA_CHANGE).subscribe(res =>{ 
        });
        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
           // this.map.clear();
            console.log('Map is ready!');
            this.markerSetTo = 'pickup';
        });

    }
*/







}
