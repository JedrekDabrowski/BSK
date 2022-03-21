import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, ScreenWrapper } from './components';
import { Cezar, Matrix_A, Matrix_B, Matrix_C, Rail_Fence } from './screens/PS_1';
import { Vigenere } from './screens/PS_1/Vigenere';

function App() {
    return (
        <ScreenWrapper>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/rail_fence" element={<Rail_Fence />} />
                    <Route path="/matrix_a" element={<Matrix_A />} />
                    <Route path="/matrix_b" element={<Matrix_B />} />
                    <Route path="/matrix_c" element={<Matrix_C />} />
                    <Route path="/cezar" element={<Cezar />} />
                    <Route path="/vigenere" element={<Vigenere />} />
                </Routes>
            </Router>
        </ScreenWrapper>
    );
}

export default App;
