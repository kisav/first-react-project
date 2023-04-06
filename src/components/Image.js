import React from "react";

class Image extends React.Component {
    render() {
        return (
            <img src={this.props.image} id='left_image'/>
        );
    }
}

export default Image;