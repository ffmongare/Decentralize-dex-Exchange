import React, { useState, useEffect } from 'react';
import tokenList from '../tokenList.json';
import axios from 'axios';

function Tokens() {

  const [tokenOne] = useState(tokenList[0]);
  const [tokenTwo] = useState(tokenList[1]);
  const [tokenThree] = useState(tokenList[2]);
  const [tokenFour] = useState(tokenList[3]);
  const [tokenFive] = useState(tokenList[4]);
  const [tokenSix] = useState(tokenList[5]);
  const [tokenSeven] = useState(tokenList[6]);
  const [tokenEight] = useState(tokenList[7]);
  const [tokenNine] = useState(tokenList[8]);
  const [tokenTen] = useState(tokenList[9]);
  const [tokenEleven] = useState(tokenList[10]);
  const [tokenTwelve] = useState(tokenList[11]);
  const [tokenThirteen] = useState(tokenList[12]);
  // const [prices, setPrices] = useState(null);
  const[tokenOnePrice, setTokenOnePrice] = useState(null);
  const[tokenTwoPrice, setTokenTwoPrice] = useState(null);
  const[tokenThreePrice, setTokenThreePrice] = useState(null);
  const[tokenFourPrice, setTokenFourPrice] = useState(null);
  const[tokenFivePrice, setTokenFivePrice] = useState(null);
  const[tokenSixPrice, setTokenSixPrice] = useState(null);
  const[tokenSevenPrice, setTokenSevenPrice] = useState(null);
  const[tokenEightPrice, setTokenEightPrice] = useState(null);
  const[tokenNinePrice, setTokenNinePrice] = useState(null);
  const[tokenTenPrice, setTokenTenPrice] = useState(null);
  const[tokenElevenPrice, setTokenElevenPrice] = useState(null);
  const[tokenTwelvePrice, setTokenTwelvePrice] = useState(null);
  const[tokenThirteenPrice, setTokenThirteenPrice] = useState(null);

  async function fetchPrices(
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen) {
    const res = await axios.get(`http://localhost:3001/tokenPrice`, {
      params: {
        addressOne: one, 
        addressTwo: two, 
        addressThree: three, 
        addressFour: four, 
        addressFive: five,
        addressSix: six,
        addressSeven: seven,
        addressEight: eight,
        addressNine: nine,
        addressTen: ten,
        addressEleven: eleven,
        addressTwelve: twelve,
        addressThirteen: thirteen
      }
    });

    // console.log(res.data);
    // setPrices(res.data);
    setTokenOnePrice((res.data.tokenOne).toFixed(4));
    setTokenTwoPrice((res.data.tokenTwo).toFixed(4));
    setTokenThreePrice((res.data.tokenThree).toFixed(4));
    setTokenFourPrice((res.data.tokenFour).toFixed(4));
    setTokenFivePrice((res.data.tokenFive).toFixed(4));
    setTokenSixPrice((res.data.tokenSix).toFixed(4));
    setTokenSevenPrice((res.data.tokenSeven).toFixed(4));
    setTokenEightPrice((res.data.tokenEight).toFixed(4));
    setTokenNinePrice((res.data.tokenNine).toFixed(4));
    setTokenTenPrice((res.data.tokenTen).toFixed(4));
    setTokenElevenPrice((res.data.tokenEleven).toFixed(4));
    setTokenTwelvePrice((res.data.tokenTwelve).toFixed(4));
    setTokenThirteenPrice((res.data.tokenThirteen).toFixed(4));
  }

  useEffect(() => {
    fetchPrices(
      tokenList[0].address, 
      tokenList[1].address, 
      tokenList[2].address, 
      tokenList[3].address, 
      tokenList[4].address,
      tokenList[5].address,
      tokenList[6].address,
      tokenList[7].address,
      tokenList[8].address,
      tokenList[9].address,
      tokenList[10].address,
      tokenList[11].address,
      tokenList[12].address)
  }, [])


  return (

    <div className="tableBox">
        <table className='table'>
          <tr>
            <th className='th'>Symbol</th>
            <th className='th'>Name</th>
            <th className='th'>Price in USD</th>
          </tr>
          <tr>
            <td className='td'><img src={tokenOne.img} alt="assetOneLogo" className='assetLogo1' /> {tokenOne.ticker}</td>
            <td className='td'>{tokenOne.name}</td>
            <td className='td'>{tokenOnePrice}</td>
          </tr>
           <tr>
            <td className='td'><img src={tokenTwo.img} alt="assetOneLogo" className='assetLogo1' /> {tokenTwo.ticker}</td>
            <td className='td'>{tokenTwo.name}</td>
            <td className='td'>{tokenTwoPrice}</td>
          </tr>
          <tr>
            <td className='td'><img src={tokenThree.img} alt="assetOneLogo" className='assetLogo1' /> {tokenThree.ticker}</td>
            <td className='td'>{tokenThree.name}</td>
            <td className='td'>{tokenThreePrice}</td>
          </tr>
          <tr>
            <td className='td'><img src={tokenFour.img} alt="assetOneLogo" className='assetLogo1' /> {tokenFour.ticker}</td>
            <td className='td'>{tokenFour.name}</td>
            <td className='td'>{tokenFourPrice}</td>
          </tr>
          <tr>
            <td className='td'><img src={tokenFive.img} alt="assetOneLogo" className='assetLogo1' /> {tokenFive.ticker}</td>
            <td className='td'>{tokenFive.name}</td>
            <td className='td'>{tokenFivePrice}</td>
          </tr>
          <tr>
            <td className='td'><img src={tokenSix.img} alt="assetOneLogo" className='assetLogo1' /> {tokenSix.ticker}</td>
            <td className='td'>{tokenSix.name}</td>
            <td className='td'>{tokenSixPrice}</td>
          </tr>
          <tr>
            <td className='td'><img src={tokenSeven.img} alt="assetOneLogo" className='assetLogo1' /> {tokenSeven.ticker}</td>
            <td className='td'>{tokenSeven.name}</td>
            <td className='td'>{tokenSevenPrice}</td>
          </tr>
          <tr>
            <td className='td'><img src={tokenEight.img} alt="assetOneLogo" className='assetLogo1' /> {tokenEight.ticker}</td>
            <td className='td'>{tokenEight.name}</td>
            <td className='td'>{tokenEightPrice}</td>
          </tr>
          <tr>
            <td className='td'><img src={tokenNine.img} alt="assetOneLogo" className='assetLogo1' /> {tokenNine.ticker}</td>
            <td className='td'>{tokenNine.name}</td>
            <td className='td'>{tokenNinePrice}</td>
          </tr>
          <tr>
            <td className='td'><img src={tokenTen.img} alt="assetOneLogo" className='assetLogo1' /> {tokenTen.ticker}</td>
            <td className='td'>{tokenTen.name}</td>
            <td className='td'>{tokenTenPrice}</td>
          </tr>
          <tr>
            <td className='td'><img src={tokenEleven.img} alt="assetOneLogo" className='assetLogo1' /> {tokenEleven.ticker}</td>
            <td className='td'>{tokenEleven.name}</td>
            <td className='td'>{tokenElevenPrice}</td>
          </tr>
          <tr>
            <td className='td'><img src={tokenTwelve.img} alt="assetOneLogo" className='assetLogo1' /> {tokenTwelve.ticker}</td>
            <td className='td'>{tokenTwelve.name}</td>
            <td className='td'>{tokenTwelvePrice}</td>
          </tr>
          <tr>
            <td className='td'><img src={tokenThirteen.img} alt="assetOneLogo" className='assetLogo1' /> {tokenThirteen.ticker}</td>
            <td className='td'>{tokenThirteen.name}</td>
            <td className='td'>{tokenThirteenPrice}</td>
          </tr>
        </table>
    </div>
  )
}

export default Tokens