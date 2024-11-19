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
        throw error;
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
        throw error;
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke hente sangliste, ${error}`);
    }
  };

  /**
   * create a new song
   * @param {*} formdata
   * @returns
   */
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
        throw error;
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke hente sangliste, ${error}`);
    }
  };

  /**
   * update a song
   * @param {*} formdata
   * @returns
   */
  static updateRecord = async (formdata) => {
    try {
      const { data, error } = await supabase
        .from("songs")
        .update({
          title: formdata.title,
          content: formdata.content,
          artist_id: formdata.artist_id,
        })
        .eq("id", formdata.id)
        .select()
        .single();
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke hente sangliste, ${error}`);
    }
  };

  /**
   *
   * @param {object} formdata
   */
  static deleteRecord = async (formdata) => {
    try {
      let { data, error } = await supabase
        .from("songs")
        .delete()
        .eq("id", formdata.id);
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke slette sang, ${error}`);
    }
  };
}
