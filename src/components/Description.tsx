import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Description.module.scss'
import { Button, Grid, Typography } from '@mui/material';
import { TypePredicateKind } from 'typescript';

const inter = Inter({ subsets: ['latin'] })

interface DescriptionProps {

}

const Description: React.FC<DescriptionProps> = () => {
  return (
    <Grid
      spacing={100}
      container
      justifyContent={"flex-start"}
      className={styles.container}>
      <Typography
        variant="h1"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        className={styles.title}>
        Сучасний 3D-друк
      </Typography>
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        className={styles.text}>
        Вітаємо вас у світі новітніх технологій та інновацій! Наша компанія пропонує найкращі послуги 3D-друку, які забезпечать вам якісний та швидкий результат у виробництві прототипів та готових виробів будь-якої форми, кольору та міцності.
      </Typography>
      <Grid className={styles.buttonWrapper}>
        <Button
          className={styles.button1}
          variant='contained'
          color={'primary'}>
          Замовити
        </Button>
        <Button
          className={styles.button2}
          variant='contained'
          color={'secondary'}

        >
          Контакти
        </Button>
      </Grid>
    </Grid >
  );
};

export default Description