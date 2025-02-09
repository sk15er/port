
import { Color } from "three";

export const materialColors = {
  light: {
    primary: new Color("#E65A5A"),    // Softer red
    secondary: new Color("#FF3333"),   // Another shade of red
  },
  dark: {
    primary: new Color("#FF0000"),     // Pure red
    secondary: new Color("#CC0000"),   // Darker red
  },
};

export const modelConfig = {
  rotationSpeed: 0.005,
  amplitude: 0.1,
  frequency: 1,
};
