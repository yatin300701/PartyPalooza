import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
     interface Theme {
      customPalette: {
            Orange?:string;
            Green?:string;
            Black?:string;
            Grey?:string;
            White?:string;
            Red?:string;
            Primary?: string;
            // #282c3f
            Brown?:string,
      };
    }
     interface ThemeOptions {
      customPalette?: {
            Orange?:string;
            Green?:string;
            Black?:string;
            Grey?:string;
            White?:string;
            Red?:string;
            Primary?: string;
            Brown?:string,
      };
    }
  }