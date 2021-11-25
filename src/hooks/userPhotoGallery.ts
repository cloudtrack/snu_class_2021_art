import { useState, useEffect } from "react";
import { isPlatform } from "@ionic/react";

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Storage } from "@capacitor/storage";
import { Capacitor } from "@capacitor/core";
import { Crop } from "@ionic-native/crop";

export function usePhotoGallery() {
  const takePhoto = async () => {
    await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    })
    .then(photo => {
      console.log("to crop");
      console.log(photo);
    })
    .catch(err => console.log(err));
  };

  const pickPhoto = async () => {
    await Camera.pickImages({
      quality: 100,
      presentationStyle: "popover",
    })
    .then(photo => {
      console.log("gallery to crop");
      console.log(photo);
      Crop.crop(
        photo.photos[0].path!,
        {
          quality: 100
        }
      )
    })
    .catch(err => console.log(err));
  }

  return {
    takePhoto,
    pickPhoto,
  };
}
