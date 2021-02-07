import React from 'react';
import {Paper} from "@material-ui/core";

import CommonAppBar from "../components/header/Header";
import DataTable from "../components/bookmark/BookmarkTable";

const Home: React.FC = () => {
    return (
        <div>
            <CommonAppBar />
            <Paper>
                <DataTable />
            </Paper>
        </div>
    );
};

export default Home;
