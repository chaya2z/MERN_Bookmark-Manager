import axios from "axios";

export const getBookmarks = async () => {
    try {
        return await axios.get('http://192.168.11.55:8080/api/bookmarks');
    } catch (e) {
        console.log(e);
    }
}

export const getBookmark = async (data: any) => {
    try {
        return await axios.get('http://192.168.11.55:8080/api/bookmarks/601eca7bf03f54001dc4ac36');
    } catch (e) {
        console.log(e);
    }
}

export const postBookmark = async (data: any) => {
    try {
        return await axios.post('http://192.168.11.55:8080/api/bookmarks', data);
    } catch (e) {
        console.log(e);
    }
}

export const putBookmark = async (data: any) => {
    try {
        return await axios.put('http://192.168.11.55:8080/api/bookmarks/601eca7bf03f54001dc4ac36', data);
    } catch (e) {
        console.log(e);
    }
}

export const deleteBookmark = async () => {
    try {
        return await axios.delete('http://192.168.11.55:8080/api/bookmarks/601ed3b4f03f54001dc4ac3a');
    } catch (e) {
        console.log(e);
    }
}
