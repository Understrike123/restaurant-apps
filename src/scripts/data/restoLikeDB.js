/* eslint-disable consistent-return */
import { openDB } from "idb";
import CONFIG from "../global/config";

// file pembuatan database dari favorite restaurant
const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const DB_promise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});

const LikedRestaurant = {
    async get_RESTO(id) {
        if (!id) {
            return;
        }

        return (await DB_promise).get(OBJECT_STORE_NAME, id);
    },
    async get_AllResto() {
        return (await DB_promise).getAll(OBJECT_STORE_NAME);
    },
    async put_Resto(resto) {
        // eslint-disable-next-line no-prototype-builtins
        if (!resto.hasOwnProperty('id')) {
            return;
        }

        return (await DB_promise).put(OBJECT_STORE_NAME, resto);
    },
    async delete_Resto(id) {
        return (await DB_promise).delete(OBJECT_STORE_NAME, id);
    },
};

export default LikedRestaurant;
