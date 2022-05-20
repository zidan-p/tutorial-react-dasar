/*

dari penjelasan dari react, saya menyimpulkan bahwa components itu 
adalah bagaimana cara react memisah-misah tiap bagian pada ui 
halaman kita dan menjadikanya dapat digunakan kembali(Reusable). 
components bukanlah template ataupun element melainkan components adalah “cara”.

dalam menggunakan components pertama kita perlu untuk mendefinisikanya terlebih dahulu.
ada 2 cara untuk mendefinisikanya
1. dengan function
2. dengan class

untuk props sendiri, itu adalah sebuah nilai yang dikirimkan dari sebuah elemen terpanggil
yang akan diolah berdasarkan components didefinisikan. 
bingung ya !?
untuk lebih kelasnya lebih baik langsung ke contohnya saja




*/
//import react
// ini adalah react untuk component dengan clas
import React from 'react';
import ReactDOM from 'react-dom';

// 1. cara function
function Budi(){
    return(//ingat untuk selalu membungkus jsx dengan div atau dengan wrapper yg lain.
        <div> 
            <h1>budi adalah anak yang baik</h1>
            <h2>dia selalu datang sekolah tepat pada waktunya</h2>
        </div>);
}

//seperti diatas bagaimana cara mendefinisikan components yang nantinya dapat dipanggil sebgai
// element. pembuatanya dengan membuat fungsi bari yang return valuenya berisi jsx
/*
============== !! PENTING !! =============
note, kita untuk mendefiniskan components, kita perlu menggunakan huruf besar untuk awal nama components.
hal itu karena react akan menganggap semua element dengan huruf awal kecil sebagai DOM.
*/


//2. cara class
class Welcome extends React.Component {
    render(){
        return <h1>Hello, someone</h1>;
    }
}
//untuk cara class kita perlu untuk memasukan returnya kedalam render terlebih dahulu


// ------------------------ props ----------------------------
// menurut saya gambaran kasar dari props adalah input data yg dikirim untuk diproses berdasarkan
// components di definikan. contoh menggunakan props dibawa

//1. props di function
function Hallo(props){
    return(
        <h2>hallo, nama kamu adalah {props.name}, saya bersekolah di {props.sekolah}</h2>
    );
}
// pada function untuk mengolah data props yang dikirmkan / mendapatkan data props yg nanti akan dikirimkan
// untuk mengambil nilai props, kita cukup menambahkan parameter pada function tersebut.
// para meter ini yang nantinya akan menyimpan semua data props yang digunkan
// contoh mnegirim data props
/*
    <Hallo name="nurhadi" />
    pada element tersebut, properti name akan menjadi nama variabel yg nanti akan menyimpan nilai yg dikirim
    dan name ini diatur di components dengan cara memanggilnya "props.name";
*/

//2. props di class
class Hai extends React.Component {
    render(){
        return <h1>Hai, nama kamu pasti {this.props.name}</h1>;
    }
}
// berbeda dengan function, di class kita perlu menambahkan keyword "this" untuk mengakses props.
// namun pada class, kita tidak perlu menambahkan parameter -- sudah tentu, karena ini adalah class.
// untuk cara mengirim datanya juga sama dengan yg function





//ini adalah componenta yg nanti akan menampilkan seluruh output dari program ini (memanggil components)
// saya akan membuatnya sebagai componenst function supaya lebih mudah
function Comp(){
    return (
        <div>
            <Welcome />
            <Budi />
            <Hallo name="zidan" sekolah="smpn 1 srono" />
            <Hai name="zidan" />
        </div>
    );
}




export default Comp;








