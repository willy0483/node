import { supabase } from "../config/configSupabase.js";

export class songModel {
  static async getAllRecords() {
    try {
      const { data, error } = await supabase
        .from("songs")
        .select("id,title,content,created_at,artist_id(name)");
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke hente sangliste, ${error}`);
    }
  }
}
