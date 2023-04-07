import React from "react";

class RickImage extends React.Component {
    render() {
        return (
            <img src={this.props.image} id="rickrollImage"/>
        );
    }
}

export default RickImage;