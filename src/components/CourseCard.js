import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logoInEdu from '../assets/images/logoInEdu.svg';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { yellow, indigo } from '@mui/material/colors';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const CourseCard = ({ course }) => {


    let lineMultiplier = 1
    let descMultiplier = 1

    if (course?.id === 1) {
        lineMultiplier = 2
        descMultiplier = 4
    }

    return (
        <Card
            sx={{
                width: 345,
                maxWidth: '55vw',
                margin: 'auto',
                borderRadius: '25px',
                backgroundColor: yellow[400]
            }}
        >
            <CardActionArea
                onClick={() => console.log("clicked")}
                sx={{
                    height: '89%'
                }}
            >
                <CardMedia
                    component="img"
                    height="240"
                    image={course?.thumbnail}
                    alt="Course Thumbnail"
                />
                <CardContent
                    sx={{
                        height: "40%"
                    }}
                >
                    <Box
                        sx={{
                            overflowY: 'hidden'
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                                height: '2.5em',
                                fontWeight: 600,
                                color: indigo[500],
                            }}
                        >
                            {course?.title}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '40px',
                            overflowY: 'hidden'
                        }}
                    >
                        <Typography
                            variant="body2"
                            color="text.primary"
                            textAlign="justify"
                            sx={{
                                // overflow: 'auto'
                            }}
                        >
                            {course?.description?.length >= 88 ?
                                course?.description?.substring(0, 85) + "..." :
                                course?.description
                            }
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ textAlign: 'center', height: '9%' }}>
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