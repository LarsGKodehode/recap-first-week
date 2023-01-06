function App() {
  return (
    <>
      <header>
        <h1>Header section</h1>
      </header>

      <main>
        <h1>Main section</h1>

        <ProjectCard
          title="Another Name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, vel."
        />

        <ProjectCard
          title="Somthing Else"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, vel."
        />

      </main>

      <footer>
        <h1>Footer section</h1>
      </footer>
    </>
  )
}

function ProjectCard(props) {
  return (
    <div className='Project Card Some other classes'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default App
