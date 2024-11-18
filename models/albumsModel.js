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

  /**
   * Function fro get single
   * @param {number} id
   * @returns object
   */
  static getRecordsById = async (id) => {
    try {
      const { data, error } = await supabase
        .from("albums")
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
        .from("albums")
        .insert({
          artist_id: formdata.artist_id,
          title: formdata.title,
          description: formdata.description,
          image: formdata.image,
          release_date: formdata.release_date,
          songs_id: formdata.songs_id,
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
