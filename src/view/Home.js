import React, { useState,useEffect } from "react";
import {Container,Grid,Card,TextField,Button,Stack} from "@mui/material";
import "./index.css"
import  logo from "../Assets/logo.jpg";
import {useNavigate} from "react-router-dom";
import {loginAction} from "../redux/auth/actions";
import {useDispatch,useSelector} from "react-redux";
import {LoadingButton} from '@mui/lab';

const styles = { width: "100%", height: "100vh" };
const ViewComponent = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const {token,isFetching} = useSelector((state)=>state?.auth)

  const login = ()=>{
    loginAction({email,password})(dispatch);
   

  }
  useEffect(()=>{
    if(token){
      navigate("/dashboard")
    }

  },[token])
    
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
                fullWidth
                id="filled-basic"
                label="Email"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                id="filled-basic"
                label="Password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
              />
              <LoadingButton
              loading={isFetching}
                fullWidth
                variant="contained"
                onClick={() => {
                  // navigate("/dashboard");
                //   console.log({ email,password });
                  login()
                }}
              >
                Signin
              </LoadingButton>
         
                    

                </Grid>
                <Grid item md={3} xs={0}></Grid>
            </Grid>

        </Container>
    )
}

export default ViewComponent;