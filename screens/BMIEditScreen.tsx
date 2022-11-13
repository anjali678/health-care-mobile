import * as React from "react";
import {Image, StyleSheet, Text} from "react-native";
import {ScrollView, View} from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import {RootTabScreenProps} from "../types";
import ButtonBlack from "../components/ButtonBlack";
import ButtonRed from "../components/ButtonRed";
import useStateManagement from "../StateManagement/StateManagement";
import Input from "../components/Input";
import {useCallback} from "react";
import InputWithOutBox from "../components/InputWithOutBox";

export default function BMIEditScreen({navigation}: RootTabScreenProps<"BMIEdit">) {
    const {state} = useStateManagement();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [weight, setWeight] = React.useState<string>('');
    const back = () => {
        navigation.navigate("Weight");
    };
    const next = () => {
        navigation.navigate("Results");
    };
    const weightHandler = () => {
        setWeight(weight)
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.outer}>
                <Text style={{marginTop: 40, fontSize: 36, marginLeft: 20, fontWeight: "600"}} >Test Results</Text>
                <Text style={{marginTop: 30, fontSize: 28, marginLeft: 20, fontWeight: "600"}} >
                    Gender :  <InputWithOutBox
                    placeholder="an@example.com"
                    icon=""
                    size={20}
                    top={2}
                    value={user.name}
                    setValue={nameHandler}
                /></Text>
                <Text style={{marginTop: 2, fontSize: 28, marginLeft: 20, fontWeight: "600"}} >
                    Height : Female</Text>
                <Text style={{marginTop: 2, fontSize: 28, marginLeft: 20, fontWeight: "600"}} >
                    Weight : Female</Text>
                <Text style={{marginTop: 20, fontSize: 36, marginLeft: 20, fontWeight: "600"}} >
                    BMI Value : Results</Text>
                <View style={{marginRight: "auto", marginTop: 20, marginLeft: "auto",}}>
                    <Image style={{width: 310, height: 230, marginRight: "auto", marginLeft: "auto"}}
                           source={require('../assets/images/bmi.jpg')}
                    />
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
