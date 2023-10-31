import { ReactNode } from "react";

export interface ButtonProps {
  theme?: "filled" | "outlined";
  children: ReactNode;
}
