import React from 'react';

import RadioIcon from '../Common/RadioIcon';
// import sedan from '../../images/sedan.png';

function Filter() {
  const radioObj = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/1085/1085966.png',
      value: 'sedan',
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/1085/1085966.png',
      value: 'sedan',
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/1085/1085966.png',
      value: 'sedan',
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/1085/1085966.png',
      value: 'sedan',
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/1085/1085966.png',
      value: 'sedan',
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/1085/1085966.png',
      value: 'sedan',
    },
  ];

  return (
    <div>
      <RadioIcon imgs={radioObj} />
    </div>
  );
}

export default Filter;
