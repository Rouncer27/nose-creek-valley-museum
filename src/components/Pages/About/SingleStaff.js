import React, { useState } from "react"
import styled from "styled-components"

import OutsideBio from "./OutsideBio"
import InsideBio from "./InsideBio"

const SingleStaff = ({ member }) => {
  const [isActive, setActive] = useState(false)

  console.log(isActive)

  return (
    <div className="staff__container">
      <OutsideBio member={member} isActive={isActive} setActive={setActive} />
      <InsideBio member={member} isActive={isActive} setActive={setActive} />
    </div>
  )
}

export default SingleStaff
