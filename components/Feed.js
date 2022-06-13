import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default class Feed extends Component{
  render(){      
    const username = this.props.route.params.userName

    return (
      <View style={styles.container}>
        <Text>Hello from feed!</Text>
        <Text>
            {username}
        </Text>
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
