import React,{ useEffect} from "react";
import { Image, StyleSheet, Text} from "react-native";
import axios  from "axios";
import { View, ScrollView } from "../components/Themed";
import WelcomeText from "../components/WelcomeText";
import {RootStackScreenProps, RootTabScreenProps} from "../types";
import Ionicons from '@expo/vector-icons/Ionicons';
import useStateManagement from "../StateManagement/StateManagement";
import Button from "../components/Button";
import InputWithOutBox from "../components/InputWithOutBox";
import {useCallback} from "react";

export default function HomeEdit({ navigation }: RootStackScreenProps<"HomeEdit">) {
  const { state } = useStateManagement();
  const [loading, setLoading] = React.useState<boolean>(false);
  const edit = () => {
    navigation.navigate("Register");
  };
  const [user, setUser] = React.useState<{
    email: string;
    name: string;
    birth: string;
    height: string;
    weight: string;
  }>({ email: "", name: "", birth: "", weight: "", height: "" });

  const emailHandler = useCallback(
      (email: string) => {
        setUser((prev) => ({ ...prev, email }));
      },
      [user.email]
  );
  const birthHandler = useCallback(
      (birth: string) => {
        setUser((prev) => ({ ...prev, birth }));
      },
      [user.birth]
  );
  const weightHandler = useCallback(
      (weight: string) => {
        setUser((prev) => ({ ...prev, weight }));
      },
      [user.weight]
  );
  const heightHandler = useCallback(
      (height: string) => {
        setUser((prev) => ({ ...prev, height }));
      },
      [user.height]
  );
  const nameHandler = useCallback(
      (password: string) => {
        setUser((prev) => ({ ...prev, name }));
      },
      [user.name]
  );
    useEffect(() => {
       getUser()
    })
    const getUser = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/user/1');
            // const json = await response.json();
            emailHandler(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.outer}>
        <Image source={require('../assets/images/mosh-300px.png')}
               style={{width:"30%", height: "20%", marginLeft: "auto", marginRight: "auto", marginTop: 40}}/>
        <WelcomeText name={state.user?.name} />
        <Text style={{ marginRight: "auto", marginTop: 5, marginLeft: 60, fontSize: 20}}>
          <InputWithOutBox
              placeholder="kamal kamal"
              icon=""
              size={20}
              top={2}
              value={state.user.name}
              setValue={nameHandler}
          />
        </Text>
        <Text style={{ marginRight: "auto", marginTop: 5, marginLeft: 60, fontSize: 20}}>
          <InputWithOutBox
              placeholder="kamal kamal"
              icon=""
              size={20}
              top={2}
              value={state.user?.birth}
              setValue={birthHandler}
          /></Text>
          <Text style={{ marginRight: "auto", marginTop: 5, marginLeft: 60, fontSize: 20}}>
              <InputWithOutBox
                  placeholder="kamal kamal"
                  icon=""
                  size={20}
                  top={2}
                  value={state.user?.height}
                  setValue={heightHandler}
              /></Text>
          <Text style={{ marginRight: "auto", marginTop: 5, marginLeft: 60, fontSize: 20}}>
              <InputWithOutBox
                  placeholder="kamal kamal"
                  icon=""
                  size={20}
                  top={2}
                  value={state.user?.weight}
                  setValue={weightHandler}
              /></Text>
          <Text style={{ marginRight: "auto", marginTop: 5, marginLeft: 60, fontSize: 20}}>
              <InputWithOutBox
                  placeholder="kamal"
                  icon=""
                  size={20}
                  top={2}
                  value={state.user.email}
                  setValue={emailHandler}
              /></Text>
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
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
