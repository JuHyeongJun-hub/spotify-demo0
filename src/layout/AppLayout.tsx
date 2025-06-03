import { styled, Typography } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router'
import HomeIcon from '@mui/icons-material/Home';
import { createTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Box } from '@mui/material';

const Layout = styled('div')({
    display: 'flex',
    height: '100vh',
    padding: '8px',

})

const SideBar = styled('div')(({theme}) => ({
    width: '331px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}))

const ContentBox = styled('div')(({theme}) => ({
    borderRadius: '8px',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    width: '100%',
    padding: '8px',
    marginBottom: '8px',
    marginRight: '8px',

}));

const NavList = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
});

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    color: theme.palette.text.secondary,
    fontWeight: 700,
    fontSize: '1.2rem',
    padding: '8px 0',
    transition: 'color 0.2s',
    "&:hover": {
        color: theme.palette.text.primary,
    },
    "&.active": {
        color: theme.palette.text.primary,
    },
}));

const LibraryHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '16px 0 8px 0',
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: '1.1rem',
}));

const AppLayout = () => {
  return (
    <Layout>
        <SideBar>
            <ContentBox>
                <NavList>
                    <StyledNavLink to="/" end>
                        <HomeIcon />
                        <Typography variant="h2" fontWeight={700}>Home</Typography>
                    </StyledNavLink>
                    <StyledNavLink to="/search">
                        <SearchIcon />
                        <Typography variant="h2" fontWeight={700}>Search</Typography>
                    </StyledNavLink>
                </NavList>
                <LibraryHeader>
                    <BookmarkIcon />
                    <Typography variant="h2" fontWeight={700} sx={{ flex: 1 }}>
                        Your Library
                    </Typography>
                    <IconButton size="small" sx={{ color: '#1ed760' }}>
                        <AddIcon />
                    </IconButton>
                </LibraryHeader>
            </ContentBox>
        </SideBar>
        <Outlet />
    </Layout>
  )
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#fff' },
    background: { default: '#121212', paper: '#181818' },
    text: { primary: '#fff', secondary: '#b3b3b3' },
  },
  shape: { borderRadius: 16 },
});

export default AppLayout