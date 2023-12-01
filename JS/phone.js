// function loadData(){
//     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// loadData()

// const loadPhone =async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//     const data = await res.json()
//     const phone = data.data;
//     console.log(phone)
// }
// loadPhone()

const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json()
    const phone = data.data;
    console.log(phone);
}

loadPhone()
