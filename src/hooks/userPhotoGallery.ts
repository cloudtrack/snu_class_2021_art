import { useState, useEffect } from "react";
import { isPlatform } from "@ionic/react";

import {
  Camera,
  CameraResultType,
  CameraSource,
  ImageOptions,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Storage } from "@capacitor/storage";
import { Capacitor } from "@capacitor/core";
import { Crop } from "@ionic-native/crop";

export function usePhotoGallery() {

  const getPhoto = async (sourceStr: string, shouldCrop: Boolean) => {
    return new Promise<string>(async (resolve, reject) => {
      let source;
      if (sourceStr === "camera") {
        source = CameraSource.Camera;
      } else if (sourceStr === "gallery") {
        source = CameraSource.Photos;
      } else {
        reject("Invalid source");
      }
      const options: ImageOptions = {
        quality: 100,
        resultType: CameraResultType.Uri,
        source: source,
      };

      await Camera.getPhoto(options)
        .then((photo) => {
          console.log("to crop");
          console.log(photo);
          if (shouldCrop) {
            Crop.crop(
              photo.path!,
              {
                quality: 100
              }
            )
              .then(newImagePath => {
                console.log(newImagePath);
                console.log("cropped");
                resolve(newImagePath.split("?")[0]);
              })
              .catch(error => {
                reject(error);
              });
          } else {
            resolve(photo.path!);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
};


return {
  getPhoto,
};
}
