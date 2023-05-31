import { useEffect, useState } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
// import { Routes, Route } from 'react-router-dom';
import Loading from './Loading';

function App() {
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    callToApi().then((response) => {
      setWord(response)
      console.log('La palabra es: ' + response);
      setIsLoading(false)
    })
  }, [])

  const handleLetter = (value) => {
    const includesLetter = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;
    if (value.search(includesLetter) !== -1) {
      setLastLetter(value);
      setUserLetters([...userLetters, value]);
    }
  }

  const lettersWrong = userLetters.filter(userLetter => !word.includes(userLetter));

  return (
    <div className="page">
      <Loading loading={isLoading}></Loading>
      <Header />
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />
          <ErrorLetters lettersWrong={lettersWrong} />
          <Form handleOnChange={handleLetter} valueInput={lastLetter} />
        </section>
        <Dummy numberOfErrors={lettersWrong.length} />
      </main>
    </div>
  );
}

export default App;
