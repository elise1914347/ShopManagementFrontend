import React from "react";
import {Card,Grid,Stack} from "@mui/material";
import Sider from "./layout/Sider";

import TopNav from "./layout/TopNav"


const Component =(props)=>{
    return(
<Grid container spacing={1}>
    <Grid item xs={3}>
        <Sider/>
    </Grid>
    <Grid item xs={9} sm={9}>
<Stack spacing={1}>
        <TopNav/>
        <Card sx={{minHeight:"90vh", paddingLeft:"1rem"}}>{props.children}</Card>
        </Stack>
    </Grid>

</Grid>
    )
}

export default Component;