import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
  }
}

export const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "subtitle3" },
          style: {
            fontSize: 16,
            fontWeight: 600,
            lineHeight: "20px",
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: "Work Sans",
  },
});
