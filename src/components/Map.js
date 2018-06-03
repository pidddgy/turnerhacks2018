import React from 'react';
import '../css/Map.css'

const Map = (props) => {
    return(
      <div class="embed-container">
        <iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="asfsdfdsfdsf" src="//marcus-chong.maps.arcgis.com/apps/Embed/index.html?webmap=769f1a0f67b14839bb684f64ded48d39&extent=-79.8472,43.6499,-79.6677,43.7116&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"></iframe>
      </div>
    )
}

export default Map;