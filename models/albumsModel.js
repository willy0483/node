import { supabase } from "../config/configSupabase.js";

export class albumsModel {
  static async getAllRecords() {
    try {
      const { data, error } = await supabase
        .from("albums")
        .select("id,title,description,release_date");
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke hente sangliste, ${error}`);
    }
  }
}
