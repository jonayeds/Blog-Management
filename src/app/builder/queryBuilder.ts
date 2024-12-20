import { Query } from "mongoose";

export class QueryBuilder<T> {
    public modelQuery:Query<T[], T>;
    public query:Record<string, unknown>;
    constructor(modelQuery:Query<T[], T>, query: Record<string, unknown>){
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchableFields:string[]){
        const searchTerm  = this.query.searchTerm;
        if(searchTerm){
            this.modelQuery = this.modelQuery.find({
                $or:searchableFields.map(field=>({
                    [field]: {$regex:searchTerm, $options:"i"}
                }))
            })
        }
        return this
    }

    filter(){
        const queryObj = {...this.query}
        const excludeFields = ["searchTerm", "sort", "limit","page", "fields"]
        excludeFields.forEach(field=>delete queryObj[field])
        this.modelQuery = this.modelQuery.find(queryObj)
        return this
    }

    sort(){
        const sort = (this.query?.sort as string).split(",").join(" ") || "-createdAt" 
        this.modelQuery = this.modelQuery.sort(sort)
        return this
    }

    paginate(){
        const page= Number(this?.query?.page) || 1;
        const limit = Number(this?.query?.limit) || 10;
        const skip = (page-1) * limit;
        this.modelQuery = this.modelQuery.skip(skip)
        return this
    }

    fields(){
        const fields =(this?.query?.fields as string)?.split(',')?.join(' ') || '-__v';
    this.modelQuery = this.modelQuery.select(fields);
    return this;
    }
}