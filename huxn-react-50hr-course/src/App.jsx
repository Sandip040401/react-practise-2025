import { Map, PractiseMap } from "./components/Map";
import { Props } from "./components/Props";


function App(){

  return(
    <>
      {/* maps in javascript */}
        <Map/>
        <PractiseMap/>

        {/* props in javascript */}
        <Props name={"sandip"} age={23}/>
    </>
  )
}

export default App