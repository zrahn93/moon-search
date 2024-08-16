import { Ion  } from "cesium";
import MoonViewer from "./components/MoonViewer";
import auth from "../auth"

Ion.defaultAccessToken = auth.accessToken

function App() {
  return (
    <MoonViewer/>
  )
}

export default App;