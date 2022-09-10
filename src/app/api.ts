import Post from "../models/post"

export default async function (Data, Protocol) {
  return {
    async all() {
      const items = await Data.getAll({ model: Post });
      return items;
    },
  }
}