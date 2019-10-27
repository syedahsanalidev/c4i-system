import React from 'react';
// import './home.css';
import { grommet, Box, Grid, Grommet } from "grommet";
const home = ({children}) => {
    return <Grommet theme={grommet} full>
        <Grid fill rows={["auto", "flex", "auto"]}>
            <Box tag="header" background="brand" pad="small">
                C4I Systems
            </Box>
            <Box direction="row" justify="center">
                <Box overflow="auto">
                    {children}
                </Box>
            </Box>
            <Box style={{textAlign:"center"}} tag="footer" pad="small" justify="center" background="dark-1">
                Copyright C4I System &copy; 2019
            </Box>
        </Grid>
    </Grommet>
}
export default home;
