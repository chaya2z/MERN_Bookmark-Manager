import React, {useEffect, useState} from 'react';

import {getBookmarks, postBookmark, putBookmark, deleteBookmark} from "../api/Bookmark";

const Home: React.FC = () => {
    // const data = {
    //     title: "google",
    //     url: "www.google.com"
    // }
    //
    // postBookmarks(data);

    const putData = {
        title: "yahoo",
        url: "www.yahoo.co.jp"
    }

    putBookmark(putData);

    deleteBookmark();

    const [bookmarkData, setBookmarkData] = useState<any>(null);

    useEffect(() => {
        let unmounted = false;

        (async () => {
            let bookmarkData = await getBookmarks();
            bookmarkData = bookmarkData?.data[0].title;

            if (!unmounted) {
                setBookmarkData(bookmarkData);
            }
        })();
        return () => {
            unmounted = true;
        };
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <p>Hello React</p>
            <div>
                {bookmarkData ? <p>title is { bookmarkData }</p> : <p>loading ...</p>}
            </div>
        </div>
    );
};

export default Home;
