import * as React from 'react'
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native';
import { MARGIN_LEFT } from 'react-native-onboarding-swiper/src/buttons/util';
const {width, height} = Dimensions.get('window');

export const InputLogin = ({
	titre='Infomration',
	type='normal',
	value='',
	onChangeText,
}) => {
	return (
		<>
			<Text style={styles.inputLabel}>
				{titre}
			</Text>
			<View style={styles.inputContainer}>
			<TextInput style={styles.inputContent}
				value={value}
				onChangeText={onChangeText}
				keyboardType={type === 'email' ? 'email-address' : 'default'}
				secureTextEntry={type === 'password'}  />
				{type === 'password' ? <TouchableOpacity>
						<Image source={require('../../../../assets/whiteEye.png')}
						style={styles.icon} />
				</TouchableOpacity> : null}
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	inputLabel:{
		color: 'black',
		fontSize: 14,
		marginTop: 40,
		fontFamily: 'Montserrat',
		marginBottom: 10,
		alignSelf: 'flex-start',
		marginLeft: 20
	},
	inputContainer:{
		backgroundColor: 'white',
		width: width * 0.90,
		height: 45,
		alignSelf: 'center',
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 5
	},
	inputContent:{
		flex:1,
		color: 'black',
		fontSize: 18,
		fontFamily: 'Montserrat'
	},
	icon: {
		width: 35,
		height: 35,
		marginRight: 8,
		marginTop: 5
	},
})

export default InputLogin;

