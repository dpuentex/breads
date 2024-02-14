const React = require('react');
const Default = require('./layouts/Default');

const Detail = ({ bread }) => {
    return (
        <Default>
            <h2>Detail Page</h2>
            <h3>{bread.name}</h3>
            <img src={bread.image} alt={bread.name} />
            <p>{bread.hasGluten ? 'Has gluten' : 'Gluten free!'}</p>
        </Default>
    );
};

module.exports = Detail;