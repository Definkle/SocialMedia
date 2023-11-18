import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {userStories} from './assets/constants/userStories';
import {globalStyle} from './assets/styles/globalStyle';
import {Title} from './components/Title/Title';
import {UserStory} from './components/UserStory/UserStory';

const App = () => {
  const userStoryPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startingIndex = (currentPage - 1) * pageSize;
    const endingIndex = startingIndex + pageSize;

    if (startingIndex >= database.length) {
      return [];
    }

    return database.slice(startingIndex, endingIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialUserStories = pagination(userStories, 1, userStoryPageSize);
    setUserStoriesRenderedData(getInitialUserStories);
    setIsLoadingUserStories(false);
  }, []);

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
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserStories) {
              return;
            }

            setIsLoadingUserStories(true);

            const userStoriesToAppend = pagination(
              userStories,
              userStoriesCurrentPage + 1,
              userStoryPageSize,
            );

            if (userStoriesToAppend.length) {
              setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
              setUserStoriesRenderedData(prevState => [
                ...prevState,
                ...userStoriesToAppend,
              ]);
            }

            setIsLoadingUserStories(false);
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={userStoriesRenderedData}
          renderItem={({item}) => (
            <UserStory
              key={'userStory' + item.id}
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
