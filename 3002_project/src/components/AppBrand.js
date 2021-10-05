import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import YardTwoToneIcon from '@mui/icons-material/YardTwoTone';
import Typography from '@mui/material/Typography';

const AppBrand = () => {
    return (
        <Box sx={{ mb: 3 }}>
            <Avatar sx={{ 
                m: 1, color: 'black', 
                bgcolor: 'white', 
                border: '1px solid gray'
            }}>
                <YardTwoToneIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Planit
            </Typography>
        </Box>
    );
}

export default AppBrand;