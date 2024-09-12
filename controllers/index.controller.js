

export const indexController = (req,res)=>{
    try {
        const title = "Kelurahan Cinta Statistik"
        res.render("index",{
            title
        });

    } catch (error) {
        throw error
    }
}