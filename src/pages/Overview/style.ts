import { linearProgressClasses } from '@mui/material/LinearProgress';

export const styles = {
    iconBoxStyle: {
        backgroud: 'white',
        background: '#07153A',
        display: 'flex',
        width: '6rem',
        borderRadius: '10px',
        margin: '0 auto',
    },

    iconBoxText: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 'auto'
    },

    absoluteConsumptionHorizontalChart: {
        height: 40, width: '75vw',
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#6CE5E8',
        },
        [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: '#41B8D5',
        },
    },

    nightAbsoluteConsumptionHorizontalChart: {
        height: 40, width: '75vw',
        margin: '0 auto',
        borderRadius: '10px',
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#FFF',
        },
        [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: '#FCBD55',
        },
    },
}