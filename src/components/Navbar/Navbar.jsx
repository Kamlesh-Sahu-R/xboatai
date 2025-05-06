import { Typography, Stack, useMediaQuery } from '@mui/material'
import { Link, useOutletContext } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {

    const { handleMobileMenu } = useOutletContext();
    const isMobile = useMediaQuery('(max-width:800px)')
    
    return (
        <Stack
            component={'header'}
            p={{ xs: 2, md: 3 }}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
                {isMobile && (
                    <MenuIcon
                        onClick={() => handleMobileMenu(prev => !prev)}
                    />)
                }

                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    
                    {/* <Typography
                              sx={{
                                fontFamily: 'Ubuntu',
                                fontWeight: 700,
                                fontSize: '28px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                color: '#9785BA',
                              }}
                    >
                        Bot AI
                    </Typography> */}
                    <h1>Bot AI</h1>
                </Link>
        </Stack>
    )
}