import {createClient} from "@supabase/supabase-js";
export const supabaseUrl = "https://gypjyfibbtirujybtdpp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5cGp5ZmliYnRpcnVqeWJ0ZHBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NzMwMjMsImV4cCI6MjAzODQ0OTAyM30.X-ijBSAbfKaX_x0-WQySPRPOHdaf5CFAMagX-j5Onds";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
