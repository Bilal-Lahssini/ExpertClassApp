import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreatePostScreen = () => {
  const navigation = useNavigation();

  const handleCreateVideo = () => console.log('Create Video');
  const handleAddFromLibrary = () => console.log('Add From Library');
  
  // Navigate to the MakePhoto screen
  const handleMakePhoto = () => {
    navigation.navigate('MakePhoto');
  };

  const handleNext = () => console.log('Next');
  const handleCancel = () => console.log('Cancel');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.backButton}>{''}</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Create a post</Text>
      <TouchableOpacity style={styles.optionButton} onPress={handleMakePhoto}>
        <Image
          source={require('../assets/videoicon.png')}
          style={styles.icon}
        />
        <Text style={styles.optionText}>Make a Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={handleAddFromLibrary}>
        <Image
          source={require('../assets/libary.png')}
          style={styles.icon}
        />
        <Text style={styles.optionText}>Add from library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={handleNext}>
        <Text style={styles.actionText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={handleCancel}>
        <Text style={styles.actionText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF', // Replace with your actual background color
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 18,
    // Add other styling for the back button
  },
  headerTitle: {
    fontSize: 22,
    top: -80,
    fontWeight: 'bold',
    // Add other styling for header title
  },
  optionButton: {
    width: '80%',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#F0F0F0', // Replace with your actual button color
  },
  actionButton: {
    width: '80%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#E0E0E0', // Replace with your actual button color
  },
  actionText: {
    fontSize: 16,
    // Add other styling for action button text
  },
  icon: {
    width: 50, // Adjust based on your icon size
    height: 50, // Adjust based on your icon size
    // Add other styling for icon
  },
  optionText: {
    fontSize: 18,
    marginTop: 8,
    // Add other styling for option text
  },
  // Add more styles as needed
});
export default CreatePostScreen;