import React from 'react';

const SendRecipesPage = () => {
    return (
        <div>
            <label htmlFor="">Podaj login<input type="text" /> </label>
            <label htmlFor="">Podaj hasło<input type="password" /> </label>
            <button>Zaloguj</button>
        </div>
    );
}

export default SendRecipesPage;