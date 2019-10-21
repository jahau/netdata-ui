import React, { useState } from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"
import { Checkbox } from "."
import { getGutterHeight } from "../../theme/utils"
import { readmeCleanup } from "../../../utils/readme"
// @ts-ignore
import readme from "./README.md"

const checkBoxStory = storiesOf("Checkbox", module)

const subData = {
  readme: {
    sidebar: readmeCleanup(readme),
  },
  jest: ["checkbox.test.tsx"],
}

checkBoxStory.add(
  "Controlled Checkbox",
  () => {
    const [checked, setChecked] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.currentTarget.checked)
    }
    return <Checkbox onChange={handleChange} checked={checked} />
  },
  subData
)

checkBoxStory.add(
  "Labeled Checkbox",
  () => {
    const [checked, setChecked] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.currentTarget.checked)
    }
    return (
      <Checkbox
        label={text("label", "Do you like greek salad?")}
        onChange={handleChange}
        checked={checked}
      />
    )
  },
  subData
)

checkBoxStory.add(
  "Left Labeled Checkbox",
  () => {
    const [checked, setChecked] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.currentTarget.checked)
    }
    return (
      <Checkbox
        labelPosition={text("labelPosition", "left") as "left" | "right"}
        label={text("label", "Do you like Soviet Russia?")}
        onChange={handleChange}
        checked={checked}
      />
    )
  },
  subData
)

const StyledCheckbox = styled(Checkbox)`
  margin-bottom: ${getGutterHeight};
`

const CheckboxGroup = styled.div``

checkBoxStory.add(
  "Labeled Checkbox Group",
  () => {
    const [checkedOne, setCheckedOne] = useState(false)
    const [checkedTwo, setCheckedTwo] = useState(false)
    const [checkedThree, setCheckedThree] = useState(false)

    const handleChange = (setter: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.currentTarget.checked)
    }
    return (
      <CheckboxGroup>
        <StyledCheckbox
          label="Do you like greek salad?"
          onChange={handleChange(setCheckedTwo)}
          checked={checkedTwo}
        />
        <StyledCheckbox
          label="Do you like sguschenka?"
          onChange={handleChange(setCheckedOne)}
          checked={checkedOne}
        />
        <StyledCheckbox
          label="Was this story useful?"
          onChange={handleChange(setCheckedThree)}
          checked={checkedThree}
        />
      </CheckboxGroup>
    )
  },
  subData
)