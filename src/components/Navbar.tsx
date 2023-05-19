import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import ArticleIcon from '@mui/icons-material/Article';
import { styles } from './styles';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Box, Button, Slider, Typography } from '@mui/material';
import satStatLogo from '../assets/satstatlogo.jpeg';
import { useNavigate } from 'react-router-dom';

function Navbar () {
    const navigate = useNavigate();
    return (
    <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Box sx={styles.navBar} >
            <img src={satStatLogo} style={styles.navBarLogo}></img>
        </Box>
        <Box sx={styles.navBar} onClick={() => navigate('/')}>
            <HomeIcon sx={styles.navBarIcons} />
        </Box>
        <Box sx={styles.navBar} onClick={() => navigate('/dashboard')}>
            <AssessmentIcon sx={styles.navBarIcons} />
        </Box>
        <Box sx={styles.navBar} onClick={() => navigate('/applications')}>
            <StackedLineChartIcon sx={styles.navBarIcons} />
        </Box>

        <Box sx={styles.navBar} onClick={() => navigate('/reports')}>
            <ArticleIcon sx={styles.navBarIcons} />
        </Box>
    </Box>
    )
}

export default Navbar;