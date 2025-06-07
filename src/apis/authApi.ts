import axios from "axios"
import { CLIENT_ID, CLIENT_SECRET } from "../configs/authConfig";
import { ClientCredentialToken, ExchangeTokenResponse } from "../models/auth";
import { REDIRECT_URI } from "../configs/commonConfig";

export interface ClientCredentialTokenResponse {
    access_token:string;
    token_type:string;
    expires_in:number;
}

const encodedBase64 = (data: string) :string => {
    if (typeof window !== "undefined") {
        //브라우저 환경
        return btoa(data);
    } else {
        //Node.js 환경
        return Buffer.from(data).toString("base64");
    } 
}

export const getClientCredentialToken = async (): Promise<ClientCredentialTokenResponse> => {
    if (!CLIENT_ID || !CLIENT_SECRET) {
        throw new Error("Client ID or Client Secret is not configured");
    }

    try {
        const body = new URLSearchParams({
            grant_type: 'client_credentials',
        });
        const response = await axios.post(`https://accounts.spotify.com/api/token`, body, {
            headers: {
                Authorization : `Basic ${encodedBase64(
                    CLIENT_ID + ":" + CLIENT_SECRET
                )}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        return response.data;
    } catch(err) {
        throw new Error("Fail to fetct client credential token");
    }
}

export const exchangeToken = async (code:string, codeVerifier:string) : Promise<ExchangeTokenResponse> => {
    try {
        const url = "https://accounts.spotify.com/api/token";
         
        if(!CLIENT_ID || !REDIRECT_URI) {
           throw new Error("Missing required parameters");
        }

        const body = new URLSearchParams({
            client_id: CLIENT_ID,
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI,
            code_verifier: codeVerifier,
        });
            
        const response = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",

            }
        })
        return response.data;
    } catch(err) {
        throw new Error("Fail to fetch token");
    }
}