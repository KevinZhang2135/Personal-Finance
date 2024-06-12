import { createTheme } from "@mui/material";

const Theme = createTheme({
    palette: {
        black: {
            light: "#5a565e",
            main: "#47444b",
            dark: "#2a272e",
            contrastText: "#fff",
            
        },
    },

    typography: {
        h1: {
            fontSize: "2.5rem",
            fontWeight: 400,
            letterSpacing: 2,
        },

        h2: {
            fontSize: "2rem",
            fontWeight: 400,
        },

        h3: {
            fontSize: "1.6rem",
            fontWeight: 400,
        },

        h4: {
            fontSize: "1.4rem",
            fontWeight: 400,
        },

        h5: {
            fontSize: "1.2rem",
            fontWeight: 600,
            letterSpacing: 1.4,
        },

        h6: {
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: 1.2,
        },

        p: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.8,
        },
    },
});



export default Theme;
