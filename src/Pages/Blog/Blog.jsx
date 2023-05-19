import React from 'react';

const Blog = () => {
    return (
        <div className='m-10'>
            <h2 className='text-center text-5xl mb-5'><u>This is Blog Page</u></h2> <hr />

            <p>Q1.What is an access token and refresh token?</p>
            <p>Ans:A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>

            <p>Q2.How do they work and where should we store them on the client-side?</p>
            <p>Ans:Client-side storage works on similar principles, but has different uses. It consists of JavaScript APIs that allow you to store data on the client  and then retrieve it when needed. This has many distinct uses, such as:

                1.Personalizing site preferences.
                2.Persisting previous site activity (e.g. storing the contents of a shopping cart from a previous session, remembering if a user was previously logged in).
               3 Saving data and assets locally so a site will be quicker (and potentially less 5.expensive) to download, or be usable without a network connection.
                Saving web application generated documents locally for use offline</p>
            <p>Q3.Compare SQL and NoSQL databases?</p>
            <p>Ans:SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
            <p>Q4.What is express js?</p>
            <p>Ans:Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
            <p>Q5.What is MongoDB aggregate and how does it work?</p>
            <p>Ans:What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            <p>Q6.What is Nest JS?</p>
            <p>Ans:Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
        </div>
    );
};

export default Blog;