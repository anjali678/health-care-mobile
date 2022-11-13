import * as React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {ScrollView, View} from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import {RootTabScreenProps} from "../types";
import ButtonBlack from "../components/ButtonBlack";
import ButtonRed from "../components/ButtonRed";
import useStateManagement from "../StateManagement/StateManagement";

export default function CheckScreen({navigation}: RootTabScreenProps<"Check">) {
    const {state} = useStateManagement();
    const [loading, setLoading] = React.useState<boolean>(false);
    const bmi = () => {
        navigation.navigate("Gender");
    };
    const blood = () => {
        navigation.navigate("HomeDelete");
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.outer}>
                <Image source={require('../assets/images/mosh-300px.png')}
                       style={{width: "20%", height: "13%", marginLeft: "auto", marginRight: "auto", marginTop: 20}}/>
                <ButtonBlack text="VIEW ALL RESULTS" onPress={bmi} disabled={loading}/>
                <WelcomeText name={'Hello ' + state.user?.name}/>
                <View style={{marginRight: "auto", marginTop: 20, marginLeft: "auto", flex: 1, flexDirection: "row"}}>
                    <View style={{flex: 2, flexDirection: "column"}}>
                        <TouchableOpacity onPress={bmi}>
                        <Image style={{width: 100, height: 100, marginRight: "auto", marginLeft: "auto"}}
                               source={require('../assets/images/icons/bmi.png')}
                        /></TouchableOpacity>
                        <Text style={{marginRight: "auto", marginLeft: "auto"}}>BMI Calculator</Text>
                    </View>
                    <View style={{flex: 2, flexDirection: "column"}}>
                        <TouchableOpacity onPress={bmi}>
                        <Image style={{width: 100, height: 100, marginRight: "auto", marginLeft: "auto"}}
                               source={require('../assets/images/icons/bloodp.jpg')}
                        /></TouchableOpacity>
                        <Text style={{marginRight: "auto", marginLeft: "auto"}}>Blood Pressure</Text>
                    </View>
                </View>
                <Text style={{fontSize: 28, marginLeft: 20, marginTop:20}}>History</Text>
                <View style={{marginBottom: 100, marginRight: 40}}>
                    <Text style={{shadowColor: 'black', marginLeft: 20,  paddingVertical:5, fontSize: 18,
                        elevation: 20, paddingLeft: 20, borderStyle:"solid", marginTop: 10,
                        height: 40, width: "100%", }}>
                        General Blood analysis</Text>
                    <Text style={{shadowColor: 'black', marginLeft: 20,  paddingVertical:5, fontSize: 18,
                        elevation: 20, paddingLeft: 20, borderStyle:"solid", marginTop: 10,
                        height: 40, width: "100%", }}>
                        General Blood analysis</Text>
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
