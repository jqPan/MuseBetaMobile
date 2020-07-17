import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Picker
} from 'react-native';
import { CHANNELS } from './../../constants/channels.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(40,40,40)'
  },
  inner: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  header: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  describe: {
    color: 'rgb(220,220,220)',
    fontSize: 18,
  },
  field: {
    marginBottom: 15,
    paddingBottom: 5,
  },
  label: {
    fontSize: 15,
    color: 'rgb(250,250,250)',
    marginBottom: 3
  },
  input: {
    fontSize: 20,
    width: '100%',
    color: 'white',
    backgroundColor: 'rgb(60,60,60)',
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 13,
  },
  submit: {
    backgroundColor: 'rgb(255,50,50)',
    width: '100%',
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 5
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase'
  }
});

export const CreateStarterScreen = ({ navigation }) => {
  const [title, setTitle] = useState();
  const [channel, setChannel] = useState();
  const [pitch, setPitch] = useState();

  const validateForNext = () => {
    console.log('yup');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" || Platform.isPad ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={70}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
            <Text style={styles.header}>Preliminary</Text>
            <Text style={styles.describe}>Start your story with an introduction</Text>
          </View>

          <SafeAreaView style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.label}>Title:</Text>
              <TextInput
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.input}
                autoCorrect
                value={title}
                onChangeText={text => setTitle(text)}
              />
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Pitch:</Text>
              <TextInput
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.input}
                multiline
                numberOfLines={3}
                maxLength={140}
                autoCorrect
                value={pitch}
                onChangeText={text => setPitch(text)}
              />
            </View>
            <TouchableOpacity
              style={styles.submit}
              onPress={validateForNext}
            >
              <Text style={styles.submitText}>Next</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};