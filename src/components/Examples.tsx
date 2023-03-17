import { Card, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface ExamplesProps {

}

const Examples: React.FC<ExamplesProps> = () => {
  return (
    <Grid>
      <Card>
        <Image
          src="/images/1.webp"
          alt="photo-exemple"
          width={100}
          height={100}
          priority />
      </Card>
      <Card>
        <Image
          src="/images/2.avif"
          alt="photo-exemple"
          width={100}
          height={100}
          priority />
      </Card>
      <Card>
        <Image
          src="/images/3.jpg"
          alt="photo-exemple"
          width={100}
          height={100}
          priority />
      </Card>
    </Grid>
  );
};

export default Examples;