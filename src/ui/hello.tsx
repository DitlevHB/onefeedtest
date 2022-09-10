import React, { useEffect, useState } from "react"
import { useId, useBackbone } from "@backbonedao/react-hooks";

export default function Hello() {
  const { authenticate } = useId();
  const backbone = useBackbone();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(()=> {
      backbone.events.on("id:authenticated", () => {
          debugger;
          setIsAuthenticated(true);
      })
  }, [])

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
