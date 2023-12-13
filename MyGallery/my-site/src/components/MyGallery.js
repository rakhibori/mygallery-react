import React, { useEffect, useState } from 'react'
import { useGetMyGalleryQuery } from '../app/services/myGalleryApi'
import Picture from './Picture';
import PictureDetails from './PictureDetails';

const MyGallery = () => {
    // khandane data az json server
    const {data: myGallery, isLoading, isError, error} = useGetMyGalleryQuery();
    const [txt, setTxt] = useState('')
    const [flag, setFlag] = useState(false)
    const [selectedPicture, setSelectedPicture] = useState([])

    
    if(isLoading) {
        return<div>Loading...</div>        
    }

    if(isError){
        return<div>Error : {error.status}</div>
    }

    // temp haviye tasaviri az mashinahst ke ba kalameye TXT tavasote karbar varde migardad
    const temp = myGallery.filter(picture => picture.name.toLowerCase().includes(txt.toLowerCase()))

  return (
    <>
        <div className='topMenuBox'>
            <div>
                <h1>My Gallery</h1>
            </div>
            <div>
                <input type='text' value={txt} onChange={(e)=>setTxt(e.target.value)} placeholder='Search ...'/>
            </div>
        </div>

        {/* baresi meghder flag ke agar false bashad component Picture namayesh dade mishavad dar gheire in surat component PictureDetails */}
        <div className={flag ? 'noneDisplay': 'mainGalleryBox'}>
        {
            temp.map(picture => (
                <Picture picture={picture} setFlag={setFlag} selectedPicture={selectedPicture} setSelectedPicture={setSelectedPicture}/>
            ))
        }
        </div>

        <div className={flag ? 'mainPictureDetailsBox' : 'noneDisplay'}>
            <PictureDetails setFlag={setFlag} selectedPicture={selectedPicture} setSelectedPicture={setSelectedPicture}/>
        </div>
    </>
  )
}

export default MyGallery;
