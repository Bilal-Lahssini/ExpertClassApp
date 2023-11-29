import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
const ProfileScreen = () => {
  // Replace with your actual icons and images paths
  const backIcon = require('./assets/icons/back.png');
  const moreIcon = require('./assets/icons/more.png');
  const profileImage = require('./assets/img/profile-pic.png');
  // Dummy data for the profile
  const profileData = {
    name: 'Armin Barzegar',
    role: 'Designer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    stats: {
      posts: 100,
      followers: 100,
      following: 100,
    },
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={backIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.name}>{profileData.name}</Text>
        <TouchableOpacity>
          <Image source={moreIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileSection}>
        <Image source={profileImage} style={styles.profilePic} />
        <Text style={styles.role}>{profileData.role}</Text>
        <Text style={styles.bio}>{profileData.bio}</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.statNumber}>{profileData.stats.posts}</Text>
          <Text style={styles.statNumber}>{profileData.stats.followers}</Text>
          <Text style={styles.statNumber}>{profileData.stats.following}</Text>
          {/* Add labels for stats */}
        </View>
        {/* Add content grid or list */}
      </View>
      {/* Add bottom navigation bar */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Replace with the actual color from your design
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  icon: {
    width: 24, // Replace with the actual size of your icons
    height: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    // Add your styling here
  },
  profileSection: {
    alignItems: 'center',
    // Add your styling here
  },
  profilePic: {
    width: 100, // Replace with the actual size of your profile image
    height: 100,
    borderRadius: 50, // Half of the width/height to make it round
    // Add your styling here
  },
  role: {
    // Add your styling here
  },
  bio: {
    // Add your styling here
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // Add your styling here
  },
  statNumber: {
    // Add your styling here
  },
  // Add more styles as needed
});
export default ProfileScreen;