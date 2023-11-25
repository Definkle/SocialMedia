import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {userPosts} from './assets/constants/userPosts';
import {userStories} from './assets/constants/userStories';
import {globalStyle} from './assets/styles/globalStyle';
import {scaleFontSize} from './assets/styles/scaling';
import {Title} from './components/Title/Title';
import {UserPost} from './components/UserPost/UserPost';
import {UserStory} from './components/UserStory/UserStory';

const App = () => {
  const userStoryPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

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

    setIsLoadingUserPosts(true);
    const getInitialUserPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialUserPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar backgroundColor={'red'} barStyle={'light-content'} />
        <View style={globalStyle.userPostContainer}>
          <FlatList
            ListHeaderComponent={
              <>
                <View style={globalStyle.header}>
                  <Title title={'Let’s Explore '} />
                  <TouchableOpacity style={globalStyle.messageIcon}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size={scaleFontSize(20)}
                      color={'#898DAE'}
                    />
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
              </>
            }
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingUserPosts) {
                return;
              }

              setIsLoadingUserPosts(true);

              const userPostsToAppend = pagination(
                userPosts,
                userPostsCurrentPage + 1,
                userPostsPageSize,
              );

              if (userPostsToAppend.length) {
                setUserPostsCurrentPage(userPostsCurrentPage + 1);
                setUserPostsRenderedData(prevState => [
                  ...prevState,
                  ...userPostsToAppend,
                ]);
              }

              setIsLoadingUserPosts(false);
            }}
            showsVerticalScrollIndicator={false}
            data={userPostsRenderedData}
            renderItem={({item}) => (
              <UserPost
                key={'userPost' + item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                image={item.image}
                profileImage={item.profileImage}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
