/*
di file ini saya akan menjelasakan bagaiaman list bekerja di react.
cara kerja list pada react sebenarnya mirip dengan cara kerja list yg ada di javascript.
cth:

//bagaimana cara kerja map() array di js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]


//bagaiaman list bekerja di react
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);

tentunya bagaimana cara kerja map() di array dan list react itu sama.
namun pada react kita di harapkan untuk menambahkan key value untk setiap list.
hal tersebut dilakukan suapaya react tidak bingung dalam mengelola list yang telah kita buat.
"disarankan untuk membuat key dengan id unik, namin pada file ini saya akan menggunakn index sebagai keynya".
untuk lebih jelasnya lihat kode saya dibawah

*/

import React from "react";

//contoh menambahakan key value
// dibawah ini juga contoh agaia mana menambahkan array ke components
// khusus fungsi di bawah saya menggunakan index sebagai key valuenya
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
      <li key={index}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
}
let angka = [1, 2, 3, 45, 34]; //ini adalaah angak yg nanti akan dimasukan sebagai props di element


//perlu dicatat juga bahwa key ini hanya berada pada konnteks array, sehingga untuk elemen tingkat bawahnya
// yang tidak mempengaruhi urutan list kita tidak perlu menuliskanya

function ListItem(props) {
    const value = props.value;
    return (
    // Wrong! There is no need to specify the key here:
    //   <li key={value.toString()}>
    //     {value}
    //   </li>

        //ini yg benar
        <li key={value.toString()}>
            {value}
        </li>
    );
}
function NumberList2(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Wrong! The key should have been specified here:
      <ListItem value={number} key={number.toString()} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
}
let angka2 = [1,2,3,4,6,7];

//dari beberapa list diatas dapat diketahui sifat key
//1. key value harus unik dibanding siblingnya(saudaranya)
//   - artinya dalam sebuah list, key value tidak boleh adaa yg sama, namun secara globl diperbolehkan penggunanaan key dengan nama yg sama
//2. key digunakan supaya react dapat mengidentifikasi item yang berubah, ditambah, dan dihapus
//3. key digunakan dalam konteks array, artinya kita tdk perlu menmabhkan key untuk elemen dibawah list yg tidak mempengaruhi perubahan urutan


//dibawah adalh code dari tutorual youtube (membuat todo list)
class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo : "",
      list : []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.todo],
      todo: ""
    })
  }

  handleChange(e){
    console.log(e.target.value);
    this.setState({
      todo: e.target.value
    })
  }

  render(){
    let list = this.state.list;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.todo}/>
          <button>tambah</button>
          <ul> 
            {list.map((list)=>{
              return (
                <li>{list}</li>
              )
            })}
          </ul>
        </form>
      </div>
    );
  }
}






//export semuanya
function Somelist(){
  return (
    <div>
        <NumberList numbers={angka} />
        <NumberList2 numbers={angka2} />
        <br />
        <hr />
        <br />
        <TodoList />
    </div>
    
  )
}
export default Somelist;