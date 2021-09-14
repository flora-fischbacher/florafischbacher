export function threeDimensionalEffect(node) {
  const handleImageRotation = (e) => {
    const xVal = e.layerX;
    const yVal = e.layerY;

    const yRotation = 20 * ((xVal - e.target.width / 2) / e.target.width);
    const xRotation = -20 * ((yVal - e.target.height / 2) / e.target.height);

    const transformation = `perspective(500px) scale3d(1.1, 1.1, 1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

    e.target.style.transform = transformation;
    // e.target.style.boxShadow = '0px 0px 20px rgba(0,0,0, 0.2)';
    // e.target.style.transition = 'box-shadow 0.1s, transform 0.1s';
    e.target.style.transition = "transform 0.1s";
  };

  const backToInitialPosition = (e) => {
    e.target.style.transform =
      "perspective(500px) scale3d(1, 1, 1) rotateX(0) rotateY(0)";
    // e.target.style.boxShadow = 'none';
  };

  node.addEventListener("mousemove", handleImageRotation);
  node.addEventListener("mouseout", backToInitialPosition);

  return {
    destroy() {
      node.removeEventListener("mousemove", handleImageRotation);
      node.removeEventListener("mouseout", backToInitialPosition);
    },
  };
}
