import * as React from "react";
import {Image, StyleSheet, Text} from "react-native";
import {ScrollView, View} from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import {RootTabScreenProps} from "../types";
import ButtonBlack from "../components/ButtonBlack";
import ButtonRed from "../components/ButtonRed";
import useStateManagement from "../StateManagement/StateManagement";

export default function GenderScreen({navigation}: RootTabScreenProps<"Gender">) {
    const {state} = useStateManagement();
    const [loading, setLoading] = React.useState<boolean>(false);
    const back = () => {
        navigation.navigate("Check");
    };
    const next = () => {
        navigation.navigate("Height");
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.outer}>
                <Text style={{marginTop: 40, fontSize: 36, marginLeft: 20, fontWeight: "600"}} >Select Your Gender?</Text>
                <View style={{marginRight: "auto", marginTop: 20, marginLeft: "auto",}}>
                    <View style={{marginBottom:20}}>
                        <Image style={{width: 120, height: 120, marginRight: "auto", marginLeft: "auto"}}
                               source={require('../assets/images/icons/female.png')}
                        />
                        <Text style={{marginRight: "auto", marginLeft: "auto", fontWeight: "600", fontSize: 20}}>Female</Text>
                    </View>
                    <View>
                        <Image style={{width: 100, height: 100, marginRight: "auto", marginLeft: "auto"}}
                               source={require('../assets/images/icons/male.png')}
                        />
                        <Text style={{marginRight: "auto", marginLeft: "auto", fontWeight: "600", fontSize: 20}}>Male</Text>
                    </View>
                </View>
                <View style={{marginRight: "auto", marginTop: 20, marginLeft: "auto", flex: 1, flexDirection: "row"}}>
                    <View style={{flex: 1, flexDirection: "column", marginHorizontal: 20}}>
                        <ButtonBlack text="BACK" onPress={back} disabled={loading}/>
                    </View>
                    <View style={{flex: 1, flexDirection: "column", marginRight: 20}}>
                        <ButtonBlack text="NEXT" onPress={next} disabled={loading}/>
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
