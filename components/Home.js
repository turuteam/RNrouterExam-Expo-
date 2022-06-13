import React, {Component} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>Hello from home!</Text>
        <Button 
        title='Go to Profile'
        onPress={
            ()=> this.props.navigation.navigate("Screen_Profile")
        }
        />
        <Button 
            title='go to Feed'
            onPress={
                ()=> this.props.navigation.navigate("Screen_Feed", {
                    userName: 'Bill',
                })
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
