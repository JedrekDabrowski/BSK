import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, ScreenWrapper } from './components';
import { Cezar, Matrix_1, Matrix_2, Rail_Fence } from './screens/PS_1';
import { Vigenere } from './screens/PS_1/Vigenere';

function App() {
    return (
        <ScreenWrapper>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/rail_fence" element={<Rail_Fence />} />
                    <Route path="/matrix_1" element={<Matrix_1 />} />
                    <Route path="/matrix_2" element={<Matrix_2 />} />
                    <Route path="/cezar" element={<Cezar />} />
                    <Route path="/vigenere" element={<Vigenere />} />
                </Routes>
            </Router>
        </ScreenWrapper>
    );
}

export default App;
