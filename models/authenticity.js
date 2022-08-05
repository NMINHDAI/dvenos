const mongoose = require('mongoose');
const yup = require("yup");


const AuthenticitySchema = new mongoose.Schema({
  maChongHangGia:{
    type: String,
  },
  sanPham: {
    type: String,
    default: 'Đang cập nhật'
  },
  giaTriSanPham: {
    type: String,
    default: 'Đang cập nhật'
  },
  ngayXuatKho: {
    type: String,
    default: 'Đang cập nhật'
  },
  chuSoHuu: {
    type: String,
    default: 'Đang cập nhật'
  },
  diaChi: {
    type: String,
    default: 'Đang cập nhật'
  },
  soDienThoai: {
    type: String,
    default: 'Đang cập nhật'
  },
  ngayBatDauSoHuu: {
    type: String,
    default: 'Đang cập nhật'
  },
 
  soNgaySoHuu: {
    type: String,
    default: 'Đang cập nhật'
  },
})

// const validateHumidity = async (humidity) => {
//   const schema = yup.object().shape({
//       value: yup.number()
//       .typeError('You must specify a number')
//       .min(0, 'Min value 0.')
//       .max(100, 'Max value 100.')
//   });

//   try {
//     const humidity_1 = await schema
//       .validate(humidity);
//     return humidity_1;
//   } catch (error) {
//     return {
//       message: error.message,
//     };
//   }
// };

exports.Authenticity = new mongoose.model("Authenticity", AuthenticitySchema);
//exports.validateHumidity = validateHumidity;