let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};
let clone = Object.assign({}, passportWithAddress);
passportWithAddress.address.city === clone.address.city;
clone.address.city = "Bobryisk";


console.log(passportWithAddress.address.city);
console.log(clone.address.city);