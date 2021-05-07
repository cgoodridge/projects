import {React, useState} from 'react';
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
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import './app.scss';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },

  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

const cardInfo = [
  {image: "img/omnitrix.png", name: "Codon Stream", description: "App made in flutter to classify species of animals on earth" , price:16, alt:"Shrimp Alfredo"},
  {image: "img/omnitrix.png", name: "Project Kronos", description: "Time Tracking app with pomodoro funtionality made in flutter" , price:16, alt:"Shrimp Alfredo"},
  
];


const Toggle = (initialValue = false) => 
{
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle];
}


function App() {

  const classes = useStyles();

  const [showProject, showCard] = useState("Codon Stream");
  


  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  
    

  const CodonStream = () =>{
    
      return(    
        
        <div className="projectCard" >
          <Grid container style={{marginBottom: '10px'}}>
            <Grid item xs={7}>

              <Typography gutterBottom variant="h6" component="h2" align="left" style={{fontFamily:"Poiret One"}}>
                  {cardInfo[0].name} 
              </Typography>

              <Typography gutterBottom variant="body1" component="h2" align="left" style={{fontFamily:"Lato", fontWeight:300}}>
                  {cardInfo[0].description} 
              </Typography>

              <Button style={{borderRadius:'50px', borderColor:'white', color:'white', fontFamily:'Poiret One', margin:'16px'}} variant="outlined">View Demo</Button>

            </Grid>

            <Grid item xs={5}>
              <img src={cardInfo[0].image} style={{height: 100}} align="right"></img>
            </Grid>

          </Grid>
        </div>
      );  
  };

  const ProjectKronos = () =>{
    
    return(    
      
      <div className="projectCard" >
        <Grid container style={{marginBottom: '10px'}}>
          <Grid item xs={7}>

            <Typography gutterBottom variant="h6" component="h2" align="left" style={{fontFamily:"Poiret One"}}>
                {cardInfo[1].name} 
            </Typography>

            <Typography gutterBottom variant="body1" component="h2" align="left" style={{fontFamily:"Lato", fontWeight:300}}>
                {cardInfo[1].description} 
            </Typography>

            <Button style={{borderRadius:'50px', borderColor:'white', color:'white', fontFamily:'Poiret One', margin:'16px'}} variant="outlined">View Demo</Button>

          </Grid>

          <Grid item xs={5}>
            <img src={cardInfo[0].image} style={{height: 100}} align="right"></img>
          </Grid>

        </Grid>
      </div>
    );  
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

            <Grid item xs={12} sm={6} className={classes.root}>

              <Chip
                style={{color:'white', borderColor: 'white'}}
                label="Codon Stream"
                onClick={() => showCard("Codon Stream")}
                variant="outlined"
              />
              <Chip
                style={{color:'white', borderColor: 'white'}}
                label="Project Kronos"
                onClick={() => showCard("Project Kronos")}
                variant="outlined"
              />
              <Chip
                style={{color:'white', borderColor: 'white'}}
                label="Project Omen"
                onClick={() => showCard("Project Omen")}
                variant="outlined"
              />
              <Chip
                style={{color:'white', borderColor: 'white'}}
                label="Project Gaia"
                onClick={() => showCard("Project Gaia")}
                variant="outlined"
              />

              {showProject === "Codon Stream" && <CodonStream /> }
              {showProject === "Project Kronos" && <ProjectKronos /> }
              
              

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
            <Grid item xs={12} sm={6} className={classes.root}>
              
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
            <Grid item xs={12} sm={6} className={classes.root}>
              
            </Grid>
        </Grid>
    </div>
    
  );
}

export default App;
