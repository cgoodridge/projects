import React from 'react';
import './App.css';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import './app.scss';
import { makeStyles } from '@material-ui/core/styles';
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const cardInfo = [
  {image: "img/omnitrix.png", name: "Codon Stream", description: "App made in flutter to classify species of animals on earth" , price:16, alt:"Shrimp Alfredo"},
  {image: "img/omnitrix.png", name: "Codon Stream 2", description: "App made in flutter to classify species of animals on earth" , price:16, alt:"Shrimp Alfredo"},
  


];

function App() {

  const classes = useStyles();

  const renderCard = (card, index) => {
    return(    
          <div className="projectCard" key={index}>
            <Grid container style={{marginBottom: '10px'}}>
              <Grid item xs={7}>
                <Typography gutterBottom variant="h6" component="h2" align="left" style={{fontFamily:"Poiret One"}}>
                    {card.name} 
                </Typography>
                <Typography gutterBottom variant="body1" component="h2" align="left" style={{fontFamily:"Lato", fontWeight:300}}>
                    {card.description} 
                </Typography>
                <Button style={{borderRadius:'50px', borderColor:'white', color:'white', fontFamily:'Poiret One', margin:'16px'}} variant="outlined">View Demo</Button>
              </Grid>
              <Grid item xs={5}>
                
                  <img src={card.image} style={{height: 100}} align="right"></img>
                
              </Grid>
            </Grid>
          </div>
    )
};

  return (
    <div className="App">
      
      
        <Grid container className="mainGrid">
            <Grid item xs={12} sm={6}>
              
            </Grid>

            <Grid item xs={12} sm={6}>  
              <Grid container className="menu">
                <Grid item xs={12} sm={6}>
                    <Link href="#homeSection" underline='none' style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                      <Typography variant="h5" component="h2" align="left" style={{fontFamily:'Poiret One', width:'200px', marginBottom:'32px', marginTop:'32px'}}>
                        Home
                      </Typography>
                      <span className='menuBubble'></span> 
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Link href="#flutterSection" underline='none' style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Typography variant="h5" component="h2" align="left" style={{fontFamily:'Poiret One', width:'200px', marginBottom:'32px', marginTop:'32px'}}>
                      Projects
                    </Typography>
                    <span className='menuBubble'></span> 
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Link href="#reactSection" underline='none' style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Typography variant="h5" component="h2" align="left" style={{fontFamily:'Poiret One', width:'200px', marginBottom:'32px', marginTop:'32px'}}>
                      About
                    </Typography>
                    <span className='menuBubble'></span> 
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Link href="#unitySection" underline='none' style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Typography variant="h5" component="h2" align="left" style={{fontFamily:'Poiret One', width:'200px', marginBottom:'32px', marginTop:'32px'}}>
                      Contact
                    </Typography>
                    <span className='menuBubble'></span> 
                  </Link>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
        <Grid container className="mainGrid sectionBlock" id="homeSection">
            <Grid item xs={12} sm={5}>
              <Typography variant="h3" component="h2" align="center" style={{fontFamily:'Poiret One'}}>
                Ché Goodridge
              </Typography>
              <Typography variant="h5" component="h2" align="center" style={{fontFamily:'Poiret One'}}>
                Full Stack Developer | UI/UX Designer
              </Typography>
              <Button style={{borderRadius:'50px', borderColor:'white', color:'white', fontFamily:'Poiret One', margin:'16px'}} variant="outlined">View Projects</Button>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box>
                <img className="astro" src="/img/astro.png"></img>
              </Box>
            </Grid>
        </Grid>

        <Grid container className="mainGrid sectionBlock" id="flutterSection">
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component="h2" align="center" style={{fontFamily:'Poiret One'}}>
                Flutter
              </Typography>
              <Box>
                <img className="astro" src="/img/mercury.svg"></img>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              {cardInfo.map(renderCard)}
            </Grid>
        </Grid>

        <Grid container className="mainGrid sectionBlock" id="reactSection">
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component="h2" align="center" style={{fontFamily:'Poiret One'}}>
                React
              </Typography>
              <Box>
                <img className="astro" src="/img/venus.png"></img>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              {cardInfo.map(renderCard)}
            </Grid>
        </Grid>

        <Grid container className="mainGrid sectionBlock" id="unitySection">
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component="h2" align="center" style={{fontFamily:'Poiret One'}}>
                Unity
              </Typography>
              <Box>
                <img className="astro" src="/img/earth.svg"></img>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              {cardInfo.map(renderCard)}
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
