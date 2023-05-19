import { linearProgressClasses } from '@mui/material/LinearProgress';

export const styles = {
    navBar: {
        mr: '1rem',
    },

    navBarLogo: { width: '3rem', borderRadius: '50%' },

    navBarIcons: { 
        color: '#FFF', 
        fontSize: '3rem',
        ':hover': {
            cursor: 'pointer',
        },
    },

    pageFormat: {
        backgroundColor: '#07153A',
        width: '100%',
        height: '100vh',
    },
    setMaxConsumptionSection: { margin: '0 auto', display: 'flex', flexDirection: 'column', height: '17rem', alignItems: 'center' },
    maxConsumptionSlider: {
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
    },

    maxConsumptionSliderTitle: { color: '#FFF', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' },
    maxConsumptionSliderValues: { color: '#FFF', fontWeight: 'bold', marginBottom: '1rem', fontSize: 15, textAlign: 'center' },
    // absoluteConsumptionInfo: {
    //     color: '#FFF',
    //     fontWeight: 'bold',
    //     fontSize: 20,
    //     mb: '1vh'
    // },

    nightAbsoluteConsumptionInfo: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 10,
        mb: '1vh'
    },

    dayAbsoluteConsumptionHorizontalChart: {
        height: 20, width: '30vw',
        borderRadius: '10px',
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#494F56',
        },
        [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: '#FCBD55',
        },
    },

    nightAbsoluteConsumptionHorizontalChart: {
        height: 20, width: '30vw',
        borderRadius: '10px',
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#494F56',
        },
        [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: '#AECADF',
        },
    },
    moreInfoButton: {
        background: '#00BF63',
        width: '10rem',
        mt: '1rem',
        color: '#FFF',
        fontWeight: 'bold',
        ':hover': {
            backgroundColor: '#44B27D',
        },
    },
}