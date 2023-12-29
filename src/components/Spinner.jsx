import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

/**
 * Spinner Component
 * @param {ReactNode} children - The content to be displayed inside the spinner.
 * @returns {JSX.Element} - Spinner component.
 */
const Spinner = ({ children }) => {
    return (
        // The div containing the spinner animation
        <div className="animate-bounce mt-2 w-6 h-6 ring-2 rounded-full flex justify-center items-center text-cyan-500">
            {children ? children : <FaAngleDoubleDown />}
        </div>
    );
};

export default Spinner;
