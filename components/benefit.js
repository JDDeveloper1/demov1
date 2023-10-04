import React from 'react'

function Benefit(props) {
    return (
        <>
            <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-inmodocs-red rounded-md w-11 h-11 ">
                    {React.cloneElement(props.icon, {
                        className: "w-7 h-7 text-indigo-50",
                    })}
                </div>
                <div>
                    <h4 className="text-xl font-medium text-inmodocs-blue dark:text-inmodocs-blue">
                        {props.title}
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-inmodocs-red">
                        {props.children}
                    </p>
                </div>


            </div>

        </>
    );
}

export default Benefit
