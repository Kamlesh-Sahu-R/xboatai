import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from 'react-router-dom'
import { useState, useEffect} from 'react';
import * as React from 'react';
import { Grid } from '@mui/material'

function App() {

  const [chat, setChat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Force a reflow to ensure layout is updated
    window.dispatchEvent(new Event('resize'));
  }, [menuOpen]);

  return (

    <div >
      <Grid container sx={{ background: 'linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))' }} >
        {/* <Grid
          sx={{
            gridColumn: { xs: 'span 12', md: 'span 3' },
            width: { xs: '70%', md: 'auto'},
            transform: { xs: menuOpen ? 'translateX(0)' : 'translateX(-100%)', md: 'none' },
            transition: { xs: 'transform 400ms ease', md: 'none' },
            position: { xs: 'fixed', md: 'relative' },
            height: '100vh',
            zIndex: { xs: 9999, md: 1 },
            boxShadow: { xs: menuOpen ? 10 : 0, md: 0 },
          }}
        >
          <Sidebar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
        </Grid> */}

<Grid
  sx={{
    gridColumn: { xs: 'span 12', md: 'span 3' },
    width: { xs: '70%', md: 'auto' },
    position: { xs: 'absolute', md: 'relative' },
    top: 0,
    left: 0,
    height: '100vh',
    zIndex: { xs: 9999, md: 1 },
    boxShadow: { xs: menuOpen ? 10 : 0, md: 0 },
    transform: { xs: menuOpen ? 'translateX(0)' : 'translateX(-100%)', md: 'none' },
  }}
>
  <Sidebar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
</Grid>

          <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 9' }}}>
            <Outlet context={{ chat: chat, setChat: setChat, handleMobileMenu: setMenuOpen }} />
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
