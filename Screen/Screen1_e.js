import React from 'react';
import { StyleSheet, View, Image, Text, TextInput,RadioButton } from 'react-native';
//import { RadioButton } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.textContainer}>
        <Text style={styles.text}>REGISTER</Text>
      </View>

      <View style={styles.inputContainer}>
        
        <TextInput style={styles.input} placeholder="Name" keyboardType="name"/>
       
      </View>
      <View style={styles.inputContainer1}>
        <TextInput style={styles.input} placeholder="Phone" keyboardType="phone"/>
      </View>
      <View style={styles.inputContainer1}>
        <TextInput style={styles.input} placeholder="Email" keyboardType="mail"/>
      </View>
      <View style={styles.inputContainer1}>
        <TextInput style={styles.input} placeholder="PassWord" keyboardType="password"/>
      </View>
      <View style={styles.inputContainer1}>
        <TextInput style={styles.input} placeholder="Birthday" keyboardType="birthday"/>
      </View>
      
      
      <View style={styles.spacing}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </View>
        </View>
      </View>

      <View style={styles.textContainer1}>
        <Text style={styles.text1}>When you agree to terms and conditions </Text>
      </View>
      
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8efdf',
  },

  textContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  text: {
    fontSize: 34,
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
    marginTop: 40,
    paddingHorizontal:5,
  },
  
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 30,
    //paddingHorizontal:5,
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
    backgroundColor: '#FF0000',
    borderRadius: 5,
    paddingHorizontal: 130,
    paddingVertical: 10,
    
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop:10,
  },
  textContainer1: {
    marginTop: 20,
    alignItems: 'center',
  },
  text1: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  
});