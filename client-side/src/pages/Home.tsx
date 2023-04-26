import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Subtitle from '../components/Subtitle';
import ThoughtListContainer from '../components/ThoughtList';


function Home() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Subtitle />
      <ThoughtListContainer />
    </div>
  );
}

export default Home;