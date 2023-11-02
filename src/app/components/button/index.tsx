import { FilledButton, OutlinedButton } from "./button.styles";
import { ButtonProps } from "./button.types";

const Button = ({ children, theme, className }: ButtonProps) => {
  const button =
    theme === "filled" ? (
      <FilledButton className={className}>{children}</FilledButton>
    ) : (
      <OutlinedButton className={className}>{children}</OutlinedButton>
    );
  return button;
};
export default Button;
