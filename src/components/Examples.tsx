import { Card, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface ExamplesProps {

}

const Examples: React.FC<ExamplesProps> = () => {
  return (
    <Grid container>
      <h1>Приклади</h1>
      <Card>
        <Image
          src="/1.webp"
          alt="photo-exemple"
          width={100}
          height={100}
          priority />
        <h3>Приклад №1</h3>

      </Card>
      <Card>
        <Image
          src="/1.webp"
          alt="photo-exemple"
          width={100}
          height={100}
          priority />
        <h3>Приклад №1</h3>

      </Card>
      <Card>
        <Image
          src="/1.webp"
          alt="photo-exemple"
          width={100}
          height={100}
          priority />
        <h3>Приклад №1</h3>

      </Card>
    </Grid>
  );
};

export default Examples;