import { Typography, Box, Stack, Button, useMediaQuery } from '@mui/material';
import nwechatIcon from '../../assets/newchat.png';
import editIcon from '../../assets/edit.png';
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ setChat, closeMenu }) {

    const isMobile = useMediaQuery('(max-width:800px)');
    const navigate = useNavigate();

    const handleNavigateHistory = () => {
        navigate('/history');
    };

    return (
        <Box >
            {isMobile && (
                <Button
                    endIcon={<CloseIcon />}
                    onClick={closeMenu}
                >
                    Close
                </Button>
            )}
            <Link to={'/'} style={{ textDecoration: 'none', }}>
                <Stack direction={'row'} gap={1} justifyContent= {'space-between'} alignItems= {'center'} backgroundColor={'#D7C7F4'} sx={{ padding: '10px' }}>
                    <Stack direction={'row'} gap={1} justifyContent= {'center'} alignItems={'center'} sx={{ padding: '10px' }}>
                        <Box
                            component={'img'}
                            src={nwechatIcon}
                            height={32}
                            width={34}
                            borderRadius={2}
                            boxShadow={4}
                            flexShrink={0}
                        />
                        <Typography
                              sx={{
                                fontFamily: 'Ubuntu',
                                fontWeight: 400,
                                fontSize: '20px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                color: '#000000',
                              }}
                        >
                            New Chat
                        </Typography>
                    </Stack>

                    <Box
                        component={'img'}
                        src={editIcon}
                        height={24}
                        width={24}
                        borderRadius={2}
                    />
                </Stack>
            </Link>

            <Box p={{xs:2, md:3}}>
                <Link to={'/history'}>
                    <Button variant="contained" sx={{ width: 1, backgroundColor: '#D7C7F4'}} onClick={handleNavigateHistory}> 
                        {/* <Typography
                            sx={{
                                fontFamily: 'Ubuntu',
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                color: '#414146',
                            }}
                        > */}
                            Past Conversations
                        {/* </Typography> */}
                    </Button>
                </Link>
            </Box>

        </Box>
    )
}