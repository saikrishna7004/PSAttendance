// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import Attendance from './Attendance'
import AttendancePreview from './AttendancePreview';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Attendance" component={Attendance} />
				<Stack.Screen name="Attendance Preview" component={AttendancePreview} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
