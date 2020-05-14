import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default (props) => {
  const { type } = props;
  return (
    <Fragment>
      {type === 'Big' ? (
        <img
          src={spinner}
          style={{
            width: '250px',
            margin: 'auto',
            display: 'block',
            paddingTop: '20rem',
            paddingBottom: '20rem',
          }}
          alt="Landing..."
        />
      ) : (
        <img
          src={spinner}
          style={{
            width: '100px',
            margin: 'auto',
            display: 'block',
            paddingTop: '0rem',
            paddingBottom: '0rem',
          }}
          alt="Landing..."
        />
      )}
    </Fragment>
  );
};
