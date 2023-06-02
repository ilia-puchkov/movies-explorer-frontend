function Techs() {
  return (
    <section className="techs">
      <h3 className="aboutProject__title">технологии</h3>
      <hr className="aboutProject__separation"></hr>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs-table">
        <p className='techs-table-element'>HTML</p>
        <button className='techs-table-element'>CSS</button>
        <button className='techs-table-element'>JS</button>
        <button className='techs-table-element'>React</button>
        <button className='techs-table-element'>Git</button>
        <button className='techs-table-element'>Express.js</button>
        <button className='techs-table-element'>mongoDB</button>
      </div>
    </section>
  )
}

export default Techs;