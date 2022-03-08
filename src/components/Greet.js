import React from 'react'
/* Normal functional componet syntax*/
// function Greet(){
//     return (
//         <div>
//         <h1>Hello Fona</h1>
//         </div>
//     )

// }
/* Function with Fat Arrow*/
const Greet = props => {

    console.log(props)
    return (
        <div>
            <h1>
                Hello my name is {props.name} and I love  {props.love}
            </h1>
            {props.children}

        </div>
    )

}
export default Greet