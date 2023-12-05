import { FaAngleDoubleDown } from "react-icons/fa"

const Spinner = ({children}) => {


    return (
        <div className="animate-bounce mt-2 w-6 h-6 ring-2 rounded-full flex justify-center items-center text-cyan-500 ">
            {children ? children : <FaAngleDoubleDown/>}
        </div>

    )
}

export default Spinner