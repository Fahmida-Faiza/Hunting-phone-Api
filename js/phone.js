const loadPhone = async (searchText = "13", isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  const data = await res.json();
  const phones = data.data;
  //    console.log(phones);
  displayPhones(phones);
};
const displayPhones = (phones) => {
  // console.log(phones);
  //step 1: set  korlam jeykahney boshabo
  const phoneContainer = document.getElementById("phone-container");
  //clear phone container cards before adding new cards
  phoneContainer.textContent = "";
  //display all button if there are more than 12 besi hoy

  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  //jototuk show korbo 0 thekey 12 porjonto
  phones = phones.slice(0, 12);
  phones.forEach((phone) => {
    // console.log(phone);
    //step 2:create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card  bg-gray-100 shadow-xl`;
    //step3: set innerhtml
    phoneCard.innerHTML = `
         <figure class="px-5 pt-5">
                <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">SHOW DETAILS</button>
                </div>
            </div>
        
        
        `;

    //stpe4:appendchild
    phoneContainer.appendChild(phoneCard);
  });
  //hide loading spinner
  toggleLoadingSpinner(false);
};
//
const handleShowDetail = async (id) => {
  // console.log("clicked show" ,id)
  //load single phone data

  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  //modal show
  showPhoneDetails(phone);
};
const showPhoneDetails = (phone) => {
  console.log(phone);
  const phoneName = document.getElementById("show-detail-phone-name");
  phoneName.innerText = phone.name;

  const showDetailContainer = document.getElementById("show-detail-container");
  showDetailContainer.innerHTML = `
  <img src="${phone.image}" />
  <p><span>Starage: </span>${phone?.mainFeatures?.storage}</p>
<p><span>GPS: </span>${
    phone?.others?.GPS || "No GPS available"
  }</p>



  
  `;
//
  ////show the modal
  show_details_modal.showModal();
};

//handle search button

const handleSearch = () => {
  // console.log('hi baby')
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhone(searchText);
};

//handel search treacap
const handleSearch2 = () => {
  // console.log('hi baby')
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search_field2");
  const searchText = searchField.value;
  loadPhone(searchText);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpiner = document.getElementById("loading-spinner");

  if (isLoading) {
    loadingSpiner.classList.remove("hidden");
  } else {
    loadingSpiner.classList.add("hidden");
  }
};

loadPhone();
