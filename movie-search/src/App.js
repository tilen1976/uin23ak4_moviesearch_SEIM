import './css/main.css';

function App() {
  return (
    <div className="container">
      <header className="page-header">
        <h1>Tekst</h1>
       
      </header>
      <nav className="navigation">
          <a href="#noe" className='nav-links'>Noe</a>
          <a href="#noe2" className='nav-links'>Noe2</a>
        </nav>
      <aside className="search-bar">
        <h3>Søk</h3>
        <section className="search-section">
            <form></form>
        </section>
      </aside>
      <main className='main-content'>
        <article className="page-content">
          <h2>Innhold</h2>
          <ul>
            <li>Film 1</li>
            <li>Film 2</li>
            <li>Film 3</li>
            <li>Film 4</li>
          </ul>

        </article>
        
      </main>
      <footer className='info-label'>
        Laget av noen
      </footer>
    
    </div>
  );
}

export default App;
