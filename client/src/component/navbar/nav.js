import { AppBar, Toolbar, IconButton, Typography, Link, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({})
const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sorteo.io
          </Typography>
          <Link to="/login" className={classes.link}>
            <Button color="inherit">login</Button>
          </Link>
          <Link to="/home" className={classes.link}>
            <Button color="inherit">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar