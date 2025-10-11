import './App.css'

export function App() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt="avatar de adzafic" src="https://unavatar.io/adzafic" />
        <div className='tw-followCard-info'>
          <strong>Adnan Dzafic</strong>
          <span className='tw-followCard-infoUserName'>@dzafic</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  );
}
