import { openDB } from "idb";
import CONFIG from "../global/config";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STROE_NAME } = CONFIG;

const DB_promise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STROE_NAME, { keyPat: 'id' });
    },
});

const LikedRestaurant = {
    async get_RESTO(id) {
        return (await DB_promise).get(OBJECT_STROE_NAME, id);
    },
    async get_AllResto() {
        return (await DB_promise).getAll(OBJECT_STROE_NAME);
    },
    async put_Resto(resto) {
        return (await DB_promise).put(OBJECT_STROE_NAME, resto);
    },
    async delete_Resto(id) {
        return (await DB_promise).delete(OBJECT_STROE_NAME, id);
    },
};

export default LikedRestaurant;
