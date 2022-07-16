import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src="https://imageengine.victorinox.com/mediahub/31970/640Wx560H/CUT_8_0904_10__S1.jpg" />
      <h2>WIN</h2>
    </div>
  )
}

export default Box