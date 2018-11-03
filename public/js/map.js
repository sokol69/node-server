/*Google Map*/

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 56.86220568, lng: 35.91911316},
    zoom: 13,
  });
  var styles = [
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': [
        {
          'color': '#4ee2cc',
        },
      ],
    },
    {'featureType':'landscape','elementType':'all','stylers':[{'color':'#ffffff'}]},
  
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#d5d5d5'}],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{color: '#d5d5d5'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#d5d5d5'}],
    },
  
  ];
  map.setOptions({styles: styles});
}

initMap();