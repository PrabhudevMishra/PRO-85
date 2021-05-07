import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./appTabNavigator";
import CustomSidebarMenu from "./customSidebarMenu";
import SettingScreen from "../screens/settingsScreen";
import MyBarters from "../screens/myBarters";
import Notification from "../screens/notificationsScreen";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: AppTabNavigator },
    MyBarters: { screen: MyBarters },
    Notification: { screen: Notification },
    Settings: { screen: SettingScreen },
  },
  {
    contentComponent: CustomSidebarMenu,
  },
  {
    initialRouteName: "Home",
  }
);
