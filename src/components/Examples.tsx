import { Card, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Description.module.scss'
import { colors } from '../styles/theme'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Slider from './Slider';

interface ExamplesProps {

}

const examples = [{ title: 'Синя штука', img: '/1.webp', },
{ title: 'Синя штука', img: '/1.webp', },
{ title: '3д штука', img: '/2.avif', },
{ title: 'Гарна штука', img: '/3.jpg' },
{ title: 'Біла штука', img: '/1.webp', },
{ title: 'Льон штука', img: '/2.avif', },
{ title: 'Штучна штука', img: '/3.jpg' },
{ title: 'Синя штука', img: '/2.avif', },
]

const Examples: React.FC<ExamplesProps> = () => {
  return (
    //  <Grid
    //    md
    //    container
    //    style={{ background: `${colors[1]}` }}>
    //    <Typography
    //      className={styles.title}
    //      variant='h2'
    //    >
    //      Наші роботи:
    //    </Typography>
    //     <Grid
    //      container direction='row'
    //      justifyContent='center'
    //      alignItems='center'>
    //      <Grid
    //        xs={1}
    //        className={styles.iconWrapper}
    //        item
    //        justifyContent='flex-end'>
    //        <IconButton>
    //          <KeyboardDoubleArrowLeftIcon
    //            className={styles.icon}
    //            style={{ height: 100, width: 100, color: `${colors[2]}` }} />
    //        </IconButton>
    //      </Grid>
    //      {subtitles.map((item, index) =>
    //        <Grid
    //          spacing='2'
    //          xs={2}
    //          key={index}
    //          item
    //          direction='column'
    //          className={styles.column}
    //        >
    //          <Card className={styles.card}>
    //            <Image
    //              className={styles.image}
    //              src={images[index]}
    //              alt="photo-example"
    //              width={250}
    //              height={300}
    //              priority />
    //          </Card>
    //          <Typography
    //            className={styles.subtitle}
    //            variant='h4'>
    //            {item}
    //          </Typography>
    //        </Grid>
    //      )}
    //      <Grid
    //        xs={1}
    //        className={styles.iconWrapper}
    //        item
    //        justifyContent='flex-start'
    //      >
    //        <KeyboardDoubleArrowRightIcon
    //          className={styles.icon}
    //          style={{ height: 180, width: 100, color: `${colors[2]}` }} />
    //      </Grid>
    //    </Grid> 

    //  </Grid >
    <Grid spacing={100}>
      <Slider examples={examples} />
    </Grid>

  );
};

export default Examples;