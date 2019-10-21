import React, { FC, ReactNode } from "react"
import { SidebarBox, ComponentBox, InfoBox } from "./styled"

export interface SidebarProps {
  info?: ReactNode
  right?: boolean
  children?: ReactNode
}

export const Sidebar: FC<SidebarProps> = ({ info, children, right = false }: SidebarProps) => (
  <ComponentBox isRight={right}>
    <SidebarBox shadowSide={right}>{children}</SidebarBox>
    <InfoBox>{info}</InfoBox>
  </ComponentBox>
)
