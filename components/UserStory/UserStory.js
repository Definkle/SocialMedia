import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {style} from './style';
export const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={props.profileImage} style={style.image} />
      </View>
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
};
