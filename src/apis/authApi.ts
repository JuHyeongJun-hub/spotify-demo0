import axios from "axios"
import { clientId, clientSecret } from "../configs/authConfig";
import { ClientCredentialToken } from "../models/auth";

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
    if (!clientId || !clientSecret) {
        throw new Error("Client ID or Client Secret is not configured");
    }

    try {
        const body = new URLSearchParams({
            grant_type: 'client_credentials',
        });
        const response = await axios.post(`https://accounts.spotify.com/api/token`, body, {
            headers: {
                Authorization : `Basic ${encodedBase64(
                    clientId + ":" + clientSecret
                )}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        return response.data;
    } catch(err) {
        throw new Error("Fail to fetct client credential token");
    }
}