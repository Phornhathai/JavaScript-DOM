// Challenge: 100 Button Insanity Exercise
// โดยไม่เปลี่ยน index.html โปรดใช้ JavaScript เพื่อสร้างองค์ประกอบปุ่ม 100 ปุ่ม! เพิ่มปุ่มใหม่ใน container element (องค์ประกอบคอนเทนเนอร์) ที่ให้ไว้ใน index.html


// Hint: Loop 100 ครั้ง ภายใน loop สร้างองค์ประกอบปุ่มว่างใหม่ เพิ่ม innerText ลงในปุ่ม ใช้ appendChild เพื่อเพิ่มปุ่มลงใน container


let btn = []

for (let i = 0; i <= 100; i++) {
    btn[i] = document.createElement('button')
    document.body.appendChild(btn[i])
    btn[i].style.width = "50px"
    btn[i].innerText = "Hey!"
    btn[i].style.margin = "5px"
}






