import * as React from "react";
import {Image, StyleSheet, Text} from "react-native";
import { View, ScrollView } from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import {RootStackScreenProps, RootTabScreenProps} from "../types";
import useStateManagement from "../StateManagement/StateManagement";
import ButtonBlack from "../components/ButtonBlack";
import ButtonRed from "../components/ButtonRed";

export default function HomeDelete({ navigation }: RootStackScreenProps<"HomeDelete">) {
  const { state } = useStateManagement();
  const [loading, setLoading] = React.useState<boolean>(false);
  const cancel = () => {
    navigation.navigate("Home");
  };
  const deleteP = () => {
    navigation.navigate("Register");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.outer}>
        <Image source={require('../assets/images/mosh-300px.png')}
               style={{width:"30%", height: "20%", marginLeft: "auto", marginRight: "auto", marginTop: 40}}/>
        <WelcomeText name={state.user?.name} />
        <Image source={require('../assets/images/icons/xred.png')}
               style={{width:80, height: 80, marginLeft: "auto", marginRight: "auto", marginTop: 40}}/>
        <Text style={{fontSize: 26, marginLeft: "auto", marginRight: "auto", color: "#696758", fontWeight: "600"}}>Are you sure ?</Text>
          <ButtonBlack text="Cancel" onPress={cancel}  disabled={loading}/>
         <View style={{marginBottom: 100}}>
           <ButtonRed text="Delete" onPress={deleteP}  disabled={loading}/>
         </View>
        {/*<SerachBar />*/}
        {/*<Banner />*/}
        {/*<Categories />*/}
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
