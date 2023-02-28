import React from 'react';

import './components.css';
import '../App.css';

const StickyNote = (props) => {
  return (
    <div className="sticky-note shadow-sm text-center mb-3">
      <h6 className="font-weight-bold center">{props.heading}</h6>
      <p className="font-weight-light">{props.text}</p>
    </div>
  );
};

export default StickyNote;
