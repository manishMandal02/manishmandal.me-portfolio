import React from 'react';

const Divider = () => {
  return (
    <div
      className=' h-28 mt-20 ms:mt-0 ms:h-16'
      style={{
        backgroundImage: 'url(/wave-bg.svg)',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'repeat',
      }}
    ></div>
  );
};

export default Divider;
