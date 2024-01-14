import BlogImage from '../../assets/blog_image-1.jpg';
const BlogPage = () => {
  return (
    <div className="max-w-5xl mx-auto my-5">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[60vh] rounded-lg lg:w-full"
            src={BlogImage}
            alt="Burger"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            FROM DRIVE-THRUS TO DELIGHTS: FAST FOOD STORIES
          </h2>
          <p>
            In the heart of the bustling city, where hunger lurks around every
            corner, there exists a haven for burger enthusiasts – "Sizzling
            Bites." This fast-food joint, tucked away between towering
            buildings, has become synonymous with mouthwatering delights and the
            sizzle of perfection. The star of the show is their signature
            burger, aptly named the "Flame-Kissed Marvel." Crafted with
            precision and a touch of culinary magic, this burger is no ordinary
            fare. Its journey begins with a juicy Angus beef patty, grilled to
            succulent perfection on an open flame that imparts a smoky essence,
            tantalizing taste buds from the first bite. Nestled within a fresh,
            toasted brioche bun, the Flame-Kissed Marvel is a symphony of
            flavors. Crisp lettuce, ripe tomatoes, and zesty pickles contribute
            to the ensemble, while a secret sauce, guarded like treasure, binds
            the elements into a harmonious crescendo. The golden, crispy fries
            on the side add a perfect crunch, completing the gastronomic
            experience. The aroma wafting from the kitchen is a symphony that
            beckons customers from blocks away. The anticipation builds as they
            approach the counter, their senses heightened by the tantalizing
            scent of the sizzling masterpiece. With every order, the kitchen
            buzzes with energy, chefs working in unison to create culinary
            poetry on a plate. Word of the Flame-Kissed Marvel has spread like
            wildfire, drawing burger enthusiasts from all walks of life. The
            restaurant buzzes with laughter, chatter, and the satisfying sounds
            of content customers relishing each bite. Sizzling Bites has become
            more than a fast-food joint; it's a destination for those seeking a
            culinary adventure, a place where the humble burger transcends its
            conventional identity. In the heart of the city, "Sizzling Bites"
            stands as a testament to the artistry of fast food, transforming a
            simple burger into an extraordinary experience. The Flame-Kissed
            Marvel is not just a meal; it's a journey through layers of flavor,
            an ode to the timeless allure of a perfectly crafted burger.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
