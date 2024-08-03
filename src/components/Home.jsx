import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from 'react';

const Home = () => {

    const genAI = new GoogleGenerativeAI('AIzaSyB144MxecTTLIuhN4umiFekR9c3vHBk7cE');
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    async function aiRun() {
        setLoading(true);
        // setLoading(false);
    }

    async function aiRun() {
        const prompt = search;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
    }

    const handleClick = () => {
        aiRun();
    }

    return (
        <div>
            <h1>Generative AI Restaurant App!</h1>
            <p>Built with ❤️ using ReactJS + Redux + Google Gemini</p>

            <div style={{ display: 'flex' }}>
                <input placeholder='Search using Generative AI' onChange={(e) => handleChangeSearch(e)} />
                <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Search</button>
            </div>

            {
                loading == true && search != '' ?
                    <p style={{ margin: '30px 0' }}>Loading ...</p>
                    :
                    <div style={{ margin: '30px 0' }}>
                        <p>{aiResponse}</p>
                    </div>
            }
        </div>
    );
};

export default Home;