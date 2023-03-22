import { Card, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface BenefitsProps {

}

const Benefits: React.FC<BenefitsProps> = () => {
  return (
    <Grid container>
      <h1>Переваги</h1>
      <Grid container>
        <Card>
          <Image
            src="/3.jpg"
            alt="photo-exemple"
            width={70}
            height={70}
            priority />
          <h3>Перевага №1</h3>
          <div>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </div>
        </Card>
        <Card>
          <Image
            src="/3.jpg"
            alt="photo-exemple"
            width={70}
            height={70}
            priority />
          <h3>Перевага №1</h3>
          <div>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </div>
        </Card>
        <Card>
          <Image
            src="/3.jpg"
            alt="photo-exemple"
            width={70}
            height={70}
            priority />
          <h3>Перевага №1</h3>
          <div>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </div>
        </Card>
        <Card>
          <Image
            src="/3.jpg"
            alt="photo-exemple"
            width={70}
            height={70}
            priority />
          <h3>Перевага №1</h3>
          <div>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </div>
        </Card>
        <Card>
          <Image
            src="/3.jpg"
            alt="photo-exemple"
            width={70}
            height={70}
            priority />
          <h3>Перевага №1</h3>
          <div>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Benefits;