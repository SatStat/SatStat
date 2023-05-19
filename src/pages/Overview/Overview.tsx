import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { styles } from './style'
import LinearProgress from '@mui/material/LinearProgress';
import {
    useNavigate,
  } from "react-router-dom";

function Overview() {

    document.title = "SatStat - Overview";

    // Passa o pageStyle para o corpo da página
    return (
        <OverviewContent />
    );
}

function OverviewContent() {
    const [maxConsumption, setMaxConsumption] = useState<number>(100);
    const [maxNightConsumption, setNightMaxConsumption] = useState<number>(300);
    const [currentConsumption, setCurrentConsumption] = useState<number>(10);
    const [currentNightConsumption, setCurrentNightConsumption] = useState<number>(50);
    const normaliseNightConsumption = (value: number) => ((value) * 100) / (maxNightConsumption);
    const normaliseConsumption = (value: number) => ((value) * 100) / (maxConsumption);
    const changeMaxConsumption = (event: Event, newValue: number | number[]) => {
        setMaxConsumption(newValue as number);
    };
    const navigateToDashBoard = useNavigate();

    // useState de 3 posições para armazenar os estados dos satélites
    const [satelliteStates, setSatelliteStates] = useState([0, 0, 0]);

    // useState de 8 posições para apresentar os rates de consumo de cada aplicação
    const [rates, setRates] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

    // useState de 2 posições para apresentar o consumo total diurno e noturno
    const [total, setTotal] = useState([0, 0]);

    // useState de 2 posições para apresentar as taxas de download e upload
    const [throughput, setThroughput] = useState([0, 0]);

    return (

        <Box onClick={() => {
            navigateToDashBoard('/dashboard');
        }} sx={{
            background: '#07153a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
        }} >
            <h1 style={{ color: '#FFF' }}>Overview</h1>

            {/* Define um gride com 4 repartições horizontais */}

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box>

                        {/* Define um gride com 3 repartições verticais */}

                        <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                            <Grid item xs={4}>
                                <Box >
                                    <SatelliteAltIcon sx={{ fontSize: '3rem', color: 'red' }} />
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box >
                                    <SatelliteAltIcon sx={{ fontSize: '3rem', color: 'orange' }} />
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box>
                                    <SatelliteAltIcon sx={{ fontSize: '3rem', color: 'gray' }} />
                                </Box>
                            </Grid>
                        </Grid>

                    </Box>
                </Grid>
                <Box sx={{ textAlign: 'center', margin: '0 auto', color: '#FFF', mb: '0.5rem' }}>Resumo das aplicações</Box>
                <Grid item xs={12}>
                    <Box sx={{
                        textAlign: 'center',
                        background: '#1565C0',
                        width: '80%',
                        margin: '0 auto',
                        borderRadius: '10px'
                    }}>

                        {/* Define um gride com 8 repartições, 2 verticais e 4 horizontais */}

                        <Grid container spacing={2} sx={{ mb: '1rem' }}>
                            <Grid item xs={6}>
                                <Box sx={{
                                    backgroud: 'white',
                                    background: '#07153A',
                                    width: '6rem',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    margin: '0 auto'
                                }}>
                                    <FacebookIcon sx={{
                                        fontSize: '3rem',
                                        color: '#FFF',
                                    }} />

                                    <Box sx={styles.iconBoxText}>10%</Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={
                                    styles.iconBoxStyle
                                }>
                                    <FacebookIcon sx={{
                                        fontSize: '3rem',
                                        color: '#FFF',
                                    }} />

                                    <Box sx={styles.iconBoxText}>10%</Box>
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: '1rem' }}>
                            <Grid item xs={6}>
                                <Box>

                                    <Box sx={styles.iconBoxStyle}>
                                        <EmailIcon sx={{
                                            fontSize: '3rem',
                                            color: '#FFF',
                                        }} />

                                        <Box sx={styles.iconBoxText}>10%</Box>
                                    </Box>

                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>

                                    <Box sx={styles.iconBoxStyle}>
                                        <EmailIcon sx={{
                                            fontSize: '3rem',
                                            color: '#FFF',
                                        }} />

                                        <Box sx={styles.iconBoxText}>10%</Box>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>

                        <Box sx={{ mb: '1rem' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Box>

                                        <Box sx={styles.iconBoxStyle}>
                                            <YouTubeIcon sx={{
                                                fontSize: '3rem',
                                                color: '#FFF',
                                            }} />

                                            <Box sx={styles.iconBoxText}>10%</Box>
                                        </Box>

                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box>

                                        <Box sx={styles.iconBoxStyle}>
                                            <YouTubeIcon sx={{
                                                fontSize: '3rem',
                                                color: '#FFF',
                                            }} />

                                            <Box sx={styles.iconBoxText}>10%</Box>
                                        </Box>

                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Box >

                                        <Box sx={styles.iconBoxStyle}>
                                            <FacebookIcon sx={{
                                                fontSize: '3rem',
                                                color: '#FFF',
                                            }} />

                                            <Box sx={styles.iconBoxText}>10%</Box>
                                        </Box>

                                    </Box>
                                </Grid>
                                <Grid item xs={6} >
                                    <Box sx={{ mb: '1rem' }}>

                                        <Box sx={{
                                            backgroud: 'white',
                                            background: '#07153A',
                                            display: 'flex',
                                            width: '6rem',
                                            borderRadius: '10px',
                                            margin: '0 auto'
                                        }}>
                                            <FacebookIcon sx={{
                                                fontSize: '3rem',
                                                color: '#FFF',
                                            }} />

                                            <Box sx={styles.iconBoxText}>10%</Box>
                                        </Box>

                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center' }}>

                        {/* Define um gride com 2 repartições horizontais */}

                        <Grid container spacing={2}>
                            <Grid item xs={12}>

                                <Box>
                                    <Box sx={{ margin: '0 auto', color: '#FFF' }}>
                                        Franquia diurna
                                        <LinearProgress variant='determinate' value={Math.round(normaliseConsumption(currentConsumption))} sx={styles.nightAbsoluteConsumptionHorizontalChart} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ margin: '0 auto', color: '#FFF' }}>
                                    Franquia noturna
                                    <LinearProgress variant='determinate' value={Math.round(normaliseNightConsumption(currentNightConsumption))} sx={styles.nightAbsoluteConsumptionHorizontalChart} />
                                </Box>
                            </Grid>
                        </Grid>

                    </Box>
                </Grid>
                {/* <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center' }}>


                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box sx={{borderRadius: '10px', color: '#1565C0', width: '1rem'}}>

                                    

                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>

                                    <p>{throughput[1]}</p>

                                </Box>
                            </Grid>
                        </Grid>

                    </Box>
                </Grid> */}
            </Grid>

        </Box>


    );
}



export default Overview;
