angular.module('starter.directives', [])

.directive('map', function() {
    return {
        restrict: 'E',
        scope: {
            onCreate: '&'
        },
        link: function ($scope, $element, $attr) {
            function initialize() {
                var mapOptions = {
                    center: new google.maps.LatLng(41.85, -87.65),
                    zoom: 18,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map($element[0], mapOptions);
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(41.85, -87.65),
                    title:"Hello World!"
                });

                // To add the marker to the map, call setMap();
                marker.setMap(map);

                var chicago = {lat: 41.85, lng: -87.65};
                var indianapolis = {lat: 39.79, lng: -86.14};

                var directionsDisplay = new google.maps.DirectionsRenderer({
                    map: map
                });

                // Set destination, origin and travel mode.
                var request = {
                    destination: indianapolis,
                    origin: chicago,
                    travelMode: google.maps.TravelMode.DRIVING
                };

                // Pass the directions request to the directions service.
                var directionsService = new google.maps.DirectionsService();
                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        // Display the route on the map.
                        directionsDisplay.setDirections(response);
                    }
                });

                $scope.onCreate({map: map});

                // Stop the side bar from dragging when mousedown/tapdown on the map
                google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
                    e.preventDefault();
                    return false;
                });
            }

            if (document.readyState === "complete") {
                initialize();
            } else {
                google.maps.event.addDomListener(window, 'load', initialize);
            }
        }
    }
});
