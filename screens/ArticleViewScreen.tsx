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
                <Text style={{marginTop: 40, fontSize: 36, marginLeft: 20, fontWeight: "600"}} >Article</Text>
                <Image source={require('../assets/images/mosh-300px.png')}
                       style={{width:200, height: 200, marginLeft: "auto", marginRight: "auto", marginTop: 40,
                           flexDirection: "column", flex:5}}/>
                <Text>Description</Text>
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
