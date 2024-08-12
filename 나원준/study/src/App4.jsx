import ColorBox from "./Context/ColorBox";
import { ColorProvider } from "./Context/ColorContext";
import SelectColors from './Context/SelectColors';

const App4 =()=>{
    return (
        <ColorProvider>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    )
}

export default App4;