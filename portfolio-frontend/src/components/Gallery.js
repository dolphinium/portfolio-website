import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Repeat the following block for each image */}
          <div>
            <img src="/assets/images/gergonaz.jpg" alt="Gallery Item" className="rounded shadow-md" />
          </div>
          <div>
            <img src="/assets/images/us.jpg" alt="Gallery Item" className="rounded shadow-md" />
          </div>
          <div>
            <img src="/assets/images/graduate.jpg" alt="Gallery Item" className="rounded shadow-md" />
          </div>
          <div>
            <img src="/assets/images/thesis.jpg" alt="Gallery Item" className="rounded shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
