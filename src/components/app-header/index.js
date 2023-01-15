import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderWrapper } from './style'

export default memo(()=>{
    return <HeaderWrapper>
        <NavLink className="mr10" to="/">HOME</NavLink>
        <NavLink className="mr10" to="detail">DETAIL</NavLink>
        <NavLink className="mr10" to="about">ABOUT</NavLink>
    </HeaderWrapper>
})