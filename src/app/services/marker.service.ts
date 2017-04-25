import {Injectable} from '@angular/core';
import {Init} from '../init-markers';

@Injectable()
    export class MarkerService extends Init{
        constructor(){
            super();
            console.log('MarkerService Initialized...');
            this.load();
        }

        getMarkers(){
            var markers = JSON.parse(localStorage.getItem('markers'));
            return markers;
        }

        addMarker(newMarker){
            //Fetch markers
            let markers =JSON.parse(localStorage.getItem('markers'));

            // Push to array
            markers.push(newMarker);

            // Set ls markers again
            localStorage.setItem('markers', JSON.stringify(markers));
        }
        updateMarker(marker, newLat, newLng){
            //Fetch markers
            let markers =JSON.parse(localStorage.getItem('markers'));
            
            for(let i =0; i<markers.length;i++){
                // Check to see if this is the marker to update
                if(markers[i].lat === marker.lat && marker.lng === markers[i].lng){
                    // Update marker
                    markers[i].lat = newLat;
                    markers[i].lng = newLng
                }
            }

             // Set ls markers again
            localStorage.setItem('markers', JSON.stringify(markers));
        }

        removeMarker(marker){
            //Fetch markers
            let markers =JSON.parse(localStorage.getItem('markers'));
            
            for(let i =0; i<markers.length;i++){
                // Check to see if this is the marker to update
                if(markers[i].lat === marker.lat && marker.lng === markers[i].lng){
                    // Update marker
                    markers.splice(i,1);
                }
            }
            // Set ls markers again
            localStorage.setItem('markers', JSON.stringify(markers));
        }
    }
