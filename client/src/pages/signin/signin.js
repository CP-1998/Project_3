import './signin.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'


function App() {
  return (
    <body>
      <Box id="signInCard" color='primary'>
        <p>Sign In</p>
        <hr></hr>
        <TextField label="Enter your username" />
        <br></br>
        <br></br>
        <br></br>
        <TextField label="Enter your password" />
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