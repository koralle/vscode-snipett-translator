import React from "react";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className="app-header">
      <h1>{props.title}</h1>
    </header>
  );
};
