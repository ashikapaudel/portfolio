  import { createTheme } from '@mui/material/styles';

  const theme = createTheme({
    palette: {
      mode: 'dark', // Dark theme for a modern portfolio look
      primary: {
        main: '#1976d2', // Deep blue for accents
      },
      secondary: {
        main: '#00bcd4', // Teal for highlights
      },
      background: {
        default: '#121212', // Dark background
        paper: '#1e1e1e', // Slightly lighter for cards
      },
      text: {
        primary: '#ffffff', // White text
        secondary: '#b0b0b0', // Light gray for secondary text
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });

  export default theme;