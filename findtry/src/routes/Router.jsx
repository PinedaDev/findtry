import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "../App";
import Home from '../routes/Home'
import CountryDetails from "../components/CountryDetails";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path=":country" element={<CountryDetails />}></Route>
        </Route>
    )
);

export default Router;