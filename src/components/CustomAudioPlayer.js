import * as React from "react"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

const CustomAudioPlayer = props => {
  if (!props.asset?._ref) {
    return null
  }

  const { _ref: ref } = props.asset
  // Example:
  // From: file-ff7d1c2d7bd5ac367359d57f0319f5f458bc3c3d-m4a
  // To: https://cdn.sanity.io/files/q2j8cwsg/production/ff7sfgc2d7bd5ac367359d57f0319f5f458bc3c3d.m4a?dl

  const assetRefParts = ref.split("-") // ["file", "ff7...", "m4a"]
  const id = assetRefParts[1] // "ff7..."
  const format = assetRefParts[2] // "m4a"
  const assetUrl = `https://cdn.sanity.io/files/${process.env.RS_SANITY_PROJECTID}/${process.env.RS_SANITY_DATASET}/${id}.${format}`

  return (
    <AudioPlayer
      // autoPlay
      src={assetUrl}
      customAdditionalControls={[]}
      // onPlay={e => console.log("onPlay")}
      // other props here
    />
  )
}

export default CustomAudioPlayer

// const AudioPlayer = (props) => {
//   // Used to store the audio element once instanciated
//   const [audioEl, setAudioEl] = React.useState()

//   if (!props.asset?._ref) {
//     return null
//   }

//   const { _ref: ref } = props.asset
//   // Example:
//   // From: file-ff7d1c2d7bd5ac367359d57f0319f5f458bc3c3d-m4a
//   // To: https://cdn.sanity.io/files/q2j8cwsg/production/ff7sfgc2d7bd5ac367359d57f0319f5f458bc3c3d.m4a?dl

//   const assetRefParts = ref.split('-') // ["file", "ff7...", "m4a"]
//   const id = assetRefParts[1] // "ff7..."
//   const format = assetRefParts[2] // "m4a"
//   const assetUrl = `https://cdn.sanity.io/files/${process.env.RS_SANITY_PROJECTID}/${process.env.RS_SANITY_DATASET}/${id}.${format}`

//   function playAudio() {
//     try {
//       if (!audioEl) {
//         const audio = new Audio(assetUrl)
//         setAudioEl(audio)
//         audio.play()
//       } else {
//         audioEl.play()
//       }
//     } catch (error) {}
//   }
//   return (
//     <button onClick={playAudio} aria-label="Play audio">
//       🔊
//     </button>
//   )
// }

// export default AudioPlayer
