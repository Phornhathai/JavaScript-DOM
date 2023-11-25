// Challenge: ClassList Practice
// ใน index.html คุณจะพบ 6 
//  element โดยสอง element จะมี class highlight ที่ใช้อยู่

// ใช้ JavaScript และคุณสมบัติ classList เพื่อสลับองค์ประกอบที่มีคลาสไฮไลท์
// iterate element
// ทั้งหมดและสลับคลาสของ highlight ในแต่ละองค์ element ผลลัพธ์สุดท้ายของคุณควรมีลักษณะดังนี้:


const li = document.querySelectorAll('li')
const lis = document.querySelectorAll('.highlight')

	 

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "powderblue"   
}

for (let i = 0; i < li.length; i++) {
    lis[i].style.backgroundColor = "purple"
}





 



// โปรดอย่าแตะต้อง index.html! ทำทั้งหมดนี้ผ่าน JavaScript!