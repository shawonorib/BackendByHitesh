const asyncHandler = (requestHandler) => {
   return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err)=>next(err))
    }
}





export {asyncHandler}

/* 
//Higher Order function লেখার নিয়ম step by step:
const asyncHandler = () => {}
const asyncHandler = (function) => {()=>{}}
const asyncHandler = (function) => ()=>{}
const asyncHandler = (function) => async ()=>{} 


//try-catch দিয়ে কিভাবে request handle করবোঃ
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}   

*/