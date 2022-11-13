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

export default function WeightScreen({navigation}: RootTabScreenProps<"Weight">) {
    const {state} = useStateManagement();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [weight, setWeight] = React.useState<string>('');
    const back = () => {
        navigation.navigate("Height");
    };
    const next = () => {
        navigation.navigate("BMI");
    };
    const weightHandler = () => {
        setWeight(weight)
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.outer}>
                <Text style={{marginTop: 40, fontSize: 36, marginLeft: 20, fontWeight: "600"}} >Enter Your Height?</Text>
                <View style={{marginRight: "auto", marginTop: 20, marginLeft: "auto",}}>
                    <Image style={{width: 240, height: 240, marginRight: "auto", marginLeft: "auto"}}
                           source={require('../assets/images/weight.jpg')}
                    />
                </View>
               <View style={{marginLeft: 20, marginRight: 20}}>
                   <Input
                       placeholder="132 Kg"
                       icon=""
                       size={20}
                       top={2}
                       value={weight}
                       setValue={weightHandler}
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
