// Challenge: Rainbow Text Exercise
// เราได้จัดเตรียม <h1> element ซึ่งประกอบด้วย 7 spans (แต่ละ span ถือตัวอักษรตัวเดียว)

// กรุณาเขียน JavaScript เพื่อให้ตัวอักษรเป็นสีรุ้ง!

// ในโค้ด JavaScript คุณจะพบ array ที่เรียกว่า colors:

// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const cs = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

let text = document.querySelectorAll('span')

text[1].style.color = "red"

for (let i = 0; i < text.length; i++) {
    text[i].style.color = cs[i];
    
}
