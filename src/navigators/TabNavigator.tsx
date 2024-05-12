import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ticketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}>
      <React.Fragment>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View
                  style={[
                    styles.activeTabBackground,
                    focused ? {backgroundColor: COLORS.Orange} : {},
                  ]}>
                  <CustomIcon
                    name="video"
                    color={COLORS.White}
                    size={FONTSIZE.size_30}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View
                  style={[
                    styles.activeTabBackground,
                    focused ? {backgroundColor: COLORS.Orange} : {},
                  ]}>
                  <CustomIcon
                    name="search"
                    color={COLORS.White}
                    size={FONTSIZE.size_30}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Ticket"
          component={ticketScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View
                  style={[
                    styles.activeTabBackground,
                    focused ? {backgroundColor: COLORS.Orange} : {},
                  ]}>
                  <CustomIcon
                    name="ticket"
                    color={COLORS.White}
                    size={FONTSIZE.size_30}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="User"
          component={UserAccountScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View
                  style={[
                    styles.activeTabBackground,
                    focused ? {backgroundColor: COLORS.Orange} : {},
                  ]}>
                  <CustomIcon
                    name="user"
                    color={COLORS.White}
                    size={FONTSIZE.size_30}
                  />
                </View>
              );
            },
          }}
        />
      </React.Fragment>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});

export default TabNavigator;