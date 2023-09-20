import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Layout} from "./components/layout";
import {HomePage} from "./pages/home";
import {ConfigProvider} from "antd";
import {Provider} from "react-redux";
import {store} from "./store/reducer/index";
import {AppProvider} from "./context";
import Movies from "./store/slices/movies/index";

const routes = [{
    path: "/", element: <HomePage/>,
}, {
    path: "movies", element: <Movies/>,
},];

const routeElements = routes.map((route) => (<Route key={route.path} path={route.path} element={route.element}/>));

function App() {
    return (<Provider store={store}>
        <ConfigProvider theme={{token: {}}}>
            <AppProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            {routeElements}
                        </Route>
                    </Routes>
                </Router>
            </AppProvider>
        </ConfigProvider>
    </Provider>);
}

export default App;
