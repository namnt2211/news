
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
    Keyboard,
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {firebaseApp} from './firebaseConfig'
export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    _onLogin = () =>{
        const {navigation} = this.props;       
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            Alert.alert(
                'Đăng nhập',
                this.state.email,
                [
                    { text: 'Cancel'},
                    { text: 'Trang chủ', onPress: () =>navigation.navigate('app')},
                ],
                { cancelable: false }
            )
            this.setState({
                email: '',
                password: ''
            })
        })
        .catch(function (error) {
            Alert.alert(
                'Đăng nhập',
                'Đăng nhập thất bại',
                [
                    { text: 'Cancel'},
                    { text: 'OK' },
                ],
                { cancelable: false }
            )
        });
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
                            >
                            </TextInput>

                        </View>


                        <View  >
                            <TouchableOpacity
                                onPress={this._onLogin}
                                style={styles.button}
                            >
                                <Text style={styles.txtButton} >
                                    Đăng nhập
                             </Text>
                            </TouchableOpacity>

                            <Text style={styles.txtLink}>
                                Quên mật khẩu
                            </Text>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 18}}>
                                Chưa có tài khoản?
                            </Text>

                            <Text 
                            onPress={() => {
                                    const { navigation } = this.props;
                                    navigation.navigate('Register');
                                }}
                            style={[styles.txtLink, {color: '#0067a7'}]}>
                                Đăng ký
                            </Text>
                        </View>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#0067a7',
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
        bottom: 0,
    }
});
