import { supabase } from "../config/configSupabase.js";

export class songModel {
  /**
   * Get all records
   * @returns array
   */
  static getAllRecords = async () => {
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
  };

  /**
   * Function fro get single
   * @param {number} id
   * @returns object
   */
  static getRecordsById = async (id) => {
    try {
      const { data, error } = await supabase
        .from("songs")
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
        .from("songs")
        .insert({
          title: formdata.title,
          content: formdata.content,
          artist_id: formdata.artist_id,
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
