import React from 'react';
import Typography from '@material-ui/core/Typography';


const Header = (props) => {
    return (
       <Typography component="h1" variant="h2">
           {props.title}
       </Typography>
    )
}

export default Header;