import React from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.textContainer}>
        <Text style={styles.text}>LOGIN</Text>
      </View>

      <View style={styles.inputContainer}>
        
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address"autoCapitalize="none"/>
       
      </View>
      <View style={styles.inputContainer1}>
        <TextInput style={styles.input} placeholder="PassWord" keyboardType="password"autoCapitalize="none"/>
      </View>

      <View style={styles.spacing}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </View>
      </View>

      <View style={styles.textContainer1}>
        <Text style={styles.text1}>When you agree to terms and conditions </Text>
      </View>
      <View style={styles.textContainer2}>
        <Text style={styles.text2}>Forgot your password</Text>
      </View>
      <View style={styles.textContainer3}>
        <Text style={styles.text3}>or Login with</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/fb.png')} style={styles.image} />
        <Image source={require('./assets/z.png')} style={styles.image} />
        <Image source={require('./assets/gg.png')} style={styles.image} />
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8efdf',
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    
  },
  
  textContainer: {
    marginTop: 100,
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
  textContainer2: {
    marginTop: 20,
    alignItems: 'center',
  },
  text2: {
    fontSize: 16 ,
    fontWeight: 'bold',
  },
  textContainer3: {
    marginTop: 20,
    alignItems: 'center',
  },
  text3: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  
  
});