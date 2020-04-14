import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: "35%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "white",
    },
  }));

const TodoList = ({todos,deleteTodo }) => {
      const classes = useStyles();
    return (
        <List className={classes.root}>
        {todos.map((todo,index)=>(
            <ListItem key={index.toString()} dense button>
            <Checkbox tabIndex={-1} disableRipple />
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => {
                        deleteTodo(index);
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
        </List>
    )
}

export default TodoList;
