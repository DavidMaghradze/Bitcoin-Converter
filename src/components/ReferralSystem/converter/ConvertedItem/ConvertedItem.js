import React, { useState, useEffect } from 'react';

const ConvertedItem = ({value, removeItem}) => {

    const [ isRemoving, setRemoveItem ] = useState({});

    const setRemove = value => setRemoveItem(value);

    const onRemove = value => {
        setRemove(value);
        setTimeout(() => {
            setRemoveItem({});
            removeItem(value.id);
        }, 500);
    }

    return (
        <div className={`item ${isRemoving.id===value.id && 'removing'} ${value.convertedFrom==='bitcoin' ? 'btc' : ''}`}>
            {
                value.convertedFrom==='bitcoin' ?
                <>
                    <div>
                        {value.bitcoinValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} <span>btc</span> <img src="/img/bitcoin-icon.png" alt="bitcoin icon" />
                    </div>
                    <div>
                        {value.gelValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} <span>gel</span> <img src="/img/lari-icon.png" alt="lari icon" />
                    </div>
                </> :
                <>
                    <div>
                        {value.gelValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} <span>gel</span> <img src="/img/lari-icon.png" alt="lari icon" />
                    </div>
                    <div>
                        {value.bitcoinValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} <span>btc</span> <img src="/img/bitcoin-icon.png" alt="lari icon" />
                    </div>
                </>
            }
            <span>{value.date}</span>
            <button className="remove-btn" onClick={()=>onRemove(value)}><i className="far fa-times-circle"></i></button>
        </div>
    )
};

export default ConvertedItem;