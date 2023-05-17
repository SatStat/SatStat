import { Box, Grid } from '@mui/material';
import React from 'react';
import CSS from 'csstype';
import './index.css';

const pageStyle: CSS.Properties = {

    // Define o estilo da página
    backgroundColor: '#07153a',
    color: 'white',
    textAlign: 'center',
    border: '1px solid white',
    borderRadius: 'px',
    padding: '10px',
    margin: '10px',
    height: '90%',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // Alinha self ao centro da página
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',

    // Diminui a escala geral da página
    zoom: '0.7',
};

function Overview() {

    document.title = "SatStat - Overview";

    // Passa o pageStyle para o corpo da página
    return (
        <div style={pageStyle}>
            <OverviewContent />
        </div>
    );
}

function OverviewContent() {

    return (

        <Box>
            <h1>Overview</h1>


        {/* Define um gride com 4 repartições horizontais */}

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box className="box">
                    
                    {/* Define um gride com 4 repartições verticais */}
                    
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Box className="box">
                                <p>1.1</p>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className="box">
                                <p>2.1</p>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className="box">
                                <p>3.1</p>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className="box">
                                <p>4.1</p>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className="box">
                    
                    {/* Define um gride com 8 repartições, 2 verticais e 4 horizontais */}

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box className="box">
                                <p>1.2</p>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className="box">
                                <p>2.2</p>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box className="box">
                                <p>3.2</p>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className="box">
                                <p>4.2</p>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box className="box">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box className="box">
                                    <p>5.2</p>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className="box">
                                    <p>6.2</p>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box className="box">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box className="box">
                                    <p>7.2</p>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className="box">
                                    <p>8.2</p>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className="box">
                    
                    {/* Define um gride com 2 repartições horizontais */}

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box className="box">
                                <p>1.3</p>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className="box">
                                <p>2.3</p>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className="box">
                    
                    {/* Define um gride com 2 repartições verticais */}

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box className="box">
                                <p>1.4</p>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className="box">
                                <p>2.4</p>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Grid>
        </Grid>

        </Box>


    );
}



export default Overview;
