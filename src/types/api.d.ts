export interface QuoteCode {
    id:     number;
    quote:  string;
    author: string;
}

export interface LoginApiReq {
    username:string,
    password:string,
    code:string,
    // uuid:string
}
export interface LoginApiRes {
    id:         number;
    firstName:  string;
    lastName:   string;
    maidenName: string;
    age:        number;
    gender:     string;
    email:      string;
    phone:      string;
    username:   string;
}
