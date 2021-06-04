import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {

  return (
    <>
      <div>
        hello world
      </div>
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
