import './App.css';
import Header from './Header';
import Tasks from './Tasks';
import Footer from './Footer';

function App() {
  const projectName = "დღის განმავლობაში შესასრულებელი ამოცანების სია";

  return (
    <div className="app-container">
      <Header projectName={projectName} />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
