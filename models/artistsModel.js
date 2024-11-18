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

  /**
   * Function fro get single
   * @param {number} id
   * @returns object
   */
  static getRecordsById = async (id) => {
    try {
      const { data, error } = await supabase
        .from("artists")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke hente sangliste, ${error}`);
    }
  };

  static createRecord = async (formdata) => {
    try {
      const { data, error } = await supabase
        .from("artists")
        .insert({
          name: formdata.name,
          description: formdata.description,
          albums_id: formdata.albums_id,
        })
        .select()
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke hente sangliste, ${error}`);
    }
  };
}
