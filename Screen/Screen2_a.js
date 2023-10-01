import React from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.textContainer}>
        <Text style={styles.text}>LOGIN</Text>
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('./assets/nguoi.png')} style={styles.inputIcon} />  
        <TextInput style={styles.input} placeholder="Name" keyboardType="name"/>
       
      </View>
      <View style={styles.inputContainer1}>
        <Image source={require('./assets/matkhau.png')} style={styles.inputIcon} />
        <TextInput style={styles.input} placeholder="PassWord" keyboardType="password"/>
      </View>

      <View style={styles.spacing}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </View>
      </View>

      <View style={styles.textContainer1}>
        <Text style={styles.text1}>CREATE ACCOUNT</Text>
      </View>
      
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
  },
  textContainer: {
    marginTop: 70,
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    padding :20,
    
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
    marginTop: 70,
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
    
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 5,
    paddingHorizontal: 130,
    paddingVertical: 10,
    
  },
  buttonText: {
    color: 'white',
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