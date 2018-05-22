
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, TextInput
} from 'react-native';
import ImagePick from './ImagePicker';

const backgroundColor = '#0067a7';


export default class AddNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        }
    }

    showImagePicker = () =>{
        ImagePick(source => this.setState({
            avatarSource: source
        }))
    }
   

    render() {
        let selectImage = this.state.avatarSource === null ? null :
            <Image
                source={this.state.avatarSource}
                style={{ height: 100, width: 100 }}

            />
        return (

            <View>
                <View>
                    <Text style={styles.titleText}>
                        Thông tin đính kèm
                    </Text>

                    <View style={{
                        marginTop: 10,
                        marginBottom: 20,
                        marginRight: 20,
                        marginLeft: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={this.showImagePicker}
                            >
                                <Image
                                    style={styles.imageButton}
                                    source={require('./../icon/camera-26.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageButton}
                                    source={require('./../icon/video_call_26.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageButton}
                                    source={require('./../icon/books-26.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>

                <View style={{ marginRight: 10, marginLeft: 10, height: 1, backgroundColor: 'black' }}></View>
                    
                {selectImage}

                <View >
                    <Text style={styles.titleText}>
                        Nội dung
                    </Text>
                    <TextInput
                        style={{ margin: 5, borderColor: 'gray', borderWidth: 1 }}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>

                <View>
                </View>

                <View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#c8cbd1'
    },
    imageButton: {
        width: 26,
        height: 26,
        tintColor: backgroundColor
    }
});
