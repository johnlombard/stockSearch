import React from 'react';


const Card = ({stockInfo}) => {
    let {companyName, 
        symbol, 
        primaryExchange, 
        latestPrice, 
        week52High, 
        week52Low, 
        peRatio,
        change,
        changePercent,
        ytdChange
    } = stockInfo 
    
    return (
        <div className="">
            <h1>Company Name: {companyName}</h1> 
            <h3>Symbol: {symbol}</h3>
            <h3>Primary Exchange: {primaryExchange}</h3>
            <h3>Latest Price: {latestPrice}</h3>
            <h3>52 Week High: {week52High}</h3>
            <h3>52 Week Low: {week52Low}</h3>
            <h3>PE Ratio: {peRatio}</h3>
            <h3>Price Change: {change}</h3>
            <h3>Percent Change: {changePercent}</h3>
            <h3>YTD Change:{ytdChange}</h3> 
        </div> 
    );
}

export default Card;