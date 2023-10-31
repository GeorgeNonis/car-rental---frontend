import { FilledButton, OutlinedButton } from "./button.styles";
import { ButtonProps } from "./button.types";

const Button = ({ children, theme }: ButtonProps) => {
  const button =
    theme === "filled" ? (
      <FilledButton>{children}</FilledButton>
    ) : (
      <OutlinedButton>{children}</OutlinedButton>
    );
  return button;
};
export default Button;
