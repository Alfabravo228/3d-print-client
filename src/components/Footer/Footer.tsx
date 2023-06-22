import { Grid } from '@mui/material';
import React from 'react';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Grid>
      <h1>  Логотип</h1>
      <Grid>
        <div>
          Оформіть заявку на сайті і ми зв’яжемося з вами
          найближчим часом.
          Ім’я
        </div>
        <div>
          Оформіть заявку на сайті і ми зв’яжемося з вами
          найближчим часом.
          Ім’я
        </div>
        <div>
          Оформіть заявку на сайті і ми зв’яжемося з вами
          найближчим часом.
          Ім’я
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;