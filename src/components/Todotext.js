import React from 'react';
import { TextField } from '@material-ui/core';
import usetodoInputstate from './usetodoInputstate';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: "38%",
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
}))

const Todotext = ({saveTodo}) => {

    const classes = useStyles();
    const {todoValue,onChange,reset} = usetodoInputstate(""); //Seperated the hook logic from component

    return (
        <form className={classes.root} onSubmit={(event) => {
            event.preventDefault();
            saveTodo(todoValue);
            reset();
          }}>
            <TextField className={classes.input} variant="outlined" placeholder="Add todo" margin="normal" value={todoValue} onChange={onChange} />
        </form>

    )
}

export default Todotext;
