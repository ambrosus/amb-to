import React from 'react';
import SVG from 'react-svg';
import spinnerLogo from 'assets/svg/spinner.svg';
import './Spinner.scss';

const Spinner = () => {
  return (
    <SVG className='spinner' src={spinnerLogo} wrapper='span' />
  );
};

export default Spinner;
