import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FocusHistoryItem } from './FocusHistoryItem';
import { colors } from '../utils/colors';
import { spacing } from '../utils/spacing';

export const FocusHistory = ({ history }) => {

    if (!history) { return null };

    return(
    <View style={styles.historyContainer}>
        <Text style={styles.title}> Previously focused subjects</Text>
         {
           Object.entries(history).map(([key, value]) =>
            (
           <FocusHistoryItem key={key} name={key} times={value} />
                )
                )}
    </View>

    )
}

const styles = StyleSheet.create({
    historyContainer: {
     flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: spacing.lg,
        marginLeft: spacing.xl,
        color: colors.white
    }

})