import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Set = ({ images, name }) => (
  <Card sx={{ maxWidth: 345, maxHeight: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        width="150"
        image={images.logo}
        alt={`${name} logo`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default Set;
