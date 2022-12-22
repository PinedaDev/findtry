import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "../App";
import Home from '../routes/Home'
import CountryDetails from "./CountryDetails";
import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return (
        <>
            <div>Dang!</div>
        </>
    );
}

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}
            errorElement={<ErrorBoundary />}>
            <Route index element={<Home />} />
            <Route path=":country" element={<CountryDetails />}></Route>
        </Route>
    )
);

export default Router;