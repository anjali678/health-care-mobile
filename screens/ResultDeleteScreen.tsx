import * as React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {ScrollView, View} from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import {RootTabScreenProps} from "../types";
import ButtonBlack from "../components/ButtonBlack";
import ButtonRed from "../components/ButtonRed";
import useStateManagement from "../StateManagement/StateManagement";
import Input from "../components/Input";

export default function ResultDeleteScreen({navigation}: RootTabScreenProps<"ResultDelete">) {
    const {state} = useStateManagement();
    const [loading, setLoading] = React.useState<boolean>(false);
    const deleter = () => {
        navigation.navigate("Check");
    };
    const cancel = () => {
        navigation.navigate("Check");
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.outer}>
                <Text style={{marginTop: 40, fontSize: 36, marginLeft: 20, fontWeight: "600"}} >Confirm Delete?</Text>
                <View style={{marginRight: "auto", marginTop: 20, marginLeft: "auto",}}>
                    <Image style={{width: 220, height: 240, marginRight: "auto", marginLeft: "auto"}}
                           source={require('../assets/images/delete.jpg')}
                    />
                </View>
                <Text style={{fontSize:28, marginRight: "auto", marginLeft: "auto"}}>Delete ? </Text>
                <View style={{marginRight: "auto", marginTop: 20, marginLeft: "auto", flex: 1, flexDirection: "row"}}>
                    <View style={{flex: 1, flexDirection: "column", marginHorizontal: 20}}>
                        <ButtonBlack text="Cancel" onPress={cancel} disabled={loading}/>
                    </View>
                    <View style={{flex: 1, flexDirection: "column", marginRight: 20}}>
                        <ButtonBlack text="Delete" onPress={deleter} disabled={loading}/>
                    </View>
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
