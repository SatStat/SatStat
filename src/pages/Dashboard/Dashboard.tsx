import React, { useState } from 'react';
import './index.css';
import { Box, Button, Slider } from '@mui/material';
import ReactEcharts from "echarts-for-react";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

function Dashboard() {
    const [maxConsumption, setMaxConsumption] = useState<number>(300);
    const [currentConsumption, setCurrentConsumption] = useState<number>(200);
    const chartDays = Array.from({length: 30}, (_, i) => i + 1);
    const chartValues = Array.from({length: 30}, (_, i) => i + 5);
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
            sx={{
                backgroundColor: '#07153A',
                width: '100vw',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    padding: '5vw',
                }}
            >
                <Box
                    sx={{
                        color: '#FFF',
                        fontSize: '30px',
                        fontWeight: 'bold',
                    }}>
                    Consumo Mensal
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <ReactEcharts className='graph' option={option} />
                    <Box sx={
                        { margin: '0 auto', display: 'flex', flexDirection: 'column', height: '17rem', alignItems: 'center' }
                    }>
                        <Box sx={{ color: '#FFF', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Definir Consumo Máximo</Box>
                        <Box sx={{ color: '#FFF', fontWeight: 'bold', marginBottom: '1rem', fontSize: 15, textAlign: 'center' }}>{maxConsumption} MB / {plan} MB</Box>
                        <Slider
                            sx={{
                                height: '14rem',
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#fff',
                                    width: 28,
                                    height: 28,
                                },
                                '& .MuiSlider-track': {
                                    border: 'none',
                                },
                                '& .MuiSlider-rail': {
                                    opacity: 0.5,
                                    backgroundColor: '#bfbfbf',
                                },
                                '& .MuiSlider-mark': {
                                    backgroundColor: '#bfbfbf',
                                    height: 8,
                                    width: 1,
                                    '&.MuiSlider-markActive': {
                                        opacity: 1,
                                        backgroundColor: 'currentColor',
                                    },
                                },
                            }}

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
                            sx={{
                                color: '#FFF',
                                fontWeight: 'bold',
                                fontSize: 20,
                                mb: '1vh'
                            }}
                        >
                            40% utilizado (400MB / 1GB)
                        </Box>

                        <LinearProgress variant='determinate' value={maxConsumption} sx={{
                            height: 40, width: 500,
                            [`&.${linearProgressClasses.colorPrimary}`]: {
                                backgroundColor: '#6CE5E8',
                            },
                            [`& .${linearProgressClasses.bar}`]: {
                                backgroundColor: '#41B8D5',
                            },
                        }} />
                    </Box>

                    <Box>
                        <Button sx={{
                            background: '#00BF63',
                            width: '10rem', 
                            mt: '1rem',
                            color: '#FFF',
                            fontWeight: 'bold',
                            ':hover': {
                                backgroundColor: '#44B27D',
                            },
                        }}>
                            Mais Informações
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;
