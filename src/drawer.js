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
import {useAppStore} from './appstore';

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
  const [ setOpen] = React.useState(true);
  const open = useAppStore((state) => state.dopen);

 

  return (
    <Box sx={{ display: 'flex', backgroundColor:'black' }}>
      <CssBaseline />
      < Box height={30}/>
      <Drawer variant="permanent" open={open}sx={{backgroundColor:"black"}}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          
        </DrawerHeader>
        <Divider />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',color:'white', backgroundColor:'black' }}
      component="nav"
      aria-labelledby="categories-subheader"
      subheader={
        <ListSubheader component="div" id="categories-subheader" sx={{backgroundColor:'black',color:'white'}}>
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
                    backgroundColor:'black'
                  }}
                >
                 {index === 0 ? <LocalMoviesIcon sx={{color:'white'}}/> : index === 1 ? <StarOutlineIcon sx={{color:'white'}}/> : <UpcomingIcon sx={{color:'white'}}/> }
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List >
        <Divider />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', backgroundColor:'black' ,color:'white'}}
      component="nav"
      aria-labelledby="genres-subheader"
      subheader={
        <ListSubheader component="div" id="genres-subheader" sx={{backgroundColor:'black', color:'white'}}>
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
                 {index === 0 ? <BoltIcon sx={{color:'white'}}/> 
 : index === 1 ? <ExploreIcon sx={{color:'white'}} /> 
 : index === 2 ? <ChildCareSharpIcon sx={{color:'white'}}/> 
 : index === 3 ? <SentimentVerySatisfiedSharpIcon sx={{color:'white'}}/> 
 : index === 4 ? <BuildTwoToneIcon sx={{color:'white'}}/> 
 : index === 5 ? <VideoCameraFrontIcon sx={{color:'white'}}/> 
 : index === 6 ? <FamilyRestroomIcon sx={{color:'white'}}/> 
 : index === 7 ? <Face3Icon sx={{color:'white'}}/> 
 : index === 8 ? <MusicNoteIcon sx={{color:'white'}}/> 
 : index === 9 ? <FavoriteIcon sx={{color:'white'}}/> 
 : index === 10 ? <ScienceIcon sx={{color:'white'}}/> 
 : <TvIcon sx={{color:'white'}}/>
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
