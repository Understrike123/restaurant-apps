const createLikeButtonTemplate = () => `
  <button aria-label="tambahkan ke daftar favorite" id="likeButton" class="buttonLike">
    <i aria-hidden="true" class="fa fa-heart-o"></i>
  </button>
  `;

const createLikedButtonTemplate = () => `
  <button aria-label="pindahkan dari daftar favorite" id="likeButton" class="buttonLike">
    <i aria-hidden="true" class="fa fa-heart"></i>
  </button>
  
  `;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
