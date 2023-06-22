import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '../styles/DrawerAppBar.module.scss'
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import { Grid, Icon } from '@mui/material';

interface DrawerAppBarProps {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Головна', '3д-друкування', '3д-моделювання', 'Контакти'];

const DrawerAppBar: React.FC<DrawerAppBarProps> = (props: DrawerAppBarProps) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} className={styles.container}>
      <CssBaseline />
      <AppBar
        component="nav"
        className={styles.appBar}
        elevation={0}
        position="sticky"
      >
        <Toolbar>
          <Grid container justifyContent={"space-between"}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid className={styles.logoWrapper}>
              <Grid className={styles.iconWrapper}>
                <ThreeDRotationIcon
                  className={styles.icon}
                  style={{ height: 45, width: 45 }} />
              </Grid>
              <Typography
                className={styles.titleFirst}
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Sculptify
              </Typography>
              {/* <Typography
                className={styles.titleSecond}
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                UA
              </Typography> */}
            </Grid>
            <Grid className={styles.linksWrapper} sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  color='inherit'
                  className={styles.link}
                  key={item}
                >
                  {item}
                </Button>
              ))}
            </Grid>
          </Grid>
        </Toolbar >
      </AppBar >
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box >
  );
}

export default DrawerAppBar
