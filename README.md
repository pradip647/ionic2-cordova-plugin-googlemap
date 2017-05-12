# ionic2-Cordova Plugin Googlemaps (Android and IOS)
This example is showing native googlemap using Cordova Plugin Googlemaps plugin.

## Working Code
To run the above tested and ready code please clone the repository and use the following commands in your project root folder.

```
npm install 
ionic platform add android (or ios)
ionic build android (or ios)
ionic run android (or ios)
```

## Step by Step Working Example

### Requirements
* Ionic 2
* cordova plugin googleplus (https://ionicframework.com/docs/native/google-maps)

### Installing cordova plugin googleplus Into Your Project
From the root of your, execute the following:
```
cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps#1.3.9 --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"
npm install ionic-native@2.2.11 --save
```
To get your variable API_KEY_ for ANDROID and IOS [Developer Console](https://console.developers.google.com) ,create one Project,
 then go to[ Project's credentials](https://console.developers.google.com), ENABLE API

## Usage

### home component
```
import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker
} from 'ionic-native';

export class HomePage {
map: GoogleMap;

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
                'zoom': 15
            }
        });


        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
    
            this.map.clear();
            let markerOptions: GoogleMapsMarkerOptions = {
                position: location,
                title:"Current Location..."
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

```

### Home html
```
  <ion-content>
   <div id="map">
  </ion-content>
```

### home scss
```
 #map { height: 100%; }
```

### Resources

* Ionic 2 - [http://www.ionicframework.com](http://www.ionicframework.com)

* Ionic2 Native - [https://ionicframework.com/docs/v2/native/](https://ionicframework.com/docs/v2/native/)

* Google Developer Console - [https://console.developers.google.com](https://console.developers.google.com)
