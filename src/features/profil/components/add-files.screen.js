import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './add-files.styles'
import ImagePicker from 'react-native-image-crop-picker';


class AddFiles extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      source: [
        'camera',
        'gallery'
      ]
    }
  }

  importFile = async (source) => {
    if(source === 'camera'){
      console.log('camera')
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
    } else {
      console.log('file')
      ImagePicker.openPicker({
        mediaType: "any",
      }).then((any) => {
        console.log(any);
      });
    }
  }
  
  render(){
    return (
      <View style={styles.fonctions}>
        <View>
          <TouchableOpacity onPress={() => this.importFile(this.state.source[1])}  style={styles.addFile}>
            <Image source={require("../../../assets/add.png")} style={styles.image} />
            <Text style={styles.add}>Ajouter</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.importFile(this.state.source[0])} style={styles.addFile}>
            <Image source={require("../../../assets/camera.png")} style={styles.image} />
              <View style={styles.container}>
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                  <Text style={styles.add}> Prendre une photo </Text>
                </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AddFiles;
