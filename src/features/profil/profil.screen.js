import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  AppRegistry
} from 'react-native';
import HeaderNavigation from '../headerNavigation/headerNavigation.screen';
import styles from './profil.styles'
import { RNCamera } from 'react-native-camera';


class Profil extends React.Component {
  constructor(props){
    super(props)
  }
  takePicture = async () => {
    if (this.camera) {
      // console.log(data.uri);
      // const options = { quality: 0.5, base64: true };
      // const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  render(){
    return (
      <ScrollView>
        <HeaderNavigation/>
        <View style={styles.main}>
          <View style={styles.fonctions}>
            <View style={styles.addFile}>
              <Image source={require("../../assets/add.png")} style={styles.image} />
              <Text style={styles.add}>Ajouter</Text>
            </View>
            <View style={styles.addFile}>
              <Image source={require("../../assets/camera.png")} style={styles.image} />
              <View style={styles.container}>
              <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                captureAudio={false}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                  console.log(barcodes);
                }}
              />
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> Prendre une photo </Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Profil;
