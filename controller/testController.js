const testUserController = (req, res) => {
    try {
        res.status(200).json({
            message: "Test User data Api",
            success: true
        });
    } catch(error) {
        console.log("error in test Api: ", error);  
    } 
    
}


module.exports = {testUserController};