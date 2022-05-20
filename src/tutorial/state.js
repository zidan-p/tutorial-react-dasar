/*
menurut saya sendiri state memiliki fungsi yan mirip dengan props, dugunakan untuk saling mengoper variabel2
saat ini saya sedaang mengantuk jadi saya hanya akan ngoding, sedangkan penjelasan lebih lengkapnya akan saya
jelasakan esok hari
............................  . .

oke sekarang saya telah kemabli, dan saya akan menjelasakan sebisa yg saya pikirkan.
seperti penjelasan singkat sebelumnya, fungsi dari state ini mirip dengan props, yaitu untuk mengoper2 dan mengolah nilai.
namun bedanya, nilai di state ini hanya untuk pada 1 components terisolasi saja. sehingga dalam sebuah components
nilai ini dapat kita atur khusus untuk componens itu saja, tidak akan memengaruhi component diatasnya.

bukanya props juga hanya untuk suatu components saja? terus apa bedanya?
iya memang benar props juga untuk suatu components saja, tapi dalam props kita harus membuatnya ketika elements components
dipanggil, sementara untuk state bisa kita buatlangsung di pendefinisian components.

ahggrh, pusing saya, mungkin dari awal sampai akhir pengertian saya tidak ada yang benar.
langsung saja ke implementasi codinganya supaya lebih terang bagaiamana state bekerja.

1. state hanya bisa diapakai untuk pendefinisia components dengn cara class
2. state dibuat dibagian constructor
3. untuk mengubah state harus menggunakan fungsi setState()
4. lebih jelas lihat codingan dibawah

*/
import React from 'react';
import ReactDOM from 'react-dom';


// ====================== mmembuat jam ======================//
// ini belum saya coba, jadi kemugkinan besar adlah tidak berhasil
// perlu diingan ini adalah class javascript, sehingga untuk menambahkan properti(nilai variabel), perlu mengginakan this.<variabel yg ingin ditambah>


class Clock extends React.Component{

    constructor(props){
        super(props);//kurang tahu apa gunanya, tapi wajib untuk dibuat
        this.state = { //disini tempat untuk menyimpan semua state
            time: 4
        }
    }

    componentDidMount(){ //fungsi ini dijalankan ketika seluruh bagian element sudah diload sempurnya (bawaan react)
        this.addInterval = setInterval(() => this.bertambah(), 1000);
    }

    componentWillUnmount(){ //fungsi ini dijalanakan ketika elemet reacat akan dihapus (bawaan react)
        // clearInterval(this.addInterval);
    }

    bertambah(){//ini adalah fungsi untuk pertambhan nilai waktu
        let a = this.state.time + 1;
        this.setState({
            time: a
        })
    }

    render(){
        return(
            <div>ini adalah detik ke:{this.state.time}</div>
        )
    }
}


export default Clock;

