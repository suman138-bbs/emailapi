

export default getEmail = async (req, res)=>{
    
        try {
           return res.status.send(200)( {
        succes: "true",
        message:"all user data"
   })
        } catch (error) {
            console.log(error)
            return res.status.send()({
                succes: false,
                message:"Error in send mail"
            })
        }
    
}
