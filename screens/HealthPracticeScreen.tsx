import * as React from "react";
import {Image, StyleSheet, Text} from "react-native";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import SerachBar from "../components/SerachBar";
import { View, ScrollView } from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import {RootStackScreenProps, RootTabScreenProps} from "../types";
import Ionicons from '@expo/vector-icons/Ionicons';
import useStateManagement from "../StateManagement/StateManagement";
import Button from "../components/Button";
import Input from "../components/Input";
import {useCallback} from "react";

export default function HealthPracticeScreen({ navigation }: RootStackScreenProps<"HealthPractice">) {
  const { state } = useStateManagement();
  const [loading, setLoading] = React.useState<boolean>(false);
  const edit = () => {
    navigation.navigate("Register");
  };
  const [user, setUser] = React.useState<{
    email: string;
    name: string;
  }>({ email: "", name: "" });

  const emailHandler = useCallback(
      (email: string) => {
        setUser((prev) => ({ ...prev, email }));
      },
      [user.email]
  );

  const nameHandler = useCallback(
      (password: string) => {
        setUser((prev) => ({ ...prev, name }));
      },
      [user.name]
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.outer}>
        <WelcomeText name={state.user?.name} />
        <Image source={require('../assets/images/mosh-300px.png')}
               style={{width:"36%", height: "20%", marginLeft: "auto", marginRight: "auto", marginTop: 10}}/>
        <Text style={{marginLeft: 20, fontSize: 18}}>Add Health Practice</Text>
        <Text style={{marginLeft: 60, fontSize: 18}}>Name</Text>
        <Text style={{ marginRight: "auto", marginLeft: 60, fontSize: 20}}>
          <Input
              placeholder="an@example.com"
              icon=""
              size={20}
              top={2}
              value={user.name}
              setValue={nameHandler}
          />
        </Text>
        <Text style={{marginLeft: 60, fontSize: 18}}>Name</Text>
        <Text style={{ marginRight: "auto", marginLeft: 60, fontSize: 20}}>
          <Input
              placeholder="an@example.com"
              icon=""
              size={20}
              top={2}
              value={user.name}
              setValue={nameHandler}
          />
        </Text>
        <Text style={{marginLeft: 60, fontSize: 18}}>Name</Text>
        <Text style={{ marginRight: "auto", marginLeft: 60, fontSize: 20}}>
          <Input
              placeholder=""
              icon=""
              size={100}
              top={2}
              value={user.name}
              setValue={nameHandler}
          />
        </Text>
        <View style={{marginBottom: 120, marginTop: 20}}>
          <Button text="EDIT DETAILS" onPress={edit}  disabled={loading}/></View>
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
    marginTop: 40,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 12,
  },
});
