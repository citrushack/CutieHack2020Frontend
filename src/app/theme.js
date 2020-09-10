import { createMuiTheme } from '@material-ui/core/styles';

export default function getTheme(theme) {
  return createMuiTheme({
    palette: {
      type: theme.paletteType,
      background: {
        default: theme.paletteType === 'light' ? '#00000' : '#fffff',
      },
      primary: {
        main: '#212121',
      },
      error: {
        main: '#850840',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '.MuiAutocomplete-inputRoot[class*="MuiInput-root"] .MuiAutocomplete-input:first-child': {
            paddingLeft: '20px',
            paddingBottom: '15px',
            paddingTop: '15px',
          },
          '.MuiInputBase-adornedEnd': {
            border: '1px solid #212121',
            borderBottom: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.06)',
            borderRadius: '4px',
            marginRight: '10px',
          },
          '.MuiAutocomplete-root .MuiInputLabel-shrink': {
            transform: 'translate(0, -8.5px) scale(0.75)',
          },
          '.MuiAutocomplete-root .MuiInputLabel-root': {
            paddingTop: '9px',
            paddingLeft: '20px',
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.06)',
          position: 'relative',
          '& $notchedOutline': {
            borderColor: '#212121',
          },
          '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
            borderColor: '#212121',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              borderColor: '#212121',
            },
          },
          '&$focused $notchedOutline': {
            borderColor: '#212121',
            borderWidth: 1,
          },
        },
      },
      MuiFormLabel: {
        root: {
          color: '#2b2b2b',
          padding: '0px 9px',
        },
      },
    },
  });
}
