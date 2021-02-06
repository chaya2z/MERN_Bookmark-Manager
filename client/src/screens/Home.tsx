import React, {useEffect, useState} from 'react';

import { getBookmarks } from "../api/Bookmark";

const Home: React.FC = () => {
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
