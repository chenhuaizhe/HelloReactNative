import React,{ Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image
} from 'react-native'
import Forecast from './Forecast'

export default class WeatherMain extends Component {
	constructor(props){
		super(props)
		this.state = {
			zip:'',
			forecast:{
				main:'Sunny',
				description:'very good',
				temp:10
			}
		}
	}

	render () {
		return (
			// <Image source={require("./background.jpg")} resizeMode='cover' style={styles.background}>
				<View style={styles.container}>
					<Text style={styles.welcome}>
					地区的邮政编码是:{this.state.zip}
					</Text>
					<TextInput style={styles.input} onSubmitEditing={(event)=>this._handleInputTextDidChanged(event)}/>
					<Forecast main={this.state.forecast.main} description={this.state.forecast.description} temp={this.state.forecast.temp}/>
				</View>
			// </Image>

		);
	}

	_handleInputTextDidChanged(event) {
		this.setState({zip: event.nativeEvent.text});
    }
}

const styles = StyleSheet.create({
 	input:{
 		fontSize:20,
 		borderWidth:3,
 		height:44
 	},
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#F5FCFF',
		margin:10,
	},
	welcome:{
		fontSize:20,
		textAlign:'center',
		margin:10,
	},

});

