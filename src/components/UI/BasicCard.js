import React from 'react';

// import './Card.css';

// const Card = (props) => {
//   return (
//     <div className='card'>{props.children}</div>
//     // line above: should look like {`${classes.card} ${props.className}`}
//     // if classes css was used
//   );
// };

// export default Card;

// UI basic card component from MUI

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography> */}
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>
        <Typography variant="body2">
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Bruncthime</Button>
      </CardActions>
    </Card>
  );
}
