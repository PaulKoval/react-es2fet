import React from 'react';
import {Link} from 'react-router-dom';

class CupList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cups: {
                1: {
                    size: '200ml',
                    imgUrl: 'https://5.imimg.com/data5/OV/WI/MY-23452715/200-ml-paper-cup-500x500.jpg',
                    prevLink: null,
                    nextLink: '2'
                },
                2: {
                    size: '300ml',
                    imgUrl: 'https://5.imimg.com/data5/CK/AW/MY-3232743/300-ml-paper-cup-500x500.jpg',
                    prevLink: '1',
                    nextLink: '3'
                },
                3: {
                    size: '350ml',
                    imgUrl: 'https://5.imimg.com/data5/WV/JZ/PH/SELLER-24874097/cold-drink-paper-cup-500x500.jpg',
                    prevLink: '2',
                    nextLink: null
                },
            },
            selected: null,
            getSelectedCup: () => {
                return this.state.cups[this.state.selected];
            },
            key: null
        };

        this.state.selected = this.props.match.params.id || Object.keys(this.state.cups)[0];
    }

    render() {
        const selectedCup = this.state.getSelectedCup();
        return <div><Link onClick={() => this.refreshRoute()} to={"/main/" + selectedCup.prevLink}>prev</Link><span>{selectedCup.size} <img src={selectedCup.imgUrl} alt=""/></span><Link to={"/main/" + selectedCup.nextLink}>next</Link></div>
    }

    refreshRoute() {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    forceUpdate(callBack) {
        return callBack;
    }

}

export default CupList
