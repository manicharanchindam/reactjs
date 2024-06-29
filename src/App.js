
import { Box } from '@mui/material';
import './App.css';
import MiniDrawer from './drawer';
import YouTube from './media';
//import BasicGrid from './media';
//import RecipeReviewCard from './media';
import Navbar from './navbar';
import Calculator from './components/calculator';
function App() {
  return (
  <div>
    <MiniDrawer/>
    < Navbar/>
    <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: "auto",
            marginTop: "64px", // AppBar height
            marginLeft: "140px", // Drawer width
            marginRight: "140px",
            marginBottom: "64px",
            display: "auto",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 64px)", // Full viewport height minus AppBar height
          }}
        >
          < Calculator/>
    {/* < RecipeReviewCard/> */}
        </Box>
    <Box sx={{ flexGrow: 1 }} />

   < YouTube/>
  </div>
  );
}

export default App;
