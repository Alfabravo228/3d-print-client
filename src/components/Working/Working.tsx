import { Card, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface WorkingProps {

}

interface WorkingState {

}

class Working extends React.Component<WorkingProps, WorkingState> {
  state = {}

  render() {
    return (
      <Grid>
        <h1>Як це працює:</h1>
        <div>
          Learn about Next.js in an interactive course with&nbsp;quizzes!
          Learn about Next.js in an interactive course with&nbsp;quizzes!
        </div>
        <Grid container>
          <Card>
            <Image
              src="/3.jpg"
              alt="photo-exemple"
              width={70}
              height={70}
              priority />
            <h3>Крок №1</h3>
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
            <h3>Крок №1</h3>
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
            <h3>Крок №1</h3>
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
            <h3>Крок №1</h3>
            <div>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </div>
          </Card>
        </Grid>
      </Grid>
    );
  }
}


export default Working;
