const router = require("express").Router();
//const { O_DIRECTORY } = require("constants");
const connexion = require("./config/conexion");

//--------  -------
//--- get movies----

router.get("/", (req, res) => {
    let sql = "select * from movie"; // we save the database in a variable
    connexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        // it cheks if there are any error and it throw the error
        else {
            res.json(rows); // otherwise, it shows the json file.
        }
    });
});

// to get an element with its id traer //

router.get("/:id", (req, res) => {
    const { id } = req.params;
    let sql = "select * from movie where mov_id = ?";
    connexion.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows);
        }
    });
});

//to add a movie
router.post("/", (req, res) => {
    console.log(req);
    const {
        mov_title,
        mov_year,
        mov_time,
        mov_lang,
        mov_dt_rel,
        mov_rel_country,
    } = req.body;
    let sql = `insert into movie (mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country) values('${mov_title}', '${mov_year}','${mov_time}','${mov_lang}','${mov_dt_rel}','${mov_rel_country}')`;

    connexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: "Película agregada" });
        }
    });
});

// to delete a movie
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    let sql = `delete from movie where mov_id = '${id}'`;

    connexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        // with this function, the program give the mistake if it exits //
        else {
            res.json({ status: "Película eliminada" });
        }
    });
});

// to edit a movie
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const {
        mov_title,
        mov_year,
        mov_time,
        mov_lang,
        mov_dt_rel,
        mov_rel_country,
    } = req.body;

    let sql = `update movie set mov_title = '${mov_title}', mov_year='${mov_year}', mov_time='${mov_time}', mov_lang='${mov_lang}', mov_dt_rel='${mov_dt_rel}', mov_rel_country='${mov_rel_country}' 
    where mov_id = '${id}'`;

    connexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        // with this function, the program give the mistake if it exits //
        else {
            res.json({ status: "Película modificada" });
        }
    });
});

module.exports = router;
