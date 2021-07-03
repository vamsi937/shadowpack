function shadowpacker(options) {
  let images = document.querySelectorAll(".shadowpacker");
  let shadowColor = !options.shadow_color
    ? "rgba( 0, 0, 0, 0.12)"
    : options.shadow_color;

  if (options.shadow_type === "hard") {
    options.shadow_type = "0px";
  } else {
    options.shadow_type = "15px";
  }

  images.forEach((image) => {
    image.style.boxShadow = `10px 10px ${options.shadow_type} 1px ${shadowColor}`;

    if (options.padding) {
      image.style.padding = !options.padding_distance
        ? "1em"
        : options.padding_distance;
    }

    if (options.shadow_animate) {
      let darkShadow = true;
      window.setInterval(
        function () {
          image.style.boxShadow = `10px 10px ${options.shadow_type} 1px ${
            darkShadow ? "#ccc" : "#000"
          }`;
          darkShadow = !darkShadow;
        },
        !options.shadow_animation_duration
          ? 1000
          : options.shadow_animation_duration * 1000
      );
    }
  });
}

//shadow_animate
//shadow_animation_duration

module.exports.shadowpacker = shadowpacker;
