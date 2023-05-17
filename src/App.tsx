import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import ReactEcharts from "echarts-for-react"; 

function App() {
  const option = {
    xAxis: {
      type: 'category',
      data: [1,2,3,4,5,6,7],
    },
    type: 'line',
    yAxis: {
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      }
    ]
  };
  return (
    <Box>
      <ReactEcharts option={option}/>
    </Box>
  );
}

export default App;
