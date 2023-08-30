const loadPhone = async (searchText) =>{
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );

    const data = await res.json();
   const phones =data.data;
//    console.log(phones);
        displayPhones(phones)
}
const displayPhones = phones =>{

    // console.log(phones);
    //step 1: set  korlam jeykahney boshabo
const phoneContainer = document.getElementById("phone-container");
//clear phone container cards before adding new cards
phoneContainer.textContent = '';
//display all button if there are more than 12 besi hoy

const showAllContainer = document.getElementById("show-all-container");
if(phones.length >12){
 showAllContainer.classList.remove('hidden')
}
else{
    showAllContainer.classList.add('hidden')
}
//jototuk show korbo 0 thekey 12 porjonto
phones = phones.slice(0,12);
    phones.forEach(phone => {
        console.log(phone);
        //step 2:create a div
        const phoneCard = document.createElement('div');
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
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        
        
        `;

        //stpe4:appendchild
        phoneContainer.appendChild(phoneCard)
    })
}


//handle search button

const handleSearch = () =>{
    // console.log('hi baby')
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    loadPhone(searchText);

}
// loadPhone();


const handleSearch2 = () => {
  // console.log('hi baby')
  const searchField = document.getElementById("search_field2");
  const searchText = searchField.value;
  loadPhone(searchText);
};