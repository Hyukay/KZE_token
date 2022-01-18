const KozeToken = artifacts.require('KozeToken');

module.exports = async function (deployer) {

  await deployer.deploy(KozeToken, BigInt(2e24));
  
};
