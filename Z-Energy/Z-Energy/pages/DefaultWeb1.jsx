import Header from '../components/Header';
import FindStation from './components/FindStation';
import MapView from './components/MapView';
import Footer from '../components/Footer';
import Directions from './components/Directions'; // Import the Directions component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Page1() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          {/* Default route for finding stations */}
          <Route path="/" element={<FindStation />} />

          {/* Route for showing map and selected station details */}
          <Route path="/map-view" element={<MapView />} />

          {/* Route for showing directions */}
          <Route path="/directions" element={<Directions />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default Page1;
