import React from 'react';

const FlagMaps = (code) => {
    return {
        "ca": "🇨🇦",
        "kr": "🇰🇷",
        "ph": "🇵🇭"
    }[code];
}

const Flags = (props) => (
    <span role="img" aria-labelledby={`:flag-${props.code}`}>
        { FlagMaps(props.code) }
    </span>
);

export default Flags;