import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';

const serviceStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'black',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    background: 'white',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50px 10px',
  },
  container: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))',
    gridGap: '25px',
    padding: '25px',
    background: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.05)',
    willChange: 'width, height',
  },
  item: {
    width: '100%',
    height: '100%',
    background: 'white',
    borderRadius: '5px',
    willChange: 'transform, opacity',
  },
}));

export default serviceStyles;
