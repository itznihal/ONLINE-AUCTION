class ApiFeatures{
    // HERE API CONSTRUCTOR -> EX -> PRODUCTNAME = queryStr , Find-> query
    constructor(query , queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    // SEARCH FEATURE OF API -> query parameter inside api feature = queryStr
    // Deals with keyword inside Querystr

    search(){
        const keyword = this.queryStr.keyword 
        ? {
            itemName:{

                // here to find name can also use inside find() -> But find name with pattern -> using mongodb operator regex
                // Ex: watch and watchex
                // "i" is for case insensetive
                
                $regex: this.queryStr.keyword,
                $options: "i" ,
            },
        } 
        : {};

        // console.log(keyword);

        // this.query -> find method of getproducts
        this.query = this.query.find({ ...keyword }); 
        return this;
    }


    // Filter Functionality
filter() {
    
    // object contains refrence -> Can not directly assign -> Used Spread Operator for copy of object 
    const queryCopy = {...this.queryStr};


    // console.log(queryCopy); -> { keyword: 'product9', category: 'laptop' }

    // removing some feilds of category -> SEARCH(KEYWORD) , PAGINATION(PAGE) , LIMIT 
    // Category -> Case Insensitive
const removeFields = ["keyword" , "page" , "limit"];

removeFields.forEach((key) => delete queryCopy[key]);

// console.log(queryCopy); ->  { category: 'laptop' }


// FILTER FOR PRICE -> startingBid
// console.log(queryCopy); ->> { startingBid: { gt: '1200', lt: '2000' } } -> mongo db conside operator as $opr
// So -> convert into string (json.stringify()) -> edit -> convert into object (json.parse())
// console.log(queryCopy);
let queryStr = JSON.stringify(queryCopy);


queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g , (key) => `$${key}`);


// this.query->Find method && queryCopy -> { category: 'laptop' }
this.query = this.query.find(JSON.parse(queryStr));
// console.log(queryStr);

return this;

}

pagination(resultPerPage){

    const currentPage = Number(this.queryStr.page) || 1;  
    // Database 50 product -> Per Page 10 Product -> total page 5  -> At fist page skipped 0 -> 2nd Page Skipped 10 ..

    const skip = resultPerPage * (currentPage-1);

    // Assign to  Query
    this.query = this.query.limit(resultPerPage).skip(skip); 

    return this;
}

};

module.exports = ApiFeatures;