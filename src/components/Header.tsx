import { Grid } from '@mui/material';
import React from 'react';
import Description from './Description';
import DrawerAppBar from './DrawerAppBar';
import styles from '../styles/Start.module.scss'

interface StartProps {

}

const Header: React.FC<StartProps> = () => {
  return (
    <Grid className={styles.container} >
      <DrawerAppBar />
      <Description />
    </Grid>
  );
};

export default Header;