import React from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/spacing';

export const Timing = ({addMinute, clearSubject}) => {
    return (
        <View style={styles.timingButton}>
            <RoundedButton style={styles.button} size={75} title={'+1'} onPress={addMinute}/>
            <RoundedButton style={styles.button} size={75} title={'Reset'} onPress={clearSubject}/>
        </View>
    )
}

const styles = StyleSheet.create({
    timingButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    button: {
    margin: spacing.md}
});