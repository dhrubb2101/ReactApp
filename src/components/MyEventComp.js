import { Button,Card,CardActionArea,CardContent,CardMedia,Typography,CardActions } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Box from '@mui/material/Box';
import staticdata from "../shared/constant/constantData";

const MyEventComp = () => { //we use const so as to not a create a duplicate component like it and also we don't wanna change it's value at runtime.

    const greet = () => {
        window.alert("Good Morning Friends");
    }

    const welcome = (comp,...emp) => {
        window.alert(`Welcome you ${emp} in ${comp}`);
    }

    return(<div>
        <h2>This is my Event component</h2>
        {/* <button type="button" onClick={()=>greet()}>Call Greet Method</button> */}
        <Button variant="contained" type="button" onClick={()=>greet()}>Call Greet Method</Button>{" "}
        <Button variant="outlined" type="button" onClick={()=>greet()}>Call Greet Method</Button>
        <h2 onMouseOver={()=>welcome("Opteamix","Pooja")}>Hover on me, A pop-up will appear</h2>

        <hr></hr>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={staticdata.dosa}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="success">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <p><AccountBalanceIcon></AccountBalanceIcon>Bank</p>
       
        
        </div>)
        
}



export default MyEventComp;