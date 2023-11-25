// Challenge: querySelector Practice
// เราให้ไฟล์ html งานของคุณคือใช้ querySelector และ querySelectorAll เพื่อเลือก element

// เลือกทุกองค์ประกอบทั้งหมดที่มี class (คลาส) เป็น "done" และบันทึกไว้ใน variable ที่เรียกว่า doneTodos

let doneTodos = document.querySelectorAll('.done')
console.log(doneTodos);
// เลือก checkbock หนึ่ง ช่องและบันทึกไว้ใน variable ที่เรียกว่า checkbox  ระวัง มี input elemetn มากกว่าหนึ่งรายการในหน้านี้! คุณจะต้องเลือกใช้ type attribute

let checkbox = document.querySelector('input[type="checkbox"]')
console.log(checkbox);