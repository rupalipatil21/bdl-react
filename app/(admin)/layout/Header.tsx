import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { Stack } from '@mui/material';
import { AppBarStyled } from '@/styles/admin.styled';
import { useDrawer } from '@/app/context/DrawerContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { toggleDrawer, drawerWidth, isMobile } = useDrawer();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  };
  return (
    <>
      <AppBarStyled drawerwidth={drawerWidth} ismobile={String(isMobile)}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="open drawer"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography noWrap >
              Welcome Admin
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="open drawer"
              onClick={handleLogout}
            >
              <LogoutIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBarStyled>
    </>
  );
}
