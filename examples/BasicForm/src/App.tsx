import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import BasicForm from './BasicForm';

const App = () => {
  return (
    <div>
      <Typography variant='h4' component='h1'>
        Basic Form
      </Typography>
      <BasicForm />
    </div>
  );
};

export default App;
