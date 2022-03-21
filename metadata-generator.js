// const fs = require('fs');
// const imageDir = fs.readdirSync("./assets");
// imageDir.forEach(img => {
//   const metadata = {
//     name: `Image ${img.split(".")[0]}`,
//     description: "Iceat NFT collection",
//     symbol: "IC",
//     image: img,
//     // seller_fee_basis_points: ROYALTIES_PERCENTAGE_BASIS_POINTS,
//     properties: {
//       files: [{ uri: img, "type": "image/png" }],
//       category: "image",
//       creators: [{
//         address: "39R3KUcA9yfYuVF1qpWSWGCZaGsV7kBFYCBHg9S5uGB9",
//         share: 100
//       }]
//     }
//   }
//   fs.writeFileSync(`./assets/${img.split(".")[0].json}`, JSON.stringify(metadata))
// });
const fs = require('fs');

const imageDir = fs.readdirSync("./assets");imageDir.forEach(img => {
    console.log(img)
    const metadata = {
      name: `Image ${img.split(".")[0]}`,
      description: "Iceat NFT collection",
      symbol: "IC",
      image: img,
      properties: {
        files: [{ uri: img, "type": "image/png" }],
        category: "image",
        creators: [{
        }]
      }
    }  
    let json = JSON.stringify(metadata);
    let file = fs.writeFileSync(`./assets/${img.split(".")[0]}.json`,json)
  })




1. Add collection name:
2. magic 
  
