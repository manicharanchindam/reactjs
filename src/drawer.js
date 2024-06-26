import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import BoltIcon from '@mui/icons-material/Bolt';
import ExploreIcon from '@mui/icons-material/Explore';
import ChildCareSharpIcon from '@mui/icons-material/ChildCareSharp';
import SentimentVerySatisfiedSharpIcon from '@mui/icons-material/SentimentVerySatisfiedSharp';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import Face3Icon from '@mui/icons-material/Face3';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScienceIcon from '@mui/icons-material/Science';
import TvIcon from '@mui/icons-material/Tv';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <img src='./logo.png' alt='logo' width='160px'></img>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          
        </DrawerHeader>
        <Divider />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="categories-subheader"
      subheader={
        <ListSubheader component="div" id="categories-subheader">
          Categories
        </ListSubheader>
      }>
          {['Popular', 'Top Rated', 'Upcoming'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 {index === 0 ? <LocalMoviesIcon /> : index === 1 ? <StarOutlineIcon /> : <UpcomingIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List >
        <Divider />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="genres-subheader"
      subheader={
        <ListSubheader component="div" id="genres-subheader">
          Genres
        </ListSubheader>
      }>
          {['Action', 'Adventure', 'Animation','Comedy','Crime','Documentary','Family','Horror','Music','Romance','Science Fiction','Tv Movie'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 {index === 0 ? <BoltIcon /> 
 : index === 1 ? <ExploreIcon /> 
 : index === 2 ? <ChildCareSharpIcon /> 
 : index === 3 ? <SentimentVerySatisfiedSharpIcon /> 
 : index === 4 ? <BuildTwoToneIcon /> 
 : index === 5 ? <VideoCameraFrontIcon /> 
 : index === 6 ? <FamilyRestroomIcon /> 
 : index === 7 ? <Face3Icon /> 
 : index === 8 ? <MusicNoteIcon /> 
 : index === 9 ? <FavoriteIcon /> 
 : index === 10 ? <ScienceIcon /> 
 : <TvIcon />
}

                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
