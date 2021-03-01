import React from 'react'
import { Card, CardGroup, CardTitle } from 'reactstrap'

const MyCard = ({details}) => {
    return (
       <Card>
           <CardGroup className="text-center">
               <img src={details.picture?.large} className="rounded-circle img-thumbnail border-danger"/>
               <CardTitle>
               <span>{details.name?.title} . </span>
            <span>{details.name?.first}</span>
            <span> {details.name?.last}</span>

               </CardTitle>
           </CardGroup>
       </Card>
    )
}

export default MyCard
