import { Viewer, Cesium3DTileset } from "resium";
import { Ellipsoid, IonResource  } from "cesium";

Ellipsoid.default = Ellipsoid.MOON;

function MoonViewer() {
    let viewer; // This will be raw Cesium's Viewer object.

    const handleReady = tileset => {
      if (viewer) {
        viewer.zoomTo(tileset);
      }
    };
  
    return (
      <Viewer
        full
        //globe={false}
        sceneModePicker={false}
        baseLayerPicker={false}
        geocoder={false}
        animation={false}
        timeline={false}
      >
          <Cesium3DTileset url={IonResource.fromAssetId(2684829)} onReady={handleReady} />
      </Viewer>
    )
}

export default MoonViewer;