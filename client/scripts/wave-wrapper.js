import ReactDOM from "react-dom"
import React from "react"
import { Wave } from "./wave-text"

const rootEl = document.getElementById("wave-wrapper")

rootEl && ReactDOM.render(<Wave />, rootEl)
