
import { PropsWithChildren } from "react";

type WrapperProps=PropsWithChildren<{
  caption:string;
}>

const Wrapper=({children,caption}:WrapperProps)=>{
  return <figure>
      {children}
      <figcaption>{caption}</figcaption>
  </figure>
}

export default Wrapper