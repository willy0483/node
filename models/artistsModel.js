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
        throw error;
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke hente artistsliste, ${error}`);
    }
  };

  /**
   *  create a new artists
   * @param {*} formdata
   * @returns
   */
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
        throw error;
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke hente artistsliste, ${error}`);
    }
  };

  /**
   * update a artists
   * @param {*} formdata
   * @returns
   */
  static updateRecord = async (formdata) => {
    try {
      const { data, error } = await supabase
        .from("artists")
        .update({
          name: formdata.name,
          description: formdata.description,
          albums_id: formdata.albums_id,
        })
        .eq("id", formdata.id)
        .select()
        .single();
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke hente artistsliste, ${error}`);
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
  /**
   *
   * @param {object} formdata
   */
  static deleteRecord = async (formdata) => {
    try {
      let { data, error } = await supabase
        .from("artists")
        .delete()
        .eq("id", formdata.id);
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error(`Fejl: kan ikke slette artists, ${error}`);
    }
  };
}
