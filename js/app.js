const basicPrice = document.querySelector("#price-basic");
const proPrice = document.querySelector("#price-pro");
const masterPrice = document.querySelector("#price-master");
const checkBox = document.querySelector("#checkbox-prices");

checkBox.addEventListener('change', function(event) {
    if(this.checked) {
        setPricesToMonthly();
    } else {
        setPricesToAnnualy();
    }
});

function setPricesToAnnualy() {
    basicPrice.innerHTML = "&dollar;199.99";
    proPrice.innerHTML = "&dollar;249.99";
    masterPrice.innerHTML = "&dollar;399.99";
}

function setPricesToMonthly() {
    basicPrice.innerHTML = "&dollar;19.99";
    proPrice.innerHTML = "&dollar;24.99";
    masterPrice.innerHTML = "&dollar;39.99";
}