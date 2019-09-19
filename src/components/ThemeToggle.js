/** @jsx jsx */
import { useColorMode } from 'theme-ui'
import { jsx } from 'theme-ui'

// add swisse & deep modes
export default props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header
      sx={{
        top: '0',
        right: '0',
        position: 'absolute',
        padding: '0',
        margin: '0'
      }}
    >
      <button
        onClick={e => {
          setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }}
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  )
}