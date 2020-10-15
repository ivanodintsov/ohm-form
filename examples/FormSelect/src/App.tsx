import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import FormSelect from './FormSelect';

const App = () => {
  return (
    <div>
      <Typography variant='h4' component='h1'>
        Form Select
      </Typography>
      <FormSelect />
    </div>
  );
};

export default App;
