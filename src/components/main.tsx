import { Moeda } from '../type';

type MainProps = {
  arrayDeMoedas: Moeda[]
};

function Main({ arrayDeMoedas }: MainProps) {
  return (
    <ul className="grid grid-cols-3 gap-4 mt-24 md:grid-cols-4 bg-slate-800 p-4 rounded-lg">
      {arrayDeMoedas.map((moeda) => (
        <li key={ moeda[0] } className="flex gap-2 border rounded-lg p-2">
          <span>💸</span>
          <p>{moeda[0]}</p>
          <p>{moeda[1].toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
}

export default Main;
