// dar halate adi tasavir ba in component namayesh dade mishavad in component yeki az farzandane component MyGallery hast
// selectedPicture haviye aksi khahad shod ke gharar ast hamrah ba details namayesh dade shavad pad inja tavasote tabe addpicture por mishavad
// hamchenin tabe addpicture meghdar flag ra true mikonad ta component pictureDetails namayesh dade shavad
import React from 'react'

const Picture = ({picture, setFlag, selectedPicture, setSelectedPicture}) => {

  const addpicture = (picture) => {
    // selectedPicture ba picture entekhab shode por mishavad
    setSelectedPicture([...selectedPicture, picture])
    setFlag(true)
  }
  return (
    <>
        <div key={picture.id} className='imgBox' onClick={()=>addpicture(picture)}>
            <img src={picture.image} alt={picture.name}/>
        </div>
    </>
  )
}

export default Picture;
