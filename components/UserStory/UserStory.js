import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import {UserProfileImage} from '../UserProfileImage/UserProfileImage';
import {style} from './style';

export const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={props.profileImage} imageDimension={65} />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};
