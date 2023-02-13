import React from 'react';
import { useSelector } from 'react-redux';
import { SectionContainer } from './SectionContainer';

function Words(props) {
    const {user} = useSelector((state) => state);

    return (
        <SectionContainer>
            <h1>Words ({user.words.seen.length + user.words.known.length})</h1>
            {!user.loggedIn ? null :(<>
                <h3>Known Words ({user.words.known.length}):</h3>
                <ul>
                    {user.words.known.map((word, i) => {
                        return (<li key={i}>{word.word}</li>)
                    })}
                </ul>
                <h3>Seen Words ({user.words.seen.length}):</h3>
                <ul>
                    {user.words.seen.map((word, i) => {
                        return (<li key={i}>{word.word}</li>)
                    })}
                </ul>
            </>)}
        </SectionContainer>
    )
}

export default Words;