import React, { useEffect } from "react"
import { useId} from "@backbonedao/react-hooks";

export default function Hello() {

  const { id, isAuthenticated, authenticate } = useId();

  useEffect(()=>{
      console.log(id, "id");
      console.log(isAuthenticated, "isAuth");
  }, [id, isAuthenticated])
  
  return (
    <>
    {"auth: " + isAuthenticated}
    <div onClick={async ()=>{
      await authenticate({} as any);
    }}>
      login
    </div>
    </>
  )
}
