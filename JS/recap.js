const loadData = async (search) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    const data = await res.json();
    const phone = data.data;
    displayPhone(phone);
}

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.textContent = '';

    const showAllPhone = document.getElementById('show-all-btn');
    if(phones.length > 12) {
        showAllPhone.classList.remove('hidden');
    }
    else{
        showAllPhone.classList.add('hidden')
    }

    phones = phones.slice(0, 12)

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.innerHTML = `
        <div class="card  bg-base-100 shadow-xl p-4">
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="flex flex-col justify-center items-center space-y-5 mt-4">
          <h2 class="text-3xl font-semibold">${phone.phone_name}</h2>
          <p class="text-2xl font-medium">${phone.slug}/p>
          <p class="text-3xl font-semibold">$999</p>
          <div class="card-actions ">
            <button class="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
        `;
        phoneContainer.appendChild(phoneCard)
    })
}

const handleSearch = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    loadData(searchText);
}