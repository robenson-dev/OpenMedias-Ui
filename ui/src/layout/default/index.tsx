import React, { FC } from "react";
import { Navigation } from "./components/Header/Navigation";

interface Props {
  children?: React.ReactNode;
}

const LayoutDefault: FC<Props> = ({ children }: Props) => {
  return (
    <>
        <div className="video-app">
            <Navigation/>
            {children}
        </div>
    </>
  );
};

export default LayoutDefault;
