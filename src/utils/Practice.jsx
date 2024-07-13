import { useState } from "react";

export default function Practice(){
      let [count,setCout] = useState(2);
      function incMent(){
        setCout(count+2);
      }
      return(
        <>
          <button onClick={incMent}>count {count}</button>
        </>

      )
}