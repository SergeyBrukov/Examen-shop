import React from 'react';

import { StyledAlertWrapper } from './styledAlert';

const AlertMessage = ({message, type, mb, mt, className, center, border}) => {
  return (
    <StyledAlertWrapper center={center} className={className} type={type} mt={mt} mb={mb} border={border}>
      <span>{message}</span>
    </StyledAlertWrapper>
  )
}

export default AlertMessage