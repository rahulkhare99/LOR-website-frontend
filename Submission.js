import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const style = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(10),
      width: '25ch',
      marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    },
  },
  heading: {
    alignItems: 'center',
    margin: theme.spacing(10),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function MultilineTextFields() {

    const classes = style();
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');
    const [value4, setValue4] = React.useState('');

    const handleChangeAchievements = (event) => {
        setValue1(event.target.value1);
    };
    const handleChangeYourself = (event) => {
        setValue2(event.target.value2);
    };
    const handleChangeColleges = (event) => {
        setValue3(event.target.value3);
    };
    const handleChangeTeachers = (event) => {
        setValue4(event.target.value4);
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.heading}>
                Enter details of LOR here
            <TextField
            id="standard-textarea"
            label="Academic achievements:"
            multiline
            rowsMax={4}
            value={value1}
            onChange={handleChangeAchievements}
            />
            <TextField
            id="standard-textarea"
            label="About yourself:"
            rowsMax={4}
            value={value2}
            onChange={handleChangeYourself}
            multiline
            />
            <TextField
            id="standard-textarea"
            label="Colleges:"
            multiline
            rowsMax={4}
            value={value3}
            onChange={handleChangeColleges}
            />
            <TextField
            id="standard-textarea"
            label="Teachers:"
            multiline
            rowsMax={4}
            value={value4}
            onChange={handleChangeTeachers}
            />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
            </div>
        </form>
    );
}


