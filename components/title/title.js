import PropTypes from 'prop-types';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {style} from './style';

export const Title = props => {
  return <Text style={style.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
