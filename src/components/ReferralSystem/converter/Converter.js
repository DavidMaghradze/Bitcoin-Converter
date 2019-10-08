import React from 'react';
import moment from 'moment';
import ConvertedItem from './ConvertedItem/ConvertedItem';

class Converter extends React.PureComponent {

    state = {
        data: [],
        BTCvalue: '',
        GELvalue: '',
        focused: '',
        currentPrice: null
    }

    dataList = React.createRef();

    componentDidMount(){
        const data = JSON.parse(localStorage.getItem('convertedValues'));
        if(data) {
            this.setState({ data })
        }

        this.getPrice();
    }

    getPrice = async () => {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        const data = await response.json();
        const usdPrice = 2.96;
        const currentPrice = data.bpi.USD.rate_float * usdPrice;
        this.setState({ currentPrice })
    }

    onInputChange = e => {
        const { value, name } = e.target;
        if(!isNaN(value)) {
            this.setState({ [name]: value })
        }
    }

    onInputFocus = e => {
        this.setState({ focused: e.target.name })
    }

    bitcoinToGel = BTCvalue => {
        const newData = {};
        const { currentPrice, data } = this.state;

        const bitcoinInGel =  (BTCvalue * currentPrice).toFixed(2);

        const dateTime = new Date();
        const localDateTime = moment.utc(dateTime).local().format('YYYY-MM-DD HH:mm:ss');
        newData.id = data.length + 1;
        newData.convertedFrom = "bitcoin";
        newData.bitcoinValue = BTCvalue;
        newData.gelValue = bitcoinInGel;
        newData.date = localDateTime;

        const dataFromLS = JSON.parse(localStorage.getItem('convertedValues'));
        const updatedDataFromLS = dataFromLS ? [newData, ...dataFromLS] : [newData]
        localStorage.setItem('convertedValues', JSON.stringify(updatedDataFromLS));

        const updatedData = data ? [newData, ...data] : [newData]
        this.setState({ GELvalue: bitcoinInGel, data: updatedData })
    }

    gelToBitcoin = GELvalue => {
        const newData = {};
        const { currentPrice, data } = this.state;

        const gelInBitcoin =  (GELvalue / currentPrice).toFixed(4);
        const dateTime = new Date();
        const localDateTime = moment.utc(dateTime).local().format('YYYY-MM-DD HH:mm:ss');
        newData.id = data.length + 1;
        newData.convertedFrom = 'gel';
        newData.bitcoinValue = gelInBitcoin;
        newData.gelValue = GELvalue;
        newData.date = localDateTime;

        const dataFromLS = JSON.parse(localStorage.getItem('convertedValues'));
        const updatedDataFromLS = dataFromLS ? [newData, ...dataFromLS] : [newData];
        localStorage.setItem('convertedValues', JSON.stringify(updatedDataFromLS));

        const updatedData = data ? [newData, ...data] : [newData]
        this.setState({ BTCvalue: gelInBitcoin, data: updatedData })
    }

    onConvertClick = e => {
        e.preventDefault();
        const { BTCvalue, GELvalue, focused } = {...this.state};

        if(!this.state[focused]) {
            return false;
        }

        if( focused === 'BTCvalue') {
            this.bitcoinToGel(BTCvalue);
        } else {
            this.gelToBitcoin(GELvalue);
        }

        setTimeout(() => {
            const first = this.dataList.current.children[1];
            first.classList.add('adding');
        }, 0);

        setTimeout(() => {
            const first = this.dataList.current.children[1];
            first.classList.remove('adding');
        }, 500);
    }

    removeItem = valueID => {
        const data = [...this.state.data];
        const updatedData = data.filter( item=> item.id!==valueID );
        localStorage.setItem('convertedValues', JSON.stringify(updatedData));
        this.setState({ data: updatedData })
    }

    render(){
        const { data } = this.state;
        return (
            <div className="converter">
                <h2 className="main-block-title">Converter Calculator</h2>
                <form className="converter__form">
                    <span>
                        <input 
                            placeholder="0.00"
                            name="BTCvalue"
                            value={this.state.BTCvalue}
                            onChange={this.onInputChange}
                            onFocus={this.onInputFocus}
                        />
                    </span>
                    <button onClick={this.onConvertClick}><img src="/img/referral-reversed.png"  alt="referral icon" /></button>
                    <span>
                        <input 
                            placeholder="0.00" 
                            name="GELvalue"
                            value={this.state.GELvalue}
                            onChange={this.onInputChange}
                            onFocus={this.onInputFocus}
                        />
                    </span>
                </form>
                <div className="value-list" ref={this.dataList}>
                    <h3 className="value-list__title">Convertion History</h3>
                        { 
                            data && data.map( (value,) => (
                                <ConvertedItem key={value.id} value={value} removeItem={this.removeItem} />
                            ))
                        }
                </div>
            </div>
        )
    }
};

export default Converter;