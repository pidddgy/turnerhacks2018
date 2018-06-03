import React from 'react';
import '../css/Map.css'

const Map = (props) => {
    return(
      <div class="embed-container">
        <iframe width="250" height="200" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" title="sasdfsa" src="//marcus-chong.maps.arcgis.com/apps/Embed/index.html?webmap=683d63bdd05e45e8b53bac2274e01869&extent=-80.1838,43.5941,-79.2541,43.8408&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"></iframe>
      </div>
    )
}

export default Map;