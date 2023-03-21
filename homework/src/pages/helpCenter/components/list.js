import { List, Avatar, Button, Skeleton, Empty } from 'antd';
import React from "react";

class LoadMoreList extends React.Component {
    state = {
        loading: false,
    };

    componentDidMount() {

    }



    onLoadMore = () => {


    };

    render() {
        const { initLoading, loading, list } = this.state;


        return (
            <Empty />

        );
    }
}


export default LoadMoreList