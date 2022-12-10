exports.getTest = (_, res) => {
  console.log("llamado");
  res.status(200).json({
    status: "Success",
    data: "Datos",
  });
};
