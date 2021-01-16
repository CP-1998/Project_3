import './signin.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'



function App() {
  return (
    <body>
      <Box id="signInCard" color='primary'>
        <img alt="logo placeholder" id="logoSignIn" src={'https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png'}></img>
        <Button id="xBtn" variant="outlined" color="primary">X</Button>
        <hr></hr>
        <TextField label="Enter your email" />
        <br></br>
        <br></br>
        <br></br>
        <TextField id="passwordHash" label="Password" type="password" autoComplete="current-password" />
        <br></br>
        <br></br>
        <br></br>
        <Link href="signup">Need to make an account?</Link>
        <br></br>
        <br></br>
        <br></br>
        <Button variant='contained' color='primary'>
          Submit
        </Button>
      </Box>
    </body>
  );
}

export default App;