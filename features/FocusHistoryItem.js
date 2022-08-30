import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { spacing } from '../utils/spacing';
import { colors } from '../utils/colors';

export const FocusHistoryItem = ({name, times}) => {
    return(
        <Card containerStyle={styles.historyItem}>
            <Card.Title style={styles.itemName}>{name}</Card.Title>
            <Text style={styles.itemSubTitle}> { times[0] } / { times[1] } minutes </Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    historyItem: {
    flexDirection: 'row',
    width: '40%',
    backgroundColor: colors.lightBlue,
    marginTop: spacing.md,
    borderRadius: 10,
    shadowColor: 'rgba(94, 132, 226, 0.5)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: .5,
    shadowRadius: 8,
    },
    itemName: {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'center'
    },
    itemSubTitle: {
        color: colors.white,
        fontSize: spacing.md
    }
})