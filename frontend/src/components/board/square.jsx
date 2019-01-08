import React from "react"

const Square = ({ text, checked, action, position}) => {
    
    let selected

    if (checked) {
        selected = 'selected'
    }
    return <div className={`grid-item ${selected}`} id={`square-${position}`} onClick={action}>
			<p>{text}</p>
		</div>;
}

export default Square;