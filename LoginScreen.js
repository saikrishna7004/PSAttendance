import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		if (username === '1' && password === '2') {
			navigation.navigate('Attendance');
		} else {
			alert('Invalid username or password');
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome!</Text>
			<View style={styles.formContainer}>
				<TextInput
					style={styles.input}
					placeholder="Username"
					value={username}
					onChangeText={(text) => setUsername(text)}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry={true}
				/>
				<Button title="Login" onPress={handleLogin} style={styles.btn} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#f0f0f0',
		padding: 40,
	},
	title: {
		textAlign: 'center',
		fontSize: 24,
		marginBottom: 20,
		fontWeight: 'bold',
	},
	formContainer: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
		elevation: 5,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		marginVertical: 10,
		padding: 10,
		borderRadius: 5,
	},
});

export default LoginScreen;