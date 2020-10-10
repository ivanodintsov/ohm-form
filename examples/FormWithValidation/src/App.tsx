import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import FormWithValidation from './FormWithValidation';

const App = () => {
  return (
    <div>
      <Typography variant='h4' component='h1'>
        Form With Validation
      </Typography>
      <FormWithValidation />
    </div>
  );
};

export default App;
