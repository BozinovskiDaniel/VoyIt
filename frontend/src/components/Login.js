  
import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    textAlign: 'center'
  },
  textField: {
    margin: '10px auto 10px auto'
  },
  button: {
    marginTop: 20,
  },
  header: {
    fontSize: '40px',
    textAlign: 'center',
    paddingTop: '50px'
  }
}));


function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

  const onChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: email,
      password: password
    }

    axios.post('users/login', user)
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      props.history.push(`/profile`)
    })
    .catch(err => {
      console.error(err);
      setErrors(err.response.data);
    })
  }



  const classes = useStyles();

  return (<Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <h1 className={classes.header}>Please sign in</h1>
          <form noValidate onSubmit={onSubmit}>
            <TextField id="email" name="email" type="email" label="Email" helperText={errors.email} error={errors.email ? true: false} className={classes.textField}
              value={email} onChange={onChange} fullWidth />
            <TextField id="password" name="password" type="password" label="Password" helperText={errors.password} error={errors.password ? true: false} className={classes.textField}
            value={password} onChange={onChange} fullWidth />
            <Button type="submit" variant="contained" color="primary" className={classes.button}>Log In</Button>
          </form>
        </Grid>
        <Grid item sm />
    </Grid>
  )
}


export default Login;