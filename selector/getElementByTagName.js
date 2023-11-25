
// This code only runs on the browser

if (typeof document !== 'undefined') {
    let element = document.querySelector('.class-name')

    // Manipulating the DOM here
    let image = document.getElementsByTagName('img')
    console.log(image);

    for (const m of image) {
        m.src = "https://images.pexels.com/photos/19031635/pexels-photo-19031635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }


   
}




