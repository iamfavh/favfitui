import type { ReactNode } from "react";

type PaneProps = {
    className?: string;
    children: ReactNode;
};

export default function Pane({className, children}: PaneProps) {

    return (
        <div className={`flex min-h-screen justify-center ${className ?? ""}`}>
            {children}
        </div>
    );
};