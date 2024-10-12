const express = require('express');
const app = express();
const port = 3000;

// ตั้งค่าให้ Express ให้บริการไฟล์ static ในโฟลเดอร์ public
app.use(express.static('Node Server'));

// รันเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
