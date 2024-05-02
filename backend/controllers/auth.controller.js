import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, gender,email, password,confirmPassword } = req.body;
       if(password !== confirmPassword){
           return res.status(400).json({
               error: 'Passwords do not match',
           })
       }
        const user = await User.findOne({username});

       if(user){
           return res.status(400).json({
               error: 'Username already exists',
           })

           //hash the password
           const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`
           const girlProfilePic =`https://avatar.iran.liara.run/public/girl?username=${username}`
           const newUser = new User({
               fullName,
               username,
               email,
               password,
               gender,
               profilePic:gender==='male'?boyProfilePic:girlProfilePic
           })
            await  newUser.save()
           res.status(201).json({message:"User created successfully",newUser})
       }

    }catch (e){
        console.log(e)
    }


}

export const login = async (req, res) => {
    const { email, password } = req.body;
}

export const logout = async (req, res) => {

}