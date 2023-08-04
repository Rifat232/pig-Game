'use strict';
const currentScr0 = document.getElementById( 'current--0' );
const currentScr1 = document.getElementById( 'current--1' );
const score0El = document.querySelector( '#score--0' );
const score1El = document.querySelector( '#score--1' );
const btnRoll = document.querySelector( '.btn--roll' );
const DiceSelection = document.querySelector( '.dice' );
let player0el = document.querySelector( '.player--0' );
let player1el = document.querySelector( '.player--1' );
const btnHold = document.querySelector( '.btn--hold' );
const btnRestart = document.querySelector( '.btn--new' );
score0El.textContent = 0;
score1El.textContent = 0;
DiceSelection.classList.add( 'hidden' );
let currentScore = 0;
let activePlayer = 0;
let scores = [ 0, 0 ];
let playing = true;


btnRoll.addEventListener( 'click', function ()
{
    if ( playing )
    {
        const dice = Math.trunc( Math.random() * 6 ) + 1;
        DiceSelection.classList.remove( 'hidden' );
        DiceSelection.src = `dice-${ dice }.png`;

        if ( dice !== 1 )
        {
            currentScore += dice;
            document.getElementById( `current--${ activePlayer }` ).textContent = currentScore;
        }
        else
        {
            document.getElementById( `current--${ activePlayer }` ).textContent = 0;
            currentScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0el.classList.toggle( 'player--active' );
            player1el.classList.toggle( 'player--active' );
        }

    }
} );

btnHold.addEventListener( 'click', function ()
{
    if ( playing )
    {
        scores[ activePlayer ] += currentScore;
        document.getElementById( `score--${ activePlayer }` ).textContent = scores[ activePlayer ];

        if ( scores[ activePlayer ] >= 20 )
        {
            playing = false;
            DiceSelection.classList.add( 'hidden' );
            currentScr0.textContent = 0;
            currentScr1.textContent = 0;
            document.querySelector( `.player--${ activePlayer }` ).classList.remove( 'player--active' );
            document.querySelector( `.player--${ activePlayer }` ).classList.add( 'player--winner' );

        }
        else
        {
            document.getElementById( `current--${ activePlayer }` ).textContent = 0;
            currentScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0el.classList.toggle( 'player--active' );
            player1el.classList.toggle( 'player--active' );
        }
    }
} );
    
btnRestart.addEventListener( 'click', function ()
{
    currentScore = 0;
    activePlayer = 0;
    scores = [ 0, 0 ];
    playing = true;
    currentScr0.textContent = 0;
    currentScr1.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    DiceSelection.classList.add( 'hidden' );
    player0el.classList.remove( 'player--winner' );
    player1el.classList.remove( 'player--winner' );
    player0el.classList.add( 'player--active' );
    player1el.classList.remove( 'player--active' );
} );