import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { 
      main:'#212721', //black
    },
    secondary: {
      main:'#ffffff', //white
    },
    background: {
      default: '#ffffff', // white is the default background color
    },
    error:{
        main:'#f04747' //red
    },
    info:{
        main:'#30a66d' //green
    },
    gray: {
        main: '#969894',
        light: '#bcbdbb',
        dark: '#484D48',
    },
    pink: {
        main: '#ef3984',
        light: '#ffdaea',
    },
    text: {
      primary: '#000000', // primary text color
      secondary: '#666666', // secondary text color
    },
    gradientBackgroundColors: {
        lightPink: '#F5EDF0',
        lightBlue: '#C5E2E2',
    }
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif', 
    h1: {
      fontSize: '36px',  
      fontWeight: 600,   
    },
    h2: {
      fontSize: '24px',  
      fontWeight: 700,   
    },
    h3: {
      fontSize: '24px',
      fontWeight: 600,
    },
    body1: {
        fontSize: '16px', 
        fontWeight: 400, 
    },
    h4: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight:'22px'
    },
  },
  spacing: 8, // This sets a default spacing unit (8px)
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
          height:'36px',
          padding:'12px 8px',
          whiteSpace: 'nowrap', 
          gap:'8px',
        },
        startIcon: {
            marginLeft: 0,
            marginRight: 0,
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.gray.dark,
            },
          }),
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.gray.light}`,
            '&:hover': {
              backgroundColor:  theme.palette.common.white,
              border: `1px solid ${theme.palette.gray.main}`,
            },
          }),
        },
    ],
    },
    MuiOutlinedInput: {
        styleOverrides: {
          root: {
            height: '36px',
            width:'280px',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            paddingLeft: '12px',
            paddingRight: '4px',
          },
          input: {
            padding: 0, // remove default MUI padding
          },
        },
    },
    MuiInputBase: {
        styleOverrides: {
            input: {
            fontFamily: '"Montserrat", sans-serif',
            },
        },
    },
    MuiTextField: {
        defaultProps: {
            variant: 'outlined',
        },
    },
    MuiTableCell: {
        styleOverrides: {
          root: {
            fontWeight:'600',
            fontSize: '24px',
            textAlign: 'center',
          },
        },
    },
  },
});

  
export default theme;
