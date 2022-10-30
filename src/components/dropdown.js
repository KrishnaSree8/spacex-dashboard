import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Dropdown(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
            <Select
                style={{color:'#0e5c69'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select-filled"
                value={props.value}
                onChange={props.onChange}
                // inputProps={{ style: { color: 'white'}}}
            >
                {
                    _.map(props.list, (item, index) =>{
                        return(
                            <MenuItem value={item.value} key={index}>{item.label}</MenuItem>
                        ) 
                    })
                }
            </Select>
      </FormControl>
    </div>
  );
}



            