import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getThemeProps } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePicker(props) {
  const classes = useStyles();
    const handleOnchange = (e) =>{
        console.log(e)
        props.onChange(e.target.value)
    }
  return (
    <form className={classes.container} noValidate>
      <TextField
        dateFormat="yyyy/mm/dd"
        id="date"
        label={props.label}
        type="date"
        className={classes.textField}
        onChange = {handleOnchange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
