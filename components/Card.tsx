import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { theme } from '../constants/theme';

const { width } = Dimensions.get('window');
const CARD_ASPECT_RATIO = 1.586;

interface CardProps {
  cardData: {
    number: string;
    expiry: string;
    cvv: string;
  };
  isFrozen: boolean;
  onFreezeToggle: () => void;
  onCopyDetails: () => void;
}

export function Card({ cardData, isFrozen, onFreezeToggle, onCopyDetails }: CardProps) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: isFrozen ? 0.5 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: isFrozen ? 0.98 : 1,
        useNativeDriver: true,
      })
    ]).start();
  }, [isFrozen, fadeAnim, scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.card, 
          { 
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        {isFrozen ? (
          <Image
            source={{ uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design_Layer-qtX0ONzT88YQdIq835ZqGBKM1GU6Rr.png" }}
            style={styles.frozenImage}
            resizeMode="cover"
          />
        ) : (
          <LinearGradient
            colors={[theme.colors.card.background, '#000000']}
            style={styles.cardGradient}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.brandText}>YOLO</Text>
              <Text style={styles.bankText}>YES BANK</Text>
            </View>
            
            <Text style={styles.cardNumber}>
              {cardData.number.match(/.{1,4}/g).join(' ')}
            </Text>

            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.label}>expiry</Text>
                <Text style={styles.value}>{cardData.expiry}</Text>
              </View>
              <View>
                <Text style={styles.label}>cvv</Text>
                <Text style={styles.value}>***</Text>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.copyButton}
              onPress={onCopyDetails}
            >
              <Feather name="copy" size={18} color={theme.colors.primary} />
              <Text style={styles.copyText}>copy details</Text>
            </TouchableOpacity>

            <View style={styles.cardBrand}>
              <Text style={styles.brandName}>RuPay</Text>
              <Text style={styles.brandType}>PREPAID</Text>
            </View>
          </LinearGradient>
        )}
      </Animated.View>

      <TouchableOpacity
        style={styles.freezeButton}
        onPress={onFreezeToggle}
      >
        <Feather name="star" size={24} color={isFrozen ? theme.colors.primary : theme.colors.text} />
        <Text style={[
          styles.freezeText,
          isFrozen && styles.frozenText
        ]}>
          {isFrozen ? 'unfreeze' : 'freeze'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: width - theme.spacing.xl * 2,
    height: (width - theme.spacing.xl * 2) / CARD_ASPECT_RATIO,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: theme.spacing.l,
  },
  frozenImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  cardGradient: {
    flex: 1,
    padding: theme.spacing.l,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  brandText: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bankText: {
    color: theme.colors.text,
    fontSize: 16,
  },
  cardNumber: {
    color: theme.colors.text,
    fontSize: 24,
    letterSpacing: 2,
    marginBottom: theme.spacing.l,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.l,
  },
  label: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    marginBottom: 4,
  },
  value: {
    color: theme.colors.text,
    fontSize: 16,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.l,
  },
  copyText: {
    color: theme.colors.primary,
    marginLeft: theme.spacing.s,
  },
  cardBrand: {
    position: 'absolute',
    bottom: theme.spacing.l,
    right: theme.spacing.l,
  },
  brandName: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  brandType: {
    color: theme.colors.textSecondary,
    fontSize: 12,
  },
  freezeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  freezeText: {
    color: theme.colors.text,
    marginLeft: theme.spacing.s,
  },
  frozenText: {
    color: theme.colors.primary,
  },
});