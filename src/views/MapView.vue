<script setup>
import { ref, onMounted } from 'vue';

/* eslint-disable no-undef */
function initKakaoMap() {
  const mapContainer = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.54549904515588, 126.95266870598432),
    level: 3
  };
  const map = new kakao.maps.Map(mapContainer, options);
  kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    const latlng = mouseEvent.latLng;
    currentLatLng.value = latlng.toString();
  });
}
/* eslint-enable no-undef */

onMounted(() => {
  initKakaoMap();
});

const currentLatLng = ref('');
</script>
<template>
  <div id="map" class="w-[400px] h-[600px]"></div>
  <div>{{ currentLatLng }}</div>
</template>