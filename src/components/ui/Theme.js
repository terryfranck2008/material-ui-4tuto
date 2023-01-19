import { createTheme } from '@material-ui/core/styles';

//createTheme function helps us to create custom theme for our application passing through an object with properties that
//will override the default one of material-ui
/*  STYLING THEME
 - Palette: is a way to manage the colors used in our application.
 -Typography: Typography component enables styling for the text that appear on the page. Typography variant are: h1,h2,...
*/

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,

        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        },
        h2: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: `${arcBlue}`,
            lineHeight: 1.5
        }
    }
});