import React from 'react';
import { FaReact, FaPencilRuler, FaLaptopCode, FaTachometerAlt } from 'react-icons/fa';
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Icon({ icon }) {
    const iconMap = {
        FaReact: FaReact,
        IoLogoJavascript: IoLogoJavascript,
        FaPencilRuler: FaPencilRuler,
        FaLaptopCode: FaLaptopCode,
        SiRedux: SiRedux,
        FaTachometerAlt: FaTachometerAlt,
    };

    const IconComponent = iconMap[icon];
    
    return (
        <div className="w-[36px] text-4xl text-[--text-icon-service]  react-icon">
            <IconComponent />
        </div>
    );
}

export default Icon;
