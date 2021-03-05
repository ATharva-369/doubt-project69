import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class Scan extends React.Component {
    constructor() {
        super();
        this.state = {
            hasPermissions: false,
            scanned: false,
            scannedData: '',
            buttonState: 'normal',
        }
    }
    getCameraPermissons = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: true
        })
    }
    handleBarCodeScanned = async ({ type, data }) => {
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        })
    }
    render() {
        const buttonState = this.state.buttonState;
        if (buttonState === 'clicked' && hasCameraPermissionsbuttonState === 'clicked' && hasCameraPermissions) {
            return (
                <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={{}}
                />
            )
        }
        else if(buttonState === 'normal') {
            return (
                <View style={styles.container}>

                    <Image source={require('../assets/pic.jpg')}/>
                    <Text style={{}}>{hasCameraPermissions === true ? this.state.scannedData : "Request Camera Permissions"}</Text>
                    <TouchableOpacity
                        onPress={this.getCameraPermissons}
                        style={{}}
                    >
                        <Text style={{}}>Scan QR Code</Text>

                    </TouchableOpacity>
                </View>
            )
        }
    
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
