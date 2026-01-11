class ApiResponse{
    constructor(statusCode,data,messgae = "Success"){
        this.statusCode= statusCode
        this.data= data
        this.messgae = messgae
        this.success =statusCode < 400
    }
}


export {ApiResponse}