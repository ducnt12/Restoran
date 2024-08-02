const Images = (props) => {
  return (
    <div class="row g-3">
      {props.imgSrc.map((img) => (
        <div class={`col-6 ${img.divClass}`}>
          <img
            class={img.imgClass}
            data-wow-delay="0.1s"
            src={`resources/${img.img}`}
            style={img.style}
            alt="Alt"
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
