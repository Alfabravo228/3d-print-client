import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Grid, Button, IconButton, Card, Typography } from '@mui/material';
import Image from 'next/image';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import styles from '../styles/Description.module.scss'
export const colors = ['#ea2845', '#1f2640', '#ffffff', '#333333']

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 auto'
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  button: {
    minWidth: 0,
    padding: '10px',
  },
}));

type SliderProps = {
  examples: { title: string; img: string; }[];
};

const Slider = ({ examples }: SliderProps) => {
  const classes = useStyles();
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    const lastIndex = examples.length - 1;
    setStartIndex((startIndex - 1 + examples.length) % examples.length);
  };

  const handleNextClick = () => {
    const lastIndex = examples.length - 1;
    setStartIndex((startIndex + 1) % examples.length);
  };

  return (
    <Grid
      container direction='row'
      justifyContent='center'
      alignItems='center'>
      <Grid
        xs={1}
        className={styles.iconWrapper}
        item
        justifyContent='flex-end'>
        <IconButton onClick={handlePrevClick}>
          <ArrowBackIos
            className={styles.icon}
            style={{ height: 100, width: 100, color: `${colors[1]}` }} />
        </IconButton>
      </Grid>
      {examples
        .slice(startIndex, startIndex + 5)
        .concat(examples.slice(0, Math.max(0, 5 - (examples.length - startIndex))))
        .map((example, index) => (
          <Grid
            spacing='2'
            xs={2}
            key={index}
            item
            direction='column'
            className={styles.column}
          >
            <Card className={styles.card}>
              <Typography
                className={styles.subtitle}
                variant='h5'>
                {example.title}
              </Typography>
              <Image
                className={styles.image}
                src={example.img}
                alt="photo-example"
                width={250}
                height={300}
                priority />
            </Card>
          </Grid>
        ))}
      <Grid
        xs={1}
        className={styles.iconWrapper}
        item
        justifyContent='flex-start'
      >
        <IconButton onClick={handleNextClick}>
          <ArrowForwardIos
            className={styles.icon}
            style={{ height: 180, width: 100, color: `${colors[1]}` }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Slider;



