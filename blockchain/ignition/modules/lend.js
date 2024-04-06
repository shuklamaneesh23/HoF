// const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// module.exports = buildModule("LockModule", async (m) => {
//   // Deploy the Lend contract
//   const Lend = await m.deploy("Lend");

//   return { Lend };
// });
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const Lend_flexiloan_Module = buildModule("Lend_flexiloan_Module", (m) => {
  const lend = m.contract("Lend");
  const flexiloan = m.contract("FlexiLoan");


  return { lend,flexiloan };
});

module.exports = Lend_flexiloan_Module;
 
// FlexiLoan - 0x8785e433eF501349882a11c951674aC1B6b6FB76
// Lend - 0x360AD6604f3306f4fE0b2856dA343aC7dD6Ac518