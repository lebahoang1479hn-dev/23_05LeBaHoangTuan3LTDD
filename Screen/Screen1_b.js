import React from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/fg3.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>FORGET PASSWORD</Text>
      </View>

      <View style={styles.textContainer1}>
        <Text style={styles.text1}>Provide your account email for which you want to reset pass</Text>
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('./assets/email-icon.png')} style={styles.inputIcon} />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address"autoCapitalize="none"/>
      </View>

      <View style={styles.spacing}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </View>
        </View>
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
    marginTop: 80,
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

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
  },

  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#FFFF00',
    borderRadius: 5,
    paddingHorizontal: 100,
    paddingVertical: 10,
    
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop:10,
  },
  
  footer: {
    
    backgroundColor: '#2ca0c9',
    paddingVertical: 30,
    
  },

  spacing: {
    height: 100,
  },
  
});