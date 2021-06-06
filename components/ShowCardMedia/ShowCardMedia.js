import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    padding: '12px 20px',
  },
  media: {
    height: '100px',
  },
});

export default function ImgMediaCard(props) {
  const [itemObj, setItemObj] = useState(props.item)
  
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={itemObj?.imageUrl}
        title={itemObj?.imageTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {itemObj?.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {itemObj?.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
