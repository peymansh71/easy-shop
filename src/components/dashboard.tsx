import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCount, removeToCount } from '../actions'


interface IProps { addToCount: () => void, removeToCount: () => void };

class Dashboard extends Component<IProps> {

    public render() {
        return (
            <>
                <button onClick={() => this.changeCount(1)}>add</button>
                <button onClick={() => this.changeCount(-1)}>remove</button>
            </>
        );
    }
    private changeCount(diff: number): void {
        diff === 1 ? this.props.addToCount() : this.props.removeToCount();
    }
}

export default connect(undefined, { addToCount, removeToCount }
)(Dashboard);