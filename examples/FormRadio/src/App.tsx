import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import FormRadio from './FormRadio';

const App = () => {
  return (
    <div>
      <Typography variant='h4' component='h1'>
        Form Radio
      </Typography>
      <FormRadio />
    </div>
  );
};

export default App;
