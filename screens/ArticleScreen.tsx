import * as React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {ScrollView, View} from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import {RootTabScreenProps} from "../types";
import ButtonBlack from "../components/ButtonBlack";
import ButtonRed from "../components/ButtonRed";
import useStateManagement from "../StateManagement/StateManagement";

export default function ArticleScreen({navigation}: RootTabScreenProps<"Article">) {
    const {state} = useStateManagement();
    const [loading, setLoading] = React.useState<boolean>(false);
    const deleter = () => {
        navigation.navigate("Gender");
    };
    const readme = () => {
        navigation.navigate("ArticleView");
    };
    const edit = () => {
        navigation.navigate("HomeDelete");
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.outer}>
                <Text style={{marginTop: 40, fontSize: 36, marginLeft: 20, fontWeight: "600"}} >Articles</Text>
                <View style={{flexDirection: "row"}}>
                    <Image source={require('../assets/images/mosh-300px.png')}
                           style={{width:50, height: 80, marginLeft: "auto", marginRight: "auto", marginTop: 40,
                               flexDirection: "column", flex:5}}/>
                    <TouchableOpacity onPress={readme} style={{flexDirection: "column", flex:2}}>
                        <Image style={{marginBottom: 10,  marginLeft: "auto", marginTop: 70}}
                               source={require('../assets/images/icons/eye.png')}
                        /></TouchableOpacity>
                    <TouchableOpacity onPress={deleter} style={{flexDirection: "column", flex:2}}>
                        <Image style={{marginBottom: 10,  marginLeft: "auto", marginTop: 70}}
                               source={require('../assets/images/icons/delete.png')}
                        /></TouchableOpacity>
                    <TouchableOpacity onPress={edit} style={{flexDirection: "column", flex:2}}>
                        <Image style={{marginBottom: 10, marginLeft: 15, marginTop: 70}}
                               source={require('../assets/images/icons/heart.png')}
                        /></TouchableOpacity>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Image source={require('../assets/images/mosh-300px.png')}
                           style={{width:50, height: 80, marginLeft: "auto", marginRight: "auto", marginTop: 40,
                               flexDirection: "column", flex:5}}/>
                    <TouchableOpacity onPress={deleter} style={{flexDirection: "column", flex:2}}>
                        <Image style={{marginBottom: 10,  marginLeft: "auto", marginTop: 70}}
                               source={require('../assets/images/icons/eye.png')}
                        /></TouchableOpacity>
                    <TouchableOpacity onPress={deleter} style={{flexDirection: "column", flex:2}}>
                        <Image style={{marginBottom: 10,  marginLeft: "auto", marginTop: 70}}
                               source={require('../assets/images/icons/delete.png')}
                        /></TouchableOpacity>
                    <TouchableOpacity onPress={edit} style={{flexDirection: "column", flex:2}}>
                        <Image style={{marginBottom: 10, marginLeft: 15, marginTop: 70}}
                               source={require('../assets/images/icons/red-h.png')}
                        /></TouchableOpacity>
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
