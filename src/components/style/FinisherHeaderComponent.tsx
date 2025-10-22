import React, { useEffect } from "react";

declare global {
    interface Window {
        FinisherHeader: any;
    }
}

const FinisherHeaderComponent: React.FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/finisher-header.es5.min.js";
        script.async = true;
        script.onload = () => {
            new window.FinisherHeader({
                count: 20,
                size: { min: 2, max: 40, pulse: 0 },
                speed: { x: { min: 0, max: 0.8 }, y: { min: 0, max: 0.2 } },
                colors: {
                    background: "#ecf0fe",
                    particles: ["#ff926b", "#87ddfe", "#acaaff", "#1bffc2", "#f9a5fe"],
                },
                blending: "screen",
                opacity: { center: 1, edge: 1 },
                skew: -1,
                shapes: ["c", "s", "t"],
            });
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div
            className="header finisher-header"
            style={{ width: "100%", height: "100vh", position: 'fixed', top: 0, left: 0, zIndex: -1 }}
        >
        </div>
    );
}

export default React.memo(FinisherHeaderComponent);



