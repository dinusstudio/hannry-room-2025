var APP_DATA = {
  "scenes": [
    {
      "id": "0-public-area",
      "name": "Public Area",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.5529686451312443,
          "pitch": 0.364192006614509,
          "rotation": 0,
          "target": "1-private-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-private-area",
      "name": "Private Area",
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
        "yaw": -1.5016544371966756,
        "pitch": 0.146242870182423,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.5016543549722527,
          "pitch": 0.32205462713882227,
          "rotation": 0,
          "target": "0-public-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Hannry Room 2025",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
