const date = require('date-and-time')
const express = require("express");
const router = express.Router();
const { Authenticity } = require("../models/authenticity");
const validateSecretKey = require("./checkSecretKey");
//POST: CREATE A NEW station
router.post("/", async (req, res) => {
  const checkSecretKey = await validateSecretKey(req.body);

  if (!checkSecretKey) res.status(401).json({ err: 'Not Authorized'});
  else {
    const now  =  new Date();
    let authenticity = new Authenticity({
      maChongHangGia: req.body.maChongHangGia,
      sanPham: req.body.sanPham,
      giaTriSanPham: req.body.giaTriSanPham,
      ngayXuatKho: req.body.ngayXuatKho,
      chuSoHuu: req.body.chuSoHuu,
      diaChi: req.body.diaChi,
      soDienThoai: req.body.soDienThoai,
      ngayBatDauSoHuu: req.body.ngayBatDauSoHuu,
      soNgaySoHuu:req.body.soNgaySoHuu,
    });
    authenticity
      .save()
      .then((authenticity) => {
        res.send(authenticity);
      })
      .catch((error) => {
        res.status(500).json({ err: "Something went wrong" });
      });
  }
});
  
router.get("/:id", async (req, res) => {
  const id = req.params.id
  const authenticity = await Authenticity.findOne({'maChongHangGia':id})
  
  if (!authenticity) {res.status(404).json({ err: 'Not found'});}
  else {
    res.status(200).json({ "data": authenticity});
  }
  
});

module.exports = router;