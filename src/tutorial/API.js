/*
file ini akan saya gunaka untuk memeberi contoh bagaimana cara kita mengelola api di react.
dan juga nanti akan saya berikan efek loading ketika api sedang dimuat.

*/

import React from 'react';

class Person extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
            isLoading: true
        }
    }

    //fungsi dibawah akan dijalanakana jika seluruh components sudan dimuat sempurna
    componentDidMount(){
        //disini saya menggunakan API dari jsonplaceholder, untuk info lebih lengkapnya lebih baik kunjungi websitenya.
        // diasana juga menyediakan banyak sekali pilihan API.
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => this.setState({list: res, isLoading: false}));
        //pada kode diatas setelah elemen dimuat sempurna arulah api di fetch, hasil respons fecth di simpan di list.
        //tak lupa pula state isLoading dibuat menjadai false untuk menghilangakn efek loading
    }

    render(){

        let {list, isLoading} = this.state;//mengambil value dari state
        //nah, dibawah ini kode yg akan direturn bila isLoading bernilai true, atau components belum di muat sempurna.
        // jika sudah dimuat maka akan bernilai false dan lanjut ke return selanjutnya.
        if(isLoading){
            return <h1>loading....</h1>
        }
        
        return(
            <div>
                <ul>
                    {list.map((list,i) => {
                        return (<li key={i}>{list.name}</li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default Person;


