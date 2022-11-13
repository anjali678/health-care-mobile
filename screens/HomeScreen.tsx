import * as React from "react";
import {Image, StyleSheet, Text} from "react-native";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import SerachBar from "../components/SerachBar";
import { View, ScrollView } from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import { RootTabScreenProps } from "../types";
import ButtonBlack from "../components/ButtonBlack";
import ButtonRed from "../components/ButtonRed";
import Ionicons from '@expo/vector-icons/Ionicons';
import useStateManagement from "../StateManagement/StateManagement";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const { state } = useStateManagement();
  const [loading, setLoading] = React.useState<boolean>(false);
  const edit = () => {
    navigation.navigate("HomeEdit");
  };
  const deleteP = () => {
    navigation.navigate("HomeDelete");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.outer}>
        <Image source={require('../assets/images/mosh-300px.png')}
               style={{width:"30%", height: "20%", marginLeft: "auto", marginRight: "auto", marginTop: 40}}/>
        <WelcomeText name={state.user?.name} />
        <Text style={{ marginRight: "auto", marginTop: 20, marginLeft: 60, fontSize: 20}}>
          <Image
              source={require('../assets/images/icons/calendar.png')}
          /> {state.user?.birth}</Text>
        <Text style={{ marginRight: "auto", marginTop: 20, marginLeft: 60, fontSize: 20}}>
          <Image
              source={require('../assets/images/icons/tick.png')}
          /> {state.user?.height}</Text>
        <Text style={{ marginRight: "auto", marginTop: 20, marginLeft: 60, fontSize: 20}}>
          <Image
              source={require('../assets/images/icons/weight.png')}
          /> {state.user?.weight}</Text>
        <Text style={{ marginRight: "auto", marginTop: 20, marginLeft: 60, fontSize: 20}}>
          <Image
              source={require('../assets/images/icons/mail.png')}
          /> {state.user?.email}</Text>
        <ButtonBlack text="EDIT DETAILS" onPress={edit}  disabled={loading}/>
        <View style={{marginBottom: 100}}>
          <ButtonRed text="DELETE PROFILE" onPress={deleteP}  disabled={loading}/>
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
