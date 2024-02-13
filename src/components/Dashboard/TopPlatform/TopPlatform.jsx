import "./topplatform.css";

function TopPlatform() {
  return (
    <>
      <div className="top-platforms">
        <div className="tp-heading flex-row">
          <div className="tp-title">Top Platforms</div>
          <div className="tp-see-all">See All</div>
        </div>
        <div className="progress-bar-container">
          <div className="p-bar-title">Book Bazaar</div>
          <div className="first-progress-bar">
            <progress value="50" max="100" id="progressBar"></progress>
          </div>
          <div className="pb-under-text flex-row">
            <div className="pb-amount"> $2,500,000</div>
            <div className="pb-percent">+15%</div>
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="p-bar-title">Artisan Aisle</div>
          <div className="second-progress-bar">
            <progress value="45" max="100" id="progressBar"></progress>
          </div>
          <div className="pb-under-text flex-row">
            <div className="pb-amount"> $1,800,000</div>
            <div className="pb-percent">+10%</div>
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="p-bar-title">Toy Troop</div>
          <div className="third-progress-bar">
            <progress value="25" max="100" id="progressBar"></progress>
          </div>
          <div className="pb-under-text flex-row">
            <div className="pb-amount"> $1,200,000</div>
            <div className="pb-percent">+8%</div>
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="p-bar-title">Toy Troop</div>
          <div className="fourth-progress-bar">
            <progress value="25" max="100" id="progressBar"></progress>
          </div>
          <div className="pb-under-text flex-row">
            <div className="pb-amount"> $1,100,000</div>
            <div className="pb-percent">+11%</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopPlatform;
