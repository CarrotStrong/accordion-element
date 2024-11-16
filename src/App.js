import "./App.css";

function App() {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-header">Section 1</div>
        <div className="accordion-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">Section 2</div>
        <div className="accordion-content">
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">Section 3</div>
        <div className="accordion-content">
          Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </div>
      </div>
    </div>
  );
}

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    header.classList.toggle("active");

    content.style.maxHeight = content.style.maxHeight
      ? null
      : content.scrollHeight + "px";
    // automatically adjusting max-height depending on content
  });
});

export default App;
