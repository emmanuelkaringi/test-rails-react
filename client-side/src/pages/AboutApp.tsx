import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/AboutApp.css'

const AboutApp: React.FC = () => {
  return (
    <div className="aboutpage">
      <Header />
      <NavBar />
      <h2>About the Thought App</h2>
      <p>The Thought App is a web application designed to help people reflect on their thoughts and feelings. By using the app, users can gain a better understanding of themselves and improve their mental health and wellbeing.</p>
      <p>The app allows users to record their thoughts and feelings, and also provides tools to help users identify patterns and themes in their thinking. Users can also favourite certain thoughts, allowing them to come back to them later and reflect on their progress.</p>
      <h3>Mental Health Benefits</h3>
      <ul>
        <li>Increased self-awareness</li>
        <li>Improved emotional regulation</li>
        <li>Better coping skills</li>
        <li>Reduced stress and anxiety</li>
        <li>Increased resilience</li>
      </ul>
    </div>
  );
};

export default AboutApp;
