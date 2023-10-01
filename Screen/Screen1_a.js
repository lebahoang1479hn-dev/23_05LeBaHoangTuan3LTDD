import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/fg2.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>GROW YOUR BUSINESS</Text>
      </View>

      <View style={styles.textContainer1}>
        <Text style={styles.text1}>We will help you to grow your business using online server</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer2}>
        <Text style={styles.text2}>HOW WE WORK?</Text>
      </View>

      <View style={styles.footer}>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1f4f6',
  },
  imageContainer: {
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: 70,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  textContainer1: {
    marginTop: 40,
    alignItems: 'center',
  },
  text1: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  buttonContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button:{
    backgroundColor :'#FFFF00',
    borderRadius:5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },

  textContainer2: {
    marginTop: 35,
    alignItems: 'center',
  },
  text2: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  
  footer: {
    backgroundColor: '#2ca0c9',
    paddingVertical: 50,
    
  },
  
});