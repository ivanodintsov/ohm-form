import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      '& > div': {
        display: 'flex'
      },
      '& .MuiTextField-root': {
        width: '50%',

        '& .MuiInput-root': {
          width: '100%'
        }
      },
      '& .MuiFormControl-root': {
        margin: theme.spacing(1)
      },
      '& .full-width-input': {
        display: 'block',
        width: '100%'
      }
    },
    basicRoot: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        display: 'block'
      },
      '& .MuiInput-root': {
        width: '100%'
      }
    },
    button: {
      margin: theme.spacing(1)
    }
  }),
  {
    name: 'MuiFormStyles'
  }
);
