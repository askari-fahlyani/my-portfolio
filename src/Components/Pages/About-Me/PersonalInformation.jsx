import React from 'react';
const PersonalInformation = ({ label, value }) => {
    return (
        <code className="mb-2 text-[#dee3e4] border-information text-[14px] sm:text-[16px] md:text-[20px] lg:text-[25px] xl:text-[30px]">
        <strong >{label}:</strong> {label === 'Email' ? <a href={"mailto:askari.coded@gmail.com"} className='text-[--color-highlight] text-[25px]'>{value}</a> : value}
    </code>
    
    );
};
export default PersonalInformation