import axios from "axios";

export const getBookmarks = async () => {
    try {
        return await axios.get('http://192.168.11.55:8080/api/bookmarks');
    } catch (e) {
        console.log(e);
    }
}
