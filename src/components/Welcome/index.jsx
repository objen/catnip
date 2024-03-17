function Welcome() {
  return (
  <>
  <section className="py-14 h-screen">
     <img src="../iconmonstr-cat-3 (1).svg" className="mx-auto size-40 rounded-full border-blue-dark border-8" alt="a circular logo with a stylised cute cat face"></img>
      <h1 className='pt-10 text-center font-display font-bold text-9xl'>CatNip!</h1> 
      <h2 className='text-center font-body text-4xl'>the game</h2>
      <div className="flex flex-row mx-auto my-5 flex gap-4 p-8 justify-center">
        <div className="px-3 py-2 rounded-3xl border-blue-dark border-4 text-xl">How To Play</div>
        <div className="px-3 py-2 rounded-3xl border-blue-dark border-4 text-xl">New Game</div>
      </div>
      </section>
  </>
  )
}

export default Welcome