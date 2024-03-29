import { Jgyh as TJgyh } from "../api/jgyh/Jgyh";

export const JGYH_TITLE_FIELD = "id";

export const JgyhTitle = (record: TJgyh): string => {
  return record.id?.toString() || String(record.id);
};
