import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export const InternalizationExample = () => {

  const toggleLanguage = (locale: 'en' | 'fr') => {
  };
  return (
    <>
      <View style={styles.content}>
        <Button title={"french"} onPress={() => toggleLanguage('fr')} />
        <Button title={"english"} onPress={() => toggleLanguage('en')} />
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  content: { gap: 20, padding: 20 },
});
