import React from 'react';
import { Loader } from 'semantic-ui-react';
import ReactDelayRender from 'react-delay-render';

const Loading = () => 
  <Loader active size="massive" />;

// Delay rendering here immediately because if the
// action happens quickly, we don't want an unnecessary
// flash of the loader.
export default ReactDelayRender({ delay: 300 })(Loading);