export default function Rating({setRating}) {
    return (
      <>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="1 star"
            value={1}
            onChange={(e) => setRating(e.target.value)}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="2 star"
            value={2}
            onChange={(e) => setRating(e.target.value)}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={3}
            onChange={(e) => setRating(e.target.value)}
            aria-label="3 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={4}
            onChange={(e) => setRating(e.target.value)}
            aria-label="4 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={5}
            onChange={(e) => setRating(e.target.value)}
            aria-label="5 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={6}
            onChange={(e) => setRating(e.target.value)}
            aria-label="6 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={7}
            onChange={(e) => setRating(e.target.value)}
            aria-label="7 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={8}
            onChange={(e) => setRating(e.target.value)}
            aria-label="8 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={9}
            onChange={(e) => setRating(e.target.value)}
            aria-label="9 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={10}
            onChange={(e) => setRating(e.target.value)}
            aria-label="10 star"
          />
        </div>
      </>
    );
}