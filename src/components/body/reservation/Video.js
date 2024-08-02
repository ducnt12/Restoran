import { videoPath } from "../../../config/config";

const Video = () => {
  return (
    <div class="video">
      <button
        type="button"
        class="btn-play"
        data-bs-toggle="modal"
        data-src={videoPath.reservation}
        data-bs-target="#videoModal"
      >
        <span></span>
      </button>
    </div>
  );
};

export default Video;
