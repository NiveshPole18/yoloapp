import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Card } from './Card';
import { PaymentToggle } from './PaymentToggle';
import { generateCardData } from '../utils/cardUtils';
import { theme } from '../constants/theme';

export default function YoloPayScreen() {
  const [activeTab, setActiveTab] = useState('card');
  const [isFrozen, setIsFrozen] = useState(false);
  const cardData = generateCardData();

  const handleCopyDetails = () => {
    Alert.alert('Success', 'Card details copied to clipboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>select payment mode</Text>
      <Text style={styles.subtitle}>
        choose your preferred payment method to make payment.
      </Text>

      <PaymentToggle
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <Text style={styles.cardTitle}>YOUR DIGITAL DEBIT CARD</Text>
      
      <Card
        cardData={cardData}
        isFrozen={isFrozen}
        onFreezeToggle={() => setIsFrozen(!isFrozen)}
        onCopyDetails={handleCopyDetails}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.l,
  },
  title: {
    fontSize: 24,
    color: theme.colors.text,
    fontWeight: 'bold',
    marginBottom: theme.spacing.s,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.l,
  },
  cardTitle: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    marginBottom: theme.spacing.m,
    textTransform: 'uppercase',
  },
});