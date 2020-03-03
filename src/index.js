import * as React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import {lighten, LinearProgress} from '@material-ui/core'

const BorderLinearProgress = makeStyles(theme => ({
  root: {
    height: 10,
    backgroundColor: lighten('#000', 0.8),
    margin: 12
  },
  bar: {
    borderRadius: 0,
    backgroundColor: '#ff00ef'
  }
}))

const ReactProgressLineBar = (props) => {
  const classesBorderLinearProgress = BorderLinearProgress()

  const {value} = props

  return (
    <React.Fragment>
      <LinearProgress
        classes={classesBorderLinearProgress}
        variant="determinate"
        color="secondary"
        value={value || 0}
      />
    </React.Fragment>
  )
}

ReactProgressLineBar.propTypes = {
  value: PropTypes.number.isRequired
}

export default ReactProgressLineBar
