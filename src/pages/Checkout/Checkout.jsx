import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'


const Checkout = () => {
    const services =useLoaderData()
    const {title,price,img,_id} =services
    const {user} =useContext(AuthContext)


const handleOrderConfirm = event =>{
    event.preventDefault()
    const form =event.target 
    const name =form.name.value 
    const email =user?.email
    const date =form.date.value

    const BookingOrder = {
          CustomerName: name,
          email,
          date,
          img,
          service: title,
          service_id: _id,
          price: price


    }
    console.log(BookingOrder)
    fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(BookingOrder),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'Congratulations',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
}

    return (
        <div className=' mt-10 text-center font-bold'>
           <h2 className=' text-3xl'> Book-Service: {title}</h2>

      <form onSubmit={handleOrderConfirm}>
<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' className="input input-bordered" defaultValue={user?.displayNme} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={'$'+ price} className="input input-bordered" required />
        </div>
</div>
<div className="form-control mt-6">
            <input type="submit" className="btn btn-error btn-block text-white" value="Order Confirm" />
        </div>
      </form>
    </div>
    );
};

export default Checkout;