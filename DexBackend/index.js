const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/tokenPrice", async (req, res) => {

  const { query } = req;

  const responseOne = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressOne
  });

  const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressTwo
  });

  // const responseThree = await Moralis.EvmApi.token.getTokenPrice({
  //   address: query.addressThree
  // });

  // const responseFour = await Moralis.EvmApi.token.getTokenPrice({
  //   address: query.addressFour
  // });

  // const responseFive = await Moralis.EvmApi.token.getTokenPrice({
  //   address: query.addressFive
  // });

  // const responseSix = await Moralis.EvmApi.token.getTokenPrice({
  //   address: query.addressSix
  // });

  // const responseSeven = await Moralis.EvmApi.token.getTokenPrice({
  //   address: query.addressSeven
  // });

  // const responseEight = await Moralis.EvmApi.token.getTokenPrice({
  //   address: query.addressEight
  // });

  // const responseNine = await Moralis.EvmApi.token.getTokenPrice({
  //   address: query.addressNine
  // });

  // const responseTen = await Moralis.EvmApi.token.getTokenPrice({
  //   address: query.addressTen
  // });

  // const responseEleven = await Moralis.EvmApi.token.getTokenPrice({
  //   address: query.addressEleven
  // });

  // const responseTwelve = await Moralis.EvmApi.token.getTokenPrice({
  //   address: query.addressTwelve
  // });

  // const responseThirteen = await Moralis.EvmApi.token.getTokenPrice({
  //   address: query.addressThirteen
  // });

  const usdPrices = {
    tokenOne: responseOne.raw.usdPrice,
    tokenTwo: responseTwo.raw.usdPrice,
    ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice,
    // tokenThree: responseThree.raw.usdPrice,
    // tokenFour: responseFour.raw.usdPrice,
    // tokenFive: responseFive.raw.usdPrice,
    // tokenSix: responseSix.raw.usdPrice,
    // tokenSeven: responseSeven.raw.usdPrice,
    // tokenEight: responseEight.raw.usdPrice,
    // tokenNine: responseNine.raw.usdPrice,
    // tokenTen: responseTen.raw.usdPrice,
    // tokenEleven: responseEleven.raw.usdPrice,
    // tokenTwelve: responseTwelve.raw.usdPrice,
    // tokenThirteen: responseThirteen.raw.usdPrice,
  }

  return res.status(200).json(usdPrices);
});

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});
