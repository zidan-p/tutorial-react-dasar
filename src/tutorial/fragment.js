/*
di file ini saya akan menjelaskan bagai mana cara kita menggunakn react fragments sebagai pengganti dari div
untuk membungkus element kita. 
react fragment sendiri fungsinya sama halnya dengan div di react, yaitu untuk membungkus elemnt. namun bila kita menggunakan 
react fragment, setelah di render elemet kita akan tampil sebagaimana tidak dibungkus dengan lement apapun

supaya tidak bingung lebih baik langsung ke contohnya saja. disini saya akan menggunakan tabel sebagai studi kasusnya


*/


import react from "react";


function Contact(props){
    return(
        //sebagai pengganti div
        <react.Fragment> 
            {props.contact.map(prop => {
                return (
                    <tr key={prop.id}>
                        <td>{prop.id}</td>
                        <td>{prop.name}</td>
                        <td>{prop.email}</td>
                        <td>{prop.phone}</td>
                    </tr>
                )
            })}
        </react.Fragment>
    )
}

class Tabel extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            contact : [],
            isLoading : true
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => this.setState({contact : res, isLoading: false}))
    }

    render(){
        if(this.state.isLoading){
            return <p>Loading table......</p>
        }

        return(
            <table>
                <tr>
                    <th>no</th>
                    <th>name</th>
                    <th>email</th>
                    <th>telp</th>
                </tr>
                <Contact contact={this.state.contact} />
            </table>
        )
    }
}

export default Tabel;