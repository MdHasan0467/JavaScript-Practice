
//Module : 22-6 Find the cheapest phone from an array of phone objects

// ekti array r modde onek gulo phone er price soho details deowa ase ,,,, sekhan theke sob cheye kom damer phone konti? seta ber koro


const phoneDetaols = [
  { name: "iphone", camera: 12, ram: 8, price: 160200, color: "silver" },
  { name: "Oppo", camera: 12, ram: 8, price: 20000, color: "silver" },
  { name: "Walton", camera: 12, ram: 8, price: 30000, color: "silver" },
  { name: "Vivo", camera: 12, ram: 8, price: 32000, color: "silver" },
  { name: "One plus", camera: 12, ram: 8, price: 65000, color: "silver" },
];


function cheapestPhone(phones) {
  let cheapest = phones[0]; // dore nilam cheapest phone ti holo [0] no index
  for (let i = 0; i < phones.length; i++){
    const mobile = phones[i];
    if (mobile.price < cheapest.price) {
       cheapest = mobile;
    }
  }
  return cheapest
}
const mySelection = cheapestPhone(phoneDetaols);
console.log('The lowest price phone is ', mySelection);
