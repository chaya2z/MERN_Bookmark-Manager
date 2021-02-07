import * as React from 'react';
import {DataGrid, ColDef} from '@material-ui/data-grid';
import {useEffect, useState} from "react";
import {getBookmarks} from "../../api/Bookmark";

const columns: ColDef[] = [
    {field: 'id', headerName: 'ID'},
    {field: 'title', headerName: 'ページ名', width: 130},
    {field: 'url', headerName: 'URL', width: 130},
];

const rows = [
    {id: 1, title: 'Google', url: 'google.com'},
];

interface bookmarkDataType {
    id?: number;
    title?: string;
    url?: string;
    __v?: number;
    _id?: string;
}

const DataTable: React.FC = () => {
    const [bookmarkData, setBookmarkData] = useState<any>(null);

    useEffect(() => {
        let unmounted = false;

        (async () => {
            let bookmarkData = await getBookmarks();
            bookmarkData = bookmarkData?.data;

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
            {bookmarkData ? (
                <div style={{height: 400, width: '100%'}}>
                    <DataGrid rows={bookmarkData} columns={columns} pageSize={5}/>
                </div>
            ) : (
                <h2>読み込み中</h2>
            )}
        </div>
    );
}

export default DataTable;
