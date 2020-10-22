import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default class LoginScreen extends Component{
    state={
        username: "",
        password: "",
        errorMag: "Invalid login details",
    }
    onLogin=()=>{
        if( this.state.usname == 'ITtrat' && this.state.password == '1234'){
            this.props.navigation.navigate('Main')
        }else{
            alert('Error')
        }
    }
    render(){
        return(
            <View style={styles.container}>
            {/* Welcome Back */}
                <Text style={{ 
                    fontSize: 25, 
                    marginTop: 20
                }}>Welcome Back!</Text>
                <Text style={{ 
                    fontSize: 16, 
                    color: 'gray', 
                    marginTop: 20 
                }}>Sign in to continue</Text>

            {/* Form Login */}
                <TextInput
                    style={{ 
                        marginTop: 40, 
                        borderBottomColor: '#add',
                        borderBottomWidth: 1,
                        paddingBottom: 20,
                    }}
                    placeholder= 'Username'
                    onChangeText = {(text)=>this.setState({username: text})}
                >
                </TextInput>
                    
                <TextInput
                    style={{ 
                        marginTop: 40, 
                        borderBottomColor: '#add',
                        borderBottomWidth: 1,
                        paddingBottom: 20,
                    }}
                    placeholder= 'Password'
                    onChangeText = {(text)=>this.setState({password: text})}
                >
                </TextInput>

                <Text style={{
                        color: 'red', textAlign: 'center',
                        marginTop: 10,
                    }}>{this.state.errorMsg}</Text>

                {/* Login Now */}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                    <TouchableOpacity 
                        onPress={()=>this.onLogin()}
                        style={{
                        width: 200, backgroundColor: '#0d47a1',
                        padding: 10, alignItems: 'center',
                        justifyContent: 'center', borderRadius: 40,
                        marginTop: 30,
                    }}>
                        <Text style={{ 
                            textAlign: 'center', color: '#FFFFFF', 
                            fontSize: 16
                        }}>Login Now</Text>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 20 }}>Forgot Password?</Text>
                    
                    {/* Social Media */}
                    <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <View style={{ 
                        height: 50, 
                        width: 50, 
                        borderRadius: 50/2, 
                        backgroundColor: '#3f5ab5',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom: 5}}>f</Text>
                    </View>

                    <View style={{ 
                        height: 50, 
                        width: 50, 
                        borderRadius: 50/2, 
                        backgroundColor: '#f44336',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom: 5}}>g</Text>
                    </View>

                    <View style={{ 
                        height: 50, 
                        width: 50, 
                        borderRadius: 50/2, 
                        backgroundColor: '#1565c0',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom: 5}}>in</Text>
                    </View>
                    </View>
                    
                    {/* Forgot Sign UP */}
                    <View style={{ flexDirection: 'row', marginTop: 20}}>
                        <Text style={{ color: 'gray'}}>Don't have an account</Text>
                        <Text style={{ fontWeight: 'bold'}}> Sign Up</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    }
})