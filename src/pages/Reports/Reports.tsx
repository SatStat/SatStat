import React, { useState } from 'react';
import './index.css';
import { Box, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { styles } from './styles';
import ReactEcharts from "echarts-for-react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { mockObjects } from './mock';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Navbar from '../../components/Navbar';

function Reports() {
    const [maxConsumption, setMaxConsumption] = useState<number>(100);
    const [maxNightConsumption, setNightMaxConsumption] = useState<number>(300);
    const [currentConsumption, setCurrentConsumption] = useState<number>(10);
    const [currentNightConsumption, setCurrentNightConsumption] = useState<number>(30);
    const chartHours = Array.from({ length: 24 }, (_, i) => i);
    // const chartValues = Array.from({ length: 24 }, (_, i) => i*3.5 + Math.round(Math.random()*5));
    const nightValues: number[] = Array.from({ length: 24 }, (_, i) => i + 1);
    const dayValues = Array.from({ length: 24 }, (_, i) => i * 2 + Math.round(Math.random() * 5));

    const normaliseNightConsumption = (value: number) => ((value) * 100) / (maxNightConsumption);
    const normaliseConsumption = (value: number) => ((value) * 100) / (maxConsumption);

    const changeMaxConsumption = (event: Event, newValue: number | number[]) => {
        setMaxConsumption(newValue as number);
    };

    function updateChartValues() {
        // chartValues.push(chartValues.length + Math.random()*2);
        return dayValues;
    }

    const option = {
        // calculable : true,
        height: '70%',
        left: '0px',
        legend: {
            data: ['Diurno', 'Noturno'],
            textStyle: {
                color: '#FFF'
            }
        },
        xAxis: {
            // type: 'time',
            data: chartHours,
        },
        type: 'line',
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Diurno',
                data: dayValues,
                type: 'line',
            },

            {

                name: 'Noturno',
                data: nightValues,
                type: 'line',
            }
        ],

    };

    return (
        <Box sx={styles.pageFormat}>
            <Box sx={{ padding: '1rem 2rem 2rem 2rem', }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mr: '2rem' }}>
                    <Box sx={{ml: '2rem'}}><Navbar></Navbar></Box>

                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']}
                            sx={{
                                label: { color: '#FFF' },
                                input: { color: '#FFF' },
                                svg: { color: '#FFF' }
                            }}>
                            <DatePicker label="Data Inicial" sx={{ color: '#FFF' }} />
                        </DemoContainer>
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}
                            sx={{
                                label: { color: '#FFF' },
                                input: { color: '#FFF' },
                                svg: { color: '#FFF' }
                            }}>
                            <DatePicker label="Data final" sx={{ color: '#FFF' }} />
                        </DemoContainer>
                    </LocalizationProvider>
                    <Box>
                        <Box sx={{ mt: '1rem', display: 'flex', color: 'white' }}>
                            <LinearProgress variant='determinate' value={50} sx={styles.dayAbsoluteConsumptionHorizontalChart} />
                            <Typography sx={{ pl: 1, pr: 1 }}>50 %</Typography>
                            <WbSunnyIcon sx={{ color: '#FCBD55' }}></WbSunnyIcon>
                        </Box>

                        <Box sx={{ mt: '1rem', display: 'flex', color: 'white' }}>
                            <LinearProgress variant='determinate' value={30} sx={styles.nightAbsoluteConsumptionHorizontalChart} />
                            <Typography sx={{ pl: 1, pr: 1 }}>30 %</Typography>
                            <ModeNightIcon sx={{ color: '#FFF' }}></ModeNightIcon>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', mt: '2rem', justifyContent: 'space-evenly', width: '100%' }}>
                    <Box sx={{ background: '#1A4789', width: '30%', height: '100%', color: 'white', p: '1rem' }}>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem' }}>{mockObjects.mockReportTitle}</Typography>
                            <br />
                            <Typography sx={{ fontWeight: 'bold', textAlign: 'justify', fontSize: '1rem' }}>{mockObjects.mockTextOpenAI}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '35rem', width: '60%', }}>
                        <Box sx={{
                            height: '100%',
                            width: '100%',
                            backgroundColor: '#1A4789',
                            alignItems: 'center',
                            verticalAlign: 'center',
                            display: 'flex'
                        }}>
                            <ReactEcharts className='graph' option={option} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Reports;
