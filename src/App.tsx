import { useState } from 'react';
import Main from './components/main';
import Header from './components/header';
import { Moeda } from './type';

function App() {
  const [currency, setCurrency] = useState('');
  const [allData, setAllData] = useState<Moeda[]>([]);

  const handleChange = ((event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCurrency(newValue);
  });

  const fetchMoney = async () => {
    try {
      const response = await fetch(`https://api.exchangerate.host/latest?base=${currency}`);
      const data = await response.json();
      const all = Object.entries(data.rates);
      setAllData(all);
      console.log(all);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Header titulo="Refetio" handleChange={ handleChange } fetchMoney={ fetchMoney } />
      <Main arrayDeMoedas={ allData } />
    </div>
  );
}

export default App;
