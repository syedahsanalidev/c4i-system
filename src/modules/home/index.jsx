import React from 'react';
// import './home.css';
import { grommet, Box, Grid, Grommet } from "grommet";
const home = ({children}) => {
    return <Grommet theme={grommet} full>
        <Grid fill rows={["auto", "flex", "auto"]}>
            <Box tag="header" background="brand" pad="small">
                Header
            </Box>
            <Box direction="row" justify="center">
                <Box overflow="auto" width="large">
                    {children}
                </Box>
            </Box>
            <Box tag="footer" pad="small" background="dark-1">
                footer
            </Box>
        </Grid>
    </Grommet>
}
export default home;
