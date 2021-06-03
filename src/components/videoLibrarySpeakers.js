import React from "react"
import Speaker2 from "../images/speaker2.svg"
import Speaker1 from "../images/speaker1.svg"

const VideoLibrarySpeakers = ({ speakers, allAuthors }) => {
  return (
    <section className="100% bg-whiteColor-custom">
      <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap sm:pb-24 pb-6">
        <h3 className="w-full my-2 text-4xl md:text-5xl text-dark font-bold leading-tight mb-8 md:mb-20 mt-6 md:mt-28">
          Speakers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {speakers.map(ii => {
            let l_currentAuthor = allAuthors.edges.find(
              oo => oo.node._id === ii._ref
            )

            return (
              <div
                key={ii._key}
                className="w-full sm:p-6 sm:pl-0 sm:pr-3.5 speaker rounded-2xl"
              >
                <div className=" py-12 sm:px-14 px-6 flex flex-col items-center text-center">
                  <div className="speaker-pic">
                    <img
                      src={l_currentAuthor.node.author_image.asset.url}
                      alt={l_currentAuthor.node.author_name}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="speaker_name flex flex-col my-8">
                    <label className="mb-1.5 leading-6 font-medium">
                      {l_currentAuthor.node.author_name}
                    </label>
                    <span className="leading-6">
                      {l_currentAuthor.node.author_position}
                    </span>
                  </div>
                  <p className="leading-6">
                    {l_currentAuthor.node.author_desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default VideoLibrarySpeakers
