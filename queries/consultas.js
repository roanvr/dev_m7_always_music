import pool from '../config/db.js';

const argumentos = process.argv.slice(2);

const opcion = argumentos[0];
const nombre = argumentos[1];
const rut = argumentos[2];
const curso = argumentos[3];
const nivel = argumentos[4];

const agregarMusico = async (nombre,rut,curso,nivel) => {
    const sql = 'insert into musicos (nombre, rut, curso, nivel) values ($1,$2,$3,$4)';
    const values = [nombre,rut,curso,nivel];
    const response = await pool.query(sql,values);
};

/* agregarMusico(nombre,rut,curso,nivel); */

const mostrarMusicos = async () => {
    const sql = 'select * from musicos';
    const response = await pool.query(sql)
    console.log(response.rows)
};

mostrarMusicos();

const actualizarMusicos = async (nombre, rut, curso, nivel) => {
    const sql = 'update musicos set nombre = $1, rut = $2, curso = $3, nivel = $4 where rut = $2';
    const values = [nombre,rut,curso,nivel];
    const response = await pool.query(sql, values);
    console.log('Actualizado');
};

/* actualizarMusicos(nombre,rut,curso,nivel); */


const eliminar = async (rut) => {
    const sql ='delete from musicos where rut =$1';
    const values = [rut];
    const response = await pool.query(sql, values);
    console.log('Eliminado')
}

eliminar(rut)


