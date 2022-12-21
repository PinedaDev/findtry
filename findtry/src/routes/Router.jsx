import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "../App";
import CountryDetails from "../components/CountryDetails";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="home" element={<CountryDetails />}></Route>
            <Route path=":country" element={<CountryDetails />}></Route>
        </Route>
    )
);

export default Router;