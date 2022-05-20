/*
ketika kita menggunakan react, kita perlu untuk memahami konsep dasar dari jsx.
karena jsx inilah yg nanti akan membangun aplikasi dari react.

apa itu jsx?
untuk menjelaskanya lebih baik kita lihat contohnya
---------------------------------------
const element = <h1>Hello, world!</h1>;
--------------------------------------

element tersebut jika dirender oleh react maka yang tampil di halaman web akan sama dengan elemen html berikut
----------------------------------------
<h1>Hello, world!</h1>
----------------------------------------
sepintas tag jsx mirip dengan html. namum ini bukanlah html karena jsx disimpang kedalam sebuah variabel
tanpa adanya tanda kutip string. sebenarnya bukan hanya tagnya yang dibuat persis, namun attribunya juga dibuat hampir saama
dengan html.

untuk apa kta menggunakan jsx?
tentu saja karena aplikasi yang kita akan kita buat nanti perlu menerapkan 'conponents' dan 'props' untuk reusability - nya (dibahas nanti).
di jsx pula dapat diberikan emmbeding expression(ekspresi ditanamkan) dengan cukup mudah.
juga jika kita menggunakan jsx akan lebih memudahkan dalam mengelola tampilan karena sintaksnya yang mirip dengan html, sehingga
mudah digambarkan bagaimana sebuah elemen jsx akan tampil di halaman web.

NOTE:
tag dan atribut di dalam jsx memang menggambarkan bagaimana element tersebut akan tampil sebagai element html di halaman web.
namun perlu diingat element yang ada di JSX bukan lah html. kita mengikuti aturan penamaan js dalam pengelolaan DOM (menggunakan camelCase).
seperti 'class' menjadi 'classList', 'tabindex' menjadi 'tabIndex' dll.



*/


//contoh jsx
const element = <h1>Hello, world!</h1>;

//contoh menambahkan expression di jsx
//bukan hanya variabel tapi fungsi juga dapat dimasukan kedalam jsx
let nama = "hadi";
const hello = <h1>nama kamoeh adalah {nama} </h1> //begini bagaimana cara memasukan expression di jsx

export default hello;

