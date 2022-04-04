import React from 'react';

const Blogs = () => {
    return (
        <div>
            <article>
                <h1>What Is Context API?</h1>
                <img width="400px" height="500px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--oxQNUXvS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/mpjv5mkzc9bc2zsns3ex.png" alt="" />
                <p>context API is a way to pass data individually to the needed component.
                    If any data is sent without it, there is a possibility of getting other components besides the specific component.
                    When you need to send data directly to any place you need without using any medium, you need to use Context API.
                </p>
            </article>
            <article>
                <h1>What is Semantic Tag?</h1>
                <img width="500px" height="300px" src="https://daveceddia.com/images/context-vs-redux.png" alt="" />
                <p>There are some tags in the previous HTML, which could not be understood purpose by looking at     the tags. The semantic tag has easily solved this problem. A semantic tag is a tag that makes it easy to see what topics are being talked about on the website.
                </p>
            </article>
        </div>
    );
};

export default Blogs;