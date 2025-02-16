import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

interface PaymentToggleProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function PaymentToggle({ activeTab, onTabChange }: PaymentToggleProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'pay' && styles.activeTab]}
        onPress={() => onTabChange('pay')}
      >
        <Text style={[styles.tabText, activeTab === 'pay' && styles.activeTabText]}>
          pay
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'card' && styles.activeTab]}
        onPress={() => onTabChange('card')}
      >
        <Text style={[styles.tabText, activeTab === 'card' && styles.activeTabText]}>
          card
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: theme.spacing.l,
  },
  tab: {
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.s,
    borderRadius: 20,
    marginRight: theme.spacing.m,
    borderWidth: 1,
    borderColor: theme.colors.inactive,
  },
  activeTab: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  tabText: {
    color: theme.colors.text,
    fontSize: 16,
  },
  activeTabText: {
    color: theme.colors.text,
    fontWeight: 'bold',
  },
});