function AboutProject() {
  return (
    <section className='aboutProject'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <div className='aboutProject__block'>
        <div className='aboutProject__block-module'>
          <h3 className='aboutProject__name'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='aboutProject__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='aboutProject__block-module'>
          <h3 className='aboutProject__name'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='aboutProject__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='aboutProject__line'>
        <div className='aboutProject__line-part aboutProject__line-part_green'>
          <p className='aboutProject__line-block aboutProject__line-block_green'>
            1 неделя
          </p>
          <p className='aboutProject__line-text'>Back-end</p>
        </div>
        <div className='aboutProject__line-part'>
          <p className='aboutProject__line-block'>4 недели</p>
          <p className='aboutProject__line-text'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
