import React, { useEffect, useState } from 'react';
import InitialLoader from './InitialLoader';

const ClientWrapper = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
  }, []);

  return (
    <>
      {showLoader && <InitialLoader />}
      {children}
    </>
  );
};

export default ClientWrapper; 