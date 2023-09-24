import React, {useContext, useState, useRef, useCallback} from 'react'
import { CharacterContext } from '@/context/CharacterContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ButtonAddFavorite = ({data, color = true, remove = false}) => {
  const {addCharacter, removeCharacter} = useContext(CharacterContext);
  const [btnActive, setBtnActive] = useState(false);
  const componentRef = useRef(null);

  const forceUpdate = useCallback(() => {
    componentRef.current 
  }, []);



  return (

    <div ref={componentRef} className={btnActive ? "w-[32px] cursor-pointer shadow-lg h-[32px] bg-green flex rounded-full justify-center items-center" : "w-[32px] cursor-pointer shadow-lg h-[32px] bg-white flex rounded-full justify-center items-center"} >
    <FontAwesomeIcon
      icon={faHeart}
      color={color ? "#53C629": "#e5e7eb"}
      onClick={(e) => {

        e.preventDefault();
 
     
        if(!remove){
        const addRes = addCharacter({id:data.id, image: data.image, name:data.name, species: data.species, gender: data.gender})
        if (addRes) {
        setBtnActive(true);
        console.log("add. ", addRes);
            
        }
    }
        else{

        const remoRes = removeCharacter(data.id)
        if(remoRes){
            console.log("eliminar. ", remoRes);

        setBtnActive(false);

        }



        }
    }}
    //  disabled={btnActive}
      width={20} 
    />
        
  </div>
  )
}

export default ButtonAddFavorite