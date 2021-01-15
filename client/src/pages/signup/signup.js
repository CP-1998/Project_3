import React from 'react'
import { Box, TextField, Button, Link } from '@material-ui/core'

const SignUp = () => {
  return (
    <body>
      <Box id="signInCard" color='primary'>
        <p>Sign Up</p>
        <hr></hr>
        <TextField label="Enter your email" />
        <br></br>
        <br></br>
        <TextField label="Enter your password" />
        <br></br>
        <br></br>
        <Link href="signin">Already have an account?</Link>
        <br></br>
        <br></br>
        <Button variant='contained' color='primary'>
          Submit
        </Button>
      </Box>
    </body>
  )
}

export default SignUp