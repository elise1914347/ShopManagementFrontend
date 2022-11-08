import React from "react";
import {Container,Grid,Card,TextField,Button,Stack} from "@mui/material";
import "./index.css"
import  logo from "../Assets/logo.jpg";
import {useNavigate} from "react-router-dom"

const styles={width:"100%", height:"100vh"}
const ViewComponent = (props)=>{
    const navigate= useNavigate();
    return(
        <Container  sx={styles} 
        >
            <Grid sx={styles} container spacing={2} justifyContent="center" alignItems="center">
                <Grid item sm={3} xs={0}></Grid>
                <Grid item sm={6} xs={12}>
                   
                    <Stack spacing={2} alignItems="center"></Stack>
                    <img src={logo} className="image"></img>
                    <label style={{justifyContent:"center",position:"relative",left:"15rem",bottom:"40px"}}>SignShopManagement</label>
                <TextField
                    fullWidth id="filled-basic" label="Email" variant="filled"></TextField>
                    <TextField
                    fullWidth id="filled-basic" label="password" variant="filled"></TextField>
                    <Button variant="contained"   onClick={()=>{navigate("/dashboard")}} sx={{width:"100%"}}>
  SignIn
</Button>
                    

                </Grid>
                <Grid item md={3} xs={0}></Grid>
            </Grid>

        </Container>
    )
}

export default ViewComponent;