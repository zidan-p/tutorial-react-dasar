/*
pada dasaranya hadle event di react itu sama dengan dengan menggunakan DOM, hanya berbeda di beberapa bagian saja.
1. penamaan event di react jSX menggunakan camelCase
2. adapun fungs yang dijalankan akan dimasukan sevagai nilai bukan string

contoh perbedaan -> 
-- DOM --
<button onclick="activateLasers()">
  Activate Lasers
</button>

-- REACT --
<button onClick={activateLasers}>
  Activate Lasers
</button>


3. perbedaan yg lain, kitaa tidak bisa menggunakan return false untuk menghilanagkan aksi default, tapi kita harus
   memanggil fungsi preventDefault.

langsung saja lihat contoh dibawah.

*/
import React from 'react';
import ReactDOM from 'react-dom';


//disini saya akan membuat event untuk tag a
class Tomblo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hidup: true
        }

        //saya kurang tahu mengapa harus di bind, tapi keterangan dari react ini wajib dilakukan
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(e){ //disini fungsi yang nanti akan dijalanakan bila event dijalankan.
        e.preventDefault(); //untuk menghilangkan sifat aseli
        this.setState({
            hidup: !this.state.hidup
        });
        alert("tombol "+this.state.hidup);
    }

    render(){
        return(
            <a href="#" onClick={this.handlerClick}>tekan saya</a>
        )
    }
}

export default Tomblo;