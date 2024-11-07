import MainPage from './mainPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes
