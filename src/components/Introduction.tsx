import { Box, Grid, Icon, Typography } from '@mui/material';
import { Properties } from 'csstype';
import React from 'react';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GppGoodIcon from '@mui/icons-material/GppGood';
import styles from '../styles/Introduction.module.scss'
import { colors } from '../styles/theme'


interface IntroductionProps {

}

const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <Grid
      md
      className={styles.wrapper}>
      <Typography
        className={styles.title}
        variant={'h2'}>
        Чому 3D друк?
      </Typography>
      <Grid

        container
        direction="row"
        className={styles.container}
        justifyContent='center'
        alignItems="flex-start"
      >
        <Grid
          item
          xs={4}
          className={styles.column}>
          <Grid className={styles.iconWrapper}>
            <ViewInArIcon
              className={styles.icon}
              style={{ height: 100, width: 100, color: `${colors[1]}` }} />
          </Grid>
          <Typography
            className={styles.subtitle}
            variant={'h3'}>
            Скоротіть час на збірку
          </Typography>
          <Typography
            className={styles.text}
            variant={'h5'}
          >
            Не витрачайте час на складання виробів! Використовуйте 3D-друк для створення складних геометричних форм, які можна надрукувати як окремі деталі або о`єднати в одну збірку.
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          className={styles.column}>
          <Grid className={styles.iconWrapper}>
            <AutoGraphIcon
              className={styles.icon}
              style={{ height: 100, width: 100, color: `${colors[1]}` }} />
          </Grid>
          <Typography
            className={styles.subtitle}
            variant={'h3'}>
            Швидке виконання замовлення
          </Typography>
          <Typography
            className={styles.text}
            variant={'h5'}
          >
            Адаптивна екосистема, яка є повноцінною основою для всіх видів серверних додатків.
          </Typography>

        </Grid>
        <Grid
          item
          xs={4}
          className={styles.column}>
          <Grid className={styles.iconWrapper}>
            <GppGoodIcon
              className={styles.icon}
              style={{ height: 100, width: 100, color: `${colors[1]}` }} />
          </Grid>
          <Typography
            className={styles.subtitle}
            variant={'h3'}>
            Надійна якість
          </Typography>
          <Typography
            className={styles.text}
            variant={'h5'}
          >
            Запатентовані процеси, досвідчені оператори 3D-друку та інспекції - ось наші секрети, які допомагають нам щоразу виготовляти винятково якісну продукцію.
          </Typography>
          <Typography style={{ display: 'inline-block', borderBottom: '2px solid black' }}></Typography>
        </Grid>
      </Grid>
    </Grid>

  );
};

export default Introduction;


