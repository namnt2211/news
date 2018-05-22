var ImagePicker = require('react-native-image-picker');

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

let ImagePick = (cb) =>{
  ImagePicker.showImagePicker(options, (response) => {

    if (response.didCancel) {
    }
    else if (response.error) {
    }
    else if (response.customButton) {
    }
    else {
      let source = { uri: response.uri };
      cb(source);
    }
  });
}

module.exports = ImagePick;