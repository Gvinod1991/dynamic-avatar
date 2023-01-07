import { useState } from "react";
type AvatarProps={
  url?:string,
  alt?:string
}
export const FALLBACK_AVATAR_ALT_TEXT="default avatar"
export const FALLBACK_AVATAR_URL="https://eu.ui-avatars.com/api/?name=John+Doe&size=250";

const Avatar=({url=FALLBACK_AVATAR_URL,alt=FALLBACK_AVATAR_ALT_TEXT}:AvatarProps)=>{
  const [srcToRender,setSrcRender]= useState(url)
  const handleError=()=>{
    setSrcRender(FALLBACK_AVATAR_URL)
  }
  return <img src={srcToRender} alt={alt} onError={handleError}/>
}

export default Avatar;