import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import routes from './routes';

function App() {

    const showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} element={route.main} />
                )
            })
        }
        return <Routes>{result}</Routes>
    }

    return (
        <Router>
            <div>
                {/* Menu */}
                <Menu />
                <div className="container">
                    <div className="row">
                        {showContentMenu(routes)}
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
