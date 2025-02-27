import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerTintColor: 'white',
                headerShadowVisible: false,
                tabBarStyle: {
                    backgroundColor: '#25292e',
                },
                tabBarActiveTintColor: 'orange',
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    headerTitle: 'Lovina App',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'home-sharp' : 'home-outline'}
                            color={color}
                            size={30}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='about'
                options={{
                    headerTitle: 'About',
                    tabBarLabel: 'About',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={
                                focused
                                    ? 'information-circle'
                                    : 'information-circle-outline'
                            }
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen name='+not-found' options={{}} />
        </Tabs>
    );
}
