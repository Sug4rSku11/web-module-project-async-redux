import React, { useEffect } from 'react';
import { connect } from 'react-redux';


const Memes = (props) => {
    const { memes, isFetching, error, getMemes } = props;

    useEffect(() => {
        getMemes();
    }, [getMemes]);
    if(error){
        return <h2>Ooops! {error}</h2>;
    }
    if(isFetching){
        return <h2>Fetching Memes... 😎</h2>;
    }
    const handleClick = () => {
        getMemes();
    }
    return (
        <div> { memes && 
                <div>
                    <img src={memes.url}/>
                    <h2>Meme: {memes.name}</h2>
                    </div>}
                <button onClick={handleClick}>Get New Meme 😝</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        memes: state.memes,
        isFetching: state.isFetching,
        error: state.error
    };
};
export default connect(mapStateToProps, {getMemes, fetchFail })(Memes);