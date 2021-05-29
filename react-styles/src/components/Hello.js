import React from 'react'
import "./hello.css"

import classes from "./hello.module.css"

export default function Hello() {
    return (
        <div>
            <header>
                <h1 style={{color: "red", backgroundColor: "seagreen"}}>
                Hello welcome to CODEKUL...!!
                </h1>

                <h1>
                    Styling in React
                </h1>

                <h2 className={classes.text}>CSS Modules styling</h2>

                {/* css in javascript 
                styled components 
                material-ui uses styled components */}
            </header>

        </div>
    )
}
