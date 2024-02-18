import React from 'react'

type Props = {}

function Thanks({}: Props) {
  return (
    <div id="wrapper">
  <div id="header">
    <div className="header_inner">
      <div className="header_content">
        <div id="logo">
          <a href="#" />
        </div>
      </div>
    </div>
  </div>
  <div id="container">
    <div className="section section_video">
      <div className="section_container"></div>
    </div>
    <div className="content">
      <div className="starter__heading" style={{ textAlign: "center" }}>
        <b>You have successfully registered!</b>
        <br />
        <br />
        <span>
          Dont forget to answer our managers call
          <br />
          to reserve your place in the program!
        </span>
      </div>
    </div>
  </div>
</div>

  )
}

export default Thanks