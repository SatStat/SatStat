import React, { useState } from 'react';
import './index.css';
import { Box, Button, Slider } from '@mui/material';
import ReactEcharts from "echarts-for-react";
import LinearProgress from '@mui/material/LinearProgress';
import { styles } from './styles';

function Dashboard() {
    const [maxConsumption, setMaxConsumption] = useState<number>(300);
    const [currentConsumption, setCurrentConsumption] = useState<number>(200);
    const chartDays = Array.from({ length: 30 }, (_, i) => i + 1);
    const chartValues = Array.from({ length: 30 }, (_, i) => i + 5);
    const plan = 500;

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
            data: chartDays,
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
        <Box
            sx={styles.pageFormat}
        >
            <Box
                sx={{
                    padding: '5vw',
                }}
            >
                <Box
                    sx={styles.graphTitle}>
                    Consumo Mensal
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <ReactEcharts className='graph' option={option} />
                    <Box sx={
                        styles.setMaxConsumptionSection
                    }>
                        <Box sx={styles.maxConsumptionSliderTitle}>Definir Consumo Máximo</Box>
                        <Box sx={styles.maxConsumptionSliderValues}>{maxConsumption} MB / {plan} MB</Box>
                        <Slider
                            sx={styles.maxConsumptionSlider}
                            valueLabelDisplay="auto"
                            aria-label="ConsumptionSlider"
                            value={maxConsumption}
                            onChange={changeMaxConsumption}
                            max={plan}
                            orientation="vertical"
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        marginTop: '2vh',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '75vw',
                    }}
                >
                    <Box>
                        <Box
                            sx={styles.absoluteConsumptionInfo}
                        >
                            40% utilizado (400MB / 1GB)
                        </Box>

                        <LinearProgress variant='determinate' value={maxConsumption} sx={styles.absoluteConsumptionHorizontalChart} />
                    </Box>

                    <Box>
                        <Button sx={styles.moreInfoButton}>
                            Mais Informações
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;
