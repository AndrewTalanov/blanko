import './App.scss';

import {dataLandingPages, dataOtherPages} from "./components/section-pages/data.js";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SectionMain from './components/section-main/SectionMain';
import SectionChar from './components/section-char/SectionChar';
import SectionPages from './components/section-pages/SectionPages';
import SectionFeedback from './components/section-feedback/SectionFeedback';

function App() {

  return (
    <div className="App">

      <Header/>

      <main>
        
        <SectionMain/>

        <SectionChar/>

        <SectionPages title="Landing pages" data={dataLandingPages}/>

        <SectionPages title="Other pages" data={dataOtherPages}/>

        <SectionFeedback/>
        
      </main>

      <Footer/>

    </div>
  );
}

export default App;
