import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import ScopedForm from './ScopedForm';

const App = () => {
  return (
    <div>
      <Typography variant='h4' component='h1'>
        Scoped Form
      </Typography>
      <ScopedForm />
    </div>
  );
};

export default App;
