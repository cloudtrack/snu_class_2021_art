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



  const takePhoto = async () => {
    return new Promise<string>(async (resolve, reject) => {
      const options: ImageOptions = {
        quality: 100,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      };

      await Camera.getPhoto(options)
        .then((photo) => {
          console.log("to crop");
          console.log(photo);
          Crop.crop(
            photo.path!,
            {
              quality: 100
            }
          )
            .then(newImagePath => {
              console.log(newImagePath);
              console.log("cropped");
              resolve(newImagePath);
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  const pickPhoto = async () => {
    return new Promise<string>(async (resolve, reject) => {
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
            .then(newImagePath => {
              console.log(newImagePath);
              console.log("cropped");
              resolve(newImagePath); // cropped image path
            })
            .catch(error => {
              console.log(error);
              reject(error);
            });
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }

  return {
    takePhoto,
    pickPhoto,
  };
}
