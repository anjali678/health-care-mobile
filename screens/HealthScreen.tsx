import * as React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, Button} from "react-native";
import {ScrollView, View} from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import {RootTabScreenProps} from "../types";
import useStateManagement from "../StateManagement/StateManagement";

export default function HealthScreen({navigation}: RootTabScreenProps<"Health">) {
    const {state} = useStateManagement();
    const [loading, setLoading] = React.useState<boolean>(false);
    const practice = () => {
        navigation.navigate("HealthPractice");
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.outer}>
                <Image source={require('../assets/images/mosh-300px.png')}
                       style={{width: "20%", height: "15%", marginLeft: "auto", marginRight: "auto", marginTop: 40}}/>
                <WelcomeText name={'Hello ' + state.user?.name}/>
                <Text style={{flexDirection: "row", backgroundColor: "#edf0ef", fontSize: 15, borderRadius: 10,
                    marginLeft:20, marginRight: 30, padding: 10, marginTop: 20}}>
                    <Image style={{marginBottom: 10}}
                           source={require('../assets/images/icons/calendar.png')}
                    /> 1 : 1 with Eva
                </Text>
                <View style={{marginBottom: 50, marginRight: 40, marginTop:40}}>
                    <TouchableOpacity onPress={practice}>
                    <Text style={{shadowColor: 'black', marginLeft: 20,  paddingVertical:5, fontSize: 18,
                        elevation: 20, paddingLeft: 20, borderStyle:"solid", marginTop: 30,
                        height: 40, width: "100%", }}>
                        <Image style={{marginBottom: 10}}
                               source={require('../assets/images/icons/arrow.png')}
                        />
                        Add Health Practices</Text></TouchableOpacity>
                    <Text style={{shadowColor: 'black', marginLeft: 20,  paddingVertical:5, fontSize: 18,
                        elevation: 20, paddingLeft: 20, borderStyle:"solid", marginTop: 30,
                        height: 40, width: "100%", }}>
                        <Image style={{marginBottom: 10}}
                               source={require('../assets/images/icons/arrow.png')}
                        />
                        Add Balance Diet</Text>
                    <Text style={{shadowColor: 'black', marginLeft: 20,  paddingVertical:5, fontSize: 18,
                        elevation: 20, paddingLeft: 20, borderStyle:"solid", marginTop: 30,
                        height: 40, width: "100%", }}>
                        <Image style={{marginBottom: 10}}
                               source={require('../assets/images/icons/arrow.png')}
                        />
                        Add Health Habits</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    outer: {
        marginBottom: 30,
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 12,
    },
});
