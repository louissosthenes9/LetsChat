export const signup = async (req, res) => {
    try {
        const { fullname, username, gender,email, password } = req.body;
    }catch (e){
        console.log(e)
    }


}

export const login = async (req, res) => {
    const { email, password } = req.body;
}

export const logout = async (req, res) => {

}