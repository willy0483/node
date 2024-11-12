import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

export const api_key = process.env.supabase_Key;
export const api_Url = process.env.supabase_Url;

export const supabase = createClient(api_Url, api_key);
