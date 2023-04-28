/*# block_15_workshop
froyo survey*/
const customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
  /*active(){
    console.log("TARGET AQUIRED!")
  }*/
};
//customer.active()
//customer.shoes= "blue";
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = "3195551234";
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee","strawberry","matcha"]
delete customer["zipCode"];
delete customer["favoriteStore"];
customer.futureFlavors= "mango";
customer.todaysPurchaseCost= 5.32;
customer.toppings= ["chocolate sprinkles", "wafer straws","gummy bears"];
for(const toppings in customer) {
  console.log(toppings)
}

//console.table(customer)
console.log(Object.keys(customer));
