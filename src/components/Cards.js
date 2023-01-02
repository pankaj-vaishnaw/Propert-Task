import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { Bed } from '@mui/icons-material';
import BathroomIcon from '@mui/icons-material/Bathroom';
import LayersIcon from '@mui/icons-material/Layers';

export default function Cards({singlecard}) {
    return (
        
                <Card sx={{ width: 290, minWidth: 200 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={singlecard.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Stack direction="row" spacing={6}>
                                <Typography gutterBottom component="div" sx={{ fontWeight: 'bolder', m: 1, color:'#7065F2' }}>
                                    ${singlecard.rentAmount}/month
                                </Typography>
                                <FavoriteBorderIcon  sx={{color:'#7065F2'}}/>
                            </Stack>
                            <Typography component='div' variant='h6' fontWeight={600}>
                                {singlecard.locationTitle}
                            </Typography>
                            <Typography component='div' variant='h6' fontWeight={100}>
                                {singlecard.typeOfProperty}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {singlecard.locationAddress}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Stack direction="row" spacing={1}>
                            <Chip icon={<Bed sx={{color:'#7065F2'}}/>} size='small' label={singlecard.beds+'beds'} variant="outlined"  />
                            <Chip icon={<BathroomIcon sx={{color:'#7065F2'}} />} size='small' label={singlecard.baths+'Bathrooms'} variant="outlined" />
                            <Chip icon={<LayersIcon sx={{color:'#7065F2'}} />} size='small' label={singlecard.size} variant="outlined" />
                        </Stack>
                    </CardActions>
                </Card>
    );
}
