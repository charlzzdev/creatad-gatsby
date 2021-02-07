import React from 'react';

import './index.scss';

const Tooltip = ({ icon, children }) => {
  return <span className="tooltip" data-tooltip={children}>{icon || '?'}</span>
}

export default Tooltip;
