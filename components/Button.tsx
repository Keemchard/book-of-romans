import React, { ButtonHTMLAttributes, FC } from "react";

interface Prop extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  border: string;
  padding: string;
  margin: string;
  color: string;
  bgColor: string;
  width: string;
  height: string;
}

const Button: FC<Partial<Prop>> = ({
  label,
  onClick,
  border = "1px solid black",
  padding = "0.5rem",
  margin,
  color = "black",
  bgColor = "white",
  width = "5rem",
  height,
  ...props
}) => {
  return (
    <button
      style={{
        border: border,
        padding: padding,
        margin: margin,
        color: color,
        backgroundColor: bgColor,
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
