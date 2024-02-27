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


window.chat24_token = "f0f61b9b584238446bd86b16fd6ca1e6";
window.chat24_url = "https://livechatv2.chat2desk.com";
window.chat24_socket_url = "wss://livechatv2.chat2desk.com/widget_ws_new";
window.chat24_show_new_wysiwyg = "true";
window.chat24_static_files_domain = "https://storage.chat2desk.com/";
window.lang = "ru";
window.fetch("".concat(window.chat24_url, "/packs/manifest.json?nocache=").concat(new Date().getTime())).then(function (res) {
    return res.json();
}).then(function (data) {
    var chat24 = document.createElement("script");
    chat24.type = "text/javascript";
    chat24.async = true;
    chat24.src = "".concat(window.chat24_url).concat(data["application.js"]);
    document.body.appendChild(chat24);
});



