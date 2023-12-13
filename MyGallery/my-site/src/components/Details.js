import React from 'react'

const Details = ({picture}) => {
  return (
    <>
        <div className='datilsMainBox' style={{height:`${picture.height}px`}}>
            <div>
                <img src={picture.image} alt={picture.name}/>
            </div>
            <div className='detailsBox'>
                <h2>Details</h2>
                <h4>Name : {picture.name}</h4>
                <h4>width : {picture.width} pixels</h4>
                <h4>height : {picture.height} pixels</h4>
                <h4>size : {picture.size} KB</h4>
                <h4>type: {picture.type}</h4>
            </div>
        </div>
    </>
  )
}

export default Details
