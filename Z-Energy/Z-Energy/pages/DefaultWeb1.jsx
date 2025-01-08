import Header from '../components/Header'
import FindStation from './components/FindStation';
// import FilterSection from './components/FilterSection';
import MapView from './components/MapView';
import Footer from '../components/Footer';

function page1() {
  return (
    <>
    <Header />
    <FindStation />
    {/* <FilterSection /> */}
    <MapView />
    <Footer />
    </>
  );
}
export default page1;