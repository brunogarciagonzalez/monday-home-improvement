import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import Sidebar from "./Sidebar"

class Slidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false
        };
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    render() {
        return (
            <div ref={ref => this.el = ref}>
                <SlidingPane
                    closeIcon={<div style={{ width: "100%" }}><i class="big arrow left icon"></i></div>}
                    isOpen={this.props.isOpen}
                    title='Close'
                    from='left'
                    width='300px'
                    onRequestClose={this.props.handleClose}>
                    <Sidebar />
                </SlidingPane>
            </div>
        );
    }
}

export default Slidebar;