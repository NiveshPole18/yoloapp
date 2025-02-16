import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarBackground: () => (
          <View style={styles.tabBarBackground}>
            <View style={styles.tabBarCurve} />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="yolopay"
        options={{
          title: 'YoloPay',
          tabBarIcon: ({ color }) => (
            <View style={styles.centerTab}>
              <Feather name="credit-card" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ginie"
        options={{
          title: 'Ginie',
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: theme.colors.background,
  },
  tabBarCurve: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  centerTab: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.background,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: theme.colors.inactive,
  },
});