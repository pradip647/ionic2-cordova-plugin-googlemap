import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';*/
import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker
} from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

map: GoogleMap;
marker:any;

  constructor(public navCtrl: NavController) {}

// Load map only after view is initialized
ngAfterViewInit() {
 this.loadMap();
}

loadMap(){

         let location = new GoogleMapsLatLng(43.0741904,-89.3809802);

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


        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
    
            this.map.clear();
            let markerOptions: GoogleMapsMarkerOptions = {
                position: location,
                title:"current Location..."
            };

              this.map.addMarker(markerOptions)
                .then((marker: GoogleMapsMarker) => {
                    marker.showInfoWindow();
                    let position: CameraPosition = {
                        target: location,
                        zoom: 15,
                        tilt: 30
                    };
                    this.map.moveCamera(position);


                });

            });

            console.log('Map is ready!');


    }






}
