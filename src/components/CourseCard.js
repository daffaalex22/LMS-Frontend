import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logoInEdu from '../assets/images/logoInEdu.svg';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { yellow, indigo } from '@mui/material/colors';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const CourseCard = () => {
    return (
        <Card
            sx={{
                width: 345,
                maxWidth: '55vw',
                // maxWidth: 345,
                margin: 'auto',
                borderRadius: '25px',
                backgroundColor: yellow[400]
            }}>
            <CardActionArea onClick={() => console.log("clicked")}>
                <CardMedia
                    component="img"
                    height="140"
                    image={logoInEdu}
                    alt="Course Thumbnail"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, color: indigo[500] }}>
                        Complete Blender Creator : Learn 3D Modeling for Beginners
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Use Blender to create beautifull 3D Models for video gamers, 3D printing & more beginers level course
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ textAlign: 'center' }}>
                <Box sx={{ paddingLeft: '12px' }}>
                    <StarRoundedIcon sx={{ color: indigo[500], marginBottom: '-5px' }} />
                    <Typography variant="body2" component="span" sx={{ fontWeight: 600, color: indigo[500], lineHeight: '2em' }}>
                        4.9
                    </Typography>
                    <Button size="small" sx={{ fontWeight: 600, color: indigo[500], marginLeft: '5px' }}>
                        See More
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
}

export default CourseCard;