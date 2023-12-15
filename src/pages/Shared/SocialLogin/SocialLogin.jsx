import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {

const{GoogleSignIn} =useContext(AuthContext)

   const handleGoogleSignIn =()=>{
    GoogleSignIn()
    .then(result=>{
        const user =result.user 
        console.log(user)
    })
    .catch(error=>console.log(error.message))
   }

  return (
    <div>
      <div className="divider">OR</div>
    <div className="text-center">
    <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
        G
      </button>
    </div>
    </div>
  );
};

export default SocialLogin;
