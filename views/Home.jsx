const React = require('react');
const Default = require('./layouts/Default');

const Home = () => {
    return (
        <Default>
            <h2>Home Page</h2>
            <p>Welcome to an Awesome App about Breads!</p>
        </Default>
    );
};

module.exports = Home;