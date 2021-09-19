import React, { useEffect } from 'react';
import { TheContent, TheSidebar, TheFooter, TheHeader } from './index';
import { useSelector } from 'react-redux';
import TheLoading from './TheLoading/index';

const TheLayout = () => {
  const loading = useSelector(s => s.layout.loading);

  useEffect(() => {
    console.log('loading::::', loading);
  }, [loading]);

  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      {loading && <TheLoading />}
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        {/* <TheFooter /> */}
      </div>
    </div>
  );
};

export default TheLayout;
