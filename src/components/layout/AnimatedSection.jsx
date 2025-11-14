// The 'animation' prop defaults to "fade-up" if not provided.
function AnimatedSection({ children, animation = "fade-up" }) {
  return (
    // We use a <section> tag here, which is good for page structure.
    // The py-16 class adds padding to the top and bottom for spacing.
    <section data-aos={animation} className="py-16 px-4">
      {/* The content of your section will be rendered inside. */}
      {children}
    </section>
  );
}

export default AnimatedSection;
