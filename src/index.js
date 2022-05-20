import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import hello from "./tutorial/jsx.js"; //importnya tidak memerlukan tanda kurawal jika 1 elemen
import Comp from "./tutorial/components_props.js"
import Clock from "./tutorial/state";
import Tomblo from "./tutorial/event";
import Somelist from "./tutorial/list";
import Person from "./tutorial/API";
import Tabel from "./tutorial/fragment";
import Counter from "./tutorial/hook";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//untuk render jsx hello yang sudah dibuat
//utnuk sintaks perenderan
//ReactDOM.render(element_yang_dirender, lokasi_dom_pada_halaman);
ReactDOM.render(
  hello,
  document.getElementById('jsx')
);


//untuk merender file tentang components dan props
ReactDOM.render(
  <div>
    <Comp />
  </div>,
  document.getElementById('components-props')
);

//untuk state dan clock
ReactDOM.render(
  <Clock />,
  document.getElementById('state')
);

//untuk event tombol
ReactDOM.render(
  <Tomblo />,
  document.getElementById("event")
)

//untuk list
ReactDOM.render(
  <Somelist />,
  document.querySelector('#list')
)

//untuk uji coba API
ReactDOM.render(
  <Person />,
  document.querySelector('#person')
)

//untuk uji coba fragment
ReactDOM.render(
  <Tabel />,
  document.querySelector('#tabel')
)

//untuk uji coba fragment
ReactDOM.render(
  <Counter />,
  document.querySelector('#hook')
)


reportWebVitals();
