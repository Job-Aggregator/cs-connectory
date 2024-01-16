function HeroHeader() {
  return (
    <div className="hero bg-base-200" style={{ height: '50vh' }}>
      {' '}
      {/* Adjust the height */}
      <div className="hero-content text-center">
        <div className="max-w-lg">
          {' '}
          {/* Increase the width if needed */}
          <h1 className="text-7xl font-bold">Hello there</h1>{' '}
          {/* Larger text */}
          <p className="py-6 text-xl">
            {' '}
            {/* Larger paragraph text */}
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-lg">Get Started</button>{' '}
          {/* Larger button */}
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
