import Popular from "../Genres/Categories";

const Hero = () => {
  return (
    <div className="flex flex-col gap-0 overflow-hidden md:-mt-28 lg:-mt-6 xl:-mt-36 z-40 md:px-4  2xl:px-20 ">
      <Popular apiPoint="/movie/popular?" heading="Popular Movies" />
      <Popular apiPoint="/trending/movie/week?" heading="Trending Movies" />
      <Popular apiPoint="/movie/top_rated?" heading="Top Rated Movies" />
      <Popular apiPoint="/movie/upcoming?" heading="Upcoming Movies" />
      <Popular
        apiPoint="/discover/movie?with_genres=28&"
        heading="Action Movies"
      />
      <Popular
        apiPoint="/discover/movie?with_genres=16&"
        heading="Animated Movies"
      />
      <Popular
        apiPoint="/discover/movie?with_genres=10749&"
        heading="Romance Movies"
      />
      <Popular
        apiPoint="/discover/movie?with_genres=27&"
        heading="Horror Movies"
      />
      <Popular
        apiPoint="/discover/movie?with_genres=35&"
        heading="Comedy Movies"
      />
      <Popular
        apiPoint="/discover/movie?with_genres=18&"
        heading="Drama Movies"
      />
    </div>
  );
};
export default Hero;
