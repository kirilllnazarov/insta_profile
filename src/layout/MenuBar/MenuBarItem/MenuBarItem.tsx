import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../components/Icon/Icon'

type Props = {
    iconId: string
}

export const MenuBarItem = ({iconId}: Props) => {
  return (
    <StyledMenuBarItem>
        <Icon iconId={iconId} width='28' height='28'/>
    </StyledMenuBarItem>
  )
}

const StyledMenuBarItem = styled.div`
padding: 16px 16px 12px

`