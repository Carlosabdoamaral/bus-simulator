import {Route, Routes} from "react-router-dom";
import IndexView from "./views/index/IndexView";

export default function ProjectRoutes() {

    return (
        <Routes>
            <Route path="/" element={<IndexView/>}/>
        </Routes>
    )
}
