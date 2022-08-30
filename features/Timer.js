import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing } from '../utils/spacing';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './TimeButtons';

const secondInMs = 1000;

const vibrationPattern = [
    1* secondInMs,
    1* secondInMs,
    2* secondInMs
]

export const Timer = ({focusMinutes, focusSubject, clearSubject}) => {
    const [isStarted, setIsStarted] = useState(false);
    const [progressBar, setProgressBar] = useState(1)
    const [minutes, setMinutes] = useState(focusMinutes)

    const renderTimingButtons = () => {
        return(<Timing minutes={minutes} onChangeTime={setMinutes} />)
    };

    const addMinute = () => { setMinutes(minutes+1) }

    return(
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown minutes={minutes} setMinutes={setMinutes} isPaused={!isStarted} onProgress={setProgressBar} onEnd={() =>{}}/>
            </View>
            <View style={ {paddingTop: spacing.md}}>
            <Text style={ styles.title }>
                Focusing on:
            </Text>
            <Text style={ styles.task }>
                {focusSubject}
            </Text>
        </View>
        <View style={styles.progress}>
            <ProgressBar
                progress={progressBar}
                color={colors.lightBlue}
                style={styles.progress.bar}/>
        </View>
        <View style={styles.buttonWrapper}>
            { !isStarted ? (
            <RoundedButton
                        title={'start'}
                        onPress={() => setIsStarted(true)}
            />
            ) :
            (
            <RoundedButton
                        title={'stop'}
                        onPress={() => setIsStarted(false)}
            />
            )
            }
        </View>
        <View style={styles.timingWrapper}>
            <Timing addMinute={addMinute} clearSubject={clearSubject} />
        </View>
    </View>
)
};

const styles = StyleSheet.create(
{
    container: {
        flex: 1,
        color: colors.white,
    },
    progress:{
    paddingTop: spacing.sm,
    bar: {
        height: spacing.sm,
        margin: spacing.sm
    }
    },
    countdown: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: spacing.lg,
        textAlign: 'center'
    },
    task: {
        fontSize: spacing.lg,
        color: colors.white,
        textAlign: 'center'
    },
    buttonWrapper: {
        flex: .3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'},
    timingWrapper: {
            flex: .3,
            padding: 15,
            }
})