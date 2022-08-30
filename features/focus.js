import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors.js';
import { spacing } from '../utils/spacing.js';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton.js';
import DropDownPicker from 'react-native-dropdown-picker';
import { showMessage } from "react-native-flash-message";


export const Focus = ({ addSubject, setTime }) => {
const [subject, setSubject] = useState('');
const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '5 minutes', value: 5},
    {label: '10 minutes', value:  10},
    {label: '15 minutes', value: 15}
  ]);

    const resolveSubmit = () => {
        if(value && subject) {
             addSubject(subject, value)
        }  else {
            showMessage({
                        message: "Please set both a subject and a starting time to start your focus.",
                        type: "danger",
        })}
    }
return (
<View style={styles.container}>
    <View style={styles.focusContainer}>
        <View style={styles.inputContainer}>
            <TextInput
            label='What would you like to focus on?'
            style={styles.input}
             onChangeText={setSubject}
             />
              <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={{color: 'black', flex: .3}}
                          />
          </View>
         <View styles={styles.button}>
             <RoundedButton title='Start' size={spacing.xxxl} onPress={resolveSubmit}/>
        </View>
    </View>
</View>
);
}

const styles = StyleSheet.create({
    focusContainer: {
    flexDirection: 'row',
    paddingTop: spacing.lg,
    justifyContent: 'center',
    margin: spacing.lg,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        marginRight: spacing.md,
        },
    input: {
    flex: 1,
    marginBottom: spacing.md
    },
    button: {
    flex: 1,
    justifyContent: 'center',
    },

    container: {
    flex: .4,
    },
    text: {
    color: colors.white
    }
});