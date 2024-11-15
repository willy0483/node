import { supabase } from "../config/configSupabase.js";

export class artistsModel {
  static async getAllRecords() {
    try {
      const { data, error } = await supabase.from("artists").select("id,name");
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke hente sangliste, ${error}`);
    }
  }
}
