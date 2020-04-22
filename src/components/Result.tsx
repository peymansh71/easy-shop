import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCount, removeToCount } from '../actions'


interface IProps { count: any };

class Dashboard extends Component<IProps> {
    public state = {
        count: 0
    };
    public render() {
        const { count } = this.props;
        return (
            <>
                <span>text:{JSON.stringify(count)}</span>
            </>
        );
    }
}

export default connect(
    (state: any) => ({
        count: state.count
    }),
)(Dashboard);