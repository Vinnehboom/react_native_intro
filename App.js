/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { colors } from './utils/colors.js';
import { spacing } from './utils/spacing.js';
import { Focus } from './features/focus.js';
import { FocusHistory } from './features/FocusHistory.js';
import { Timer } from './features/Timer.js';
import FlashMessage, { showMessage } from "react-native-flash-message";

const App: () => Node = () => {

  const [currentSubject, setCurrentSubject] = useState(null);
  const [time, setTime] = useState(null);
  const [focusHistory, setFocusHistory] = useState({})

   const resolveClearSubject = () => {
           showMessage({
               message: "Focus target successfully cleared.",
               type: "info",});
               setCurrentSubject(null);
              }

    const resolveSetSubject = (subject, duration) => {
            showMessage({
                   message: "Focus target successfully set!",
                   type: "info",});
            setCurrentSubject(subject)
            setTime(duration)
            let focusHistoryItem = {subject: [duration, duration]}
            setFocusHistory(focusHistory => ({...focusHistory, focusHistoryItem}))
    }

  return (
    <SafeAreaView style={styles.container}>
          <FlashMessage position="top" />
        {!currentSubject ?  (
        <>
        <Text style={styles.title}> FocusTime App </Text>
        <Focus addSubject={resolveSetSubject} setTime={setTime} />
        <FocusHistory history={focusHistory} />
        </>
        )
        : (
        <>
            <Timer
            focusMinutes={time}
            focusSubject={currentSubject}
            clearSubject={resolveClearSubject}
            />
          </>
            )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    title: {
    fontWeight: 'bold',
    fontSize: spacing.xxl,
    color: colors.white,
    textAlign: 'center'
    },
    container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: colors.darkBlue
    }
});

export default App;
