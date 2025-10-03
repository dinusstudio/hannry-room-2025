var APP_DATA = {
  "scenes": [
    {
      "id": "0-public",
      "name": "PUBLIC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.019225437469632567,
        "pitch": -0.0022635240829345094,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.4173836666920803,
          "pitch": 0.1531281678720351,
          "rotation": 6.283185307179586,
          "target": "1-private"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-private",
      "name": "PRIVATE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2544492023436806,
          "pitch": 0.20013229397860144,
          "rotation": 0,
          "target": "0-public"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
