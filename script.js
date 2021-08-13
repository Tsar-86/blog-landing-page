const productButton = document.querySelector('#product__button');
const productContent = document.querySelector('.product__content');

const companyButton = document.querySelector('#company__button');
const companyContent = document.querySelector('.company__content');

const connectButton = document.querySelector('#connect__button');
const connectContent = document.querySelector('.connect__content');

let openProductList = () => productContent.classList.toggle('hidden-content');
let openCompanyList = () => companyContent.classList.toggle('hidden-content');
let openConnectList = () => connectContent.classList.toggle('hidden-content');

productButton.addEventListener('click', openProductList);
companyButton.addEventListener('click', openCompanyList);
connectButton.addEventListener('click', openConnectList);



