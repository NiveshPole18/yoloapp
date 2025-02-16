import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoloPayScreen from '../../components/YoloPayScreen';

export default function YoloPayTab() {
  return (
    <SafeAreaView style={styles.container}>
      <YoloPayScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});