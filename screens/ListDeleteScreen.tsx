import * as React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {ScrollView, View} from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import {RootTabScreenProps} from "../types";
import ButtonBlack from "../components/ButtonBlack";
import ButtonRed from "../components/ButtonRed";
import useStateManagement from "../StateManagement/StateManagement";
import Input from "../components/Input";

export default function ListDeleteScreen({navigation}: RootTabScreenProps<"ListDelete">) {
    const {state} = useStateManagement();
    const [loading, setLoading] = React.useState<boolean>(false);
    const deleter = () => {
        navigation.navigate("List");
    };
    const cancel = () => {
        navigation.navigate("List");
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.outer}>
                <Text style={{marginTop: 40, fontSize: 36, marginLeft: 20, fontWeight: "600"}} >Wish List</Text>
               <View style={{marginTop: 40, borderWidth:2, borderRadius: 20,
                   paddingVertical: 30, marginHorizontal:20}}>
                   <Text style={{fontSize:28, marginRight: "auto", marginLeft: "auto"}}>Delete ? </Text>
                   <View style={{marginRight: "auto", marginTop: 20, marginLeft: "auto",}}>
                       <Image style={{width: 170, height: 170, marginRight: "auto", marginLeft: "auto"}}
                              source={require('../assets/images/icons/xred.png')}
                       />
                   </View>
                   <Text style={{marginLeft: "auto", marginRight: "auto"}}>Are you sure you want to delete?</Text>
                   <View style={{marginRight: "auto", marginTop: 20, marginLeft: "auto", flex: 1, flexDirection: "row"}}>
                       <View style={{flex: 1, flexDirection: "column", marginHorizontal: 20}}>
                           <ButtonBlack text="Cancel" onPress={cancel} disabled={loading}/>
                       </View>
                       <View style={{flex: 1, flexDirection: "column", marginRight: 20}}>
                           <ButtonBlack text="Delete" onPress={deleter} disabled={loading}/>
                       </View>
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
