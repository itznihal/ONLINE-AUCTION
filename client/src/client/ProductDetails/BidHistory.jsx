import React from 'react'

const BidHistory = ({bids}) => {




var bidTime = new Date(bids.time);
      
// Winner Announce --> Working
// console.log(winStatus);
// { `: ${bidTime.getDate()}-${bidTime.getMonth()}-${bidTime.getFullYear()}       ${bidTime.getHours()}:${bidTime.getMinutes()}  `}




  return (
   <>
   
   <tr>
                    <th scope="row">1</th>
                    <td>{bids.bidder.name}</td>
                    <td>{bids.bidder.email}</td>
                    <td>{bids.bid}</td>
                    <td>{ ` ${bidTime.getDate()}-${bidTime.getMonth()}-${bidTime.getFullYear()}       ${bidTime.getHours()}:${bidTime.getMinutes()}  `}</td>
                  </tr>    
   
   </>
  )
}

export default BidHistory