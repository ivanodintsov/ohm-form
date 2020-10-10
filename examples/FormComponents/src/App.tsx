import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import FormComponents from './FormComponents';

const App = () => {
  return (
    <div>
      <Typography variant='h4' component='h1'>
        Form Components
      </Typography>
      <FormComponents />
    </div>
  );
};

export default App;
