import { LoginApiReq, LoginApiRes, QuoteCode } from "@/types/api";
import request from "./index";

export const captchaAPI = (): Promise<QuoteCode> => request.get("/quotes/1");
export const loginAPI = (param: LoginApiReq): Promise<LoginApiRes> => request.post("/user/1", param);
