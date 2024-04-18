import './App.css';
import Contact from './ContactHeader/Contact';
import Navigation from './components/navigation/Navigation';
import ContactForm from './contact_form/ContactForm';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Contact></Contact>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
