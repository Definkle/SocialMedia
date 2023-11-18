import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {globalStyle} from './assets/styles/globalStyle';
import {Title} from './components/Title/Title';
import {UserStory} from './components/UserStory/UserStory';

const App = () => {
  const userStories = [
    {
      id: 1,
      firstName: 'Joseph',
      lastName: 'Williams',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 2,
      firstName: 'Angel',
      lastName: 'Blake',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 3,
      firstName: 'White',
      lastName: 'Andrews',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 4,
      firstName: 'Oliver',
      lastName: 'George',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 5,
      firstName: 'Samantha',
      lastName: 'Washington',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 6,
      firstName: 'Michael',
      lastName: 'Ivy',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 7,
      firstName: 'James',
      lastName: 'Gallagher',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 8,
      firstName: 'Matthew',
      lastName: 'Decker',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 9,
      firstName: 'Mark',
      lastName: 'Sanders',
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={'Let’s Explore '} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={userStories}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
