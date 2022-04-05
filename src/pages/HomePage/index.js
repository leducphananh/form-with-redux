import Search from 'components/Search';
import UserList from 'components/UserList';
import React from 'react';

function HomePage() {

    return (
        <div className="data">
            <Search />
            <UserList />
        </div>
    );
}

export default HomePage;