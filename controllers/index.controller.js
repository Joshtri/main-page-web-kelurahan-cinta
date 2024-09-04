

export const indexController = (req,res)=>{
    try {
        const title = "UMKM Cinta Statistik"
        res.render("index",{
            title
        });

    } catch (error) {
        throw error
    }
}