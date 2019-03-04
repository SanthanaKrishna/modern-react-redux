import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            spans: ''
        }
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
        console.log("ref img tag", this.imageRef, this.imageRef.current.clientHeight);
    }
    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 150 + 1);
        this.setState({ spans })
    }
    render() {
        const {
            images: {
                description,
                urls
            }
        } = this.props

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard;