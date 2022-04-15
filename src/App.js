import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSeach from './components/AppSearch';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tatoos';

function App() {
  const [selectedTattoo,setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onTattooOpenClick(theTattoo) {
    setSelectedTattoo(theTattoo);
  }

  function onTattooCloseClick(){
    setSelectedTattoo(null);

  }

  const itemElements = tattoos.filter((tattoo) => {
    return tattoo.title.includes(searchText);
  }).map((tattoo,index) =>{
    return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />;
  });

  let tattooPost = null;
  if (!!selectedTattoo) {    
    tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />;
  }

  return (
    <div className="app">
       <AppHeader/>  
       <section className="app-section">
         <div className="app-container">
            <AppSeach value={searchText} onValueChange={setSearchText}/>       
              <div className="app-grid">
                {itemElements}          
              </div>
         </div>
       </section>
       {tattooPost}
    </div>
  );
}

export default App;
