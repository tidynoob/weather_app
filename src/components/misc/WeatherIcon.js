import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '@chakra-ui/react';

function WeatherIcon(props) {
  const { iconId, desc, rest } = props;
  const imgUrl = `http://openweathermap.org/img/wn/${iconId}@4x.png`;

  return <Image src={imgUrl} alt={desc} {...rest} />;
}

WeatherIcon.propTypes = {
  iconId: PropTypes.string,
  desc: PropTypes.string,
  rest: PropTypes.shape({}),
};

WeatherIcon.defaultProps = {
  iconId: '',
  desc: '',
  rest: {},
};

export default WeatherIcon;
