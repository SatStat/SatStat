import React, { useState, useEffect } from 'react';
import './index.css';
import { Box, Button, Checkbox, FormControlLabel, Slider, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { styles } from './styles';
import ReactEcharts from "echarts-for-react";
import Navbar from '../../components/Navbar';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';

function ApplicationReports() {
    const maxConsumption = 1000;
    const normaliseConsumption = (value: number) => ((value) * 100) / (maxConsumption);
    const [applicationsData, setApplicationsData] = useState([
        { name: 'Facebook', download: 49 },
        { name: 'Youtube', download: 32 },
        { name: 'Telegram', download: 30 },
        { name: 'Teams', download: 17 },
        { name: 'Chrome', download: 15 },
        { name: 'Outlook', download: 12 },
        { name: 'Docker', download: 11 },
        { name: 'Youtube', download: 5 },
        { name: 'Youtube', download: 3 },
        { name: 'Youtube', download: 3 },
        { name: 'Youtube', download: 3 },
        { name: 'Youtube', download: 3 },
        { name: 'Youtube', download: 3 },
        { name: 'Youtube', download: 3 },
        { name: 'Youtube', download: 1 },
        { name: 'Youtube', download: 1 },
        { name: 'Youtube', download: 1 },
        { name: 'Youtube', download: 1 },
    ])
    useEffect(() => {

    })
    return (
        <Box sx={styles.pageFormat}>
            <Box sx={{ padding: '2vw 5vw 5vw 5vw', }}>
                <Navbar></Navbar>
                {
                    applicationsData.map((application, i) =>
                        <Box sx={{ mt: '2rem' }}>
                            <Box sx={styles.absoluteConsumptionInfo}>
                                {Math.round(application.download * 100 / maxConsumption)}% utilizado {application.download} GB / {maxConsumption} GB
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{
                                    background: '#00BF63',
                                    textAlign: 'center',
                                    mr: '1rem',
                                    width: '8rem',
                                    height: '2.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '10px'
                                }}>
                                    <Typography sx={{ color: '#FFF', fontWeight: 'bold', margin: '0 auto' }}>{application.name}</Typography>
                                </Box>
                                <LinearProgress variant='determinate' value={10} sx={styles.dayConsumptionHorizontalChart} />
                                <Box sx={{
                                    color: '#FFF',
                                    ml: '1rem',
                                    background: '#FFF',
                                    borderRadius: '10px',
                                }} >
                                    <FormControlLabel sx={{ color: 'black' }} control={<Checkbox defaultChecked />} label="Ativar Alerta" />

                                </Box>
                                    <Slider
                                        sx={styles.maxConsumptionSlider}
                                        valueLabelDisplay="auto"
                                        aria-label="ConsumptionSlider"
                                        // value={maxConsumption}
                                        // onChange={changeMaxConsumption}
                                        max={500}
                                    />
                            </Box>
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
}

export default ApplicationReports;
