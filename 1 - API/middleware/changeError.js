module.exports = {
  changeError: (error, req, res, next) => {
    console.log(error.message);
    res.status(500).json({error: "Erro interno no servidor."});
  },
};
