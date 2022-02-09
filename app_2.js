const mysql = require('mysql');

var situation_count = 3;

//typical randoming in js  from min to max(not include max)
const rand_int = (min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "situations",
    password: "letmekeepitsecret"
});
conn.connect(err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Database OK");
    }
});

const sit_arr_gen = (st_count)=>{
    var resp_arr = [];
//make req on count of situations, save it
    conn.query()

    for (let i = 0; i<st_count; i++){
        //rand_int()
    }
    // make arr of that situations
};

conn.query("SELECT * FROM Memesit",
    function(err, results, fields) {
        console.log(results)
    });


