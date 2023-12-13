import React from 'react'
import { FaRegCircleXmark } from "react-icons/fa6";
import Details from './Details';

const PictureDetails = ({setFlag, selectedPicture, setSelectedPicture}) => {

    // ba tabe removePicture selectedPicture khali shode va bar migardim be component picture
    const removePicture = () => {
        setSelectedPicture([])
        setFlag(false)
    }
  return (
    <>
        <div className='iconBox' onClick={removePicture}>
            <FaRegCircleXmark className='icon'></FaRegCircleXmark>
        </div>
        <div>
            {
                selectedPicture.map(picture => (
                    <Details picture={picture}/>
                ))
            }
        </div>
    </>
  )
}

export default PictureDetails;
