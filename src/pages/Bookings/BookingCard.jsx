import React from 'react';

const BookingCard = ({booking ,handleDelete,handleBookingConfirm}) => {

    const {CustomerName,email,date,img,service,price,_id,status} = booking

    



    return (
     
                  <tr>
        <th>
           
        <button  onClick={()=>handleDelete(_id)}  className="btn btn-circle btn-sm btn-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
        
            <div className="avatar gap-4 flex items-center ">
              <div className=" w-24 rounded h-24">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
         
            <div className='pt-3'>
              <div className="font-bold">{CustomerName}</div>
              <div className="text-sm opacity-50">
                Color: Green
                <p>Size: 5</p>
                </div>
            </div>
          </div>
        </td>
        <td>
        {service}
        </td>
        <td>{date}</td>
        <td>{price}</td>
        <th>
         { status ==='Confirm' ? <span className=' bg-violet-600 text-white rounded-lg p-3'>Confirm</span>
         : <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-error text-white btn-sm">Pending</button>}
        </th>
      </tr>
      
    );
};

export default BookingCard;