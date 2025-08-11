import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SigninForm from "./components/SigninForm";
// // import SignupFormDemo from "./components/signup-form-demo";
// import AboutTab from "./NAVTAB/AboutTab";
// import ServicesTab from "./NAVTAB/ServicesTab";
import About from "./section/About";
import Demo from "./section/Demo";
import { Navbar } from "./components/Navbar";
import AboutTab from './NAVTAB/AboutTab';
import ServicesTab from './NAVTAB/ServicesTab';
// import Emotion from './NAVTAB/Models/Emotion';
import Models from './section/Models';
import FrameX from './NAVTAB/Models/FrameX';

const Home = () => {
  return (
    <>
      <Demo/>
      <About/>
      <Models/>

    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutTab />} />
        <Route path="/services" element={<ServicesTab />} />
        <Route path="/services/frame-x" element={<FrameX />} />
        {/* <Route path="/signin" element={<SigninForm />} /> */}


        {/* <Route path="/about" element={<AboutTab />} />
        <Route path="/services" element={<ServicesTab />} />
        <Route path="/signin" element={<SigninForm />} /> */}
        {/* <Route path="/signup" element={<SignupFormDemo />} /> */}
      </Routes>
    </Router>
    
  );
};

export default App;