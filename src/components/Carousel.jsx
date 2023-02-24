import React from "react";

const Carousel = () => {
  return (
    <div id="animation-carousel" class="relative" data-carousel="static">
      {/* carousel wrappper */}
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* item 1 */}
        <div class="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src="https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/Vonzy-213.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* item 1 */}
        <div
          class="https://api.duniagames.co.id/api/content/upload/file/13601127281674704959.jpg"
          data-carousel-item
        >
          <img
            src="https://esports-indonesia.com/wp-content/uploads/2022/12/Vonzy-753x445.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* item 1 */}
        <div
          class="hidden duration-200 ease-linear"
          data-carousel-item="active"
        >
          <img
            src="https://asset-a.grid.id/crop/11x39:1062x833/700x465/photo/2022/11/10/screenshot_20221110_170242jpg-20221110050252.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* item 1 */}
        <div class="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src="https://digstraksi.com/wp-content/uploads/2022/09/277817724_645883533182802_8931139240963147517_n.jpeg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* item 1 */}
        <div class="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src="https://thumb.intipseleb.com/media/frontend/thumbs3/2022/08/15/62f9ddabefa01-vonny-felicia_1265_711.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* slider controller */}
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
