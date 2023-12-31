const mysql = require("../config/db");

const getFile = async (fileId) => {
  const sql = `SELECT * FROM files WHERE fileId = '${fileId}'`;
  return new Promise((resolve, reject) => {
    mysql.getConnection((err, connection) => {
      connection.query(sql, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
      connection.release();
    });
  });
};
const getFileGroup = async (fileGrId) => {
  const sql = `SELECT * FROM files WHERE fileGrId = '${fileGrId}'`;
  return new Promise((resolve, reject) => {
    mysql.getConnection((err, connection) => {
      connection.query(sql, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
      connection.release();
    });
  });
};

const writeFilesDesc = async (fileGrId, fileId, file) => {
  const sql = `INSERT INTO files (fileGrId, fileId, fileName, savedPath) values('${fileGrId}', '${fileId}', '${file.filename}', '${file.destination}${file.filename}')`;
  return new Promise((resolve, reject) => {
    mysql.getConnection((err, connection) => {
      connection.query(sql, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
      connection.release();
    });
  });
};

module.exports = {
  getFile,
  getFileGroup,
  writeFilesDesc,
};
