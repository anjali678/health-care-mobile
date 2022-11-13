import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  DrawerActions,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import {ColorSchemeName, Image, StyleSheet, TouchableOpacity} from "react-native";

import { primary, secondary } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen";
import List from "../screens/ListScreen"
import Check from "../screens/CheckScreen"
import Article from "../screens/ArticleScreen"
import Health from "../screens/HealthScreen"
import TabTwoScreen from "../screens/TabTwoScreen";

import {
  RootDrawerParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Profile from "../components/Profile";
import Pressable from "../components/Pressable";
import Hamburger from "../components/Hamburger";
import { View } from "../components/Themed";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import isAuthenticated from "../hooks/useAuthenticated";
import HomeEdit from "../screens/HomeEditScreen"
import HomeDelete from  "../screens/HomeDeleteScreen"
import Gender from  "../screens/GenderScreen"
import Height from "../screens/HeightScreen"
import Weight from "../screens/WeightScreen"
import BMI from "../screens/BMIScreen"
import BMIEdit from "../screens/BMIEditScreen"
import Results from "../screens/ResultsScreen"
import ResultDelete from "../screens/ResultDeleteScreen"
import ListDelete from "../screens/ListDeleteScreen"
import ListDeleteAll from "../screens/ListDeleteAllScreen"
import ListEdit from "../screens/ListEditScreen"
import ArticleView from "../screens/ArticleViewScreen"
import HealthPractice from "../screens/HealthPracticeScreen"
import * as SecureStore from "expo-secure-store";
import SplashScreen from "../screens/SplashScreen";
import HealthPracticeScreen from "../screens/HealthPracticeScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const isAuth = isAuthenticated();

  if (isAuth.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
      {isAuth.isSignedIn ? (
        <>
          <Stack.Screen
            name="Root"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!" }}
          />
            <Stack.Screen
                name="HomeEdit"
                component={HomeEdit}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeDelete"
                component={HomeDelete}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Gender"
                component={Gender}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Height"
                component={Height}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Weight"
                component={Weight}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BMI"
                component={BMI}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Results"
                component={Results}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ResultDelete"
                component={ResultDelete}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BMIEdit"
                component={BMIEdit}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ListDelete"
                component={ListDelete}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ListDeleteAll"
                component={ListDeleteAll}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ListEdit"
                component={ListEdit}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ArticleView"
                component={ArticleView}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HealthPractice"
                component={HealthPractice}
                options={{ headerShown: false }}
            />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: secondary,
        tabBarStyle: { ...styles.tabBar, ...styles.shadow },
        headerStyle: {
          elevation: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          headerTitleStyle: { fontWeight: "700" },
          headerTitleAlign: "center",
          headerShown: false,
          tabBarIcon: ({ color }) => (
              <Image style={{marginBottom: 10}}
                     source={require('../assets/images/icons/profile.png')}
              />
          ),
        })}
      />
        <BottomTab.Screen
            name="List"
            component={List}
            options={({ navigation }: RootTabScreenProps<"List">) => ({
                headerTitleStyle: { fontWeight: "700" },
                headerTitleAlign: "center",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Image style={{marginBottom: 10}}
                           source={require('../assets/images/icons/list.png')}
                    />
                )
            })}
        />
        <BottomTab.Screen
            name="Check"
            component={Check}
            options={({ navigation }: RootTabScreenProps<"Check">) => ({
                headerTitleStyle: { fontWeight: "700" },
                headerTitleAlign: "center",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Image style={{marginBottom: 10}}
                           source={require('../assets/images/icons/check.png')}
                    />
                )
            })}
        />
        <BottomTab.Screen
            name="Article"
            component={Article}
            options={({ navigation }: RootTabScreenProps<"Check">) => ({
                headerTitleStyle: { fontWeight: "700" },
                headerTitleAlign: "center",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Image style={{marginBottom: 10}}
                           source={require('../assets/images/icons/wish.jpg')}
                    />
                )
            })}
        />
        <BottomTab.Screen
            name="Health"
            component={Health}
            options={({ navigation }: RootTabScreenProps<"Health">) => ({
                headerTitleStyle: { fontWeight: "700" },
                headerTitleAlign: "center",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Image style={{marginBottom: 10}}
                           source={require('../assets/images/icons/health.png')}
                    />
                )
            })}
        />
      {/*<BottomTab.Screen*/}
      {/*  name="Products"*/}
      {/*  component={ModalScreen}*/}
      {/*  options={({ navigation }: RootTabScreenProps<"Products">) => ({*/}
      {/*    headerTitleStyle: { fontFamily: "space-mono", fontWeight: "700" },*/}
      {/*    headerTitleAlign: "center",*/}
      {/*    tabBarIcon: ({ color }) => (*/}
      {/*      <Feather*/}
      {/*        name="shopping-bag"*/}
      {/*        size={26}*/}
      {/*        color={color}*/}
      {/*        style={{ marginBottom: 10 }}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*    headerLeft: () => (*/}
      {/*      <Pressable*/}
      {/*        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}*/}
      {/*      >*/}
      {/*        <Hamburger />*/}
      {/*      </Pressable>*/}
      {/*    ),*/}
      {/*    headerRight: () => (*/}
      {/*      <Pressable onPress={() => navigation.navigate("Modal")}>*/}
      {/*        <Profile />*/}
      {/*      </Pressable>*/}
      {/*    ),*/}
      {/*  })}*/}
      {/*/>*/}
      {/*<BottomTab.Screen*/}
      {/*  name="Add"*/}
      {/*  component={NotFoundScreen}*/}
      {/*  options={({ navigation }: RootTabScreenProps<"Add">) => ({*/}
      {/*    headerTitleStyle: { fontFamily: "space-mono", fontWeight: "700" },*/}
      {/*    headerTitleAlign: "center",*/}
      {/*    tabBarIcon: () => (*/}
      {/*      <Entypo*/}
      {/*        name="plus"*/}
      {/*        size={40}*/}
      {/*        color={"#fff"}*/}
      {/*        style={{ marginBottom: -3 }}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*    tabBarButton: (props) => (*/}
      {/*      <TouchableOpacity*/}
      {/*        {...props}*/}
      {/*        style={{*/}
      {/*          top: -20,*/}
      {/*          justifyContent: "center",*/}
      {/*          alignItems: "center",*/}
      {/*          ...styles.shadow,*/}
      {/*        }}*/}
      {/*        activeOpacity={0.7}*/}
      {/*        onPress={() => {}}*/}
      {/*      >*/}
      {/*        <View style={[styles.addBtn, { backgroundColor: primary }]}>*/}
      {/*          {props.children}*/}
      {/*        </View>*/}
      {/*      </TouchableOpacity>*/}
      {/*    ),*/}
      {/*    headerLeft: () => (*/}
      {/*      <Pressable*/}
      {/*        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}*/}
      {/*      >*/}
      {/*        <Hamburger />*/}
      {/*      </Pressable>*/}
      {/*    ),*/}
      {/*    headerRight: () => (*/}
      {/*      <Pressable onPress={() => navigation.navigate("Modal")}>*/}
      {/*        <Profile />*/}
      {/*      </Pressable>*/}
      {/*    ),*/}
      {/*  })}*/}
      {/*/>*/}
      {/*<BottomTab.Screen*/}
      {/*  name="Search"*/}
      {/*  component={ModalScreen}*/}
      {/*  options={({ navigation }: RootTabScreenProps<"Search">) => ({*/}
      {/*    headerTitleStyle: { fontFamily: "space-mono", fontWeight: "700" },*/}
      {/*    headerTitleAlign: "center",*/}
      {/*    tabBarIcon: ({ color }) => (*/}
      {/*      <Feather*/}
      {/*        name="search"*/}
      {/*        size={26}*/}
      {/*        color={color}*/}
      {/*        style={{ marginBottom: 10 }}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*    headerLeft: () => (*/}
      {/*      <Pressable*/}
      {/*        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}*/}
      {/*      >*/}
      {/*        <Hamburger />*/}
      {/*      </Pressable>*/}
      {/*    ),*/}
      {/*    headerRight: () => (*/}
      {/*      <Pressable onPress={() => navigation.navigate("Modal")}>*/}
      {/*        <Profile />*/}
      {/*      </Pressable>*/}
      {/*    ),*/}
      {/*  })}*/}
      {/*/>*/}
      {/*<BottomTab.Screen*/}
      {/*  name="TabTwo"*/}
      {/*  component={TabTwoScreen}*/}
      {/*  options={({ navigation }: RootTabScreenProps<"TabTwo">) => ({*/}
      {/*    headerTitleStyle: { fontFamily: "space-mono", fontWeight: "700" },*/}
      {/*    headerTitleAlign: "center",*/}
      {/*    tabBarIcon: ({ color }) => (*/}
      {/*      <Feather*/}
      {/*        name="user"*/}
      {/*        size={26}*/}
      {/*        color={color}*/}
      {/*        style={{ marginBottom: 10 }}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*    headerLeft: () => (*/}
      {/*      <Pressable*/}
      {/*        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}*/}
      {/*      >*/}
      {/*        <Hamburger />*/}
      {/*      </Pressable>*/}
      {/*    ),*/}
      {/*    headerRight: () => (*/}
      {/*      <Pressable onPress={() => navigation.navigate("Modal")}>*/}
      {/*        <Profile />*/}
      {/*      </Pressable>*/}
      {/*    ),*/}
      {/*  })}*/}
      {/*/>*/}
    </BottomTab.Navigator>
  );
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        drawerActiveTintColor: primary,
        drawerInactiveTintColor: secondary,
        drawerLabelStyle: {
          fontWeight: "700",
          fontSize: 16,
        },
      }}
      initialRouteName="Main"
    >
      <Drawer.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ title: "Home" }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBar: {
    elevation: 0,
    borderTopWidth: 0,
    height: 60,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
  addBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
