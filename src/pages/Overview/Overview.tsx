import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
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

    // useState de 3 posições para armazenar os estados dos satélites
    const [satelliteStates, setSatelliteStates] = useState([0, 0, 0]);

    // useState de 8 posições para apresentar os rates de consumo de cada aplicação
    const [rates, setRates] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

    // useState de 2 posições para apresentar o consumo total diurno e noturno
    const [total, setTotal] = useState([0, 0]);

    // useState de 2 posições para apresentar as taxas de download e upload
    const [throughput, setThroughput] = useState([0, 0]);

    return (

        <Box>
            <h1>Overview</h1>

        {/* Define um gride com 4 repartições horizontais */}

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box className="box">
                    
                    {/* Define um gride com 3 repartições verticais */}
                    
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box className="box">
                            
                            {/* TODO: Alterar depois para o icone do satélite */}
                            <p>{satelliteStates[0]}</p>

                            </Box>

                        </Grid>
                        <Grid item xs={4}>
                            <Box className="box">
                            
                            {/* TODO: Alterar depois para o icone do satélite */}
                            <p>{satelliteStates[1]}</p>

                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className="box">
                            
                            {/* TODO: Alterar depois para o icone do satélite */}
                            <p>{satelliteStates[2]}</p>

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
                            
                            {/* TODO: Alterar depois para o icone da aplicação */}
                            <p>{rates[0]}</p>

                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className="box">
                            
                            {/* TODO: Alterar depois para o icone da aplicação */}
                            <p>{rates[1]}</p>

                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box className="box">
                            
                            {/* TODO: Alterar depois para o icone da aplicação */}
                            <p>{rates[2]}</p>

                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className="box">
                            
                            {/* TODO: Alterar depois para o icone da aplicação */}
                            <p>{rates[3]}</p>

                            </Box>
                        </Grid>
                    </Grid>

                    <Box className="box">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box className="box">
                            
                                {/* TODO: Alterar depois para o icone da aplicação */}
                                <p>{rates[4]}</p>

                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className="box">
                            
                                {/* TODO: Alterar depois para o icone da aplicação */}
                                <p>{rates[5]}</p>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box className="box">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box className="box">
                            
                                {/* TODO: Alterar depois para o icone da aplicação */}
                                <p>{rates[6]}</p>

                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className="box">
                            
                                {/* TODO: Alterar depois para o icone da aplicação */}
                                <p>{rates[7]}</p>

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
                                                            
                                {/* TODO: Alterar depois para a barra gráfica */}
                                <p>{total[0]}</p>

                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className="box">
                                                            
                                {/* TODO: Alterar depois para a barra gráfica */}
                                <p>{total[1]}</p>

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
                                                                    
                                {/* TODO: Alterar depois para a barra gráfica */}
                                <p>{throughput[0]}</p>

                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className="box">
                                                                    
                                {/* TODO: Alterar depois para a barra gráfica */}
                                <p>{throughput[1]}</p>

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
