
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    Keyboard, Alert
} from 'react-native';
import {firebaseApp} from './firebaseConfig'
export default class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordAgain: ''
        }
    }

    _onRegister = () => {
        const { navigation } = this.props;
        if(this.state.password===this.state.passwordAgain)
            firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    Alert.alert(
                        'Đăng kí',
                        'Đăng ký thành công',
                        [
                            { text: 'Cancel', },
                            { text: 'Đăng nhập', onPress: () => navigation.navigate('loginScreen') },
                        ],
                        { cancelable: false }
                    )
                    this.setState({
                        email: '',
                    password: '',
                    passwordAgain: ''
                    })
                })
                .catch(function (error) {
                    Alert.alert(
                        'Đăng kí',
                        'Đăng ký thất bại',
                        [
                            { text: 'Cancel' },
                            { text: 'OK' },
                        ],
                        { cancelable: false }
                    )
                });
            else Alert.alert(
                'Đăng kí thất bại',
                'Mật khẩu không đúng',
                [
                    { text: 'Cancel' },
                    { text: 'OK' },
                ],
                { cancelable: false }
            )
    }

    render() {
        return (
            <View style={styles.container} >

                <View style={styles.logoContainer}>
                    <Image
                        source={require('../icon/news.jpg')}
                        style={styles.logo}
                    >
                    </Image>
                    
                </View>

                <View style={styles.input}>

                    <View>
                        <TextInput
                            value= {this.state.email}
                            onChangeText={(email) => this.setState({email})}
                            style={styles.borderInput}
                            placeholder='Enter email...'
                            // placeholderTextColor='red'
                            keyboardType='email-address'
                            autoCorrect={false}
                            onSubmitEditing={() => this.refs.txtPassword.focus()}
                        >
                        </TextInput>
                        <TextInput
                            value= {this.state.password}
                            onChangeText={(password) => this.setState({password})}
                            style={styles.borderInput}
                            placeholder='Enter password'
                            // placeholderTextColor='red'
                            autoCorrect={false}
                            ref={'txtPassword'}
                            secureTextEntry={true}
                            onSubmitEditing={() => this.refs.txtPassword2.focus()}
                        >
                        </TextInput>
                        <TextInput
                        value= {this.state.passwordAgain}
                            onChangeText={(passwordAgain) => this.setState({passwordAgain})}
                            style={styles.borderInput}
                            placeholder='Enter password Again'
                            // placeholderTextColor='red'
                            autoCorrect={false}
                            ref={'txtPassword2'}
                            secureTextEntry={true}
                        >
                        </TextInput>

                    </View>


                    <View  >
                        <TouchableOpacity
                            onPress={this._onRegister}
                            style={styles.button}
                        >
                            <Text style={styles.txtButton} >
                                Đăng ký
                             </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontSize: 25,
        color: 'red',
        textAlign: 'center',
        marginVertical: 10,
    },
    txtLink: {
        fontSize: 18,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    txtInput: {
        marginHorizontal: 10,

    },
    button: {
        marginHorizontal: 10,
        backgroundColor: '#0067a7',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        height: 40,
        borderRadius: 2,

    },
    borderInput: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 2,
    },
    logo: {
        height: 26,

    },
    txtButton: {
        fontSize: 18,
        color: 'white',
    },
    input: {
        height: 270,
        bottom: 0
    }
});
