const loadPhone = async (search, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${search}`
  )
  const data = await res.json();
  const phone = data.data;
  // console.log(phone);
  displayPhones(phone, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
//   console.log(phones)
  const phoneContainer = document.getElementById('phones-container')
  phoneContainer.textContent = ''

  const showAllPhone = document.getElementById('show-all-container');
  if(phones.length > 12 && !isShowAll){
    showAllPhone.classList.remove('hidden');
  }
  else{
    showAllPhone.classList.add('hidden')
  }

  if(!isShowAll){
    phones = phones.slice(0,12)
  }

  phones.forEach((phone) => {
    // console.log(phone);
    // step-1: create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card p-4 bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Phone Image" /></figure>
        <div class="flex flex-col justify-center items-center space-y-5">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p class="text-2xl font-medium">${phone.slug}</p>
          <p class="text-3xl font-medium">$999</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Show Details</button>
          </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard)
  });
  toggleLoadingSpinner(false)
};


const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)
    loadPhone(searchText, isShowAll)
}

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden');
  }
  else {
    loadingSpinner.classList.add('hidden');
  }
}

const handleShowAll = () => {
  handleSearch(true)
}
