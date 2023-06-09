function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='aboutProject__title'>Tехнологии</h2>
      <div className='techs__blocks'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='techs-table'>
          <li className='techs-table-element'>HTML</li>
          <li className='techs-table-element'>CSS</li>
          <li className='techs-table-element'>JS</li>
          <li className='techs-table-element'>React</li>
          <li className='techs-table-element'>Git</li>
          <li className='techs-table-element'>Express.js</li>
          <li className='techs-table-element'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
