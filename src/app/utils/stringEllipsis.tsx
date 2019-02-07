
import React from 'react';

/**
 * Ellipsis a string
 *
 * @param {string} key
 *
 */
const stringEllipsis = (key: string) => {
  return (
    <span className='middleEllipsis'>
      <span className='start'> {key.substr(0, key.length - 10)} </span>
      <span className='end'> {key.substr(key.length - 10, key.length)} </span>
    </span>
  );
};

export default stringEllipsis;
