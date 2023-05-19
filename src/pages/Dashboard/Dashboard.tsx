import React, { useState, useEffect } from 'react';
import './index.css';
import { Box, Button, Slider } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { styles } from './styles';
import ReactEcharts from "echarts-for-react";
import satStatLogo from '../../assets/satstatlogo.jpeg';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';

function Dashboard() {
    const [maxConsumption, setMaxConsumption] = useState<number>(100);
    const [maxNightConsumption, setNightMaxConsumption] = useState<number>(300);
    const [currentConsumption, setCurrentConsumption] = useState<number>(10);
    const [currentNightConsumption, setCurrentNightConsumption] = useState<number>(30);
    const chartHours = Array.from({ length: 24 }, (_, i) => i + 1);
    const chartValues = Array.from({ length: 24 }, (_, i) => i*3.5 + Math.round(Math.random()*5));

    const normaliseNightConsumption = (value: number) => ((value) * 100) / (maxNightConsumption);
    const normaliseConsumption = (value: number) => ((value) * 100) / (maxConsumption);

    const changeMaxConsumption = (event: Event, newValue: number | number[]) => {
        setMaxConsumption(newValue as number);
    };

    const option = {
        width: '80%',
        left: '0px',
        color: [
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff'
        ],
        xAxis: {
            type: 'category',
            data: chartHours,
        },
        type: 'line',
        yAxis: {
        },
        series: [
            {
                data: chartValues,
                type: 'line',
            }
        ],

    };

    return (
        <Box sx={styles.pageFormat}>
            <Box sx={{ padding: '2vw 5vw 5vw 5vw', }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={styles.navBar}>
                        <img src={satStatLogo} style={styles.navBarLogo}></img>
                    </Box>
                    <Box sx={styles.navBar}>
                        <HomeIcon sx={styles.navBarIcons} />
                    </Box>
                    <Box sx={styles.navBar}>
                        <AssessmentIcon sx={styles.navBarIcons} />
                    </Box>
                </Box>
                <Box sx={styles.graphTitle}>Consumo do Dia</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                    <Box sx={{
                        width: '75vw',
                        height: '50vh',
                        borderRadius: '10px',
                        backgroundColor: '#125D7E',
                        margin: ' 2vh 0 0 0',
                        alignItems: 'center'
                    }}>
                        <ReactEcharts className='graph' option={option} />
                    </Box>
                    <Box sx={styles.setMaxConsumptionSection}>
                        <Box sx={styles.maxConsumptionSliderTitle}>Definir Alerta de Consumo</Box>
                        <Box sx={styles.maxConsumptionSliderValues}>{maxConsumption} GB / {maxConsumption} GB</Box>
                        <Slider
                            sx={styles.maxConsumptionSlider}
                            valueLabelDisplay="auto"
                            aria-label="ConsumptionSlider"
                            value={maxConsumption}
                            onChange={changeMaxConsumption}
                            max={500}
                            orientation="vertical"
                        />
                    </Box>
                </Box>
                <Box sx={{mt: '2rem'}}>
                    <Box sx={styles.absoluteConsumptionInfo}>
                        {Math.round(currentConsumption * 100 / maxConsumption)}% utilizado ({Math.round(normaliseConsumption(currentConsumption))} GB / {maxConsumption} GB)
                    </Box>
                    <LinearProgress variant='determinate' value={Math.round(normaliseConsumption(currentConsumption))} sx={styles.absoluteConsumptionHorizontalChart} />
                </Box>

                <Box  sx={{mt: '1rem'}}>
                    <Box sx={styles.nightAbsoluteConsumptionInfo}>
                        {Math.round(currentNightConsumption * 100 / maxNightConsumption)}% utilizado ({Math.round(normaliseNightConsumption(currentNightConsumption))} GB / {maxNightConsumption} GB)
                    </Box>
                    <LinearProgress variant='determinate' value={Math.round(normaliseNightConsumption(currentNightConsumption))} sx={styles.nightAbsoluteConsumptionHorizontalChart} />
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;
