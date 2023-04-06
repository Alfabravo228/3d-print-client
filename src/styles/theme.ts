import { createTheme } from '@mui/material/styles';
import createTypography from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary'];
  }
  interface PaletteOptions {
    custom: PaletteOptions['primary'];
  }
}


export const colors = ['#ea2845', '#1f2640', '#ffffff', '#333333']

const theme = createTheme({
  palette: {
    primary: {
      main: '#ea2845',
    },
    secondary: {
      main: '#1f2640',
    },
    custom: {
      main: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            letterSpacing: '0.5px',
            fontWeight: '500',
            fontSize: '16px',
            color: colors[2],
            textAlign: 'center',
            padding: '14px 28px',
            minWidth: '230px',
            borderRadius: '30px',
            transition: 'all .1s ease-in',
            backgroundColor: colors[0],
            border: `2px solid ${colors[0]}`,
            '&:hover': {
              backgroundColor: 'inherit',
            },
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            border: `2px solid ${colors[2]}`,
            letterSpacing: '0.5px',
            fontWeight: '500',
            fontSize: '16px',
            color: colors[2],
            textAlign: 'center',
            padding: '14px 28px',
            minWidth: '230px',
            borderRadius: '30px',
            transition: 'all .1s ease-in',
            backgroundColor: 'inherit',

            '&:hover': {
              border: `2px solid ${colors[0]}`,
              color: colors[0],
            },
          },
        },
        {
          props: { color: 'inherit' },
          style: {
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '18px',
            marginLeft: '25px',
            '&:hover': {
              color: '#ea2845',
            },
          },
        },
      ],
    },
    MuiGrid: {
      variants: [
        {
          props: { spacing: 100 },
          style: {
            padding: '100px 100px',
          },
        },
      ]
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            margin: '0 0 5px',
            fontSize: '55px',
            color: colors[2],
            fontWeight: '600',
            lineHeight: '75px',
          },
        },
        {
          props: { variant: 'h2' },
          style: {
            fontSize: '40px',
            color: colors[0],
            fontWeight: 700,
            lineHeight: '60px',
          },
        },
        {
          props: { variant: 'h3' },
          style: {
            maxWidth: '600px',
            fontSize: '20px',
            color: colors[1],
            fontWeight: 700,
            lineHeight: '32px',
          },
        },
        {
          props: { variant: 'h4' },
          style: {
            maxWidth: '600px',
            fontSize: '18px',
            color: colors[2],
            fontWeight: 500,
            lineHeight: '32px',
          },
        },
        {
          props: { variant: 'h5' },
          style: {
            fontSize: '16px',
            color: colors[3],
            fontWeight: 500,
            lineHeight: '24px',
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

export default theme;
