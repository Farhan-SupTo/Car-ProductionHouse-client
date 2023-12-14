import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingCard from "./BookingCard";
import Swal from 'sweetalert2'

const Bookings = () => {

    const {user} =useContext(AuthContext)

    const [bookings,setBookings] =useState([])




    const url =`http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[]);

    const handleDelete = id =>{
        const proceed = confirm('Are you want to delete this?')
        if(proceed){
    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.deletedCount > 0){
            Swal.fire({
                title: 'Success',
                text: 'Delete Successfully',
                icon: 'success',
                confirmButtonText: 'Yes'
              })
              const remainingBooking =bookings.filter(booking=> booking._id !== id)
              setBookings(remainingBooking)
        }
    })

}
    }

    const handleBookingConfirm = id =>{
fetch(`http://localhost:5000/bookings/${id}`,{
    method:'PATCH',
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({status:'Confirm'}),
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data. modifiedCount > 0){
        const remaining =bookings.filter(booking=>booking._id !== id)
        const updated =bookings.find(booking=> booking._id === id)
        updated.status ='Confirm'
        const newBookingList =[updated,...remaining]
        setBookings(newBookingList)
    }
})
    }



    return (
        <div className=" mt-10 ml-20">
            <h1 className=" text-center text-4xl">Your Bookings: {bookings.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>NAME</th>
        <th>SERVICES</th>
        <th>ORDER DATE</th>
        <th>PRICE</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=> 
        <BookingCard key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}
      >

        </BookingCard>)
      }


    </tbody>
    
  </table>
</div>
        </div>
    );
};


export default Bookings;