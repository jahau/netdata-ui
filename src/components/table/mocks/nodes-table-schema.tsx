import React, { useRef, useState } from "react"
import { useDebounce, useIntersection } from "react-use"

const InsteadOfChart = () => {
  const nodeRef = useRef(null)
  const intersection = useIntersection(nodeRef, {
    root: null,
    rootMargin: "0px",
    threshold: undefined,
  })

  // debounce visibility so we see transition changes
  const isVisible = Boolean(intersection?.intersectionRatio)
  const [ isVisibleDebounced, setIsVisibleDebounced ] = useState(isVisible)
  useDebounce(
    () => {
      setIsVisibleDebounced(isVisible)
    },
    1000,
    [isVisible],
  )

  console.log("isVisible", isVisible) // eslint-disable-line no-console
  return (
    <div
      ref={nodeRef}
      style={{ background: isVisibleDebounced ? "green" : "red" }}
    >
      CHART
    </div>
  )
}


export const NodesTableSchema = [
  {
    id: "alarm",
    accessor: "alarm",
    width: 40,
    Header: () => {
      return <div />
    },
    Cell: ({ row, cell }: any) => {
      return <div>C: 0</div>
    },
  },
  {
    id: "node",
    accessor: row => {
      return row.node.name
    },
    width: 160,
    Header: ({ column }: any) => {
      return <div {...column.getGroupByToggleProps()}>Node name</div>
    },
    Cell: ({ cell, row }: any) => {
      const {
        node: { name },
      } = row.original
      return <div>{name}</div>
    },
  },

  {
    id: "chart",
    accessor: "chart",
    width: 200,
    Header: () => <div>Chart Name</div>,
    Cell: (props: any) => <div>Chart placeholder</div>,
  },
  {
    id: "chart2",
    accessor: "chart2",
    width: 200,
    Header: () => <div>Chart Name</div>,
    Cell: (props: any) => <div>Chart placeholder</div>,
  },
  {
    id: "chart3",
    accessor: "chart3",
    width: 200,
    Header: () => <div>Chart Name</div>,
    Cell: (props: any) => <div>Chart placeholder</div>,
  },
  {
    id: "chart4",
    accessor: "chart4",
    width: 200,
    Header: () => <div>Chart Name</div>,
    Cell: InsteadOfChart,
  },
]
