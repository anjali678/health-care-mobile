import * as React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {ScrollView, View} from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import {RootTabScreenProps} from "../types";
import ButtonBlack from "../components/ButtonBlack";
import ButtonRed from "../components/ButtonRed";
import useStateManagement from "../StateManagement/StateManagement";

export default function ResultsScreen({navigation}: RootTabScreenProps<"Results">) {
    const {state} = useStateManagement();
    const [loading, setLoading] = React.useState<boolean>(false);
    const deleter = () => {
        navigation.navigate("ResultDelete");
    };
    const next = () => {
        navigation.navigate("Check");
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.outer}>
                <Text style={{fontSize: 28, marginLeft: 20, marginTop:20}}>All Results</Text>
                <View style={{marginBottom: 100, marginRight: 40, marginTop: 10}}>
                    <Text style={{shadowColor: 'black', marginLeft: 20,  paddingVertical:5, fontSize: 18,
                        elevation: 20, paddingLeft: 20, borderStyle:"solid", marginTop: 20,
                        height: 40, width: "100%", }}>
                        <TouchableOpacity onPress={deleter}>
                        <Image style={{marginBottom: 10}}
                               source={require('../assets/images/icons/delete.png')}
                        /></TouchableOpacity>10/02/2021 -
                        General Blood analysis
                    </Text>
                    <Text style={{shadowColor: 'black', marginLeft: 20,  paddingVertical:5, fontSize: 18,
                        elevation: 20, paddingLeft: 20, borderStyle:"solid", marginTop: 20,
                        height: 40, width: "100%", }}>
                        <TouchableOpacity onPress={deleter}>
                        <Image style={{marginBottom: 10}}
                               source={require('../assets/images/icons/delete.png')}
                        /></TouchableOpacity>10/02/2021 -
                        General Blood analysis</Text>
                </View>
                <ButtonBlack text="Done" onPress={next} disabled={loading}/>
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
