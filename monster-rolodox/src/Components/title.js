import React from 'react'
import PropTypes from 'prop-types'

const Title = props => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{props.title}</h1>
        </div>
    )
}


export default Title
