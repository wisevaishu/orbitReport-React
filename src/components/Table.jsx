import React from 'react';
import "../components/styling.css"

const Table = ( { sat } ) => {
  
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
       {/* <th>orbittype</th> */}
     </tr>
     </thead>
     <tbody>
       {
          sat.map
          ( (data, id) =>
            (
                 <tr key={id}>
                    <td>{data.name}</td>
                    <td>{data.type}</td>
                    <td>{data.launchDate}</td>
                    <td>{ data.operational ? "Active" : "Inactive"}</td>
                    {/* <td>{ data.orbitType}</td> */}
                 </tr> 
              
            )
          )
       }
     </tbody>
   </table>
  );
};

export default Table;